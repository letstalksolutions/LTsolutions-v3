# Service card v2 brief

Based on mockup: lab/card-mockup.png

## Design intent
Modern, content-rich service card with prominent CTA. Combines elements from archived variants with new gradient button style.

## Structure

```
┌─────────────────────────────────────┐
│  [icon]  CATEGORY BADGE             │
│                                     │
│  Service Title                      │
│  (Large, bold)                      │
│                                     │
│  Short description text that        │
│  explains the service offering.     │
│                                     │
│  ✓ Benefit one                      │
│  ✓ Benefit two                      │
│  ✓ Benefit three                    │
│  ✓ Benefit four                     │
│                                     │
│  ┌─────────────────────────────┐    │
│  │      Learn More             │    │
│  │   (gradient button)         │    │
│  └─────────────────────────────┘    │
└─────────────────────────────────────┘
```

## Elements

### Header row
- Icon: outlined stroke style, red/coral color
- Category badge: pill shape, dark background, white text, uppercase

### Title
- Large heading (text-2xl or text-3xl)
- Bold weight
- White text on dark card

### Description
- Standard body text
- Muted/secondary color (neutral-400 or similar)

### Benefits list
- 4 items max
- Checkmark icon (circular background or simple tick)
- Smaller text (text-sm)

### CTA button
- Full width or near-full width
- Gradient: red → blue/purple (left to right)
- Rounded corners (radius-lg or radius-xl)
- White text, medium weight
- Hover: slight lift, glow effect

## Colors (from mockup)
- Card background: dark (navy or near-black)
- Icon: red/coral (#C41E3A or similar)
- Badge: dark grey with white text
- Title: white
- Description: light grey
- Benefits: white with muted checkmarks
- Button gradient: red (#C41E3A) → blue (#0052CC)

## Responsive behaviour
- Stack naturally on mobile
- Benefits list remains single column
- Button stays full width

## Research completed
See docs/research/service-card-patterns.md

Key findings applied:
- Background elevation via subtle color shift (not borders/shadows)
- Gradient button with lift + glow hover
- Checkmarks for benefits, max 4-5 items
- Ensure 4.5:1 contrast on gradient buttons

## Acceptance criteria
- [ ] Card matches mockup structure
- [ ] Gradient button has smooth hover transition
- [ ] Benefits list is scannable
- [ ] Works on dark section background
- [ ] Accessible (contrast, focus states)
- [ ] Mobile responsive
