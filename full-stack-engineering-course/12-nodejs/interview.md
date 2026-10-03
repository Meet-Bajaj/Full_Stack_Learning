# Node.js Interview Questions

## Junior Level
1. **What is Node.js and how does it differ from front-end JavaScript?**
   - *Answer:* Node is a runtime built on V8. It has no DOM/BOM but has access to the OS, file system, and network via built-in modules.
2. **What is the Event Loop?**
   - *Answer:* The mechanism that allows Node to perform non-blocking I/O operations despite being single-threaded by offloading operations to the system kernel (or thread pool).
3. **What is the difference between `require` and `import`?**
   - *Answer:* `require` is CommonJS (synchronous, dynamic). `import` is ES Modules (asynchronous, static).
4. **Explain `package.json` vs `package-lock.json`.**
   - *Answer:* `package.json` declares acceptable version ranges. `lock` freezes the exact installed tree for reproducible builds.
5. **What are streams?**
   - *Answer:* Objects that let you read or write data continuously in chunks rather than loading it all into memory at once.

## Mid Level
6. **What is the difference between `process.nextTick()` and `setImmediate()`?**
   - *Answer:* `nextTick` fires immediately on the current phase of the event loop (blocking the loop). `setImmediate` fires on the next iteration (Check phase).
7. **How does Node handle CPU-intensive tasks?**
   - *Answer:* It shouldn't on the main thread. You should use `worker_threads` to offload CPU-heavy work to background threads.
8. **What is a memory leak in Node.js and how do you find it?**
   - *Answer:* When objects are no longer needed but still referenced (e.g., in global arrays or unremoved event listeners). Found using Chrome DevTools heap snapshots.
9. **Explain backpressure in streams.**
   - *Answer:* When the readable stream supplies data faster than the writable stream can consume it. Handled via `.pipe()` automatically.
10. **How would you scale a Node.js application?**
    - *Answer:* Horizontally using the `cluster` module, PM2, or Docker/Kubernetes. Vertically by adding more RAM/CPU.

## Senior Level
11. **Explain the phases of the Event Loop in detail.**
    - *Answer:* Timers (setTimeout) -> Pending (OS errors) -> Idle/Prepare -> Poll (I/O) -> Check (setImmediate) -> Close (socket.close). Microtasks run between every phase.
12. **How does `libuv` work under the hood?**
    - *Answer:* It's a C library providing the thread pool (4 threads by default) for asynchronous I/O, DNS, and Crypto, returning callbacks to the event loop.
13. **How do you prevent Prototype Pollution?**
    - *Answer:* Avoid naive recursive merge functions. Freeze `Object.prototype`. Use `Object.create(null)` for dictionaries.
14. **Design a high-throughput logging system for a Node app.**
    - *Answer:* Use a fast logger like Pino (no string formatting overhead). Stream logs directly to stdout/stderr. Let an external daemon (Filebeat/Fluentd) ship them to Elasticsearch to avoid blocking Node.
15. **What is Event Loop Lag and how do you measure it?**
    - *Answer:* The delay between when a timer is supposed to execute and when it actually executes, caused by synchronous blocking code. Measure using `perf_hooks`.

*(Note: In a full course setting, this file would expand to 50+ questions covering database pooling, message queues, memory profiling, and architecture).*
