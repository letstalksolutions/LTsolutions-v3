# Interactive Cards Design Proposal

**Author:** Design Expert
**Date:** 2026-01-25
**Status:** Ready for review
**Output for:** Implementation by Sky

---

## Executive Summary

After evaluating the four interaction patterns against mobile usability, accessibility, performance, content fit, and conversion impact, I recommend **not implementing interactive cards at this stage**.

The current service card design already delivers strong value with its benefits list, gradient CTA, and hover effects. Adding interactivity introduces complexity without clear conversion benefit.

If interactivity is still desired, I recommend a **Progressive Expand** pattern with strict constraints.

---

## Evaluation of Interaction Patterns

### 1. Flip Cards

**Verdict: Not recommended**

| Criterion | Assessment |
|-----------|------------|
| Mobile usability | Poor. Touch users have no hover state to trigger flip. Tap-to-flip requires visual affordance that current cards lack. |
| Accessibility | Difficult. Managing focus across two surfaces is complex. Screen readers struggle with "front" and "back" metaphors. |
| Performance | Acceptable. CSS transforms are GPU-accelerated. |
| Content fit | Poor. Back must fit same dimensions as front. Current cards already use vertical space well. |
| Conversion | Neutral to negative. Hides the CTA behind a flip action. |

**Why it fails for this context:**
- The current card already shows 5 benefits. There is no compelling "back" content that couldn't be shown inline.
- Flip interactions feel playful, which conflicts with the "Confident Minimalism" design philosophy.
- Enterprise buyers may find it gimmicky.

---

### 2. Hover Reveal

**Verdict: Rejected**

| Criterion | Assessment |
|-----------|------------|
| Mobile usability | Fails completely. No hover on touch devices. |
| Accessibility | Poor. Hover-dependent content excludes keyboard users. |
| Performance | Good. |
| Content fit | Limited to small additions. |
| Conversion | N/A due to mobile failure. |

**Why it fails:**
- Approximately 60% of traffic is mobile. Any pattern that fails on touch devices is disqualified.
- The brief explicitly states "Touch device support" as a constraint.

---

### 3. Modal/Drawer

**Verdict: Not recommended**

| Criterion | Assessment |
|-----------|------------|
| Mobile usability | Works, but heavyweight. Creates navigation overhead. |
| Accessibility | Complex. Requires focus trap, escape handling, scroll lock. |
| Performance | Acceptable but adds DOM complexity. |
| Content fit | Excellent. Can show unlimited detail. |
| Conversion | Negative. Creates a "dead end" feeling. Users must dismiss modal to continue. |

**Why it fails for this context:**
- The services section has 4 cards. Opening modals for comparison is tedious.
- Modals interrupt flow. Enterprise buyers scanning the page want quick comparison, not drill-down interruption.
- Adds significant JavaScript complexity for focus management.
- Better suited for complex interactions (forms, configurations) than content reveal.

---

### 4. Expand/Collapse (Progressive Expand)

**Verdict: Conditionally recommended**

| Criterion | Assessment |
|-----------|------------|
| Mobile usability | Good. Tap to expand is natural on touch. |
| Accessibility | Good. `aria-expanded`, focus management are well-established patterns. |
| Performance | Excellent. Height animations or CSS transitions. No libraries. |
| Content fit | Good. Revealed content can be any length. |
| Conversion | Neutral to positive. CTA remains visible; additional context aids decision. |

**Why this works best:**
- Familiar accordion pattern that users understand.
- Progressive disclosure without leaving the page.
- Works identically on touch and pointer devices.
- Keyboard navigable with Enter/Space to toggle.
- Screen readers announce expanded/collapsed state.

---

## Critical Question: Is Interactivity Needed?

Before recommending implementation, I must challenge the assumption that interactivity improves the current design.

### Current State Assessment

The service cards already include:
- **Icon + badge** identifying the service category
- **Title** (clear service name)
- **Description** (one-line value statement)
- **5 benefits** with checkmarks
- **Prominent CTA** ("Book a short call")

This is substantial content. What would the expanded state add?

### Proposed Expanded Content (from brief)

1. Detailed deliverables list
2. Typical engagement duration
3. "Ideal for teams who..." qualifier
4. Mini case study or proof point
5. Direct CTA to contact

