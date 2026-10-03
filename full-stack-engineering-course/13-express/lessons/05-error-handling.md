# Lesson 05: Error Handling in Express

## 🎯 Learning Objectives
- Differentiate between Operational errors and Programmer errors.
- Write a global error handling middleware.
- Master asynchronous error handling using wrappers or `express-async-errors`.
- Structure standard JSON error responses.

## 🧠 Mental Model: The Safety Net
If your Express app is a trapeze artist, unhandled errors are falls. Without a safety net, a fall crashes the entire show (the Node process dies). 
**Error handling middleware** is the massive safety net at the bottom. No matter where an error occurs—whether a database connection fails, a file is missing, or a user submits bad data—the error falls into the net, which safely tells the audience (the client) "Technical difficulties!" without crashing the server.

## 📖 Concept Explanation

### Operational vs. Programmer Errors
- **Operational Errors**: Things that *will* happen in production. Invalid user input, database timeouts, missing files. You should catch these and send a 400 or 500 status.
- **Programmer Errors**: Bugs. Reading a property of `undefined`, syntax errors. These often require restarting the app.

### The Error Handling Middleware
Express recognizes an error handling middleware by its **four arguments**: `(err, req, res, next)`.
You must define this middleware *at the very bottom* of your `app.js`, after all other `app.use()` and routes.

```javascript
// A route throwing an error
app.get('/broken', (req, res, next) => {
  const error = new Error('Database connection failed');
  error.status = 500;
  next(error); // Passing to the safety net
});

// Global Error Handler (The Safety Net)
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  
  // Log the error for the developer
  console.error(`[ERROR] ${status}: ${message}`);
  
  // Send a clean response to the user
  res.status(status).json({
    success: false,
    error: {
      message: message,
      // Only show stack trace in development mode!
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined 
    }
  });
});
```

### The Async/Await Problem
Express 4.x does NOT automatically catch errors thrown inside `async` route handlers. If a promise rejects, your app might crash or the request will hang forever.

**The Problem:**
```javascript
app.get('/users', async (req, res) => {
  const users = await db.getUsers(); // If this fails, the app hangs!
  res.json(users);
});
```

**Solution 1: Try/Catch (Tedious)**
```javascript
app.get('/users', async (req, res, next) => {
  try {
    const users = await db.getUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
});
```

**Solution 2: Async Wrapper (Better)**
```javascript
const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

app.get('/users', catchAsync(async (req, res) => {
  const users = await db.getUsers();
  res.json(users);
}));
```

**Solution 3: `express-async-errors` package (Best for Express 4)**
Just require the package at the top of your app, and it monkey-patches Express to handle async errors automatically. (Note: Express 5.x handles this natively!).

## ⚠️ Common Mistakes
1. **Defining error middleware at the top**: If you put `app.use((err...))` before your routes, it will never catch their errors.
2. **Missing the `next` parameter**: Even if you don't use it, you MUST define `(err, req, res, next)`. If you define `(err, req, res)`, Express thinks it's a normal middleware and it won't catch errors.

## 🏋️ Exercises
1. Create a custom `AppError` class that extends `Error` and accepts a `statusCode` and `message` in its constructor.
2. Implement a global error handler that formats the response differently if the environment is `development` vs `production`.

## ✅ Summary Checklist
- [ ] I know how to structure a 4-argument error handling middleware.
- [ ] I understand why async functions require special error handling in Express 4.x.
- [ ] I know to hide error stack traces in production.
