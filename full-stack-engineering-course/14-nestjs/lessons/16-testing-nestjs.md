# Lesson 16: Testing in NestJS

## 🎯 Learning Objectives
- Use the `@nestjs/testing` module.
- Write Unit Tests for Services and Controllers.
- Mock dependencies (Providers) to isolate tests.
- Write End-to-End (e2e) tests.

## 🧠 Mental Model: The Laboratory
- **Unit Testing:** You put a single gear (Service) on a workbench, spin it, and make sure it works. But the gear usually depends on a motor (Database). Since we don't have a motor on the workbench, we put a fake, cardboard motor (a Mock) next to it just to see if the gear spins correctly.
- **E2E Testing:** You put the entire assembled car on a test track, turn the key, and drive it.

## 📖 Concept Explanation

NestJS provides a `Test.createTestingModule` method that creates a fake IoC container for testing.

### 1. Unit Testing a Service
Let's test `UsersService`, which depends on `PrismaService`.

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';

describe('UsersService', () => {
  let service: UsersService;
  let prisma: PrismaService;

  // Mock object
  const mockPrismaService = {
    user: {
      findMany: jest.fn().mockResolvedValue([{ id: 1, name: 'Test' }]),
    },
  };

  beforeEach(async () => {
    // Create the fake testing module
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: PrismaService, useValue: mockPrismaService }, // Inject the mock!
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should return an array of users', async () => {
    const result = await service.getAllUsers();
    expect(result).toEqual([{ id: 1, name: 'Test' }]);
    expect(prisma.user.findMany).toHaveBeenCalled();
  });
});
```

### 2. E2E Testing
E2E tests boot up the entire application and use Supertest to send HTTP requests.
They are usually located in the `/test` folder.

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
```

## ⚠️ Common Mistakes
- **Not mocking deep dependencies:** If you test a Controller, you mock the Service. If you test a Service, you mock the Database. If you actually hit a real database in a unit test, it is no longer a unit test!
- **Forgetting `compile()`:** `Test.createTestingModule(...)` returns a builder. You must call `.compile()` at the end.

## 🏋️ Exercises
1. Write a unit test for a Controller that ensures it correctly returns the data provided by a mocked Service.
2. Set up an in-memory SQLite database specifically for your E2E test suite.

## ✅ Summary Checklist
- [ ] I can create a Testing Module.
- [ ] I know how to override a provider with `useValue` for mocking.
- [ ] I can write an E2E test using Supertest.
