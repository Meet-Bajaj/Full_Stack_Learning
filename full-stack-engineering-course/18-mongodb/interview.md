# MongoDB Interview Questions

## Junior Level
1. **What is the difference between SQL and MongoDB?**
   - *Answer:* SQL is relational (tables, rows, strict schema). MongoDB is a document database (collections, JSON/BSON documents, flexible schema).
2. **What is BSON?**
   - *Answer:* Binary JSON. It's how MongoDB stores data on disk. It extends JSON to include data types like Date, ObjectId, and binary data.
3. **Why do we need the `$set` operator in an update query?**
   - *Answer:* If you just pass an object to an update command without `$set`, it will replace the entire document with that object. `$set` tells Mongo to only update specific fields.

## Mid Level
4. **Explain Embedding vs Referencing in Schema Design.**
   - *Answer:* Embedding stores related data inside the same document (fast reads, subject to 16MB limit). Referencing stores the `_id` of a document in another collection (like a foreign key, prevents data duplication, slower reads).
5. **What is the `$elemMatch` operator and when do you use it?**
   - *Answer:* It matches documents that contain an array field with at least one element that matches *all* the specified query criteria. It's critical when querying arrays of objects to ensure the conditions apply to the *same* object in the array.
6. **What is Mongoose and why use it?**
   - *Answer:* It's an Object Data Modeling (ODM) library for Node.js. It provides schema validation, lifecycle hooks (middleware), and relationship mapping (`populate`) that the native driver lacks.

## Senior Level
7. **Explain what a Covered Query is and why it's important for performance.**
   - *Answer:* A query where all fields being filtered, sorted, and returned (projected) exist within a single index. MongoDB returns the result directly from RAM without touching the document on disk, yielding massive performance gains.
8. **What is a Replica Set? Explain the election process.**
   - *Answer:* A cluster of nodes holding the same data for high availability. One is Primary (accepts writes), others are Secondaries (replicate oplog). If the Primary dies, Secondaries hold an election (using heartbeat protocols) to promote a new Primary.
9. **Explain Sharding and the danger of a monotonically increasing Shard Key.**
   - *Answer:* Sharding scales data horizontally across servers. If you shard by a timestamp or auto-incrementing ID, all new data writes will route to the single shard responsible for the "highest" chunk, creating a massive write bottleneck.
