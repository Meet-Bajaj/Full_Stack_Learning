# Lesson 09: Normalization

## 1. Introduction and Learning Objectives
Normalization is the process of structuring a relational database to reduce data redundancy and improve data integrity. It involves dividing large tables into smaller, less redundant tables and defining relationships between them.

**Learning Objectives:**
- Understand why normalization is necessary (Update, Insertion, and Deletion anomalies).
- Learn the Normal Forms (1NF, 2NF, 3NF).
- Understand when to Denormalize for performance.

---

## 2. The Problem: Database Anomalies

If data is not normalized (e.g., stored in one giant spreadsheet-like table), you run into anomalies:
- **Update Anomaly:** If a customer changes their address, you have to update it in 50 different rows.
- **Insertion Anomaly:** You cannot add a new course to a university database until at least one student enrolls in it (if the table requires student data).
- **Deletion Anomaly:** Deleting the last student enrolled in a course deletes the course information entirely.

---

## 3. The Normal Forms

Database design progresses through stages called Normal Forms.

### First Normal Form (1NF)
**Rule:** Each column must contain atomic (indivisible) values, and each column must have a unique name. No repeating groups or arrays.

*Bad (Unnormalized):*
| Student | Courses |
|---|---|
| Alice | Math, Science |

*Good (1NF):*
| Student | Course |
|---|---|
| Alice | Math |
| Alice | Science |

### Second Normal Form (2NF)
**Rule:** Must be in 1NF, and all non-key attributes must be fully dependent on the *entire* primary key (this applies mainly to composite primary keys).

If you have a composite key `(Student_ID, Course_ID)` and a column `Course_Name`. The `Course_Name` depends ONLY on `Course_ID`, not the `Student_ID`. This violates 2NF.

*Solution:* Break it into two tables: `Students_Courses` and `Courses`.

### Third Normal Form (3NF)
**Rule:** Must be in 2NF, and there must be no transitive dependencies. (A non-key column cannot depend on another non-key column).

*Example:* You have a `Users` table with columns `City` and `Zip_Code`. `City` actually depends on `Zip_Code`, not strictly the User. 
*Solution:* Move `Zip_Code` and `City` to an `Addresses` table, and store `Address_ID` on the User.

*(A common saying for 3NF: Every non-key attribute must provide a fact about the key, the whole key, and nothing but the key, so help me Codd).*

---

## 4. Denormalization

Normalization is great for data integrity, but it requires many `JOIN`s to query the data, which can slow down read-heavy applications.

**Denormalization** is the strategic, intentional process of adding redundancy back into the database to improve read performance.

*Example:* Storing `total_comments` on a `Posts` table. Strictly speaking, this violates normalization because you could just `COUNT()` the comments in the `Comments` table. But counting millions of comments on every page load is slow. By denormalizing and updating a counter, reads become instant.

---

## 5. Summary & Checklist

**Summary:**
Normalization (1NF, 2NF, 3NF) organizes tables to eliminate redundancy and prevent anomalies. It makes writing data (Inserts/Updates) safe and efficient. However, for massive read-heavy workloads, strategic denormalization may be required to avoid expensive table joins.

**Completion Checklist:**
- [ ] I can explain what Update, Insertion, and Deletion anomalies are.
- [ ] I understand that 1NF means atomic values (no arrays/comma-separated strings).
- [ ] I understand the core concept of 3NF (no transitive dependencies).
- [ ] I can explain why you might intentionally denormalize a database.
