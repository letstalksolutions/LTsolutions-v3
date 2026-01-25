# Hybrid Service Card with Flip Animation

## Overview

A compact, interactive service card that keeps the front face minimal while revealing detailed benefits on the back through a smooth 3D flip animation. Designed to solve the "A4 paper" problem - cards stay compact but provide depth when needed.

**Design Philosophy:** "Show enough to interest, reveal more on interaction"

---

## Features

### Front Face (Minimal)
- Icon with gradient background
- Category badge (Foundation, Optimization, Enablement)
- Service title
- 2-sentence description
- Subtle "hover to see benefits" hint

### Back Face (Detailed)
- Service title (compact)
- 4 key benefit points with green checkmarks
- Prominent gradient CTA button (red-to-blue)
- Animated gradient borders (top & bottom)

### Interaction
- **Desktop:** Hover to flip
- **Mobile/Tablet:** Tap to flip (JavaScript handles toggle)
- **Reduced Motion:** Shows both sides stacked (no flip animation)
- **Print:** Both sides visible, stacked vertically

---

## Files

| File | Purpose |
|------|---------|
| `hybrid-service-card-flip.css` | Complete flip card styling |
| `hybrid-service-card-flip.html` | HTML structure and usage examples |
| `hybrid-service-card-flip-docs.md` | This documentation |

---

## Usage

### Basic HTML Structure

```html
<div class="service-card-flip">
  <div class="service-card-flip__inner">
    
    <!-- FRONT FACE -->
    <div class="service-card-flip__front">
      <div class="service-card-flip__header">
        <div class="service-card-flip__icon">
          <!-- SVG icon -->
        </div>
        <div class="service-card-flip__category">Category</div>
      </div>
      
      <h3 class="service-card-flip__title">Service Title</h3>
      <p class="service-card-flip__description">Short description</p>
      
      <div class="service-card-flip__hint">
        <!-- Rotating icon -->
        Hover to see key benefits
      </div>
    </div>

    <!-- BACK FACE -->
    <div class="service-card-flip__back">
      <h4 class="service-card-flip__back-title">Service Title</h4>
      
      <ul class="service-card-flip__benefits">
        <li class="service-card-flip__benefit">
          <span class="service-card-flip__benefit-icon">
            <!-- Checkmark SVG -->
          </span>
          <p class="service-card-flip__benefit-text">Benefit text</p>
        </li>
        <!-- 3-4 benefits -->
      </ul>
      
      <a href="/link" class="service-card-flip__cta">
        Learn More
        <svg class="service-card-flip__cta-icon"><!-- Arrow --></svg>
      </a>
    </div>

  </div>
</div>
```

### Grid Layout

Use the existing grid system from `styles-unified.css`:

```html
<section class="section section--dark">
  <div class="container">
    <div class="grid grid--3">
      <div class="service-card-flip reveal">...</div>
      <div class="service-card-flip reveal">...</div>
      <div class="service-card-flip reveal">...</div>
    </div>
  </div>
</section>
```

### Mobile Click-to-Flip

Include this JavaScript for mobile/touch support:

```javascript
document.querySelectorAll('.service-card-flip').forEach(card => {
  card.addEventListener('click', function(e) {
    if (window.innerWidth < 768) {
      this.classList.toggle('flipped');
    }
  });
});
```

---

## Design Decisions

### Why Flip Animation?

**Problem:** Adding benefits/details makes cards too tall ("A4 paper sized")
**Solution:** Keep front minimal, hide details on back until needed
**Result:** Compact cards with optional depth

### Why Keep Front Minimal?

- Enterprise decision-makers scan quickly first
- Too much information = cognitive overload
- Icon + Title + Short description = instant comprehension
- Benefits list only for those who want detail

### Why 4 Benefits Maximum?

- More than 4 = too cluttered even on back
- 4 points fits comfortably in 420px min-height
- Forces prioritization of most important benefits
- Keeps card height reasonable

### Why Gradient CTA Button on Back?

- Red-to-blue gradient matches brand (LT.Solutions + Atlassian)
- More prominent than text link
- Signals "this is the action" clearly
- Only appears when user shows interest (flipped to back)

### Why Green Checkmarks?

