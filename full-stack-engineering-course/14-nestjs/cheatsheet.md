# NestJS Cheat Sheet

## CLI Commands
```bash
nest new <project-name>     # Create new project
nest g module users         # Generate module
nest g controller users     # Generate controller
nest g service users        # Generate service
nest g resource products    # Generate full CRUD resource (Module, Controller, Service, DTOs)
```

## Route & Parameter Decorators
```typescript
@Controller('users')
export class UsersController {
  @Get()                     // GET /users
  @Post()                    // POST /users
  @Patch(':id')              // PATCH /users/1
  @Delete(':id')             // DELETE /users/1
  
  // Extracting data
  create(@Body() dto: CreateUserDto) {}
  findOne(@Param('id') id: string) {}
  findAll(@Query('limit') limit: number) {}
  getHeaders(@Headers('authorization') auth: string) {}
}
```

## Modules & Dependency Injection
```typescript
@Global() // Optional: Makes module available everywhere
@Module({
  imports: [OtherModule], // Modules required by this module
  controllers: [UsersController],
  providers: [UsersService], // Services instantiated here
  exports: [UsersService], // Services shared with other modules
})
export class UsersModule {}
```

## Validation (class-validator)
```typescript
import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;
  
  @IsOptional()
  @IsString()
  readonly nickname?: string;
}
```

## Applying Enhancers
```typescript
// Method Level
@UseGuards(AuthGuard)
@UseInterceptors(LoggingInterceptor)
@UsePipes(new ValidationPipe())
@UseFilters(new HttpExceptionFilter())
@Get()
```

## Exception Throwing
```typescript
throw new BadRequestException('Invalid data');
throw new NotFoundException('User not found');
throw new UnauthorizedException('Please login');
```
