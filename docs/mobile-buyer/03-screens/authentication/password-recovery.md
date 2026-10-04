# Экраны: Восстановление доступа — Fimex Buyer, iOS

Описание основано на предоставленных скриншотах. Правила и открытые вопросы вынесены в `04-business-rules`, чек-листы — в `05-test-design`.

<a id="password-reset-email"></a>

## Запрос восстановления по email

Первый шаг восстановления из [авторизации](../../04-business-rules/authentication.md#login). Заголовок Password reset, поле email, Reset Password и возврат.

- [Правила и открытые вопросы](../../04-business-rules/authentication.md#password-reset-email)
- [Чек-лист](../../05-test-design/authentication/checklist-password-recovery.md#password-reset-email)

<a id="password-reset-message"></a>

## Сообщение о письме

Промежуточный экран после [запроса восстановления](../../04-business-rules/authentication.md#password-reset-email). На скриншоте: `Please check your messages`, сообщение о коде восстановления на указанный email, Continue и возврат.

- [Правила и открытые вопросы](../../04-business-rules/authentication.md#password-reset-message)
- [Чек-лист](../../05-test-design/authentication/checklist-password-recovery.md#password-reset-message)

<a id="password-reset-code"></a>

## Код восстановления

Подтверждение доступа к email перед сменой пароля. Предыдущий экран — [сообщение о письме](../../04-business-rules/authentication.md#password-reset-message). Заголовок Password reset, email получателя, четыре позиции ввода, таймер повторной отправки, Continue, возврат и цифровая клавиатура.

- [Правила и открытые вопросы](../../04-business-rules/authentication.md#password-reset-code)
- [Чек-лист](../../05-test-design/authentication/checklist-password-recovery.md#password-reset-code)

<a id="password-reset-new-password"></a>

## Новый пароль и автоматический вход

Последний шаг после [кода восстановления](../../04-business-rules/authentication.md#password-reset-code). Заголовок Set a new password, Password и Password Confirmation с отдельными переключателями видимости, Save и возврат.

- [Правила и открытые вопросы](../../04-business-rules/authentication.md#password-reset-new-password)
- [Чек-лист](../../05-test-design/authentication/checklist-password-recovery.md#password-reset-new-password)

## Последовательность

Из [авторизации](login.md): email → сообщение о письме → код → новый пароль → автоматический вход с ограничениями статуса и подписки.
