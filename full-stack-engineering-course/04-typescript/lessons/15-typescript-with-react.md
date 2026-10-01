# Lesson 15: TypeScript with React

## Typing Components
```typescript
type ButtonProps = {
  title: string;
  onClick: () => void;
};

const Button = ({ title, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{title}</button>;
};
```

## Typing Hooks
- `useState<User | null>(null)`
- `useRef<HTMLInputElement>(null)`

## Events
- `React.MouseEvent<HTMLButtonElement>`
- `React.ChangeEvent<HTMLInputElement>`
