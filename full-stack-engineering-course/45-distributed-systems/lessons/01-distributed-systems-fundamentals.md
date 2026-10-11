# Lesson 1: Distributed Systems Fundamentals

## Learning Objectives
- Define a distributed system.
- Understand the Fallacies of Distributed Computing.
- Explain Network Partitions and the CAP Theorem.

## What is a Distributed System?
"A distributed system is one in which the failure of a computer you didn't even know existed can render your own computer unusable." - Leslie Lamport.

It is a network of independent computers that communicate and coordinate their actions by passing messages to achieve a common goal. Your web browser talking to an API that talks to a database is a simple distributed system.

## The 8 Fallacies of Distributed Computing
Engineers new to distributed systems often make assumptions that hold true for local monolithic apps but fail disastrously over a network.
1. The network is reliable. (It isn't. Cables get cut, routers crash).
2. Latency is zero. (It isn't. Physics dictates speed).
3. Bandwidth is infinite. (It isn't).
4. The network is secure. (It isn't).
5. Topology doesn't change. (Servers scale up/down constantly).
6. There is one administrator. (Multiple teams manage different parts).
7. Transport cost is zero. (Serializing JSON and network ingress costs money/CPU).
8. The network is homogeneous. (You will interact with different OSs, languages, and hardware).

You must design your software assuming the network *will* fail.

## Network Partitions
A network partition occurs when a network fails, dividing the system into two or more groups of nodes that cannot communicate with each other, even though the nodes themselves are still running.

## The CAP Theorem
The CAP Theorem states that a distributed data store can only guarantee two of the following three properties simultaneously:
- **C - Consistency**: Every read receives the most recent write or an error.
- **A - Availability**: Every request receives a (non-error) response, without the guarantee that it contains the most recent write.
- **P - Partition Tolerance**: The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network.

**The Reality:**
Because networks *will* fail (Partition Tolerance is mandatory), you must choose between Consistency and Availability during a partition.
- **CP System**: If a node can't talk to the majority, it refuses to answer queries (sacrificing availability) to ensure no one gets stale data. (e.g., Banking systems).
- **AP System**: If a node is isolated, it still returns the data it has (sacrificing consistency), even if it might be stale. (e.g., Social media feeds).

## Summary
Building distributed systems requires abandoning the illusion of perfect networks. Understanding CAP theorem helps you make informed architectural trade-offs between serving stale data or serving errors.

## Completion Checklist
- [ ] I can list at least 3 fallacies of distributed computing.
- [ ] I understand what a network partition is.
- [ ] I can explain the trade-off in the CAP theorem.
