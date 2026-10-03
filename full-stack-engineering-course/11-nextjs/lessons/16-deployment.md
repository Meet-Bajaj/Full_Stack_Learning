# 16 - Deployment

## Learning Objectives
- Deploy a Next.js app to Vercel.
- Understand self-hosted and Docker deployments.
- Manage environment variables.

## Deploying to Vercel
Vercel is the creator of Next.js and provides the most optimized hosting environment (zero-config, edge functions, image optimization).
1. Push your code to GitHub.
2. Go to Vercel dashboard and import the repository.
3. Vercel automatically detects Next.js and builds the app.

## Self-Hosting with Node.js
If you cannot use Vercel, you can run a Next.js app on any server that supports Node.js.
1. Run `npm run build`
2. Run `npm run start`

## Docker Deployment
For containerized environments (Kubernetes, AWS ECS):
Next.js supports `output: 'standalone'` in `next.config.js`. This copies only the necessary files for production into a single folder, drastically reducing Docker image size.

```javascript
// next.config.js
module.exports = {
  output: 'standalone',
}
```

*Dockerfile Example Snippet:*
```dockerfile
FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

## Environment Variables
- `NEXT_PUBLIC_VAR_NAME`: Accessible in the browser (Client Components).
- `SECRET_API_KEY`: Accessible ONLY on the server (Server Components, API routes).

## Completion Checklist
- [ ] Deploy a project to Vercel.
- [ ] Enable `output: 'standalone'` and build the project.
- [ ] Correctly separate public and secret environment variables.
