# Lesson 02: Data Types

## 1. Introduction and Learning Objectives
PostgreSQL supports standard SQL types (VARCHAR, INT, DATE) but also provides incredibly powerful native data types that simplify application logic.

**Learning Objectives:**
- Use numeric, text, and boolean types appropriately.
- Utilize UUIDs for primary keys.
- Understand Enum types.
- Be introduced to JSON/JSONB and Arrays.

---

## 2. Standard Types

### Text Types
- `VARCHAR(n)`: Variable-length with limit.
- `TEXT`: Variable-length, unlimited. **Best Practice:** In Postgres, `TEXT` has no performance penalty over `VARCHAR`. Just use `TEXT` unless you specifically want the database to enforce a length limit.

### Numeric Types
- `INT` / `INTEGER`: Standard 4-byte integer.
- `BIGINT`: 8-byte integer (use this for IDs if not using UUID).
- `DECIMAL(p,s)` or `NUMERIC(p,s)`: Exact precision (use for money).
- `FLOAT` / `REAL`: Inexact precision (use for scientific calculations, never money).

### Date/Time
- `DATE`: Date only.
- `TIMESTAMP`: Date and time.
- `TIMESTAMPTZ`: Timestamp WITH time zone. **Best Practice:** ALWAYS use `TIMESTAMPTZ`. It stores everything in UTC and converts it based on the client's timezone automatically.

---

## 3. Advanced Postgres Types

### UUID (Universally Unique Identifier)
UUIDs are 128-bit identifiers. They are excellent for distributed systems because you can generate them on the client-side without asking the database for an auto-incrementing ID.
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT
);
```

### ENUM Types
Enums are useful for columns with a static set of values.
```sql
CREATE TYPE order_status AS ENUM ('pending', 'processing', 'shipped', 'delivered');

CREATE TABLE orders (
    id UUID PRIMARY KEY,
    status order_status DEFAULT 'pending'
);
```

### Arrays and JSONB
Postgres natively supports arrays of any type (e.g., `TEXT[]`) and JSON binary data (`JSONB`). We will cover these in depth in the next two lessons.

---

## 4. Summary & Checklist
**Summary:** Postgres provides robust data types. Always use `TEXT` over `VARCHAR`, always use `TIMESTAMPTZ` over `TIMESTAMP`, and consider UUIDs for primary keys in modern web applications.

**Completion Checklist:**
- [ ] I know which numeric type to use for financial data.
- [ ] I understand the benefit of `TIMESTAMPTZ`.
- [ ] I know how to use the `UUID` data type.
- [ ] I can create and use a custom `ENUM` type.
