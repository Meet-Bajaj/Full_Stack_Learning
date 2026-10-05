# Lesson 08: Constraints

## 1. Introduction and Learning Objectives
Databases are the source of truth for an application. If bad data gets into the database, the application breaks. Constraints are rules enforced at the database level to ensure data integrity and accuracy.

**Learning Objectives:**
- Understand what constraints are and why they are necessary.
- Apply `NOT NULL`, `UNIQUE`, `DEFAULT`, and `CHECK` constraints.
- Define Primary and Foreign Keys during table creation.
- Understand referential integrity.

---

## 2. Common Data Constraints

When creating or altering a table, you define rules on the columns.

### NOT NULL
Ensures a column cannot have a `NULL` value.
```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL -- Must always be provided
);
```

### UNIQUE
Ensures all values in a column are different. (A Primary Key automatically has a UNIQUE constraint).
```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL
);
```

### DEFAULT
Sets a default value for a column if no value is specified during an `INSERT`.
```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### CHECK
Ensures that the values in a column satisfy a specific condition.
```sql
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    price DECIMAL(10, 2) CHECK (price > 0),
    discount_percentage INT CHECK (discount_percentage BETWEEN 0 AND 100)
);
```

---

## 3. Primary Key and Composite Keys

A `PRIMARY KEY` constraint uniquely identifies each record. It is a combination of `NOT NULL` and `UNIQUE`.

### Composite Primary Key
Sometimes, a single column isn't enough to uniquely identify a row. A Composite Key uses multiple columns to form the unique identifier.

```sql
CREATE TABLE course_enrollments (
    student_id INT,
    course_id INT,
    enrollment_date DATE,
    PRIMARY KEY (student_id, course_id) -- A student can only enroll in a specific course once
);
```

---

## 4. Foreign Keys and Referential Integrity

A `FOREIGN KEY` ensures **referential integrity**. This means the database guarantees that the relationship between tables remains valid.

If `orders.user_id` is a foreign key pointing to `users.id`:
1. You cannot insert an order for a `user_id` that doesn't exist.
2. You cannot delete a user if they have existing orders (unless you specify a cascading rule).

```sql
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INT,
    amount DECIMAL(10, 2),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

### ON DELETE Actions
- `RESTRICT` / `NO ACTION` (Default): Throws an error if you try to delete the user.
- `CASCADE`: If the user is deleted, all their orders are automatically deleted.
- `SET NULL`: If the user is deleted, the `user_id` on the orders becomes `NULL`.

---

## 5. Summary & Checklist

**Summary:**
Constraints are the gatekeepers of your database. By strictly enforcing rules (`NOT NULL`, `UNIQUE`, `CHECK`, and Foreign Keys) at the database layer, you protect your application from bugs caused by inconsistent or orphaned data.

**Completion Checklist:**
- [ ] I can apply `NOT NULL`, `UNIQUE`, and `DEFAULT` constraints.
- [ ] I can write a `CHECK` constraint for custom validation.
- [ ] I can create a table with a Composite Primary Key.
- [ ] I understand what referential integrity is and how `ON DELETE CASCADE` works.
