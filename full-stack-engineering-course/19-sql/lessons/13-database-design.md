# Lesson 13: Database Design

## 1. Introduction and Learning Objectives
Writing SQL queries is only half the battle. Designing the schema correctly before writing code is what separates junior developers from senior architects.

**Learning Objectives:**
- Understand the Database Design Process.
- Read and create Entity-Relationship (ER) Diagrams.
- Translate business requirements into a normalized schema.
- Map relationships (1:1, 1:N, N:M) correctly.

---

## 2. The Design Process

1. **Requirements Gathering:** Understand the business rules. (e.g., "A user can have many shipping addresses, but an order can only ship to one address").
2. **Conceptual Design (Entity Identification):** Identify the core nouns. These become your tables. (Users, Addresses, Orders, Products).
3. **Logical Design (ER Diagramming):** Map the relationships between entities. Define Primary Keys and Foreign Keys.
4. **Physical Design:** Write the `CREATE TABLE` SQL scripts, choosing specific data types (VARCHAR, INT, UUID) and adding indexes.

---

## 3. Entity-Relationship (ER) Diagrams

ER Diagrams visually represent the database schema. 
- **Boxes** represent Entities (Tables).
- **Lines** represent Relationships.
- **Crow's Foot Notation** is standard for defining cardinality (how many of Entity A belong to Entity B).

### Crow's Foot Basics:
- `||` (Two vertical lines): Exactly One.
- `|O` (Line and Circle): Zero or One.
- `>|` (Crow's foot and line): One or Many.
- `>O` (Crow's foot and circle): Zero or Many.

---

## 4. Practical Example: E-Commerce Schema

Let's design a simple E-Commerce system.

**Entities:** `Users`, `Products`, `Orders`.

**Relationships:**
- A `User` can place many `Orders` (1:N). 
  - *Implementation:* `Orders` gets `user_id`.
- An `Order` contains many `Products`, and a `Product` can be in many `Orders` (N:M).
  - *Implementation:* We need a join table: `Order_Items`.

**Drafting the Schema:**
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE products (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE orders (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    status VARCHAR(50),
    created_at TIMESTAMP
);

CREATE TABLE order_items (
    order_id UUID REFERENCES orders(id),
    product_id UUID REFERENCES products(id),
    quantity INT,
    price_at_time DECIMAL(10, 2), -- Historical price tracking!
    PRIMARY KEY (order_id, product_id)
);
```

### The "Historical Price" Trap
Notice `price_at_time` in `order_items`. This is a classic design requirement. If you just join to `products.price`, and you change the product price next year, all historical orders will suddenly recalculate to the new price! You must snapshot the price at the time of the order.

---

## 5. Summary & Checklist

**Summary:**
Good database design requires translating business logic into normalized entities and relationships. Use ER diagrams to visualize architecture. Always anticipate how data changes over time (like the historical price problem).

**Completion Checklist:**
- [ ] I understand the 4 steps of database design.
- [ ] I can translate a 1:N and N:M business rule into table schemas.
- [ ] I understand why an N:M relationship requires a join table.
- [ ] I understand the necessity of snapshotting data (like prices) in transactional tables.
