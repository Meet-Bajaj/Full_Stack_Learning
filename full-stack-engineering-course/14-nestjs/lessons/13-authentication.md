# Lesson 13: Authentication

## 🎯 Learning Objectives
- Implement Authentication using `@nestjs/passport` and `@nestjs/jwt`.
- Understand the `LocalStrategy` (Username/Password) and `JwtStrategy` (Token verification).
- Create a custom `@CurrentUser()` decorator.

## 🧠 Mental Model: The Passport Control
When you travel internationally, you first go to a ticket counter, hand over your ID (Local Strategy: Username + Password), and they give you a Boarding Pass (JWT). 
When you go to the security gate (Guards), you don't show your ID anymore. You just scan the Boarding Pass (Jwt Strategy). NestJS uses the **Passport** library to handle these different "strategies" seamlessly.

## 📖 Concept Explanation

### 1. The Auth Module Setup
```typescript
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'super-secret-key', // Use ConfigService in production!
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
```

### 2. The Local Strategy (Login)
This strategy intercepts the login request, checks the database for the user, and validates the password.

```typescript
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super(); // by default expects 'username' and 'password' in req.body
  }

  async validate(username: string, passport: string): Promise<any> {
    const user = await this.authService.validateUser(username, passport);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user; // Returning user automatically attaches it to req.user!
  }
}
```

### 3. Generating the JWT
In your `AuthController`:
```typescript
@UseGuards(AuthGuard('local')) // Triggers LocalStrategy
@Post('auth/login')
async login(@Request() req) {
  // req.user was populated by LocalStrategy
  return this.authService.login(req.user);
}

// In AuthService:
async login(user: any) {
  const payload = { username: user.username, sub: user.id };
  return {
    access_token: this.jwtService.sign(payload),
  };
}
```

### 4. The JWT Strategy (Protecting Routes)
Checks if incoming requests have a valid Bearer token.
```typescript
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'super-secret-key',
    });
  }

  async validate(payload: any) {
    // Return what you want attached to req.user
    return { userId: payload.sub, username: payload.username };
  }
}
```

Protecting a route:
```typescript
@UseGuards(AuthGuard('jwt'))
@Get('profile')
getProfile(@Request() req) {
  return req.user;
}
```

## ⚠️ Common Mistakes
1. **Hardcoding secrets:** Never hardcode the JWT secret in `JwtModule.register()`. Use `JwtModule.registerAsync()` to inject the `ConfigService`.
2. **Returning passwords in JWT payloads:** The JWT is base64 encoded, not encrypted. Anyone can decode it. Never put passwords or sensitive PII in the payload.

## 🏋️ Exercises
1. Write a custom `@CurrentUser()` decorator so you can use `@CurrentUser() user: UserEntity` in your controller instead of `@Request() req`.
2. Implement Refresh Tokens: create an endpoint that accepts a refresh token and returns a new access token.

## ✅ Summary Checklist
- [ ] I can configure `JwtModule` and `PassportModule`.
- [ ] I understand the difference between `LocalStrategy` and `JwtStrategy`.
- [ ] I know how to protect routes using `AuthGuard('jwt')`.
