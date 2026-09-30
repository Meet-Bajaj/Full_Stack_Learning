# Lesson 07: Loops

## Learning Objectives
- Write `for` and `while` loops.
- Use `for...of` for arrays and `for...in` for objects.
- Control loops with `break` and `continue`.

## The Standard `for` Loop
Used when you know exactly how many times you want to loop.
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}
```

## The `while` Loop
Used when you don't know how many times it will loop, but you wait for a condition to become false.
```javascript
let isRunning = true;
while (isRunning) {
  // do something
  if (someCondition) isRunning = false;
}
```

## `for...of` (For Arrays and Strings)
The most elegant way to loop over arrays in modern JS (when you don't need array methods like `.map()`).
```javascript
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

## `for...in` (For Object Keys)
Loops over the keys (property names) of an object.
```javascript
const user = { name: "Alice", age: 30 };
for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
```
*Warning: Do not use `for...in` on arrays, as it loops over the array indexes as strings.*

## Break and Continue
- `break`: Exits the entire loop immediately.
- `continue`: Skips the rest of the current iteration and jumps to the next one.
```javascript
for (let i = 0; i < 10; i++) {
  if (i === 3) continue; // Skips 3
  if (i === 7) break;    // Stops completely at 7
  console.log(i);
}
```

## Summary Checklist
- [ ] Use `for...of` for arrays/iterables.
- [ ] Use `for...in` for objects.
- [ ] Understand `break` and `continue`.
