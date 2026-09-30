# Lesson 11: Destructuring and Spread

## Learning Objectives
- Use Object and Array Destructuring.
- Use the Spread operator for shallow copying and merging.
- Use the Rest operator to collect arguments.

## Destructuring
Destructuring allows you to unpack values from arrays or properties from objects into distinct variables concisely.

### Object Destructuring
```javascript
const user = { name: "Alice", role: "Admin", age: 25 };

// Extracting properties
const { name, role } = user;
console.log(name); // "Alice"

// Providing defaults & renaming
const { name: fullName, status = "Active" } = user;
console.log(fullName, status); // "Alice", "Active"
```

### Array Destructuring
```javascript
const colors = ["red", "green", "blue"];

// Order matters here!
const [firstColor, secondColor] = colors;
console.log(firstColor); // "red"

// Skipping items
const [, , thirdColor] = colors;
```

## Spread Operator (`...`)
Expands an iterable (like an array or object) into its individual elements.

### Copying and Merging Arrays
```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2, 5]; // [1, 2, 3, 4, 5]
```

### Copying and Merging Objects
```javascript
const baseUser = { id: 1, name: "Bob" };
// Update the name, add a role
const updatedUser = { ...baseUser, name: "Robert", role: "User" };
// { id: 1, name: "Robert", role: "User" }
```

## Rest Operator (`...`)
Looks identical to Spread, but does the opposite. Spread *expands*, Rest *collects*. It's used in function arguments or destructuring.
```javascript
const [first, ...remaining] = [10, 20, 30, 40];
console.log(remaining); // [20, 30, 40]
```

## Summary Checklist
- [ ] Understand `{}` for objects, `[]` for arrays in destructuring.
- [ ] Use Spread to avoid mutating original objects/arrays.
- [ ] Know the difference between Spread (expand) and Rest (collect).
