# Lesson 1: System Design Fundamentals

## 1. Learning Objectives
By the end of this lesson, you will be able to:
- Define what system design is and why it's critical for modern applications.
- Differentiate between functional and non-functional requirements.
- Apply a "thinking at scale" mindset to architectural decisions.

## 2. What is System Design and Why it Matters
**System Design** is the process of defining the architecture, components, modules, interfaces, and data for a system to satisfy specified requirements.

### WHY it exists
In the real world, an application that works perfectly for 100 users might crash entirely when exposed to 1,000,000 users. System design provides the blueprint for handling scale, ensuring that applications remain fast, reliable, and available as user demand grows.

### Mental Model & Real-World Analogy
Think of system design like city planning. 
- **Small town (Low Scale):** A single road connects the grocery store and the houses. 
- **Metropolis (High Scale):** You need highways, traffic lights (load balancers), public transit (message queues), and multiple specialized zones (microservices). If you build a metropolis using small-town logic, traffic will gridlock.

## 3. Functional vs. Non-Functional Requirements

When beginning a system design interview or project, you must clarify the requirements:

### Functional Requirements
*What the system should do.*
- Users should be able to upload a photo.
- Users can search for products.
- The system should send an email notification.

### Non-Functional Requirements
*How the system should behave (qualities of the system).*
- **High Availability:** The system must be up 99.99% of the time.
- **Latency:** Search results should return in under 200ms.
- **Scalability:** The system must handle 50,000 peak requests per second.
- **Consistency:** If a user posts a photo, it must immediately be visible to their followers.

## 4. Thinking at Scale
To think at scale, always ask:
- **What happens if data grows 100x?** (Need for sharding/partitioning)
- **What happens if traffic spikes 100x?** (Need for load balancing/caching)
- **What happens if a server dies?** (Need for redundancy/failover)

## 5. Common Mistakes
- **Over-engineering:** Building a distributed microservices architecture for an internal tool used by 5 people.
- **Ignoring constraints:** Not factoring in budget, time to market, or team expertise.

## 6. Summary and Checklist
- [ ] Understand the difference between system architecture and coding.
- [ ] Clearly separate functional from non-functional requirements.
- [ ] Apply the city planning mental model to scaling software.
