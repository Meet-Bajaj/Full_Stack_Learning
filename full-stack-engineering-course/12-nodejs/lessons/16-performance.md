# Lesson 16: Node.js Performance and Scaling

## 1. The Cluster Module
Node runs on a single thread. If you deploy a Node app to an 8-core AWS server, it will only use 1 core, wasting 87% of the CPU.
The `cluster` module allows you to spawn multiple Node processes (workers) that share the same port.

```javascript
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork(); // Spawn worker for each CPU core
  }
} else {
  http.createServer((req, res) => {
    res.end('Hello from Worker ' + process.pid);
  }).listen(8000);
}
```
*Note: In modern deployments, tools like PM2 (`pm2 start app.js -i max`) or Docker/Kubernetes handle clustering for you.*

## 2. Memory Leaks and Garbage Collection
JavaScript is garbage collected, but you can still cause memory leaks:
- Storing large amounts of data in global variables.
- Closures that hold onto large objects.
- Not removing Event Listeners (`EventEmitter.removeListener`).

**How to find them:** Take heap snapshots using Chrome DevTools via `node --inspect` and compare them over time.

## 3. Event Loop Lag
If your event loop lag exceeds 50-100ms, your app feels unresponsive. You can monitor this using `perf_hooks`.

## 4. Caching
Reduce CPU and Database load by caching expensive operations. Use **Redis** or in-memory caches (like `node-cache`) to store frequently requested data.

## Summary Checklist
- [ ] Understand horizontal scaling via the `cluster` module.
- [ ] Identify common causes of memory leaks in JS.
- [ ] Understand how to track Event Loop Lag.
- [ ] Apply caching strategies.
