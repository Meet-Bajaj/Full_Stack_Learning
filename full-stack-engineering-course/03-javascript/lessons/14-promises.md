# Lesson 14: Promises

## Learning Objectives
- Understand what a Promise is.
- Chain `.then()`, `.catch()`, and `.finally()`.
- Use Promise concurrency methods (`Promise.all`, etc.).

## What is a Promise?
A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.
It has 3 states:
1. **Pending:** Initial state, neither fulfilled nor rejected.
2. **Fulfilled (Resolved):** The operation completed successfully.
3. **Rejected:** The operation failed.

## Creating and Consuming a Promise
```javascript
// 1. Creating (Usually done by library authors, e.g., fetch API)
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) resolve("Data fetched!");
    else reject(new Error("Network failed"));
  }, 1000);
});

// 2. Consuming (What you will do 99% of the time)
myPromise
  .then(data => {
    console.log(data); // "Data fetched!"
  })
  .catch(error => {
    console.error(error.message);
  })
  .finally(() => {
    console.log("Cleanup done.");
  });
```

## Chaining
`.then()` always returns a new Promise, meaning you can chain them to avoid Callback Hell.
```javascript
fetchUserData()
  .then(user => fetchUserPosts(user.id))
  .then(posts => console.log("Posts:", posts))
  .catch(err => console.error("Something went wrong along the chain:", err));
```

## Concurrency Methods
Sometimes you want to run multiple promises at the same time, rather than sequentially.

### `Promise.all()`
Waits for ALL promises to resolve. If even ONE rejects, the whole `Promise.all` rejects immediately ("fail-fast").
```javascript
const [users, posts] = await Promise.all([ fetchUsers(), fetchPosts() ]);
```

### `Promise.allSettled()`
Waits for ALL promises to finish, regardless of whether they resolved or rejected. Returns an array describing each outcome.

### `Promise.race()`
Returns the result of the FIRST promise to finish, whether it resolved or rejected.

### `Promise.any()`
Returns the FIRST promise to resolve (ignores rejections unless they all reject).

## Summary Checklist
- [ ] Understand the 3 states of a Promise.
- [ ] Use `.then()` and `.catch()`.
- [ ] Use `Promise.all()` to speed up independent asynchronous tasks.
