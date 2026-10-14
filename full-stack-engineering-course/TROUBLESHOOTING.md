# 🔧 Troubleshooting Guide

Common problems encountered during full-stack development and how to fix them.

---

## Table of Contents

1. [Node.js & npm](#nodejs--npm)
2. [TypeScript](#typescript)
3. [React & Next.js](#react--nextjs)
4. [Express & NestJS](#express--nestjs)
5. [PostgreSQL](#postgresql)
6. [Prisma](#prisma)
7. [Redis](#redis)
8. [MongoDB](#mongodb)
9. [MinIO](#minio)
10. [Docker](#docker)
11. [Git](#git)
12. [Nginx](#nginx)
13. [CI/CD](#cicd)
14. [General Development](#general-development)

---

## Node.js & npm

### Problem: `npm install` fails with permission errors
**Possible Cause**: Global packages installed with sudo/admin  
**Diagnosis**: Check if error mentions EACCES or permission denied  
**Solution**: Use nvm to manage Node.js versions, avoid global installs with sudo  
**Prevention**: Always use nvm, use `npx` instead of global installs

### Problem: `ENOSPC: System limit for number of file watchers reached`
**Possible Cause**: Too many files being watched by dev server  
**Diagnosis**: Check inotify watches limit  
**Solution**: Increase limit: `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`  
**Prevention**: Use .gitignore patterns, exclude node_modules from watchers

### Problem: `MODULE_NOT_FOUND` error
**Possible Cause**: Missing dependency, wrong import path, or corrupted node_modules  
**Diagnosis**: Check if package exists in package.json, verify import path  
**Solution**: Delete node_modules and package-lock.json, run `npm install`  
**Prevention**: Use TypeScript for import checking, keep dependencies updated

### Problem: Port already in use (EADDRINUSE)
**Possible Cause**: Another process using the same port  
**Diagnosis**: `lsof -i :3000` (Mac/Linux) or `netstat -ano | findstr :3000` (Windows)  
**Solution**: Kill the existing process or use a different port  
**Prevention**: Use environment variables for port configuration

### Problem: `ERR_REQUIRE_ESM` or `ERR_MODULE_NOT_FOUND`
**Possible Cause**: Mixing CommonJS and ES Modules  
**Diagnosis**: Check package.json "type" field and file extensions  
**Solution**: Use consistent module system, set "type": "module" or use .mjs/.cjs extensions  
**Prevention**: Pick one module system for the project, configure tsconfig properly

---

## TypeScript

### Problem: Type errors with third-party libraries
**Possible Cause**: Missing @types package or outdated types  
**Diagnosis**: Check if `@types/library-name` exists on npm  
**Solution**: Install `@types/library-name` or create a declaration file (.d.ts)  
**Prevention**: Use TypeScript-first libraries when possible

### Problem: `Cannot find module` in TypeScript
**Possible Cause**: Missing path configuration in tsconfig.json  
**Diagnosis**: Check tsconfig paths, moduleResolution, and baseUrl  
**Solution**: Configure paths in tsconfig.json, ensure moduleResolution is correct  
**Prevention**: Use consistent path aliases, document tsconfig configuration

### Problem: Type `any` spreading through codebase
**Possible Cause**: Not using strict mode, external data without validation  
**Diagnosis**: Enable `noImplicitAny` in tsconfig  
**Solution**: Use Zod for runtime validation, type external data at boundaries  
**Prevention**: Enable strict mode from the start

---

## React & Next.js

### Problem: Infinite re-render loop
**Possible Cause**: useEffect with missing or incorrect dependency array, state update in render  
**Diagnosis**: Check browser console for "Maximum update depth exceeded"  
**Solution**: Fix dependency array, move state updates into event handlers or effects  
**Prevention**: Use ESLint exhaustive-deps rule, understand when effects run

### Problem: Hydration mismatch in Next.js
**Possible Cause**: Server and client rendering different HTML  
**Diagnosis**: Check console for "Text content did not match" or "Hydration failed"  
**Solution**: Ensure server and client render the same content, use `useEffect` for client-only content  
**Prevention**: Avoid using `Date.now()`, `Math.random()`, or browser APIs during SSR

### Problem: `'use client'` confusion in Next.js App Router
**Possible Cause**: Using hooks or interactivity in server components  
**Diagnosis**: Error "You're importing a component that needs useState" or similar  
**Solution**: Add `'use client'` directive at the top of components that use hooks or browser APIs  
**Prevention**: Understand the server/client component boundary, keep client components small

### Problem: Stale closures in React hooks
**Possible Cause**: Capturing stale state in event handlers or effects  
**Diagnosis**: State appears to not update, old values used  
**Solution**: Use functional state updates `setState(prev => prev + 1)`, fix dependency arrays  
**Prevention**: Understand closures, use useRef for mutable values

### Problem: TanStack Query not refetching
**Possible Cause**: Query key not changing, stale time too long, wrong invalidation  
**Diagnosis**: Check React Query DevTools for query state  
**Solution**: Ensure query keys include all dependencies, use `queryClient.invalidateQueries`  
**Prevention**: Design query keys carefully, use query key factories

---

## Express & NestJS

### Problem: Request body is undefined
**Possible Cause**: Missing body parser middleware  
**Diagnosis**: Check if `express.json()` or `express.urlencoded()` middleware is applied  
**Solution**: Add `app.use(express.json())` before routes  
**Prevention**: Include body parsing middleware in application setup template

### Problem: CORS errors
**Possible Cause**: Missing CORS headers, wrong origin configuration  
**Diagnosis**: Check browser console for "Access-Control-Allow-Origin" errors  
**Solution**: Install and configure `cors` middleware with correct origin  
**Prevention**: Configure CORS early, use environment-specific origins

### Problem: Async errors not caught in Express
**Possible Cause**: Unhandled promise rejections in route handlers  
**Diagnosis**: App crashes with unhandled rejection  
**Solution**: Use `express-async-errors` or wrap async handlers: `asyncHandler(async (req, res) => {...})`  
**Prevention**: Always use async error handling wrapper

### Problem: NestJS circular dependency
**Possible Cause**: Two modules/providers depending on each other  
**Diagnosis**: Error "Nest cannot create the module instance" with circular dependency mention  
**Solution**: Use `forwardRef(() => Module)` for circular module dependencies  
**Prevention**: Design module boundaries carefully, use events for cross-module communication

---

## PostgreSQL

### Problem: Connection refused
**Possible Cause**: PostgreSQL not running, wrong host/port, firewall  
**Diagnosis**: Check if PostgreSQL service is running, verify connection string  
**Solution**: Start PostgreSQL service, verify host, port, username, password  
**Prevention**: Use Docker for consistent database setup, health checks

### Problem: Slow queries
**Possible Cause**: Missing indexes, full table scans, N+1 queries  
**Diagnosis**: Use `EXPLAIN ANALYZE` to see query plan  
**Solution**: Add appropriate indexes, optimize queries, use JOINs instead of N+1  
**Prevention**: Monitor slow query log, review EXPLAIN plans for critical queries

### Problem: Too many connections
**Possible Cause**: Connection pool exhaustion, connection leaks  
**Diagnosis**: Check `pg_stat_activity`, count active connections  
**Solution**: Use connection pooling (PgBouncer), increase max_connections  
**Prevention**: Always use connection pooling in production, close connections properly

### Problem: Deadlocks
**Possible Cause**: Multiple transactions acquiring locks in different orders  
**Diagnosis**: Check PostgreSQL logs for deadlock messages  
**Solution**: Ensure consistent lock ordering, use shorter transactions  
**Prevention**: Access tables in consistent order, minimize transaction duration

---

## Prisma

### Problem: `PrismaClientKnownRequestError` with unique constraint
**Possible Cause**: Trying to create a record with a duplicate unique field  
**Diagnosis**: Error code P2002  
**Solution**: Use `upsert` instead of `create`, or check for existence first  
**Prevention**: Handle P2002 errors explicitly in your error handler

### Problem: Migration drift
**Possible Cause**: Manual database changes not reflected in Prisma schema  
**Diagnosis**: `prisma migrate dev` fails with drift  
**Solution**: Reset database or create a baseline migration  
**Prevention**: Always use Prisma migrations, never modify the database manually

### Problem: N+1 queries with Prisma
**Possible Cause**: Loading relations in a loop without `include`  
**Diagnosis**: Observe many similar queries in logs  
**Solution**: Use `include` for eager loading or `select` for specific fields  
**Prevention**: Enable Prisma query logging, review query patterns

---

## Redis

### Problem: Connection to Redis refused
**Possible Cause**: Redis not running, wrong host/port  
**Diagnosis**: `redis-cli ping` returns error  
**Solution**: Start Redis service, verify connection configuration  
**Prevention**: Use Docker for Redis, implement health checks

### Problem: Redis running out of memory
**Possible Cause**: No maxmemory set, no eviction policy, too much data  
**Diagnosis**: Check `redis-cli info memory`  
**Solution**: Set maxmemory and maxmemory-policy in redis.conf  
**Prevention**: Use TTL on keys, monitor memory usage, set eviction policy

---

## Docker

### Problem: Container exits immediately
**Possible Cause**: Process crashes on startup, missing CMD/ENTRYPOINT  
**Diagnosis**: `docker logs <container-id>`  
**Solution**: Fix the startup command, check for missing environment variables  
**Prevention**: Use health checks, test locally before deploying

### Problem: Docker build cache not working
**Possible Cause**: Changed files invalidate cache, wrong COPY order  
**Diagnosis**: Build output shows "cache miss" for expected cached layers  
**Solution**: Order Dockerfile instructions from least to most frequently changing (COPY package*.json before COPY .)  
**Prevention**: Follow Dockerfile best practices for layer caching

### Problem: Volume permissions issues
**Possible Cause**: Container user doesn't match host user  
**Diagnosis**: Permission denied errors in container logs  
**Solution**: Set correct ownership in Dockerfile, use USER directive  
**Prevention**: Use named volumes, set up correct user permissions

### Problem: Container can't connect to other containers
**Possible Cause**: Not on the same Docker network  
**Diagnosis**: `docker network inspect <network>`  
**Solution**: Put containers on the same Docker network, use service names as hostnames  
**Prevention**: Use Docker Compose which creates a shared network automatically

---

## Git

### Problem: Merge conflicts
**Possible Cause**: Multiple developers modifying the same files  
**Diagnosis**: Git reports conflicting changes  
**Solution**: Open conflicted files, resolve conflicts manually, commit  
**Prevention**: Pull frequently, communicate with team, use smaller PRs

### Problem: Accidentally committed secrets
**Possible Cause**: API keys or passwords in committed files  
**Diagnosis**: Sensitive data visible in git log  
**Solution**: Rotate compromised credentials, use `git filter-branch` or BFG Repo-Cleaner  
**Prevention**: Use .gitignore, use .env files, use pre-commit hooks to scan for secrets

### Problem: Detached HEAD state
**Possible Cause**: Checking out a specific commit or tag  
**Diagnosis**: `git status` shows "HEAD detached"  
**Solution**: `git checkout main` to return to a branch, or create a new branch from current state  
**Prevention**: Understand what checking out commits does

---

## Nginx

### Problem: 502 Bad Gateway
**Possible Cause**: Backend application not running, wrong upstream address  
**Diagnosis**: Check Nginx error logs, verify backend is accessible  
**Solution**: Start backend application, verify proxy_pass URL  
**Prevention**: Use health checks, monitor backend availability

### Problem: SSL certificate errors
**Possible Cause**: Expired certificate, wrong certificate path, missing intermediate certificate  
**Diagnosis**: Check certificate expiry with `openssl s_client -connect domain:443`  
**Solution**: Renew certificate, verify paths in nginx.conf  
**Prevention**: Set up auto-renewal with Certbot, monitor certificate expiry

---

## CI/CD

### Problem: GitHub Actions workflow fails on `npm ci`
**Possible Cause**: Mismatch between package.json and package-lock.json  
**Diagnosis**: Error in CI logs about lockfile  
**Solution**: Run `npm install` locally and commit updated package-lock.json  
**Prevention**: Always commit package-lock.json, use `npm ci` in CI

### Problem: Docker build fails in CI but works locally
**Possible Cause**: Missing build context, different Docker version, caching issues  
**Diagnosis**: Compare local and CI Docker versions, check build context  
**Solution**: Ensure Dockerfile doesn't rely on local-only files, use consistent Docker versions  
**Prevention**: Use multi-stage builds, pin Docker version in CI

---

## General Development

### Problem: Application works in development but not production
**Possible Cause**: Different environment variables, missing build step, CORS misconfiguration  
**Diagnosis**: Check production logs, compare environment configurations  
**Solution**: Verify all environment variables, ensure build process completes, check CORS  
**Prevention**: Use environment-specific configuration, test in staging before production

### Problem: Memory leaks in Node.js
**Possible Cause**: Unclosed event listeners, growing arrays/maps, circular references  
**Diagnosis**: Monitor memory with `process.memoryUsage()`, use Chrome DevTools  
**Solution**: Remove event listeners, limit collection sizes, use WeakMap/WeakRef  
**Prevention**: Profile memory periodically, use monitoring in production

---

*For technology-specific troubleshooting, see each module's troubleshooting section.*
