# Lesson 15: Async / Await

## Learning Objectives
- Write `async` functions.
- Use `await` to unwrap Promises sequentially.
- Handle errors in async functions.

## The Evolution of Async
We went from **Callbacks** (pyramid of doom) ➡️ **Promises** (chaining `.then()`) ➡️ **Async/Await** (synchronous-looking code).

`async/await` is syntactic sugar on top of Promises. It does exactly the same thing, but it is vastly easier to read.

## The `async` keyword
Putting `async` in front of a function automatically makes it return a Promise.
```javascript
async function greet() {
  return "Hello!";
}
greet().then(console.log); // "Hello!"
```

## The `await` keyword
`await` can ONLY be used inside an `async` function. It pauses the execution of that specific function until the Promise resolves, then "unwraps" the result.

**Old Promise Way:**
```javascript
function getUser() {
  fetch('https://api.example.com/user')
    .then(res => res.json())
    .then(data => console.log(data));
}
```

**New Async/Await Way:**
```javascript
async function getUser() {
  const res = await fetch('https://api.example.com/user');
  const data = await res.json();
  console.log(data);
}
```

## Error Handling
Since there is no `.catch()` chain, we use standard `try/catch` blocks.
```javascript
async function getUser() {
  try {
    const res = await fetch('https://api.example.com/user');
    if (!res.ok) throw new Error("Network response was not OK");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch failed:", error.message);
  }
}
```

## Sequential vs Concurrent
Watch out for the performance trap!
**Sequential (Slow):**
```javascript
const user = await fetchUser(); // Takes 1s
const posts = await fetchPosts(); // Waits 1s, then takes 1s
// Total: 2 seconds
```

**Concurrent (Fast - using Promise.all):**
```javascript
const [user, posts] = await Promise.all([ fetchUser(), fetchPosts() ]);
// Both start immediately. Total: 1 second.
```

## Summary Checklist
- [ ] Use `async/await` for readable asynchronous code.
- [ ] Use `try/catch` for error handling.
- [ ] Remember to use `Promise.all` when requests do not depend on each other.
