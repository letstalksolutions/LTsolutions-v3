# Enhanced Service Offering Card Component

**Version:** 1.0
**Design System:** LT.Solutions v2
**Prefix:** `claude-v2-`

---

## Overview

The Enhanced Service Offering Card is a premium component designed for showcasing service offerings to enterprise IT decision-makers evaluating Atlassian consultants. It builds upon the existing `.service-card` pattern while adding more depth, structure, and sophisticated interactions.

**Target Audience:** Enterprise IT decision-makers
**Style:** Professional, trustworthy, sophisticated - not flashy

---

## Files

| File | Purpose |
|------|---------|
| `claude-v2-service-card-enhanced.css` | All component styles |
| `claude-v2-service-card-enhanced.html` | HTML structure and usage examples |
| `claude-v2-service-card-enhanced-docs.md` | This documentation |

---

## Features

### Content Structure
- **Icon/Visual Element:** 64x64px container with branded gradient background
- **Category Badge:** Numbered label (e.g., "01 Foundation")
- **Service Title:** Bold heading (Space Grotesk)
- **Description:** 2-3 sentence overview
- **Benefits List:** 3-4 key benefit points with checkmark icons
- **CTA Button:** Full-width action button with hover fill effect

### Visual Design
- Glass morphism effect on dark backgrounds
- Animated gradient border (top edge) on hover
- Subtle inner glow that fades on hover
- Trust green (#00875A) checkmarks for benefits
- Consistent with "Confident Minimalism" philosophy

### Interactions
- **Card hover:** 8px lift, gradient border animation, enhanced shadow
- **Icon hover:** Scale and glow effect
- **CTA hover:** Background fill animation, arrow slides right
- **Benefit icons:** Subtle scale on card hover

---

## Usage

### Basic HTML Structure

```html
<article class="service-card-enhanced reveal">
  <div class="service-card-enhanced__header">
    <!-- Icon -->
    <div class="service-card-enhanced__icon" aria-hidden="true">
      <svg><!-- Icon SVG --></svg>
    </div>
    <!-- Header Content -->
    <div class="service-card-enhanced__header-content">
      <div class="service-card-enhanced__category">
        <span class="service-card-enhanced__number">01</span>
        Category Name
      </div>
      <h3 class="service-card-enhanced__title">Service Title</h3>
    </div>
  </div>

  <!-- Description -->
  <p class="service-card-enhanced__description">
    Service description spanning 2-3 sentences.
  </p>

  <!-- Benefits List -->
  <ul class="service-card-enhanced__benefits" aria-label="Key benefits">
    <li class="service-card-enhanced__benefit">
      <span class="service-card-enhanced__benefit-icon" aria-hidden="true">
        <svg><!-- Checkmark --></svg>
      </span>
      <p class="service-card-enhanced__benefit-text">Benefit point text</p>
    </li>
    <!-- Repeat for 3-4 benefits -->
  </ul>

  <!-- CTA Button -->
  <a href="/services/..." class="service-card-enhanced__cta">
    Learn More
    <svg class="service-card-enhanced__cta-icon"><!-- Arrow --></svg>
  </a>
</article>
```

### Grid Layout

Use the existing grid system:

```html
<div class="grid grid--3">
  <article class="service-card-enhanced reveal">...</article>
  <article class="service-card-enhanced reveal">...</article>
  <article class="service-card-enhanced reveal">...</article>
</div>
```

### Dark vs Light Sections

The component automatically adapts:

```html
<!-- Dark background (default) -->
<section class="section section--dark">
  <article class="service-card-enhanced">...</article>
</section>

<!-- Light background (auto-styled) -->
<section class="section section--light">
  <article class="service-card-enhanced">...</article>
</section>
```

---

## Integration

### CSS Import

Add after `styles-unified.css`:

```html
<link href="css/styles-unified.css" rel="stylesheet">
<link href="Components/claude-v2-service-card-enhanced.css" rel="stylesheet">
```

Or in production, merge into the main stylesheet (section 5: Card Components).

### Required Dependencies
- `styles-unified.css` - Design tokens and base styles
- Google Fonts: Inter, Space Grotesk

### Scroll Reveal

Add the `reveal` class for animation support:

```html
<article class="service-card-enhanced reveal">
```

Requires the existing Intersection Observer script from `index-unified.html`.

---

## Design Decisions

### Why Glass Morphism?
Maintains visual consistency with the existing `.service-card` while providing a more premium feel through subtle layering and depth.

### Why Full-Width CTA?
Enterprise decision-makers expect clear action paths. A full-width button removes ambiguity and increases click target size.

### Why Green Checkmarks?
Using `--color-trust-green` (#00875A) for benefits signals positive outcomes and builds trust - a key factor for enterprise buyers.

### Why Animated Top Border?
The gradient border animation (red to blue) reinforces the brand colors while providing satisfying visual feedback without being flashy.

### Content Hierarchy
1. **Icon + Number** - Quick visual anchor
2. **Title** - Immediate comprehension of service
3. **Description** - Context and value proposition
4. **Benefits** - Scannable proof points
5. **CTA** - Clear next step

---

## Accessibility

- Semantic HTML (`<article>`, `<ul>`, `<h3>`)
- `aria-hidden="true"` on decorative icons
- `aria-label` on benefits list
- Focus-visible states for keyboard navigation
- Sufficient color contrast (WCAG AA compliant)
- `prefers-reduced-motion` support

---

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (768px+) | Side-by-side icon and header |
| Mobile (<768px) | Stacked icon above header, reduced padding |

---

## CSS Custom Properties Used

```css
/* Colors */
--color-red: #C41E3A
--color-atlassian-blue: #0052CC
--color-trust-green: #00875A
--color-white: #FFFFFF
--color-neutral-* (50-900)

/* Spacing */
--space-2 through --space-8

/* Typography */
--font-heading: Space Grotesk
--font-body: Inter
--text-xs through --text-2xl

/* Effects */
--radius-sm, --radius-lg, --radius-2xl
--shadow-sm through --shadow-xl
--transition-base, --transition-slower
--blur-lg
```

---

## Comparison with Original `.service-card`

| Feature | Original | Enhanced |
|---------|----------|----------|
| Icon | None | 64x64 with gradient background |
| Description | Short | Longer (2-3 sentences) |
| Benefits | None | 3-4 points with icons |
| CTA | Text link | Full-width button |
| Hover lift | 6px | 8px |
| Light theme | Not supported | Fully supported |
| Accessibility | Basic | Comprehensive |

---

## Future Considerations

- **Pricing Tier Variant:** Add optional price badge
- **Featured State:** Highlighted border/background for promoted services
- **Loading State:** Skeleton placeholder for async content
- **Compact Variant:** Reduced padding for dense layouts

---

## Changelog

### v1.0 (2026-01-17)
- Initial component creation
- Dark and light section support
- Responsive layout
- Accessibility features
- Reduced motion support
