# Lesson 07: Common Table Expressions (CTEs)

## 1. Introduction and Learning Objectives
As queries get complex, nesting multiple subqueries makes SQL unreadable. Common Table Expressions (CTEs) solve this by allowing you to define temporary result sets that exist just for the duration of the query.

**Learning Objectives:**
- Use the `WITH` clause to create CTEs.
- Chain multiple CTEs together.
- Understand how CTEs improve query readability over subqueries.
- Conceptually understand Recursive CTEs.

---

## 2. Basic CTE Syntax (WITH clause)

A CTE is defined using the `WITH` keyword. Think of it as assigning a variable name to a `SELECT` query.

```sql
WITH RegionalSales AS (
    SELECT region, SUM(amount) AS total_sales
    FROM sales
    GROUP BY region
)
SELECT region, total_sales
FROM RegionalSales
WHERE total_sales > 1000000;
```

### Why use CTEs instead of Subqueries?
The exact same query as a subquery looks like this:
```sql
SELECT region, total_sales
FROM (
    SELECT region, SUM(amount) AS total_sales
    FROM sales
    GROUP BY region
) AS RegionalSales
WHERE total_sales > 1000000;
```
CTEs read **top-to-bottom**, whereas subqueries read inside-out. For massive queries, top-to-bottom readability is a huge maintenance advantage.

---

## 3. Chaining Multiple CTEs

You can define multiple CTEs in a single query, separated by commas. Later CTEs can reference earlier CTEs!

```sql
WITH 
UserTotals AS (
    SELECT user_id, SUM(amount) AS total_spent
    FROM orders
    GROUP BY user_id
),
TopUsers AS (
    SELECT user_id
    FROM UserTotals
    WHERE total_spent > 500
)
SELECT u.name, u.email
FROM users u
JOIN TopUsers t ON u.id = t.user_id;
```
This acts like a data pipeline: step 1 -> step 2 -> final output.

---

## 4. Recursive CTEs (Advanced Concept)

A Recursive CTE references itself. They are incredibly useful for querying hierarchical data, like an organizational chart (employees and managers) or a comment thread with nested replies.

**Syntax Concept:**
A recursive CTE needs a base case, the `UNION ALL` keyword, and a recursive step.

```sql
WITH RECURSIVE OrgChart AS (
    -- 1. Base case: Select the CEO (no manager)
    SELECT id, name, manager_id, 1 as level
    FROM employees
    WHERE manager_id IS NULL
    
    UNION ALL
    
    -- 2. Recursive step: Join employees to the CTE
    SELECT e.id, e.name, e.manager_id, oc.level + 1
    FROM employees e
    JOIN OrgChart oc ON e.manager_id = oc.id
)
SELECT * FROM OrgChart;
```

---

## 5. Summary & Checklist

**Summary:**
CTEs (the `WITH` clause) allow you to name subqueries and extract them to the top of your SQL file. This massively improves the readability and maintainability of complex data pipelines. Recursive CTEs unlock the ability to traverse trees and graphs in SQL.

**Completion Checklist:**
- [ ] I can write a basic CTE using `WITH`.
- [ ] I can chain multiple CTEs together.
- [ ] I understand why CTEs are preferred over deeply nested subqueries for readability.
- [ ] I conceptually understand what a recursive CTE is used for.
