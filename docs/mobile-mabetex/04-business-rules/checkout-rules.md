# Business Rule: Checkout

## Description
Checkout is the final validation point before order creation.

## Rule details
- all mandatory data must be valid
- totals must match current cart state
- submit action must be idempotent or protected against double tap/retry

## Risks
- duplicate order
- wrong totals
- lost state on submit

## Open questions
- What validation happens server-side vs client-side?
