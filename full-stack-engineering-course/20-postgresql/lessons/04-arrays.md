# Lesson 04: Arrays

## 1. Introduction and Learning Objectives
PostgreSQL allows you to define a column as an array of any valid data type. This is useful for storing lists of tags, multiple phone numbers, or time-series data points without needing a separate table.

**Learning Objectives:**
- Create array columns.
- Insert and update array data.
- Query arrays using `ANY` and `ALL`.
- Understand when to use Arrays vs a Join Table.

---

## 2. Defining and Inserting Arrays

Append `[]` to any data type to make it an array.

```sql
CREATE TABLE blog_posts (
    id SERIAL PRIMARY KEY,
    title TEXT,
    tags TEXT[]
);

-- Using array literal syntax:
INSERT INTO blog_posts (title, tags) 
VALUES ('Postgres Tips', '{"database", "sql", "performance"}');

-- Using the ARRAY constructor:
INSERT INTO blog_posts (title, tags) 
VALUES ('React Basics', ARRAY['javascript', 'react']);
```

---

## 3. Querying Arrays

### Checking if a value exists (ANY / ALL)
```sql
-- Find posts where 'sql' is ANY of the tags
SELECT * FROM blog_posts 
WHERE 'sql' = ANY(tags);

-- Find posts where ALL tags are either 'database' or 'sql'
SELECT * FROM blog_posts 
WHERE tags <@ ARRAY['database', 'sql'];
```

### Containment Operators
Similar to JSONB, you can use `@>` (contains) and `<@` (is contained by).
```sql
-- Find posts that contain both 'database' AND 'sql'
SELECT * FROM blog_posts 
WHERE tags @> ARRAY['database', 'sql'];
```

---

## 4. Arrays vs Join Tables

When should you use an Array vs creating a separate `tags` table and a `post_tags` join table?

- **Use Arrays when:** The array size is small, you don't need to store metadata about the item in the array, and you rarely update individual array elements.
- **Use Join Tables when:** The list is very large, the items need their own attributes (e.g., a Tag table with a `created_by` or `description`), or you need strict referential integrity (foreign keys).

---

## 5. Summary & Checklist
**Summary:** Arrays in Postgres offer a convenient way to store simple lists of data. Use the `ANY()` function or the `@>` operator to query them efficiently. Always weigh the pros and cons between Arrays and normalized Join Tables.

**Completion Checklist:**
- [ ] I can create and insert data into an array column.
- [ ] I can query an array using `ANY()`.
- [ ] I can query an array using `@>`.
- [ ] I understand when to use an array vs a join table.
