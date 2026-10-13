# Lesson 8: Health Checks

## Learning Objectives
- Differentiate between Liveness and Readiness probes.
- Implement comprehensive health check endpoints.
- Integrate with orchestrators like Kubernetes.

## Why it Exists
A load balancer needs to know if your server is ready to accept traffic. If the server is up but the database is down, routing traffic to it will result in 500 errors.

## Mental Model
- **Liveness**: "Am I breathing?" (If no, restart me).
- **Readiness**: "Am I ready to answer questions?" (If no, don't give me any work right now, I'm waiting for the DB to connect).

## Implementation with NestJS Terminus
```typescript
import { Controller, Get } from '@nestjs/common';
import { HealthCheckService, HttpHealthIndicator, PrismaHealthIndicator, HealthCheck } from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private db: PrismaHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
      () => this.db.pingCheck('database', this.prisma),
    ]);
  }
}
```

## Checklist
- [ ] Implement a `/health/live` endpoint returning 200 OK
- [ ] Implement a `/health/ready` endpoint checking DB and Redis connections
