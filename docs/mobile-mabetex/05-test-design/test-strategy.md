# Test Strategy

## Goals
- validate critical buyer flows
- detect data inconsistencies
- cover mobile-specific risks
- ensure role/access correctness
- protect cart/checkout/order/payment integrity

## Focus areas
- sync between catalog, PDP, cart, checkout, order details
- app lifecycle issues
- retry/double tap behavior
- stale cache
- poor network behavior
- deep links and notifications

## Notes
- Prefer risk-based coverage.
- Separate functional, integration, and regression checks where possible.
