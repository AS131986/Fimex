# Admin Panel — Initial Open Questions

## Roles and access
- Какие роли существуют в admin panel?
- Есть ли super admin / support / finance / operations / content / supplier manager?
- Какие действия доступны каждой роли?
- Есть ли ограничения по Buyer / Supplier / region / account ownership?

## Entities and ownership
- Может ли admin видеть все Suppliers и Buyers?
- Есть ли soft delete / archive для сущностей?
- Есть ли audit log изменений?
- Какие поля обязательны у Product / Offer / Order / Invoice / Payment / Shipment?

## Orders and payments
- Может ли admin вручную менять status у Order / Invoice / Payment?
- Какие допустимые status transitions?
- Есть ли частичная оплата, частичная отгрузка, split shipment?
- Что происходит при нехватке Stock после оформления заказа?

## Pricing and stock
- Кто управляет Price: admin, supplier, rules engine?
- Есть ли price tiers / customer-specific pricing / reseller pricing?
- Как резервируется Stock?
- Может ли доступное количество меняться после добавления в Cart?

## Delivery
- Delivery Date — конкретная дата или диапазон?
- Учитываются ли timezone / holidays / cut-off times?
- Кто обновляет Shipment status?

## Corporate accounts
- Какие роли внутри Corporate Account?
- Есть ли approval flow на покупку?
- Есть ли лимиты, бюджеты, credit terms?

## Reseller
- Как рассчитывается markup?
- Кто может быть reseller?
- Какие ограничения на reseller flows?
