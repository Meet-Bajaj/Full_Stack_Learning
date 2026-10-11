# Lesson 3: Fault Tolerance

## Learning Objectives
- Identify common failure modes in distributed systems.
- Implement Retries with Exponential Backoff and Jitter.
- Understand and implement the Circuit Breaker pattern.
- Design systems for Graceful Degradation.

## Why Fault Tolerance?
Since the network is unreliable and dependencies fail, your system must be designed to withstand failures without collapsing entirely.

## Retries and Backoff
If Service A calls Service B and gets a timeout, the simplest solution is to try again.
However, if Service B is struggling under load, 10,000 instances of Service A immediately retrying will act as a DDoS attack and take Service B down completely (a "Retry Storm").

**Solution: Exponential Backoff with Jitter**
- Instead of retrying immediately, wait.
- **Exponential**: Wait 1s, then 2s, then 4s, then 8s. This gives the downstream service time to recover.
- **Jitter**: Add randomness. If all 10,000 instances wait exactly 1s and retry, they will hit B at the exact same time. If they wait `1s + random(0, 1000ms)`, the load is spread out.

## Circuit Breakers
Retries are useless if the downstream service is completely dead (e.g., database deleted). Waiting and retrying just consumes threads and slows down the upstream service.

A **Circuit Breaker** acts like an electrical circuit breaker:
1. **Closed**: Normal operation. Requests flow through.
2. **Open**: If the error rate exceeds a threshold (e.g., 50% failures in 10s), the circuit "trips" open. All subsequent requests fail immediately without even attempting to call the broken downstream service. This prevents resource exhaustion.
3. **Half-Open**: After a timeout, the circuit allows a single test request through. If it succeeds, the circuit closes. If it fails, it opens again.

## Graceful Degradation
If a non-critical dependency fails, the system should still provide core functionality, just with a degraded experience.
- **Example**: If the `RecommendationService` is down on an e-commerce site, don't show a 500 Error page. Show the homepage with a hardcoded list of "Best Sellers" instead of personalized recommendations.

## Summary
Fault tolerance is about anticipating failure and implementing defensive patterns (Retries, Circuit Breakers, Fallbacks) to prevent localized failures from cascading into system-wide outages.

## Completion Checklist
- [ ] I can explain why Jitter is necessary for retries.
- [ ] I understand the three states of a Circuit Breaker.
- [ ] I can give an example of graceful degradation.
