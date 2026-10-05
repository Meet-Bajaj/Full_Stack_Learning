# Lesson 07: Schemas

## 1. Introduction and Learning Objectives
In Postgres, a Database contains one or more Schemas, and a Schema contains Tables. 

**Learning Objectives:**
- Understand what a Postgres Schema is.
- Understand the `public` schema and the `search_path`.
- Conceptually understand schema-based Multi-tenancy.

---

## 2. What is a Postgres Schema?

Think of a Schema as a namespace or a folder inside your database. By default, when you create a table, it goes into a schema named `public`.

```sql
-- Creating a new schema
CREATE SCHEMA reporting;

-- Creating a table inside that schema
CREATE TABLE reporting.annual_sales (
    id SERIAL,
    amount DECIMAL
);
```

---

## 3. The search_path

When you type `SELECT * FROM users;`, how does Postgres know where to look? It checks a variable called `search_path`.
By default, the `search_path` is `"$user", public`. 

If you want Postgres to check the `reporting` schema first without having to explicitly type `reporting.annual_sales`, you alter the search path:
```sql
SET search_path TO reporting, public;
```

---

## 4. Schema-Based Multi-Tenancy

Multi-tenancy is an architecture where a single instance of a software application serves multiple customers (tenants). Example: Slack or Shopify.

**Approach 1: Row-Level (Shared Schema)**
Every table has a `tenant_id` column. You must remember to add `WHERE tenant_id = ?` to EVERY query. Prone to catastrophic data leakage if you forget.

**Approach 2: Schema per Tenant (The Postgres Way)**
Create a separate schema for each customer. The tables (`users`, `orders`) exist in every schema.
```sql
CREATE SCHEMA tenant_acme;
CREATE SCHEMA tenant_stark;
```
When ACME logs in, the backend sets `search_path = 'tenant_acme';`. 
Now, `SELECT * FROM users;` automatically hits ACME's user table. Stark's data is physically isolated in a different schema.

---

## 5. Summary & Checklist
**Summary:** Schemas are namespaces. They allow you to organize tables logically and are a popular architectural choice for building secure, isolated multi-tenant SaaS applications.

**Completion Checklist:**
- [ ] I understand the hierarchy: Database -> Schema -> Table.
- [ ] I know what the `public` schema is.
- [ ] I can explain what the `search_path` does.
- [ ] I understand schema-based multi-tenancy.
