# SQL Cheat Sheet

## Basic Querying
```sql
SELECT column1, column2 FROM table_name;
SELECT * FROM table_name WHERE condition ORDER BY column1 DESC LIMIT 10 OFFSET 20;
```

## Joins
```sql
-- Inner Join (Matches only)
SELECT * FROM A JOIN B ON A.id = B.a_id;

-- Left Join (All A, matching B)
SELECT * FROM A LEFT JOIN B ON A.id = B.a_id;
```

## Aggregation
```sql
SELECT category, COUNT(*), SUM(price) 
FROM products 
GROUP BY category 
HAVING COUNT(*) > 5;
```

## CTEs (Common Table Expressions)
```sql
WITH MyCTE AS (
  SELECT id, name FROM users WHERE active = true
)
SELECT * FROM MyCTE;
```

## Indexes
```sql
CREATE INDEX idx_user_email ON users(email);
CREATE UNIQUE INDEX idx_user_username ON users(username);
```

## Transactions
```sql
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
-- If good:
COMMIT;
-- If error:
ROLLBACK;
```