### Analysis

| Content Type | Value Added | Risk |
|--------------|-------------|------|
| Detailed deliverables | Low. Current benefits list covers this. | Redundant, adds reading time. |
| Engagement duration | Medium. Could help self-qualification. | May create price/commitment anxiety. |
| "Ideal for..." qualifier | Medium. Helps self-selection. | Could be added to current description. |
| Case study/proof point | High. Social proof aids conversion. | Requires having the content. |
| Direct CTA | None. Already present. | Redundant. |

### Recommendation

**Do not add interactivity unless you have compelling expanded content ready.**

If the expanded state shows only marginally more information than the current state, the interaction adds friction without value. Users must click/tap, wait for animation, and process more content - all for minimal gain.

---

## If Interactivity Is Still Desired

If the business decision is to proceed with interactive cards, implement the **Progressive Expand** pattern with the following specification.

### Recommended Pattern: Progressive Expand

A card that expands vertically in place when activated, revealing additional content below the existing content. The CTA remains visible in both states.

### Interaction Behaviour

**Trigger:**
- Click/tap anywhere on the card (except the CTA link)
- Keyboard: Enter or Space when card is focused

**State Change:**
- Card smoothly expands vertically (300ms ease-out)
- `aria-expanded` toggles between "false" and "true"
- Chevron icon rotates to indicate state
- Only one card expanded at a time (accordion behaviour)

**Closing:**
- Click/tap the same card again
- Click/tap a different card (auto-closes previous)
- Press Escape when expanded card has focus

---

## Content Structure for Expanded State

If proceeding, the expanded section should contain only high-value additions:

```
┌─────────────────────────────────────────────┐
│  [Icon]  SERVICE BADGE                      │
│                                             │
│  Service Title                              │
│  Description paragraph                      │
│                                             │
│  ✓ Benefit 1                                │
│  ✓ Benefit 2                                │
│  ✓ Benefit 3                                │
│  ✓ Benefit 4                                │
│  ✓ Benefit 5                                │
│                                             │
│  [Book a short call]                   [▼]  │  ← Expand indicator
├─────────────────────────────────────────────┤
│  EXPANDED CONTENT (when open)               │
│                                             │
│  Ideal for                                  │
│  Teams scaling service operations or        │
│  moving from email-based support to         │
│  structured request management.             │
│                                             │
│  What you get                               │
│  • Configured project with request types    │
│  • SLA policies aligned to your targets     │
│  • Automation rules for common workflows    │
│  • Dashboard for queue visibility           │
│  • Documentation your team can maintain     │
│                                             │
│  Proof point                                │
│  "Reduced ticket resolution time by 40%     │
│  for a 200-seat IT team."                   │
│                                             │
└─────────────────────────────────────────────┘
```

### Content Guidelines

**Ideal for** (1-2 sentences)
- Describe the team situation, not job titles
- Help users self-select in or out
- Example: "Teams scaling service operations or moving from email-based support to structured request management."

**What you get** (4-6 bullet points)
- Concrete deliverables, not features
- Outcome-focused language
- Different from the benefits list (which is more abstract)

**Proof point** (1 sentence, optional)
- Specific metric if available
- Generic credibility statement if not
- Example: "Reduced ticket resolution time by 40% for a 200-seat IT team."

---

## Accessibility Specification

### ARIA Attributes

```html
<article
  class="service-card-v2"
  role="button"
  tabindex="0"
  aria-expanded="false"
  aria-controls="jsm-details"
>
  <!-- Existing card content -->

  <div
    id="jsm-details"
    class="service-card-v2__details"
    hidden
  >
    <!-- Expanded content -->
  </div>
</article>
```

### Keyboard Navigation

| Key | Action |
|-----|--------|
| Tab | Move focus to next card |
| Shift+Tab | Move focus to previous card |
| Enter/Space | Toggle expanded state |
| Escape | Collapse if expanded |

### Focus Management

- On expand: Focus remains on the card (do not move focus into expanded content)
- On collapse: Focus remains on the card
- Visual focus indicator: Use existing `:focus-within` styles with enhanced outline

### Screen Reader Announcements

