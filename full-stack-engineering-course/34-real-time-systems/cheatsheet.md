# Module 34: Real-Time Systems Cheatsheet

## Server-Sent Events (SSE)

### Server (Express.js)
```javascript
app.get('/stream', (req, res) => {
  // 1. Set required headers
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // 2. Format and send data
  // Must end with double newline \n\n
  res.write(`data: ${JSON.stringify({ msg: 'Hello' })}\n\n`);
  
  // 3. Named events
  res.write(`event: price_update\n`);
  res.write(`data: 100.50\n\n`);
});
```

### Client (`EventSource`)
```javascript
const sse = new EventSource('/stream');

// Listen to default 'message' event
sse.onmessage = (event) => console.log(event.data);

// Listen to named events
sse.addEventListener('price_update', (event) => console.log(event.data));

// Handle errors (Browser auto-reconnects!)
sse.onerror = (err) => console.error('SSE Error:', err);
```

---

## Architecture Patterns

### Pub/Sub (Redis)
Used to decouple microservices or scale WebSockets across multiple servers.
- **Publisher:** Emits the event (`redis.publish('orders', payload)`)
- **Subscriber:** Listens to the event (`redis.subscribe('orders', callback)`)
- **Broker:** Redis (Fire-and-forget, no persistence).

### Notification Service Flow
1. Domain Service (e.g., Orders) publishes `OrderShipped` event to a Message Broker (RabbitMQ/Kafka).
2. Notification Service consumes the event.
3. Notification Service checks user preferences (DB).
4. Notification Service fans out to delivery providers:
   - WebSocket (In-App)
   - SendGrid (Email)
   - Twilio (SMS)
   - FCM / APNs (Push Notifications)

### Handling Real-Time Data (Dashboards)
**Rule:** Never stream raw high-frequency data to the browser.
**Solution:** Buffer, aggregate, and throttle.
```javascript
let buffer = 0;
stream.on('data', val => buffer += val); // 1000x a second

setInterval(() => {
  io.emit('update', buffer); // 1x a second
  buffer = 0;
}, 1000);
```
