# Module 33: WebSockets Projects

## Project 1: Anonymous Chat Room
**Difficulty:** Beginner
**Description:** Build a simple, single-room chat application where users can send messages anonymously.
**Requirements:**
- Frontend: HTML/Vanilla JS. Display a list of messages and an input field.
- Backend: Node.js with `ws` or `Socket.IO`.
- **Feature 1:** When a user connects, broadcast "A new user joined".
- **Feature 2:** When a user sends a message, broadcast it to all clients.
- **Feature 3:** When a user disconnects, broadcast "A user left".

## Project 2: Multi-Room Planning Poker
**Difficulty:** Intermediate
**Description:** Build a real-time Agile Planning Poker app.
**Requirements:**
- Frontend: React or Vue.
- Backend: NestJS with `@nestjs/websockets` or Express + Socket.IO.
- **Feature 1:** Users can create a Room and get a unique 4-digit code.
- **Feature 2:** Other users can join the Room using the code.
- **Feature 3:** The Scrum Master can click "Reveal Cards", which emits an event forcing all connected clients in that room to flip their cards and see the votes.
- **Feature 4:** Implement typing/voting indicators (e.g., "Meet is voting...").

## Project 3: Scalable Live Auction System
**Difficulty:** Advanced
**Description:** Build a highly scalable auction bidding system.
**Requirements:**
- Run at least 3 instances of your Node.js Socket.IO server.
- Place them behind an Nginx load balancer.
- **Feature 1:** Use the `@socket.io/redis-adapter` to ensure a bid placed on Server 1 is instantly broadcast to users connected to Server 2 and 3.
- **Feature 2:** Implement strict rate-limiting on the bidding event to prevent DoS attacks.
- **Feature 3:** Secure the WebSocket connection using JWTs passed in the `auth` payload.
