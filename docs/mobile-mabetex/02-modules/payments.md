# Module: Payments

## Purpose
Allow user to review and complete payment-related actions.

## Scope
- payment status
- payment history
- payment action, if applicable
- payment result handling

## Entry points
- checkout
- order details
- invoices
- payment notifications

## Related entities
- Payment
- Order
- Invoice

## Main flows
- view payment status
- initiate payment
- confirm success/failure
- retry payment if allowed

## Negative scenarios
- payment callback delayed
- duplicate payment attempt
- app closed during payment flow
- inconsistent status after retry
- success screen shown without backend confirmation

## Risks
- duplicate charge
- wrong payment status
- mismatch between payment and order state
