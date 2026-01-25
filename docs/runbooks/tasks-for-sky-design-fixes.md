# Tasks for Sky: Design Fixes

**Source:** `docs/reviews/design-review-full-site.md`
**Date:** 2026-01-25
**Status:** FAIL - Critical fixes required before launch

**Output:** When complete, write summary to `docs/reviews/sky-design-fixes-complete.md`

---

## P0: Critical Fixes (Must complete)

### P0-01: Homepage phase cards - unreadable text

**File:** `site/css/styles.css`

**Problem:** Phase card descriptions use `--color-neutral-600` (grey on grey = invisible on light sections).

**Fix:** Add these rules:

```css
/* Fix phase card text on light sections */
.section--light .phase-card__text {
  color: var(--color-neutral-900);
}

.section--light .phase-card__badge {
  background: rgba(196, 30, 58, 0.15);
  color: var(--color-red);
}
```

---

### P0-02: Services page - invisible text on light sections

**File:** `site/services/index.html`

**Problem:** `.service-card-v2` has white text, placed on light backgrounds = invisible.

**Fix:** Change section classes from `section--light` to `section--dark`:

1. Line 128: `<section class="section section--light" id="assets-cmdb">` → `section--dark`
2. Line 226: `<section class="section section--light" id="automation">` → `section--dark`

---

### P0-03: Approach page - Phase 4 second card empty

**File:** `site/approach/index.html`
**Location:** Lines 181-185

**Problem:** "Handover / Confident ownership" card renders as empty dark rectangle.

**Action:** Investigate in browser dev tools:
- Check if content exists in DOM
- Check for CSS clipping/overflow
- Check if scroll reveal is stuck
- Fix the root cause

---

### P0-04: "Slytherin Problem" - pages too dark

**Problem:** Inner pages are 70-90% dark sections. Homepage works because it's ~50/50.

**Current state:**
| Page | Dark sections | Feel |
|------|---------------|------|
| Homepage | 50% | Balanced ✓ |
| Services | 90% | Oppressive |
| Approach | 85% | Oppressive |
| Contact | 100% | Cold |
| About | 75% | Dark |

**Fix (Services page):** After P0-02 fix, all sections are dark. Consider making one middle section light with appropriate cards.

**Fix (Approach page):** Alternate phase sections:
- Phase 1: `section--dark`
- Phase 2: `section--light` (use value-cards or fix card colours)
- Phase 3: `section--dark`
- Phase 4: `section--light`

**Fix (Contact page):** Split into two sections - form on dark, "what to expect" on light.

---

## P1: High Priority Fixes

### P1-01: Article author avatar broken

**Files:** All 4 article pages
**Component:** `.article__author-avatar`

**Problem:** "AN" initials float outside the red circle instead of centered.

**Fix in CSS:** Check `site/css/styles.css` around lines 1597-1612. Ensure:
```css
.article__author-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

---

### P1-02: Article related cards - empty image placeholders

**Files:** All 4 article pages
**Component:** `.article__related` insight cards

**Problem:** Large grey rectangles where images should be.

**Fix options (pick one):**
1. Add actual images for each article
2. Remove the image container entirely (text-only cards)
3. Add a branded gradient/pattern as placeholder

---

### P1-03: Placeholder links in articles

**Files:**
- `site/insights/the-relay/index.html` (lines 270-271, 281-283)
- `site/insights/behind-the-build/index.html` (lines 230, 257-259)
- `site/insights/a-new-beginning/index.html` (lines 121, 131-133)
- `site/insights/unexpected-friendship/index.html` (lines 97, 107-109)

**Problem:** Author sections have `href="#"` placeholders.

**Fix:** Replace with:
- LinkedIn: `https://www.linkedin.com/in/andreas-l-a-nyberg/`
- Email: `mailto:hello@lt.solutions`

---

### P1-04: Raw YouTube URL

**File:** `site/insights/unexpected-friendship/index.html` line 77

**Problem:** Bare URL displayed: `https://www.youtube.com/watch?v=X36dgBHebjA`

**Fix:** Convert to hyperlink:
```html
<a href="https://www.youtube.com/watch?v=X36dgBHebjA" target="_blank" rel="noopener">Watch the video</a>
```

Or embed the video if appropriate.

---

## P2: Medium Priority (if time permits)

### P2-01: Glass cards on light backgrounds
Review `.glass-card` colours on light sections.

### P2-02: Section-tag visibility
Red text on red background can be hard to read on light sections.

### P2-03: Duplicate author content
Articles have author info both inline AND in component. Remove inline version.

---

## Execution Order

1. **CSS first:** P0-01 (phase card text fix)
2. **Services HTML:** P0-02 (section classes)
3. **Approach investigate:** P0-03 (empty card)
4. **Article links:** P1-03, P1-04 (quick wins)
5. **Author avatar:** P1-01 (CSS investigation)
6. **Visual rhythm:** P0-04 (structural changes)
7. **Image placeholders:** P1-02 (design decision needed)

---

## Acceptance Criteria

- [ ] Homepage phase cards readable on light background
- [ ] Services page - all text visible
- [ ] Approach page - Phase 4 second card displays
- [ ] All article author links work (no href="#")
- [ ] YouTube URL is a proper link
- [ ] Author avatar centered in circle
- [ ] At least one inner page has improved dark/light balance

---

## Reference Files

- Review: `docs/reviews/design-review-full-site.md`
- CSS: `site/css/styles.css`
- Homepage: `site/index.html`
- Services: `site/services/index.html`
- Approach: `site/approach/index.html`
