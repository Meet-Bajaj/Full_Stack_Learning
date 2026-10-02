# Lesson 11: Custom Hooks

## Learning Objectives
- Extract component logic into reusable functions.
- Follow the Rules of Hooks.
- Build common custom hooks (`useToggle`, `useLocalStorage`, `useDebounce`).

## Concept Explanation
Custom hooks allow you to extract stateful logic from a component so it can be tested independently and reused. A custom Hook is a JavaScript function whose name starts with "use" and that may call other Hooks.

## Code Examples

### useLocalStorage
```tsx
import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(error);
    }
  };

  return [storedValue, setValue] as const;
}
```

## Rules of Hooks
1. **Only Call Hooks at the Top Level:** Don't call Hooks inside loops, conditions, or nested functions.
2. **Only Call Hooks from React Functions:** Call them from React functional components or from custom Hooks.

## Best Practices
- Keep custom hooks focused on a single responsibility.
- Document the return types clearly, especially when returning tuples (arrays) like `[value, setValue]`.
