# Module 26 Exercises

## Exercise 1: Write a Unit Test
Write a complete test suite for a `calculateDiscount(price, discountPercentage)` function using Jest. Include edge cases (negative numbers, strings).

## Exercise 2: Mocking a Database
Given a `UserService` that calls `db.query()`, write a test that mocks `db.query()` to return a fake user, and assert that `UserService.getUser()` formats the response correctly.

## Exercise 3: React Testing Library
Write a test for a `<LoginForm />` component. Use `userEvent` to type into the email and password fields, click submit, and verify that the `onSubmit` prop was called.
