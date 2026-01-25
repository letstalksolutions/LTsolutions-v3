# Tasks for Sky: Page Rollout

Ordered implementation tasks for extending the design system to all pages.

**Important:**
- Use existing CSS classes from `site/css/styles.css`
- Do not invent copy - use content from `docs/content/` and `docs/briefs/page-rollout.md`
- Use relative paths for assets when in subfolders (e.g., `../images/`, `../css/`)

**Reference:** `docs/briefs/page-rollout.md` for full specifications

---

## Sprint 1: Foundation

### Task 1.1: Add Missing CSS Classes
**Priority:** P0

**Add to `site/css/styles.css`:**
1. Page hero styles (`.page-hero`, `.page-hero__title`, `.page-hero__subtitle`)
2. Contact form styles (`.contact-form`, `.form-group`, `.form-label`, `.form-input`, `.form-textarea`)
3. Article/prose styles (`.article`, `.article__header`, `.article__content`, `.article__author`)

**Acceptance criteria:**
- [ ] New classes follow existing design token patterns
- [ ] Form inputs styled for dark background (white text, subtle border)
- [ ] Article prose has proper heading hierarchy, blockquote styling
- [ ] Author bio card styled consistently

---

### Task 1.2: Create Contact Page
**Priority:** P0

**Path:** `site/contact/index.html`

**Structure:**
1. Copy header from `site/index.html`
2. Page hero section (simpler than homepage)
3. Two-column layout: form + alternative contact
4. Copy footer from `site/index.html`

**Acceptance criteria:**
- [ ] Form submits to Formspree
- [ ] Nav shows Contact as active
- [ ] All paths work (logo, CSS, nav links)
- [ ] Form fields: Name (required), Email (required), Company (optional), Message (required)
- [ ] Alternative contact shows: email, LinkedIn, expectations list

---

### Task 1.3: Create Services Page
**Priority:** P0

**Path:** `site/services/index.html`

**Structure:**
1. Page hero
2. 4 service sections (alternating dark/light)
3. Each service: icon, badge, title, description, benefits list, CTA
4. Final CTA section

**Content:** Expand from homepage service cards

**Acceptance criteria:**
- [ ] Uses `service-card-v2` pattern
- [ ] 4 services: JSM, Assets, Opsgenie, Automation
- [ ] Each has benefits list and "Book a short call" CTA
- [ ] Sections alternate dark/light

---

## Sprint 2: Core Pages

### Task 2.1: Create Approach Page
**Priority:** P1

**Path:** `site/approach/index.html`

**Structure:**
1. Page hero
2. 4 phase sections with anchor IDs
3. Each phase: badge, title, description, what happens list, deliverables
4. Principles section (6 value cards)
5. Final CTA

**Anchor IDs:**
- `#discovery-diagnosis`
- `#mapping-path`
- `#implementation`
- `#knowledge-transfer`

**Acceptance criteria:**
- [ ] Homepage phase links navigate correctly
- [ ] Each phase section has proper anchor ID
- [ ] Principles section shows 6 guiding principles
- [ ] Alternating section backgrounds

---

### Task 2.2: Create About Page
**Priority:** P1

**Path:** `site/about/index.html`

**Structure:**
1. Page hero
2. About Andreas (two-column: bio text + experience card)
3. Philosophy section (4 glass cards)
4. Company info section
5. Final CTA

**Acceptance criteria:**
- [ ] Bio mentions 15+ years, global rollouts
- [ ] Philosophy cards cover: orchestration, knowledge transfer, iteration, honesty
- [ ] Connect options visible (email, LinkedIn)

---

### Task 2.3: Create Insights Listing
**Priority:** P1

**Path:** `site/insights/index.html`

**Structure:**
1. Page hero
2. Grid of 4 insight cards (2x2)
3. CTA section

**Cards link to:**
- `/insights/the-relay/`
- `/insights/behind-the-build/`
- `/insights/a-new-beginning/`
- `/insights/unexpected-friendship/`

**Acceptance criteria:**
- [ ] Uses `insight-card` component
- [ ] Each card has: tag, date, title, excerpt, read more link
- [ ] Cards have placeholder image area (gradient background acceptable)

