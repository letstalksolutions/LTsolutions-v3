# Sky: Page Rollout Implementation

Read agents/init-codex-sky.md before acting.

## Context
Homepage is complete. Design review fixes applied. Now extend the design system to all remaining pages.

## Reference Files
- **Brief:** `docs/briefs/page-rollout.md` - Full page specifications
- **Tasks:** `docs/runbooks/tasks-for-sky-page-rollout.md` - Ordered implementation tasks
- **Template:** `site/index.html` - Header/footer source
- **Styles:** `site/css/styles.css` - Design system
- **Content:** `docs/content/insights/` - Article markdown files

## Implementation Order

Follow the tasks in `docs/runbooks/tasks-for-sky-page-rollout.md` exactly:

### Sprint 1: Foundation (P0)
1. Add missing CSS classes (page-hero, form, article styles)
2. Create Contact page
3. Create Services page

### Sprint 2: Core Pages (P1)
4. Create Approach page (with anchor IDs)
5. Create About page
6. Create Insights listing

### Sprint 3: Articles (P1-P2)
7. Add article template CSS
8. Convert The Relay article
9. Convert Behind the Build article
10. Convert A New Beginning article
11. Convert Unexpected Friendship article

### Sprint 4: Legal & Polish (P2)
12. Create Privacy Policy page
13. Create Legal Notice page
14. Create sitemap.xml
15. Validate all pages

## Critical Rules

### Paths
- Pages in subfolders MUST use relative paths:
  - CSS: `../css/styles.css`
  - Images: `../images/logo-footer.svg`
  - Deeper nested (insights articles): `../../css/styles.css`

### Navigation
- Copy header/footer from `site/index.html`
- Update `nav__link--active` class for each page
- Keep all navigation links as absolute paths (`/services/`, `/contact/`, etc.)

### Content
- Do NOT invent copy
- Use content from `docs/briefs/page-rollout.md`
- Use article content from `docs/content/insights/`
- Expand homepage card content for detail pages

### CSS
- Use existing design tokens and classes
- Only add classes specified in Task 1.1 and Task 3.1
- Follow existing BEM patterns

## Validation Checklist
After each page:
- [ ] Opens correctly in browser
- [ ] All nav links work
- [ ] Mobile responsive at 320px, 768px
- [ ] Text contrast passes
- [ ] Scroll reveal animations work

## Do NOT
- Create new design patterns
- Change the design system
- Skip any pages
- Use absolute file paths for assets in subfolders

## Completion
When all pages complete:
1. Run full validation (Task 4.4)
2. Update `docs/status.md` with completion status
3. Report any issues encountered
