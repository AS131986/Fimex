# Module: Shipments

## Purpose
Show shipment / delivery progress.

## Scope
- shipment status
- tracking info, if available
- delivery updates
- shipment history

## Entry points
- order details
- notifications
- deep links

## Related entities
- Shipment / Delivery
- Order

## Main flows
- open shipment info
- track shipment progress
- review delivery status updates

## Negative scenarios
- shipment not created yet
- tracking not available
- delayed update
- wrong delivery status
- inconsistent shipment and order state

## Risks
- stale delivery tracking
- mismatch between shipment and order statuses
