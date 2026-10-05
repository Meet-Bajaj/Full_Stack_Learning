# MongoDB Multiple Choice Questions (100 Questions)

*Note: Representative sample for Module 18.*

## Beginner Level

1. **Which data format does MongoDB use to store documents on disk?**
   - A) JSON
   - B) BSON
   - C) XML
   - D) CSV
   - **Answer:** B

2. **If you do not specify an `_id` field upon insertion, what does MongoDB do?**
   - A) Throws an error
   - B) Generates an auto-incrementing integer
   - C) Generates a unique ObjectId
   - D) Uses the document's hash as the ID
   - **Answer:** C

## Intermediate Level

41. **Which operator would you use to add an element to an array in a document?**
    - A) `$add`
    - B) `$insert`
    - C) `$push`
    - D) `$set`
    - **Answer:** C

42. **In an Aggregation Pipeline, what is the purpose of the `$match` stage?**
    - A) To join two collections
    - B) To filter the documents (similar to a WHERE clause)
    - C) To group documents by a specific key
    - D) To sort the output
    - **Answer:** B

43. **Why would you use the `$elemMatch` operator?**
    - A) To check if an array contains a specific string.
    - B) To match multiple criteria against the exact same array element (in an array of objects).
    - C) To count the elements in an array.
    - D) To unwind an array into separate documents.
    - **Answer:** B

## Advanced Level

81. **What is a "Covered Query"?**
    - A) A query that is completely satisfied by an index, requiring no document reads from disk.
    - B) A query executed within a transaction.
    - C) A query that targets a sharded cluster.
    - D) A query that hides sensitive fields using projection.
    - **Answer:** A

82. **In Mongoose, what is a "Virtual"?**
    - A) A field that is stored in the database as binary data.
    - B) A computed property that exists in the application memory but is NOT saved to the database.
    - C) A foreign key reference to another collection.
    - D) A middleware hook that runs before saving.
    - **Answer:** B

## Production / Architecture Level

91. **What is the primary danger of choosing a monotonically increasing value (like a timestamp) as a Shard Key?**
    - A) It cannot be indexed.
    - B) It causes "jumbo chunks".
    - C) All new write operations will be routed to a single shard, causing a massive bottleneck.
    - D) It violates the BSON spec.
    - **Answer:** C

92. **In a MongoDB Replica Set, what happens if the Primary node goes offline?**
    - A) The database becomes completely unavailable until manually restarted.
    - B) The Secondaries hold an election and automatically promote one node to be the new Primary.
    - C) Writes are routed to a backup SQL database.
    - D) Reads fail, but writes are queued.
    - **Answer:** B
