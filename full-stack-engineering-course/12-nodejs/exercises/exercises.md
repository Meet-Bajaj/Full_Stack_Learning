# Node.js Exercises

## Section 1: File System
1. Write a script that creates a file `hello.txt`, writes "Hello World", reads it, prints the content, and then deletes the file.
2. Refactor the above using `fs/promises` and `async/await`.
3. Create a script that watches a directory and logs to the console whenever a file is added or modified.

## Section 2: Modules and NPM
4. Create a math module in `math.js` with `add`, `subtract`, `multiply`. Export using CommonJS. Import in `app.js` and test.
5. Convert the math module to use ES Modules (update `package.json`).
6. Initialize an npm project, install `lodash`, use it to sort an array in a script, and explain the difference between `dependencies` and `devDependencies`.

## Section 3: Events
7. Create a `TicketManager` class that extends `EventEmitter`. Emit a `buy` event with an email and price when a method is called. Listen for it and log the purchase.
8. Create an event listener that only triggers *once* using `.once()`.

## Section 4: Event Loop
9. Write a script that uses `setTimeout`, `setImmediate`, `process.nextTick`, and `Promise.resolve`. Predict the order, then run it.
10. Intentionally block the event loop with a `while(true)` loop. Observe how `setTimeout` callbacks never execute.

## Section 5: Streams
11. Write a script that creates a 100MB file filled with random text using a Writable stream.
12. Use `pipeline` from `stream/promises` to gzip a file.

## Section 6: Child Processes
13. Use `exec` to run `ls -la` (or `dir` on Windows) and print the output.
14. Use `spawn` to run a Python script from Node.js and capture its standard output.
