# Supplier LK QA Docs

QA documentation for Supplier LK (supplier personal account) in Fimex.

## Stock: актуальные правила
Правила таргетирования обновлены по ТЗ от 04.11 и уточнениям пользователя от 5 ноября 2026 года. Рейтинг сравнивает цены и даты Stock всех предложений группы «Таргет», настроенной в категории. Характеристики группы, включая SIM, должны совпадать. Поставщики ОАЭ, США и других стран участвуют совместно.

Лучше предложение с меньшей ценой на той же или более ранней дате либо с равной ценой на более ранней. Рейтинг равен числу разных лучших цен плюс 1. Две цены 100 на одной дате дают №1 и №1, а на разных датах — №1 и №2. Одинаковая цена на разных датах сохраняется без повышения, клиент видит дальнюю дату только при строго меньшей цене той же страны устройства.

Подсказка №2 и ниже показывает Best Price. Если лидер на сегодня, отображается только цена. Для будущего лидера добавляется From со страной поставки и датой. При равной лучшей цене выбирается ближайшая дата, приоритет ОАЭ при совпадении цены и даты требует согласования.

- [Бизнес-правила Stock](04-business-rules/stock-targeting-price-rank.md).
- [Описание страницы](03-pages/stock-page.md).
- [Основной чек-лист Stock, 274 проверки](05-test-design/stock-page-checklist.md).
- [22 целевые проверки нового рейтинга, Best Price и регресса переносов](05-test-design/stock-targeting-0411-checklist.md).
- [Указатель проверок таргетирования](05-test-design/README.md).

Это документация ожидаемого поведения. Полный регрессионный прогон ещё не завершён. Анализ ответа Admin Stock подтверждает конечные цены, количество и даты выбранных товаров. Для фактического рейтинга и подсказки нужен Stock поставщика.

## Structure
- `01-product-overview/` — product context and scope
- `02-modules/` — module-level notes
- `03-pages/` — page descriptions and UI behavior
- `04-business-rules/` — business rules and constraints; Stock targeting: `04-business-rules/stock-targeting-price-rank.md`
- `05-test-design/` — checklists, scenarios, and coverage; Stock checklist: `05-test-design/stock-page-checklist.md`
- `06-bugs-and-risks/` — bug notes and known risks
- `07-open-questions/` — unresolved questions and dependencies
- `08-test-data/` — test data sets and prerequisites
- `09-integrations/` — integration-specific notes
- `10-api-notes/` — API observations and mismatches
- `11-access-and-roles/` — roles, permissions, and data isolation
- `12-regression/` — regression packs and impact notes
- `templates/` — reusable templates
