# Integration: Payment Gateway

## Purpose
Handle payment submission and status confirmation.

## Direction
- outbound / inbound, depending on flow

## Related systems
- payment provider
- backend payment service
- app

## Trigger
- user confirms payment
- checkout submits payment step

## Data exchanged
- payment amount
- order reference
- transaction identifier
- status callback, if any

## Success criteria
- payment success is confirmed by backend
- app reflects correct status

## Failure scenarios
- timeout
- callback delay
- duplicate attempt
- provider error

## Risks
- duplicate charge
- status mismatch
