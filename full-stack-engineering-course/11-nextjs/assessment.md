# Module 11 Assessment

## Part 1: Conceptual Questions
1. Describe the journey of a request hitting a Next.js dynamic route utilizing ISR.
2. What are the security implications of Server Actions?

## Part 2: Coding Challenge
Build a small Next.js application that:
1. Uses the App Router.
2. Has a root layout with a navigation bar.
3. Fetches a list of posts from `https://jsonplaceholder.typicode.com/posts` in a Server Component.
4. Includes a Client Component toggle button on each post that toggles a "read/unread" state locally.

## Part 3: Debugging
Given the following code, identify why the build fails:
```tsx
import { useState } from 'react';

export default function ServerPage() {
  const [count, setCount] = useState(0);
  return <div onClick={() => setCount(count + 1)}>{count}</div>;
}
```
*Answer: `useState` and `onClick` are client-side features, but components are Server Components by default in the App Router. Needs `'use client'` directive.*
