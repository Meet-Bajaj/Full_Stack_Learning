# Lesson 1: Introduction to Prisma

## What is Prisma?
Prisma is a modern ORM (Object-Relational Mapper) for Node.js and TypeScript. It simplifies database access by providing a strongly typed client and a declarative schema language.

## ORM Concepts
An ORM translates between in-memory objects and relational database tables. While traditional ORMs map tables to classes (Active Record / Data Mapper), Prisma uses a custom schema to generate a bespoke, type-safe client.

## Prisma vs Others
- **Sequelize/TypeORM**: Traditional class-based ORMs. Can be verbose and prone to N+1 issues.
- **Prisma**: Schema-first, generates a tailored client, excellent TypeScript support.
- **Drizzle**: Closer to SQL, zero-dependency, gaining popularity but less abstraction than Prisma.

## Architecture
1. **Prisma Schema**: The single source of truth for your database models.
2. **Prisma Client**: Auto-generated and type-safe query builder.
3. **Prisma Migrate**: Declarative data modeling and migration tool.
