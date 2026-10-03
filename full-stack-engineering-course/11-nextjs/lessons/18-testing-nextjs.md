# 18 - Testing Next.js

## Learning Objectives
- Setup unit testing with Jest and React Testing Library.
- Test Server Components vs Client Components.
- Implement E2E testing with Playwright.

## Unit Testing Client Components
Testing Client Components is identical to testing standard React applications.

```bash
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
```

```tsx
// button.test.tsx
import { render, screen } from '@testing-library/react'
import Button from './Button' // Client component

it('renders a button', () => {
  render(<Button />)
  expect(screen.getByRole('button')).toBeInTheDocument()
})
```

## Testing Server Components
Testing Server Components unit-wise is complex because they can be asynchronous and execute server-only code (like DB calls).
Best practice: Extract the core logic into pure functions and test those. For the UI, rely on E2E testing.

## End-to-End (E2E) Testing with Playwright
Playwright spins up a real browser and tests the application exactly as a user would experience it. It doesn't care if a component is Server or Client.

```bash
npm init playwright@latest
```

```ts
// e2e/home.spec.ts
import { test, expect } from '@playwright/test';

test('has title and login flow', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  
  // Check title
  await expect(page).toHaveTitle(/My App/);
  
  // Click login
  await page.getByRole('link', { name: 'Log in' }).click();
  await expect(page).toHaveURL(/.*login/);
});
```

## Completion Checklist
- [ ] Setup Jest and test a Client Component.
- [ ] Setup Playwright and write an E2E test for the homepage.
