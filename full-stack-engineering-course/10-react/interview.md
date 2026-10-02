# React Interview Questions

## Junior Level
1. **What is the Virtual DOM and how does it work?**
   - React creates an in-memory representation of the DOM. When state changes, it creates a new Virtual DOM, diffs it against the previous one, and updates only the changed nodes in the real DOM.
2. **What is the difference between state and props?**
   - Props get passed to the component (like function arguments) and are read-only. State is managed within the component (like local variables) and can be changed.
3. **What is JSX?**
   - A syntax extension to JS that allows writing HTML-like code inside JS.
4. **Why do we need a `key` prop in lists?**
   - To help React identify which items have changed, been added, or removed, optimizing the rendering process.

## Mid Level
1. **What are the Rules of Hooks?**
   - Call at the top level only (no loops/conditions).
   - Call from React function components or custom Hooks only.
2. **Explain the `useEffect` dependency array.**
   - It tells React when to re-run the effect. Empty `[]` runs once on mount. No array runs on every render. `[a, b]` runs when `a` or `b` change.
3. **What is prop drilling and how do you avoid it?**
   - Passing props through intermediate components that don't need them. Avoid via Context API, state management libraries, or component composition.

## Senior Level
1. **Explain React's Reconciliation and Fiber architecture.**
   - Fiber is React's reimplementation of the stack algorithm. It can pause, abort, or reuse work as new updates come in, prioritizing different types of updates (e.g. animation vs data fetch).
2. **How do you optimize a large React application?**
   - Code splitting (React.lazy), virtualization for large lists, memoization (useMemo/React.memo), avoiding anonymous functions in props where they cause heavy re-renders, and decoupling server state (TanStack Query) from global UI state.
3. **Explain Server Components vs Client Components.**
   - React Server Components (RSC) render exclusively on the server, resulting in zero bundle size for those components on the client, and allowing direct database access without an API layer.
