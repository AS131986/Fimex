# Business Rule: Offers

## Description
Offer defines commercial conditions for a product / SKU.

## Applies to
- PDP
- cart
- checkout

## Rule details
- offer should be shown consistently
- offer validity should be checked before order submit
- expired or invalid offers must not be silently applied

## Dependencies
- Price
- Stock
- Delivery Date

## Risks
- outdated offer display
- mismatched price calculation

## Open questions
- What happens if offer changes while cart is open?
