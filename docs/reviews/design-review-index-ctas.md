# Design Review: Homepage CTAs and Approach Section

**Reviewer:** Design Expert Agent
**Date:** 4 February 2026
**Page:** `site/index.html`
**Status:** Ready for implementation

---

## Executive Summary

This review addresses four design concerns Andreas has identified on the homepage:

1. Hero CTAs feel too loud/aggressive
2. Service pillar CTAs use gradient-coloured buttons that clash with the design system
3. Approach section phase cards look dated
4. Other CTAs further down the page need similar treatment

After reviewing the mockups and the current implementation, I recommend a cohesive treatment that aligns with the "Confident Minimalism" brand philosophy.

---

## 1. Hero CTAs

### Current State

The hero currently uses:
- Primary CTA: `btn btn--primary btn--lg` (red gradient fill with glow/shadow)
- Secondary CTA: `btn btn--secondary btn--lg` (outlined, fills red on hover)

The gradient background, box-shadow glow, and animated shine effect create a "loud" impression that competes with the hero headline rather than supporting it.

### Mockup Options Reviewed

| Option | Primary | Secondary | Notes |
|--------|---------|-----------|-------|
| A (Recommended) | Flat solid red | Ghost red outline | Clear hierarchy, both on-brand |
| B | Flat solid red | Neutral grey outline | Maximum focus on primary |
| C | Single bold CTA | None | Confident, but removes secondary path |
| D | White primary | Grey text link | High contrast, editorial feel |
| E | Red with arrow badge | Ghost red outline | Adds momentum, touch of personality |

### My Recommendation: Option A with refinements

**Adopt Option A** (flat solid + ghost outline) with these specific adjustments:

**Primary CTA ("Book a short call"):**
- Flat solid red background (`--color-red: #C41E3A`)
- No gradient fill
- Remove the shine animation (`::before` pseudo-element)
- Reduce shadow from `0 4px 12px rgba(196, 30, 58, 0.2)` to `0 2px 8px rgba(196, 30, 58, 0.15)`
- Keep subtle lift on hover (`translateY(-2px)`)
- Maintain 2px border (same colour as background for consistent sizing)

**Secondary CTA ("View our approach"):**
- Transparent background
- 1px border in subtle red: `rgba(196, 30, 58, 0.35)`
- Text colour: `--color-red`
- On hover: background fills with `rgba(196, 30, 58, 0.08)`, border strengthens to `--color-red`
- No fill-to-solid transformation (too dramatic)

### Rationale

- **Option A** maintains clear visual hierarchy without being aggressive
- The ghost outline keeps the secondary action visible but subordinate
- Removing gradients and animated shine aligns with "Confident Minimalism"
- Enterprise buyers respond better to understated confidence than flashy effects
- Both buttons remain clearly actionable without competing with the headline

### CSS Changes Required

Create new modifier classes or update existing:

```
.btn--primary-flat (or modify .btn--primary)
.btn--ghost-subtle (or modify .btn--secondary for hero context)
```

The implementation should:
1. Remove `background: linear-gradient()` from primary
2. Remove `::before` shine animation
3. Reduce shadow intensity
4. Soften secondary border colour

---

## 2. Service Pillar CTAs

### Current State

Each service card uses:
```html
<a class="service-card-v2__cta" href="...">Learn more</a>
```

Styled with:
- `background: linear-gradient(135deg, var(--color-red), var(--color-atlassian-blue))`
- Rounded pill shape
- White text

This gradient treatment is inconsistent with the design system and creates visual noise when repeated four times in a grid.

### Mockup Options Reviewed

| Option | Style | Notes |
|--------|-------|-------|
| A | Text link with arrow | Quiet, confident, professional |
| B | Ghost outline button | More prominent, still subtle |

### My Recommendation: Option A (Text link with arrow)

**Use a simple text link with animated arrow:**

```
Learn more ->
```

**Styling:**
- Font size: `0.95rem` (slightly larger than current text for tappability)
- Font weight: `500` (medium)
- Colour: `rgba(255, 255, 255, 0.75)` at rest
- Hover: `rgba(255, 255, 255, 0.95)` with arrow shifting right 4-5px
- No background, no border
- Arrow uses CSS `::after` pseudo-element

### Rationale

- Service cards already have strong visual presence (icon, badge, title, description, benefit list)
- Adding prominent CTAs creates visual clutter
- Text links maintain scannability without adding weight
- The animated arrow provides clear affordance that this is interactive
- Aligns with B2B consultancy conventions (understated professionalism)
- Andreas explicitly prefers this option

### CSS Changes Required

Replace `.service-card-v2__cta` styling:

