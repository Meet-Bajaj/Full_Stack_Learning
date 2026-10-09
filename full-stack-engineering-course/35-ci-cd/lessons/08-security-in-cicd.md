# Lesson 08: Security in CI/CD

## Learning Objectives
By the end of this lesson, you will be able to:
- Identify common security vulnerabilities in CI/CD pipelines.
- Implement automated Dependency Auditing.
- Integrate SAST (Static Application Security Testing).
- Understand the importance of signed commits and Least Privilege.

---

## 1. The CI/CD Attack Surface

A CI/CD pipeline has deep access to your source code, your secrets (database passwords, API keys), and your production servers. If an attacker compromises your CI server, they compromise everything.

### Common Risks:
- **Dependency Poisoning:** A malicious package is installed via `npm`.
- **Secret Leaks:** A developer accidentally `console.log`s an API key in the CI logs.
- **Malicious PRs:** An attacker submits an open-source PR that modifies the CI workflow to steal secrets.

---

## 2. Auditing Dependencies

The easiest way to get hacked is through a vulnerable third-party package. You should run an audit in your CI pipeline.

```yaml
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      
      # Fail the build if critical vulnerabilities are found
      - name: Audit Dependencies
        run: npm audit --audit-level=critical
```
GitHub also provides **Dependabot**, which automatically creates PRs to update vulnerable dependencies.

---

## 3. SAST (Static Application Security Testing)

SAST tools scan your source code for insecure coding patterns (e.g., SQL Injection vulnerabilities, hardcoded passwords, insecure crypto).

GitHub provides **CodeQL** natively.

```yaml
jobs:
  analyze:
    name: CodeQL Security Scan
    runs-on: ubuntu-latest
    permissions:
      security-events: write

    steps:
    - uses: actions/checkout@v4
    - uses: github/codeql-action/init@v2
      with:
        languages: javascript
    - uses: github/codeql-action/analyze@v2
```

---

## 4. Secret Management Best Practices

1. **Never print env vars:** Never run `env` or `printenv` in a CI script.
2. **Masking:** GitHub Actions automatically masks secrets in the logs (replaces them with `***`), but you must ensure they are actually registered as secrets.
3. **Principle of Least Privilege:** Your deployment SSH key should not have root access. It should only have access to restart the specific application service. Your database CI user should only have permission to create/drop the test database, not access production.

## Summary
- Treat your CI pipeline with the same security rigor as your production server.
- Fail the build on critical `npm audit` findings.
- Use CodeQL or similar SAST tools to catch vulnerabilities before they are merged.
