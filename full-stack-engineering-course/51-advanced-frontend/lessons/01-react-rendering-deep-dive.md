# Lesson 1: React Rendering Deep Dive

## Learning Objectives
- Understand the Reconciliation algorithm
- Learn how React Fiber works
- Distinguish between the Render phase and Commit phase
- Understand concurrent rendering features

## Why it Exists
Understanding how React works under the hood is critical for debugging performance issues. If you don't know *when* and *why* React re-renders, you cannot optimize your app effectively.

## Mental Model
Think of React as an architect and the DOM as the construction crew.
1. **Render Phase (Architect)**: React draws up the blueprints (Virtual DOM). It compares the new blueprint with the old one (Reconciliation). This phase is pure and can be paused/aborted (Fiber).
2. **Commit Phase (Crew)**: React hands the exact changes to the browser DOM to build it. This phase is synchronous and cannot be interrupted.

## React Fiber
Fiber is a reimplementation of React's core algorithm. It allows React to pause, resume, or abandon rendering work. This enables concurrent features like `useTransition` and `Suspense`.

## Code Example: Profiling Renders
```tsx
import React, { Profiler } from 'react';

function onRenderCallback(
  id, phase, actualDuration, baseDuration, startTime, commitTime, interactions
) {
  console.log(`${id} [${phase}] took ${actualDuration}ms`);
}

export function App() {
  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <HeavyComponent />
    </Profiler>
  );
}
```

## Best Practices
- Never mutate state directly (React uses referential equality `Object.is` to bail out of renders).
- Keep render functions pure (no side effects). Side effects belong in event handlers or `useEffect`.

## Checklist
- [ ] Differentiate Render vs Commit phases
- [ ] Explain React Fiber simply
- [ ] Use React Profiler DevTools
