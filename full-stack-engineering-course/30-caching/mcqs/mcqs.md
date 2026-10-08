# Caching MCQs

1. **Question:** What is the primary purpose of a Cache Stampede prevention mechanism (like locking)?
   - A) To prevent multiple cache misses from hitting the database simultaneously.
   - B) To ensure the cache never expires.
   - C) To lock the database table for writes.
   - D) To distribute data evenly across Redis shards.
   - **Correct Answer:** A
   - **Explanation:** A cache stampede occurs when many concurrent requests miss the cache and hit the database at the same time. Locking ensures only one request queries the DB.
   - **Difficulty:** Advanced

*(Note: Full bank of 60 scenario-based questions will be expanded in the course LMS)*
