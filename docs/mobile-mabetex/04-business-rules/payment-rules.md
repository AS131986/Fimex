# Business Rule: Payment

## Description
Payment flow must prevent duplicate charge and status mismatch.

## Rule details
- payment success must be confirmed by backend
- retry behavior should be controlled
- status changes should be synchronized across app screens

## Risks
- duplicate payment
- success UI before backend confirmation
- inconsistent payment/order state
