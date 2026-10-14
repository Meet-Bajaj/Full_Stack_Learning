# TypeScript Cheat Sheet

## Basic Types
```typescript
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];
let notSure: any = 4; // Avoid when possible
let unknownVal: unknown = 4; // Safer than any
let empty: void = undefined;
```

## Interfaces & Type Aliases
```typescript
// Interface (Extendable, Object shapes)
interface User {
  id: number;
  name: string;
  email?: string; // Optional
  readonly createdAt: Date; // Readonly
}

interface Admin extends User {
  role: string;
}

// Type Alias (Unions, Intersections, Primitives)
type ID = number | string; // Union
type Point = { x: number; y: number };
type 3DPoint = Point & { z: number }; // Intersection
```

## Functions
```typescript
function add(x: number, y: number): number {
  return x + y;
}

// Type definition for a function
type MathFunc = (a: number, b: number) => number;
const multiply: MathFunc = (x, y) => x * y;
```

## Generics
```typescript
// Generic Function
function identity<T>(arg: T): T {
  return arg;
}
let output = identity<string>("myString");

// Generic Interface
interface Box<T> {
  value: T;
}
let numBox: Box<number> = { value: 42 };

// Generic Constraints
function getLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}
```

## Utility Types
```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type PartialTodo = Partial<Todo>;   // All fields optional
type ReadonlyTodo = Readonly<Todo>; // All fields readonly
type TodoPreview = Pick<Todo, "title" | "completed">; // Pick specific fields
type TodoInfo = Omit<Todo, "completed">; // Remove specific fields

type T1 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
type T2 = ReturnType<typeof add>; // number
```

## Type Narrowing (Type Guards)
```typescript
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}

// Custom Type Guard
function isString(test: any): test is string {
  return typeof test === "string";
}
```

## Enums
```typescript
// Numeric Enum
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

// String Enum
enum LogLevel {
  ERROR = "ERROR",
  WARN = "WARN",
  INFO = "INFO"
}
```

## Module Declarations (d.ts)
```typescript
// In a .d.ts file
declare module "my-library" {
  export function doSomething(): void;
  export const version: string;
}
```
