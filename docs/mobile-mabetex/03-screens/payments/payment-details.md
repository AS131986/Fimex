# Screen: Payment Details

## Purpose
Show payment status and related information.

## UI elements
- payment status
- amount
- method, if shown
- retry or pay action, if supported

## States
- pending
- success
- failed
- loading
- error

## Risks
- duplicate payment attempt
- status mismatch after callback
