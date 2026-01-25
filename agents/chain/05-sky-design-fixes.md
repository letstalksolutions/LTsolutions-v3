# Sky: Implement Homepage Design Fixes

Read agents/init-codex-sky.md before acting.

## Context
Design review complete. Implement the priority fixes identified in `docs/reviews/design-review-homepage.md`.

## Reference Files
- Design review: `docs/reviews/design-review-homepage.md`
- Brand research: `docs/research/brand-research.md`
- Implementation: `site/index.html`
- Styles: `site/css/styles.css`

## Priority Fixes (in order)

### 1. Fix phase card text contrast (Critical)
- **File:** `site/css/styles.css` line ~505
- **Issue:** `.phase-card__text` uses `var(--color-neutral-600)` on glass background - fails WCAG
- **Fix:** Change to `rgba(255, 255, 255, 0.75)`

### 2. Resolve orphaned grid items (Critical)
- **Proof section:** Has 5 stat cards in 4-column grid (5th orphaned)
- **Outcome section:** Has 5 cards in 2-column grid (5th orphaned)
- **Fix:** Remove 1 card from each section OR add 1 more to make complete rows
- **Decision:** Remove the weakest card from each section (your judgment)

### 3. Improve hero trust signals (Should fix)
- **File:** `site/css/styles.css` lines ~1432-1441
- **Issue:** Trust badge text too small and low contrast
- **Fix:**
  - Increase font-size from `--text-sm` to `--text-base`
  - Increase opacity on border and background

### 4. Add keyboard focus states (Should fix)
- **File:** `site/css/styles.css` lines ~604-607
- **Issue:** Interactive cards lack focus indicators
- **Fix:** Add `:focus-within` styles that match hover states

### 5. Add tablet breakpoint for phase cards (Should fix)
- **Issue:** 4-column phase cards cramped on tablets
- **Fix:** Add `@media (max-width: 1100px)` breakpoint for 2x2 grid

## Validation
After each fix:
1. Check the change visually in browser
2. Test keyboard navigation (Tab through cards)
3. Verify mobile responsiveness at 320px, 768px, 1024px

## Do not
- Change copy or content (except removing orphaned cards)
- Refactor unrelated code
- Add new features

## Completion
When done, update `docs/status.md` with completed fixes and any issues encountered.
