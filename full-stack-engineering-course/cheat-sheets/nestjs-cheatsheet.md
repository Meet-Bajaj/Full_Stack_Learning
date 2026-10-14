# NestJS Cheat Sheet

## Modules
Organize code into domains.
```typescript
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [], // Other modules needed
  controllers: [UsersController], // Controllers instantiated by Nest
  providers: [UsersService], // Services, repositories (Injectables)
  exports: [UsersService] // Make available to other modules that import this one
})
export class UsersModule {}
```

## Controllers
Handle incoming requests and return responses.
```typescript
import { Controller, Get, Post, Body, Param, Query, UseGuards } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(@Query('role') role: string) {
    return this.usersService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
```

## Providers (Services)
Handle business logic.
```typescript
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [];

  findAll(role?: string) {
    return role ? this.users.filter(u => u.role === role) : this.users;
  }

  findOne(id: number) {
    const user = this.users.find(u => u.id === id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
}
```

## Pipes
Transform or validate data.
```typescript
// ValidationPipe (Built-in)
// main.ts
app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

// Custom Pipe
@Injectable()
export class ParseIntPipe implements PipeTransform<string, number> {
  transform(value: string, metadata: ArgumentMetadata): number {
    const val = parseInt(value, 10);
    if (isNaN(val)) throw new BadRequestException('Validation failed');
    return val;
  }
}
// Usage: @Param('id', ParseIntPipe)
```

## Guards
Determine if a request should be handled (Authentication/Authorization).
```typescript
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    return validateRequest(request); // custom logic
  }
}
// Usage: @UseGuards(AuthGuard)
```

## Interceptors
Bind extra logic before/after method execution (Logging, mapping).
```typescript
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    return next.handle().pipe(tap(() => console.log(`Time: ${Date.now() - now}ms`)));
  }
}
```
