# Lesson 08: Generics

## What are Generics?
Generics allow you to create reusable components that work with a variety of types.
**Mental Model:** Variables for types.

## Syntax
```typescript
function identity<T>(arg: T): T {
  return arg;
}
```

## Constraints
```typescript
function logLength<T extends { length: number }>(arg: T): T {
  console.log(arg.length);
  return arg;
}
```
