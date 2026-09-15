# Admin Panel — Initial Risk Seeds

## Access control
- Horizontal privilege escalation between suppliers/buyers/accounts
- Visibility of data outside assigned scope
- Actions available through API but hidden in UI

## Data integrity
- Inconsistent Stock after concurrent order placement
- Price mismatch between catalog, cart, invoice, and payment
- Delivery Date inconsistency across offer, cart, order, shipment
- Order totals drifting after status or quantity changes

## State management
- Invalid manual status transitions
- Race conditions during order processing
- Duplicate actions from repeated clicks / retries / refresh
- Stale data in tables and detail pages

## Integrations
- Payment success but order/invoice not updated
- Shipment update arrives late or out of order
- Notification sent with wrong status or recipient

## Auditability
- No actor/change trace for critical updates
- Hard to reconstruct who changed price, stock, or order status
