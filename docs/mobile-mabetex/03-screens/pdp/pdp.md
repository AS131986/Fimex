# Screen: PDP

## Purpose
Show product details and allow item selection.

## UI elements
- product name
- images
- variant / SKU selector
- offer info
- price
- stock
- delivery date
- quantity selector
- add to cart button
- back navigation

## States
- loaded
- variant changed
- no stock
- low stock
- price changed
- offer unavailable
- error
- loading

## Main interactions
- switch variant / SKU
- change quantity
- add to cart
- open related info

## Validation rules
- quantity must be within allowed range
- unavailable variant should not be orderable

## Error states
- failed product load
- failed add to cart
- stale availability info

## Risks
- mismatch with catalog data
- data refresh not reflected after restore
