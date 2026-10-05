# Lesson 03: Filtering and Operators

## 1. Introduction and Learning Objectives
In the previous lesson, we learned basic CRUD. Now, we'll dive deep into the `WHERE` clause to filter data effectively using various operators.

**Learning Objectives:**
- Use comparison operators (=, !=, <, >).
- Chain conditions using logical operators (AND, OR, NOT).
- Use `IN` and `BETWEEN` for ranges and sets.
- Perform pattern matching with `LIKE`.
- Handle `NULL` values correctly.

---

## 2. The WHERE Clause and Comparison Operators

The `WHERE` clause filters records that fulfill a specified condition.

### Comparison Operators
- `=` Equal
- `!=` or `<>` Not equal
- `>` Greater than
- `<` Less than
- `>=` Greater than or equal to
- `<=` Less than or equal to

```sql
SELECT title, price 
FROM books 
WHERE price >= 20.00;
```

---

## 3. Logical Operators: AND, OR, NOT

You can combine multiple conditions using logical operators.

```sql
-- AND: Both conditions must be true
SELECT * FROM users 
WHERE role = 'admin' AND status = 'active';

-- OR: At least one condition must be true
SELECT * FROM products 
WHERE category = 'electronics' OR category = 'books';

-- NOT: Negates the condition
SELECT * FROM orders 
WHERE NOT status = 'cancelled';
```

**Order of Operations:** Parentheses `()` matter! `AND` is evaluated before `OR`.
```sql
SELECT * FROM employees 
WHERE department = 'Sales' AND (role = 'Manager' OR salary > 50000);
```

---

## 4. IN and BETWEEN

### IN Operator
The `IN` operator allows you to specify multiple possible values for a column (like a shorthand for multiple `OR`s).
```sql
-- Instead of: WHERE category = 'A' OR category = 'B' OR category = 'C'
SELECT * FROM products 
WHERE category IN ('Electronics', 'Books', 'Toys');
```

### BETWEEN Operator
Selects values within a given range (inclusive).
```sql
SELECT * FROM orders 
WHERE order_date BETWEEN '2023-01-01' AND '2023-12-31';
```

---

## 5. Pattern Matching with LIKE

`LIKE` is used to search for a specified pattern in a column.
- `%` represents zero, one, or multiple characters.
- `_` represents exactly one single character.

```sql
-- Starts with 'A'
SELECT * FROM users WHERE first_name LIKE 'A%';

-- Ends with 'son'
SELECT * FROM users WHERE last_name LIKE '%son';

-- Contains 'gmail' anywhere
SELECT * FROM users WHERE email LIKE '%gmail%';

-- Exactly 5 characters long, starting with 'S'
SELECT * FROM users WHERE first_name LIKE 'S____';
```
*(Note: `LIKE` is case-sensitive in PostgreSQL, but `ILIKE` is case-insensitive. In MySQL, `LIKE` is typically case-insensitive).*

---

## 6. Handling NULL (IS NULL)

In SQL, `NULL` means "unknown" or "missing". You **CANNOT** use `=` to check for `NULL`. `NULL = NULL` evaluates to `NULL` (unknown), not True!

Always use `IS NULL` or `IS NOT NULL`.

```sql
-- WRONG:
SELECT * FROM users WHERE phone = NULL; 

-- CORRECT:
SELECT * FROM users WHERE phone IS NULL;

-- Find users who HAVE provided a phone number:
SELECT * FROM users WHERE phone IS NOT NULL;
```

---

## 7. Summary & Checklist

**Summary:**
Filtering data accurately is critical. Use standard comparison operators for numbers, `IN`/`BETWEEN` for sets and ranges, `LIKE` for text search, and `IS NULL` for missing data. Pay attention to `AND`/`OR` precedence.

**Completion Checklist:**
- [ ] I can write `WHERE` clauses with multiple conditions.
- [ ] I know how to use parentheses to group logical operators.
- [ ] I can use `LIKE` with wildcards (`%`).
- [ ] I know how to check for `NULL` values correctly.
