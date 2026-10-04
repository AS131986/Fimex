# Экраны: Регистрация — Fimex Buyer, iOS

Описание основано на предоставленных скриншотах. Правила и открытые вопросы вынесены в `04-business-rules`, чек-листы — в `05-test-design`.

<a id="registration"></a>

## Email и пароль

Начало регистрации нового клиента. Поля email, Password и Password Confirmation; кнопки видимости обоих паролей, возврата, языка и Continue; ссылки Terms of Use и Privacy Policy.

- [Правила и открытые вопросы](../../04-business-rules/registration.md#registration)
- [Чек-лист](../../05-test-design/registration/checklist-registration.md#registration)

<a id="registration-code"></a>

## Подтверждение регистрации

Подтверждение email после [регистрации](../../04-business-rules/registration.md#registration). Отображаются адрес получателя, четыре позиции ввода, повторная отправка с таймером, Continue, возврат и цифровая клавиатура.

- [Правила и открытые вопросы](../../04-business-rules/registration.md#registration-code)
- [Чек-лист](../../05-test-design/registration/checklist-registration.md#registration-code)

<a id="registration-profile"></a>

## Имя и фото

Заполнение профиля после [подтверждения email](../../04-business-rules/registration.md#registration-code). Заголовок Your profile, область фото, поле Name, Continue и возврат.

- [Правила и открытые вопросы](../../04-business-rules/registration.md#registration-profile)
- [Чек-лист](../../05-test-design/registration/checklist-registration.md#registration-profile)

## Последовательность

Email и пароль → код подтверждения → имя и фото → [онбординг и подписка](subscription-onboarding.md).
