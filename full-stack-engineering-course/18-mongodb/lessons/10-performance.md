# Lesson 10: Performance

## 1. Introduction and Learning Objectives
MongoDB is generally fast out of the box, but poor schema design and lack of indexing can quickly degrade performance as data grows.

**Learning Objectives:**
- Use Indexing effectively.
- Optimize queries using Projection.
- Understand Covered Queries.
- Use the Database Profiler.

---

## 2. Query Optimization and Projection

As discussed in Lesson 05, always use `.explain("executionStats")` to ensure your query is hitting an index (`IXSCAN`), not doing a collection scan (`COLLSCAN`).

**Projection:**
MongoDB documents can be large (up to 16MB). If you only need a user's name, don't download their entire 2MB profile document over the network.
```javascript
// Fast and memory-efficient
db.users.find({ status: "active" }, { name: 1, _id: 0 });
```

---

## 3. Covered Queries

A **Covered Query** is the holy grail of MongoDB performance. It occurs when:
1. All the fields in the query are part of an index.
2. All the fields returned in the results (projection) are in the same index.

When this happens, MongoDB returns the results directly from the index in RAM without ever touching the actual document on the disk!

**Example:**
```javascript
// 1. Create index
db.users.createIndex({ status: 1, name: 1 });

// 2. Query (Must explicitly exclude _id because it's not in our index!)
db.users.find(
  { status: "active" }, 
  { status: 1, name: 1, _id: 0 }
).explain();
```
In the `.explain()` output, `totalDocsExamined` will be `0`. The database didn't have to read a single document from disk.

---

## 4. The Database Profiler

If your application is slow, how do you find the slow queries? MongoDB has a built-in profiler.

```javascript
// Set profiling level to 1 (log slow operations)
// Log queries taking longer than 100ms
db.setProfilingLevel(1, { slowms: 100 });
```
MongoDB will write all slow queries to a special collection called `system.profile`. You can then query it to find the bottlenecks:
```javascript
db.system.profile.find({ millis: { $gt: 500 } }).sort({ ts: -1 });
```

---

## 5. Summary & Checklist
**Summary:** Optimize MongoDB by ensuring all queries use indexes, aggressively using projection to limit payload size over the wire, and aiming for Covered Queries on high-traffic endpoints. Use the profiler to find rogue slow queries.

**Completion Checklist:**
- [ ] I understand why Projection improves network performance.
- [ ] I can define a Covered Query.
- [ ] I know how to enable the Database Profiler.
