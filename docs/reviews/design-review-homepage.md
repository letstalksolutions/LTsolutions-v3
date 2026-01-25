# Homepage Design Review

**Reviewed:** site/index.html
**Date:** 2026-01-21
**Reviewer:** Claude Code (Design Expert)
**Overall Grade:** B+ - Ready for launch with minor fixes

---

## 1. Summary

The homepage implementation is solid with good visual hierarchy, consistent spacing, and appropriate use of the design system. The service cards v2 with gradient CTAs are well-executed. The site successfully balances enterprise credibility with human approachability.

Key strengths:
- Strong hero section with clear value proposition
- Effective use of glass morphism effects
- Good typography hierarchy (Space Grotesk + Inter)
- Responsive grid layouts

Areas needing attention:
- Text contrast issues on glass backgrounds
- Orphaned grid items in proof/outcome sections
- Trust signals could be more prominent

---

## 2. Critical Issues (Must Fix)

### 2.1 Phase card text contrast fails WCAG
- **File:** `site/css/styles.css` line 505
- **Issue:** `.phase-card__text` uses `var(--color-neutral-600)` on glass background
- **Fix:** Change to `rgba(255, 255, 255, 0.75)` for WCAG AA compliance
- **Impact:** Accessibility failure

### 2.2 Orphaned grid items
- **Proof section:** 5 stat cards in a 4-column grid (5th card orphaned on its own row)
- **Outcome section:** 5 cards in a 2-column grid (5th card orphaned)
- **Fix:** Add or remove cards to create complete rows (4 or 6 items)
- **Impact:** Visual imbalance, unprofessional appearance

---

## 3. Improvements (Should Fix)

### 3.1 Hero trust signals too subtle
- **File:** `site/css/styles.css` lines 1432-1441
- **Issue:** Trust badge text is small and low contrast
- **Fix:**
  - Increase font-size from `--text-sm` to `--text-base`
  - Increase opacity on border and background

### 3.2 Missing keyboard focus states on cards
- **File:** `site/css/styles.css` lines 604-607
- **Issue:** Interactive cards lack visible focus indicators
- **Fix:** Add `:focus-within` styles matching hover states
- **Impact:** Keyboard navigation accessibility

### 3.3 Phase cards mobile breakpoint
- **Issue:** 4-column phase cards become cramped on tablets
- **Fix:** Add `@media (max-width: 1100px)` breakpoint for 2x2 grid layout

---

## 4. Nice to Have (Could Fix)

### 4.1 Animation timing refinement
- Consider easing curve adjustments for smoother card hover transitions
- Current: `ease` → Suggested: `cubic-bezier(0.4, 0, 0.2, 1)`

### 4.2 Hero gradient text
- Gradient text effect could have slightly higher contrast on first word

### 4.3 Footer spacing
- Minor inconsistency in column spacing on wide screens

---

## 5. Brand Recommendations

### Logo
- Current logo is serviceable
- Note: Logo red (#BD0A0A) differs slightly from brand red (#C41E3A)
- Recommendation: Align logo colour to brand palette for consistency

### Typography
- Space Grotesk (headings) + Inter (body) is an excellent pairing
- Modern, professional, highly readable
- No changes recommended

### Colour Palette
- Navy/red/white palette works well for enterprise credibility
- Atlassian blue integration is appropriate for partner positioning
- Trust green used sparingly and effectively

### Overall Brand Feel
- Successfully achieves "enterprise credible + human approachable"
- Glass morphism effects add modern touch without being trendy
- Dark theme conveys premium positioning

---

## 6. Specific CSS/HTML Fixes

| Priority | File | Line | Current | Change To |
|----------|------|------|---------|-----------|
| Critical | styles.css | 505 | `color: var(--color-neutral-600)` | `color: rgba(255, 255, 255, 0.75)` |
| Critical | index.html | ~proof section | 5 stat cards | 4 or 6 stat cards |
| Critical | index.html | ~outcome section | 5 outcome cards | 4 or 6 outcome cards |
| Should | styles.css | 1432-1441 | `font-size: var(--text-sm)` | `font-size: var(--text-base)` |
| Should | styles.css | 604-607 | No focus styles | Add `:focus-within` matching hover |
| Should | styles.css | NEW | No tablet breakpoint | Add `@media (max-width: 1100px)` for phase cards |

---

## Top 5 Priority Fixes for Sky

1. **Fix phase card text contrast** - `styles.css:505` - Change to `rgba(255, 255, 255, 0.75)`
2. **Resolve orphaned grid items** - Proof section (5→4 or 6) and Outcome section (5→4 or 6)
3. **Improve hero trust signals** - `styles.css:1432-1441` - Increase size and opacity
4. **Add focus states** - `styles.css:604-607` - Add `:focus-within` for keyboard accessibility
5. **Add tablet breakpoint** - Phase cards 2x2 grid at 1100px

---

## Recommendation

Apply critical fixes (items 1-2), then launch. The "should fix" items can be addressed in a fast-follow sprint.
