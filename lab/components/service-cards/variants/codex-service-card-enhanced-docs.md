# Enhanced Service Offering Card

## How to use
- Load the base design system stylesheet first (`css/styles-unified.css`).
- Load `Components/codex-service-card-enhanced.css` after the base styles so overrides apply.
- Copy the markup from `Components/codex-service-card-enhanced.html` and place it inside any grid container.

## HTML structure notes
- Uses `.service-card` for baseline styling, plus `.service-card--enhanced` for the premium layer.
- Keep the heading `id` and `aria-labelledby` pairing for accessible labeling.
- The benefits list is a semantic `<ul>` with icons marked as `aria-hidden`.

## Design decisions
- Premium depth is achieved with layered gradients, soft glows, and elevated shadows while staying within existing color variables.
- Subtle motion on hover reinforces interactivity without looking flashy.
- CTA is prominent, rounded, and high-contrast to support enterprise decision makers.

## Integration notes
- Works on dark sections because it builds on the existing glass card pattern.
- If you already use `.btn` styles, you can replace `.service-card__button` with `.btn.btn--primary` and remove the button rules here.
- For multiple cards, use the existing `.grid` and `.grid--3` layout classes.
