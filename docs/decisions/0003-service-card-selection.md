# ADR 0003: Service card selection for production

## Status
Decided

## Context
Three service card variants exist in lab/:
1. Original baseline from styles-unified.css
2. Codex Enhanced (modifier approach using .service-card--enhanced)
3. Claude V2 Enhanced (standalone .service-card-enhanced)

## Decision
Use the **original baseline** for v1.

## Rationale
- Simpler = faster to ship
- Matches "ship v1 quickly" objective from status.md
- Lower maintenance burden
- Positioning and copy do the heavy lifting, not visual effects
- Enhanced variants add complexity without proportional value for v1

## If enhancement is needed later
Prefer Codex modifier approach because:
- Extends existing CSS rather than creating parallel component
- Uses .service-card--enhanced modifier pattern
- Easier to toggle on/off per page

## Changes required for production
Current site/index.html already uses the baseline service card. No changes needed.

To update copy to match positioning:
1. Change service titles to match pillar names from homepage-copy-blocks.md
2. Update descriptions to emphasise JSM, Assets, Opsgenie specifically
3. Keep layout and visual styling as-is
