# Node.js Multiple Choice Questions Bank

*(Note: This is a representative sample covering Beginner, Intermediate, and Advanced topics for the Module. A full 130-question bank would follow this exact format and structure).*

## Beginner

**1. What is the underlying JavaScript engine for Node.js?**
- A) SpiderMonkey
- B) JavaScriptCore
- C) V8
- D) Chakra
*Correct Answer: C*
*Explanation: Node.js is built on Google Chrome's open-source V8 JavaScript engine.*

**2. Which module is used to interact with the file system?**
- A) `os`
- B) `path`
- C) `fs`
- D) `file`
*Correct Answer: C*

**3. What does `npm init` do?**
- A) Installs all dependencies.
- B) Creates a `package.json` file.
- C) Starts a Node server.
- D) Initializes a git repository.
*Correct Answer: B*

**4. How do you import a CommonJS module?**
- A) `import module from 'module'`
- B) `require('module')`
- C) `include('module')`
- D) `load('module')`
*Correct Answer: B*

## Intermediate

**5. Which phase of the Event Loop handles `setImmediate`?**
- A) Timers
- B) Poll
- C) Check
- D) Pending Callbacks
*Correct Answer: C*
*Explanation: `setImmediate` callbacks are explicitly executed in the Check phase.*

**6. What is the primary benefit of Streams in Node.js?**
- A) They execute faster mathematically.
- B) They prevent "Out of Memory" errors by processing data in chunks.
- C) They automatically compress data.
- D) They are synchronous.
*Correct Answer: B*

**7. If an `EventEmitter` emits an `'error'` event and no listener is attached, what happens?**
- A) It is ignored.
- B) It returns `false`.
- C) The Node process crashes.
- D) It logs to `stderr` but continues running.
*Correct Answer: C*
*Explanation: Unhandled error events on EventEmitters throw an exception that crashes the process if uncaught.*

## Advanced

**8. Why is `process.nextTick()` potentially dangerous?**
- A) It deletes memory.
- B) It evaluates asynchronously.
- C) Recursive calls to it can starve the Event Loop, blocking I/O.
- D) It bypasses security policies.
*Correct Answer: C*
*Explanation: The nextTick queue is drained entirely before the Event Loop can proceed to the next phase.*

**9. In a clustered Node.js application, do workers share memory?**
- A) Yes, they share the V8 heap.
- B) No, each worker is a separate OS process with its own memory.
- C) Only if explicitly configured in `package.json`.
- D) Yes, through the Global object.
*Correct Answer: B*

**10. How do you mitigate Prototype Pollution in Node.js?**
- A) Use `Object.freeze(Object.prototype)` or `Object.create(null)`.
- B) Use `JSON.parse()`.
- C) Update to Node v18.
- D) Disable the `fs` module.
*Correct Answer: A*
*Explanation: Freezing the prototype prevents attackers from maliciously injecting properties via recursive merges.*

*(... additional questions would follow the same format targeting specific subtopics like Worker Threads, IPC, Buffers, Streams backpressure, and debugging tools).*
