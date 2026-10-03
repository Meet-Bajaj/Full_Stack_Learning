# Lesson 5: The File System (fs) and Path Modules

The `fs` module provides an API for interacting with the file system. It supports both synchronous and asynchronous operations.

## Synchronous vs Asynchronous API
**CRITICAL RULE:** Never use synchronous `fs` methods (`fs.readFileSync`, `fs.writeFileSync`) in a web server environment where handling multiple requests concurrently is required. Synchronous methods **block the entire Event Loop**. 

Synchronous methods are only acceptable in one-off CLI scripts or during initial server startup.

### 1. The Callbacks API (Legacy Asynchronous)
```javascript
const fs = require('fs');

fs.readFile('./data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

### 2. The Promises API (Modern Asynchronous)
This is the recommended approach.
```javascript
const fs = require('fs/promises');

async function manageFiles() {
  try {
    // Read
    const data = await fs.readFile('./data.txt', 'utf8');
    // Write
    await fs.writeFile('./copy.txt', data);
    // Append
    await fs.appendFile('./copy.txt', '\nMore data');
  } catch (error) {
    console.error('File operation failed:', error);
  }
}
```

## Watching Files
You can watch a file or directory for changes:
```javascript
const fs = require('fs');
fs.watch('./data.txt', (eventType, filename) => {
  console.log(`Event: ${eventType}, File: ${filename}`);
});
```

## The Path Module
Because Windows uses `\` for paths and Linux/macOS uses `/`, manually joining strings to create file paths is dangerous and leads to cross-platform bugs. Always use the `path` module.

```javascript
const path = require('path');

// Safely joins paths regardless of OS
const fullPath = path.join(__dirname, 'folder', 'file.txt');

console.log(path.basename(fullPath)); // file.txt
console.log(path.extname(fullPath));  // .txt
console.log(path.parse(fullPath));    // Object with root, dir, base, ext, name
```

## Summary Checklist
- [ ] Understand why sync file operations block the event loop.
- [ ] Use `fs/promises` for modern async file operations.
- [ ] Use `path.join` instead of string concatenation.
