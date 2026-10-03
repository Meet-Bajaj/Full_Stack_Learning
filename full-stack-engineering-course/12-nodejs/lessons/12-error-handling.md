# Lesson 12: Error Handling in Node.js

Robust error handling is critical. A single unhandled exception can crash your entire Node.js server, disconnecting all active users.

## Operational vs. Programmer Errors
1. **Operational Errors:** Expected problems occurring at runtime (e.g., File not found, Database connection failed, API rate limit). These should be caught and handled gracefully.
2. **Programmer Errors:** Bugs in the code (e.g., trying to read a property of `undefined`, syntax errors). The app should usually crash and restart (via a process manager like PM2) because it is in an unpredictable state.

## Handling Asynchronous Errors

### Callbacks
In Node, callbacks always use the "error-first" pattern.
```javascript
fs.readFile('data.txt', (err, data) => {
  if (err) {
    console.error('Operational error:', err);
    return; // MUST return to avoid executing rest of code
  }
  console.log(data);
});
```

### Promises & Async/Await
```javascript
async function getData() {
  try {
    const data = await fs.readFile('data.txt');
  } catch (err) {
    console.error('Caught via Try/Catch:', err);
  }
}
```

## Global Error Catchers (The Last Resort)
If an error escapes your try/catch blocks, Node will emit global events on the `process` object.

```javascript
// Unhandled Promise Rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Log the error and gracefully shut down
  process.exit(1); 
});

// Uncaught Exceptions (Synchronous errors)
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  // ALWAYS exit after this, the state is corrupted
  process.exit(1);
});
```

## Graceful Shutdown
When a fatal error occurs, don't just `process.exit(1)` immediately. You should stop accepting new connections, finish existing requests, and close database connections cleanly.

## Summary Checklist
- [ ] Distinguish operational vs programmer errors.
- [ ] Follow the error-first callback pattern.
- [ ] Understand `unhandledRejection` and `uncaughtException`.
- [ ] Implement graceful shutdown.
