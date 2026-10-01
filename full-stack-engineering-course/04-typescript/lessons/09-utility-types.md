# Lesson 09: Utility Types

TypeScript provides several built-in utility types to facilitate common type transformations.

- `Partial<T>`: Makes all properties optional.
- `Required<T>`: Makes all properties required.
- `Readonly<T>`: Makes all properties readonly.
- `Pick<T, K>`: Constructs a type picking properties K from T.
- `Omit<T, K>`: Constructs a type omitting properties K from T.
- `Record<K, T>`: Constructs an object type with keys K and values T.
- `ReturnType<T>`: Extracts the return type of a function type.
