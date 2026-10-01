# Lesson 03: Arrays and Tuples

## Arrays
```typescript
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"];
```

## Tuples
Tuples are arrays with fixed lengths and specific types at specific indices.
```typescript
let user: [string, number] = ["Alice", 25];
```

## Readonly Arrays
```typescript
let coords: readonly number[] = [10, 20];
```

## Const Assertions
```typescript
let routes = ["/home", "/about"] as const; // readonly ["/home", "/about"]
```
