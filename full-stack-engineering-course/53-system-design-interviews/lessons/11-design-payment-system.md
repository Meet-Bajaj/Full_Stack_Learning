# Lesson 11: Design a Payment System

## Learning Objectives
- Understand idempotency and why it's critical for payments.
- Architecture for integrating with Payment Gateways (Stripe, PayPal).

## Core Concept: Idempotency
If a network request to charge a user drops, the client might retry. You MUST NOT charge them twice.
- **Idempotency Key:** The client sends a unique UUID with the payment request. The server checks the DB. If a transaction with that key already succeeded, it returns the success response without charging again.

## Reconciliation
Every night, a background job compares internal database records with the Payment Gateway's settlement reports to find discrepancies (missed webhooks).
