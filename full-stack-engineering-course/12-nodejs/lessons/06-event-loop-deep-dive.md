# Lesson 6: The Event Loop Deep Dive

> [!IMPORTANT]
> This is the most critical lesson in understanding Node.js. Node is single-threaded. If that single thread is blocked, the server is dead to all other users. The Event Loop is how Node handles concurrency.

## The Mental Model
Node.js consists of:
1. **The V8 Engine**: Executes JavaScript (synchronous code).
2. **The Event Loop**: Manages asynchronous callbacks.
3. **Libuv**: A C library that provides the thread pool (default 4 threads) for heavy OS-level operations (File I/O, Crypto, DNS).

When you call `fs.readFile()`, Node offloads the heavy lifting to Libuv's thread pool. V8 immediately moves on to the next line of code. When Libuv finishes reading the file, it pushes the callback function to the Event Loop. The Event Loop eventually pushes the callback back to V8 for execution.

## Phases of the Event Loop
The Event Loop executes in specific phases. Each phase has a FIFO queue of callbacks to execute.

```mermaid
flowchart TD
    Timers[1. Timers Phase: setTimeout, setInterval] --> Pending[2. Pending Callbacks: OS-level errors]
    Pending --> Idle[3. Idle, Prepare: Internal Node use]
    Idle --> Poll[4. Poll Phase: Incoming I/O, Data, Connections]
    Poll --> Check[5. Check Phase: setImmediate]
    Check --> Close[6. Close Callbacks: socket.on('close')]
    Close --> Timers
```

1. **Timers**: Executes callbacks scheduled by `setTimeout()` and `setInterval()`.
2. **Pending Callbacks**: Executes I/O callbacks deferred to the next loop iteration (e.g., TCP errors).
3. **Idle, Prepare**: Internal use only.
4. **Poll**: Retrieve new I/O events; execute I/O related callbacks (almost all, except close callbacks, the ones scheduled by timers, and `setImmediate()`). If the poll queue is empty, Node will block and wait here for new I/O events.
5. **Check**: `setImmediate()` callbacks are invoked here.
6. **Close Callbacks**: e.g., `socket.on('close')`.

## Microtasks vs Macrotasks
Between EVERY phase of the event loop, Node checks two special "Microtask" queues:
1. **`process.nextTick()` queue**: Highest priority. Evaluated immediately after the current operation completes, before the Event Loop continues.
2. **Promise queue**: (`.then()`, `async/await`). Evaluated after `nextTick`, but before the next Event Loop phase.

Because `process.nextTick()` runs *before* the loop continues, recursive calls to `process.nextTick()` will **starve the Event Loop**, preventing I/O from being processed.

## process.nextTick vs setImmediate
The naming is extremely confusing (legacy reasons):
- `process.nextTick()` fires **immediately** on the same phase.
- `setImmediate()` fires on the **next** iteration of the loop (in the Check phase).
*They should functionally have their names swapped, but we are stuck with it.*

## Code Walkthrough
*(See `examples/event-loop-demo.js` for the executable code).*

## Summary Checklist
- [ ] Memorize the 6 phases of the event loop.
- [ ] Understand the role of Libuv.
- [ ] Know the difference between Microtasks and Macrotasks.
- [ ] Explain why `process.nextTick` starves the event loop but `setImmediate` does not.
