# Module 51: Advanced Frontend Cheat Sheet

## React Render Lifecycle
- **Render Phase**: Pure calculation. React calls components to figure out what changed (Virtual DOM diffing/Reconciliation).
- **Commit Phase**: React mutates the actual DOM to match the new Virtual DOM. `useEffect` runs after this phase.

## TanStack Query Configs
- `staleTime`: How long data is considered fresh. (Default: 0ms). Fresh data is served from cache without a background refetch.
- `gcTime` (formerly `cacheTime`): How long inactive data stays in memory before garbage collection. (Default: 5 mins).

## Performance Hooks
- `useMemo(() => computeExpensively(), [deps])`: Caches a value between renders.
- `useCallback(fn, [deps])`: Caches a function definition between renders. Useful for passing stable references to child components wrapped in `React.memo`.
- `React.memo(Component, arePropsEqual)`: HOC that prevents a component from re-rendering if its props haven't changed.

## Next.js Rendering Strategies
- **CSR (Client-Side Rendering)**: Rendered entirely in browser.
- **SSR (Server-Side Rendering)**: Rendered on server per request.
- **SSG (Static Site Generation)**: Rendered at build time.
- **ISR (Incremental Static Regeneration)**: SSG, but updates static pages in the background after a timeout.
