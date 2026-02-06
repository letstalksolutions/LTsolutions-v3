# Design Review: Hero Section Redesign

**Reviewer:** Design Expert Agent
**Date:** 4 February 2026
**Scope:** Homepage hero CTAs and hero glow animation
**Status:** Ready for implementation

---

## Executive Summary

Andreas has reviewed the current hero implementation and provided clear feedback:

1. **CTAs:** "They are not nice. They need to change." The flat red + ghost red treatment didn't land.
2. **Glow:** "Too narrow" - needs to be more like the inner pages but currently doesn't work well.

This document proposes new design concepts that align with "Confident Minimalism" - the brand philosophy of enterprise credibility combined with human approachability.

---

## Part 1: Hero CTA Concepts

### Current State (Rejected)

```
Primary:   btn--primary (flat solid red #C41E3A)
Secondary: btn--secondary (ghost with rgba(196, 30, 58, 0.35) border)
```

This approach was implemented based on earlier recommendations but doesn't achieve the desired aesthetic. The red buttons feel promotional rather than confident, and the ghost secondary lacks visual presence on the dark hero background.

### Design Direction

Looking at the mockups Andreas provided (`hero-cta-mockups.html`), Options C and D offer the most promising direction:

- **Option C:** Single bold CTA - "All focus, no distraction. Confident and clean."
- **Option D:** White primary + text link secondary - "High contrast hero, editorial feel."

Both align with "Confident Minimalism" by reducing visual noise and letting the message speak.

---

## Concept A: White Primary + Text Link (Recommended)

**Philosophy:** High-contrast editorial approach. The white button commands attention without shouting; the text link provides a secondary path without competing.

### Primary CTA: "Book a short call"

| Property | Value |
|----------|-------|
| Background | `#f0f0f2` (off-white, softer than pure white) |
| Text colour | `#0c0f14` (dark navy from hero background) |
| Border | None |
| Border radius | `8px` |
| Padding | `0.75rem 1.75rem` |
| Font size | `0.9rem` |
| Font weight | `600` |
| Letter spacing | `-0.01em` |

**Hover state:**
- Background: `#ffffff` (pure white)
- Transform: `translateY(-2px)`
- Box-shadow: `0 6px 24px rgba(255, 255, 255, 0.12)`

**Active state:**
- Transform: `translateY(0)`

### Secondary CTA: "View our approach"

| Property | Value |
|----------|-------|
| Background | None |
| Text colour | `rgba(255, 255, 255, 0.65)` (muted white) |
| Border | None |
| Padding | `0.75rem 0.5rem` |
| Font size | `0.9rem` |
| Font weight | `500` |

**Hover state:**
- Text colour: `#f0f0f2` (bright white)
- Arrow (`::after`): `transform: translateX(4px)`

**Arrow treatment:**
```css
.hero-cta-text::after {
  content: '\2192'; /* right arrow */
  margin-left: 0.35rem;
  display: inline-block;
  transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
}
```

### Rationale

- **White on dark is universally confident.** It doesn't rely on brand colour to create urgency.
- **Text links feel editorial.** They suggest "there's more to explore" without demanding attention.
- **Enterprise-appropriate.** Senior IT buyers are accustomed to understated CTAs on premium consultancy sites.
- **Reduces red fatigue.** The site uses red as brand accent; having it everywhere (hero glow, CTAs, tags) creates visual monotony.
- **Clear hierarchy.** Primary action is unmistakable; secondary is available but subordinate.

---

## Concept B: Single Confident CTA

**Philosophy:** Radical simplicity. One action, no distractions. Communicates supreme confidence.

### Primary CTA: "Book a short call"

| Property | Value |
|----------|-------|
| Background | `#f0f0f2` (off-white) |
| Text colour | `#0c0f14` (dark navy) |
| Border | None |
| Border radius | `10px` (slightly softer) |
| Padding | `0.9rem 2.5rem` (larger for prominence) |
| Font size | `0.95rem` |
| Font weight | `600` |
| Letter spacing | `-0.01em` |

**Hover state:**
- Background: `#ffffff`
- Transform: `translateY(-2px)`
- Box-shadow: `0 8px 30px rgba(255, 255, 255, 0.12)`

### No Secondary CTA

The navigation, hero subtitle, and page content provide the "View our approach" path. The hero's job is conversion.

### Rationale

- **Forces clarity.** If there's only one action, it must be the right one.
- **Reduces cognitive load.** Visitors don't have to choose.
- **Signals confidence.** LT.Solutions knows what it offers; no hedge.
- **Works well on mobile.** Single CTA scales cleanly.

**Consideration:** This approach may feel too aggressive for visitors who want to learn before committing. Use with caution.

---

## Concept C: Minimal Pill Outline

**Philosophy:** Subtle, understated confidence. Buttons present but don't dominate.

### Primary CTA: "Book a short call"

