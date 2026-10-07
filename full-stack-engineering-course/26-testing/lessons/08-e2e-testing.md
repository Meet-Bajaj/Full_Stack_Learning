# Lesson 8: E2E Testing

## Learning Objectives
- Set up Playwright for E2E testing.
- Write selectors and assertions.
- Test authentication and take screenshots.

## Playwright Basics
End-to-End tests run in an actual browser and simulate real user journeys.

```javascript
import { test, expect } from '@playwright/test';

test('user can log in', async ({ page }) => {
  await page.goto('/login');
  await page.fill('input[name="email"]', 'user@example.com');
  await page.fill('input[name="password"]', 'password');
  await page.click('button[type="submit"]');
  
  await expect(page).toHaveURL('/dashboard');
});
```

## Page Objects Model (POM)
POM is a design pattern that creates an object repository for web UI elements, making tests more maintainable.
