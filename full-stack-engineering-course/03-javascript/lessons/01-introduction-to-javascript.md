# Lesson 01: Introduction to JavaScript

## Learning Objectives
- Understand what JavaScript is and its role in web development.
- Trace the history of ECMAScript.
- Understand the difference between the Browser environment and Node.js.
- Conceptualize Interpreted vs. JIT (Just-In-Time) compilation.

## Why JavaScript?
If HTML is the noun (structure) and CSS is the adjective (style), **JavaScript is the verb** (action). It is the language that makes the web interactive, dynamic, and stateful.

### Real-World Analogy
Think of a house. 
- HTML is the framing, bricks, and layout. 
- CSS is the paint, interior design, and siding. 
- JavaScript is the electricity, plumbing, and smart home system. It makes the doorbell ring, the lights turn on, and the water flow.

## History & ECMAScript
JavaScript was created by Brendan Eich in 1995 in just 10 days for Netscape Navigator. Today, it is governed by a standard called **ECMAScript (ES)**. 
- **ES5 (2009):** The old standard.
- **ES6 / ES2015:** The massive update that introduced modern features (`let/const`, arrow functions, promises).
- **ES2016 - Present:** Yearly incremental updates.

## Where Does JavaScript Run?

### 1. The Browser
Browsers have built-in "JavaScript Engines" (e.g., V8 in Chrome, SpiderMonkey in Firefox, JavaScriptCore in Safari). In the browser, JS can manipulate the DOM (Document Object Model), react to user clicks, and make network requests.

### 2. Node.js
Node.js is a runtime environment that allows you to run JavaScript *outside* the browser, on a server. It uses Chrome's V8 engine but provides server-oriented APIs (like reading/writing files, creating HTTP servers) instead of browser APIs (like the DOM).

## Interpreted vs. JIT Compiled
Historically, JavaScript was strictly an **interpreted** language (read and executed line-by-line). 
Today, modern engines use **JIT (Just-In-Time) Compilation**. 
- **Mental Model:** The engine parses the code, translates it to fast machine code *on the fly* just before executing it, and continuously optimizes it as it runs. This makes JS surprisingly fast.

## Dynamic Typing
JavaScript is **dynamically typed**. You do not declare a variable's type, and the type can change at runtime.
```javascript
let data = 42;       // data is a Number
data = "Hello!";     // data is now a String
data = true;         // data is now a Boolean
```
*Note: This flexibility can lead to bugs, which is why TypeScript (a statically typed superset of JS) is heavily used in industry today. We will cover TypeScript later in the course.*

## Summary Checklist
- [ ] Understand JavaScript's purpose.
- [ ] Differentiate between JS and ECMAScript.
- [ ] Know the difference between Browser JS and Node.js.
- [ ] Grasp dynamic typing.
