# Module: Invoices

## Purpose
View invoice data related to orders.

## Scope
- invoice list
- invoice details
- invoice status
- invoice download/view, if supported

## Entry points
- order details
- billing section
- notifications

## Related entities
- Invoice
- Order
- Payment

## Main flows
- open invoice
- inspect amount and status
- download or share, if available

## Negative scenarios
- invoice missing for existing order
- invoice status inconsistent with order/payment status
- inaccessible file or failed download
- outdated invoice after payment change

## Risks
- invoice/order mismatch
- wrong amount display
- stale cache after payment update
