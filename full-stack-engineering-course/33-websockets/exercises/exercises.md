# Module 33: WebSockets Exercises

## Exercise 1: Raw WebSocket Chat
**Objective:** Build a basic chat server without Socket.IO.
1. Initialize a Node.js project and install `ws`.
2. Create `server.js` that listens on port 8080.
3. When a client connects, send them a message: `Welcome to the server!`.
4. When the server receives a message from a client, broadcast it to ALL other connected clients.
5. Create an `index.html` file that connects to `ws://localhost:8080` and displays incoming messages in a `<ul>`.

## Exercise 2: Socket.IO Namespaces and Rooms
**Objective:** Implement a multiplexed application.
1. Setup an Express server with Socket.IO.
2. Create two namespaces: `/chat` and `/alerts`.
3. In the `/chat` namespace, allow users to emit a `join_room` event with a room name (e.g., "sports").
4. Allow users to emit a `message` event. The server should only broadcast this message to users in the same room.
5. In the `/alerts` namespace, set up a `setInterval` that emits a `server_time` event every 5 seconds to all connected clients.

## Exercise 3: Typing Indicators (Debugging)
**Objective:** Fix a broken implementation of typing indicators.
*The following code is supposed to show when a user is typing, but it crashes the browser with too many events.*

**Broken Code:**
```javascript
// Client
document.getElementById('chatInput').addEventListener('keydown', () => {
  socket.emit('typing');
});

// Server
socket.on('typing', () => {
  io.emit('user_typing', socket.id);
});
```

**Task:**
1. Why does this crash? (Hint: Network flooding).
2. Implement a `debounce` or `throttle` on the client-side to only emit `typing` once every 2 seconds.
3. Fix the server so it broadcasts `user_typing` to everyone *except* the sender.

## Exercise 4: Acknowledgements
**Objective:** Use Socket.IO callbacks.
1. Client emits `submit_order` with data `{ item: 'Book', qty: 2 }`.
2. Server listens for `submit_order`. If `qty < 1`, the server should execute the callback with `{ error: 'Invalid quantity' }`.
3. If valid, the server executes the callback with `{ success: true, orderId: 123 }`.
4. Client logs the response to the console.
