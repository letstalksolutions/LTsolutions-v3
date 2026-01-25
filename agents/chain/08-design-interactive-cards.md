# Design Expert: Interactive Card Exploration

Read agents/init-claude-code-design-expert.md before acting.

## Context
Service cards and value cards currently have hover effects but are essentially static. The client wants to explore making them interactive to increase engagement and show more detail without page navigation.

## Your Task
Review the brief at `docs/briefs/interactive-cards.md` and produce a design recommendation.

## Reference Files
- **Brief:** `docs/briefs/interactive-cards.md`
- **Current cards:** `site/css/styles.css` (lines 792-943)
- **Homepage:** `site/index.html`
- **Design system:** `docs/design-handover.md`

## Evaluation Criteria

Consider each interaction pattern against:
1. **Mobile usability** - Must work on touch devices
2. **Accessibility** - Keyboard navigable, screen reader friendly
3. **Performance** - Vanilla JS only, no heavy libraries
4. **Content fit** - What additional info is valuable?
5. **Conversion** - Does it help or hinder the path to contact?

## Output Requirements

Write your recommendations to: `docs/reviews/interactive-cards-proposal.md`

Include:
1. **Recommended pattern** (flip, expand, modal, or hybrid)
2. **Rationale** - Why this pattern suits B2B consultancy
3. **Content structure** - What appears in the interactive state
4. **Wireframe description** - Section-by-section layout
5. **Accessibility spec** - Focus management, ARIA labels
6. **Implementation notes** - Guidance for Sky

## Decision Framework
- If interaction adds cognitive load without value → recommend against
- If pattern doesn't work on mobile → reject it
- If pattern hides critical CTA → modify or reject
- Simpler is better if it achieves the goal

## Do NOT
- Write CSS or JavaScript code
- Recommend third-party libraries
- Propose patterns that require framework changes
- Over-engineer the solution

## Completion
After writing the proposal, update `docs/status.md` to note that interactive card design is ready for review.
