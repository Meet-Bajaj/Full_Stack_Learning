# Lesson 01: Introduction to MongoDB

## 1. Introduction and Learning Objectives
MongoDB is a NoSQL database, specifically a **Document Database**. It completely discards the concept of tables and rows in favor of collections and documents.

**Learning Objectives:**
- Understand the difference between Relational (SQL) and Document (NoSQL) databases.
- Understand what BSON is.
- Know exactly when to use MongoDB, and more importantly, when NOT to use it.

---

## 2. Relational vs. Document Databases

### The Relational Model (SQL)
- Data is strictly structured into **Tables**, **Columns**, and **Rows**.
- Requires a rigid schema defined upfront.
- Scales vertically (buy a bigger server).
- Relies heavily on `JOIN`s to connect normalized data across multiple tables.

### The Document Model (MongoDB)
- Data is stored as JSON-like objects called **Documents**.
- Documents are grouped into **Collections**.
- **Flexible Schema:** Document A can have a `price` field, while Document B in the same collection might not.
- Scales horizontally (Sharding: distribute data across multiple cheap servers).
- Often uses **Embedded Data** (putting related data inside the same document) to avoid slow joins.

---

## 3. JSON vs. BSON

While MongoDB looks like it stores JSON, it actually stores **BSON (Binary JSON)**.

**Why BSON?**
Standard JSON only supports strings, numbers, booleans, arrays, and objects. BSON extends JSON to include native data types crucial for databases:
- `ObjectId` (Mongo's default primary key type)
- `Date`
- `Decimal128` (High precision for financial data)
- Binary data (for storing files)

BSON is also faster for the database to parse and search through than plain text JSON.

---

## 4. When to Use MongoDB

**DO use MongoDB when:**
1. **Rapid Prototyping:** The flexible schema allows you to change your data model on the fly without running complex database migrations.
2. **Unstructured / Semi-structured Data:** Storing sensor data (IoT), product catalogs with wildly varying attributes, or user profiles.
3. **Massive Horizontal Scalability:** You anticipate terabytes of data that need to be distributed across many servers.

**DO NOT use MongoDB when:**
1. **Highly Relational Data:** If your data looks like a spreadsheet and requires constant, complex joins, use SQL (PostgreSQL).
2. **Heavy Multi-Document Transactions:** While MongoDB supports transactions, it is not optimized for them like SQL databases are. If you are building a banking system, use SQL.

---

## 5. Summary & Checklist
**Summary:** MongoDB is a flexible, horizontally scalable Document Database that stores data in BSON format. It is excellent for unstructured data and rapid development but should be avoided for highly relational, transaction-heavy systems.

**Completion Checklist:**
- [ ] I can explain the difference between a Table/Row and a Collection/Document.
- [ ] I know what BSON is and why Mongo uses it instead of raw JSON.
- [ ] I can list 2 use cases where MongoDB is better than SQL.
- [ ] I can list a usecase where SQL is better than MongoDB.
