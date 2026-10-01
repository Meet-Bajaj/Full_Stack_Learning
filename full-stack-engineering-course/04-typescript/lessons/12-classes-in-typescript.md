# Lesson 12: Classes in TypeScript

## Modifiers
- `public`: Accessible anywhere (default).
- `private`: Accessible only within the class.
- `protected`: Accessible within the class and subclasses.

## Parameter Properties
Shorthand for creating properties from constructor parameters.
```typescript
class User {
  constructor(public name: string, private age: number) {}
}
```

## Implements
Ensuring a class satisfies an interface.
```typescript
interface Pingable {
  ping(): void;
}
class Sonar implements Pingable {
  ping() { console.log("ping!"); }
}
```
