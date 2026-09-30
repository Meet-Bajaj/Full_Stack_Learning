# Lesson 10: Objects

## Learning Objectives
- Define and access objects.
- Use computed properties and shorthand syntax.
- Understand object references vs copies.
- Use `Object.keys`, `values`, and `entries`.

## Object Literals and Access
Objects are collections of key-value pairs. Keys are strings (or Symbols), values can be anything.
```javascript
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2022
};

// Dot notation
console.log(car.make); 

// Bracket notation (useful when the key is stored in a variable)
const keyName = "model";
console.log(car[keyName]); 
```

## Shorthand Properties
If the variable name matches the key name, you don't need to type it twice.
```javascript
const name = "Alice";
const age = 30;
// Instead of { name: name, age: age }
const user = { name, age }; 
```

## Built-in Object Methods
How do you loop through an object? You convert it to an array first!
- `Object.keys(car)` -> `["make", "model", "year"]`
- `Object.values(car)` -> `["Toyota", "Camry", 2022]`
- `Object.entries(car)` -> `[["make", "Toyota"], ["model", "Camry"], ["year", 2022]]`

## References vs Copies (CRITICAL)
Primitives (strings, numbers) are passed by **value**.
Objects and arrays are passed by **reference** (memory address).

```javascript
let obj1 = { name: "Bob" };
let obj2 = obj1; 

obj2.name = "Charlie";

console.log(obj1.name); // "Charlie"! 
```
*Why?* `obj1` and `obj2` point to the exact same house in memory. If `obj2` paints the house, `obj1` sees a painted house.

**How to copy?**
```javascript
// Shallow copy using Spread operator
let obj3 = { ...obj1 };

// Deep copy using modern native method
let deepObj = structuredClone(obj1);
```

## Summary Checklist
- [ ] Dot notation vs Bracket notation.
- [ ] Use `Object.keys/values/entries`.
- [ ] Understand pass by reference. Never mutate state directly in modern frameworks!