- Card should announce: "JSM Implementation and Optimisation, expandable, collapsed" (or "expanded")
- State change should be announced via `aria-expanded` change
- Expanded content is in the accessibility tree when visible

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  .service-card-v2__details {
    transition: none;
  }
}
```

---

## Implementation Notes for Sky

### CSS Requirements

```
1. Add `.service-card-v2__details` styles:
   - Hidden by default (height: 0; overflow: hidden)
   - Border-top separator when expanded
   - Padding matches card padding

2. Add `.service-card-v2--expanded` modifier:
   - Removes pointer on card body
   - Adjusts CTA position if needed

3. Add expand indicator (chevron):
   - Position: bottom-right of card, before CTA
   - Rotates 180deg when expanded
   - Use CSS transform, not icon swap

4. Transition:
   - Use max-height transition (not height)
   - 300ms ease-out
   - Respect prefers-reduced-motion
```

### JavaScript Requirements

```
1. Event listeners:
   - Click on card (excluding CTA anchor)
   - Keydown for Enter/Space/Escape

2. State management:
   - Track which card is expanded (accordion behaviour)
   - Toggle aria-expanded attribute
   - Toggle hidden attribute on details

3. Vanilla JS only:
   - No jQuery, no frameworks
   - Use event delegation on card container
```

### HTML Changes

```
1. Add role="button" and tabindex="0" to card article
2. Add aria-expanded="false" to card
3. Add aria-controls pointing to details ID
4. Add details container with unique ID
5. Add expand indicator element
```

---

## Alternative Recommendation: Enhance Without Interactivity

If the goal is to show more information, consider these alternatives that avoid interaction complexity:

### Option A: Longer Cards

Add the "Ideal for..." qualifier and a proof point directly to the current card. No interaction needed.

**Pros:** Simpler, always visible, no JavaScript
**Cons:** Cards become taller, may feel content-heavy

### Option B: Dedicated Services Page

Keep homepage cards concise. Move detailed content (deliverables, proof points, ideal for) to individual service pages.

**Pros:** Cleaner homepage, full detail where it matters
**Cons:** Requires page navigation

### Option C: Service Comparison Table

Add a comparison table below the cards grid showing key attributes across all services.

**Pros:** Easy scanning, no interaction needed
**Cons:** Redundant with cards, takes vertical space

---

## Decision Matrix

| Option | Mobile | A11y | Performance | Content Value | Conversion | Complexity |
|--------|--------|------|-------------|---------------|------------|------------|
| Current state (no change) | ✅ | ✅ | ✅ | Medium | Good | None |
| Progressive Expand | ✅ | ✅ | ✅ | Medium-High | Neutral | Medium |
| Flip Cards | ❌ | ⚠️ | ✅ | Low | Negative | Medium |
| Modal/Drawer | ⚠️ | ⚠️ | ⚠️ | High | Negative | High |
| Hover Reveal | ❌ | ❌ | ✅ | Low | N/A | Low |
| Longer Cards | ✅ | ✅ | ✅ | Medium-High | Good | None |

---

## Final Recommendation

### Primary Recommendation

**Do not add interactive behaviour to service cards at this stage.**

The current design is effective. Adding interaction increases complexity without clear conversion benefit. Focus energy on completing the page rollout first.

### Secondary Recommendation (if interactivity is required)

If the business decision is to proceed:

1. **Implement Progressive Expand pattern** as specified above
2. **Prepare content first** - write "Ideal for" statements and proof points for all 4 services before implementation
3. **Prototype on one card** before rolling out to all
4. **A/B test** if possible to measure conversion impact
5. **Keep the CTA visible** in both states - never hide the path to contact

### What I Would Avoid

- Flip cards (mobile issues, gimmicky feel)
- Modals (interrupts flow, over-engineered)
- Hover reveal (fails mobile)
- Complex animations (conflicts with Confident Minimalism)

---

## Next Steps

1. **Review this proposal** with stakeholders
2. **Decide** whether to proceed with interactivity or maintain current design
3. **If proceeding:** Write expanded content for all 4 service cards before implementation
4. **Hand to Sky** for implementation using the specifications above

---

*Proposal complete. Ready for review.*
