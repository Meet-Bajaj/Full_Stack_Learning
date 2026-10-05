# Lesson 12: Replication

## 1. Introduction and Learning Objectives
A single database server has limits. It can only handle so much CPU and disk I/O, and if the hardware fails, the application goes down. Replication solves scalability and high availability.

**Learning Objectives:**
- Understand the Primary-Replica architecture.
- Differentiate between Streaming (Physical) Replication and Logical Replication.

---

## 2. The Primary-Replica Architecture

In a typical scalable setup:
- **Primary (Master):** Handles all `INSERT`, `UPDATE`, and `DELETE` queries.
- **Replica (Slave):** A read-only copy of the Primary. 

Your application routes all read-heavy queries (`SELECT`) to the Replicas, taking the load off the Primary. If the Primary crashes, a Replica can be promoted to become the new Primary (High Availability / Failover).

---

## 3. Streaming (Physical) Replication

This is the standard form of replication.
The Primary server streams its WAL (Write-Ahead Log) over the network to the Replica. The Replica applies the WAL to its own disk.
- **Pros:** Exact byte-for-byte copy. Extremely fast.
- **Cons:** The Replica is strictly read-only. You cannot replicate just a single table; it's the whole cluster or nothing.

---

## 4. Logical Replication

Logical replication decodes the WAL into logical data changes (e.g., "Row ID 5 in Table Users changed to 'Alice'").
- **Pros:** You can replicate specific tables instead of the whole database. You can replicate between different major versions of Postgres (great for zero-downtime upgrades). The replica can also accept its own writes to other tables.
- **Cons:** More CPU intensive. Requires careful configuration of a Publisher and a Subscriber.

---

## 5. Summary & Checklist
**Summary:** Replication is how databases scale horizontally for reads and ensure High Availability. Use Streaming Replication for standard read-replicas and failover. Use Logical Replication for complex data synchronization between different systems or zero-downtime upgrades.

**Completion Checklist:**
- [ ] I can explain what a Read Replica is.
- [ ] I understand how Streaming Replication works using the WAL.
- [ ] I understand the use cases for Logical Replication.
