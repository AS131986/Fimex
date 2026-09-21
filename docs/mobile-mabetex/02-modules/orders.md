# Module: Orders

## Purpose
Show order list and order details.

## Scope
- orders list
- order details
- order status
- order items
- related shipment/payment info, if available

## Entry points
- profile
- post-checkout success
- push notification
- deep link

## Related entities
- Order
- Order Item
- Payment
- Shipment / Delivery
- Invoice

## Main flows
- open order list
- open order details
- track order status
- navigate to related payment/shipment info

## Negative scenarios
- status not updated
- order not visible after successful checkout
- details differ from confirmation screen
- partial load or empty state issue

## Risks
- stale status display
- mismatched order item data
- incorrect navigation from notification/deep link
