# Node.js Cheat Sheet

## Core Modules
```javascript
const fs = require('fs');       // File System
const path = require('path');   // Path manipulation
const http = require('http');   // HTTP Server/Client
const events = require('events');// Event Emitter
const crypto = require('crypto');// Cryptography
const os = require('os');       // OS Info
```

## File System (fs/promises)
```javascript
const fs = require('fs/promises');

async function manageFiles() {
  // Read File
  const content = await fs.readFile('./data.txt', 'utf8');
  
  // Write File
  await fs.writeFile('./data.txt', 'New Content');
  
  // Append File
  await fs.appendFile('./data.txt', '\nAppended line');
  
  // Check if exists
  try {
    await fs.access('./data.txt');
  } catch {
    console.log("File does not exist");
  }
}
```

## Path Module
```javascript
const path = require('path');

const fullPath = path.join(__dirname, 'folder', 'file.txt'); 
// Resolves safely across OS (Windows \ vs Unix /)

const ext = path.extname('index.html'); // '.html'
const base = path.basename('/foo/bar/baz/asdf/quux.html'); // 'quux.html'
```

## Event Emitter
```javascript
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Listen
myEmitter.on('userJoined', (user) => {
  console.log(`${user} joined the chat`);
});

// Emit
myEmitter.emit('userJoined', 'Alice');
```

## Streams
```javascript
const fs = require('fs');

// Read Stream
const readStream = fs.createReadStream('./large-file.txt', 'utf8');

// Write Stream
const writeStream = fs.createWriteStream('./output.txt');

// Pipe (Read directly to Write)
readStream.pipe(writeStream);

// Handling data events
readStream.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
});
```

## Child Processes
```javascript
const { exec, spawn } = require('child_process');

// Exec (Buffers output - good for small outputs)
exec('ls -la', (error, stdout, stderr) => {
  if (error) return console.error(error);
  console.log(stdout);
});

// Spawn (Streams output - good for large outputs/long processes)
const ls = spawn('ls', ['-la']);
ls.stdout.on('data', (data) => console.log(`stdout: ${data}`));
```

## Environment Variables
```javascript
// Accessing ENV vars
const port = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL;

// Using dotenv package to load .env file
require('dotenv').config();
```
