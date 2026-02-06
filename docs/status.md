# LT.solutions rebuild status

Updated: 2026-02-04

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

## Session Progress (2026-02-04)

### Completed This Session
- ✅ **Service Pillar CTAs** - Replaced gradient pill buttons with text links + arrow
- ✅ **Approach Section** - Replaced glass card grid with timeline component (dots, connecting line, "01/02/03/04" numbering)
- ✅ **Section Footer CTAs** - Changed to text links with arrows (Services, Approach sections)
- ✅ **Homepage Glow Fixed** - Changed from wide circle to narrow ellipse (40% 30%) so rotating rectangle is visible
- ✅ **Approach Text Bug** - Fixed white-on-white text (link styling was overriding colors)
- ✅ **Link Arrow Utility** - Created `.link-arrow` class for text link CTAs

### In Progress
- ⏸️ **Hero CTAs** - First implementation rejected ("not nice"). New concepts proposed, awaiting decision.

### New Files Created
- `docs/reviews/design-review-index-ctas.md` - CTA design recommendations
- `docs/reviews/design-review-hero-redesign.md` - Hero redesign concepts (CTAs + glow)
- `docs/sessions/2026-02-04-session-handover.md` - Session handover notes

---

## Pending Decision: Hero CTAs

Three concepts proposed in `docs/reviews/design-review-hero-redesign.md`:

| Concept | Primary CTA | Secondary CTA |
|---------|-------------|---------------|
| **A (Recommended)** | White button (#f0f0f2), dark text | Text link with arrow |
| **B** | Single white button | None |
| **C** | Transparent pill, white border | Text link with arrow |

**Action:** Choose concept, then implement

---

## Remaining to Launch

### Priority 1 - Fix Before Deploy
1. ~~**Homepage glow too wide**~~ ✅ FIXED - Now narrow ellipse
2. **Hero CTAs** - Implement chosen concept (A, B, or C)
3. **White cards** - Too stark against dark backgrounds, need warmth/depth
4. **Final CTA section** - Match hero treatment once decided

### Priority 2 - Polish
5. **Mobile glow breakpoint** - Don't shrink glow below 730px
6. **Missing card images** - Overview page, Insights hub
7. **Form testing** - Validate contact form

### Priority 3 - Deploy
8. **GitHub Pages** - Push to main, verify DNS

---

## Completed (Previous Sessions)

### Infrastructure
- Git repository initialized
- Folder structure established (site/, docs/, agents/, lab/, archive/)
- Design system complete (2000+ lines CSS)
- All agent init files updated with current context

### Content & Pages
- Positioning spine locked (docs/positioning/primary-offer.md)
- Homepage brief and copy blocks
- All 12 pages built
- Sitemap.xml, robots.txt, CNAME

### Design & Assets
- Design review completed (P0/P1 issues fixed)
- Assets migrated from old site
- CMDB icons created (lab/cmdb-icons/)
- Animated glows on ALL 12 pages
- Colour-coded glows per page (blue/green/amber/red/indigo/neutral)
- Glow sync via UNIX timestamp (`/site/js/glow-sync.js`)

---

## UPCOMING: Product Pivot

**Note:** Andreas mentioned LT.Solutions may expand from services-only to **services + product**. Details TBD. This will impact:
- Site structure
- Messaging/positioning
- Potentially new pages

Watch for updates in next sessions.

---

## Site Structure

```
site/
├── index.html              # Homepage
├── css/styles.css          # Design system (2000+ lines)
├── js/glow-sync.js         # Glow animation sync
├── images/                 # All assets
├── services/index.html     # Services overview
├── approach/index.html     # 4-phase methodology
├── about/index.html        # About Andreas/LT
├── contact/index.html      # Contact form
├── insights/
│   ├── index.html          # Articles listing
│   ├── the-relay/
│   ├── behind-the-build/
│   ├── a-new-beginning/
│   └── unexpected-friendship/
├── privacy/index.html
├── legal/index.html
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
