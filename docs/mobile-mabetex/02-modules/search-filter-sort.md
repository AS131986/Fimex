# Module: Search / Filter / Sort

## Purpose
Help users find products quickly and refine results.

## Scope
- text search
- filters
- sorting
- reset filters
- applying multiple filters

## Entry points
- catalog
- search bar
- category results, if present

## Related entities
- Product
- Variant / SKU
- Price
- Stock
- Offer

## Main flows
- search by keyword
- apply filters
- sort results
- clear filters
- restore previous state after back navigation

## Negative scenarios
- no results
- invalid or too short query
- filter combination returns zero items
- state lost after app background/restore
- inconsistent result count

## Risks
- stale filter state
- mismatch between displayed count and actual items
- broken back navigation
