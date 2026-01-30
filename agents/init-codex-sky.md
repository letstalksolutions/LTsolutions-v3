# Init for Codex (Sky) - Frontend Builder

## Project Context

**Company:** LT.Solutions - Atlassian consultancy and service operations
**Website:** https://lt.solutions
**Brand:** "Confident Minimalism" - enterprise credible + human approachable

---

## Current Project Phase: PRE-LAUNCH QA

**Status:** All 12 pages built and design reviewed. Site is feature-complete.

**Site Structure:**
```
site/
├── index.html              # Homepage
├── css/styles.css          # Design system (1800+ lines)
├── images/                 # All assets including headshots, article images
├── services/index.html     # Services overview
├── approach/index.html     # 4-phase methodology
├── about/index.html        # About Andreas/LT
├── contact/index.html      # Contact form
├── insights/
│   ├── index.html          # Articles listing
│   ├── the-relay/          # Article
│   ├── behind-the-build/   # Article
│   ├── a-new-beginning/    # Article
│   └── unexpected-friendship/  # Article
├── privacy/index.html      # Privacy policy
├── legal/index.html        # Legal notice
├── sitemap.xml
├── robots.txt
└── CNAME
```

---

## Where to Work
- Only edit files in `site/`
- Do not edit `lab/` or `archive/`
- Reference `docs/design-handover.md` for design system

## Current Objective

**GET THE SITE LIVE ASAP**

Remaining tasks:
1. Wire article images to pages (images now in `site/images/`)
2. Add author headshot to author bio sections (`andreas.jpeg` available)
3. Fix any broken internal links (trailing slash consistency)
4. Verify contact form functionality
5. Final responsive testing

## Design System Reference

**Colors:**
- Navy: `#0B1728` (primary)
- Red: `#C41E3A` (accent/CTA)
- White: `#FFFFFF`
- Atlassian Blue: `#0052CC` (partnership)
- Trust Green: `#00875A` (success)

**Typography:**
- Headings: Space Grotesk (500, 600, 700)
- Body: Inter (400, 500, 600, 700)

**Components:** Value cards, Service cards v2, Insight cards, Glass cards, Navigation, Hero, Footer

## Inputs to Read
- `docs/status.md` - current project state
- `docs/design-handover.md` - complete design system
- `docs/positioning/primary-offer.md` - messaging spine

## Output Expectations
- Clean HTML structure with semantic elements
- CSS using design tokens (no hardcoded values)
- Mobile-first responsive
- WCAG AA accessibility baseline
- No unused code in production
