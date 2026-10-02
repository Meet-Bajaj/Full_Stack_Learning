# Lesson 3: Components

## Learning Objectives
- Write functional components.
- Understand and use props to pass data.
- Utilize the `children` prop for composition.
- Learn when and how to split components.

## Concept Explanation
Components are the building blocks of a React application. They are reusable UI elements that accept inputs (props) and return React elements describing what should appear on the screen.

## Code Examples
```tsx
// A button component using props
const Button = ({ onClick, children, variant = 'primary' }) => {
  return (
    <button className={`btn-\${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

// Using the component
export const App = () => {
  return (
    <Button onClick={() => alert('Clicked!')} variant="secondary">
      Click Me
    </Button>
  );
};
```

## Best Practices
- Break down large components into smaller, reusable pieces.
- Keep components pure: given the same props, they should return the same JSX.
