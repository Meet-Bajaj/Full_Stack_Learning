# Module 33: WebSockets Assessment

## Part 1: Architecture Knowledge
1. Explain in detail the limitations of HTTP that necessitated the creation of the WebSocket protocol.
2. What are the key features of the `Socket.IO` library that are missing from the native browser `WebSocket` API?

## Part 2: Code Debugging
Look at the following Socket.IO server code designed to broadcast a message to all users in a specific chat room. It is currently failing.
```javascript
io.on('connection', (socket) => {
  socket.on('join_room', (roomName) => {
    socket.join(roomName);
  });

  socket.on('send_message', (data) => {
    socket.emit('new_message', data);
  });
});
```
**Task:** Identify the bug and write the corrected code. Explain *why* the original code failed.

## Part 3: Architecture Scenario
You are tasked with building a real-time collaborative text editor (like Google Docs).
1. Is a standard WebSocket chat implementation sufficient for this? Why or why not?
2. What specific challenges arise when User A and User B type in the exact same sentence at the exact same millisecond?
3. What is the name of the algorithmic pattern/concept used to resolve this?

## Part 4: Practical Implementation
Write a basic NestJS WebSocket Gateway (using `@WebSocketGateway`) that listens for an event called `request_data`, and returns an acknowledgment containing `{ status: 'success', timestamp: Date.now() }`.
