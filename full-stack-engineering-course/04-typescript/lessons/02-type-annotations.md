# Lesson 02: Type Annotations

## Basic Types
- `string`, `number`, `boolean`
- `any` (avoid when possible)
- `unknown` (safer alternative to any)
- `void` (functions that return nothing)
- `never` (functions that never return, e.g., throw errors)
- `null`, `undefined`

## Type Annotations vs Inference
TypeScript can infer types automatically. You don't always need to explicitly annotate.

```typescript
// Annotation
let age: number = 25;

// Inference
let name = "Alice"; // TS infers 'string'
```

## Best Practices
Rely on inference for variables initialized immediately. Use annotations for function parameters and returns.
