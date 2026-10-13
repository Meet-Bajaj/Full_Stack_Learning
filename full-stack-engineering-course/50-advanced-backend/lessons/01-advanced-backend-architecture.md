# Lesson 1: Clean Architecture in NestJS

## Learning Objectives
- Understand the layers of Clean Architecture (Domain, Application, Infrastructure, Presentation)
- Apply Dependency Inversion to decouple business logic from frameworks
- Build testable backend systems

## Why it Exists
As applications grow, tightly coupling business logic with frameworks (like Express or NestJS) or databases (like Prisma or TypeORM) makes the codebase rigid, hard to test, and difficult to modify. Clean Architecture separates concerns, making the core business logic independent of external agents.

## Mental Model & Analogy
Think of Clean Architecture like a restaurant. 
- **Domain**: The recipe (rules of the dish, unchanging).
- **Application**: The chef (executes the recipe).
- **Infrastructure**: The kitchen equipment and ingredients delivery (database, external APIs).
- **Presentation**: The waiter (takes requests from customers and returns the dish).

## Architecture Layers
1. **Domain Layer**: Enterprise business rules. Entities, Value Objects.
2. **Application Layer**: Application business rules. Use Cases, Ports (interfaces).
3. **Infrastructure Layer**: Frameworks, DB, UI. Adapters that implement the Ports.

## Code Example: Dependency Inversion in NestJS
```typescript
// 1. Domain / Application Port (Interface)
export const USER_REPOSITORY = Symbol('USER_REPOSITORY');

export interface UserRepository {
  findById(id: string): Promise<User | null>;
  save(user: User): Promise<void>;
}

// 2. Application Service (Use Case)
@Injectable()
export class GetUserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: UserRepository
  ) {}

  async execute(id: string) {
    const user = await this.userRepository.findById(id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
}

// 3. Infrastructure Adapter
@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }
  // ...
}
```

## Best Practices
- Never import infrastructure details (like `@nestjs/common` or `prisma`) inside the domain layer.
- Use dependency injection to provide concrete implementations to use cases.

## Checklist
- [ ] Understand the 4 layers
- [ ] Grasp Dependency Inversion Principle
- [ ] Apply to a small NestJS project
