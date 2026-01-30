# LT.solutions rebuild status

Updated: 2026-01-30

## Current Phase: PRE-LAUNCH QA

**Goal:** GET THE SITE LIVE ASAP

---

## Project Overview

**Company:** LT.Solutions (Let's Talk Solutions Ltd), UK
**Domain:** Atlassian consultancy and service operations
**Website:** https://lt.solutions
**Brand:** "Confident Minimalism" - enterprise credible + human approachable

**Core Services:**
1. JSM Implementation & Optimisation
2. Assets (CMDB) & Service Operations
3. Opsgenie & Incident Management
4. Automation & Integration

---

## Completed

### Infrastructure
- Git repository initialized
- Folder structure established (site/, docs/, agents/, lab/, archive/)
- Design system complete (1800+ lines CSS)
- All agent init files updated with current context

### Content & Pages
- Positioning spine locked (docs/positioning/primary-offer.md)
- Homepage brief and copy blocks
- All 12 pages built:
  - Homepage (site/index.html)
  - Services (site/services/index.html)
  - Approach (site/approach/index.html)
  - About (site/about/index.html)
  - Contact (site/contact/index.html)
  - Insights listing (site/insights/index.html)
  - 4 article pages (the-relay, behind-the-build, a-new-beginning, unexpected-friendship)
  - Privacy (site/privacy/index.html)
  - Legal (site/legal/index.html)
- Sitemap.xml, robots.txt, CNAME

### Design & Assets
- Design review completed (P0/P1 issues fixed)
- Assets migrated from old site:
  - Author headshots (Andreas.png, andreas.jpeg)
  - Article images (bench+image.png, mint-seed-pot.jpg, will-kew-bench.jpg, the-unexpected-friendship.png)
  - Value icons (value-clarity.svg, etc.)
  - Phase icons (discovery, mapping, implementation, delivery)
  - OG images
- CMDB icons created (lab/cmdb-icons/)

---

## Session Progress (2026-01-30)

### Completed This Session
- ✅ Article hero images wired (mint-seed-pot, will-kew-bench, the-unexpected-friendship, bench+image)
- ✅ OG images connected for all 4 articles
- ✅ Author headshots replaced (was "AN" placeholder → andreas.jpeg)
- ✅ Sitemap validated (all 12 pages correct)
- ✅ Images folder reorganised (`/media/` → `/images/`)
- ✅ **Animated glows on ALL 12 pages** (was homepage only)
- ✅ Colour-coded glows per page (blue/green/amber/red/indigo/neutral)
- ✅ Glow sync via UNIX timestamp (`/site/js/glow-sync.js`)
- ✅ Undertone depth layer (secondary glow, reverse rotation)

### New Files Created
- `/site/js/glow-sync.js` - Synchronises glow rotation across all pages

### CSS Additions
- `.page-hero::before` / `::after` - Animated glow + undertone
- `.article-hero-glow::before` / `::after` - Article page glows
- Colour variants: `--blue`, `--green`, `--amber`, `--red`, `--soft-blue`, `--indigo`, `--neutral`

---

## Remaining to Launch

### Priority 1 - Fix Before Deploy
1. **Homepage glow too wide** - Needs tighter focus like inner pages
2. **Homepage colour shift** - Consider non-red colour for variety
3. **White cards** - Too stark against dark backgrounds, need warmth/depth
4. **CTA buttons** - Static state looks off (hover is fine)

### Priority 2 - Polish
5. **Mobile glow breakpoint** - Don't shrink glow below 730px
6. **Missing card images** - Overview page, Insights hub
7. **Form testing** - Validate contact form

### Priority 3 - Deploy
8. **GitHub Pages** - Push to main, verify DNS

---

## UPCOMING: Product Pivot

**Note:** Andreas mentioned LT.Solutions may expand from services-only to **services + product**. Details TBD. This will impact:
- Site structure
- Messaging/positioning
- Potentially new pages

Watch for updates in next sessions.

---

## Reference Screenshots (in `/site/` and `/site/insights/`)

| File | Shows |
|------|-------|
| `current-view.png` | Homepage glow too wide |
| `wwhats_wrong.png` | White cards on Services flat |
| `whhats_wrong2.png` | Approach cards lack depth |
| `whats_wrong3.png` | About page white cards |
| `this_looks_great.png` | Good inner page glow example |
| `mockup_what_we_should_have.png` | Target design direction |

---

## Site Structure

```
site/
├── index.html              # Homepage
├── css/styles.css          # Design system (1800+ lines)
├── images/                 # All assets
│   ├── Andreas.png         # Author headshot (large)
│   ├── andreas.jpeg        # Author headshot (optimized)
│   ├── logo-footer.svg     # Main logo
│   ├── favicon.svg         # Tab icon
│   ├── bench+image.png     # Article image
│   ├── mint-seed-pot.jpg   # Article image
│   ├── will-kew-bench.jpg  # Article image
│   ├── the-unexpected-friendship.png  # Article image
│   ├── value-*.svg         # Value icons
│   ├── og/                 # Open Graph images
│   └── ...
├── services/index.html     # Services overview
├── approach/index.html     # 4-phase methodology
├── about/index.html        # About Andreas/LT
├── contact/index.html      # Contact form
├── insights/
│   ├── index.html          # Articles listing
│   ├── the-relay/index.html
│   ├── behind-the-build/index.html
│   ├── a-new-beginning/index.html
│   └── unexpected-friendship/index.html
├── privacy/index.html      # Privacy policy
├── legal/index.html        # Legal notice
├── sitemap.xml
├── robots.txt
└── CNAME                   # lt.solutions
```

---

## The Team

| Agent | File | Role |
|-------|------|------|
| **Claudelito** | agents/init-claudelito.md | Orchestrator, strategic direction |
| **Sky** | agents/init-codex-sky.md | Frontend builder (HTML/CSS/JS) |
| **Claude-writo** | agents/init-claude-writo.md | Content creation, copy, articles |
| **Gemini/Aladdin** | agents/init-gemini-aladdin.md | Timeboxed research |
| **Design Expert** | agents/init-claude-code-design-expert.md | UX review, accessibility |
| **Grok** | agents/init-grok-aurora.md | Visual design, graphics |

---

## Non-negotiables

- No experiment artefacts in production site folder
- Clear primary offer statement above the fold
- Mobile first, accessible, fast
- No AI tool naming in production copy
- WCAG AA accessibility baseline
- UK English spelling