```css
.service-card-v2__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  transition: color 0.2s ease;
}

.service-card-v2__cta::after {
  content: '\2192'; /* right arrow */
  transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
}

.service-card-v2__cta:hover {
  color: rgba(255, 255, 255, 0.95);
}

.service-card-v2__cta:hover::after {
  transform: translateX(5px);
}
```

---

## 3. Approach Section (Phase Cards)

### Current State

The approach section uses a 4-column grid of glass cards:

```html
<div class="grid grid--4">
  <a href="/approach/#..." class="glass-card phase-card reveal">
    <span class="phase-card__badge">Phase 1</span>
    <h3 class="phase-card__title">Discovery & diagnosis</h3>
    <p class="phase-card__text">...</p>
  </a>
  <!-- ... 3 more cards -->
</div>
```

This is on a light section (`section--light`) but glass cards were designed for dark backgrounds. The result looks dated and lacks visual coherence.

### Mockup Analysis

The mockup (`approach-light.html`) proposes:
- Horizontal timeline with connecting line
- Phase dots that animate on hover (fill with red)
- Hover state reveals subtle card background
- Animated line that "grows" across on page load
- Phase numbers as "01", "02", etc. instead of "Phase 1"
- Mobile: vertical timeline with dots on left

**Andreas's note:** "the line break needs to be widened to expand the whole length of screen"

### My Recommendation: Implement timeline design with full-width line

**Adopt the mockup design with these specifications:**

**Timeline Container:**
- Full-width connecting line (edge to edge within container, not constrained to card centres)
- Line colour: `var(--color-neutral-300)` or `#e4e2dc`
- Line height: 1px
- Line position: aligned to centre of phase dots (approximately 28px from top of phase items)
- Animated accent overlay on the line (grows from left to right on scroll reveal)

**Phase Dots:**
- Size: 16px diameter
- Border: 2px solid, colour matches line
- Background: matches section background (`var(--bg-mist)`)
- Hover: border turns red, gains subtle glow (`0 0 0 4px rgba(196, 30, 58, 0.12)`)
- Hover: inner dot fills with red (animated scale from 0)

**Phase Content:**
- Phase number: "01", "02", etc. (tabular numerals, muted colour)
- Title: current styling is fine
- Description: current styling is fine
- Hover: optional subtle background reveal (white card with soft shadow)

**Full-Width Line Implementation:**

To address Andreas's note about the line spanning "the whole length of screen", the connecting line should:
- Extend to the edges of the `.container` (1140px max)
- On desktop: run from left edge of first phase to right edge of last phase
- Use CSS pseudo-element on `.timeline` container positioned with `left: 0` and `right: 0`

**Mobile (below 768px):**
- Stack phases vertically
- Vertical line on left side
- Dots position on the line
- Content to the right of dots

### Rationale

- Timeline metaphor communicates the sequential nature of the framework
- Visual connection between phases reinforces the holistic approach
- Hover interactions reward exploration without being distracting
- Phase numbers ("01") feel more modern than "Phase 1" badges
- Maintains "Confident Minimalism" with subtle, purposeful animation
- Full-width line creates visual grounding and professional finish

### HTML Changes Required

Replace the grid structure with timeline markup:

```html
<div class="approach-timeline">
  <div class="approach-phase">
    <div class="approach-phase__dot"></div>
    <a href="/approach/#discovery-diagnosis" class="approach-phase__content">
      <span class="approach-phase__number">01</span>
      <h3 class="approach-phase__title">Discovery & diagnosis</h3>
      <p class="approach-phase__text">Understand context, pain points, and success criteria.</p>
    </a>
  </div>
  <!-- ... 3 more phases -->
</div>
```

### CSS Required

New component: `.approach-timeline` with:
- Grid layout (4 columns on desktop)
- `::before` for base line
- `::after` for animated accent line (optional, can be done with JS intersection observer)
- Responsive vertical layout for mobile

---

## 4. Other CTAs on the Page

### Locations Identified

1. **Services section footer:** `<a href="/services/" class="btn btn--secondary btn--lg">Explore all services</a>`
2. **Approach section footer:** `<a href="/approach/" class="btn btn--primary btn--lg">Explore the full framework</a>`
3. **Final CTA section:** Two buttons matching hero CTAs

### Current Issues

- "Explore all services" uses secondary button (outlined red) - acceptable but could be softer
- "Explore the full framework" uses primary button (gradient red) - too prominent for this context
- Final CTA section duplicates hero treatment - should match updated hero

### My Recommendation

**Services section footer:**
- Change to text link with arrow (consistent with card CTAs)
- Style: `Learn more ->` pattern but with slightly larger text
- Centred alignment

