# Supplier LK QA Docs

QA documentation for Supplier LK (supplier personal account) in Fimex.

## Stock: актуальные правила
Правила таргетирования обновлены по уточнениям пользователя от 31 октября 2026 года: поставщики всех стран конкурируют совместно на одной дате Stock, рейтинг и подсказка рассчитываются по этой дате, а видимость дальних предложений учитывает цены ранних дат. Одинаковая цена на разных датах разрешена; дальний оффер с равной ценой скрывается.

- [Бизнес-правила Stock](04-business-rules/stock-targeting-price-rank.md).
- [Описание страницы](03-pages/stock-page.md).
- [Полный чек-лист: 274 проверки](05-test-design/stock-page-checklist.md).
- [Набор из 25 проверок изменения таргетирования](05-test-design/README.md).

Это документация ожидаемого поведения. Прогон приложения и API не выполнялся.

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
