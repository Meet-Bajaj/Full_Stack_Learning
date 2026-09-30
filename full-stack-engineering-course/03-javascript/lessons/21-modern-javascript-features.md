# Lesson 21: Modern JavaScript Features

## Learning Objectives
- Identify and use recent additions to the ECMAScript standard (ES2020 - ES2024).
- Use `Array.at()`, `structuredClone`, and Logical Assignment.

## 1. Top-Level Await
Historically, `await` could only be used inside an `async` function. In modern JS modules, you can use `await` directly at the top level of a file.
```javascript
// fetch-data.js (Must be an ES Module)
const res = await fetch('https://api.example.com/data');
export const data = await res.json();
```

## 2. Array.at()
Getting the last item of an array used to be clunky: `arr[arr.length - 1]`.
Now, you can use `.at()` with negative indexes.
```javascript
const arr = [10, 20, 30, 40];
console.log(arr.at(-1)); // 40
console.log(arr.at(-2)); // 30
```

## 3. Logical Assignment Operators
Combines logical operators (`&&`, `||`, `??`) with assignment (`=`).
```javascript
let user = { name: "Alice", active: false };

// OR Assignment: Assign ONLY if falsy
user.role ||= "Guest"; // user.role was undefined, now it's "Guest"

// AND Assignment: Assign ONLY if truthy
user.active &&= true; // false, so it stays false

// Nullish Assignment: Assign ONLY if null or undefined
user.score ??= 0;
```

## 4. structuredClone()
Deep cloning an object used to require third-party libraries (like Lodash `cloneDeep`) or the slow/hacky `JSON.parse(JSON.stringify(obj))` which loses functions and Dates.
Now, it's built into the language.
```javascript
const original = { name: "Bob", date: new Date() };
const deepCopy = structuredClone(original);
```

## 5. Object.hasOwn()
A safer replacement for `Object.prototype.hasOwnProperty.call()`. Checks if an object has a property directly on it (not inherited via prototype chain).
```javascript
const obj = { age: 30 };
console.log(Object.hasOwn(obj, 'age')); // true
```

## Summary Checklist
- [ ] Refactor `arr[arr.length-1]` to `arr.at(-1)`.
- [ ] Replace `JSON.parse/stringify` with `structuredClone()`.
- [ ] Understand Logical Assignment for concise defaults.

---
**Congratulations! You have completed the theoretical portion of Module 03. Move on to the Projects, Exercises, and MCQs to solidify your knowledge!**
