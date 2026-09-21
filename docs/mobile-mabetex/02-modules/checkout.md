# Module: Checkout

## Purpose
Collect final purchase details and place the order.

## Scope
- delivery details
- payment selection, if applicable
- invoice details, if applicable
- order confirmation
- final validation before submit

## Entry points
- cart
- order retry / reorder, if supported

## Related entities
- Cart
- Order
- Invoice
- Payment
- Delivery Date

## Main flows
- review order
- validate totals
- confirm checkout
- create order

## Negative scenarios
- submit while data is stale
- payment method unavailable
- delivery date invalid
- address or invoice details missing
- double submit / repeat tap
- server timeout after submit

## Risks
- duplicate order creation
- inconsistent total amount
- checkout state lost on app lifecycle events
