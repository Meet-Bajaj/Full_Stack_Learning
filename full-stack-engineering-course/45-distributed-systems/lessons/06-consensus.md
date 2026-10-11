# Lesson 6: Consensus

## Learning Objectives
- Understand the problem of distributed consensus.
- Explain the concept of Quorum.
- Understand high-level concepts of Raft and Paxos algorithms.
- Explain the Split-Brain problem.

## What is Consensus?
Consensus is the process of multiple independent nodes agreeing on a single data value or state, even if some nodes fail or are disconnected. 
When you have a primary database and it crashes, how do the remaining replicas agree on who should become the new primary? That requires consensus.

## Quorum
A quorum is the minimum number of votes required to make a decision. In distributed systems, it is usually a strict majority: `(N / 2) + 1`.
If you have 5 nodes, you need 3 nodes to agree to achieve consensus.

## The Split-Brain Problem
Imagine a 4-node cluster (A, B, C, D). A network partition occurs, splitting them evenly: (A, B) cannot talk to (C, D).
If both sides elect a new leader, you have two leaders (Split-Brain). Both accept writes, leading to catastrophic data corruption.
**Prevention**: This is why clusters usually have an **odd number of nodes** (e.g., 3, 5). With 5 nodes, a partition will leave one side with 3 nodes (majority) and one with 2 (minority). The majority elects a leader; the minority pauses operations.

## Consensus Algorithms (Raft & Paxos)
Building a reliable consensus algorithm is notoriously difficult.
- **Paxos**: The original algorithm. Famously difficult to understand and implement correctly.
- **Raft**: Designed specifically to be understandable. It breaks consensus down into Leader Election, Log Replication, and Safety. It is the backbone of modern distributed systems like etcd (which powers Kubernetes) and Consul.

**How Raft Works (Simplified):**
1. Nodes start as Followers.
2. If a Follower doesn't hear from a Leader within a randomized timeout, it becomes a Candidate and requests votes.
3. If it gets a quorum of votes, it becomes the Leader.
4. All writes go to the Leader. The Leader sends the write to all Followers.
5. Once a quorum of Followers acknowledge the write, the Leader commits it and returns success to the client.

## Summary
Consensus is the bedrock of distributed coordination. By relying on strict quorums and proven algorithms like Raft, distributed systems can maintain a single source of truth despite infrastructure failures.

## Completion Checklist
- [ ] I can calculate the quorum for a given number of nodes.
- [ ] I understand what Split-Brain is and how odd-numbered clusters prevent it.
- [ ] I know what Raft is used for.
