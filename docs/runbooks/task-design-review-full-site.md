# Task: Full Site Design Review

**Output to:** `docs/reviews/design-review-full-site.md`

---

## Objective

Review the completed LT.Solutions website (all 12 pages) for design consistency, UX quality, and conversion effectiveness.

---

## Pages to review

1. `site/index.html` - Homepage
2. `site/services/index.html` - Services
3. `site/approach/index.html` - Our Approach
4. `site/about/index.html` - About
5. `site/contact/index.html` - Contact
6. `site/insights/index.html` - Insights listing
7. `site/insights/the-relay/index.html` - Article
8. `site/insights/behind-the-build/index.html` - Article
9. `site/insights/a-new-beginning/index.html` - Article
10. `site/insights/unexpected-friendship/index.html` - Article
11. `site/privacy/index.html` - Privacy Policy
12. `site/legal/index.html` - Legal Notice

---

## Review criteria

### 1. Visual consistency
- Card patterns consistent across pages?
- Typography hierarchy consistent?
- Spacing and alignment consistent?
- Color usage consistent (dark/light sections)?

### 2. Component usage
- Are the correct card types used (value-card, service-card-v2, glass-card, insight-card)?
- Homepage service cards: should use icons, not numbered badges
- CTAs consistent ("Book a short call")?

### 3. UX and conversion
- Is the value proposition clear on each page?
- Are CTAs prominent and well-placed?
- Does the navigation guide users toward contact?
- Trust signals present where needed?

### 4. Accessibility
- Heading hierarchy (h1 > h2 > h3)?
- Focus states visible?
- ARIA labels present?
- Color contrast adequate?

### 5. Content
- Copy matches source docs?
- No placeholder text remaining?
- UK spelling used throughout?

---

## Known issue

**Homepage service cards** use old `.service-card` pattern with numbered badges (01, 02, 03, 04). Should use `.service-card-v2` with icons like the Services page.

---

## Output format

Write a structured review to `docs/reviews/design-review-full-site.md` with:

1. Executive summary (pass/fail, key issues)
2. Issue list (prioritised P0/P1/P2)
3. Page-by-page notes
4. Recommendations for Sky to implement

Be specific. Reference line numbers and exact class names where relevant.
