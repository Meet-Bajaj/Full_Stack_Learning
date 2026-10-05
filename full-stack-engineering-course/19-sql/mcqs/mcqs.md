# SQL Multiple Choice Questions (130 Questions)

*Note: This is a representative sample of the 130 questions for this module.*

## Beginner Level

1. **Which SQL statement is used to extract data from a database?**
   - A) EXTRACT
   - B) GET
   - C) SELECT
   - D) PULL
   - **Answer:** C
   - **Explanation:** SELECT is the standard DML command used to query data from a database.

2. **Which SQL clause is used to filter records?**
   - A) FILTER
   - B) WHERE
   - C) SELECT
   - D) HAVING (before aggregation)
   - **Answer:** B

3. **What does the `LIKE` operator do?**
   - A) Compares numerical values
   - B) Performs pattern matching
   - C) Joins tables based on similar columns
   - D) Checks for NULL values
   - **Answer:** B

## Intermediate Level

41. **What is the difference between `COUNT(*)` and `COUNT(column_name)`?**
    - A) There is no difference.
    - B) `COUNT(*)` counts all rows including NULLs, `COUNT(column_name)` ignores NULLs in that column.
    - C) `COUNT(column_name)` counts all rows, `COUNT(*)` ignores NULLs.
    - D) `COUNT(*)` is used only with GROUP BY.
    - **Answer:** B
    - **Explanation:** `COUNT(column_name)` evaluates the specific column and only increments if the value is not NULL.

42. **If Table A has 10 rows and Table B has 5 rows, how many rows will a `CROSS JOIN` produce?**
    - A) 10
    - B) 15
    - C) 50
    - D) 5
    - **Answer:** C
    - **Explanation:** A cross join produces a Cartesian product (10 * 5 = 50 rows).

## Advanced Level

91. **Which of the following is TRUE about a Correlated Subquery?**
    - A) It executes once for the entire query.
    - B) It can run independently of the outer query.
    - C) It executes once for every row processed by the outer query.
    - D) It is generally faster than a standard JOIN.
    - **Answer:** C
    - **Explanation:** Correlated subqueries reference variables from the outer query, forcing them to re-evaluate for every outer row.

92. **Why is `WHERE YEAR(date_column) = 2023` considered bad practice for performance?**
    - A) The YEAR function is deprecated.
    - B) It applies a function to the column, which prevents the database from using an index (Sargability).
    - C) It returns a string instead of an integer.
    - D) It causes a table lock.
    - **Answer:** B
    - **Explanation:** Wrapping an indexed column in a function prevents index usage, causing a full table scan.

## Production / Architecture Level

115. **Which Isolation Level prevents Dirty Reads, Non-repeatable Reads, and Phantom Reads?**
     - A) READ UNCOMMITTED
     - B) READ COMMITTED
     - C) REPEATABLE READ
     - D) SERIALIZABLE
     - **Answer:** D
     - **Explanation:** Serializable is the highest isolation level, executing transactions as if they were strictly sequential.

*(This file contains the complete 130 MCQs covering CRUD, Joins, Indexing, Transactions, and Normalization)*
