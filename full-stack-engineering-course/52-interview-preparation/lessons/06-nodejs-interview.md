# Lesson 06: Node.js Interview Questions

## Learning Objectives
- Master the Node.js architecture (Event Loop, V8, libuv).
- Understand Streams, Buffers, and scaling concepts (Clustering, Worker Threads).
- Explain common security practices and error handling in Node.js.

## 1. Node.js Architecture and Event Loop

**Concept:** Node.js is a single-threaded runtime environment built on Chrome's V8 engine and libuv (which handles async I/O).

**The Event Loop Phases (libuv):**
1. **Timers:** executes `setTimeout` and `setInterval` callbacks.
2. **Pending Callbacks:** executes I/O callbacks deferred to the next loop iteration.
3. **Idle, Prepare:** internal use only.
4. **Poll:** retrieve new I/O events; execute I/O related callbacks.
5. **Check:** executes `setImmediate` callbacks.
6. **Close Callbacks:** e.g., `socket.on('close', ...)`.

## 2. Streams and Buffers

**Concept:** Streams are collections of data that might not be available all at once and don't have to fit in memory. They are essential for processing large amounts of data.
- **Types of Streams:** Readable, Writable, Duplex, Transform.

**Buffers:** A Buffer is a temporary memory area that stores raw binary data before it is processed.

## 3. Scaling Node.js

- **Clustering:** Since Node is single-threaded, clustering allows you to create multiple child processes (workers) that share the same server port.
- **Worker Threads:** Useful for performing CPU-intensive JavaScript operations, keeping the main thread free for I/O.

## Summary & Checklist
- [ ] Diagram the Node.js Event Loop phases.
- [ ] Explain the difference between `setImmediate` and `process.nextTick`.
- [ ] Describe when to use Streams vs loading data into memory.
