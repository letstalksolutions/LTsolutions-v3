# Review checklist

Quality gates for page reviews before merge to site/.

## Clarity

- [ ] Visitor understands who this is for within 10 seconds
- [ ] Visitor understands what we do within 10 seconds
- [ ] Visitor understands next step within 10 seconds
- [ ] Primary CTA is visible above the fold
- [ ] No jargon without context

## Copy

- [ ] No AI tool naming in public facing text
- [ ] No internal process or agent references
- [ ] Consistent with positioning spine (docs/positioning/primary-offer.md)
- [ ] Headlines outcome led, not feature led
- [ ] Calls to action use low friction language

## Accessibility

- [ ] Heading order correct (h1 then h2 then h3, no skipping)
- [ ] Keyboard focus visible on all interactive elements
- [ ] Colour contrast meets WCAG AA (4.5:1 body, 3:1 large text)
- [ ] Images have meaningful alt text
- [ ] Links have descriptive text (no bare "click here")
- [ ] Form fields have associated labels

## Performance

- [ ] Images optimised and lazy loaded where appropriate
- [ ] No heavy video autoplay
- [ ] Minimal JavaScript, no unused dependencies
- [ ] CSS uses design tokens, no inline styles
- [ ] Page weight under 500KB excluding cached fonts

## Mobile

- [ ] No horizontal scrolling at 320px width
- [ ] Touch targets minimum 44x44px
- [ ] Text readable without zooming
- [ ] Navigation usable on small screens

## SEO and meta

- [ ] Unique title tag under 60 characters
- [ ] Meta description under 160 characters
- [ ] Canonical URL set correctly
- [ ] Open Graph and Twitter card tags present
- [ ] Structured data valid (test with Google tool)

## Design system

- [ ] Uses styles from css/styles.css only
- [ ] Follows section pattern (dark/light alternation)
- [ ] Card components from design system, no custom variants
- [ ] Spacing uses design tokens, no arbitrary values
- [ ] Colours from palette only

## Code quality

- [ ] Valid HTML5 (no parsing errors)
- [ ] No console errors or warnings
- [ ] Semantic elements used correctly (nav, main, article, section)
- [ ] No commented out code blocks
- [ ] File names lowercase with hyphens

## Review sign off

Reviewer:
Date:
Notes:
