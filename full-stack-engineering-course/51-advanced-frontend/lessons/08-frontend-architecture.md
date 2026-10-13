# Lesson 8: Frontend Architecture

## Learning Objectives
- Organize codebase using feature-based architecture.
- Understand Component Composition.
- Grasp Monorepo concepts.

## Why it Exists
Organizing by type (`components/`, `hooks/`, `api/`) becomes unmaintainable in large apps. A Feature-Based Architecture (`features/auth/`, `features/checkout/`) scales infinitely by keeping related code co-located.

## Feature-Based Structure
```text
src/
  features/
    auth/
      components/      # LoginForm, SignupForm
      hooks/           # useAuth
      api/             # login(), logout()
      types/           # User type
      index.ts         # Public API
    products/
  shared/
    components/        # Button, Input (Design System)
    utils/
```

## Component Composition
Instead of passing 20 props to a component (Prop Drilling), pass React nodes as `children`.

```tsx
// Bad: Huge prop list
<Modal title="Login" isOpen={true} onClose={close} submitText="Go" onSubmit={submit} />

// Good: Composition
<Modal isOpen={true} onClose={close}>
  <Modal.Header>Login</Modal.Header>
  <Modal.Body>
    <LoginForm />
  </Modal.Body>
  <Modal.Footer>
    <Button onClick={submit}>Go</Button>
  </Modal.Footer>
</Modal>
```

## Checklist
- [ ] Enforce strict boundaries (Features cannot import internal files of other Features)
- [ ] Refactor a heavy component using Composition
- [ ] Separate Shared Design System from Feature Components
