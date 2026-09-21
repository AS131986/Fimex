# Business Rule: Delivery Date

## Description
Delivery date shown to buyer must reflect available fulfillment conditions.

## Applies to
- PDP
- cart
- checkout
- order details

## Rule details
- delivery date should not be older than current backend rule set
- if delivery date becomes unavailable, user must be notified before submit

## Dependencies
- Stock
- Offer
- Shipment / Delivery

## Risks
- wrong ETA display
- invalid delivery commitment

## Open questions
- Is delivery date recalculated at checkout?
