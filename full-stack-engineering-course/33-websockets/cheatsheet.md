# Module 33: WebSockets Cheatsheet

## Raw WebSockets (`ws`)

**Installation:** `npm i ws`

```javascript
// Server
const { WebSocketServer } = require('ws');
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => console.log(data.toString()));
  ws.send('Hello from server!');
});
```

```javascript
// Client
const ws = new WebSocket('ws://localhost:8080');
ws.onopen = () => ws.send('Hello server!');
ws.onmessage = (event) => console.log(event.data);
```

---

## Socket.IO

**Installation:** `npm i socket.io` (Server) / `npm i socket.io-client` (Client)

### Server Basics
```javascript
const { Server } = require('socket.io');
const io = new Server(3000, { cors: { origin: '*' } });

io.on('connection', (socket) => {
  console.log('Connected:', socket.id);
});
```

### Emitting & Broadcasting
```javascript
// Send to specific sender
socket.emit('event_name', data);

// Send to everyone EXCEPT the sender
socket.broadcast.emit('event_name', data);

// Send to EVERYONE including sender
io.emit('event_name', data);
```

### Rooms
```javascript
// Join a room
socket.join('room1');

// Leave a room
socket.leave('room1');

// Broadcast to room (exclude sender)
socket.to('room1').emit('event_name', data);

// Broadcast to room (include sender)
io.to('room1').emit('event_name', data);
```

### Acknowledgements (Callbacks)
```javascript
// Client
socket.emit('create_order', { item: 'Laptop' }, (response) => {
  console.log(response.status);
});

// Server
socket.on('create_order', (data, callback) => {
  callback({ status: 'success' });
});
```

---

## NestJS WebSockets

**Installation:** `npm i @nestjs/websockets @nestjs/platform-socket.io`

```typescript
import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';

@WebSocketGateway({ cors: true })
export class ChatGateway {
  
  @SubscribeMessage('chat')
  handleChat(@MessageBody() data: string) {
    // Return data to acknowledge the event
    return { event: 'chat_response', data: 'Received!' };
  }
}
```
