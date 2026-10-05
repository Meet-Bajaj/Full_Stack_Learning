# Lesson 11: Production Architecture

## 1. Introduction and Learning Objectives
Deploying MongoDB to production involves ensuring High Availability (it doesn't go down) and Scalability (it can handle more data).

**Learning Objectives:**
- Understand Replica Sets (High Availability).
- Understand Sharding (Horizontal Scaling).
- Understand MongoDB Atlas.

---

## 2. Replica Sets (High Availability)

A Replica Set in MongoDB is a group of `mongod` processes that maintain the exact same data set. This provides redundancy and high availability.

### Architecture
- **Primary Node:** There is strictly ONE primary. It receives all write operations.
- **Secondary Nodes:** Replicate the primary's oplog (operations log) and apply the operations to their data sets.

If the Primary goes down, the Secondaries hold an election and automatically promote one of the Secondaries to be the new Primary. (This usually takes a few seconds).

---

## 3. Sharding (Horizontal Scaling)

When your data exceeds the capacity of a single machine (e.g., you have 5 Terabytes of data), you must Shard.

Sharding distributes data across multiple machines. 
- You define a **Shard Key** (e.g., `zipcode`). 
- MongoDB routes all documents with zipcodes 00000-50000 to Server A (Shard 1), and 50001-99999 to Server B (Shard 2).

**The Shard Key Trap:**
Choosing a bad shard key (like an auto-incrementing integer or a timestamp) will cause all new writes to go to exactly ONE server, defeating the purpose of sharding. You must pick a key with high cardinality and even distribution (like a hashed `userId`).

---

## 4. MongoDB Atlas

In the past, managing Replica Sets and Sharded Clusters was a DevOps nightmare. Today, 99% of teams use **MongoDB Atlas**.

Atlas is a fully managed cloud database service (DBaaS) run by the creators of MongoDB.
- It handles backups automatically.
- It deploys 3-node Replica Sets by default.
- It scales at the click of a button.
- It integrates with AWS, GCP, and Azure.

---

## 5. Summary & Checklist
**Summary:** Never run a standalone MongoDB instance in production. At minimum, use a 3-node Replica Set for High Availability. If data grows massively, implement Sharding. The easiest way to manage this is via MongoDB Atlas.

**Completion Checklist:**
- [ ] I can explain the Primary/Secondary architecture of a Replica Set.
- [ ] I understand what Sharding is and why the Shard Key is critical.
- [ ] I know what MongoDB Atlas is.
