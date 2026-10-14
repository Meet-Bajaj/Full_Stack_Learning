# SQL Cheat Sheet

## DDL (Data Definition Language)
```sql
-- Create Table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Alter Table
ALTER TABLE users ADD COLUMN age INT;
ALTER TABLE users DROP COLUMN age;

-- Drop Table
DROP TABLE IF EXISTS users;
```

## DML (Data Manipulation Language)
```sql
-- Insert
INSERT INTO users (username, email) 
VALUES ('johndoe', 'john@example.com');

-- Insert Multiple
INSERT INTO users (username, email) VALUES 
('alice', 'alice@ex.com'),
('bob', 'bob@ex.com');

-- Update
UPDATE users 
SET email = 'new@example.com' 
WHERE username = 'johndoe';

-- Delete
DELETE FROM users WHERE id = 5;
```

## DQL (Data Query Language)
```sql
-- Basic Select
SELECT id, username FROM users WHERE id = 1;

-- Filtering & Sorting
SELECT * FROM users 
WHERE created_at >= '2023-01-01' AND username LIKE 'j%'
ORDER BY created_at DESC 
LIMIT 10 OFFSET 20;

-- Aggregation
SELECT COUNT(*), AVG(age), MAX(age) FROM users;

-- Group By
SELECT role, COUNT(*) as count 
FROM users 
GROUP BY role 
HAVING COUNT(*) > 5;
```

## JOINs
```sql
-- INNER JOIN (Matches in both tables)
SELECT u.username, p.title 
FROM users u
JOIN posts p ON u.id = p.user_id;

-- LEFT JOIN (All users, matched posts or NULL)
SELECT u.username, p.title 
FROM users u
LEFT JOIN posts p ON u.id = p.user_id;
```

## Advanced Queries
```sql
-- CTE (Common Table Expression)
WITH RecentActiveUsers AS (
    SELECT user_id, COUNT(*) as post_count
    FROM posts
    WHERE created_at > CURRENT_DATE - INTERVAL '7 days'
    GROUP BY user_id
)
SELECT u.username, r.post_count
FROM users u
JOIN RecentActiveUsers r ON u.id = r.user_id;

-- Subquery
SELECT username FROM users 
WHERE id IN (SELECT user_id FROM posts WHERE likes > 100);
```

## Indexes & Transactions
```sql
-- Create Index (Speeds up lookups on email)
CREATE INDEX idx_users_email ON users(email);

-- Transactions
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT; -- Or ROLLBACK; if error
```
