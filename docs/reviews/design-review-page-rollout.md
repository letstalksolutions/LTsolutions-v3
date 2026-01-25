# Design Review: Page Rollout

**Reviewer:** Claude Code (Orchestrator)
**Date:** 2026-01-25
**Scope:** All pages created by Sky in page rollout sprint

---

## Summary

Sky completed all 12 pages. Quality is high overall. One consistency issue needs fixing.

---

## Issues Found

### Issue 1: Homepage service cards use old pattern (P0)

**Location:** `site/index.html` lines 220-286

**Problem:** Homepage uses `.service-card` with numbered badges (01, 02, 03, 04), while Services page uses `.service-card-v2` with icons.

**Current (homepage):**
```html
<div class="service-card__number">
  <span class="service-card__index">01</span>
  <span class="service-card__category">JSM Delivery</span>
</div>
```

**Expected (like services page):**
```html
<div class="service-card-v2__header">
  <div class="service-card-v2__icon" aria-hidden="true">
    <svg>...</svg>
  </div>
  <span class="service-card-v2__badge">JSM Delivery</span>
</div>
```

**Fix required:**
- Replace `.service-card` with `.service-card-v2` for all 4 service cards
- Add icons (copy from services page)
- Add benefits list with `.service-card-v2__benefits`
- Replace "Learn more →" link with `.service-card-v2__cta` gradient button

---

## Pages Reviewed

| Page | Status | Notes |
|------|--------|-------|
| Homepage | ⚠️ Needs fix | Service cards use old pattern |
| Services | ✅ Good | Uses service-card-v2 correctly |
| Contact | ✅ Good | Form, glass cards, proper structure |
| Approach | ✅ Good | Phase anchors, principles section |
| About | ✅ Good | Bio, philosophy cards |
| Insights listing | ✅ Good | 4 insight cards |
| Article pages (4) | ✅ Good | Proper article structure |
| Privacy | ✅ Good | Standard policy content |
| Legal | ✅ Good | Standard legal content |
| Sitemap | ✅ Good | All pages included |

---

## Recommendations

1. **Fix homepage service cards** - Priority, creates visual inconsistency
2. **Consider link audit** - Verify all internal links work (some use `/services` vs `/services/`)
3. **Visual QA at breakpoints** - Test 320px, 768px, 1024px

---

## Next Action

Create task for Sky to update homepage service cards to v2 pattern.
