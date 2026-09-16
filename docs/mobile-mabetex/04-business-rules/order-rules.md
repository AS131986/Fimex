# Business Rule: Order

## Description
Order status and details must reflect backend truth.

## Rule details
- order should be visible after successful submission
- statuses must be consistent across list and details
- order item data should not diverge from checkout confirmation

## Risks
- stale or inconsistent status
- missing order after submit
