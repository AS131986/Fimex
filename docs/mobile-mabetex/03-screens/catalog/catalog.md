# Screen: Catalog

## Purpose
Display product list for browsing.

## UI elements
- search bar
- filters, if present
- sort, if present
- product cards
- pagination / infinite scroll
- empty state
- error state
- loader / skeleton

## States
- initial load
- loaded
- empty
- loading more
- error
- offline, if supported

## Main interactions
- open product card
- scroll list
- use search / filter / sort
- pull to refresh, if supported

## Validation rules
- list content must match backend response
- item count should be consistent with filters

## Error states
- network error
- timeout
- partial content load

## Risks
- stale catalog data
- duplicate loading requests
- broken pagination
