# Business Rule: Pricing

## Description
Price displayed in app must be consistent across catalog, PDP, cart, checkout, and order details unless a documented recalculation occurs.

## Applies to
- catalog
- PDP
- cart
- checkout
- order details

## Rule details
- ...
- price changes must be handled explicitly
- stale prices should not be silently confirmed

## Exceptions
- confirmed promo or offer recalculation
- backend-driven price update

## Dependencies
- Offer
- Stock
- Cart
- Checkout

## Risks
- price mismatch across screens
- stale cache
- incorrect total at submission

## Open questions
- What is the exact reprice moment?
