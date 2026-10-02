# Lesson 8: Lists and Keys

## Learning Objectives
- Render multiple components from arrays using `.map()`.
- Understand the importance of the `key` prop.
- Identify the performance implications of incorrect keys.

## Concept Explanation
In React, you transform arrays of data into arrays of JSX elements using the JavaScript `map()` function. 

React needs a `key` prop on elements inside a list to identify which items have changed, been added, or been removed. Keys give the elements a stable identity.

## Code Examples
```tsx
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

export const UserList = () => {
  return (
    <ul>
      {users.map(user => (
        // The key must be unique among siblings
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
```

## Best Practices for Keys
- **Use unique IDs from your data:** This is the most reliable approach.
- **Do NOT use the array index as a key** if the order of items might change (e.g., sorting, filtering, adding/removing). Using indices can cause state bugs and performance issues.
- **Keys must not change:** Do not generate keys on the fly like `key={Math.random()}`. This will force React to unmount and remount the component on every render, destroying its state and ruining performance.
