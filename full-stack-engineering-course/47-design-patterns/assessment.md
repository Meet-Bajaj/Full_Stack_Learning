# Design Patterns Assessment

## Part 1: Multiple Choice
1. Which pattern is best suited for replacing a massive `switch` statement that alters application behavior based on a configuration flag?
   a) Factory
   b) Strategy
   c) Decorator
   d) Adapter

2. Why do we use Dependency Injection?
   a) To make classes tightly coupled to the database.
   b) To increase execution speed.
   c) To allow for easier unit testing by injecting mocks.

## Part 2: Pattern Identification
**Scenario:** You need to integrate the Stripe SDK into your app, but you don't want Stripe-specific types spreading throughout your core logic.
**Question:** Which design pattern should you use and why? Provide a brief code outline.

## Part 3: Code Refactoring
**Task:** You are given a tightly coupled Express controller that instantiates a database connection, runs raw SQL, calculates discounts, and sends an email. Outline how you would refactor this using the Controller, Service, and Repository patterns.
