# Lesson 02: SQL Fundamentals

## 1. Introduction and Learning Objectives
In this lesson, we will write our first SQL queries. We will cover the foundational commands used to read and manipulate data, often referred to as CRUD operations (Create, Read, Update, Delete) in application development.

**Learning Objectives:**
- Understand the difference between DDL and DML.
- Query data using `SELECT`.
- Insert data using `INSERT`.
- Modify existing data using `UPDATE`.
- Remove data using `DELETE`.
- Control result output using `ORDER BY`, `LIMIT`, and `OFFSET`.

**Prerequisites:** Completion of Lesson 01.

---

## 2. SQL Command Categories

SQL commands are generally grouped into categories:
1. **DDL (Data Definition Language):** Defines structure. `CREATE TABLE`, `ALTER TABLE`, `DROP TABLE`.
2. **DML (Data Manipulation Language):** Manipulates data. `SELECT`, `INSERT`, `UPDATE`, `DELETE`.
3. **DCL (Data Control Language):** Manages access. `GRANT`, `REVOKE`.
4. **TCL (Transaction Control Language):** Manages transactions. `COMMIT`, `ROLLBACK`.

In this lesson, we focus on **DML**.

---

## 3. The SELECT Statement (Read)

`SELECT` is the most common SQL command. It retrieves data from a database.

### Syntax
```sql
SELECT column1, column2 
FROM table_name;
```

### Examples
**1. Select all columns**
Using the asterisk (`*`) returns all columns. *Note: In production, explicitly name your columns to save bandwidth and prevent unexpected app crashes if schema changes.*
```sql
SELECT * FROM users;
```

**2. Select specific columns**
```sql
SELECT first_name, last_name, email FROM users;
```

### Aliasing Columns (AS)
You can rename columns in your output (this does not change the database schema) using `AS`.
```sql
SELECT first_name AS "First Name", email AS user_email FROM users;
```

---

## 4. The INSERT Statement (Create)

`INSERT INTO` adds new rows to a table.

### Syntax
```sql
INSERT INTO table_name (column1, column2)
VALUES (value1, value2);
```

### Examples
**1. Inserting a single row**
```sql
INSERT INTO users (first_name, last_name, email)
VALUES ('John', 'Doe', 'john.doe@example.com');
```

**2. Inserting multiple rows at once (Bulk Insert)**
```sql
INSERT INTO users (first_name, last_name, email)
VALUES 
  ('Alice', 'Smith', 'alice@example.com'),
  ('Bob', 'Jones', 'bob@example.com');
```

---

## 5. The UPDATE Statement (Update)

`UPDATE` modifies existing records.

**🚨 CRITICAL WARNING:** ALWAYS use a `WHERE` clause with `UPDATE`. If you omit it, you will update EVERY row in the table!

### Syntax
```sql
UPDATE table_name
SET column1 = value1, column2 = value2
WHERE condition;
```

### Example
```sql
UPDATE users
SET email = 'john.newemail@example.com', last_name = 'Doe-Smith'
WHERE id = 1;
```

---

## 6. The DELETE Statement (Delete)

`DELETE` removes existing records.

**🚨 CRITICAL WARNING:** Like `UPDATE`, ALWAYS use a `WHERE` clause. A `DELETE` without a `WHERE` clause empties the entire table!

### Syntax
```sql
DELETE FROM table_name
WHERE condition;
```

### Example
```sql
DELETE FROM users
WHERE id = 5;
```

---

## 7. Controlling Results: ORDER BY, LIMIT, and OFFSET

When you `SELECT` data, relational databases do NOT guarantee the order of the rows unless you explicitly ask for it.

### ORDER BY
Sorts the result set. Default is ascending (`ASC`), but you can specify descending (`DESC`).
```sql
-- Sort users by last name alphabetically A-Z
SELECT * FROM users ORDER BY last_name ASC;

-- Sort by newest users first
SELECT * FROM users ORDER BY created_at DESC;
```

### LIMIT and OFFSET (Pagination)
- **LIMIT:** Specifies the maximum number of rows to return.
- **OFFSET:** Skips a specific number of rows before beginning to return results.

These two are the backbone of UI pagination.

```sql
-- Give me the top 10 most expensive products
SELECT name, price FROM products 
ORDER BY price DESC 
LIMIT 10;

-- Give me page 2 (assuming 10 items per page)
SELECT name, price FROM products 
ORDER BY price DESC 
LIMIT 10 OFFSET 10;
```

---

## 8. Summary & Checklist

**Summary:**
CRUD operations in SQL are achieved via `INSERT`, `SELECT`, `UPDATE`, and `DELETE`. The `SELECT` statement is highly customizable, allowing column aliasing, sorting with `ORDER BY`, and pagination via `LIMIT/OFFSET`. Always remember to use `WHERE` clauses on destructive operations!

**Completion Checklist:**
- [ ] I can write a `SELECT` statement to retrieve specific columns.
- [ ] I can `INSERT` new records.
- [ ] I understand the danger of `UPDATE` and `DELETE` without a `WHERE` clause.
- [ ] I can sort results and paginate them.
