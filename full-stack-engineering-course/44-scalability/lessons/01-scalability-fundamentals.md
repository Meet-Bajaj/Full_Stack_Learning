# Lesson 1: Scalability Fundamentals

## Learning Objectives
- Define scalability in the context of software engineering.
- Compare and contrast Scaling Up (Vertical) and Scaling Out (Horizontal).
- Understand the concept of statelessness and why it is critical for scaling out.
- Review the principles of the 12-Factor App methodology relevant to scaling.

## What is Scalability?
Scalability isn't just about being fast. Performance is about how quickly a system processes a single request. Scalability is about how well the system maintains performance as the *number of concurrent requests* increases.

## Vertical vs. Horizontal Scaling

### Vertical Scaling (Scaling Up)
- **What it is**: Adding more power (CPU, RAM) to your existing server.
- **Pros**: Easy. Requires no code changes.
- **Cons**: Hardware limits (you can only buy a server so big). Expensive. Still a single point of failure.

### Horizontal Scaling (Scaling Out)
- **What it is**: Adding more servers to the pool of resources.
- **Pros**: Theoretically infinite scale. High availability (if one server dies, others take over). Use cheaper commodity hardware.
- **Cons**: Complex. Requires architectural changes (load balancing, state management).

## Stateless Design
To horizontally scale a web application, it **must be stateless**.
If Server A stores the user's login session in its local RAM, what happens when the load balancer routes the user's next request to Server B? The user appears logged out.

**The Rule**: Application instances must not store any data locally that they expect to be there on the next request. All state must be stored in a shared backing service (like a Redis cache or a PostgreSQL database).

## The 12-Factor App
The 12-Factor app is a methodology for building SaaS applications. Key factors for scaling include:
- **Factor 6 (Processes)**: Execute the app as one or more stateless processes.
- **Factor 8 (Concurrency)**: Scale out via the process model (running multiple instances).
- **Factor 9 (Disposability)**: Maximize robustness with fast startup and graceful shutdown (instances should be able to start/stop at a moment's notice to handle load spikes).

## Summary
The foundation of modern application scaling is horizontal scaling, which absolutely requires a stateless application tier. Understanding this paradigm shift is the first step in system design.

## Completion Checklist
- [ ] I can explain the difference between vertical and horizontal scaling.
- [ ] I understand why local RAM state breaks horizontal scaling.
- [ ] I am familiar with the relevant 12-Factor app principles.
