# Lesson 4: Migrations

## Prisma Migrate
- `prisma migrate dev`: Creates a new migration and applies it to your development database.
- `prisma migrate deploy`: Applies pending migrations in production or CI/CD environments.
- `prisma migrate reset`: Resets your database and reapplies all migrations (useful for local dev).

## Migration Files
Migrations are pure SQL files generated from your schema changes. They are stored in `prisma/migrations/`.
