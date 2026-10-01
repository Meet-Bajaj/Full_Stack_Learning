# Lesson 10: Enums

## Numeric Enums
```typescript
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}
```

## String Enums
```typescript
enum Status {
  Success = "SUCCESS",
  Failure = "FAILURE"
}
```

## Const Enums vs Union Types
Often, union types of literals (`"SUCCESS" | "FAILURE"`) are preferred over enums in modern TS.
