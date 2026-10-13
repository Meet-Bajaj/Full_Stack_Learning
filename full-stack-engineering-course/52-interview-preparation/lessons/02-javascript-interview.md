# Lesson 02: JavaScript Interview Questions

## Learning Objectives
- Master the top JavaScript concepts frequently tested in interviews.
- Understand how to explain the execution context, event loop, and closures.
- Review practical examples and code output questions.

## 1. Closures and Scope

**Concept:** A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In simpler terms, a closure gives you access to an outer function's scope from an inner function.

**Real-world Analogy:** Imagine a backpack. When you create a function inside another function, the inner function "packs" all the variables it needs from the outer function into its backpack. Even if the outer function finishes executing, the inner function still has its backpack.

```javascript
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

## 2. 'this' Keyword

**Concept:** `this` refers to the object that is executing the current function.
- In a method, `this` refers to the owner object.
- Alone, `this` refers to the global object.
- In a function, `this` refers to the global object (or `undefined` in strict mode).
- In an event, `this` refers to the element that received the event.

**Arrow Functions:** Arrow functions do not have their own `this`. They inherit `this` from the enclosing lexical context.

## 3. The Event Loop

**Concept:** JavaScript is single-threaded and non-blocking. The Event Loop is the secret behind JavaScript's asynchronous programming.

**Mental Model:** 
1. **Call Stack:** Where function calls are pushed and popped.
2. **Web APIs:** Browser APIs (setTimeout, DOM, fetch) handle async operations.
3. **Callback Queue (Task Queue):** Where callbacks from Web APIs wait.
4. **Microtask Queue:** Promises and MutationObservers go here. It has higher priority than the Callback Queue.
5. **Event Loop:** Checks if the Call Stack is empty. If it is, it pushes tasks from the Microtask Queue, then the Callback Queue.

## Summary & Checklist
- [ ] Can you explain what a closure is and write an example?
- [ ] Do you know how `this` behaves differently in standard vs. arrow functions?
- [ ] Can you draw or describe the Event Loop, Call Stack, and Task Queues?
