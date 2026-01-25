# Page Rollout Brief

## Objective
Extend the unified design system from the homepage to all remaining pages, maintaining consistent visual language and using established components.

## Reference
- **Design System:** `docs/design-handover.md`
- **CSS:** `site/css/styles.css`
- **Template:** `site/index.html` (current homepage)

## Pages to Create

### Priority 1: Core Navigation Pages
1. **Services** (`/services/index.html`)
2. **Approach** (`/approach/index.html`)
3. **Contact** (`/contact/index.html`)
4. **About** (`/about/index.html`)
5. **Insights Listing** (`/insights/index.html`)

### Priority 2: Article Pages
6. **The Relay** (`/insights/the-relay/index.html`)
7. **Behind the Build** (`/insights/behind-the-build/index.html`)
8. **A New Beginning** (`/insights/a-new-beginning/index.html`)
9. **AI as Companion** (`/insights/unexpected-friendship/index.html`)

### Priority 3: Legal Pages
10. **Privacy Policy** (`/privacy/index.html`)
11. **Legal Notice** (`/legal/index.html`)

---

## Design Constraints

### Must Use
- Existing CSS from `site/css/styles.css`
- Component patterns from homepage (service-card-v2, glass-card, value-card, insight-card)
- Section structure pattern: `section > container > section-header + grid`
- Scroll reveal animations with `.reveal` class
- Footer and header from homepage (adjust active nav link)

### Must Not
- Create new CSS (use existing tokens/classes)
- Invent copy (use docs/content/ sources)
- Change design system values
- Use absolute paths for local navigation (use relative paths like `../` for subfolders)

### Navigation Paths
When in subfolders, use relative paths:
- Logo: `../images/logo-footer.svg`
- CSS: `../css/styles.css`
- Home link: `/` or `../`
- Other pages: `/services/`, `/approach/`, etc.

---

## Page Specifications

### Services Page
**URL:** `/services/`
**Layout:**
- Page hero (dark, centered)
- 4 service sections alternating dark/light
- Each service: expanded description, deliverables list, CTA
- Final CTA section

**Components:**
- Use `service-card-v2` pattern for service details
- Use `value-card` for deliverables where appropriate

**Content Source:** Homepage service cards + expanded deliverables

---

### Approach Page
**URL:** `/approach/`
**Layout:**
- Page hero (dark)
- 4 phase sections with anchor IDs (#discovery-diagnosis, #mapping-path, #implementation, #knowledge-transfer)
- Each phase: expanded description, what happens, deliverables
- Principles section (grid of value cards)
- Final CTA

**Components:**
- Use `glass-card` for phase cards
- Use `value-card` for principles

**Content Source:** Homepage four-phase section + expanded content

---

### Contact Page
**URL:** `/contact/`
**Layout:**
- Page hero (dark)
- Two-column layout: form + alternative contact
- Form fields: Name, Email, Company (optional), Message
- Alternative: email link, LinkedIn, expectations list

**Components:**
- Form styling (add to CSS if needed)
- `glass-card` for alternative contact boxes

**Form Backend:** Formspree (action="https://formspree.io/f/xwpkjzqr")

---

### About Page
**URL:** `/about/`
**Layout:**
- Page hero (dark)
- About Andreas section (two-column: text + card)
- Philosophy section (grid of glass cards)
- Company info section
- Final CTA

**Components:**
- `value-card` for experience/connect boxes
- `glass-card` for philosophy principles

---

### Insights Listing
**URL:** `/insights/`
**Layout:**
- Page hero (dark)
- Grid of insight cards (2x2)
- CTA section

**Components:**
- Use `insight-card` component
- Image placeholder for cards (solid background or gradient)

**Content Source:** `docs/content/insights/` markdown files

---

### Article Template
**URL:** `/insights/[slug]/`
**Layout:**
- Article header (title, meta, tag)
- Article content (prose styling)
- Author bio section
- Related articles (2 insight cards)
- Footer

**Components:**
- Article-specific CSS classes needed:
  - `.article` container
  - `.article__header`, `.article__content`, `.article__author`
  - Prose styles for h2, h3, blockquote, lists, code

**Content Source:** Individual markdown files in `docs/content/insights/`

---

### Legal Pages
**URL:** `/privacy/`, `/legal/`
**Layout:**
- Page hero (dark, minimal)
- Article-style content (prose)
- No CTA needed

**Components:**
- Use article content styling

---

## Implementation Notes

### CSS Additions Needed
Sky should add these classes to `site/css/styles.css`:

1. **Contact Form Styles**
   - `.form-group`, `.form-label`, `.form-input`, `.form-textarea`
   - Dark theme friendly (light text on dark inputs)

2. **Article/Prose Styles**
   - `.article`, `.article__header`, `.article__content`
   - Typography for h2, h3, blockquote, lists
   - `.article__author` bio card

3. **Page Hero**
   - `.page-hero` for inner pages (simpler than homepage hero)

### Sitemap
Create `site/sitemap.xml` after all pages are built.

---

## Quality Checklist

For each page:
- [ ] Uses relative paths for assets in subfolders
- [ ] Header nav has correct active state
- [ ] Footer links work
- [ ] Mobile responsive (test 320px, 375px, 768px)
- [ ] Scroll reveal animations work
- [ ] Text contrast passes (dark on light, light on dark)
- [ ] Meta tags updated (title, description, canonical, OG)
