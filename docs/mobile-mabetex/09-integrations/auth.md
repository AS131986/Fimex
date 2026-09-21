# Integration: Auth

## Purpose
Authenticate user and keep session valid.

## Direction
- inbound / outbound

## Related systems
- identity provider
- backend auth service
- app

## Trigger
- login
- token refresh
- session restore

## Data exchanged
- access token
- refresh token
- user identity
- role / account context

## Success criteria
- user stays authenticated correctly
- role context is valid

## Failure scenarios
- token expired
- refresh failure
- session restore mismatch

## Risks
- wrong account context
- unauthorized access after role change
