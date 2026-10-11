# Lesson 2: Horizontal Scaling Applications

## Learning Objectives
- Understand the role and algorithms of Load Balancers.
- Implement shared session management.
- Understand the implications of shared file storage in distributed environments.

## The Load Balancer
A load balancer sits between the client and your servers. Its job is to distribute incoming network traffic across a group of backend servers.

**Common Algorithms:**
1. **Round Robin**: Distributes requests sequentially (Server A, then B, then C, repeat).
2. **Least Connections**: Sends the request to the server with the fewest active connections.
3. **IP Hash**: Hashes the client's IP address to ensure a specific client always hits the same server (Sticky Sessions). *Note: Sticky sessions are generally an anti-pattern as they defeat true statelessness and can lead to uneven load.*

## Session Management in a Scaled Environment
As discussed in Lesson 1, local in-memory sessions fail when scaled horizontally.

**Solutions:**
1. **JWT (JSON Web Tokens)**: The state (user ID, roles) is encoded in a token stored on the client. The server verifies the token statelessly. Excellent for scaling.
2. **Shared Session Store**: The servers generate a session ID, send it via cookie, and store the actual session data in a fast, shared, in-memory database like **Redis**. Any server can query Redis to validate the session.

## Shared File Storage
If a user uploads an avatar to Server A's local `/uploads` directory, Server B won't have it.

**Solution:** Application servers must never store persistent files locally. All uploads should stream directly to a distributed object storage service like **AWS S3** or **Google Cloud Storage**. The application database only stores the URL to the S3 bucket.

## Summary
Horizontal scaling is more than just turning on multiple servers. It requires a load balancer to distribute traffic and a fundamental shift in how you handle sessions, file uploads, and state.

## Completion Checklist
- [ ] I can describe how a Round Robin load balancer works.
- [ ] I know how to manage sessions using Redis.
- [ ] I understand why local file uploads break in a horizontally scaled system.
