# Full Site Design Review

**Date:** 25 January 2026
**Reviewer:** Claude Code (Design & UX Expert)
**Scope:** All 12 pages of LT.Solutions v3.0

---

## Executive Summary

**Overall Status: FAIL - Critical fixes required before launch**

The site has serious contrast and readability issues across multiple pages. While the homepage structure is sound, several components render text that is nearly or completely unreadable. Additionally, most inner pages feel cold and unwelcoming compared to the balanced homepage - what I call the "Slytherin problem."

**Critical Issues:** 4
**High Priority:** 4
**Medium Priority:** 3

---

## Critical Issues (P0) - Must Fix

### P0-01: Homepage phase cards have unreadable description text

**Location:** `site/index.html` lines 331-355 (Our Approach section)
**Component:** `.glass-card.phase-card` on `section--light`

**Problem:** The phase card descriptions use `.phase-card__text` which has `color: var(--color-neutral-600)` (#616E7C). This medium grey text on the light grey card background fails WCAG contrast requirements and is nearly invisible.

**Screenshot evidence:** Phase cards show:
- "Phase 1/2/3/4" badges - barely visible (light red on light grey)
- Titles - readable (dark text)
- Descriptions like "Understand context, pain points, and success criteria" - **unreadable grey on grey**

**Fix required:** In `site/css/styles.css`, update `.phase-card__text`:
```css
.phase-card__text {
  color: var(--color-neutral-900); /* was var(--color-neutral-600) */
}
```

Or create a light-section override:
```css
.section--light .phase-card__text {
  color: var(--color-neutral-900);
}
```

---

### P0-02: Services page - Unreadable text on light sections

**Location:** `site/services/index.html`
- Lines 128-175: Assets (CMDB) section (`section--light`)
- Lines 226-280: Automation section (`section--light`)

**Component:** `.service-card-v2` placed on `section--light`

**Problem:** The `.service-card-v2` component is designed for dark backgrounds with white/light text:
- `.service-card-v2__title`: `color: var(--color-white)`
- `.service-card-v2__description`: `color: rgba(255, 255, 255, 0.75)`
- `.service-card-v2__benefit`: `color: rgba(255, 255, 255, 0.85)`

When placed on a light section, this text is completely invisible.

**Screenshot evidence:** Assets section shows:
- Left card: Title, description, and benefits are all nearly invisible
- Right card (value-card): Displays correctly with dark text

**Fix options:**

**Option A (Recommended):** Change these sections to `section--dark`:
```html
<!-- Line 128: Change from -->
<section class="section section--light" id="assets-cmdb">
<!-- To -->
<section class="section section--dark" id="assets-cmdb">
```

**Option B:** Create CSS overrides for `.service-card-v2` on light backgrounds (more complex, not recommended).

---

### P0-03: Approach page - Second card in Phase 4 renders empty

**Location:** `site/approach/index.html` lines 181-185

**Problem:** The "Handover / Confident ownership" card exists in HTML but renders as a completely empty dark rectangle. The first card in the same row displays correctly.

**Screenshot evidence:** Phase 4 section shows:
- Left card: "Enablement / Training and playbooks" - visible
- Right card: Completely empty dark rectangle - no badge, title, or text visible

**Possible causes:**
1. CSS class conflict
2. Scroll reveal animation not triggering
3. Content clipped or overflowed

**Investigation needed:** Sky should inspect in browser dev tools to determine why content isn't rendering.

---

### P0-04: The "Slytherin Problem" - Inner pages feel cold and unwelcoming

**Problem:** The homepage alternates dark/light sections creating visual rhythm and breathing room. Inner pages are relentlessly dark, creating a cold, unwelcoming atmosphere.

**Section analysis:**

| Page | Section Flow | Feel |
|------|--------------|------|
| Homepage | Dark → Light → Dark → Light → Dark → Light | Balanced, welcoming |
| Services | Dark → Dark → Light(broken) → Dark → Light(broken) → Dark | All dark (broken sections don't help) |
| Approach | Dark → Dark → Dark → Dark → Dark → Light → Dark | 5 consecutive dark = oppressive |
| Articles | Dark throughout, white cards at bottom only | Dungeon-like |
| About | Dark → Dark → Light → Dark | Mostly dark |
| Contact | Dark throughout | Cold |

**The homepage works because:**
- ~50/50 dark/light ratio
- White value-cards on light sections provide warmth
- Visual rhythm creates breathing room

**Inner pages fail because:**
- 70-90% dark content
- No visual relief or rhythm
- Feels like Draco Malfoy's parlour, not a welcoming consultancy

**Fix required:** Restructure inner pages to alternate dark/light sections similar to homepage. Specific recommendations per page provided below.

---

## High Priority Issues (P1)

### P1-01: Article author avatar layout broken

**Location:** All 4 article pages in `.article__author` section

**Problem:** The "AN" initials appear positioned incorrectly - floating above/outside the red avatar circle rather than centered within it.

**Screenshot evidence:** Author card shows "AN" text appearing above the red circle, with layout misaligned.

**CSS to investigate:** `site/css/styles.css` lines 1597-1612 (`.article__author-avatar`)

---

### P1-02: Article related insight cards have empty image placeholders

**Location:** All 4 article pages in `.article__related` section

**Problem:** The insight cards show large grey rectangles where images should be. This looks broken/unfinished.

**Fix options:**
1. Add actual images for each article
2. Remove the image container for a text-only card variant
3. Add a branded placeholder/pattern as background

---

### P1-03: Placeholder links throughout articles

**Location:** All 4 article pages - author sections contain `href="#"` for LinkedIn and Email links.

**Files:**
- `site/insights/the-relay/index.html` lines 270-271, 281-283
- `site/insights/behind-the-build/index.html` lines 230, 257-259
- `site/insights/a-new-beginning/index.html` lines 121, 131-133
- `site/insights/unexpected-friendship/index.html` lines 97, 107-109

**Fix:** Replace with actual URLs:
- LinkedIn: `https://www.linkedin.com/in/andreas-l-a-nyberg/`
- Email: `mailto:hello@lt.solutions`

---

### P1-04: Raw YouTube URL in article

**Location:** `site/insights/unexpected-friendship/index.html` line 77

**Problem:** Bare URL displayed as text: `https://www.youtube.com/watch?v=X36dgBHebjA`

**Fix:** Embed video or convert to proper hyperlink.

---

## Medium Priority Issues (P2)

### P2-01: Glass cards on light backgrounds need colour adjustment

**Location:** Homepage Approach section, potentially other areas

**Problem:** The `.glass-card` component is designed for dark backgrounds (transparent with light border). On light sections, it appears as a light grey card but internal text classes still use light-section-unfriendly colours.

---

### P2-02: Inconsistent section-tag visibility

**Problem:** The `.section-tag` (e.g., "OUR APPROACH", "Phase 1") uses red text on a semi-transparent red background. On light sections, this can be hard to read.

---

### P2-03: Duplicate author content in articles

**Location:** All articles have "About the Author" both inline in content AND in the `article__author` component.

**Fix:** Remove the inline version, keep only the styled component.

---

## Page-by-Page Recommendations for Sky

### Homepage (`site/index.html`)

**Current state:** Structure good, one critical fix needed.

**Required fix:**
- P0-01: Fix `.phase-card__text` colour for light sections

---

### Services (`site/services/index.html`)

**Current state:** Broken - two sections unreadable.

**Required fixes:**
1. Change line 128 from `section--light` to `section--dark`
2. Change line 226 from `section--light` to `section--dark`
3. Alternatively, replace `.service-card-v2` with `.value-card` components on light sections

**Visual rhythm after fix:** Dark → Dark → Dark → Dark → Dark → Dark (still all dark - consider adding light sections for balance)

---

### Approach (`site/approach/index.html`)

**Current state:** Oppressively dark, one card not rendering.

**Required fixes:**
1. P0-03: Debug why Phase 4 second card isn't rendering
2. Consider alternating phase sections: Dark → Light → Dark → Light
3. Or use a different visual treatment (timeline, connected cards)

**Recommended structure:**
```
Page Hero (dark)
Phase 1 - section--dark
Phase 2 - section--light (with adjusted card colours)
Phase 3 - section--dark
Phase 4 - section--light (with adjusted card colours)
Principles - section--light (keep)
CTA - section--dark (keep)
```

---

### About (`site/about/index.html`)

**Current state:** Mostly dark but functional.

**Recommendations:**
- Consider making "About Andreas" section light with value-cards
- Creates better balance with the "Company" section already light

---

### Contact (`site/contact/index.html`)

**Current state:** All dark, functional but cold.

**Recommendations:**
- Consider adding a light "What to expect" section
- Or add testimonials/trust signals in a light section

---

### Insights Listing (`site/insights/index.html`)

**Current state:** Mostly dark with white insight cards - works reasonably well.

**No critical changes needed** - the white insight cards provide visual relief.

---

### Article Pages

**Current state:** Dark throughout with broken components.

**Required fixes:**
1. P1-01: Fix author avatar layout
2. P1-02: Add images or remove image containers
3. P1-03: Fix placeholder links
4. P1-04: Fix YouTube URL (unexpected-friendship only)
5. P2-03: Remove duplicate author sections

**Consider:** Adding a light section break mid-article for very long content.

---

### Privacy & Legal Pages

**Current state:** Functional, appropriate for legal content.

**No changes required.**

---

## CSS Changes Summary for Sky

### Critical CSS fixes needed in `site/css/styles.css`:

```css
/* P0-01: Fix phase card text on light sections */
.section--light .phase-card__text {
  color: var(--color-neutral-900);
}

/* Also fix phase card badge if needed */
.section--light .phase-card__badge {
  background: rgba(196, 30, 58, 0.15);
  color: var(--color-red);
}

/* P1-01: Fix author avatar - needs investigation */
.article__author-avatar {
  /* Verify flexbox centering is working */
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### HTML changes needed:

1. `site/services/index.html` - Change lines 128 and 226 from `section--light` to `section--dark`
2. All article pages - Replace `href="#"` with actual URLs
3. `site/insights/unexpected-friendship/index.html` line 77 - Fix YouTube URL

---

## Conclusion

The site cannot launch with the current P0 issues. Users literally cannot read key content on the homepage and services page. The contrast failures are severe enough to affect conversion and accessibility compliance.

**Priority order for fixes:**
1. P0-01: Homepage phase card text (quick CSS fix)
2. P0-02: Services page section backgrounds (HTML change)
3. P0-03: Approach page missing card content (investigation needed)
4. P0-04: Consider visual rhythm improvements (structural)
5. P1 issues: Author cards, images, links

**Estimated effort:** P0 fixes are 1-2 hours of work. P1 issues add another 1-2 hours. Visual rhythm improvements (P0-04) require more planning.

---

*Review completed 25 January 2026*
