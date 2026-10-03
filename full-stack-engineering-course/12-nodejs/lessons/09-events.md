# Lesson 9: Events and EventEmitter

Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture. The `EventEmitter` class is at the core of this.

## The EventEmitter Class

```javascript
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// 1. Listen for the event
myEmitter.on('userJoined', (username) => {
  console.log(`${username} has joined the chat!`);
});

// 2. Emit the event
myEmitter.emit('userJoined', 'Alice');
```

## Common Patterns
Instead of using the raw `EventEmitter`, you usually extend it.

```javascript
const EventEmitter = require('events');

class TicketManager extends EventEmitter {
  constructor(supply) {
    super();
    this.supply = supply;
  }

  buy(email, price) {
    if (this.supply > 0) {
      this.supply--;
      this.emit('buy', email, price, Date.now());
    } else {
      this.emit('error', new Error('Out of tickets'));
    }
  }
}

const manager = new TicketManager(10);
manager.on('buy', (email, price, timestamp) => {
  console.log(`Ticket bought by ${email} for $${price} at ${timestamp}`);
});
manager.buy('test@test.com', 20);
```

## Error Events
**CRITICAL:** If an EventEmitter emits an `'error'` event and no listener is attached to it, Node.js will print the stack trace and **crash the process**.

```javascript
myEmitter.on('error', (err) => {
  console.error('Handled silently:', err.message);
});
myEmitter.emit('error', new Error('Something broke!')); // Safe
```

## `once` and Removing Listeners
- `myEmitter.once('event', cb)`: Listens to the event only the first time it occurs.
- `myEmitter.removeListener('event', cb)`: Removes a specific listener.
- `myEmitter.removeAllListeners('event')`: Removes all listeners for an event.

## Summary Checklist
- [ ] Create and use an `EventEmitter`.
- [ ] Extend `EventEmitter` in a custom class.
- [ ] Handle `'error'` events to prevent crashes.