| Property | Value |
|----------|-------|
| Background | Transparent |
| Text colour | `#f0f0f2` (white) |
| Border | `1px solid rgba(255, 255, 255, 0.35)` |
| Border radius | `24px` (pill shape) |
| Padding | `0.7rem 1.5rem` |
| Font size | `0.88rem` |
| Font weight | `500` |

**Hover state:**
- Background: `rgba(255, 255, 255, 0.06)`
- Border: `1px solid rgba(255, 255, 255, 0.6)`
- Transform: `translateY(-2px)`

### Secondary CTA: "View our approach"

Same as Concept A - text link with arrow.

### Rationale

- **Extremely minimal.** Buttons are present but recede into the hero.
- **Emphasises content over chrome.** The headline does the selling.
- **Risk:** May be too subtle. Primary CTA could get lost.

---

## My Recommendation: Concept A

**Implement Concept A (White Primary + Text Link)** for these reasons:

1. **Tested pattern:** This mirrors successful high-end consultancy sites (McKinsey, Deloitte Digital, Thoughtworks).
2. **Clear hierarchy:** Unmistakable primary action with graceful secondary path.
3. **Breaks red monotony:** White CTA stands out against hero glow and doesn't compete with brand accent.
4. **Professional restraint:** Enterprise buyers respond to understated confidence.
5. **Andreas's direction:** Option D in the mockups aligns closely with this approach.

### Implementation Notes for Code Agent

**New CSS class or modifier required:**

```css
/* Hero white primary button */
.btn--hero-primary {
  display: inline-block;
  padding: 0.75rem 1.75rem;
  border-radius: 8px;
  border: none;
  background: #f0f0f2;
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #0c0f14;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
}

.btn--hero-primary:hover {
  background: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(255, 255, 255, 0.12);
}

.btn--hero-primary:active {
  transform: translateY(0);
}

/* Hero text link secondary */
.hero-link-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: none;
  border: none;
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  cursor: pointer;
  padding: 0.75rem 0.5rem;
  transition: color 0.2s ease;
}

.hero-link-secondary::after {
  content: '\2192';
  display: inline-block;
  transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
}

.hero-link-secondary:hover {
  color: #f0f0f2;
}

.hero-link-secondary:hover::after {
  transform: translateX(4px);
}
```

**HTML change:**

From:
```html
<div class="hero__cta">
  <a href="/contact/" class="btn btn--primary btn--lg">Book a short call</a>
  <a href="/approach/" class="btn btn--secondary btn--lg">View our approach</a>
</div>
```

To:
```html
<div class="hero__cta">
  <a href="/contact/" class="btn--hero-primary">Book a short call</a>
  <a href="/approach/" class="hero-link-secondary">View our approach</a>
</div>
```

---

## Part 2: Hero Glow Redesign

### Current State (Problem)

The homepage hero uses this glow configuration:

```css
.hero::before {
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle at center,
    rgba(196, 30, 58, 0.15) 0%,
    transparent 50%
  );
  animation: rotate 30s linear infinite;
}

.hero::after {
  top: -60%;
  left: -60%;
  width: 220%;
  height: 220%;
  background: radial-gradient(
    ellipse at center,
    rgba(11, 23, 40, 0.08) 0%,
    rgba(100, 20, 40, 0.05) 30%,
    transparent 60%
  );
  animation: rotateReverse 45s linear infinite;
}
```

**Issues identified:**

1. **Glow is "too narrow"** - The gradient fades to transparent at 50%, creating a tight bright core.
2. **Rotation feels restless** - Two counter-rotating elements create subtle but distracting visual movement.
3. **Doesn't match inner pages** - The `.page-hero` style was described as "tighter" and working well, but the homepage hero doesn't follow the same pattern successfully.

### Analysis: Inner Page Glow vs Homepage Glow

Looking at the CSS, both use identical percentage configurations:

| Element | Homepage (.hero) | Inner Pages (.page-hero) |
|---------|------------------|--------------------------|
| Primary glow | `200%` size, `50%` fade | `200%` size, `50%` fade |
| Undertone | `220%` size, `60%` fade | `220%` size, `65%` fade |
| Colour | Red (hardcoded) | Varies per page (CSS variable) |

The technical implementation is similar. The perceived difference may come from:

1. **Hero height:** Homepage hero is taller (`--space-20` padding), making the glow look smaller relative to content.
2. **Colour intensity:** Inner pages use varied colours (blue, green, amber) at similar opacity; red may feel more intense.
3. **Content density:** Homepage hero has more text, trust badges - drawing eye away from glow subtlety.

### Proposed Solution

Instead of making the glow "wider" (which risks overwhelming), the solution is to make it **softer and more ambient** - a gentle atmospheric wash rather than a spotlight.

### Hero Glow Concept: Soft Ambient Wash

**Philosophy:** The glow should feel like environmental lighting, not a deliberate effect. It creates warmth without drawing attention to itself.

**Primary glow layer (`::before`):**

