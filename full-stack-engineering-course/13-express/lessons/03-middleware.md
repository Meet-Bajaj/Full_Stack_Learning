# Lesson 03: Middleware (The Heart of Express)

## 🎯 Learning Objectives
- Understand what middleware is and why it's the core architectural pattern of Express.js.
- Learn the `next()` function and the request-response lifecycle.
- Differentiate between application-level, router-level, error-handling, and built-in middleware.
- Master the order of middleware execution.

## 🧠 Mental Model: The Assembly Line
Think of an incoming HTTP request as a raw product entering a factory on an assembly line. 
- The **Request (`req`)** is the product.
- The **Response (`res`)** is the packaging you send out.
- **Middleware** are the workers along the assembly line.

Each worker (middleware) can:
1. Examine the product (read `req`).
2. Modify the product (add properties to `req`).
3. Reject the product and throw it in the trash (send an error response).
4. Pack it and ship it immediately (send the `res`).
5. Pass it to the next worker on the line (call `next()`).

If a worker doesn't ship the product (send a response) OR pass it to the next worker (`next()`), the assembly line halts, and the product sits there forever (the client's request times out).

## 📖 Concept Explanation

In Express, a middleware function has access to the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle (commonly denoted by a variable named `next`).

```javascript
function myMiddleware(req, res, next) {
  // Do something with req or res
  console.log('Time:', Date.now());
  
  // Pass control to the next middleware
  next(); 
}
```

### Why does Middleware exist?
Express is fundamentally unopinionated. Instead of giving you a massive framework that parses JSON, handles cookies, authenticates users, and serves files out of the box, Express provides a minimal routing layer and a **middleware engine**. You plug in exactly what you need.

### The `next()` Function
Calling `next()` tells Express: *"I'm done with my job, move on to the next function in the queue."*
If you pass an argument to `next(err)`, Express instantly skips all normal middleware and jumps straight to your **error-handling middleware**.

## 💻 Code Examples & Walkthroughs

### 1. Application-Level Middleware
Application-level middleware is bound to an instance of the `express` object by using `app.use()` or `app.METHOD()`.

```javascript
const express = require('express');
const app = express();

// A simple logging middleware for ALL routes
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`);
  next(); // CRITICAL: Without this, the request hangs!
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});
```

### 2. Router-Level Middleware
Bound to an instance of `express.Router()`. It works exactly the same as application-level middleware, but it is scoped to a specific router.

```javascript
const router = express.Router();

// This middleware only runs for routes within this router
router.use((req, res, next) => {
  console.log('Router specific middleware triggered');
  next();
});

router.get('/profile', (req, res) => {
  res.send('User Profile');
});
```

### 3. Modifying the Request Object
Middleware is heavily used to attach data to the `req` object for downstream handlers to use.

```javascript
const attachUser = (req, res, next) => {
  // Simulate finding a user from a database based on a token
  req.user = { id: 1, name: 'Alice', role: 'admin' };
  next();
};

app.get('/dashboard', attachUser, (req, res) => {
  // We can now access req.user!
  res.send(`Welcome to your dashboard, ${req.user.name}`);
});
```

### 4. Third-Party Middleware
Instead of writing everything from scratch, you usually use robust community middleware.

```javascript
const express = require('express');
const morgan = require('morgan'); // HTTP request logger
const cors = require('cors'); // Cross-Origin Resource Sharing

const app = express();

app.use(cors()); // Enables CORS for all routes
app.use(morgan('dev')); // Logs requests to the console
app.use(express.json()); // Built-in middleware to parse JSON bodies
```

## ⚠️ Common Mistakes

1. **Forgetting `next()`:** If you don't send a response and don't call `next()`, the client will hang indefinitely until timeout.
2. **Calling `next()` after sending a response:** 
   ```javascript
   app.use((req, res, next) => {
     res.send('Done');
     next(); // ERROR! Headers already sent.
   });
   ```
3. **Wrong Execution Order:** Middleware executes sequentially in the order it is defined.
   ```javascript
   app.get('/data', (req, res) => res.json(req.body));
   
   // This is defined AFTER the route, so the route never benefits from it!
   app.use(express.json()); 
   ```

## 🔐 Security & Performance Considerations
- **Performance:** Don't put heavy synchronous computation inside middleware. It blocks the Node.js event loop.
- **Security:** Use middleware like `helmet` to automatically set secure HTTP headers, and `express-rate-limit` to prevent DDoS attacks.
- **Order Matters:** Always place authentication and validation middleware *before* your database-heavy controller logic to fail fast.

## 🏋️ Exercises
1. **The Logger:** Write a custom middleware that logs the HTTP method, URL, and the time it took to complete the request (Hint: listen to the `res.on('finish')` event).
2. **The Bouncer:** Write a middleware function that checks for an `Authorization` header. If it's missing, return a `401 Unauthorized`. If it exists, call `next()`.

## ✅ Summary Checklist
- [ ] I understand the assembly line mental model of Express middleware.
- [ ] I know how and when to use `next()`.
- [ ] I understand the difference between app-level and router-level middleware.
- [ ] I know that middleware order is strictly sequential.
