# Lesson 05: Type Aliases vs Interfaces

## Type Aliases
```typescript
type ID = string | number;
type User = { name: string, age: number };
```

## Differences
- Interfaces can be declaration merged (redeclared to add new properties).
- Types can represent unions, intersections, and primitives.

## Best Practices
Use `interface` for defining object shapes and API contracts. Use `type` for unions, intersections, and primitives.
