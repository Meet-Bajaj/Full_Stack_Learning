# Lesson 14: Advanced Types

## Mapped Types
Creating types by transforming properties of an existing type.
```typescript
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};
```

## Conditional Types
```typescript
type NonNullable<T> = T extends null | undefined ? never : T;
```

## Template Literal Types
```typescript
type EventName = "click" | "hover";
type HandlerName = `on${Capitalize<EventName>}`; // "onClick" | "onHover"
```
