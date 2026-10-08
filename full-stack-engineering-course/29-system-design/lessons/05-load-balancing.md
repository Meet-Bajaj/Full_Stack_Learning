# Lesson 5: Load Balancing

## 1. Learning Objectives
- Understand what a load balancer is and why it's necessary.
- Compare L4 (Transport) and L7 (Application) load balancing.
- Analyze different load balancing algorithms.

## 2. What is a Load Balancer?
A Load Balancer (LB) acts as a "traffic cop" sitting in front of your servers and routing client requests across all servers capable of fulfilling them in a manner that maximizes speed and capacity utilization.

### Real-World Analogy
A hostess at a busy restaurant. Instead of guests walking into the kitchen (servers) randomly, the hostess (load balancer) looks at which tables are empty and evenly distributes guests to the servers.

## 3. L4 vs L7 Load Balancing

### L4 (Layer 4 - Transport Layer)
- Routes traffic based on IP address and TCP/UDP ports.
- **Pros:** Extremely fast and efficient.
- **Cons:** Dumb. It cannot look at the content of the request (like the HTTP URL or cookies).

### L7 (Layer 7 - Application Layer)
- Routes traffic based on HTTP headers, URLs, or cookies.
- **Pros:** Smart. Can route `/api/videos` to Video Servers and `/api/images` to Image Servers.
- **Cons:** Slower, requires terminating SSL and inspecting packets.

## 4. Algorithms
- **Round Robin:** Distributes requests sequentially (Server 1, 2, 3, 1, 2, 3). Good if servers are identical.
- **Least Connections:** Sends traffic to the server with the fewest active connections. Great for long-lived connections (like WebSockets).
- **IP Hash:** Hashes the client's IP address to determine the server. Ensures a client always hits the same server (useful for stateful sessions, but can lead to uneven load).

## 5. Health Checks
Load balancers constantly ping backend servers (e.g., checking `/health`). If a server stops responding, the LB removes it from the pool until it recovers.

## 6. Summary and Checklist
- [ ] Describe the role of a load balancer.
- [ ] Choose the correct routing algorithm based on the application type.
- [ ] Differentiate between L4 and L7 routing.
