# Module: Cart

## Purpose
Manage selected items before checkout.

## Scope
- cart listing
- quantity update
- remove item
- item validation
- cart summary
- price recalculation

## Entry points
- PDP add to cart
- cart icon
- checkout flow return

## Related entities
- Cart
- Order Item
- Product
- Variant / SKU
- Price
- Stock
- Delivery Date

## Main flows
- add item
- update quantity
- remove item
- review totals
- proceed to checkout

## Negative scenarios
- item no longer available
- stock reduced after add
- quantity exceeds available stock
- price changed after item was added
- cart becomes invalid after background/restore
- duplicate add due to retry/double tap

## Risks
- cart summary not synchronized with backend
- item state differs from PDP
- multiple user conflict in corporate account
