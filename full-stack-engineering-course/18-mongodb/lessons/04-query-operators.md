# Lesson 04: Query Operators

## 1. Introduction and Learning Objectives
To filter data effectively, MongoDB uses Query Operators prefixed with a `$` inside the query object.

**Learning Objectives:**
- Use Comparison operators (`$eq`, `$gt`, `$lt`, `$in`).
- Use Logical operators (`$and`, `$or`, `$not`).
- Use Element operators (`$exists`, `$type`).
- Use Array operators (`$all`, `$elemMatch`, `$size`).

---

## 2. Comparison Operators

- `$eq` / `$ne` : Equal / Not Equal
- `$gt` / `$gte` : Greater Than / Greater Than or Equal
- `$lt` / `$lte` : Less Than / Less Than or Equal
- `$in` / `$nin` : In array / Not in array

```javascript
// Find users older than 18
db.users.find({ age: { $gt: 18 } });

// Find users whose status is 'active' or 'pending'
db.users.find({ status: { $in: ["active", "pending"] } });
```

---

## 3. Logical Operators

Multiple conditions in the same object are implicitly an `AND`. To do an `OR`, use the `$or` operator, which takes an array of conditions.

```javascript
// AND (Implicit) - age > 18 AND status is active
db.users.find({ age: { $gt: 18 }, status: "active" });

// OR - age > 18 OR status is active
db.users.find({
  $or: [
    { age: { $gt: 18 } },
    { status: "active" }
  ]
});
```

---

## 4. Element Operators

Because of the flexible schema, you often need to query based on whether a field even exists.

- `$exists`: Matches documents that have the specified field.
- `$type`: Matches documents if a field is of the specified BSON type.

```javascript
// Find users who have provided a phone number
db.users.find({ phone: { $exists: true } });

// Find users where the phone field is a string (not a number)
db.users.find({ phone: { $type: "string" } });
```

---

## 5. Array Operators

MongoDB is famous for its array handling.

### $size
Matches arrays with a specific length.
```javascript
// Find users with exactly 3 hobbies
db.users.find({ hobbies: { $size: 3 } });
```

### $all
Matches arrays that contain ALL elements specified in the query.
```javascript
// Find users who like both "reading" and "hiking" (order doesn't matter)
db.users.find({ hobbies: { $all: ["reading", "hiking"] } });
```

### $elemMatch (CRITICAL)
If you have an array of *objects*, you must use `$elemMatch` to match multiple criteria on the *same* array element.

*Data:*
`{ results: [ { score: 80, subject: "Math" }, { score: 90, subject: "Science" } ] }`

*Bad Query:*
```javascript
// Matches if ANY object has score > 85, and ANY object has subject Math. 
// This will accidentally match the document above!
db.students.find({ "results.score": { $gt: 85 }, "results.subject": "Math" });
```

*Good Query ($elemMatch):*
```javascript
// Requires BOTH conditions to be met on the EXACT SAME array element
db.students.find({
  results: { $elemMatch: { score: { $gt: 85 }, subject: "Math" } }
});
```

---

## 6. Summary & Checklist
**Summary:** Query operators allow for complex filtering. Memorize the syntax: `{ field: { $operator: value } }`. Pay special attention to `$elemMatch` when querying arrays of objects.

**Completion Checklist:**
- [ ] I can write a query using `$gt` and `$in`.
- [ ] I can write an `$or` query.
- [ ] I can check if a field exists using `$exists`.
- [ ] I understand when and why to use `$elemMatch`.
