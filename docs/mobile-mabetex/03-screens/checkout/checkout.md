# Screen: Checkout

## Purpose
Collect final confirmation and place the order.

## UI elements
- order summary
- delivery details
- invoice details, if any
- payment details, if any
- place order button
- error banner / inline errors

## States
- loaded
- validation error
- submitting
- success
- submit failed

## Main interactions
- confirm order
- go back to edit cart
- retry on failure

## Validation rules
- required fields must be filled
- totals must be consistent before submit

## Error states
- submission timeout
- duplicate submit attempt
- backend validation error

## Risks
- duplicate order creation
- stale total or delivery info
- state loss on background/restore
