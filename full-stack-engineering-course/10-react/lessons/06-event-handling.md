# Lesson 6: Event Handling

## Learning Objectives
- Handle events in React components.
- Understand React's `SyntheticEvent`.
- Prevent default behavior and stop propagation.
- Understand event delegation in React.

## Concept Explanation
Handling events with React elements is very similar to handling events on DOM elements. There are some syntactic differences:
- React events are named using camelCase, rather than lowercase.
- With JSX you pass a function as the event handler, rather than a string.

React wraps native browser events in its own `SyntheticEvent` to ensure cross-browser compatibility. Under the hood, React attaches one main event listener to the root element (Event Delegation) instead of attaching individual listeners to every node.

## Code Examples
```tsx
export const Form = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents the page from reloading
    console.log('Form submitted!');
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevents the event from bubbling up
    console.log('Button clicked!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <button onClick={handleClick} type="submit">Submit</button>
    </form>
  );
};
```

## Best Practices
- Pass functions by reference (e.g., `onClick={handleClick}`) instead of calling them inline `onClick={handleClick()}` which executes immediately during render.
- Use inline arrow functions `onClick={() => handle(id)}` only when you need to pass arguments, though be aware it creates a new function on every render (rarely a performance issue unless passed to memoized child components).
