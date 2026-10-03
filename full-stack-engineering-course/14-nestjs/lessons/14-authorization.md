# Lesson 14: Authorization (RBAC)

## 🎯 Learning Objectives
- Implement Role-Based Access Control (RBAC).
- Create custom decorators to attach metadata.
- Integrate a custom Guard with JWT Authentication.

## 🧠 Mental Model: The VIP Areas
Authentication got you inside the club (JwtStrategy). 
Authorization determines which rooms you can enter. 
- General Admission can be on the dance floor.
- VIPs can enter the lounge.
- Admins can enter the manager's office.
The `RolesGuard` stands at the door of the VIP lounge, reads the required role on the door (Metadata), and checks the role written on your club wristband (req.user.role).

## 📖 Concept Explanation

### 1. Creating the `@Roles()` Decorator
NestJS provides a helper to attach metadata to route handlers.

```typescript
import { SetMetadata } from '@nestjs/common';

export enum Role {
  User = 'user',
  Admin = 'admin',
}

export const ROLES_KEY = 'roles';
// This decorator attaches an array of roles to the route handler
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
```

### 2. Creating the Roles Guard
The Guard uses the `Reflector` class to read the metadata we just set, and compares it to the user object.

```typescript
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY, Role } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    
    // If no roles are required, let them through
    if (!requiredRoles) {
      return true;
    }
    
    const { user } = context.switchToHttp().getRequest();
    
    // Check if the user has the required role
    return requiredRoles.some((role) => user.role === role);
  }
}
```

### 3. Applying the Guard
Always apply the JWT AuthGuard *before* the RolesGuard, because the RolesGuard relies on `req.user` existing!

```typescript
@Controller('admin')
@UseGuards(AuthGuard('jwt'), RolesGuard) // Order matters!
export class AdminController {
  
  @Get('dashboard')
  @Roles(Role.Admin) // Only admins
  getDashboard() {
    return 'Welcome, Admin';
  }
}
```

## ⚠️ Common Mistakes
1. **Wrong Guard Order:** If you put `RolesGuard` before `AuthGuard('jwt')`, `req.user` will be undefined, and the RolesGuard will crash.
2. **Missing Reflector:** `Reflector` must be injected into the constructor of your Guard. If you don't use it, you can't read the custom metadata attached to the controller methods.

## 🏋️ Exercises
1. Expand RBAC into PBAC (Permission-Based Access Control). Instead of `@Roles('admin')`, create a `@Permissions('posts:delete')` decorator and corresponding Guard.
2. Look into the `@casl/ability` library for implementing advanced attribute-based authorization (e.g., "User can update a Post ONLY IF they are the author").

## ✅ Summary Checklist
- [ ] I understand how to create custom decorators using `SetMetadata`.
- [ ] I know how to use `Reflector` inside a Guard.
- [ ] I know that AuthGuard must execute before RolesGuard.
