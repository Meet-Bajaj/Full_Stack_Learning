# Lesson 06: Union and Intersection Types

## Union Types
A value can be one of several types.
```typescript
let id: string | number;
```

## Intersection Types
Combining multiple types into one.
```typescript
type Employee = Person & { companyId: string };
```

## Discriminated Unions
Using a common literal property to differentiate union members.
```typescript
type Shape = 
  | { kind: "circle"; radius: number }
  | { kind: "square"; sideLength: number };
```
