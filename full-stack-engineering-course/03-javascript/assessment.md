# Module 03 Assessment

## Part 1: Multiple Choice

1. Which method does NOT mutate the original array?
   a) `push()`
   b) `sort()`
   c) `splice()`
   d) `concat()`

2. What will `console.log(typeof null)` output?
   a) `"null"`
   b) `"object"`
   c) `"undefined"`
   d) `"string"`

3. What is the output of `console.log(1 + "2" + "2")`?
   a) `"122"`
   b) `"5"`
   c) `14`
   d) `"32"`

## Part 2: Code Debugging

**Buggy Code:**
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
// Outputs: 3, 3, 3. We want 0, 1, 2.
```
**Task:** Fix the code so it outputs 0, 1, 2. Explain why the bug occurs.

## Part 3: Coding Challenges

**Challenge 1: Array Manipulation**
Write a function `getTopPerformers(students)` that takes an array of student objects `{name: string, score: number}`. Return an array of names of students who scored above 85, sorted alphabetically.

**Challenge 2: Async Data Fetching**
Write an `async` function `fetchUserPosts(userId)` that fetches user data from `https://jsonplaceholder.typicode.com/users/{userId}` and then fetches their posts from `https://jsonplaceholder.typicode.com/posts?userId={userId}`. Return an object containing `{ user, posts }`. Implement proper error handling.

## Part 4: Architecture & Design
Explain how you would structure a JavaScript file handling complex DOM manipulation without using a framework like React. Discuss how you separate state, event listeners, and DOM updates.
