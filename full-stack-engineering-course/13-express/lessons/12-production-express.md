# Lesson 12: Production Express

## 🎯 Learning Objectives
- Learn how to deploy Express apps using a process manager (PM2).
- Understand Node.js clustering to utilize multi-core CPUs.
- Implement Graceful Shutdown.
- Implement Health Checks and Compression.

## 🧠 Mental Model: The Restaurant Manager
Running `node server.js` is like an employee working alone. If they trip and fall (the app crashes), the restaurant closes.
Using a process manager like **PM2** is like hiring a Restaurant Manager. If an employee falls down, the manager instantly replaces them so the restaurant stays open. 
**Clustering** is hiring multiple employees (one for each CPU core) to handle high traffic simultaneously.

## 📖 Concept Explanation

### 1. Process Management with PM2
Never run `node server.js` in production. If an unhandled exception occurs, the server dies permanently.
Use PM2:
```bash
npm install -g pm2
pm2 start server.js --name "my-express-api"
```
PM2 will automatically restart the app if it crashes, monitor CPU/memory, and can start the app on server reboot.

### 2. Clustering
Node.js is single-threaded. If you run it on an 8-core server, it only uses 1 core. PM2 can automatically run your app in "Cluster Mode" to utilize all cores.
```bash
# -i max spins up a process for every available CPU core
pm2 start server.js -i max 
```

### 3. Graceful Shutdown
If your server is restarting, it shouldn't just instantly sever database connections and drop halfway-processed requests. It should stop accepting new requests, finish the current ones, and *then* shut down safely.

```javascript
const server = app.listen(3000);

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    // Close database connections here
    db.close(() => {
      console.log('Database connection closed');
      process.exit(0);
    });
  });
});
```

### 4. Compression
In production, you should compress JSON and text responses to save bandwidth and speed up load times using GZIP.

```javascript
const compression = require('compression');

// Compress all responses
app.use(compression());
```

### 5. Health Checks
Cloud providers (AWS, Kubernetes) need to know if your app is actually healthy, not just if the port is open. A health check endpoint does a quick diagnostic.

```javascript
app.get('/health', async (req, res) => {
  try {
    // Ping database to ensure connection is alive
    await db.ping();
    res.status(200).json({ status: 'UP', db: 'UP' });
  } catch (error) {
    res.status(503).json({ status: 'DOWN', db: 'DOWN' });
  }
});
```

## ⚠️ Common Mistakes
- **Console.log in Production:** `console.log` is synchronous and can block the event loop under heavy load. Use a robust logger like `winston` or `pino`.
- **Serving static assets via Express in production:** Express is bad at serving static files (images, css) in high-traffic environments. Put NGINX or a CDN in front of Express to serve static assets.

## 🏋️ Exercises
1. Install PM2 and run a simple Express app in cluster mode. Observe the logs.
2. Implement a `SIGINT` (Ctrl+C) graceful shutdown handler in your server.

## ✅ Summary Checklist
- [ ] I know why running `node app.js` directly in production is bad.
- [ ] I can use PM2 to manage processes and utilize clustering.
- [ ] I understand the importance of graceful shutdown.
- [ ] I know how to implement compression and health checks.
