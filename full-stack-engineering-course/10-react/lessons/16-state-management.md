# Lesson 16: State Management

## Learning Objectives
- Differentiate between local, global, server, and URL state.
- Know when to lift state vs using a global store.
- Overview modern state managers: Zustand and Redux.

## Concept Explanation
As React apps grow, `useState` and `Context` aren't always enough. 
- **Local State:** State needed by one or a few tightly coupled components (use `useState`/`useReducer`).
- **Global Client State:** UI state accessed globally like theme, auth status, or a shopping cart (use Context, Zustand, or Redux).
- **Server State:** Data fetched from an API (use TanStack Query or SWR).

### Zustand Example
Zustand is a small, fast, and scalable bearbones state-management solution.

```tsx
import { create } from 'zustand'

interface BearState {
  bears: number
  increasePopulation: () => void
  removeAllBears: () => void
}

const useBearStore = create<BearState>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))

export function BearCounter() {
  const bears = useBearStore((state) => state.bears)
  return <h1>{bears} around here ...</h1>
}

export function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}
```

## Best Practices
- Avoid Redux for new projects unless strictly required by architecture; Zustand is simpler and requires less boilerplate.
- Do not store server data in global client state stores if you can avoid it. Use a specialized tool like TanStack Query.
