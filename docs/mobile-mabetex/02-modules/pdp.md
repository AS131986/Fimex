# Module: PDP

## Purpose
Show detailed product information and allow selection before add to cart.

## Scope
- product details
- variant / SKU selection
- offer details
- price
- stock
- delivery date
- quantity selection
- add to cart action

## Entry points
- catalog
- search results
- deep links
- related items

## Related entities
- Product
- Variant / SKU
- Offer
- Stock
- Price
- Delivery Date
- Cart

## Main flows
- open PDP
- switch variant / SKU
- inspect offer details
- choose quantity
- add item to cart

## Negative scenarios
- variant unavailable
- stock changes while screen is open
- price changes after selection
- delivery date unavailable or invalid
- add to cart fails on retry
- double tap on add button

## Risks
- data mismatch catalog → PDP
- stale offer/price/stock
- incorrect quantity limits
