# Lesson 07: Functions in TypeScript

## Typing Functions
```typescript
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

## Function Overloads
Defining multiple signatures for a single function.
```typescript
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}
```
