# SQL Module Assessment

## Part 1: Architecture & Theory
1. Draw an ER diagram for a University system (Students, Professors, Courses, Enrollments).
2. Explain to a non-technical stakeholder why we can't just store all application data in a single massive table.
3. Define 3NF (Third Normal Form) in your own words.

## Part 2: Query Writing
Given a schema of `users`, `orders`, and `products`:
1. Write a query to find the top 5 users who have spent the most money in the last 30 days.
2. Write a query using a CTE that calculates the average order value per day.

## Part 3: Optimization
1. You run `EXPLAIN` and see a `Seq Scan` taking 5000ms on the `users` table for the query `SELECT * FROM users WHERE last_name = 'Smith'`. How do you fix it? Write the SQL.
2. An ORM is generating this SQL: `SELECT * FROM users WHERE YEAR(created_at) = 2023;`. Why is this bad? Rewrite it.

## Part 4: Debugging
A transaction is throwing a deadlock error. Two users are trying to transfer money to each other at the exact same millisecond. Explain how you would solve this at the application or database level.
