# Lesson 5: Event-Driven Architecture

## Learning Objectives
- Build event-driven backends using Domain Events.
- Implement the Command Query Responsibility Segregation (CQRS) pattern.
- Understand basic Event Sourcing concepts.

## Why it Exists
Tightly coupled microservices or modules call each other synchronously, leading to cascading failures and slow response times. Event-driven architectures decouple components—publishers emit events, and subscribers react asynchronously.

## Mental Model
Think of a radio station. The station broadcasts a signal (Event). It doesn't know who is listening. You (the subscriber) tune in to the frequency and act on the music (e.g., dancing).

## Domain Events & Event Bus
```typescript
// NestJS Event Emitter example
@Injectable()
export class OrderService {
  constructor(private eventEmitter: EventEmitter2) {}

  async createOrder(createOrderDto) {
    const order = await this.db.create(createOrderDto);
    // Emit event instead of directly calling EmailService and InventoryService
    this.eventEmitter.emit('order.created', new OrderCreatedEvent(order));
    return order;
  }
}

@Injectable()
export class InventoryListener {
  @OnEvent('order.created')
  handleOrderCreatedEvent(event: OrderCreatedEvent) {
    // reserve inventory
  }
}
```

## CQRS Pattern
Separates the **Command** (write/update) model from the **Query** (read) model. Write operations save to a highly normalized database, while read operations fetch from a denormalized, read-optimized database (like Elasticsearch or Redis), kept in sync via events.

## Checklist
- [ ] Implement a basic Event Bus
- [ ] Understand CQRS tradeoffs
- [ ] Differentiate commands vs events