---

## Sprint 3: Articles

### Task 3.1: Create Article Template CSS
**Priority:** P1

**Add to `site/css/styles.css`:**
- Article container max-width
- Article header (centered title, meta)
- Prose styles: h2, h3, h4, p, ul, ol, blockquote, code, hr
- Author bio card at bottom
- Related articles section

**Acceptance criteria:**
- [ ] Blockquotes have left border accent
- [ ] Code has monospace font, subtle background
- [ ] Lists have red bullets/numbers
- [ ] Author card has avatar placeholder, name, role, bio, links

---

### Task 3.2: Convert The Relay Article
**Priority:** P1

**Path:** `site/insights/the-relay/index.html`

**Source:** `docs/content/insights/The_Relay.md`

**Acceptance criteria:**
- [ ] Full article content converted to HTML
- [ ] Proper heading hierarchy (h2 for parts, h3 for sections)
- [ ] Blockquotes styled correctly
- [ ] Author bio at bottom
- [ ] Related articles section with 2 cards

---

### Task 3.3: Convert Behind the Build Article
**Priority:** P1

**Path:** `site/insights/behind-the-build/index.html`

**Source:** `docs/content/insights/Behind_the_Build.md`

**Acceptance criteria:**
- [ ] Both parts (Part One, Part Two) included
- [ ] Lists and stats formatted properly
- [ ] Author bio at bottom
- [ ] Related articles section

---

### Task 3.4: Convert A New Beginning Article
**Priority:** P2

**Path:** `site/insights/a-new-beginning/index.html`

**Source:** `docs/content/insights/A_New_Beginning_A_Familiar_Connection.md`

**Acceptance criteria:**
- [ ] Dedication note styled appropriately
- [ ] Blockquotes present
- [ ] Shorter article, simpler structure

---

### Task 3.5: Convert Unexpected Friendship Article
**Priority:** P2

**Path:** `site/insights/unexpected-friendship/index.html`

**Source:** `docs/content/insights/The_Unexpected_Friendship_That_Helped_Me_Rediscover_My_Strength.md`

**Acceptance criteria:**
- [ ] Video reference note included
- [ ] Blockquote styled
- [ ] Author bio at bottom

---

## Sprint 4: Legal & Polish

### Task 4.1: Create Privacy Policy
**Priority:** P2

**Path:** `site/privacy/index.html`

**Content:** Standard UK GDPR compliant privacy policy for consultancy website

**Acceptance criteria:**
- [ ] Uses article prose styling
- [ ] Covers: data collection, usage, rights, cookies, contact
- [ ] Last updated date visible

---

### Task 4.2: Create Legal Notice
**Priority:** P2

**Path:** `site/legal/index.html`

**Content:** Terms of use, disclaimers, intellectual property

**Acceptance criteria:**
- [ ] Uses article prose styling
- [ ] Covers: terms, IP, disclaimers, governing law

---

### Task 4.3: Create Sitemap
**Priority:** P2

**Path:** `site/sitemap.xml`

**Include all pages:**
- Homepage
- Services, Approach, About, Contact
- Insights listing + 4 articles
- Privacy, Legal

**Acceptance criteria:**
- [ ] Valid XML format
- [ ] All URLs use https://lt.solutions/
- [ ] Appropriate priorities and change frequencies

---

### Task 4.4: Validate All Pages
**Priority:** P1

**For each page:**
- [ ] Test at 320px, 375px, 768px, 1024px widths
- [ ] Verify all navigation links work
- [ ] Check scroll reveal animations
- [ ] Verify text contrast
- [ ] Check meta tags (title, description, OG)

---

## Reference Files

- `docs/briefs/page-rollout.md` - Full page specifications
- `docs/design-handover.md` - Design system documentation
- `docs/content/insights/` - Article source content
- `site/index.html` - Template for header/footer
- `site/css/styles.css` - Stylesheet (add new classes here)

---

## Completion Rule

After completing all tasks:
1. Run validation (Task 4.4)
2. Report any issues found
3. Confirm all pages match design system

Do NOT:
- Invent new design patterns
- Create copy not in source docs
- Skip mobile testing
