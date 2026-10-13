# Lesson 2: State Management Patterns

## Learning Objectives
- Differentiate between local, global, client, and server state.
- Know when to use React Context vs Zustand vs Redux.
- Avoid unnecessary global state.

## Why it Exists
As frontend apps grow, passing props down many levels (prop drilling) becomes unmanageable. Global state management solutions exist to make data accessible anywhere, but misusing them leads to spaghetti code and poor performance.

## Mental Model
- **Local State (`useState`)**: Your wallet. Only you need to know what's in it.
- **Context API**: A family bulletin board. Good for rarely changing things (theme, user session) shared across a defined subtree.
- **Zustand / Redux**: A public bank ledger. Great for highly dynamic, complex global data that multiple unrelated components must read and update constantly.
- **Server State (TanStack Query)**: A cached copy of a library book. You borrow it, but the source of truth lives on the server.

## Zustand Code Example
```tsx
import create from 'zustand';

interface BearState {
  bears: number;
  increase: (by: number) => void;
}

const useStore = create<BearState>((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}));

// Usage in component
function BearCounter() {
  const bears = useStore((state) => state.bears);
  return <h1>{bears} around here ...</h1>;
}
```

## Checklist
- [ ] Define the 4 types of state
- [ ] Implement a Zustand store
- [ ] Refactor prop drilling using Context
