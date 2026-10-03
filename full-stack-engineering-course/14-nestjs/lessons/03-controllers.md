# Lesson 03: Controllers

## 🎯 Learning Objectives
- Learn how to use `@Controller()` to define route prefixes.
- Master HTTP method decorators (`@Get`, `@Post`, etc.).
- Extract request data using parameter decorators (`@Body`, `@Query`, `@Param`).
- Understand how NestJS handles standard responses vs library-specific responses.

## 🧠 Mental Model: The Receptionist
Controllers are the receptionists of your application. They don't do the actual heavy lifting (that's for the Services). Their only job is to:
1. Receive the incoming HTTP request.
2. Unpack the data (look at the URL, body, query).
3. Hand the data to the appropriate Service worker.
4. Take the result from the worker and hand it back to the client as an HTTP response.

## 📖 Concept Explanation

### The Controller Class
Controllers are classes decorated with `@Controller('route-prefix')`.

```typescript
import { Controller, Get, Post, Param, Body, Query, HttpCode } from '@nestjs/common';

@Controller('cats') // All routes in this class start with /cats
export class CatsController {
  
  @Post()
  @HttpCode(201) // Optional: Specify status code explicitly (201 is default for POST anyway)
  create(@Body() createCatDto: any) {
    // @Body() extracts the req.body automatically
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Query('limit') limit: string) {
    // @Query('limit') extracts req.query.limit
    return `This action returns all cats (limit: ${limit})`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // @Param('id') extracts req.params.id
    return `This action returns a #${id} cat`;
  }
}
```

### Automatic Response Handling
Notice how we just `return` a string or an object? We don't use `res.send()` or `res.json()`. 
NestJS intercepts the return value. If it's an object or array, Nest automatically serializes it to JSON. If it's a string, it sends text. It also automatically sets the status code (200 for GET, 201 for POST).

### Async / Await
Every route handler can (and usually should) be `async`. Nest will resolve the Promise automatically.

```typescript
@Get()
async findAll(): Promise<any[]> {
  const cats = await this.catsService.findAll(); // Delegate to service
  return cats; // Nest waits for the promise and sends the JSON!
}
```

## ⚠️ Common Mistakes
1. **Using `@Res()`:** You *can* inject the Express response object using `@Res() res`. However, if you do this, you lose Nest's automatic response handling (interceptors, return serialization). You are now fully responsible for calling `res.send()`. Avoid this unless you are doing something complex like streaming a file download.
2. **Fat Controllers:** Writing database queries inside the controller. The controller should be extremely thin. It should immediately call `this.service.doSomething()`.

## 🏋️ Exercises
1. Use the CLI to generate a controller: `nest g controller users`.
2. Write endpoints for full CRUD operations (GET all, GET one by id, POST, PATCH, DELETE) using the correct method and parameter decorators.

## ✅ Summary Checklist
- [ ] I can create a controller with a specific route prefix.
- [ ] I can extract `Body`, `Param`, and `Query` data using decorators.
- [ ] I understand that returning data handles the response automatically.
