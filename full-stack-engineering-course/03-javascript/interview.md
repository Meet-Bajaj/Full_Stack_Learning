# JavaScript Interview Questions

## Junior Level
1. **What is the difference between `let`, `const`, and `var`?**
   - *Expected Answer:* `var` is function-scoped and hoisted with undefined. `let` and `const` are block-scoped. `let` allows reassignment; `const` prevents reassignment (but object properties can still be modified).

2. **What is the difference between `==` and `===`?**
   - *Expected Answer:* `==` performs type coercion before comparison (e.g., `'5' == 5` is true). `===` requires both value and type to be identical (strict equality).

3. **What is NaN? How do you check if a value is NaN?**
   - *Expected Answer:* NaN stands for Not-a-Number. It results from invalid math operations. Check using `Number.isNaN(val)` (not `isNaN()` which has coercion quirks).

4. **Explain Hoisting.**
   - *Expected Answer:* JavaScript moves function and variable declarations to the top of their respective scopes during the compilation phase. Only declarations are hoisted, not initializations.

5. **What are truthy and falsy values?**
   - *Expected Answer:* Falsy values are `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, and `NaN`. Everything else is truthy.

## Mid Level
6. **What is a Closure? Give a practical use case.**
   - *Expected Answer:* A closure is a function bundled with its lexical environment. It remembers the variables from the scope where it was created. Practical uses include data privacy (private variables), function factories, and currying.

7. **Explain the Event Loop.**
   - *Expected Answer:* The event loop handles asynchronous operations. The Call Stack executes synchronous code. When an async task completes (like setTimeout), its callback goes to the Task/Callback Queue (or Microtask queue for Promises). When the Call Stack is empty, the Event Loop pushes tasks from the queues to the Stack.

8. **What is the difference between Arrow functions and regular functions?**
   - *Expected Answer:* Arrow functions don't have their own `this` binding (they inherit it lexically). They don't have an `arguments` object. They cannot be used as constructors (`new`).

9. **Explain `call`, `apply`, and `bind`.**
   - *Expected Answer:* All are used to explicitly set the `this` context. `call` passes arguments individually. `apply` passes arguments as an array. `bind` returns a new function with `this` bound, but doesn't execute it immediately.

10. **What is Event Delegation?**
    - *Expected Answer:* Attaching a single event listener to a parent element to handle events on its children (relying on event bubbling), rather than attaching individual listeners to every child.

## Senior Level
11. **How does Prototypal Inheritance work?**
    - *Expected Answer:* Objects inherit properties and methods from a prototype object. When accessing a property, JS looks at the object, then its `__proto__`, up the prototype chain until it finds it or reaches `null`.

12. **What are memory leaks in JavaScript and how do they happen?**
    - *Expected Answer:* Memory leaks occur when the Garbage Collector cannot free up memory because variables are still referenced. Common causes: global variables, uncleared intervals/timers, detached DOM nodes, and unintended closures.

13. **Explain the Microtask vs Macrotask queue.**
    - *Expected Answer:* Microtasks (Promises, MutationObserver) have higher priority and are executed immediately after the currently executing script and before the next Macrotask (setTimeout, setInterval, UI rendering).

14. **How would you deep clone an object?**
    - *Expected Answer:* `JSON.parse(JSON.stringify(obj))` is simple but loses functions and undefined. Using `structuredClone()` is the modern native approach. Otherwise, use a recursive function or a library like Lodash (`cloneDeep`).

15. **What is Currying?**
    - *Expected Answer:* Transforming a function that takes multiple arguments into a sequence of functions that each take a single argument: `f(a, b, c)` becomes `f(a)(b)(c)`.
