# Integration: Pricing and Stock Sync

## Purpose
Keep price and stock information aligned across app screens and backend.

## Direction
- inbound

## Related systems
- product service
- pricing service
- inventory service
- app

## Trigger
- catalog load
- PDP open
- cart refresh
- checkout validation

## Data exchanged
- price
- stock quantity
- availability flag
- delivery date, if tied to stock

## Success criteria
- app shows current values
- invalid items are blocked before submit

## Failure scenarios
- stale snapshot
- delayed sync
- conflicting values between services

## Risks
- overselling
- incorrect pricing
- invalid delivery promises
