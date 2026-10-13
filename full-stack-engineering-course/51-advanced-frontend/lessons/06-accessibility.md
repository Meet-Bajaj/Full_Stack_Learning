# Lesson 6: Accessibility (a11y)

## Learning Objectives
- Understand WCAG guidelines.
- Implement ARIA attributes correctly.
- Manage keyboard navigation and focus.

## Why it Exists
Web applications must be usable by everyone, including individuals relying on screen readers, keyboard navigation, and high-contrast displays. It is a legal requirement in many jurisdictions and expands your user base.

## Mental Model
Think of semantic HTML as standard road signs. If you use a `<div>` instead of a `<button>`, you're putting a blank piece of cardboard on a post instead of a stop sign. A screen reader (blind driver) won't know what it means unless you explicitly paint "Stop" on it (using ARIA attributes).

## Common Fixes
1. **Semantic HTML**: Always prefer `<nav>`, `<main>`, `<article>`, `<button>`, `<a>` over raw `<div>` and `<span>`.
2. **Keyboard Focus**: Ensure all interactive elements can be focused using `Tab`. Handle focus rings (`:focus-visible`).
3. **Screen Readers**: Use `aria-label` for icon buttons. Use `aria-live` for dynamic announcements (e.g., "Item added to cart").

```tsx
// Bad
<div onClick={submit} className="btn">Submit</div>

// Good
<button onClick={submit} aria-label="Submit the form">Submit</button>

// Announcing dynamic changes
<div aria-live="polite" className="sr-only">
  {notificationMessage}
</div>
```

## Checklist
- [ ] Test application using Keyboard only (Tab, Space, Enter)
- [ ] Run Lighthouse Accessibility audit
- [ ] Use semantic HTML tags
