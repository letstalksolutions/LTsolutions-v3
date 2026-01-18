# Sky implementation tasks

8 prioritised tasks for site/ with acceptance criteria.

---

## Task 1: Update hero copy to match positioning
**File:** site/index.html
**Priority:** P0

**Changes:**
- Replace headline with: "Modernise service management on Atlassian"
- Replace subhead with copy from homepage-copy-blocks.md Variant A
- Update trust signals to show: 4,000+ seat rollouts, 15 years experience, JSM/Assets/Opsgenie specialism

**Acceptance criteria:**
- [ ] Headline is outcome-led and mentions Atlassian
- [ ] Subhead names JSM, Assets, Opsgenie specifically
- [ ] Trust signals are quantified and specific
- [ ] No generic "Atlassian expertise" phrasing

---

## Task 2: Update service section copy
**File:** site/index.html
**Priority:** P0

**Changes:**
- Rename pillars to match: JSM Implementation, Assets and CMDB, Opsgenie and Incidents, Automation
- Update descriptions from homepage-copy-blocks.md
- Keep existing card structure (no visual changes)

**Acceptance criteria:**
- [ ] 3-4 service cards maximum
- [ ] Each card names specific Atlassian product
- [ ] Descriptions mention who it helps and typical deliverables
- [ ] Links point to /services with anchor fragments

---

## Task 3: Update problem/outcome section
**File:** site/index.html
**Priority:** P1

**Changes:**
- Replace "Value Proposition" section with problem/outcome structure
- Use 3-5 pains from homepage-copy-blocks.md
- Pair each pain with matching outcome

**Acceptance criteria:**
- [ ] Pains are recognisable to IT operations leaders
- [ ] Outcomes are specific and measurable where possible
- [ ] Section header updated to reflect problem/outcome framing

---

## Task 4: Simplify four phase section
**File:** site/index.html
**Priority:** P1

**Changes:**
- Update phase descriptions from homepage-copy-blocks.md
- Remove excessive inline styles
- Use glass-card component consistently

**Acceptance criteria:**
- [ ] Each phase has single sentence description
- [ ] Phase 4 explicitly mentions knowledge transfer and independence
- [ ] No inline styles except where design system requires

---

## Task 5: Update primary CTA text
**File:** site/index.html
**Priority:** P0

**Changes:**
- Change "Start the Conversation" to "Book a short call"
- Change "Let's Talk Solutions" to "Book a short call"
- Add supporting text: "Confirm fit and define a first sprint"

**Acceptance criteria:**
- [ ] All primary CTAs use same text
- [ ] CTA is low friction (short call, not sales demo)
- [ ] Supporting text sets expectation for call outcome

---

## Task 6: Remove or update footer AI disclosure
**File:** site/index.html
**Priority:** P2

**Changes:**
- Remove line: "Content written by humans, supported by AI-assisted editing tools for clarity."
- No AI or tool references in production copy

**Acceptance criteria:**
- [ ] No AI mentions in footer
- [ ] No internal tool references anywhere in page

---

## Task 7: Update trust indicators section
**File:** site/index.html
**Priority:** P1

**Changes:**
- Change "14+ Years Experience" to "15+ Years"
- Add "Global rollouts" stat showing 4,000+ seats
- Keep Atlassian certified badge

**Acceptance criteria:**
- [ ] Stats match positioning document
- [ ] Numbers are credible (not inflated)
- [ ] Stats reinforce enterprise credibility

---

## Task 8: Validate mobile and accessibility
**File:** site/index.html
**Priority:** P1

**Changes:**
- Test at 320px width, fix any horizontal scroll
- Verify heading order (h1 > h2 > h3)
- Check keyboard focus visibility on all links and buttons
- Confirm colour contrast on all text

**Acceptance criteria:**
- [ ] No horizontal scroll at 320px
- [ ] Heading hierarchy correct (no skipped levels)
- [ ] Focus ring visible on all interactive elements
- [ ] All text passes WCAG AA contrast (4.5:1 body, 3:1 large)

---

## Sequence

| Sprint | Tasks | Goal |
|--------|-------|------|
| Days 1-2 | 1, 2, 5 | Core messaging aligned with positioning |
| Days 3-4 | 3, 4, 6 | Section structure and copy cleanup |
| Days 5-6 | 7, 8 | Polish and validation |
| Day 7 | Review | Run full checklist from docs/reviews/review-checklist.md |
