# Lesson 09: Arrays (Deep Dive)

## Learning Objectives
- Create, access, and mutate arrays.
- Master functional iteration: `map`, `filter`, `reduce`.
- Understand array chaining and immutability.

## Creating and Mutating Arrays
Arrays in JS can hold mixed data types (though it's best practice to keep them uniform).
```javascript
const colors = ["red", "green", "blue"];
colors.push("yellow");    // Adds to end
colors.unshift("black");  // Adds to start
colors.pop();             // Removes from end
colors.shift();           // Removes from start
```

## Functional Iteration (CRITICAL)
In modern JS (especially React), we avoid mutating arrays and instead use methods that return *new* arrays.

### `map`
Transforms every item in the array. Returns a new array of the exact same length.
```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2); // [2, 4, 6]
```

### `filter`
Returns a new array containing only the items that return `true` for a condition.
```javascript
const ages = [15, 20, 35, 12];
const adults = ages.filter(age => age >= 18); // [20, 35]
```

### `reduce`
Accumulates all items into a single value (can be a number, string, object, etc.).
```javascript
const prices = [10, 20, 30];
const total = prices.reduce((accumulator, current) => accumulator + current, 0); 
// total is 60
```

### Finding Elements
- `find`: Returns the FIRST element that matches the condition.
- `some`: Returns `true` if AT LEAST ONE element matches.
- `every`: Returns `true` if ALL elements match.

## Chaining Methods
Because `map` and `filter` return arrays, you can chain them!
```javascript
const data = [1, 2, 3, 4, 5, 6];
const result = data
  .filter(n => n % 2 === 0) // Keep evens: [2, 4, 6]
  .map(n => n * 10);        // Multiply by 10: [20, 40, 60]
```

## Sorting
`sort()` converts everything to strings and sorts alphabetically by default!
To sort numbers, you MUST pass a comparator function.
```javascript
const nums = [10, 2, 30];
nums.sort((a, b) => a - b); // Ascending: [2, 10, 30]
```

## Summary Checklist
- [ ] Know `push`, `pop`, `shift`, `unshift`.
- [ ] Master `map`, `filter`, `reduce`.
- [ ] Remember that `sort` modifies the original array and requires a comparator for numbers.
