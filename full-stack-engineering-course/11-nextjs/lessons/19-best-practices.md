# 19 - Best Practices

## Learning Objectives
- Establish a scalable project structure.
- Review security best practices for SSR/Server Actions.
- Complete a production readiness checklist.

## Project Structure
Next.js is unopinionated about where you put files outside of routing.
A common and scalable structure using `src/`:

```text
src/
├── app/              # Routing, pages, layouts
├── components/       # Reusable UI components
├── lib/              # Utility functions, API clients
├── hooks/            # Custom React hooks
├── types/            # TypeScript definitions
└── db/               # Database schemas and connections
```

*Tip:* You can create private folders in the `app/` directory by prefixing the folder name with an underscore (e.g., `app/_components`). This excludes the folder from routing.

## Security Best Practices
- **Data Access:** Never blindly trust client input in a Server Action. Always re-validate input and re-check authorization.
- **Taint APIs:** Next.js provides `experimental_taintUniqueValue` to prevent passing sensitive data (like passwords) from Server Components to Client Components.
- **CSRF:** Server Actions have built-in CSRF protection.

## Production Checklist
- [ ] Ensure all API keys are correctly scoped (avoid `NEXT_PUBLIC_` for secrets).
- [ ] Verify caching behavior. (Run `npm run build` and look at the output: `○` means static, `ƒ` means dynamic).
- [ ] Run a bundle analyzer to ensure no huge libraries are shipped to the client unnecessarily.
- [ ] Optimize all images using `<Image />`.
- [ ] Add `not-found.tsx` and `error.tsx` boundaries to prevent unhandled crashes.

## Congratulations!
You've reached the end of Module 11! Next.js is a powerful framework that bridges the gap between frontend and backend. 

## Completion Checklist
- [ ] Review all module concepts.
- [ ] Complete the final projects.
- [ ] Take the Module 11 Assessment.
