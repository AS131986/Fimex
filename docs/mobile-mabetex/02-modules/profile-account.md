# Module: Profile / Account

## Purpose
Provide user account access, preferences, and corporate account context.

## Scope
- profile details
- account switching, if supported
- corporate account access
- settings
- logout

## Entry points
- bottom navigation
- side menu
- avatar/profile icon

## Related entities
- User
- Buyer
- Corporate Account

## Main flows
- view profile
- change account-related preferences
- switch context, if available
- logout

## Negative scenarios
- unauthorized access to restricted data
- stale user context after switching
- profile data not refreshed after login restore

## Risks
- wrong corporate account context
- permissions not refreshed after role change
