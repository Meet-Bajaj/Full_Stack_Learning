# TypeScript Cheatsheet

## Primitives
```typescript
let str: string = "hello";
let num: number = 42;
let bool: boolean = true;
```

## Functions
```typescript
const fn = (x: number): string => x.toString();
```

## Objects
```typescript
interface User {
  id: number;
  name?: string; // Optional
}
```

## Utility Types
- `Partial<T>`
- `Required<T>`
- `Pick<T, K>`
- `Omit<T, K>`
