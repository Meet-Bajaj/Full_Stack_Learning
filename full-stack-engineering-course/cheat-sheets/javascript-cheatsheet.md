# JavaScript Cheat Sheet

## Types & Variables
```javascript
// Variable Declarations
var x = 1;      // Function-scoped (Avoid)
let y = 2;      // Block-scoped, mutable
const z = 3;    // Block-scoped, immutable reference

// Primitive Types
const str = "hello";      // String
const num = 42;           // Number
const big = 90071992n;    // BigInt
const bool = true;        // Boolean
const undef = undefined;  // Undefined
const nll = null;         // Null (typeof returns "object")
const sym = Symbol("id"); // Symbol
```

## Arrays
```javascript
const arr = [1, 2, 3];

// Adding/Removing
arr.push(4);      // Add to end
arr.pop();        // Remove from end
arr.unshift(0);   // Add to start
arr.shift();      // Remove from start

// Methods
const doubled = arr.map(x => x * 2);
const evens = arr.filter(x => x % 2 === 0);
const sum = arr.reduce((acc, curr) => acc + curr, 0);
const found = arr.find(x => x > 1);
const exists = arr.some(x => x > 1);
const all = arr.every(x => x > 0);
```

## Objects
```javascript
const obj = { a: 1, b: 2 };
const keys = Object.keys(obj);      // ['a', 'b']
const values = Object.values(obj);  // [1, 2]
const entries = Object.entries(obj);// [['a',1], ['b',2]]

// Freezing/Sealing
Object.freeze(obj); // Cannot mutate/add/remove
Object.seal(obj);   // Can mutate existing, cannot add/remove
```

## Destructuring & Spread
```javascript
// Array Destructuring
const [first, ...rest] = [1, 2, 3, 4]; // first=1, rest=[2,3,4]

// Object Destructuring
const user = { name: "John", age: 30, city: "NY" };
const { name, age: years, ...details } = user; // name="John", years=30, details={city:"NY"}

// Spread Operator
const newArr = [...arr, 5, 6];
const newObj = { ...obj, c: 3 };
```

## Functions
```javascript
// Function Declaration
function greet(name) { return `Hello ${name}`; }

// Arrow Functions
const greetArrow = (name) => `Hello ${name}`;

// Default Parameters
const power = (base, exp = 2) => base ** exp;
```

## Async/Await & Promises
```javascript
// Promise
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data"), 1000);
});

// Async/Await
async function getData() {
  try {
    const data = await fetchData;
    console.log(data);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Done");
  }
}
```

## ES Modules
```javascript
// Exporting
export const x = 1;
export default function() {}

// Importing
import defaultFunc, { x as myX } from './module.js';
import * as Module from './module.js';
```

## Classes
```javascript
class Person {
  #privateField = 42; // Private field (ES2022)
  
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
  
  static getSpecies() {
    return "Human";
  }
}
```
