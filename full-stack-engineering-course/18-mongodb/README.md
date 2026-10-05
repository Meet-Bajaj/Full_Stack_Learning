# Module 18: MongoDB

## Overview
Welcome to the MongoDB module! MongoDB is the world's most popular NoSQL database. Unlike relational databases that use tables and rows, MongoDB uses flexible, JSON-like documents. This module covers everything from basic CRUD operations to advanced aggregation pipelines and schema design for document databases.

## Learning Objectives
By the end of this module, you will be able to:
- Understand the document model, BSON, and how NoSQL differs from SQL.
- Perform advanced CRUD operations using MongoDB operators.
- Write complex Aggregation Pipelines for data analysis.
- Design NoSQL schemas (knowing when to embed vs when to reference).
- Understand indexing strategies for performance optimization.
- Use Mongoose (ODM) in a Node.js environment.
- Understand MongoDB's production architecture (Replica Sets and Sharding).

## Module Structure

### Lessons
1. **[01. Introduction to MongoDB](./lessons/01-introduction-to-mongodb.md)** - Document databases vs relational, BSON, when to use MongoDB
2. **[02. Documents and Collections](./lessons/02-documents-and-collections.md)** - Collections, databases, `_id`, ObjectId, flexible schema
3. **[03. CRUD Operations](./lessons/03-crud-operations.md)** - insertOne/Many, find, updateOne/Many, deleteOne/Many, operators ($set, $inc, $push)
4. **[04. Query Operators](./lessons/04-query-operators.md)** - Comparison ($eq, $gt), logical ($and, $or), element, array ($all, $elemMatch)
5. **[05. Indexes](./lessons/05-indexes.md)** - Single field, compound, multikey, text, unique, TTL indexes, explain()
6. **[06. Aggregation](./lessons/06-aggregation.md)** - Aggregation pipeline, $match, $group, $lookup (joins), $unwind
7. **[07. Schema Design](./lessons/07-schema-design.md)** - Embedding vs referencing, 1:1, 1:N, N:M, denormalization
8. **[08. Transactions](./lessons/08-transactions.md)** - Multi-document transactions, ACID in MongoDB
9. **[09. Mongoose Basics](./lessons/09-mongoose-basics.md)** - Mongoose schemas, models, validation, middleware, virtuals
10. **[10. Performance](./lessons/10-performance.md)** - Query optimization, indexes, projection, profiler
11. **[11. Production](./lessons/11-production.md)** - Replica sets, sharding concepts, backups, Atlas

### Practice & Assessment
- **[Exercises](./exercises/exercises.md)** - Hands-on Mongo Shell queries
- **[Projects](./projects/projects.md)** - Build data models for blogs, IoT, and E-commerce
- **[MCQs](./mcqs/mcqs.md)** - 100 Multiple Choice Questions
- **[Interview Questions](./interview.md)** - Mongo interview prep
- **[Cheat Sheet](./cheatsheet.md)** - Mongo query reference
- **[Assessment](./assessment.md)** - Final module assessment
- **[Progress Tracker](./progress.md)** - Track your completion status

## Prerequisites
- Basic understanding of JSON and JavaScript syntax.
