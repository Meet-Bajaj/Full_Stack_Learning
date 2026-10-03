# Lesson 11: Configuration Management

## 🎯 Learning Objectives
- Use `@nestjs/config` for environment variable management.
- Validate configuration using Joi or class-validator.
- Inject `ConfigService` across the application.

## 🧠 Mental Model: The Rulebook
A `.env` file is a set of sticky notes scattered on your desk containing passwords and URLs.
The **ConfigModule** is a massive binder (Rulebook) that collects all those sticky notes, checks to make sure none are missing (Validation), organizes them neatly, and makes them available to any worker (Service) who requests them safely.

## 📖 Concept Explanation

### Setup
First, install the package: `npm i @nestjs/config`

```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigService available everywhere without importing ConfigModule
      envFilePath: '.env',
    }),
  ],
})
export class AppModule {}
```

### Using ConfigService
Never use `process.env.DB_PASSWORD` deep inside your services. It's untestable and unsafe. Inject the `ConfigService` instead.

```typescript
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseService {
  constructor(private configService: ConfigService) {}

  connect() {
    // Safely retrieve variables
    const dbUser = this.configService.get<string>('DB_USER');
    const port = this.configService.get<number>('PORT', 3000); // 3000 is default
    
    console.log(`Connecting as ${dbUser} on port ${port}`);
  }
}
```

### Validating Configuration
If your app boots up but `JWT_SECRET` is missing in the `.env` file, everything will crash randomly later. It's better to crash *immediately* on startup.

Using `Joi`:
```typescript
import * as Joi from 'joi';

ConfigModule.forRoot({
  validationSchema: Joi.object({
    NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
    PORT: Joi.number().default(3000),
    DATABASE_URL: Joi.string().required(), // App will CRASH ON STARTUP if this is missing!
    JWT_SECRET: Joi.string().required(),
  }),
})
```

## ⚠️ Common Mistakes
1. **Not setting `isGlobal: true`:** If you forget this, you will have to add `imports: [ConfigModule]` inside every single feature module that needs to access environment variables.
2. **Accessing `process.env` directly in feature modules:** Always use `ConfigService`. This makes mocking environment variables in unit tests incredibly easy (you just mock the `ConfigService.get` method).

## 🏋️ Exercises
1. Setup a `.env` file with `API_KEY=supersecret`.
2. Configure `ConfigModule` to validate that `API_KEY` exists and is a string of at least 8 characters.
3. Inject `ConfigService` into a Controller and return the key.

## ✅ Summary Checklist
- [ ] I can set up `ConfigModule` globally.
- [ ] I can inject and use `ConfigService`.
- [ ] I understand why validating environment variables on startup is crucial for production.
