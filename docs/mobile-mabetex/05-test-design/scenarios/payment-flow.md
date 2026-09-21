# Scenario: Payment Flow

## Objective
Verify payment status handling and synchronization.

## Preconditions
- order requires payment or payment step is available
- valid payment method / flow

## Steps
1. open order or checkout
2. start payment
3. complete payment
4. return to app
5. check payment and order statuses

## Expected result
- payment status is updated correctly
- order status is consistent
- no duplicate payment is created

## Negative variations
- callback delayed
- app closed during payment
- user retries payment
