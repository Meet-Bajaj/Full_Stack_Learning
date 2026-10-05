# MongoDB Cheat Sheet

## Basic CRUD
```javascript
// Insert
db.users.insertOne({ name: "Alice", age: 25 });

// Find
db.users.find({ age: { $gt: 18 } });
db.users.findOne({ name: "Alice" });

// Update (Requires operators!)
db.users.updateOne({ name: "Alice" }, { $set: { age: 26 } });
db.users.updateOne({ name: "Alice" }, { $push: { tags: "admin" } });

// Delete
db.users.deleteOne({ name: "Alice" });
```

## Query Operators
- `$eq`, `$ne` (Equal, Not Equal)
- `$gt`, `$gte`, `$lt`, `$lte` (Greater/Less Than)
- `$in`, `$nin` (In Array)
- `$exists: true` (Field exists)
- `$or: [ {cond1}, {cond2} ]` (Logical OR)
- `$elemMatch: { field: value }` (Match inside object arrays)

## Aggregation Pipeline
```javascript
db.orders.aggregate([
  { $match: { status: "shipped" } },
  { $group: { _id: "$customerId", total: { $sum: "$amount" } } },
  { $sort: { total: -1 } }
]);
```

## Indexes
```javascript
// Ascending Index
db.collection.createIndex({ field: 1 });
// Compound Index
db.collection.createIndex({ field1: 1, field2: -1 });
// View query execution stats
db.collection.find({}).explain("executionStats");
```

## Dot Notation (Nested Objects)
```javascript
// Correct way to query nested objects
db.users.find({ "address.city": "New York" });
```
