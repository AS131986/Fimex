# Module: Catalog

## Purpose
Browse product catalog and discover available items.

## Scope
- product listing
- category navigation, if present
- product tiles/cards
- availability preview
- price preview
- stock preview
- delivery date preview, if shown

## Entry points
- home
- deep links
- search results
- category pages, if applicable

## Related entities
- Product
- Variant / SKU
- Offer
- Stock
- Price
- Delivery Date

## Main flows
- open catalog
- scroll/paginate
- open product card
- move to PDP

## Negative scenarios
- empty catalog
- partial loading
- stale price/stock display
- network error during pagination
- duplicate taps on card

## Risks
- inconsistent data between catalog and PDP
- stale cache
- wrong availability indicators