**Approach section footer:**
- Change to text link with arrow (consistent with section's "explore" intent)
- This is not the primary conversion action; it's a secondary exploration path
- Text: "Explore the full framework ->"

**Final CTA section:**
- Apply same treatment as hero CTAs (flat primary + ghost secondary)
- This is the primary conversion point at page bottom
- Maintain button format for clear call-to-action

### Implementation

For text link sections, create a utility class:

```css
.link-arrow {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-neutral-600);
  text-decoration: none;
  transition: color 0.2s ease;
}

.link-arrow::after {
  content: '\2192';
  transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
}

.link-arrow:hover {
  color: var(--color-neutral-900);
}

.link-arrow:hover::after {
  transform: translateX(5px);
}
```

For light sections, adjust colours accordingly.

---

## 5. Additional Issues Identified

While reviewing the homepage, I identified these additional items that should be addressed:

### 5.1 Hero Trust Badges

**Issue:** The trust badges below hero CTAs use a pill/tag style that feels disconnected.

**Recommendation:** These are fine but could use slightly reduced visual weight:
- Reduce border opacity from `rgba(255, 255, 255, 0.15)` to `rgba(255, 255, 255, 0.1)`
- Consider removing background entirely (just text with subtle dividers)

**Priority:** Low (optional refinement)

### 5.2 Section Tag Consistency

**Issue:** Section tags (e.g., "Problems We Solve", "Service Pillars") use inconsistent visual treatment across light/dark sections.

**Current:** On dark sections, tags have white text on transparent red background. On light sections, tags have red text on light red background.

**Recommendation:** This is working correctly. No change needed.

### 5.3 Value Cards (Problems We Solve Section)

**Issue:** The value cards have elaborate hover animations (lift, gradient border grow, icon scale) that feel over-designed compared to the proposed subtle approach elsewhere.

**Recommendation:** Simplify hover state:
- Keep lift (`translateY(-4px)`)
- Keep shadow increase
- Remove animated gradient borders (`::before`, `::after` width animations)
- Keep icon subtle scale (or remove)

**Priority:** Medium (consistency with overall simplification)

### 5.4 Stat Cards (Proof Section)

**Issue:** Stat cards are on white backgrounds within a dark section, creating strong contrast blocks.

**Recommendation:** This is working as intended (creates visual interest and emphasises the stats). No change needed.

### 5.5 Proof Notes Section

**Issue:** The three proof notes at the bottom of the Proof section have adequate styling but could benefit from subtle hover states.

**Recommendation:** Add subtle hover:
- Background shift from `rgba(255, 255, 255, 0.06)` to `rgba(255, 255, 255, 0.08)`
- Border shift from `rgba(255, 255, 255, 0.15)` to `rgba(255, 255, 255, 0.2)`

**Priority:** Low (polish item)

---

## Implementation Priority

| Item | Priority | Complexity | Impact |
|------|----------|------------|--------|
| Hero CTAs | High | Low | High - first thing visitors see |
| Service Pillar CTAs | High | Low | High - repeated 4x, currently jarring |
| Approach Timeline | High | Medium | High - major visual improvement |
| Approach Section CTA | Medium | Low | Medium - consistency |
| Services Section CTA | Medium | Low | Medium - consistency |
| Final CTA Section | Medium | Low | Medium - matches hero |
| Value Card Simplification | Low | Low | Low - refinement |
| Proof Notes Hover | Low | Low | Low - polish |

---

## Summary of Changes

### CSS Changes

1. **Button System:**
   - Add/modify `.btn--primary` to remove gradient and shine
   - Add/modify `.btn--secondary` for ghost treatment
   - Create `.link-arrow` utility for text link CTAs

2. **Service Cards:**
   - Replace `.service-card-v2__cta` styling entirely

3. **Approach Section:**
   - Create new `.approach-timeline` component
   - Remove `.grid--4` usage for this section

4. **Value Cards (optional):**
   - Simplify hover animations

### HTML Changes

1. **Approach Section:**
   - Replace grid structure with timeline markup
   - Update phase number format ("Phase 1" -> "01")

2. **Section CTAs:**
   - Update Services section footer to text link
   - Update Approach section footer to text link
   - Keep Final CTA section as buttons (but with new styling)

---

## Design Rationale Summary

All recommendations align with the **"Confident Minimalism"** design philosophy:

- **Confident:** Clear CTAs that don't apologise for asking for action
- **Minimal:** Removed visual noise (gradients, animated effects, heavy shadows)
- **Professional:** Enterprise-appropriate subtlety
- **Functional:** Clear hierarchy, obvious interactivity

The proposed changes reduce cognitive load while maintaining clear conversion paths. Enterprise buyers visiting the site will encounter a professional, understated experience that builds trust through restraint rather than flash.

---

*End of design review*
