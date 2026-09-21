# Scenario: Catalog to Order

## Objective
Verify the main buying journey from catalog to successful order creation.

## Preconditions
- valid Buyer user
- available products
- active offer, if required

## Steps
1. open catalog
2. select product
3. open PDP
4. choose variant / SKU
5. select quantity
6. add to cart
7. open cart
8. proceed to checkout
9. confirm order

## Expected result
- order is created successfully
- data stays consistent across all screens
- order details match checkout confirmation

## Negative variations
- stock changes before checkout
- price changes after add to cart
- network interruption during submit
