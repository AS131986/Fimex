# Business Rule: Stock

## Description
Stock availability must be shown according to the latest confirmed backend state.

## Applies to
- catalog
- PDP
- cart
- checkout

## Rule details
- if stock becomes unavailable, item should not remain purchasable
- quantity must not exceed available stock unless backorder is allowed and confirmed

## Exceptions
- reserved stock, if applicable
- delayed sync windows, if documented

## Dependencies
- Product
- Variant / SKU
- Cart
- Checkout

## Risks
- overselling
- stale availability
- wrong quantity validation

## Open questions
- Is stock reserved on add-to-cart or only on checkout?
