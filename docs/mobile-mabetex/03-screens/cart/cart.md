# Screen: Cart

## Purpose
Show items selected for purchase.

## UI elements
- item rows
- quantity controls
- remove action
- subtotal / total
- taxes / fees, if any
- checkout button
- empty state

## States
- loaded
- empty
- item unavailable
- quantity invalid
- recalculating totals
- error

## Main interactions
- change quantity
- remove item
- continue checkout
- refresh cart state

## Validation rules
- quantity cannot exceed available stock or business limit
- removed item should not remain in summary

## Error states
- failed price refresh
- failed quantity update
- failed remove action

## Risks
- stale cart data
- duplicate modification requests
- incorrect total after sync
