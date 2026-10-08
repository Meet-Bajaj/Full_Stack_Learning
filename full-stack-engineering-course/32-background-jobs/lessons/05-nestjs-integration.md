# Lesson 5: NestJS Integration

## 1. Learning Objectives
- Integrate `@nestjs/bullmq`.
- Use decorators to structure background processing.

## 2. NestJS Setup
NestJS provides a wrapper around BullMQ that makes dependency injection seamless.

```typescript
import { Processor, WorkerHost } from '@nestjs/bullmq';

@Processor('audio-processing')
export class AudioProcessor extends WorkerHost {
  async process(job: Job<any, any, string>): Promise<any> {
    console.log(`Processing job ${job.id}`);
    // You can inject standard NestJS services here!
  }
}
```

## 3. Summary and Checklist
- [ ] Register BullModule in a NestJS application.
- [ ] Build a `@Processor` class.
