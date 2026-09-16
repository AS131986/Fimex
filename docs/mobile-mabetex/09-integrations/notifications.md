# Integration: Notifications

## Purpose
Deliver push and in-app notifications.

## Direction
- inbound

## Related systems
- push service
- backend notification service
- app deep links

## Trigger
- order status update
- payment status update
- shipment update

## Data exchanged
- title
- body
- target route
- entity identifiers

## Success criteria
- notification opens the correct screen
- target data is refreshed

## Failure scenarios
- wrong deep link
- duplicate notification
- stale content

## Risks
- incorrect target routing
- outdated status visible after tap
