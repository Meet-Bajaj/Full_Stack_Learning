# 12 - Styling

## Learning Objectives
- Master Tailwind CSS in Next.js.
- Understand CSS Modules for scoped styling.
- Compare different styling approaches.

## Tailwind CSS
Tailwind is a utility-first CSS framework and the default recommendation for Next.js. It integrates perfectly with Server Components since it requires zero client-side JavaScript.

```tsx
export default function Button() {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Click Me
    </button>
  );
}
```

## CSS Modules
If you prefer traditional CSS but want scoped classes to avoid collisions, use CSS Modules. Any file ending in `.module.css` is treated as a CSS Module.

```css
/* button.module.css */
.error {
  color: white;
  background-color: red;
}
```

```tsx
import styles from './button.module.css';

export default function ErrorButton() {
  return <button className={styles.error}>Delete</button>;
}
```

## CSS-in-JS (Styled Components / Emotion)
*Warning:* Traditional CSS-in-JS libraries that require runtime JavaScript (like styled-components) **do not** work with Server Components natively out of the box. You must use `'use client'` on components that use them, or rely on zero-runtime solutions like Panda CSS.

## Completion Checklist
- [ ] Build a responsive layout using Tailwind CSS.
- [ ] Create a component using CSS Modules.
- [ ] Understand why runtime CSS-in-JS is problematic for RSCs.
