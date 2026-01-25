# Brief: Interactive Service & Value Cards

## Objective
Design interactive behaviour for service cards and value cards that increases engagement and information density without overwhelming users.

## Current State
- **Service cards (service-card-v2):** Icon + badge, title, description, benefits list, gradient CTA
- **Value cards:** Icon, title, description
- **Current interactions:** Hover lift, gradient border animation, CTA hover effects
- **Location:** Homepage, Services page (planned)

## Design Questions to Answer

### 1. What problem are we solving?
- Users may want more detail before clicking through
- Cards currently show surface-level info
- Could we show deliverables, timelines, or specifics on interaction?

### 2. Interaction Patterns to Consider

**Flip cards:**
- Front: Current summary view
- Back: Detailed deliverables, typical timeline, "what you get"
- Pro: Familiar pattern, no page change needed
- Con: Content must fit, mobile touch behaviour

**Expand/collapse:**
- Click to expand card in place
- Reveal additional content below
- Pro: Works well on mobile
- Con: Shifts page layout

**Modal/drawer:**
- Click opens detail overlay
- Full service description without leaving page
- Pro: Maximum content space
- Con: Extra UI complexity

**Hover reveal:**
- Additional info appears on hover
- Pro: Fast, no click needed
- Con: Doesn't work on touch devices

### 3. Content for Interactive Layer
What should the expanded/flipped/modal state show?
- Detailed deliverables list
- Typical engagement duration
- "Ideal for teams who..." qualifier
- Mini case study or proof point
- Direct CTA to contact

## Constraints

### Must maintain:
- Existing visual design language
- Mobile responsiveness (320px+)
- Accessibility (keyboard navigation, screen readers)
- Performance (no heavy JS libraries)
- Touch device support

### Avoid:
- Heavy animation that feels gimmicky
- Patterns that hide critical info
- Interactions that break on mobile
- Anything requiring React/Vue (vanilla JS only)

## Deliverables Expected

1. **Recommended interaction pattern** with rationale
2. **Content structure** for the interactive state
3. **Wireframe/sketch** (markdown description acceptable)
4. **Accessibility considerations** (focus states, ARIA)
5. **Implementation notes** for Sky

## Reference Files
- `site/css/styles.css` - Current card styles (lines 792-943 for service-card-v2)
- `site/index.html` - Current homepage with cards
- `docs/design-handover.md` - Design system documentation

## Output
Write recommendations to: `docs/reviews/interactive-cards-proposal.md`
