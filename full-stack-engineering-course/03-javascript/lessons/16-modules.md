# Lesson 16: Modules

## Learning Objectives
- Understand why we need modules.
- Differentiate CommonJS vs ES Modules.
- Export and Import correctly.

## Why Modules?
If we wrote our entire application in one file, it would be tens of thousands of lines long. Modules allow us to split code into multiple files, encapsulate logic, and reuse code across the project.

## 1. CommonJS (The Node.js Legacy Way)
Before ES6, Node.js created its own module system using `require()` and `module.exports`. You will still see this heavily in backend code.
```javascript
// math.js
function add(a, b) { return a + b; }
module.exports = { add };

// index.js
const math = require('./math.js');
console.log(math.add(2, 2));
```

## 2. ES Modules (The Modern Way)
ES6 introduced native modules. This is what you use in React, Angular, Vue, and modern Node.js.

### Named Exports
You can export multiple things from a single file.
```javascript
// utils.js
export const pi = 3.14;
export function square(x) { return x * x; }

// index.js (Importing named exports requires curly braces)
import { pi, square } from './utils.js';
console.log(square(pi));
```

### Default Exports
Every file can have ONE default export. Usually used when a file does exactly one main thing (like a React Component).
```javascript
// User.js
export default class User { ... }

// index.js (Importing default exports does NOT use curly braces)
import User from './User.js';
// Note: You can name it whatever you want when importing a default!
import MyCustomUser from './User.js'; // This works too.
```

## Summary Checklist
- [ ] Differentiate `require` (CommonJS) and `import` (ESM).
- [ ] Use curly braces `{}` for Named imports.
- [ ] Omit curly braces for Default imports.
