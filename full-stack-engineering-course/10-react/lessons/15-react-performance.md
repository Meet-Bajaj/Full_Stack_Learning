# Lesson 15: React Performance

## Learning Objectives
- Prevent unnecessary re-renders.
- Use `React.memo`, `useMemo`, and `useCallback`.
- Understand List Virtualization (windowing).
- Implement Code Splitting using `React.lazy` and `Suspense`.

## Concept Explanation
React is fast by default because of the Virtual DOM. However, large apps can suffer from performance issues if React re-renders too many heavy components too frequently, or if the initial JavaScript bundle is too large.

- **Memoization:** Caching the result of a render (`React.memo`), a calculation (`useMemo`), or a function reference (`useCallback`).
- **Virtualization:** Only rendering the rows of a list that are currently visible on the screen.
- **Code Splitting:** Loading JavaScript bundles only when they are needed.

## Code Examples

### React.lazy and Suspense
```tsx
import React, { Suspense } from 'react';

// The component is dynamically imported
const HeavyDashboard = React.lazy(() => import('./HeavyDashboard'));

export const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <Suspense fallback={<div>Loading dashboard...</div>}>
        <HeavyDashboard />
      </Suspense>
    </div>
  );
};
```

## Best Practices
- **Measure First:** Don't prematurely optimize. Use the React Profiler to identify bottlenecks before adding memoization.
- **State Colocation:** Moving state down to the component that actually needs it often solves re-render issues without needing memoization.
