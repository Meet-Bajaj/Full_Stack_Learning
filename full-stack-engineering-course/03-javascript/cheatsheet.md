# JavaScript Cheat Sheet

## Variables & Scoping
- `let`: Block-scoped, mutable.
- `const`: Block-scoped, immutable reference (objects/arrays can still be mutated).
- `var`: Function-scoped (Avoid using in modern code).

## Arrow Functions
```javascript
// Single parameter, implicit return
const square = x => x * x;

// Multiple parameters, explicit return
const add = (a, b) => {
  return a + b;
};
```

## Template Literals
```javascript
const name = "Alice";
const greeting = `Hello, ${name}! 
You can do multi-line strings easily.`;
```

## Destructuring
```javascript
// Array
const [first, second, ...rest] = [1, 2, 3, 4, 5];

// Object
const user = { id: 1, username: 'bob', age: 25 };
const { username, age, role = 'user' } = user;
```

## Spread & Rest Operator (`...`)
```javascript
// Spread: expands iterables
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]
const objCopy = { ...user, active: true };

// Rest: collects arguments into an array
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
```

## Array Methods
- `map(fn)`: Creates a new array with the results of calling a function for every element.
- `filter(fn)`: Creates a new array with elements that pass the test.
- `reduce(fn, initialValue)`: Executes a reducer function on each element, resulting in a single output value.
- `find(fn)`: Returns the first element matching the test.
- `some(fn)`: Returns true if at least one element matches.
- `every(fn)`: Returns true if all elements match.

## Nullish Coalescing (`??`) & Optional Chaining (`?.`)
```javascript
// Optional chaining: safely accesses nested properties
const zipCode = user?.address?.zipCode; // Returns undefined if address is null/undefined

// Nullish Coalescing: fallback only for null or undefined (not false or 0)
const maxLimit = user.limit ?? 100;
```

## Promises & Async/Await
```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch failed:', error);
  }
}
```
