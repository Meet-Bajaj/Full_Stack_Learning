# Lesson 11: Performance

## N+1 Problem
Prisma uses the DataLoader pattern under the hood to automatically batch relational queries, mitigating the classic N+1 problem.

## Connection Pooling
In serverless environments, standard connections can exhaust database limits. Use connection poolers like PgBouncer or Prisma Accelerate.
