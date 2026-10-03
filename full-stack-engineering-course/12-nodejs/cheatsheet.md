# Node.js Cheat Sheet

## Global Objects
```javascript
__dirname  // Path to current directory (CJS only)
__filename // Path to current file (CJS only)
process    // Info about current Node process
Buffer     // Used to handle binary data
```

## Module Systems
### CommonJS (CJS)
```javascript
const fs = require('fs');
module.exports = { myFunction };
```
### ES Modules (ESM)
```javascript
import fs from 'fs';
export const myFunction = () => {};
// Needs "type": "module" in package.json
```

## File System (fs)
```javascript
const fs = require('fs/promises');

// Read file
const data = await fs.readFile('file.txt', 'utf8');

// Write file
await fs.writeFile('file.txt', 'Hello World');
```

## Events
```javascript
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('event', (data) => console.log(data));
myEmitter.emit('event', 'Payload');
```

## Streams
```javascript
const fs = require('fs');
const readable = fs.createReadStream('input.txt');
const writable = fs.createWriteStream('output.txt');
readable.pipe(writable);
```

## Child Processes
```javascript
const { spawn, exec } = require('child_process');
exec('ls -la', (err, stdout, stderr) => { ... });
const child = spawn('node', ['script.js']);
```
