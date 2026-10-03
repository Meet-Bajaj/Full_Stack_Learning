# Lesson 06: Pipes & Validation

## 🎯 Learning Objectives
- Understand the two main use cases of Pipes: **Transformation** and **Validation**.
- Learn to use built-in pipes (`ParseIntPipe`, `ValidationPipe`).
- Master data validation using `class-validator` and `class-transformer` via DTOs (Data Transfer Objects).
- Learn how to write a Custom Pipe.

## 🧠 Mental Model: The Water Filter
Imagine data flowing from the client to your controller as water flowing through a pipe.
A **Pipe** in NestJS acts as a water filter attached just before the faucet (the controller).
1. **Transformation (Boiling):** It can change cold water into hot water (e.g., transforming the string `"5"` into the integer `5`).
2. **Validation (Filtering):** It can check if the water is toxic. If it finds bacteria (invalid data), it blocks the flow and immediately throws an error (400 Bad Request) before the controller even sees it.

## 📖 Concept Explanation

### 1. Built-in Pipes (Transformation)
Often, route parameters come in as strings, but you need them as numbers.

```typescript
// Without a pipe
@Get(':id')
findOne(@Param('id') id: string) {
  const numericId = parseInt(id, 10); // Manual conversion
}

// With ParseIntPipe
@Get(':id')
findOne(@Param('id', ParseIntPipe) id: number) {
  // If the user visits /users/abc, Nest automatically throws a 400 Bad Request!
  return typeof id; // "number"
}
```

### 2. Validation with DTOs and `ValidationPipe`
A DTO (Data Transfer Object) defines how data should be sent over the network. Using `class-validator`, we can decorate our DTOs.

**create-user.dto.ts**
```typescript
import { IsString, IsInt, IsEmail, Min, Max } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsInt()
  @Min(18)
  @Max(99)
  readonly age: number;
}
```

**main.ts**
Enable the global validation pipe in your bootstrap function:
```typescript
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Automatically validate all incoming requests based on their DTO classes
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Strips away properties that don't have decorators
    forbidNonWhitelisted: true, // Throws an error if extra properties are sent
    transform: true, // Automatically transforms payloads to be objects typed according to their DTO classes
  }));
  await app.listen(3000);
}
```

**users.controller.ts**
```typescript
@Post()
create(@Body() createUserDto: CreateUserDto) {
  // If validation fails, Nest throws a 400 automatically.
  // If it passes, createUserDto is guaranteed to be safe and typed!
  return this.usersService.create(createUserDto);
}
```

## ⚠️ Common Mistakes
1. **Forgetting `class-transformer`:** `ValidationPipe` requires *both* `class-validator` and `class-transformer` to be installed. If you forget `class-transformer`, your validation might silently fail or crash.
2. **Not using `whitelist: true`:** If you don't enable `whitelist`, attackers can send extra malicious fields in the JSON body (e.g., `role: "admin"`), and it will pass right through to your database update function!

## 🏋️ Exercises
1. Create a `CreateProductDto` with `name` (string, max 50 chars), `price` (number, positive), and `inStock` (boolean).
2. Write a custom pipe `ParseDatePipe` that takes a string in `YYYY-MM-DD` format and transforms it into a native JavaScript `Date` object, throwing a `BadRequestException` if the format is wrong.

## ✅ Summary Checklist
- [ ] I understand the difference between transformation and validation.
- [ ] I can use `ParseIntPipe` and `ParseUUIDPipe` in route parameters.
- [ ] I know how to define a DTO and use `class-validator` decorators.
- [ ] I know how to enable and configure `ValidationPipe` globally.
