# Lesson 2: Prisma Schema

## The `schema.prisma` File
This file is the heart of any Prisma project. It defines your database connection, client generator, and data models.

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
}
```

## Fields and Types
Prisma supports types like `String`, `Int`, `Boolean`, `DateTime`, `Json`, etc. 
Attributes like `@id`, `@unique`, `@default`, and `@map` control database-level constraints and naming conventions.
