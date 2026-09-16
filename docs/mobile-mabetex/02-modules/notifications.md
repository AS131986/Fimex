# Module: Notifications

## Purpose
Inform user about important events.

## Scope
- push notifications
- in-app notifications
- order/payment/shipment updates
- deep links from notifications

## Entry points
- system push
- notification center
- app inbox, if supported

## Related entities
- Order
- Payment
- Shipment / Delivery
- Invoice

## Main flows
- receive notification
- open target screen
- refresh related data

## Negative scenarios
- wrong target on tap
- stale notification content
- duplicate notifications
- notification opens screen with outdated state

## Risks
- broken deep links
- stale or misleading status updates
