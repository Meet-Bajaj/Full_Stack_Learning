# Node.js Module Assessment

## Part 1: Multiple Choice (Architecture)
1. Which core component of Node.js is responsible for executing the asynchronous I/O thread pool?
   a) V8 Engine
   b) Libuv
   c) The REPL
   d) N-API

2. What is the output of this code?
   ```javascript
   setTimeout(() => console.log('A'), 0);
   process.nextTick(() => console.log('B'));
   setImmediate(() => console.log('C'));
   ```
   a) A, B, C
   b) B, A, C
   c) B, C, A
   d) C, A, B

## Part 2: Code Debugging
**Problem:** The following code crashes with an "Out of Memory" error on large files. Fix it.
```javascript
const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
  fs.readFile('large-video.mp4', (err, data) => {
    if (err) return res.end('Error');
    res.end(data);
  });
}).listen(3000);
```
*Expected Solution:* Use streams. `fs.createReadStream('large-video.mp4').pipe(res);`

## Part 3: Architecture & System Design
**Scenario:** You are building a real-time chat application backend using Node.js.
1. Why is Node.js a good choice for this?
2. If one user sends a computationally heavy regex in a message, how could it affect other users? How do you mitigate this?
3. How would you scale this application across 4 servers? How do you ensure users on Server A can chat with users on Server B? (Hint: Redis Pub/Sub).
