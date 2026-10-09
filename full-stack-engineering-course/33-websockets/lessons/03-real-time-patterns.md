# Lesson 03: Real-Time Patterns

## Learning Objectives
By the end of this lesson, you will be able to:
- Identify common real-time architectural patterns.
- Design a real-time notification system.
- Understand the logic behind typing indicators and read receipts.
- Approach collaborative editing concepts (OT/CRDT).

---

## 1. The Real-Time Chat Pattern

Chat applications are the most common use case for WebSockets. A scalable chat app requires a specific data model and event flow.

### Core Events
- `join_channel`: Client requests to join a room.
- `send_message`: Client sends a message.
- `receive_message`: Server pushes a new message to the room.
- `typing_start` / `typing_stop`: Presence indicators.
- `user_online` / `user_offline`: Global presence tracking.

### Implementation: Typing Indicators
Typing indicators rely on debouncing and transient events.

**Client-Side (React example):**
```javascript
let typingTimeout = null;

const handleTyping = () => {
  socket.emit('typing_start', { channelId });
  
  clearTimeout(typingTimeout);
  typingTimeout = setTimeout(() => {
    socket.emit('typing_stop', { channelId });
  }, 2000); // Stop typing if no keystrokes for 2 seconds
};
```

**Server-Side:**
```javascript
socket.on('typing_start', ({ channelId }) => {
  // Broadcast to everyone in channel except sender
  socket.to(channelId).emit('user_typing', { userId: socket.userId });
});
```

---

## 2. Notification Systems Pattern

Unlike chat where a user is explicitly in a room, notifications are targeted at specific users based on system events (e.g., someone liked your post).

### The Architecture
1. User A likes User B's post via a standard HTTP POST request.
2. The HTTP API saves the Like to the DB.
3. The HTTP API publishes a message to a Message Broker (like Redis or RabbitMQ) saying "User B received a like".
4. The WebSocket server (which is subscribed to the broker) receives the message.
5. The WebSocket server looks up User B's active socket connection.
6. The server emits a `notification` event to User B's socket.

### User-Specific Rooms Strategy
To easily target users in Socket.IO, a common pattern is to make every user automatically join a room named after their unique User ID upon connection.

```javascript
io.on('connection', (socket) => {
  const userId = socket.handshake.auth.userId;
  
  // User joins their own personal room
  socket.join(`user_${userId}`);
});

// Later, from another part of the app:
function sendNotification(targetUserId, notificationData) {
  io.to(`user_${targetUserId}`).emit('new_notification', notificationData);
}
```

---

## 3. Live Updates & Dashboards

For dashboards (stock tickers, crypto prices, server stats), data is usually streamed one-way from the server to the client.

- **Throttling is crucial:** If prices change 1000 times a second, pushing 1000 WS messages a second will crash the client browser.
- **Pattern:** The server should batch or throttle updates (e.g., send the latest state every 500ms).

```javascript
// Server-side Throttled Emitter
setInterval(() => {
  const latestPrices = getLatestCryptoPrices();
  io.to('crypto_watchers').emit('price_update', latestPrices);
}, 500); // 2 updates per second max
```

---

## 4. Collaborative Editing (Brief Overview)

Building Google Docs is much harder than a chat app. If two people edit the same paragraph at the same time, conflicts arise.

### Operational Transformation (OT)
- Sends operations (e.g., "insert 'A' at index 5") instead of state.
- The server resolves conflicts using a central authority.
- Very complex to implement from scratch.

### Conflict-free Replicated Data Types (CRDTs)
- Mathematical data structures where operations can be applied in any order and still result in the same final state.
- Libraries like `Yjs` or `Automerge` implement CRDTs over WebSockets.

---

## Summary
- Real-time patterns require thinking about transient state (typing) vs persistent state (messages).
- User-specific rooms are the best way to handle targeted notifications.
- High-frequency data streams must be throttled.
