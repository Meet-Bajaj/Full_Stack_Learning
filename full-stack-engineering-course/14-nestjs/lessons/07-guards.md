# Lesson 07: Guards (Authorization)

## 🎯 Learning Objectives
- Understand the specific role of Guards in the request lifecycle.
- Differentiate Guards from Middleware.
- Implement the `CanActivate` interface.
- Understand execution context and how to build Role-Based Access Control (RBAC).

## 🧠 Mental Model: The Bouncer with a Clipboard
If a Pipe is a water filter, a **Guard** is the VIP club Bouncer. 
Unlike a generic security camera (Middleware), the Bouncer has a specific clipboard containing the rules for *this specific room* (Route). 
The bouncer checks the ID (request), looks at the clipboard (metadata), and explicitly says YES (returns `true`) or NO (returns `false`). If the bouncer says NO, the person gets a `403 Forbidden` error and cannot enter the controller.

## 📖 Concept Explanation

### Guards vs Middleware
In Express, authentication and authorization are handled by Middleware. 
In NestJS, Middleware is "dumb"—it doesn't know which route handler will be executed next. 
**Guards** are "smart". They have access to the `ExecutionContext`, meaning they know *exactly* which class and method will be executed next. This makes them perfect for authorization.

### Creating a Guard
A Guard is a class annotated with `@Injectable()` that implements the `CanActivate` interface.

```typescript
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    
    // Check if the user is attached to the request (usually done by Auth Middleware)
    return validateRequest(request); 
    // If true, request proceeds. If false, 403 Forbidden is thrown.
  }
}
```

### Applying Guards
You can apply guards at the method level, controller level, or globally.

```typescript
// Method Level
@Get()
@UseGuards(AuthGuard)
findAll() {
  return [];
}

// Controller Level (Applies to all routes in this controller)
@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {}
```

### Role-Based Access Control (RBAC) Example
NestJS provides a `@SetMetadata()` decorator to attach custom rules to a route.

```typescript
// 1. Create a custom decorator
import { SetMetadata } from '@nestjs/common';
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

// 2. Apply it to a route
@Post()
@Roles('admin') // Only admins can create!
create() {}

// 3. Create the RolesGuard
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {} // Reflector reads metadata

  canActivate(context: ExecutionContext): boolean {
    // Look for 'roles' metadata on the handler
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!requiredRoles) {
      return true; // No roles required, let them pass
    }
    
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    
    // Check if user has the required role
    return requiredRoles.includes(user.role);
  }
}
```

## ⚠️ Common Mistakes
1. **Doing Authentication in Guards:** While you *can* extract JWTs in a Guard, it's often better to do Authentication in Middleware (to attach `req.user`), and keep Guards strictly for Authorization (checking if `req.user` has permission).
2. **Execution Order Confusion:** The NestJS lifecycle runs: Middleware -> **Guards** -> Interceptors -> Pipes -> Controller. If your Pipe attaches data needed for Authorization, the Guard will fail because it runs *before* the Pipe!

## 🏋️ Exercises
1. Implement a `ApiKeyGuard` that checks for a specific `X-API-KEY` header and returns true only if it matches a secret key from your `.env` file.
2. Apply this guard globally in `main.ts` using `app.useGlobalGuards(new ApiKeyGuard())`.

## ✅ Summary Checklist
- [ ] I understand the difference between Guards and Middleware.
- [ ] I can implement the `CanActivate` interface.
- [ ] I know how to use `Reflector` to read custom metadata for RBAC.
