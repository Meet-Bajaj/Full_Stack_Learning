# Lesson 2: Consistency Models

## Learning Objectives
- Differentiate between Strong Consistency and Eventual Consistency.
- Understand Linearizability.
- Understand Read-Your-Writes and Causal Consistency.

## The Consistency Spectrum
When you have multiple copies of data (replicas), you have to decide how strictly synchronized they need to be.

### Strong Consistency (Linearizability)
- **Concept**: The system behaves as if there is only one copy of the data, and all operations are atomic. If write A completes, any subsequent read B *must* see write A.
- **Cost**: High latency. When you write data, the system must synchronously update all (or a quorum of) replicas before returning success to the user.
- **Use Case**: Financial transactions, inventory management.

### Eventual Consistency
- **Concept**: If no new updates are made to a given data item, eventually all accesses to that item will return the last updated value.
- **Cost**: Potential confusion. A user might read a stale value for a few milliseconds or seconds.
- **Use Case**: Social media likes, search engine indexing.

## Intermediate Models

### Read-Your-Writes Consistency
A common problem with eventual consistency: A user updates their profile picture (write goes to Primary), the page refreshes, and reads from a Replica that hasn't synced yet. The user sees their old picture and thinks the save failed.
- **Solution**: The system tracks what the user wrote and ensures that for *that specific user*, they always read from a replica that has caught up to their write, or they read directly from the Primary for a few seconds after a write.

### Causal Consistency
If Event A causes Event B, then all nodes must see Event A before they see Event B.
- **Example**: In a chat app, Alice says "The server crashed!" (A). Bob replies "Oh no!" (B). If the system lacks causal consistency, Charlie might see Bob's reply before Alice's message, which makes no sense.

## Summary
Consistency is not a binary choice. It is a spectrum. Choosing the right consistency model involves balancing the user experience against system latency and availability.

## Completion Checklist
- [ ] I can explain Eventual Consistency.
- [ ] I understand why Strong Consistency impacts performance.
- [ ] I know how to solve the "Read-Your-Writes" problem.
