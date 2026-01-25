# LT.solutions rebuild status

Updated: 2026-01-25

## Current objective
QA and content completion - not launch ready yet.

## Completed
- Positioning spine locked (docs/positioning/primary-offer.md)
- Homepage brief and copy blocks (docs/briefs/, docs/content/)
- Review checklist (docs/reviews/review-checklist.md)
- Homepage v1 implemented (site/index.html)
- Homepage design review fixes applied (contrast, trust badges, focus states, phase grid, orphaned cards)
- Service card v2 implemented (icon + badge, benefits, gradient CTA)
- Gradient text on hero H1
- Exotic red→blue CTA buttons
- Gemini card research (docs/research/service-card-patterns.md)
- Card variants archived (archive/lab-card-variants/)
- CSS opacity tokens added (--color-red-10 through --color-red-45)
- Page rollout brief created (docs/briefs/page-rollout.md)
- Tasks for Sky created (docs/runbooks/tasks-for-sky-page-rollout.md)
- Chain file for Sky created (agents/chain/07-sky-page-rollout.md)
- **PAGE ROLLOUT COMPLETE (Sky)**:
  - Contact page (site/contact/index.html) ✅
  - Services page (site/services/index.html) ✅
  - Approach page (site/approach/index.html) ✅
  - About page (site/about/index.html) ✅
  - Insights listing (site/insights/index.html) ✅
  - 4 article pages converted ✅
    - site/insights/the-relay/index.html
    - site/insights/behind-the-build/index.html
    - site/insights/a-new-beginning/index.html
    - site/insights/unexpected-friendship/index.html
  - Privacy policy (site/privacy/index.html) ✅
  - Legal notice (site/legal/index.html) ✅
  - Sitemap (site/sitemap.xml) ✅
- CMDB icons created (lab/cmdb-icons/) - 12 object types, 3 variants (dark, light, v2 speech bubble)
- **Design review complete** (docs/reviews/design-review-full-site.md)
- **Design fixes implemented** (docs/reviews/sky-design-fixes-complete.md) - All P0/P1 resolved

## In progress
- None

## Remaining work
1. **Link audit** - internal links broken locally (trailing slash issues?)
2. **Images** - article images not added, placeholders only
3. **Author headshot** - missing from author bio sections
4. **Article links** - verify all internal/external links work
5. **Form validation** - contact form not fully tested
6. **Visual QA** - full breakpoint testing
7. **Deploy** - GitHub Pages + DNS

## Design fixes applied (Sky 2026-01-25)
All P0 and P1 issues resolved:
- ✅ Homepage phase cards contrast fixed
- ✅ Services page text visibility fixed
- ✅ Approach page Phase 4 card fixed
- ✅ Dark/light balance improved across pages
- ✅ Author avatar centred
- ✅ Article links fixed (no more href="#")
- ✅ YouTube video embedded
- ✅ Related cards have gradient placeholder

**Summary:** `docs/reviews/sky-design-fixes-complete.md`

## Site structure (complete)
```
site/
├── index.html              # Homepage
├── sitemap.xml             # XML sitemap
├── css/styles.css          # Unified design system
├── images/                 # Assets (logo, favicon, OG images)
├── contact/index.html      # Contact form
├── services/index.html     # Services overview
├── approach/index.html     # Methodology phases
├── about/index.html        # About Andreas/LT
├── insights/
│   ├── index.html          # Articles listing
│   ├── the-relay/          # Article
│   ├── behind-the-build/   # Article
│   ├── a-new-beginning/    # Article
│   └── unexpected-friendship/  # Article
├── privacy/index.html      # Privacy policy
└── legal/index.html        # Legal notice
```

## Agents available
- Claude Code (orchestrator): agents/init-claude-code.md
- Sky/Codex (frontend): agents/init-codex-sky.md
- Gemini/Aladdin (research): agents/init-gemini-aladdin.md
- Design Expert: agents/init-claude-code-design-expert.md

## Non-negotiables
- No experiment artefacts in production site folder
- Clear primary offer statement above the fold
- Mobile first, accessible, fast
- No AI tool naming in production copy
