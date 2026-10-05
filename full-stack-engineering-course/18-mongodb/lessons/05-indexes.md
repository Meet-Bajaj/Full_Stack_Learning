# Lesson 05: Indexes

## 1. Introduction and Learning Objectives
Just like in SQL, without indexes, MongoDB must scan every single document in a collection (a Collection Scan) to find results. Indexes make reads extremely fast.

**Learning Objectives:**
- Create Single, Compound, and Unique indexes.
- Create Multikey (Array) indexes.
- Create Text indexes.
- Use TTL (Time-To-Live) indexes.
- Use `.explain()` to analyze queries.

---

## 2. Basic Index Types

### Single Field Index
```javascript
// 1 for ascending, -1 for descending
db.users.createIndex({ email: 1 });
```

### Unique Index
Ensures no two documents have the same value for this field.
```javascript
db.users.createIndex({ email: 1 }, { unique: true });
```

### Compound Index
An index on multiple fields. Order matters! (Follow the ESR rule: Equality, Sort, Range).
```javascript
db.users.createIndex({ status: 1, age: -1 });
```

---

## 3. Advanced MongoDB Indexes

### Multikey Indexes (Arrays)
If you create an index on a field that contains an array, MongoDB automatically creates a separate index entry for *every element* in the array. This makes querying tags incredibly fast.
```javascript
// If 'tags' is an array of strings
db.articles.createIndex({ tags: 1 }); 
```

### Text Indexes
MongoDB supports basic full-text search. A collection can only have ONE text index.
```javascript
db.articles.createIndex({ title: "text", body: "text" });

// To query it:
db.articles.find({ $text: { $search: "database tutorial" } });
```

### TTL (Time-To-Live) Indexes
A very special feature of MongoDB. It automatically deletes documents after a certain amount of time. Perfect for session tokens, logs, or temporary OTPs.
```javascript
// Delete documents 3600 seconds (1 hour) after their 'createdAt' timestamp
db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 });
```

---

## 4. Query Analysis: explain()

Always append `.explain("executionStats")` to your query to see if it used an index.

```javascript
db.users.find({ email: "test@test.com" }).explain("executionStats");
```

**Look for `totalDocsExamined`:**
- If it equals the number of documents in the collection, you did a **COLLSCAN** (Collection Scan). Bad!
- If it equals `nReturned`, you used an **IXSCAN** (Index Scan). Good!

---

## 5. Summary & Checklist
**Summary:** Indexes are critical for MongoDB performance. MongoDB offers standard B-Tree indexes, but also specialized indexes like Multikey (for arrays) and TTL (for auto-deleting data). Always use `.explain()` to verify index usage.

**Completion Checklist:**
- [ ] I can create a Unique index.
- [ ] I know how Multikey indexes handle arrays.
- [ ] I can create a TTL index to automatically delete old data.
- [ ] I know how to check if a query used an index using `.explain()`.
