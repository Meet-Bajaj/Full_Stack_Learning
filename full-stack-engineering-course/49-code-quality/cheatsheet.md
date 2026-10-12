# Code Quality Cheatsheet

## Linting vs Formatting
- **Formatter (Prettier):** Cares about how code *looks* (spacing, quotes, line length).
- **Linter (ESLint):** Cares about how code *works* (unused variables, no-any, unreachable code).

## Code Reviews
- Focus on Architecture, Logic, and Security.
- Let automated tools handle formatting.
- Be empathetic and constructive in feedback.
- Use PR Templates to provide context.

## Documentation
- **README:** Start instructions, env variables, architecture overview.
- **API Docs:** Generate automatically via Swagger/OpenAPI.
- **ADRs (Architecture Decision Records):** Document major architectural shifts (Context, Decision, Consequences).

## Testing Metrics
- **Test Coverage:** Measures lines executed, NOT lines tested. Aim for 70-80%, don't chase 100%.
- **Mutation Testing:** Modifies source code to see if tests fail. Kills "surviving mutants" to prove test strength.
- **Quality Gates:** CI pipelines that block PRs if linting, tests, or coverage fail.
