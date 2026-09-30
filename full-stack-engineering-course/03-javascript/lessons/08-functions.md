# Lesson 08: Functions (CRITICAL)

## Learning Objectives
- Differentiate between function declarations, expressions, and arrow functions.
- Master parameters, arguments, rest, and default params.
- Understand closures, IIFE, and higher-order functions.

## Mental Model
A function is a reusable machine. You feed it raw materials (arguments), it processes them (body), and it outputs a finished product (return value). In JavaScript, functions are **First-Class Citizens**—they can be passed around like any other variable (strings, numbers).

---

## 1. Ways to Create a Function

### Function Declaration
The traditional way. These are **hoisted**, meaning you can call them before they appear in the code.
```javascript
console.log(add(2, 3)); // 5

function add(a, b) {
  return a + b;
}
```

### Function Expression
Assigning an anonymous function to a variable. These are **not hoisted**.
```javascript
const multiply = function(a, b) {
  return a * b;
};
```

### Arrow Functions (ES6)
Concise syntax, heavily used in modern JS and React. They have unique `this` binding behavior (covered in a later lesson).
```javascript
// Explicit return
const subtract = (a, b) => {
  return a - b;
};

// Implicit return (one-liner)
const square = x => x * x; 
```

---

## 2. Parameters and Arguments

### Default Parameters
Assign fallback values if an argument isn't passed.
```javascript
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
greet(); // "Hello, Guest!"
```

### Rest Parameters (`...`)
Gather an indefinite number of arguments into an array.
```javascript
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
sumAll(1, 2, 3, 4); // 10
```

---

## 3. Higher-Order Functions
Because functions are variables, you can pass a function into another function, or return a function from a function.

```javascript
// action is a function passed as an argument (a Callback)
function performOperation(a, b, action) {
  return action(a, b);
}

const result = performOperation(10, 5, subtract); // 5
```

---

## 4. IIFE (Immediately Invoked Function Expression)
A function that runs the moment it is defined. Historically used to create private scopes before `let` and `const` existed.
```javascript
(function() {
  const privateConfig = "Secret";
  console.log("System started with", privateConfig);
})();
// privateConfig is not accessible here
```

## Common Mistakes
- **Forgetting `return` in arrow functions with curly braces:**
  ```javascript
  const badSquare = x => { x * x }; // Returns undefined!
  const goodSquare = x => { return x * x };
  ```
- **Confusing arguments vs parameters:** Parameters are the variables in the definition. Arguments are the actual values passed in.

## Summary Checklist
- [ ] Function Declarations vs Expressions.
- [ ] Arrow function syntax.
- [ ] Default and Rest parameters.
- [ ] Higher-order functions concept.
