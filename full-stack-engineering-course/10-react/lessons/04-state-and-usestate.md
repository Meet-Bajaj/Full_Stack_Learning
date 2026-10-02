# Lesson 4: State and useState

## Learning Objectives
- Understand component state.
- Use the `useState` hook.
- Implement state updates correctly.
- Learn about state batching and immutable updates.

## Concept Explanation
State represents the memory of a component. Unlike props, which are passed from the parent and are read-only, state is managed within the component and can change over time.

## Code Examples
```tsx
import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    // Functional update form for accuracy when depending on previous state
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
```

## Best Practices
- Treat state as immutable. Never mutate state directly (e.g., `state.count = 1`).
- Lift state up to the closest common ancestor when multiple components need to share it.
