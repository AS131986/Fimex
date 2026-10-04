# Каталог QA-документации — Fimex Buyer, iOS

Документы сгруппированы по функциональности. Авторизация и восстановление находятся в одной группе, регистрация и оформление подписки — в другой. Описания экранов — `03-screens/`, правила и открытые вопросы — `04-business-rules/`, чек-листы — `05-test-design/`.

Материалы основаны на описании, ответах и скриншотах пользователя. Проверки описаны, но не выполнялись. Исходные изображения в репозиторий не добавлены.

## Каталог

| Область | Описание экранов | Правила | Чек-лист |
|---|---|---|---|
| Стартовый экран | [Старт](03-screens/start.md) | [Язык, тема, переходы](04-business-rules/start.md) | [Старт](05-test-design/checklist-start.md) |
| Регистрация | [Email/пароль, код, имя/фото](03-screens/registration/registration.md) | [Регистрация](04-business-rules/registration.md) | [Регистрация и подписка](05-test-design/registration/checklist-registration.md) |
| Подписка | [Онбординг и подписка](03-screens/registration/subscription-onboarding.md) | [Подписка](04-business-rules/registration.md#subscription-onboarding) | [Подписка](05-test-design/registration/checklist-registration.md#subscription-onboarding) |
| Авторизация | [Вход](03-screens/authentication/login.md) | [Авторизация](04-business-rules/authentication.md#login) | [Вход](05-test-design/authentication/checklist-login.md) |
| Восстановление | [Все шаги](03-screens/authentication/password-recovery.md) | [Восстановление](04-business-rules/authentication.md#password-reset-email) | [Все шаги](05-test-design/authentication/checklist-password-recovery.md) |
| Price List | [Прайс](03-screens/home/price-list.md) | [Правила прайса](04-business-rules/price-list.md), [уведомления](04-business-rules/price-list-notifications.md) | [Price List](05-test-design/home/checklist-price-list.md) |
| Главная и нижнее меню | [Главная](03-screens/home/home.md) | [Главная и меню](04-business-rules/home.md) | [Главная](05-test-design/home/checklist-home.md), [нижнее меню](05-test-design/home/checklist-bottom-navigation.md) |
| Настройки | [Sheet Настроек](03-screens/home/settings.md) | [Глубина, оплата и Excel](04-business-rules/settings.md) | [Настройки](05-test-design/home/checklist-settings.md) |
| Поиск | [Поиск и история](03-screens/home/search.md) | [Поиск, результаты и история](04-business-rules/search.md) | [Поиск](05-test-design/home/checklist-search.md) |
| Уведомления | [Список событий](03-screens/home/notifications.md) | [События, роли и переходы](04-business-rules/notifications.md) | [Уведомления](05-test-design/home/checklist-notifications.md) |
| Покупка товара | [Pre-Order и вложенные окна](03-screens/home/purchase.md) | [Количество, гарантия, лимит, логист, Share](04-business-rules/purchase.md) | [Покупка](05-test-design/home/checklist-purchase.md) |
| Создание заявки P2P | [P2P Chat и активная заявка](03-screens/home/p2p-request.md) | [Цена, количество, резерв лимита и общие заявки](04-business-rules/p2p-request.md) | [Создание заявки](05-test-design/home/checklist-p2p-request.md) |
| Мои заказы — клиент и корп | [Активный список клиента/корпа](03-screens/orders/my-orders-client-corporate.md) | [Статусы, показатели, суммы и оплата](04-business-rules/my-orders-client-corporate.md) | [Мои заказы клиента/корпа](05-test-design/orders/checklist-my-orders-client-corporate.md) |
| Клиентские заказы — клиент и корп | [Список заказов реселлеров](03-screens/orders/customer-orders-client-corporate.md) | [Отдельные заказы, фильтры, ручная оплата и выдача](04-business-rules/customer-orders-client-corporate.md) | [Клиентские заказы клиента/корпа](05-test-design/orders/checklist-customer-orders-client-corporate.md) |
| Мои заказы — реселлер | [Собственный список реселлера](03-screens/orders/my-orders-reseller.md) | [Цены с наценкой, фильтр и клиентская выдача](04-business-rules/my-orders-reseller.md) | [Мои заказы реселлера](05-test-design/orders/checklist-my-orders-reseller.md) |

Заказы разделены по интерфейсам: «Мои заказы» клиента/корпа, «Мои заказы» реселлера и «Клиентские заказы» клиента/корпа. Все три списка имеют отдельные документы и чек-листы; полные детали заказов, Статистика и История будут описаны отдельно. При переключении «Мои» / «Клиентские» у клиента/корпа счётчик нижней вкладки меняется на число заказов соответствующего списка. У реселлера он учитывает только собственные текущие заказы до ручного Paid и «Выдать» со стороны клиента/корпа.

## Сценарии

- Регистрация: старт → email/пароль → код → имя/фото → онбординг/подписка → аккаунт только после успешного оформления.
- Вход: старт → авторизация → аккаунт либо ограничение по статусу/подписке; обязательное обновление блокирует использование.
- Восстановление: авторизация → email → сообщение о письме → код → новый пароль → автоматический вход с применением ограничений аккаунта.

Один экран онбординга предоставлен; другие слайды и системная покупка не описаны без их исходных требований. Самостоятельное восстановление реселлера через клиента вне предоставленных экранов.

## Использование

- `[ ]` — Not run, не Fail. Результаты отдельно: Pass / Fail / Blocked / Not run / N/A.
- ID сохранены при перегруппировке: START, REG, REGCODE, PROFILE, SUB, LOGIN, RESETEMAIL, RESETMSG, RESETCODE, NEWPASS; у Price List — PL. Не переиспользовать снятые ID.
- Подтверждённые правила отделены от наблюдений и открытых вопросов. При неизвестном ожидаемом поведении зависимая часть проверки Blocked до уточнения.
- Общие вопросы кодов — REGCODE-Q01–Q06 в правилах регистрации; вопросы пароля — REG-Q01/Q02/Q05. Восстановление не задаёт другую политику.
- Срок действия кода неизвестен. 120 секунд — интервал повторной отправки. Лимиты и судьба старого кода не подтверждены.
- Обязательное обновление проверяется только в LOGIN-UPDATE-01.
- Точная ошибка, URL, тариф или лимит со скриншота не считается согласованным требованием.
- Проверка базы требует разрешённого доступа к backend; отсутствие авторизации не доказывает отсутствие аккаунта в базе.
- Более ранние документы Price List содержат известные расхождения с последними согласованиями. Они перечислены в правилах прайса; перенос не меняет требования и не объявляет эти расхождения исправленными.

Соседние продуктовые направления не затронуты.
