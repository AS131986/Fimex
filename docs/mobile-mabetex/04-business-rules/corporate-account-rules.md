# Business Rule: Corporate Account

## Description
Corporate account behavior may involve multiple users and role-based restrictions.

## Rule details
- user actions must respect current role and permissions
- account context should be refreshed after re-login or account switch
- shared data must remain consistent across users

## Risks
- permission leakage
- wrong account context
- stale role-based visibility

## Open questions
- What actions are shared across all corporate users?