- Uses `--color-trust-green` (#00875A)
- Signals positive outcomes
- Familiar pattern from SaaS pricing pages
- High contrast on dark backgrounds

---

## Technical Details

### Flip Mechanism

Uses CSS 3D transforms:
- `perspective: 1000px` on container
- `transform-style: preserve-3d` on inner element
- `backface-visibility: hidden` on faces
- `rotateY(180deg)` on hover/click

### Height Management

- `min-height: 420px` ensures both faces fit
- Mobile reduces to 380px
- Flexbox with `flex-grow` distributes space
- Benefits list expands to fill available space

### Accessibility

- Semantic HTML (`<h3>`, `<ul>`, `<li>`)
- `aria-hidden="true"` on decorative icons
- `aria-label` on benefits list
- Keyboard focus states
- `prefers-reduced-motion` support (stacks instead of flips)
- Screen reader friendly (both sides readable)

### Performance

- GPU-accelerated transforms
- Single transition property
- Minimal repaints
- No JavaScript required (except mobile click)

---

## Browser Support

- Chrome 88+
- Firefox 78+
- Safari 14+
- Edge 88+

Requires:
- CSS 3D Transforms
- CSS Custom Properties
- Backdrop Filter (graceful degradation)

---

## Responsive Behavior

| Breakpoint | Changes |
|------------|---------|
| < 768px | Smaller icon (40px), reduced padding, click-to-flip |
| 768px+ | Full-size (48px icon), hover-to-flip |

---

## Comparison with Other Approaches

| Aspect | Original Baseline | Codex Enhanced | Claude V2 | **Flip Card** |
|--------|-------------------|----------------|-----------|---------------|
| Front height | Minimal | Tall (benefits) | Tall (benefits) | **Minimal** |
| Detail level | Low | High | High | **Variable** |
| User control | None | None | None | **Full** |
| Mobile-friendly | ✅ | ⚠️ | ⚠️ | **✅** |
| A4 paper problem | No issue | Has issue | Has issue | **Solved** |

---

## Integration Notes

### CSS Import Order

```html
<link href="css/styles-unified.css" rel="stylesheet">
<link href="Components/hybrid-service-card-flip.css" rel="stylesheet">
```

### Dependencies

- `styles-unified.css` - Design tokens and base styles
- Google Fonts: Inter (body), Space Grotesk (headings)
- Optional: JavaScript for mobile click-to-flip

### Existing Classes Used

From `styles-unified.css`:
- `.section`, `.section--dark`, `.section--light`
- `.container`
- `.grid`, `.grid--3`
- `.reveal` (scroll animation)

---

## Variants & Extensions

### Future Enhancements

**Auto-flip on Mobile:**
- Could add timer to auto-flip after 3 seconds on mobile
- Shows users the flip functionality without requiring discovery

**Numbered Badges:**
- Add optional `01`, `02`, `03` badges if needed
- Currently removed to reduce visual noise

**Icons Only (No Category Text):**
- Could remove category badge for even cleaner front
- Icon alone might be sufficient visual anchor

**Featured/Highlighted State:**
- Add `.service-card-flip--featured` class
- Pre-flip on page load
- Different border color

---

## Common Issues & Solutions

### Cards Different Heights

**Problem:** Cards in grid have different content lengths
**Solution:** All cards use `min-height: 420px` and `height: 100%`

### Flip Animation Choppy

**Problem:** Browser not using GPU acceleration
**Solution:** Uses `transform` and `backface-visibility` for GPU rendering

### Content Visible on Wrong Side

**Problem:** `backface-visibility` not working
**Solution:** Check browser support, ensure `-webkit-` prefix present

### Mobile Not Flipping on Tap

**Problem:** JavaScript not attached
**Solution:** Include the click handler script from HTML file

---

## Maintenance

### Updating Content

1. Edit HTML file for each card
2. Keep front description to 2 sentences max
3. Limit back benefits to 4 items max
4. Test both faces for height balance

### Modifying Colors

All colors use CSS variables from `styles-unified.css`:
- Icon background: `--color-red`, `--color-atlassian-blue`
- Checkmarks: `--color-trust-green`
- CTA button: gradient of `--color-red` to `--color-atlassian-blue`

### Adjusting Height

Change `min-height` in `.service-card-flip__inner`:
```css
.service-card-flip__inner {
  min-height: 420px; /* Adjust this */
}
```

---

## Testing Checklist

- [ ] Cards flip smoothly on hover (desktop)
- [ ] Cards flip on click (mobile)
- [ ] Both faces readable and complete
- [ ] CTA buttons clickable and properly linked
- [ ] Heights match across cards in grid
- [ ] Reduced motion shows stacked view
- [ ] Print shows both sides
- [ ] Keyboard navigation works
- [ ] Screen reader announces content properly

---

## Changelog

### v1.0 (2026-01-17)
- Initial flip card implementation
- Front face: Icon + Category + Title + Short description
- Back face: Title + 4 benefits + CTA button
- Mobile click-to-flip support
- Reduced motion fallback (stacked view)
- Print styles (both sides visible)
- Full accessibility support

---

## Credits

**Design System:** LT.Solutions "Confident Minimalism" v2
**Concept:** Hybrid approach combining best of Codex and Claude V2
**Inspiration:** Keeps Andreas from having "A4 paper" sized cards 😄