| Property | Current | Proposed |
|----------|---------|----------|
| Size | `200%` | `250%` |
| Position offset | `-50%` | `-75%` |
| Gradient fade | `transparent 50%` | `transparent 70%` |
| Colour | `rgba(196, 30, 58, 0.15)` | `rgba(180, 40, 60, 0.08)` |
| Animation | 30s rotate | **Remove animation** or slow to 120s |

**Undertone layer (`::after`):**

| Property | Current | Proposed |
|----------|---------|----------|
| Size | `220%` | `280%` |
| Position offset | `-60%` | `-90%` |
| Gradient | Complex 3-stop | Simplified 2-stop |
| Colour | Red-tinted | **Navy-tinted** (brand alignment) |
| Animation | 45s rotateReverse | **Remove** |

### Proposed CSS

```css
.hero {
  position: relative;
  padding: var(--space-20) 0 var(--space-16);
  text-align: center;
  overflow: hidden;
}

/* Primary ambient glow - soft, static, atmospheric */
.hero::before {
  content: '';
  position: absolute;
  top: -75%;
  left: -75%;
  width: 250%;
  height: 250%;
  background: radial-gradient(
    ellipse 70% 50% at 50% 40%,
    rgba(180, 40, 60, 0.08) 0%,
    rgba(180, 40, 60, 0.03) 40%,
    transparent 70%
  );
  pointer-events: none;
}

/* Undertone layer - navy wash for depth */
.hero::after {
  content: '';
  position: absolute;
  top: -90%;
  left: -90%;
  width: 280%;
  height: 280%;
  background: radial-gradient(
    ellipse 60% 40% at 50% 30%,
    rgba(11, 23, 40, 0.15) 0%,
    transparent 60%
  );
  pointer-events: none;
}

.hero__content {
  position: relative;
  z-index: 1;
}
```

### Alternative: Slow Subtle Animation

If Andreas prefers to retain animation (for continuity with inner pages), use this modification:

```css
.hero::before {
  /* ... same as above ... */
  animation: gentleDrift 180s ease-in-out infinite;
}

@keyframes gentleDrift {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(3%, 2%); }
}
```

This creates a barely perceptible drift rather than rotation - feels alive without being distracting.

### Colour Consideration

The current homepage glow uses red (`rgba(196, 30, 58, 0.15)`). Given that:

1. The CTAs are moving away from red (white buttons)
2. The section tags already use red
3. The brand red is an accent, not a primary

**Consider:** A warmer, less saturated tone:

```css
/* Option 1: Warmer red (less blue undertone) */
rgba(180, 50, 50, 0.08)

/* Option 2: Amber-red (warmer still) */
rgba(200, 80, 50, 0.06)

/* Option 3: Keep red but reduce saturation */
rgba(160, 60, 70, 0.08)
```

The exact colour should be tested in browser. The goal is "warm glow" not "red spotlight".

---

## Summary of Recommendations

### Hero CTAs

| Decision | Recommendation |
|----------|---------------|
| Approach | **Concept A:** White primary + text link secondary |
| Primary button | Off-white (`#f0f0f2`) background, dark text |
| Secondary | Text link with arrow, muted white text |
| Sizing | Slightly smaller than current (0.9rem vs current --text-lg) |

### Hero Glow

| Decision | Recommendation |
|----------|---------------|
| Size | Larger (250%+) for softer diffusion |
| Intensity | Reduced opacity (0.08 vs 0.15) |
| Animation | **Remove** or slow dramatically (180s drift) |
| Shape | Ellipse positioned slightly above centre |
| Colour | Warmer red or amber-red tint |

---

## Implementation Checklist for Code Agent

### Phase 1: Hero CTAs
- [ ] Create `.btn--hero-primary` class in styles.css
- [ ] Create `.hero-link-secondary` class in styles.css
- [ ] Update hero CTA markup in index.html
- [ ] Test hover states
- [ ] Verify mobile responsiveness

### Phase 2: Hero Glow
- [ ] Update `.hero::before` gradient and sizing
- [ ] Update `.hero::after` gradient and sizing
- [ ] Remove or dramatically slow animation
- [ ] Test visual balance with new CTAs
- [ ] Compare against inner page glows for consistency

### Phase 3: Validation
- [ ] Review full hero on desktop (1440px)
- [ ] Review full hero on tablet (768px)
- [ ] Review full hero on mobile (375px)
- [ ] Check CTA contrast (WCAG AA)
- [ ] Get Andreas feedback before deploying

---

## Design Rationale Summary

These recommendations embody **"Confident Minimalism"**:

- **Confident:** White CTA is bold without being loud. No apologies, no hedging.
- **Minimal:** Reduced glow intensity, simpler animation (or none), text link secondary.
- **Enterprise credible:** Understated palette, professional typography, no flashy effects.
- **Human approachable:** Warm glow, soft transitions, clear guidance.

The hero should feel like an invitation, not a sales pitch. These changes achieve that balance.

---

*End of design review*
