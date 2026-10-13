# Module 52: Interview Preparation - Multiple Choice Questions

## Beginner
**Q1: What does a closure in JavaScript allow?**
A) It prevents variables from being garbage collected indefinitely.
B) It allows an inner function to access an outer function's scope even after the outer function has returned.
C) It blocks the event loop until the function completes.
D) It converts synchronous code to asynchronous code.
**Correct Answer:** B
**Explanation:** A closure is a function bundled together with its lexical environment.

**Q2: Which HTTP method is considered idempotent?**
A) POST
B) PATCH
C) PUT
D) CONNECT
**Correct Answer:** C
**Explanation:** PUT is idempotent because making the same PUT request multiple times will have the same effect as making it once.

## Intermediate
**Q3: In React, what is the main difference between `useMemo` and `useCallback`?**
A) `useMemo` memoizes a value, `useCallback` memoizes a function definition.
B) `useCallback` memoizes a value, `useMemo` memoizes a function definition.
C) `useMemo` is used for class components, `useCallback` is for functional components.
D) There is no difference, they are aliases.
**Correct Answer:** A
**Explanation:** `useMemo` returns a memoized value, while `useCallback` returns a memoized callback function.

**Q4: Which of the following is true about a SQL Left Join?**
A) It returns only records that have matches in both tables.
B) It returns all records from the left table and the matched records from the right table.
C) It returns all records from both tables.
D) It returns all records from the right table and matched records from the left.
**Correct Answer:** B

## Advanced
**Q5: What is the primary advantage of Incremental Static Regeneration (ISR) in Next.js?**
A) It runs purely on the client side, saving server costs.
B) It allows you to update static pages in the background without needing to rebuild the entire site.
C) It renders the page on every single request to guarantee fresh data.
D) It converts React components into pure HTML/CSS.
**Correct Answer:** B

**Q6: In the Node.js Event Loop, which phase executes `setImmediate()` callbacks?**
A) Timers
B) Poll
C) Check
D) Pending Callbacks
**Correct Answer:** C
**Explanation:** `setImmediate()` is designed to execute scripts once the current poll phase completes, which happens in the Check phase.
