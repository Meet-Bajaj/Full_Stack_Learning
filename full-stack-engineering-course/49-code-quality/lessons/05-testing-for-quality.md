# Lesson 5: Testing for Quality

## 🎯 Learning Objectives
- Understand Test Coverage metrics (and their pitfalls).
- Grasp Mutation Testing concepts.
- Implement Test-Driven Development (TDD) basics.
- Configure Quality Gates in CI/CD.

## 🧠 Mental Model & Real-World Analogy
**Analogy:** A safety harness for a rock climber. It takes a little extra time to put on and secure, but once it's there, you can climb much faster and take bigger risks (refactoring) knowing you won't fall to your death.

**Mental Model:** Automated tests are living documentation that constantly verifies the system's behavior against regressions.

## ❓ WHY does it exist?
Manual QA testing is slow, expensive, and error-prone. Automated testing ensures that new features do not break existing functionality, allowing for rapid, continuous deployment.

## 🏗️ Core Concepts

### 1. Test Coverage
Measures how much of your code is executed during tests (Line, Statement, Branch, Function coverage).
- **Good:** A goal of 70-80% coverage on core logic.
- **Bad:** Enforcing 100% coverage, leading developers to write useless tests just to hit the metric (e.g., testing simple getters/setters).

### 2. Mutation Testing (Stryker)
Coverage tells you if a line was *executed*, not if it was *tested*. Mutation testing modifies your source code slightly (e.g., changing `+` to `-`, or `<` to `<=`) and runs the tests. If the tests still pass, your tests are weak (a "mutant survived"). If they fail, your tests are strong (a "mutant was killed").

### 3. Quality Gates (CI/CD)
A CI (Continuous Integration) pipeline (like GitHub Actions) runs on every Pull Request. A Quality Gate blocks the PR from being merged if:
1. Tests fail.
2. Coverage drops below X%.
3. Linter fails.

```yaml
# Example GitHub Action snippet
steps:
  - run: npm ci
  - run: npm run lint
  - run: npm run test:coverage
```

## ⚠️ Common Mistakes
- **Testing Implementation, not Behavior:** Writing a test that fails if you rename an internal private variable, even though the public output is correct.
- **Flaky Tests:** Tests that pass 90% of the time and fail 10% of the time due to network calls or date/time issues. These destroy trust in the test suite.

## 🚀 Exercises
1. Setup Jest coverage reporting and enforce a 70% threshold.
2. Identify a "surviving mutant" in a test suite and fix the test to kill it.

## ✅ Summary and Checklist
- [ ] Understand the limits of Test Coverage.
- [ ] Grasp Mutation Testing concepts.
- [ ] Enforce Quality Gates in CI pipelines.
