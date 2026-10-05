# Lesson 12: Prisma with NestJS

## PrismaService
Create a service that extends `PrismaClient` and implements `OnModuleInit`.

```typescript
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
```
