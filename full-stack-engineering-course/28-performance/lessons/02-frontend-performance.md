# Lesson 2: Frontend Performance

## Learning Objectives
- Reduce bundle sizes using Code Splitting.
- Implement Lazy Loading for images and components.
- Optimize Critical CSS.

## Code Splitting
Instead of shipping one massive `bundle.js`, split your code so the user only downloads what they need for the current route. In React, use `React.lazy()` and `Suspense`.

## Image Optimization
- Use modern formats like WebP or AVIF.
- Serve properly sized images based on the viewport (`srcset`).
- Native lazy loading: `<img loading="lazy" />`.

## Summary Checklist
- [ ] I can implement React.lazy().
- [ ] I know how to use the loading="lazy" attribute.
