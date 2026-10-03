# Lesson 17: Swagger API Documentation

## 🎯 Learning Objectives
- Setup `@nestjs/swagger` to auto-generate API documentation.
- Decorate controllers and DTOs to provide rich schema details.
- Access the Swagger UI interface.

## 🧠 Mental Model: The Restaurant Menu
An API without documentation is like a restaurant without a menu. Customers (Frontend developers) have to guess what food to order and what ingredients are in it. 
**Swagger** is the beautifully printed menu with pictures, ingredients, and prices. In NestJS, because we use TypeScript and Decorators, Nest generates this menu *automatically* based on our code!

## 📖 Concept Explanation

### 1. Setup in `main.ts`
```bash
npm install @nestjs/swagger swagger-ui-express
```

```typescript
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Cats API')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addBearerAuth() // Adds JWT support to Swagger UI
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
}
```
Now, navigating to `http://localhost:3000/api/docs` opens the interactive Swagger UI!

### 2. Decorating Controllers
Nest infers the routes, but you can add descriptive metadata.

```typescript
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('cats') // Groups these endpoints in the UI
@Controller('cats')
export class CatsController {
  
  @Post()
  @ApiOperation({ summary: 'Create a new cat' })
  @ApiResponse({ status: 201, description: 'Cat successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create() {}
}
```

### 3. Decorating DTOs
To show the exact JSON body shape in the UI, decorate your DTO properties.

```typescript
import { ApiProperty } from '@nestjs/swagger';

export class CreateCatDto {
  @ApiProperty({ example: 'Whiskers', description: 'The name of the cat' })
  name: string;

  @ApiProperty({ example: 4, description: 'The age of the cat' })
  age: number;
}
```

## ⚠️ Common Mistakes
1. **Redundant Decorators:** NestJS Swagger CLI Plugin can actually read your TypeScript types and automatically apply `@ApiProperty` to everything, so you don't have to write it manually! Look into the `@nestjs/swagger` CLI plugin configuration in `nest-cli.json`.
2. **Forgetting `addBearerAuth`:** If your API is protected by JWTs, frontend developers won't be able to test endpoints in the Swagger UI unless you enable Bearer Auth.

## 🏋️ Exercises
1. Enable the Swagger CLI plugin in `nest-cli.json` to auto-document all DTO properties without using decorators.
2. Add `@ApiQuery` to a GET endpoint to document optional pagination parameters (`page`, `limit`).

## ✅ Summary Checklist
- [ ] I can configure `SwaggerModule` in `main.ts`.
- [ ] I know how to use `@ApiTags` and `@ApiOperation`.
- [ ] I know how to document DTOs with `@ApiProperty`.
