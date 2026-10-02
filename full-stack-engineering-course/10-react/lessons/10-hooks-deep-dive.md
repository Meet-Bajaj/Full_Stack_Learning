# Lesson 10: Hooks Deep Dive

## Learning Objectives
- Master built-in hooks: `useRef`, `useMemo`, `useCallback`, `useReducer`, `useContext`.
- Understand when and why to use each hook.
- Assess the performance implications of caching values and functions.

## Concept Explanations
- **`useRef`**: Returns a mutable ref object whose `.current` property is initialized to the passed argument. It persists for the full lifetime of the component and **does not trigger a re-render** when updated. Useful for accessing DOM elements or storing mutable values.
- **`useMemo`**: Returns a memoized value. It only recalculates the memoized value when one of the dependencies has changed. Useful for expensive calculations.
- **`useCallback`**: Returns a memoized callback. Useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
- **`useReducer`**: An alternative to `useState`. Useful for complex state logic that involves multiple sub-values or when the next state depends on the previous one.

## Code Examples

### useReducer
```tsx
import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: throw new Error();
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
};
```

## Best Practices
- Do not overuse `useMemo` and `useCallback`. The cost of memoization (allocating memory and checking dependencies) can sometimes be higher than just re-creating the function or value. Use them when you have proven performance bottlenecks or when referential equality is strictly required.
