# Lesson 8: Decorator Pattern

## 🎯 Learning Objectives
- Dynamically add behavior to objects without subclassing.
- Understand TypeScript and NestJS decorators.
- Differentiate structural decorators vs TS/ES decorators.

## 🧠 Mental Model & Real-World Analogy
**Analogy:** Putting on winter clothes. You start as a basic person object. It gets cold, so you "decorate" yourself with a sweater. Still cold? Decorate with a jacket. You haven't changed who you are (the base object), but you've added new behaviors (warmth).

**Mental Model:** A structural pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.

## ❓ WHY does it exist?
Subclassing (Inheritance) can lead to a massive explosion of classes (e.g., `CompressedFile`, `EncryptedFile`, `CompressedAndEncryptedFile`). Decorators provide a flexible alternative to subclassing for extending functionality.

## 🏗️ Implementation (Classic Pattern)

```typescript
interface Notifier {
  send(message: string): void;
}

class BaseNotifier implements Notifier {
  send(message: string) { console.log(`Email: ${message}`); }
}

// The Decorator Base
class NotifierDecorator implements Notifier {
  constructor(protected wrappee: Notifier) {}
  send(message: string) { this.wrappee.send(message); }
}

// Concrete Decorator
class SMSDecorator extends NotifierDecorator {
  send(message: string) {
    super.send(message); // call the wrapped object
    console.log(`SMS: ${message}`); // add new behavior
  }
}

// Usage
let notifier = new BaseNotifier();
notifier = new SMSDecorator(notifier);
notifier.send("Alert!"); // Sends Email AND SMS
```

## 🏗️ TypeScript/NestJS Decorators
TypeScript provides a metadata-based decorator syntax (`@`).
```typescript
function LogExecutionTime(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.time(propertyKey);
    const result = originalMethod.apply(this, args);
    console.timeEnd(propertyKey);
    return result;
  };
}

class Task {
  @LogExecutionTime
  run() {
    // do work
  }
}
```

## ⚠️ Common Mistakes
- **Overusing TS Decorators:** Creating too much "magic" that obscures control flow, making debugging a nightmare.

## 🚀 Exercises
1. Write a TS decorator `@RequiresRole('admin')` to protect a class method.

## ✅ Summary and Checklist
- [ ] Understand Decorator vs Inheritance.
- [ ] Implement wrapper decorators.
- [ ] Create basic TS decorators.
