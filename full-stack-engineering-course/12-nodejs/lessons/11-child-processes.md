# Lesson 11: Child Processes and Worker Threads

Because Node.js is single-threaded, CPU-intensive tasks (like image resizing, video encoding, or heavy cryptography) will block the Event Loop. To solve this, Node provides ways to spawn additional processes or threads.

## The `child_process` Module
This module allows you to spin up new OS processes. Since they are separate processes, they have their own memory space and V8 instance.

### 1. `exec`
Runs a shell command and buffers the output. Good for simple commands.
```javascript
const { exec } = require('child_process');

exec('dir', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log(`Output:\n${stdout}`);
});
```

### 2. `spawn`
Runs a command but streams the output instead of buffering it. Good for large outputs.
```javascript
const { spawn } = require('child_process');
const child = spawn('node', ['script.js']);

child.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});
```

### 3. `fork`
A special case of `spawn` used specifically to spawn new Node.js processes. It establishes a communication channel (IPC) so the parent and child can pass messages via `process.send()`.

## Worker Threads (`worker_threads`)
Introduced in Node v10. Unlike child processes (which use separate memory), worker threads share memory. They are much lighter to spin up than full child processes.
Use them for CPU-bound tasks in Node.

```javascript
// See examples/worker-threads.js for full implementation
const { Worker } = require('worker_threads');
const worker = new Worker('./worker-task.js');
worker.on('message', msg => console.log('Message from worker:', msg));
```

## When to use what?
- **I/O bound tasks?** Just use standard Node.js async/await.
- **Run a system script?** Use `exec` or `spawn`.
- **Run heavy JS math/logic?** Use `worker_threads`.

## Summary Checklist
- [ ] Differentiate between `exec`, `spawn`, and `fork`.
- [ ] Understand when to use Child Processes vs Worker Threads.
