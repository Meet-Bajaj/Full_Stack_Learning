# Lesson 21: React Best Practices

## Learning Objectives
- Organize a scalable file structure.
- Follow naming conventions.
- Manage component size and complexity.
- Ensure accessibility (a11y) and security.

## File Structure
A feature-based architecture is recommended for scalable apps.
```
src/
  features/
    auth/
      components/
      hooks/
      api/
      AuthContext.tsx
    products/
      components/
      api/
  components/  # Shared UI components (Button, Modal)
  hooks/       # Shared hooks (useLocalStorage)
  utils/       # Helper functions
```

## Naming Conventions
- **Components:** PascalCase (e.g., `UserProfile.tsx`).
- **Hooks:** camelCase prefixed with `use` (e.g., `useAuth.ts`).
- **Event Handlers:** Prefix with `handle` for the function (`handleSubmit`), and `on` for the prop (`onSubmit`).

## Component Size
- Follow the Single Responsibility Principle. If a component is doing too much (fetching data, formatting dates, handling complex UI logic), split it.
- Separate container components (fetching data/state logic) from presentational components (UI only) when logical.

## Accessibility (a11y)
- Use semantic HTML elements (`<nav>`, `<header>`, `<main>`, `<button>` instead of `<div onClick={...}>`).
- Ensure proper `alt` text for images and `aria-` attributes for complex custom UI elements.

## Security
- React inherently prevents Cross-Site Scripting (XSS) by escaping string values before rendering them.
- Avoid using `dangerouslySetInnerHTML` unless strictly necessary (and sanitize the input first using a library like DOMPurify).
