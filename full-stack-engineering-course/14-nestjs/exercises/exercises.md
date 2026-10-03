# NestJS Exercises

## 1. Spot the Bug: Dependency Injection
Why will this code throw an error on startup?

```typescript
// users.module.ts
@Module({
  controllers: [UsersController],
})
export class UsersModule {}

// users.controller.ts
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  @Get()
  getUsers() { return this.usersService.findAll(); }
}
```

*Solution Hint:* Look at the `providers` array in the module.

## 2. Refactoring: Fat Controller
Refactor this Controller by moving the logic into a Service.

```typescript
@Controller('products')
export class ProductsController {
  private products = [];

  @Post()
  create(@Body() body: any) {
    if (!body.name || body.price < 0) {
      throw new BadRequestException('Invalid data');
    }
    const newProduct = { id: Date.now(), ...body };
    this.products.push(newProduct);
    return newProduct;
  }
}
```

## 3. Custom Pipe Validation
Write a custom `ParseObjectIdPipe` that takes a string, checks if it is a valid 24-character MongoDB hex string, and throws a `BadRequestException` if it is not.

```typescript
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseObjectIdPipe implements PipeTransform<string, string> {
  transform(value: string, metadata: ArgumentMetadata): string {
    // Write your regex validation here
    // return value or throw error
  }
}
```

## 4. RxJS Interceptor
Write an interceptor that intercepts the response of a controller. If the response is a string, append `" - Processed by NestJS"` to the end of it using the RxJS `map` operator.
