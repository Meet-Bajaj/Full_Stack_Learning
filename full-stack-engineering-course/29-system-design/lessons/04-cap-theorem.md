# Lesson 4: CAP Theorem

## 1. Learning Objectives
- Understand Consistency, Availability, and Partition Tolerance.
- Apply the CAP theorem to real-world database choices.
- Differentiate between CP and AP systems.

## 2. What is the CAP Theorem?
The CAP theorem states that in a distributed data store, it is impossible to simultaneously guarantee more than two of the following three properties:

1. **Consistency (C):** Every read receives the most recent write or an error. All nodes see the same data at the same time.
2. **Availability (A):** Every request receives a (non-error) response, without the guarantee that it contains the most recent write.
3. **Partition Tolerance (P):** The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes.

### The Reality of Networks (Why P is non-negotiable)
In modern distributed systems, network partitions (communication failures between nodes) *will* happen. Therefore, you **must** choose Partition Tolerance. This means the real choice is between **Consistency** and **Availability** (CP vs. AP).

### Mental Model & Real-World Analogy
Imagine a joint bank account managed by two clerks in different branches. The phone line between them drops (Partition). 
- **CP (Consistency chosen):** If you try to withdraw money, the clerk refuses because they can't check the other branch's ledger. (Unavailable, but perfectly consistent).
- **AP (Availability chosen):** The clerk lets you withdraw the money anyway. (Available, but risks an overdrawn account when the lines come back up—inconsistent).

## 3. CP vs AP Databases

### CP (Consistent & Partition Tolerant)
- **Use case:** Financial systems, billing systems where bad data is worse than no data.
- **Examples:** MongoDB, HBase, Redis, etcd.

### AP (Available & Partition Tolerant)
- **Use case:** Social media feeds, messaging apps where returning slightly stale data is better than an error page.
- **Examples:** Cassandra, DynamoDB, CouchDB.

## 4. Eventual Consistency
In AP systems, we often rely on **Eventual Consistency**. The system won't be consistent immediately, but given enough time without new updates, all nodes will eventually converge to the same value.

## 5. Summary and Checklist
- [ ] Explain C, A, and P.
- [ ] Understand why network partitions force a choice between C and A.
- [ ] Give examples of when to choose CP vs AP.
