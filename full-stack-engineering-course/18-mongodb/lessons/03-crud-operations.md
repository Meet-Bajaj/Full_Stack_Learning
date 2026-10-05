# Lesson 03: CRUD Operations

## 1. Introduction and Learning Objectives
In this lesson, we will learn how to Create, Read, Update, and Delete documents using the MongoDB shell/driver methods.

**Learning Objectives:**
- Insert documents using `insertOne` and `insertMany`.
- Retrieve documents using `find` and `findOne`.
- Modify documents using `updateOne` and Update Operators (`$set`, `$inc`, `$push`).
- Remove documents using `deleteOne`.

---

## 2. Create (Insert)

To add data to a collection, use `insertOne()` or `insertMany()`.

```javascript
// Insert a single document
db.users.insertOne({
  name: "Alice",
  age: 25
});

// Insert multiple documents
db.users.insertMany([
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
]);
```

---

## 3. Read (Find)

The `find()` method retrieves documents. It takes two optional arguments: a query filter, and a projection (which fields to return).

```javascript
// Get all documents in the collection
db.users.find({});

// Get all users named Alice
db.users.find({ name: "Alice" });

// Get a single document (returns an object instead of a cursor/array)
db.users.findOne({ _id: ObjectId("5f4...") });
```

### Projection
To return only specific fields, pass a second object. `1` means include, `0` means exclude.
```javascript
// Return only name and age, exclude _id
db.users.find({ name: "Alice" }, { name: 1, age: 1, _id: 0 });
```

---

## 4. Update and Update Operators

Updating documents in Mongo is unique. You do not just pass the new data; you must use **Update Operators**.

```javascript
// Syntax: db.collection.updateOne(filter, update, options)
```

### $set (Modify or add a field)
```javascript
db.users.updateOne(
  { name: "Alice" },        // Filter
  { $set: { age: 26 } }     // Action
);
```

### $inc (Increment a number)
```javascript
// Increase age by 1
db.users.updateOne(
  { name: "Bob" },
  { $inc: { age: 1 } }
);
```

### $push (Add an item to an array)
```javascript
// Add "reading" to the hobbies array
db.users.updateOne(
  { name: "Charlie" },
  { $push: { hobbies: "reading" } }
);
```

### $unset (Remove a field entirely)
```javascript
db.users.updateOne(
  { name: "Alice" },
  { $unset: { age: "" } }
);
```

---

## 5. Delete

Use `deleteOne()` or `deleteMany()`.

```javascript
db.users.deleteOne({ name: "Alice" });

// Delete all users under age 18
db.users.deleteMany({ age: { $lt: 18 } });
```

---

## 6. Summary & Checklist
**Summary:** MongoDB CRUD uses JavaScript methods. Unlike SQL's `UPDATE`, MongoDB requires explicit operators like `$set` or `$push` to modify documents, giving you precise control over complex nested objects and arrays.

**Completion Checklist:**
- [ ] I can insert multiple documents at once.
- [ ] I can use Projection in a `find()` query to limit returned fields.
- [ ] I can use the `$set`, `$inc`, and `$push` update operators.
- [ ] I can delete documents.
