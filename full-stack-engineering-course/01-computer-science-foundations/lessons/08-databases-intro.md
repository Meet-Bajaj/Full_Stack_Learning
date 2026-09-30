# Lesson 08: Databases Introduction

## Learning Objectives
- Define what a database is and why we use them over simple files.
- Understand the concept of CRUD operations.
- Compare Relational (SQL) databases and Document (NoSQL) databases.
- Understand what a Key-Value store is.

## Prerequisites
- Data Structures (Lesson 06).

## Concept Explanation
A database is an organized collection of data, generally stored and accessed electronically from a computer system. They are managed by a Database Management System (DBMS).

Why not just use text files or Excel spreadsheets?
Databases provide:
1. **Concurrency**: Thousands of users can read/write data simultaneously without corrupting it.
2. **Speed**: They use advanced data structures (like B-Trees) under the hood to find data instantly.
3. **Data Integrity**: They enforce rules (e.g., "Age must be a number", "Email must be unique").

### CRUD Operations
All database interactions boil down to four fundamental operations:
- **C**reate: Insert new data.
- **R**ead: Query/retrieve existing data.
- **U**pdate: Modify existing data.
- **D**elete: Remove data.

### Types of Databases

#### 1. Relational Databases (SQL)
- **Examples**: PostgreSQL, MySQL, SQLite.
- **How it works**: Data is stored in strict **Tables** with rows and columns (like Excel). Tables are linked together using "Foreign Keys" (Relationships).
- **Pros**: Extremely reliable, strict data validation (ACID compliance), complex queries using SQL.
- **Cons**: Rigid schema. If you want to add a new column to a table with 10 million rows, it can be slow.

#### 2. Document Databases (NoSQL)
- **Examples**: MongoDB, Firestore.
- **How it works**: Data is stored as JSON-like **Documents**. There is no strict schema; Document A can have a "nickname" field while Document B does not.
- **Pros**: Flexible, easy to scale horizontally, aligns perfectly with JavaScript objects.
- **Cons**: Can lead to messy, inconsistent data if the developer isn't careful. Complex relational queries are harder.

#### 3. Key-Value Stores
- **Examples**: Redis, Memcached.
- **How it works**: Operates exactly like a massive Hash Map. You provide a Key, it stores a Value. Everything is usually stored entirely in RAM.
- **Pros**: Unbelievably fast.
- **Cons**: Data is wiped if the server restarts (volatile). Usually used for **Caching**, not primary storage.

## WHY it exists
Data is the lifeblood of any application. Without databases, web apps would just be static brochures. Understanding the pros and cons of different DB types allows architects to build scalable systems (e.g., using Postgres for user accounts, MongoDB for flexible product catalogs, and Redis for caching frequent requests).

## Mental Model & Real-World Analogy
- **Relational DB**: A well-organized filing cabinet where every folder has a strict form you must fill out. If a form is missing the "Date" field, the filing clerk rejects it.
- **Document DB**: A massive box where you can throw in any document you want. As long as it has a name on it, they'll accept it.
- **Key-Value Store**: A coat check. Fast, temporary, one-to-one mapping.

## Common Mistakes
- **"NoSQL is better than SQL"**: This was a trend in the 2010s. Today, the industry standard is to use Relational Databases (SQL) for 90% of web applications, because data usually *is* relational and benefits from strict schemas. NoSQL has specific use cases but should not be the default.

## Exercises
1. For an e-commerce site, would you use SQL or NoSQL to store financial transactions and user balances? Why?
2. Map the HTTP Methods (GET, POST, PUT, DELETE) to their corresponding CRUD operations.

## Summary
Databases handle the persistent storage of an application's state. Relational databases offer strict structure, Document databases offer flexibility, and Key-Value stores offer speed.

## Completion Checklist
- [ ] I can explain what CRUD stands for.
- [ ] I can describe the difference between a table-based DB and a document DB.
- [ ] I know why we don't just use text files to save user data.
