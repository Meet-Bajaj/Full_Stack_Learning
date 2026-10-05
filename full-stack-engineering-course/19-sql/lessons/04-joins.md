# Lesson 04: Joins (CRITICAL)

## 1. Introduction and Learning Objectives
**This is the most important lesson in this module.** Relational databases store data across multiple tables. To get meaningful data back, we must combine these tables using `JOIN`s.

**Learning Objectives:**
- Understand the concept of joining tables based on common columns.
- Master `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, and `FULL OUTER JOIN`.
- Understand `CROSS JOIN` and Self Joins.
- Visualize joins using mental models.

---

## 2. What is a JOIN?

A `JOIN` clause is used to combine rows from two or more tables, based on a related column between them (usually a Primary Key to Foreign Key relationship).

### The Setup
Imagine two tables:
**users:** `id, name, email`
**orders:** `id, user_id, total_amount`

We want a report showing the user's name and their order total.

---

## 3. INNER JOIN

The `INNER JOIN` returns records that have matching values in **both** tables. If a user has no orders, they will NOT appear in the result.

**Mental Model:** The intersection of two circles in a Venn diagram.

```sql
SELECT users.name, orders.total_amount
FROM users
INNER JOIN orders ON users.id = orders.user_id;
```
*Note: You can omit the word `INNER` and just write `JOIN`. It defaults to `INNER JOIN`.*

### Table Aliases
Writing full table names is tedious. We use aliases.
```sql
SELECT u.name, o.total_amount
FROM users u
JOIN orders o ON u.id = o.user_id;
```

---

## 4. LEFT JOIN (or LEFT OUTER JOIN)

The `LEFT JOIN` returns ALL records from the left table (Table 1), and the matched records from the right table (Table 2). The result is `NULL` from the right side if there is no match.

**Use Case:** "Give me all users, and their order totals if they have any. Even if they haven't ordered anything, I still want to see the user."

```sql
SELECT u.name, o.total_amount
FROM users u
LEFT JOIN orders o ON u.id = o.user_id;
```
If a user hasn't ordered, `total_amount` will be `NULL`.

---

## 5. RIGHT JOIN and FULL OUTER JOIN

### RIGHT JOIN
Returns all records from the right table, and matched records from the left. It's just the inverse of `LEFT JOIN`. In practice, developers usually just swap the order of tables and use `LEFT JOIN` for readability.

### FULL OUTER JOIN
Returns all records when there is a match in either left or right table. 
- If a user has no orders, they show up with `NULL` for order data.
- If an order has no user (maybe an orphaned record), it shows up with `NULL` for user data.

```sql
SELECT u.name, o.total_amount
FROM users u
FULL OUTER JOIN orders o ON u.id = o.user_id;
```

---

## 6. CROSS JOIN

`CROSS JOIN` returns the Cartesian product of the two tables. It joins EVERY row in Table 1 with EVERY row in Table 2.

**Warning:** If Table 1 has 1,000 rows and Table 2 has 1,000 rows, the result has 1,000,000 rows. Use with extreme caution.

```sql
-- Creating all possible combinations of sizes and colors
SELECT s.size, c.color
FROM sizes s
CROSS JOIN colors c;
```

---

## 7. Self Join

A Self Join is a regular join, but the table is joined with itself.
**Use Case:** Hierarchical data, like an employee table where an employee has a `manager_id` pointing to the `id` of another employee in the same table.

```sql
SELECT e.name AS Employee, m.name AS Manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;
```

---

## 8. Summary & Checklist

**Summary:**
Joins are how relational databases do their magic. `INNER JOIN` gets overlapping data. `LEFT JOIN` gets everything from the primary table plus matched optional data. Always specify the `ON` condition explicitly.

**Completion Checklist:**
- [ ] I can explain the difference between `INNER JOIN` and `LEFT JOIN`.
- [ ] I understand how table aliases make queries readable.
- [ ] I know what a Self Join is used for.
