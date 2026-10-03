# Lesson 1: Introduction to Node.js

## What is Node.js?
Node.js is an open-source, cross-platform, back-end JavaScript runtime environment built on the **V8 JavaScript Engine** (the same engine that powers Google Chrome). It executes JavaScript code outside a web browser.

**Key Characteristics:**
1. **Asynchronous and Event-Driven:** All APIs of the Node.js library are asynchronous (non-blocking).
2. **Single-Threaded but Highly Scalable:** Node uses a single thread with event looping.
3. **Very Fast:** V8 compiles JS directly to native machine code.

## Why it exists
Before Node.js, JavaScript was strictly a client-side language. Ryan Dahl created Node.js in 2009 to build real-time websites with push capability. The goal was to solve the C10K problem (handling 10,000 concurrent connections). Traditional web servers (like Apache) created a new thread for each request, consuming massive RAM. Node.js proposed a different model.

## Mental Model: The Restaurant Analogy
**Traditional Multi-threaded Server (Apache/Java/PHP):**
Imagine a restaurant where every time a customer arrives, a dedicated waiter is assigned to them. The waiter takes the order, walks to the kitchen, stands there waiting for the food to cook, brings it to the table, and waits for the customer to finish. If 1,000 customers arrive, you need 1,000 waiters. This is very expensive (high memory usage).

**Node.js (Single-threaded, Non-blocking I/O):**
Imagine a restaurant with **one highly efficient waiter**. The waiter takes an order, passes it to the kitchen (I/O operation), and *immediately* goes to take an order from the next table. When the kitchen finishes cooking the first order, they ring a bell (Event Loop callback). The waiter picks up the food and serves it. One waiter can serve hundreds of tables. This is highly scalable but requires the kitchen (background C++ worker threads) to do the heavy lifting asynchronously.

## When to use Node.js
- **I/O Bound Applications:** APIs, Single Page App backends.
- **Real-time apps:** Chat applications, gaming servers (Socket.io).
- **Data Streaming:** Netflix uses Node.js to stream media.
- **Microservices:** Lightweight and fast to start.

## When NOT to use Node.js
- **CPU-Intensive Applications:** Video encoding, heavy machine learning, complex mathematical computations. Why? Because the "one waiter" (single thread) would be stuck doing math at a table, ignoring all other customers (blocking the event loop).

## Summary & Checklist
- [ ] Understand what V8 is.
- [ ] Comprehend the difference between blocking and non-blocking I/O.
- [ ] Internalize the "waiter" mental model.
- [ ] Know the ideal use-cases for Node.js.
