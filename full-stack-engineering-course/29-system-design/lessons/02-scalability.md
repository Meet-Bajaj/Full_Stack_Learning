# Lesson 2: Scalability

## 1. Learning Objectives
- Differentiate between vertical and horizontal scaling.
- Understand the importance of stateless services.
- Explain high-level concepts of scaling databases and load balancing.

## 2. Vertical vs Horizontal Scaling

### Vertical Scaling (Scale Up)
Adding more power (CPU, RAM) to an existing machine.
- **Pros:** Extremely simple. No code changes required.
- **Cons:** Hard limit (you can only buy a server so big). Single point of failure. Expensive.

### Horizontal Scaling (Scale Out)
Adding more machines into your pool of resources.
- **Pros:** Practically infinite scale. High availability (if one dies, others take over). Cost-effective using commodity hardware.
- **Cons:** Complex to manage. Code must be distributed (stateless).

### Real-World Analogy
- **Vertical:** Upgrading your 4-seat sedan to a 50-seat bus to transport more people.
- **Horizontal:** Buying ten 4-seat sedans to transport the same number of people.

## 3. Stateless Services
For horizontal scaling to work effectively, application servers should be **stateless**.
- **Stateful:** The server stores user session data in its local memory. If a user hits Server A, they must keep hitting Server A, or they will be logged out.
- **Stateless:** The server stores no local user state. Session data is stored in a shared external database or cache (like Redis). The user can hit Server A, then Server B, and nothing breaks.

## 4. Scaling Databases
Databases are the hardest part of the system to scale.
- **Read Replicas:** Send all write operations to the Master database, and read operations to Replica databases.
- **Sharding (Partitioning):** Splitting the database horizontally across multiple servers based on a key (e.g., User ID 1-1000 on DB A, 1001-2000 on DB B).

## 5. Load Balancing (Introduction)
A Load Balancer sits in front of your horizontally scaled servers and distributes incoming traffic across them so no single server gets overwhelmed.

## 6. Summary and Checklist
- [ ] Explain Vertical vs Horizontal scaling.
- [ ] Understand why web servers must be stateless to scale horizontally.
- [ ] Describe the difference between database replication and sharding.
