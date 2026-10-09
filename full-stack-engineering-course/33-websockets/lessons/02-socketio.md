# Lesson 02: Socket.IO

## Learning Objectives
By the end of this lesson, you will be able to:
- Explain why Socket.IO is preferred over raw WebSockets in production.
- Implement a Node.js server using Socket.IO.
- Utilize namespaces and rooms for multiplexing and targeted broadcasting.
- Handle acknowledgements for reliable message delivery.

---

## 1. Why Socket.IO? (The WHY)

While the native WebSocket API (`ws`) is powerful, it provides only the bare minimum for real-time communication. In the real world, you encounter unreliable networks, corporate firewalls, and complex routing requirements.

### The Mental Model
If raw WebSockets are a basic telephone wire connecting two houses, Socket.IO is a fully-featured telephone exchange with call waiting, caller ID, conference rooms, and automatic redial if the line drops.

### Key Features of Socket.IO
1. **Fallback Mechanisms:** If a firewall blocks WebSockets (port 101/upgrade), Socket.IO gracefully falls back to HTTP Long-Polling automatically.
2. **Auto-Reconnection:** Mobile devices constantly drop connections when switching networks. Socket.IO automatically attempts to reconnect with backoff strategies.
3. **Broadcasting & Rooms:** Easy APIs to send messages to everyone, or specific groups of users (e.g., specific chat rooms).
4. **Acknowledgements:** Built-in mechanisms to ensure a message was received and processed.
5. **Multiplexing (Namespaces):** Run multiple separate WebSocket channels over a single underlying TCP connection.

---

## 2. Basic Setup and Syntax

Let's build a robust real-time server using Express and Socket.IO.

```bash
npm install express socket.io
```

### Server-side Setup (`server.js`)
```javascript
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Listen for a custom event 'chat message'
  socket.on('chat message', (msg) => {
    console.log(`Message from ${socket.id}: ${msg}`);
    // Broadcast to EVERYONE including the sender
    io.emit('chat message', msg); 
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

server.listen(3000, () => {
  console.log('Listening on *:3000');
});
```

### Client-side Setup
Socket.IO requires its own client library, as it uses a custom protocol on top of WebSockets.

```html
<script src="https://cdn.socket.io/4.7.2/socket.io.min.js"></script>
<script>
  // Connect to the server
  const socket = io('http://localhost:3000');

  socket.on('connect', () => {
    console.log('Connected with ID:', socket.id);
  });

  // Listen for messages
  socket.on('chat message', (msg) => {
    console.log('Received:', msg);
  });

  // Send a message
  function sendMessage(text) {
    socket.emit('chat message', text);
  }
</script>
```

---

## 3. Namespaces and Rooms

To organize traffic, Socket.IO provides Namespaces and Rooms. 

### Namespaces
Namespaces allow you to split the logic of your application over a single shared connection (multiplexing).
Think of them as completely separate apps (e.g., `/chat` vs `/notifications`).

```javascript
// Server
const chatNamespace = io.of('/chat');
chatNamespace.on('connection', (socket) => {
  console.log('Someone connected to chat');
});

// Client
const chatSocket = io('http://localhost:3000/chat');
```

### Rooms
Rooms are arbitrary channels that sockets can `join` and `leave` within a namespace. They are perfect for private chats or group channels.

```javascript
io.on('connection', (socket) => {
  
  socket.on('join room', (roomName) => {
    socket.join(roomName);
    console.log(`Socket ${socket.id} joined room ${roomName}`);
  });

  socket.on('message to room', ({ roomName, message }) => {
    // Sends to everyone in the room EXCEPT the sender
    socket.to(roomName).emit('new message', message);
    
    // To send to everyone INCLUDING the sender:
    // io.to(roomName).emit('new message', message);
  });

});
```

---

## 4. Acknowledgements

Sometimes you need to know the server successfully processed an event (e.g., saving a message to the database) before updating the UI.

```javascript
// Client
socket.emit('create order', { item: 'Laptop' }, (response) => {
  if (response.success) {
    console.log('Order created with ID:', response.orderId);
  } else {
    console.error('Failed:', response.error);
  }
});

// Server
socket.on('create order', async (data, callback) => {
  try {
    const order = await database.saveOrder(data);
    callback({ success: true, orderId: order.id });
  } catch (error) {
    callback({ success: false, error: error.message });
  }
});
```

---

## 5. Summary and Checklist
- [ ] Understand why Socket.IO is used over raw `ws`.
- [ ] Know how to setup a basic Socket.IO server and client.
- [ ] Differentiate between `socket.emit()`, `io.emit()`, and `socket.to().emit()`.
- [ ] Use Rooms to group users.
- [ ] Implement message acknowledgements for reliability.
