# Lesson 19: React with TypeScript

## Learning Objectives
- Type React component props and state.
- Handle event types correctly.
- Use generic components.
- Utilize React utility types.

## Concept Explanation
TypeScript adds static typing to React, providing autocomplete, self-documenting code, and compile-time error checking, which drastically reduces runtime bugs.

## Code Examples

### Typing Props and State
```tsx
import React, { useState } from 'react';

// Define the shape of props
interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean; // Optional prop
}

export const Button = ({ label, onClick, disabled = false }: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export const Counter = () => {
  // Inferring state type vs explicit type
  const [count, setCount] = useState<number>(0); 
  // For complex state: useState<User | null>(null)

  return <Button label={`Count: \${count}`} onClick={() => setCount(c => c + 1)} />;
};
```

## Best Practices
- Prefer `interface` or `type` aliases for component props over inline typing.
- When passing `children`, type it as `ReactNode`.
- Avoid `any`. Use `unknown` if you truly don't know the type, but typically everything in React can be strongly typed.
