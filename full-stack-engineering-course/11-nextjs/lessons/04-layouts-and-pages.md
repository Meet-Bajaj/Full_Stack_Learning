# 04 - Layouts and Pages

## Learning Objectives
- Understand the role of the Root Layout.
- Create nested layouts.
- Differentiate between Layouts and Templates.
- Utilize the Metadata API for SEO.

## Concept: Layouts vs. Pages
A **page** is UI that is unique to a route. A **layout** is UI that is shared between multiple pages (e.g., navigation bar, sidebar, footer). On navigation, layouts preserve state, remain interactive, and do not re-render.

## Root Layout
The Root Layout (`app/layout.tsx`) is required. It must contain `<html>` and `<body>` tags.

```tsx
// app/layout.tsx
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'My Next.js App',
  description: 'A comprehensive full-stack app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
```

## Templates
Templates (`template.tsx`) are similar to layouts, but they create a new instance for each of their children on navigation. This means DOM elements are recreated, state is not preserved, and effects are re-synchronized. Use templates when you need enter/exit animations or want to reset state on navigation.

## Shared State Between Layouts
Because layouts don't re-render on page changes, they are great for maintaining context (e.g., shopping cart state) while a user browses different pages. However, passing data between a parent layout and its children directly via props isn't possible (except for `children`). Instead, use React Context or fetch the same data (Next.js automatically dedupes requests).

## Completion Checklist
- [ ] Build a root layout with global navigation.
- [ ] Build a nested layout for a specific route group.
- [ ] Define global metadata.
