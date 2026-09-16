# Screen: Order Details

## Purpose
Show detailed information for a specific order.

## UI elements
- order number
- status
- items
- totals
- invoice link
- payment section
- shipment section
- actions, if supported

## States
- loaded
- partial data
- loading
- error

## Main interactions
- open related invoice
- open payment info
- open shipment info

## Risks
- mismatch with invoice/payment/shipment data
- stale status
- incomplete item data
