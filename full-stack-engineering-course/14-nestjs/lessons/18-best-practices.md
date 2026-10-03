# Lesson 18: Best Practices & Architecture

## 🎯 Learning Objectives
- Review standard architectural patterns in NestJS.
- Learn about API Versioning.
- Implement Health Checks using Terminus.
- Understand Barrel Exports and Clean Architecture.

## 📖 Concept Explanation

### 1. API Versioning
As your app grows, you will introduce breaking changes. NestJS handles versioning gracefully.

**main.ts**
```typescript
import { VersioningType } from '@nestjs/common';

app.enableVersioning({
  type: VersioningType.URI, // e.g. /v1/users
});
```

**controller.ts**
```typescript
@Controller({
  path: 'users',
  version: '1', // Route becomes /v1/users
})
export class UsersControllerV1 {}
```

### 2. Health Checks (Terminus)
In production (K8s, AWS), systems need to ping your app to see if it's alive.
Install: `npm i @nestjs/terminus`

```typescript
import { HealthCheckService, HttpHealthIndicator, PrismaHealthIndicator } from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private prisma: PrismaHealthIndicator, // Custom indicator
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      // Checks if an external API is up
      () => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
      // Checks if Database is responsive
      () => this.prisma.pingCheck('database', this.prismaService),
    ]);
  }
}
```

### 3. Barrel Exports
Instead of importing from deep folder structures:
`import { User } from './entities/user.entity'`

Create an `index.ts` file in the `entities` folder:
```typescript
export * from './user.entity';
export * from './post.entity';
```
Now import cleanly:
`import { User, Post } from './entities'`

### 4. DTOs and Separation of Concerns
- **Controller:** ONLY handles `req`/`res` and route params. Extracts data into DTOs.
- **Service:** ONLY handles business logic. Returns raw data or Entities.
- **Repository/Prisma:** ONLY handles database interactions.
- **Serialization:** Use `@Exclude()` (class-transformer) on User entities to prevent returning passwords to the client.

## ✅ Summary Checklist
- [ ] I understand how to enable URI versioning.
- [ ] I can create a health check endpoint.
- [ ] I follow strict separation of concerns in my architecture.
