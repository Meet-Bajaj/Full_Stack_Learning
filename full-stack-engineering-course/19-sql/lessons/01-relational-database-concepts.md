# Lesson 01: Relational Database Concepts

## 1. Introduction and Learning Objectives
Welcome to the first lesson in the SQL module! Before we write any code, we must understand the conceptual foundation upon which SQL is built: the **Relational Database Model**.

**Learning Objectives:**
- Explain what a relational database is and the problems it solves.
- Understand core terminologies: tables, rows, columns, and schemas.
- Grasp the critical concept of Primary Keys and Foreign Keys.
- Understand how relationships (1:1, 1:N, N:M) are established.
- Build a mental model of how data is interconnected.

**Prerequisites:** None.

---

## 2. Why Does the Relational Model Exist?
Before relational databases, data was often stored in flat files (like CSVs) or hierarchical models (tree-like structures). 

### The Flat File Problem
Imagine storing a list of orders in a spreadsheet:

| OrderID | CustomerName | CustomerEmail | ProductName | Price | Date |
|---------|--------------|---------------|-------------|-------|------|
| 1       | Alice Smith  | alice@abc.com | Laptop      | 1000  | 1/1  |
| 2       | Alice Smith  | alice@abc.com | Mouse       | 50    | 1/2  |

**Problems:**
1. **Redundancy (Data Duplication):** Alice's name and email are repeated for every order. This wastes space.
2. **Inconsistency (Anomalies):** If Alice changes her email, we must update every single row where she appears. If we miss one, the data is inconsistent.
3. **Rigidity:** Querying complex relationships is slow and painful.

### The Relational Solution
In 1970, Edgar F. Codd proposed the Relational Model. Instead of one giant table, data is divided into logical, distinct entities (tables) that *relate* to each other.

By splitting the data into a `Customers` table and an `Orders` table, we eliminate redundancy. If Alice changes her email, we update it in exactly *one* place.

---

## 3. Core Concepts and Mental Model

### The Mental Model
Think of a relational database as a highly organized filing cabinet. 
- The **Database** is the entire cabinet.
- **Tables (Relations)** are the individual folders inside the cabinet.
- **Columns (Attributes)** are the printed forms inside the folder that ask for specific pieces of information (e.g., "First Name", "Date of Birth").
- **Rows (Tuples/Records)** are the actual filled-out forms.

### Terminologies
- **Table:** A collection of related data held in a structured format within a database. It consists of columns and rows.
- **Column (Field):** A vertical entity in a table that contains all information associated with a specific field (e.g., all email addresses). Every column has a specific **data type** (text, integer, date).
- **Row (Record):** A horizontal entity in a table representing a single, implicitly structured data item.
- **Schema:** The blueprint or architecture of how data is organized (the structure of tables, columns, and relationships).

---

## 4. Keys: The Glue of the Relational Database

To connect tables, we need a reliable way to identify rows.

### Primary Key (PK)
A Primary Key is a column (or set of columns) that **uniquely identifies** each row in a table.
- **Rules:** It must be unique, and it cannot be NULL.
- **Example:** A `User ID`, a `Social Security Number`, or a generated auto-incrementing integer.

### Foreign Key (FK)
A Foreign Key is a column in one table that **points to the Primary Key** in another table. It acts as the cross-reference or "link" between the tables.
- **Example:** In the `Orders` table, `customer_id` is a foreign key pointing to the `id` column in the `Customers` table.

---

## 5. Relationships

How do tables relate to each other? There are three main types of relationships.

### One-to-One (1:1)
One record in Table A relates to exactly one record in Table B.
- *Example:* A `User` has one `User_Profile`.
- *Implementation:* The PK of one table is used as the FK in the other, often with a UNIQUE constraint on the FK.

### One-to-Many (1:N) - The most common!
One record in Table A relates to many records in Table B.
- *Example:* A `Customer` can place many `Orders`. An `Order` belongs to exactly one `Customer`.
- *Implementation:* The `Orders` table has a `customer_id` FK pointing to the `Customers` table.

### Many-to-Many (N:M)
Records in Table A relate to multiple records in Table B, and vice-versa.
- *Example:* A `Student` takes many `Courses`, and a `Course` has many `Students`.
- *Implementation:* Relational databases cannot handle N:M directly. We must create a **Join Table** (or intersection table/junction table).
  - e.g., `Enrollments` table with `student_id` and `course_id`.

---

## 6. Summary & Checklist

**Summary:**
Relational databases organize data into structured tables connected via primary and foreign keys. This design minimizes redundancy (data duplication) and prevents update anomalies, ensuring data integrity across complex applications.

**Completion Checklist:**
- [ ] I understand why the relational model is superior to flat files.
- [ ] I can define Table, Row, and Column.
- [ ] I understand the purpose of a Primary Key.
- [ ] I understand how a Foreign Key links tables together.
- [ ] I can identify 1:1, 1:N, and N:M relationships.
