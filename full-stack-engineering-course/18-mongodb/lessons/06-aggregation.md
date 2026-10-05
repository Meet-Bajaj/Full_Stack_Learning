# Lesson 06: Aggregation

## 1. Introduction and Learning Objectives
The Aggregation Pipeline is MongoDB's equivalent to SQL's `GROUP BY` and `JOIN`. It allows you to process data records and return computed results.

**Learning Objectives:**
- Understand the pipeline concept (data flows from one stage to the next).
- Use `$match` to filter and `$project` to reshape.
- Use `$group` to aggregate data.
- Use `$lookup` to join collections.
- Use `$unwind` to deconstruct arrays.

---

## 2. The Pipeline Concept

An aggregation is an array of objects. Each object is a "stage". The output of one stage is passed as the input to the next stage.

```javascript
db.orders.aggregate([
  { /* Stage 1 */ },
  { /* Stage 2 */ },
  { /* Stage 3 */ }
]);
```

---

## 3. Basic Stages: $match, $sort, $limit, $project

- `$match`: Filters documents (like `WHERE`). ALWAYS put this first to use indexes and reduce the data pipeline size.
- `$sort`: Sorts the documents.
- `$limit`: Limits the number of documents.
- `$project`: Reshapes the document (adds/removes fields).

```javascript
db.orders.aggregate([
  { $match: { status: "completed" } },
  { $sort: { totalAmount: -1 } },
  { $limit: 10 },
  { $project: { _id: 0, customerId: 1, amount: "$totalAmount" } }
]);
```
*(Notice the `$` before `totalAmount` in projection? That tells Mongo to use the value of the `totalAmount` field, not the literal string "$totalAmount").*

---

## 4. Aggregation: $group

`$group` groups documents by a specified `_id` expression and applies accumulator expressions to them (like `$sum`, `$avg`, `$max`).

```javascript
// Calculate total revenue per customer
db.orders.aggregate([
  { 
    $group: { 
      _id: "$customerId",                  // Group by customerId
      totalSpent: { $sum: "$totalAmount" }, // Sum up totalAmount
      orderCount: { $sum: 1 }               // Count the number of orders
    } 
  }
]);
```

---

## 5. Joins in MongoDB: $lookup and $unwind

MongoDB is not designed for joins, but it supports them via `$lookup`.

```javascript
db.orders.aggregate([
  {
    $lookup: {
      from: "users",             // The collection to join
      localField: "customerId",  // Field in 'orders'
      foreignField: "_id",       // Field in 'users'
      as: "customerData"         // Name of the new array field to output
    }
  }
]);
```

**The $unwind Stage**
`$lookup` always returns an **array**, even if there is only one match (because one customerId matches one User). 
If you want to flatten that array into a single object, use `$unwind`.

```javascript
// Following the above pipeline:
  { $unwind: "$customerData" }
```
Now `customerData` is an object, not an array containing one object.

---

## 6. Summary & Checklist
**Summary:** The Aggregation Pipeline is incredibly powerful. Remember the order: filter early with `$match`, aggregate with `$group`, join with `$lookup`, and format at the very end with `$project`.

**Completion Checklist:**
- [ ] I understand that pipeline stages execute sequentially.
- [ ] I can group data and calculate sums.
- [ ] I know how to perform a left outer join using `$lookup`.
- [ ] I understand why `$unwind` is often used immediately after `$lookup`.
