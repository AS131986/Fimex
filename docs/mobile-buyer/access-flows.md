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
| Активные П2П-заявки — все роли | [Список, фильтр, очистка и пустота](03-screens/p2p/p2p-active-requests.md) | [Общие/собственные заявки, срок и real-time](04-business-rules/p2p-active-requests.md) | [Список активных П2П](05-test-design/p2p/checklist-p2p-active-requests.md) |
| Управление П2П-заявкой — все роли | [Изменение, встречное предложение и покупка](03-screens/p2p/p2p-active-request.md) | [Резерв, гарантия, подтверждение и удаление](04-business-rules/p2p-active-request.md) | [Управление активной П2П](05-test-design/p2p/checklist-p2p-active-request.md) |
| История П2П — все роли | [История, информация о покупке и fullscreen](03-screens/p2p/p2p-history.md) | [Даты создания/покупки, цена без гарантии и инициатор](04-business-rules/p2p-history.md) | [История П2П](05-test-design/p2p/checklist-p2p-history.md) |
| Мои заказы — клиент и корп | [Активный список клиента/корпа](03-screens/orders/my-orders-client-corporate.md) | [Статусы, показатели, суммы и оплата](04-business-rules/my-orders-client-corporate.md) | [Мои заказы клиента/корпа](05-test-design/orders/checklist-my-orders-client-corporate.md) |
| Клиентские заказы — клиент и корп | [Список заказов реселлеров](03-screens/orders/customer-orders-client-corporate.md) | [Отдельные заказы, фильтры, ручная оплата и выдача](04-business-rules/customer-orders-client-corporate.md) | [Клиентские заказы клиента/корпа](05-test-design/orders/checklist-customer-orders-client-corporate.md) |
| Мои заказы — реселлер | [Собственный список реселлера](03-screens/orders/my-orders-reseller.md) | [Цены с наценкой, фильтр и клиентская выдача](04-business-rules/my-orders-reseller.md) | [Мои заказы реселлера](05-test-design/orders/checklist-my-orders-reseller.md) |
| Детали общего заказа — клиент и корп | [Заказ из «Моих заказов»](03-screens/orders/order-detail-client-corporate.md) | [КТ, гарантия, логист, лимит владельца, объединение и файлы](04-business-rules/order-detail-client-corporate.md) | [Детали общего заказа](05-test-design/orders/checklist-order-detail-client-corporate.md) |
| Детали клиентского заказа — клиент и корп | [Заказ реселлера из «Клиентских»](03-screens/orders/customer-order-detail-client-corporate.md) | [Себестоимость/наценка, ручная оплата, выдача и файлы](04-business-rules/customer-order-detail-client-corporate.md) | [Детали клиентского заказа](05-test-design/orders/checklist-customer-order-detail-client-corporate.md) |
| Детали собственного заказа — реселлер | [Собственный заказ](03-screens/orders/order-detail-reseller.md) | [Гарантия до КТ, лимит с наценкой, позиции и файлы](04-business-rules/order-detail-reseller.md) | [Детали заказа реселлера](05-test-design/orders/checklist-order-detail-reseller.md) |
| Статистика из «Моих заказов» — клиент и корп | [Периоды и иерархия покупок группы](03-screens/orders/my-orders-statistics-client-corporate.md) | [Все заказы, суммы без наценки, доли и выбор](04-business-rules/my-orders-statistics-client-corporate.md) | [Статистика общего списка](05-test-design/orders/checklist-my-orders-statistics-client-corporate.md) |
| Статистика из «Моих заказов» — реселлер | [Периоды и иерархия собственных покупок](03-screens/orders/my-orders-statistics-reseller.md) | [Итоговые суммы с наценкой, доли и выбор](04-business-rules/my-orders-statistics-reseller.md) | [Статистика реселлера](05-test-design/orders/checklist-my-orders-statistics-reseller.md) |
| Статистика клиентских заказов — клиент и корп | [Продажи/прибыль и фильтр реселлера](03-screens/orders/customer-orders-statistics-client-corporate.md) | [Прибыль, доли/средние проценты и состояние выбора](04-business-rules/customer-orders-statistics-client-corporate.md) | [Клиентская статистика](05-test-design/orders/checklist-customer-orders-statistics-client-corporate.md) |
| История из «Моих заказов» — клиент и корп | [История и архивный заказ](03-screens/orders/my-orders-history-client-corporate.md) | [Периоды, завершение и запрет редактирования](04-business-rules/my-orders-history-client-corporate.md) | [История и архив](05-test-design/orders/checklist-my-orders-history-client-corporate.md) |
| История клиентских заказов — клиент и корп | [История и архивный заказ](03-screens/orders/customer-orders-history-client-corporate.md) | [Периоды, завершение и запрет редактирования](04-business-rules/customer-orders-history-client-corporate.md) | [История и архив](05-test-design/orders/checklist-customer-orders-history-client-corporate.md) |
| История из «Моих заказов» — реселлер | [История и архивный заказ](03-screens/orders/my-orders-history-reseller.md) | [Периоды, завершение и запрет редактирования](04-business-rules/my-orders-history-reseller.md) | [История и архив](05-test-design/orders/checklist-my-orders-history-reseller.md) |

Заказы разделены по интерфейсам: «Мои заказы» клиента/корпа, «Мои заказы» реселлера и «Клиентские заказы» клиента/корпа. Все три списка, три деталки, три статистики и три Истории с архивными деталками имеют отдельные документы и чек-листы. История открывается независимо от фильтров списка, только для целиком завершённых заказов; период по дате заказа, без pull-to-refresh, архив без редактирования. Общая История без клиентской наценки, клиентская и собственная реселлера с наценкой; клиентская архивная деталка сохраняет режимы цены/процент, общая — просмотр логиста. Общая статистика включает покупки всей группы без клиентской наценки реселлера; собственная — только покупки текущего реселлера с наценкой. Клиентская статистика включает покупки связанных реселлеров: продажи с наценкой и прибыль как разницу с себестоимостью, собственный фильтр реселлера, сохранение реселлера/бренда между режимами. В прибыли процент клиента — доля общей прибыли, товарных блоков — средний процент прибыли. Все статистики учитывают все статусы/оплату/Историю периода, независимо от фильтров исходного списка; логика периодов и товарной иерархии общая.

При переключении «Мои» / «Клиентские» у клиента/корпа счётчик нижней вкладки меняется на число заказов соответствующего списка. У реселлера он учитывает только собственные текущие заказы до ручного Paid и подтверждённой клиентской выдачи, доступной после админского Released. До КТ реселлер меняет гарантию своей позиции с проверкой собственного лимита по стоимости с наценкой; клиент/корп меняют его логиста из общего заказа, ручную оплату/выдачу — из клиентского.

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

П2П-заявки клиента/корпа общие, реселлер видит только свои, клиент/корп его заявки не видят. Список и активная заявка real-time, без ручного refresh. «Очистить все» с подтверждением удаляет весь доступный активный набор независимо от фильтра; одиночное удаление сразу. После удаления резерв освобождён, открытая заявка сброшена к созданию с toast «Удалено». При покупке учитываются уже занятый резерв и свободный остаток; покупатель может выбрать дополнительную гарантию, подтверждение поставщиком оформляет без неё. Только успешные сделки относятся к описанной Истории П2П: период по созданию заявки, строки/сортировка по покупке, цены без гарантии; клиент/корп видят общую, реселлер только собственную с наценкой. Информация только для просмотра, с инициатором завершения и горизонтальным режимом; skeleton без ручного refresh, real-time Истории отдельно не подтверждён.
