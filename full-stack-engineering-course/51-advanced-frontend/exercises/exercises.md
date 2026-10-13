# Module 51 Exercises

## Exercise 1: Implement an Optimistic Update
**Task**: Build a "Like Button" using TanStack Query.
1. When clicked, instantly increment the like count in the UI.
2. Send the mutation to a mock API.
3. If the mock API fails (simulate a 50% failure rate), roll back the like count to its previous state.

## Exercise 2: Zustand Store with Persist
**Task**: Create a shopping cart store using Zustand.
1. Implement `addItem`, `removeItem`, and `clearCart` actions.
2. Use Zustand's `persist` middleware to save the cart state to `localStorage`.
3. Display the cart contents in a React component and ensure it survives a page reload.

## Exercise 3: React.memo and useCallback
**Task**: Optimize a slow application.
1. You are provided an app where typing in a text input causes 1,000 list items to re-render.
2. Use `React.memo` on the list item component.
3. Use `useCallback` on the delete handler passed to the list items to prevent unnecessary re-renders.
