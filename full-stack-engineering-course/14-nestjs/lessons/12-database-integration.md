# Lesson 12: Database Integration (Prisma)

## 🎯 Learning Objectives
- Integrate Prisma ORM into a NestJS application.
- Create a dedicated Prisma Module and Service.
- Understand connection pooling and graceful shutdown.

## 🧠 Mental Model: The Translator
Your NestJS app speaks TypeScript. Your database speaks SQL (Postgres, MySQL). 
**Prisma** is the professional Translator. Instead of writing raw SQL strings, you ask the Translator (in TypeScript): "Please fetch the user with ID 1". The Translator talks to the database, gets the raw rows, formats them into a perfect TypeScript object, and hands it back to you.

## 📖 Concept Explanation

While NestJS supports TypeORM and Mongoose out of the box, the industry is heavily shifting towards **Prisma** due to its unmatched type safety.

### 1. Prisma Setup
```bash
npm install prisma --save-dev
npx prisma init
```
Define your schema in `prisma/schema.prisma`:
```prisma
model User {
  id    Int     @default(autoincrement()) @id
  email String  @unique
  name  String?
}
```
Run `npx prisma db push` to generate the client.

### 2. Creating the Prisma Service
We need to abstract the Prisma Client into an injectable NestJS Service.

**prisma.service.ts**
```typescript
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  // OnModuleInit ensures we connect to the DB when Nest starts
  async onModuleInit() {
    await this.$connect();
  }
}
```

### 3. Creating the Prisma Module
Since the database is used everywhere, we put it in a global module.

**prisma.module.ts**
```typescript
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Crucial: export it so others can use it
})
export class PrismaModule {}
```

### 4. Using it in a Feature Service
Now, you can inject `PrismaService` into any other service.

```typescript
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: { email: string; name: string }) {
    // Prisma provides full autocompletion here!
    return this.prisma.user.create({
      data,
    });
  }

  async getAllUsers() {
    return this.prisma.user.findMany();
  }
}
```

## ⚠️ Common Mistakes
1. **Instantiating `new PrismaClient()` everywhere:** Never do this. It will create thousands of database connections and exhaust your database's connection pool. ALWAYS use Dependency Injection (`PrismaService`) so NestJS shares the Singleton instance.
2. **Leaking connections on crash:** Make sure you handle NestJS graceful shutdown hooks (`enableShutdownHooks`) so Prisma can call `await this.$disconnect()` when the app stops.

## 🏋️ Exercises
1. Define a `Post` model in Prisma that has a 1-to-many relationship with `User`.
2. Generate the client and create a `PostsService` that fetches all posts along with their author's name (`include: { author: true }`).

## ✅ Summary Checklist
- [ ] I can initialize Prisma and generate the client.
- [ ] I can create an injectable `PrismaService` utilizing `OnModuleInit`.
- [ ] I can inject the Prisma service into feature services.
