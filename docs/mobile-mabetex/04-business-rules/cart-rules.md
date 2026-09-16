# Business Rule: Cart

## Description
Cart must stay consistent across device/app lifecycle and backend sync.

## Rule details
- item quantity must be validated before checkout
- item price and availability should be refreshed when needed
- duplicate add actions must not create duplicate items unless allowed

## Risks
- duplicate items
- stale totals
- invalid checkout state

## Open questions
- Does cart merge across sessions/devices?
