# Negative Scenarios

## Catalog / PDP
- item unavailable after open
- price changes mid-flow
- stock becomes zero
- delivery date disappears
- add to cart fails after tap

## Cart / Checkout
- duplicate tap on checkout
- timeout during submit
- quantity exceeds stock
- item removed by backend sync
- totals differ from confirmation

## Payments / Orders
- payment callback delayed
- payment marked success in UI but failed on backend
- order created twice due to retry
- order not visible immediately after submit

## Mobile-specific
- app killed during submit
- app restored after network failure
- push notification opens outdated data
