# Lesson 11: Type Narrowing

## Type Guards
Narrowing a broad type (like `any` or a union) to a more specific type.

### `typeof`
```typescript
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
```

### Custom Type Guards (is)
```typescript
function isString(val: any): val is string {
  return typeof val === "string";
}
```
