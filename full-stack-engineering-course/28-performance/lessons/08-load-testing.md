# Lesson 8: Load Testing

## Learning Objectives
- Differentiate Load, Stress, and Spike testing.
- Write load tests using k6 or Artillery.

## Types of Tests
- **Load Testing**: Assess behavior under expected peak load.
- **Stress Testing**: Push the system beyond its limits to see how it fails (does it gracefully degrade or crash?).
- **Spike Testing**: Sudden, massive increases in traffic.

## k6 Example
```javascript
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 50, // Virtual Users
  duration: '30s',
};

export default function () {
  http.get('http://localhost:3000/api/users');
  sleep(1);
}
```
