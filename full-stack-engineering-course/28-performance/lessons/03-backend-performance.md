# Lesson 3: Backend Performance

## Learning Objectives
- Understand Response Time vs Throughput.
- Optimize async operations.
- Avoid blocking the Node.js Event Loop.

## The Event Loop Rule
Node.js is single-threaded. **Never block the event loop.** Heavy CPU-bound tasks (e.g., cryptographic hashing, image processing, large JSON parsing) will freeze your entire server. Use Worker Threads for these.

## Async Optimization
Run independent asynchronous tasks concurrently using `Promise.all()` instead of awaiting them sequentially.
```javascript
// Slow (Sequential)
const user = await getUser();
const posts = await getPosts();

// Fast (Concurrent)
const [user, posts] = await Promise.all([getUser(), getPosts()]);
```
