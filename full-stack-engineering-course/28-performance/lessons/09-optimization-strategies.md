# Lesson 9: Optimization Strategies

## Learning Objectives
- Avoid premature optimization.
- Apply the 80/20 rule to performance.
- Establish performance baselines.

## Premature Optimization
"Premature optimization is the root of all evil." - Donald Knuth.
Don't optimize your code before you have measured it and proven it is a bottleneck. Optimization often makes code harder to read and maintain.

## The Strategy
1. **Measure**: Set a baseline using Lighthouse or load tests.
2. **Identify**: Find the actual bottleneck (is it DB, Network, or CPU?).
3. **Optimize**: Apply the fix.
4. **Verify**: Measure again to ensure the fix actually improved performance.
