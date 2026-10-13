# Lesson 03: TypeScript Interview Questions

## Learning Objectives
- Understand the core differences between interfaces and types.
- Master generics, utility types, and type narrowing.
- Be able to explain TypeScript's compilation process and any-vs-unknown.

## 1. Type vs Interface

**Concept:** Both are used to define the shape of an object, but they have subtle differences.
- **Interfaces:** Can be merged (declaration merging). Better for defining object shapes and classes.
- **Types:** Can use unions, intersections, and mapped types. Better for complex type logic.

## 2. Generics

**Concept:** Generics allow you to create reusable components that can work over a variety of types rather than a single one.

```typescript
function identity<T>(arg: T): T {
    return arg;
}
let output = identity<string>("myString");
```

## 3. Utility Types

Understand the common utility types:
- `Partial<T>`: Makes all properties optional.
- `Required<T>`: Makes all properties required.
- `Readonly<T>`: Makes all properties readonly.
- `Record<K, T>`: Constructs an object type with property keys `K` and values `T`.
- `Pick<T, K>`: Constructs a type by picking the set of properties `K` from `T`.
- `Omit<T, K>`: Constructs a type by picking all properties from `T` and then removing `K`.

## 4. `any` vs `unknown`
- `any`: Bypasses type checking entirely. Avoid using it.
- `unknown`: The type-safe counterpart of `any`. You cannot perform operations on an `unknown` value without first narrowing its type.

## Summary & Checklist
- [ ] Explain when to use `type` vs `interface`.
- [ ] Write a generic function.
- [ ] Understand how to use `Pick` and `Omit`.
