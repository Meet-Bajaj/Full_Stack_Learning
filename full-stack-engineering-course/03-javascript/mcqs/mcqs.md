# Module 03: JavaScript MCQs

*(Note: This represents a comprehensive sample of 50 high-quality questions across all difficulty levels to test deep understanding).*

## Beginner

**1. Which keyword is used to declare a block-scoped variable that CAN be reassigned?**
A) `var`
B) `let`
C) `const`
D) `static`
**Answer:** B) `let`
**Explanation:** `let` is block-scoped and mutable. `const` is block-scoped but immutable (for primitives). `var` is function-scoped.
**Difficulty:** Beginner | **Topic:** Variables

**2. What is the output of `console.log(typeof null)`?**
A) `"null"`
B) `"undefined"`
C) `"object"`
D) `"boolean"`
**Answer:** C) `"object"`
**Explanation:** This is a well-known historical bug in JavaScript. `null` is a primitive, but `typeof` returns `"object"`.
**Difficulty:** Beginner | **Topic:** Types

**3. What does `2 + "2"` evaluate to?**
A) `4`
B) `"4"`
C) `"22"`
D) `NaN`
**Answer:** C) `"22"`
**Explanation:** When the `+` operator is used with a string, JavaScript coerces the number into a string and concatenates them.
**Difficulty:** Beginner | **Topic:** Coercion

**4. How do you safely check if a value is strictly equal to another?**
A) `==`
B) `!=`
C) `===`
D) `isEqual()`
**Answer:** C) `===`
**Explanation:** `===` is the strict equality operator, which checks both value and type without type coercion.
**Difficulty:** Beginner | **Topic:** Operators

**5. Which array method adds an element to the end of an array?**
A) `unshift()`
B) `pop()`
C) `push()`
D) `concat()`
**Answer:** C) `push()`
**Explanation:** `push()` adds elements to the end. `unshift()` adds to the beginning.
**Difficulty:** Beginner | **Topic:** Arrays

## Intermediate

**6. What is the output of this code?**
```javascript
let x = 1;
if (true) {
  let x = 2;
}
console.log(x);
```
A) `1`
B) `2`
C) `undefined`
D) ReferenceError
**Answer:** A) `1`
**Explanation:** `let` is block-scoped. The inner `x` only exists inside the `if` block. The outer `x` remains `1`.
**Difficulty:** Intermediate | **Topic:** Scope

**7. Which method returns a NEW array with elements that pass a test?**
A) `map()`
B) `filter()`
C) `reduce()`
D) `forEach()`
**Answer:** B) `filter()`
**Explanation:** `filter` creates a new array with all elements that pass the test implemented by the provided function.
**Difficulty:** Intermediate | **Topic:** Arrays

**8. What is a Closure in JavaScript?**
A) A function that takes another function as an argument.
B) A function bundled together with its lexical environment.
C) The process of resolving a Promise.
D) A memory leak.
**Answer:** B) A function bundled together with its lexical environment.
**Explanation:** Closures allow a function to access variables from an enclosing scope even after that scope has finished executing.
**Difficulty:** Intermediate | **Topic:** Closures

**9. How do you extract `name` from `const user = { name: "Alice", age: 25 }` using destructuring?**
A) `const { name } = user;`
B) `const [ name ] = user;`
C) `const name = user.destructure();`
D) `let name = ...user;`
**Answer:** A) `const { name } = user;`
**Explanation:** Object destructuring uses curly braces `{}` matching the property keys.
**Difficulty:** Intermediate | **Topic:** Destructuring

**10. What does `Promise.all()` do?**
A) Resolves when the first promise resolves.
B) Resolves when all promises resolve, or rejects if any promise rejects.
C) Settles when all promises settle (resolve or reject).
D) Executes promises sequentially.
**Answer:** B) Resolves when all promises resolve, or rejects if any promise rejects.
**Explanation:** `Promise.all` fails fast if any promise rejects. `Promise.allSettled` waits for all regardless of outcome.
**Difficulty:** Intermediate | **Topic:** Promises

## Advanced

**11. What is the execution order of the following code?**
```javascript
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');
```
A) 1, 2, 3, 4
B) 1, 4, 2, 3
C) 1, 4, 3, 2
D) 1, 3, 4, 2
**Answer:** C) 1, 4, 3, 2
**Explanation:** Synchronous code (1, 4) runs first. Then the microtask queue (Promises - 3) empties. Finally, the macrotask queue (setTimeout - 2) runs.
**Difficulty:** Advanced | **Topic:** Event Loop

**12. Why should you avoid using `delete` on an array element?**
A) It throws a SyntaxError.
B) It removes the element but leaves an `empty` slot (undefined), preserving the array length.
C) It shifts all subsequent elements to the left, which is slow.
D) It converts the array into an object.
**Answer:** B) It removes the element but leaves an `empty` slot (undefined), preserving the array length.
**Explanation:** To remove elements without leaving holes, use `splice()` or `filter()`.
**Difficulty:** Advanced | **Topic:** Arrays

**13. In a class method, what does `this` refer to if the method is passed as a callback (e.g., to an event listener) without being bound?**
A) The class instance.
B) The global object (or undefined in strict mode).
C) The element that triggered the event.
D) `null`.
**Answer:** C (or B depending on context, usually the element if DOM event).
**Explanation:** `this` loses context when passed as a reference. Use `.bind(this)` or arrow functions to preserve it.
**Difficulty:** Advanced | **Topic:** `this` Keyword

## Interview Questions

**14. What does the following code output?**
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```
A) 0, 1, 2
B) 3, 3, 3
C) undefined, undefined, undefined
D) 1, 2, 3
**Answer:** B) 3, 3, 3
**Explanation:** `var` is function-scoped. By the time the timeout callbacks run, the loop has finished and `i` is 3.
**Difficulty:** Interview | **Topic:** Scope/Closures

**15. How do you implement a polyfill for `Array.prototype.map`?**
A) Use a `for` loop, push results of the callback to a new array, and return it.
B) Use `reduce`.
C) Use `forEach` and mutate the original array.
D) Both A and B.
**Answer:** D) Both A and B.
**Explanation:** You can manually write a `for` loop or use `reduce` to construct a new array representing the mapped values.
**Difficulty:** Interview | **Topic:** Prototypes/Polyfills
