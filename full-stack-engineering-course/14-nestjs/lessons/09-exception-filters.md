# Lesson 09: Exception Filters

## 🎯 Learning Objectives
- Learn about NestJS built-in HTTP Exceptions.
- Understand the Exception Filter layer.
- Create a custom global Exception Filter to format error responses.

## 🧠 Mental Model: The Crisis Management Team
When something goes wrong in the application (an error is thrown), normal execution halts. 
The **Exception Filter** is the Crisis Management Team. No matter where the explosion happens, the crisis team steps in, catches the debris, translates the chaos into a polite, structured press release (the JSON error response), and delivers it to the public (the client) so the company (server) doesn't completely shut down.

## 📖 Concept Explanation

### Built-in HTTP Exceptions
In Express, you use `res.status(404).send(...)`. 
In NestJS, you simply `throw` an exception. NestJS automatically catches it and formats the response.

```typescript
@Get(':id')
findOne(@Param('id') id: string) {
  if (id !== '1') {
    // Nest catches this and sends a 403 status code
    throw new ForbiddenException('You do not have access to this resource');
  }
  return 'Success';
}
```
*Other common built-in exceptions:* `BadRequestException`, `NotFoundException`, `UnauthorizedException`, `InternalServerErrorException`.

### Custom Exception Filters
By default, NestJS sends a standard JSON payload:
```json
{
  "statusCode": 403,
  "message": "You do not have access to this resource",
  "error": "Forbidden"
}
```
If you want to add a timestamp, the request path, or change the structure, you need a custom **Exception Filter**.

```typescript
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException) // Tells Nest to catch ALL HTTP exceptions
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>(); // Getting the Express Response
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    // Custom formatted response
    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        message: exception.message,
      });
  }
}
```

### Applying the Filter
You can apply it to a method, controller, or globally.

```typescript
// Globally in main.ts (Recommended)
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
```

## ⚠️ Common Mistakes
1. **Catching everything without logging:** If you write an `@Catch()` filter that catches `Error` (not just `HttpException`), you must make sure to log the error to the console or an APM tool (like Datadog). Otherwise, critical database crashes will be silently swallowed and returned to the user as a generic "Internal Error".
2. **Not using the `ArgumentsHost` properly:** The `ArgumentsHost` is powerful because Nest works with HTTP, WebSockets, and Microservices. Always use `host.switchToHttp()` if you are dealing with a REST API to safely get the `req` and `res`.

## 🏋️ Exercises
1. Write a `PrismaClientExceptionFilter` that specifically catches Prisma database errors (e.g., Unique Constraint Violations) and translates them into `409 Conflict` HTTP exceptions.
2. Modify the Global Exception Filter to only show the stack trace if `process.env.NODE_ENV !== 'production'`.

## ✅ Summary Checklist
- [ ] I can throw standard HTTP Exceptions provided by NestJS.
- [ ] I understand the `@Catch()` decorator.
- [ ] I can create a custom Exception Filter to standardize API error formats.
