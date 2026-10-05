# Lesson 07: Schema Design

## 1. Introduction and Learning Objectives
Designing schemas in MongoDB is completely different from SQL. In SQL, you normalize data to 3NF. In MongoDB, data is often denormalized based on **how the application accesses the data**.

**Learning Objectives:**
- Understand the difference between Embedding and Referencing.
- Design 1:1, 1:N, and N:M relationships.
- Know when to denormalize data.

---

## 2. Embedding vs. Referencing

There are only two ways to relate data in MongoDB:

### 1. Embedding (Denormalization)
Store related data inside the same document.
- **Pros:** Retrieve all data in a single query (fast). No `$lookup` needed.
- **Cons:** Document size limit is 16MB. If the embedded array grows infinitely, it will crash.

### 2. Referencing (Normalization)
Store the `_id` of the related document, just like a Foreign Key in SQL.
- **Pros:** Data is not duplicated. No 16MB limit.
- **Cons:** Requires multiple queries or `$lookup` to fetch the data (slower).

---

## 3. Designing Relationships

### One-to-One (1:1)
**Rule:** ALWAYS Embed.
*Example:* A User and their Profile.
```json
{
  "_id": 1,
  "name": "Alice",
  "profile": { "bio": "Hello", "twitter": "@alice" }
}
```

### One-to-Few (1:N, small N)
**Rule:** Embed.
*Example:* A User and their multiple Addresses. A user won't have 10,000 addresses, so it will never hit the 16MB limit.
```json
{
  "_id": 1,
  "name": "Alice",
  "addresses": [
    { "street": "123 Main St", "city": "NY" },
    { "street": "456 Broad St", "city": "LA" }
  ]
}
```

### One-to-Squillions (1:N, huge N)
**Rule:** Reference.
*Example:* A System Event Log and the Application it belongs to. An application can generate millions of logs. Do NOT embed logs inside the Application document. Store `app_id` in the Log document.

### Many-to-Many (N:M)
**Rule:** Two-way Referencing or One-way Referencing.
*Example:* Books and Authors.
A book can have a few authors, an author can write a few books. Embed arrays of IDs on both sides, or just on the side queried most often.
```json
// Book document
{ "_id": 1, "title": "Mongo Pro", "author_ids": [101, 102] }
```

---

## 4. Strategic Denormalization (The Hybrid Approach)

Sometimes you embed *some* data but reference the rest.
*Example:* E-commerce Order.
When a user places an order, you should **embed** the `product_name` and `price_at_time_of_purchase` directly in the Order document, but **reference** the `product_id`.

```json
{
  "order_id": 999,
  "products": [
    { "product_id": 12, "name": "Laptop", "price": 1000 }
  ]
}
```
If the actual product name changes later, the historical order still shows the correct embedded data!

---

## 5. Summary & Checklist
**Summary:** Mongo schema design is driven by application access patterns. "Data that is accessed together, should be stored together." Embed data unless the array is unbound and will grow indefinitely, in which case you must use referencing.

**Completion Checklist:**
- [ ] I can explain Embedding vs Referencing.
- [ ] I know the MongoDB document size limit (16MB).
- [ ] I know how to model a One-to-Few relationship.
- [ ] I understand the Hybrid approach (embedding summary data while referencing the ID).
