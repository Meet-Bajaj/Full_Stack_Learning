# Lesson 6: Observer Pattern

## 🎯 Learning Objectives
- Understand event-driven programming within an application.
- Implement the Observer pattern (Pub/Sub).
- Use Node.js `EventEmitter`.

## 🧠 Mental Model & Real-World Analogy
**Analogy:** A YouTube channel. You (the Observer) subscribe to a channel (the Subject). When a new video is posted, all subscribers are notified automatically. You don't have to keep checking the channel page every 5 minutes.

**Mental Model:** An object (Subject) maintains a list of dependents (Observers) and notifies them automatically of any state changes.

## ❓ WHY does it exist?
To decouple the sender of a message from its receivers. Without it, the `UserService` would have to explicitly call the `EmailService` and `AnalyticsService` when a user registers, tightly coupling them together.

## 🏗️ Implementation (Node.js EventEmitter)

```typescript
import { EventEmitter } from 'events';

// 1. The Subject (Publisher)
class UserService extends EventEmitter {
  async register(email: string) {
    // Save to DB...
    const user = { id: 1, email };
    
    // Notify observers
    this.emit('userRegistered', user);
    return user;
  }
}

// 2. The Observers (Subscribers)
class EmailService {
  sendWelcomeEmail(user: any) {
    console.log(`Sending welcome email to ${user.email}`);
  }
}

// 3. Wiring it up
const userService = new UserService();
const emailService = new EmailService();

// Subscribe
userService.on('userRegistered', (user) => {
  emailService.sendWelcomeEmail(user);
});

// Trigger
userService.register('test@example.com');
```

## ⚠️ Common Mistakes
- **Memory Leaks:** Forgetting to unsubscribe (`removeListener`) when observers are destroyed, leading to ghost objects in memory.
- **Hidden Control Flow:** It becomes hard to trace what happens when an event fires because the logic is spread across the codebase.

## 🚀 Exercises
1. Implement a custom Subject/Observer class without using `EventEmitter`.
2. Decouple an order processing function by emitting events for inventory deduction and payment capture.

## ✅ Summary and Checklist
- [ ] Implement Pub/Sub.
- [ ] Decouple components using Events.
- [ ] Manage subscriber lifecycles.
