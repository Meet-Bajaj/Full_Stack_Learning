# Lesson 06: Subqueries

## 1. Introduction and Learning Objectives
A subquery is a query nested inside another query. It allows you to use the result of one query as an input for another.

**Learning Objectives:**
- Understand what subqueries are and where they can be placed.
- Differentiate between scalar, row, and table subqueries.
- Understand Correlated Subqueries.
- Use `EXISTS` and `IN` with subqueries.

---

## 2. Scalar Subqueries

A scalar subquery returns exactly **one row and one column** (a single value). You can use it anywhere a single value is expected, like in a `WHERE` clause or a `SELECT` list.

**Example: Find products more expensive than the average price.**
```sql
-- 1. Inner query runs first: Calculates average (e.g., 50)
-- 2. Outer query runs: Finds products > 50
SELECT name, price 
FROM products
WHERE price > (SELECT AVG(price) FROM products);
```

---

## 3. Row and Table Subqueries (IN operator)

A subquery might return a single column with multiple rows (a list). You can use the `IN` operator to check against this list.

**Example: Find all customers who have ordered a specific product.**
```sql
SELECT first_name, last_name
FROM users
WHERE id IN (
    SELECT user_id 
    FROM orders 
    WHERE product_id = 101
);
```
*Note: This could also be done with a `JOIN`. Sometimes a `JOIN` is faster, sometimes a subquery is more readable. The database query optimizer often treats them similarly.*

---

## 4. Correlated Subqueries

A correlated subquery is a subquery that **references columns from the outer query**. This means the subquery cannot run independently; it executes once for *every* row processed by the outer query. 

*(Warning: Can be slow on large datasets!)*

**Example: Find employees whose salary is higher than the average salary of their specific department.**
```sql
SELECT e1.name, e1.salary, e1.department_id
FROM employees e1
WHERE e1.salary > (
    SELECT AVG(salary) 
    FROM employees e2 
    WHERE e2.department_id = e1.department_id -- Correlation here!
);
```

---

## 5. The EXISTS Operator

`EXISTS` is used to test for the existence of any record in a subquery. It returns TRUE if the subquery returns one or more records. It is highly optimized and often faster than `IN` for correlated subqueries.

**Example: Find users who have at least one order.**
```sql
SELECT name 
FROM users u
WHERE EXISTS (
    SELECT 1 
    FROM orders o 
    WHERE o.user_id = u.id
);
```
*(Notice `SELECT 1` - it doesn't matter what we select, we only care if a row exists).*

---

## 6. Summary & Checklist

**Summary:**
Subqueries allow you to break down complex problems into nested queries. They can be used to dynamically calculate values for `WHERE` clauses, generate lists for `IN` clauses, or check for existence using `EXISTS`. Be cautious with correlated subqueries as they run row-by-row.

**Completion Checklist:**
- [ ] I can write a scalar subquery.
- [ ] I know how to use `IN` with a subquery that returns a list.
- [ ] I understand what makes a subquery "correlated".
- [ ] I can use the `EXISTS` operator.
