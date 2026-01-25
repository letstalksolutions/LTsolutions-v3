# Sky: Implement service card v2

Read agents/init-codex-sky.md before acting.

## Context
New service card design based on mockup (lab/card-mockup.png) and Gemini research (docs/research/service-card-patterns.md).

## Inputs
- Mockup: lab/card-mockup.png
- Brief: docs/briefs/service-card-v2.md
- Research: docs/research/service-card-patterns.md
- Current cards: site/index.html (Services section)

## Implementation tasks

### 1. Create CSS for `.service-card-v2`
Location: site/css/styles.css (add after existing service-card styles)

Structure:
```
.service-card-v2
  .service-card-v2__header (icon + badge row)
  .service-card-v2__icon
  .service-card-v2__badge
  .service-card-v2__title
  .service-card-v2__description
  .service-card-v2__benefits (ul)
  .service-card-v2__benefit (li with checkmark)
  .service-card-v2__cta (gradient button)
```

### 2. Key styles from research

**Card background:**
- Use slightly lighter than section background for elevation
- Example: `background: rgba(255, 255, 255, 0.03)` or `#1a1f2e`
- Subtle border: `border: 1px solid rgba(255, 255, 255, 0.08)`

**Gradient button:**
- Gradient: `linear-gradient(135deg, var(--color-red), var(--color-atlassian-blue))`
- Hover: lift + glow
- Ensure white text has 4.5:1 contrast

**Benefits list:**
- Checkmark icon (circular or simple tick)
- Max 4-5 items
- Generous line spacing

### 3. Update HTML
Location: site/index.html Services section

Replace current service cards with new structure. Keep 4 cards:
1. JSM Implementation
2. Assets (CMDB)
3. Opsgenie
4. Automation

Use content from docs/content/homepage-copy.md for descriptions.

### 4. Test
- Dark section background contrast
- Button hover states
- Mobile responsiveness (stack on small screens)
- Keyboard focus visible on button

## Acceptance criteria
- [ ] Cards match mockup structure (icon + badge, title, description, benefits, CTA)
- [ ] Gradient button has smooth hover (lift + glow)
- [ ] Benefits list scannable with checkmarks
- [ ] Cards elevated from dark background (subtle, not harsh)
- [ ] WCAG AA contrast on all text
- [ ] Mobile responsive

## Do not
- Invent new copy (use homepage-copy.md)
- Add more than 4-5 benefits per card
- Use harsh borders or heavy shadows

## Completion
When done, output what was changed and any issues found.
