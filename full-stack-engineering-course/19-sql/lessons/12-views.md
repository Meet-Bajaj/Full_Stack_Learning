# Lesson 12: Views

## 1. Introduction and Learning Objectives
A View is a virtual table based on the result-set of an SQL statement. It allows you to save a complex query and query it as if it were a physical table.

**Learning Objectives:**
- Understand what a View is and why to use it.
- Create and query standard Views.
- Understand Updatable Views.
- Conceptually understand Materialized Views.

---

## 2. Standard Views

A View does not store data itself; it simply saves the query. Every time you query the view, the database engine runs the underlying SQL query.

**Why use them?**
1. **Simplicity:** Hide complex `JOIN`s and `WHERE` clauses from developers/analysts.
2. **Security:** Restrict access. You can grant a user access to a View that only shows non-sensitive columns (e.g., hiding passwords or salaries) without giving them access to the base table.

### Creating a View
```sql
CREATE VIEW active_customers AS
SELECT id, first_name, last_name, email
FROM users
WHERE status = 'active' AND deleted_at IS NULL;
```

### Querying a View
You query it exactly like a normal table.
```sql
SELECT * FROM active_customers WHERE last_name = 'Smith';
```

---

## 3. Updatable Views

In some databases (like PostgreSQL), simple views are "updatable". If you run an `INSERT` or `UPDATE` on the view, the database translates it into an `INSERT` or `UPDATE` on the underlying base table.

This only works if the view is simple (e.g., no `JOIN`s, no `GROUP BY`, no `DISTINCT`). If the view is complex, it is read-only.

---

## 4. Materialized Views

A standard View runs the query every time it is accessed. If the query takes 10 seconds to run, querying the view takes 10 seconds.

A **Materialized View** actually executes the query and *saves the results to disk* like a real table.
- **Pro:** Querying it is instant.
- **Con:** The data becomes stale. You must manually (or via a cron job/trigger) "refresh" the view.

```sql
CREATE MATERIALIZED VIEW monthly_sales_report AS
SELECT DATE_TRUNC('month', order_date) AS month, SUM(total)
FROM orders
GROUP BY DATE_TRUNC('month', order_date);

-- To update the data later:
REFRESH MATERIALIZED VIEW monthly_sales_report;
```
*(Note: Materialized Views are heavily used in Data Warehousing and Analytics).*

---

## 5. Summary & Checklist

**Summary:**
Views abstract away query complexity and provide security layers by presenting a virtual table. Standard views execute on-the-fly, while Materialized Views cache data to disk for massive performance gains on read-heavy analytical queries.

**Completion Checklist:**
- [ ] I can write a `CREATE VIEW` statement.
- [ ] I understand how Views can be used for security (restricting column access).
- [ ] I know the difference between a standard View and a Materialized View.
