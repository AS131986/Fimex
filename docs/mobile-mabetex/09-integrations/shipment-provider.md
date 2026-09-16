# Integration: Shipment Provider

## Purpose
Fetch shipment and delivery tracking information.

## Direction
- inbound

## Related systems
- shipment provider
- backend shipping service
- app

## Trigger
- open order details
- refresh shipment info

## Data exchanged
- tracking number
- status
- ETA
- location updates, if available

## Success criteria
- shipment status is current and consistent

## Failure scenarios
- provider unavailable
- delayed update
- missing tracking number

## Risks
- stale shipment status
- inconsistent ETA
