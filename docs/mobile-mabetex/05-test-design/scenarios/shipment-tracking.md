# Scenario: Shipment Tracking

## Objective
Verify shipment information display and updates.

## Preconditions
- order with shipment created

## Steps
1. open order details
2. open shipment section
3. review tracking info
4. refresh state

## Expected result
- shipment info is shown correctly
- status matches backend / provider source

## Negative variations
- no tracking number
- stale status
- tracking provider error
