# Lesson 04: Objects and Interfaces

## Object Types
```typescript
let user: { name: string; age: number } = {
  name: "Bob",
  age: 30
};
```

## Interfaces
Interfaces are used to name object types.
```typescript
interface User {
  name: string;
  age: number;
  email?: string; // Optional property
  readonly id: number; // Readonly property
}
```

## Extending Interfaces
```typescript
interface Admin extends User {
  role: string;
}
```

## Index Signatures
When you don't know the exact property names but you know their type.
```typescript
interface Dictionary {
  [key: string]: string;
}
```
