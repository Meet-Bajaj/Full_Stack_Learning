# Lesson 08: Interceptors

## 🎯 Learning Objectives
- Understand the role of Interceptors in Aspect-Oriented Programming (AOP).
- Learn how to intercept requests *before* and responses *after* the controller executes.
- Get a basic understanding of RxJS (Reactive Extensions for JavaScript) and the `handle()` method.
- Implement caching, logging, and data transformation interceptors.

## 🧠 Mental Model: The Mail Courier
An **Interceptor** is like a mail courier who handles packages (requests/responses) between the post office and the recipient.
1. **Before delivery:** The courier can log the time they started the route, or check if they already have the package in their truck (Cache).
2. **After pickup:** The courier can wrap the package in a nice box (Response Transformation), or measure exactly how long the delivery took (Logging).

Interceptors wrap the *entire* route execution process.

## 📖 Concept Explanation

Interceptors have access to the `ExecutionContext` and the `CallHandler`. 
The `CallHandler.handle()` method returns an **RxJS Observable**. This stream represents the response coming from the controller.

### 1. The Logging Interceptor
Let's measure how long a request takes.

```typescript
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before Controller Execution...');
    const now = Date.now();

    return next
      .handle() // This triggers the Controller
      .pipe(
        // tap() looks at the response but doesn't change it
        tap(() => console.log(`After Controller Execution... Took ${Date.now() - now}ms`)),
      );
  }
}
```

### 2. The Transform Interceptor
Sometimes you want to wrap all your JSON responses in a standard `{ data: ... }` format.

```typescript
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(
      // map() mutates the response before it is sent to the client
      map(data => ({ data })) 
    );
  }
}
```
If your controller returns `[{ name: 'Alice' }]`, the client will receive:
```json
{
  "data": [{ "name": "Alice" }]
}
```

### Applying Interceptors
Just like Guards and Pipes, use decorators:
```typescript
@UseInterceptors(LoggingInterceptor)
@Get()
findAll() {
  return [];
}
```

## ⚠️ Common Mistakes
1. **RxJS Confusion:** Developers coming from Promise-based Express struggle with `Observable`. You must use `.pipe()` and operators like `map()` or `tap()` to interact with the response.
2. **Forgetting to return `next.handle()`:** If you don't return `next.handle()`, the request stops at the interceptor and the client receives nothing (the request hangs).

## 🏋️ Exercises
1. Write a `TimeoutInterceptor` using the RxJS `timeout()` operator that throws a `RequestTimeoutException` if the route handler takes longer than 5 seconds.
2. Write an `ExcludeNullInterceptor` that recursively removes all properties with `null` values from the response object.

## ✅ Summary Checklist
- [ ] I understand how interceptors wrap the request/response lifecycle.
- [ ] I know how to use `tap()` to observe data.
- [ ] I know how to use `map()` to transform responses.
