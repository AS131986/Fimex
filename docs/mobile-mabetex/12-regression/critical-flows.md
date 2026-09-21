# Critical Flows

## Flow 1: Catalog to Order
catalog → PDP → cart → checkout → order details

## Flow 2: Payment
checkout / order → payment → payment status → order details

## Flow 3: Shipment
order details → shipment details → tracking update

## Flow 4: Invoice
order details → invoice → invoice status update

## Flow 5: Mobile lifecycle
background → foreground → restore → state validation

## Flow 6: Notifications and deep links
push notification → target screen → refreshed data

## Notes
These are the highest priority regression chains.
