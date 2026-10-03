# Lesson 3: Module Systems in Node.js

Node.js uses a module system to organize code. Every file in Node is treated as a separate module. There are two primary module systems in Node.js: **CommonJS (CJS)** and **ECMAScript Modules (ESM)**.

## 1. CommonJS (The Legacy/Default System)
Historically, Node.js used CommonJS. It is synchronous and uses `require()` and `module.exports`.

**math.js (Exporting):**
```javascript
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

// Export an object
module.exports = {
  add,
  subtract
};
```

**app.js (Importing):**
```javascript
// Require the module
const math = require('./math');
console.log(math.add(5, 3)); // 8
```

## 2. ES Modules (The Modern Standard)
ESM is the official JavaScript standard (used in browsers). Node.js fully supports ESM. It uses `import` and `export`.

To use ESM in Node, you must either:
1. Add `"type": "module"` to your `package.json`.
2. Or use the `.mjs` file extension.

**math.js (Exporting):**
```javascript
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

**app.js (Importing):**
```javascript
// Must include file extension in Node.js ESM!
import { add, subtract } from './math.js';
console.log(add(5, 3));
```

## Module Wrapper Function (CommonJS)
Before a module's code is executed in CommonJS, Node.js wraps it with a function wrapper:
```javascript
(function(exports, require, module, __filename, __dirname) {
    // Your module code actually lives here
});
```
This is why `require` and `__dirname` are available in CJS files without importing them, and why variables defined in a module don't leak into the global scope.

## Module Resolution
When you use `require('something')`, Node looks for it in this order:
1. **Core Modules** (e.g., `fs`, `http`)
2. **File or Folder** (`./something` or `../something`)
3. **node_modules** (Searches up the directory tree looking for `node_modules/something`)

## Best Practices
- **Adopt ESM for New Projects:** It is the standard for JavaScript and allows code sharing between client and server.
- **Always use file extensions in ESM:** `import './file.js'`, not `import './file'`.
- **Don't mix require and import:** Pick one system for a project and stick to it.

## Summary Checklist
- [ ] Understand CJS (`require`/`module.exports`).
- [ ] Understand ESM (`import`/`export`).
- [ ] Know how to enable ESM in Node.js.
- [ ] Understand the Module Wrapper Function.
