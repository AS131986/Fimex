# Corporate Account Access

## Purpose
Document access behavior for corporate account usage.

## Topics
- shared visibility
- account context
- multi-user behavior
- data consistency between users
- role-based restrictions
- switching context, if supported

## Risks
- wrong account data
- permission leakage
- stale context after app restore or re-login

## Open questions
- Which actions are shared across users?
- Is cart shared or per-user?
