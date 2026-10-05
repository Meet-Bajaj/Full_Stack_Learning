# Lesson 13: Production

## CI/CD
Always run `prisma migrate deploy` in your deployment pipeline. Never run `prisma migrate dev` in production.

## Seeding
Define a seed script in `package.json` (`prisma.seed`) and run `npx prisma db seed` to populate initial data.
