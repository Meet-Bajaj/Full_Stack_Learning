# Lesson 5: useEffect

## Learning Objectives
- Understand what side effects are in React.
- Learn to use the `useEffect` hook.
- Understand the dependency array and how it controls execution.
- Implement cleanup functions to avoid memory leaks.
- Recognize and fix common mistakes like infinite loops and stale closures.

## Concept Explanation & Mental Model
React components should ideally be pure: they take props and state and return JSX. However, applications need to interact with the outside world—fetching data, subscribing to events, or manipulating the DOM directly. These are called **side effects**. 

`useEffect` tells React that your component needs to do something *after* render. 

### Analogy
Think of a component like a chef preparing a dish (rendering). `useEffect` is like the chef telling the waiter to deliver the food to the customer *after* it's plated.

## Code Examples
### Basic Data Fetching
```tsx
import { useState, useEffect } from 'react';

export const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // The side effect
    let isMounted = true;
    
    fetch(`https://api.example.com/users/\${userId}`)
      .then(res => res.json())
      .then(data => {
        if (isMounted) setUser(data);
      });

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, [userId]); // Dependency array: only re-run if userId changes

  if (!user) return <p>Loading...</p>;
  return <div>{user.name}</div>;
};
```

## Common Pitfalls
- **Infinite Loops:** If you update a state variable inside `useEffect` without a proper dependency array, it triggers a re-render, which triggers `useEffect` again, and so on.
- **Stale Closures:** If you omit a state/prop from the dependency array, the effect might use an outdated value of that state/prop from a previous render.

## Best Practices
- Always include all variables used inside the effect in the dependency array (or use linters like `eslint-plugin-react-hooks`).
- Avoid unnecessary effects. If a value can be calculated during render, don't use `useEffect` for it.
