# CLAUDE.md - LT.Solutions v3

This file provides guidance to Claude Code and other AI agents working on this repository.

## Project Overview

**Company:** LT.Solutions (Let's Talk Solutions Ltd), UK
**Domain:** Atlassian consultancy and service operations
**Website:** https://lt.solutions
**Brand:** "Confident Minimalism" - enterprise credible + human approachable

**Core Services:**
1. JSM Implementation & Optimisation - Jira Service Management setup
2. Assets (CMDB) & Service Operations - Configuration management database
3. Opsgenie & Incident Management - On-call, escalation, comms
4. Automation & Integration - Workflow automation, API integrations

**Target Audience:** IT operations leaders, Service Delivery Managers, ITSM Leads, Atlassian Admins, CIO stakeholders

---

## Current Phase: PRE-LAUNCH QA

**Goal:** GET THE SITE LIVE ASAP

**Status:** All 12 pages built, animated glows added, images wired. Final polish before deploy.

**Completed (Session 2026-01-30):**
- ✅ Article hero images wired (correct images per article)
- ✅ OG images connected for all 4 articles
- ✅ Author headshots replaced (was "AN" placeholder)
- ✅ Sitemap validated (all 12 pages)
- ✅ Images folder reorganised (`/media/` → `/images/`)
- ✅ Animated glows added to ALL pages (was homepage only)
- ✅ Colour-coded glows per page type (blue, green, amber, red, indigo)
- ✅ Glow sync via UNIX timestamp (all pages rotate in lockstep)
- ✅ Undertone depth layer added (secondary glow, reverse rotation)

**Remaining:**
1. **Homepage glow too wide** - Needs to match tighter inner page style
2. **Homepage colour** - Consider shifting from red to another colour
3. **White cards feel "off"** - Too stark against dark, need warmth/depth
4. **CTA buttons static state** - Something not professional when not hovered
5. **Mobile glow** - Don't shrink glow on small screens (< 730px breakpoint)
6. **Missing images** - Overview page, Insights hub need card images
7. Contact form testing
8. Deploy to GitHub Pages

---

## Session Handover (2026-01-30)

### What Was Built
- **Glow system**: Animated radial gradients on all 12 pages
- **Colour variants**: `.page-hero--blue`, `--green`, `--amber`, `--red`, `--soft-blue`, `--indigo`, `--neutral`
- **Sync script**: `/site/js/glow-sync.js` - uses negative `animation-delay` from `Date.now()`
- **Undertone layer**: `::after` pseudo-elements, reverse rotation at 45s (vs 30s primary)

### Known Issues (See screenshots in `/site/`)
| Screenshot | Issue |
|------------|-------|
| `current-view.png` | Homepage glow spreads too wide |
| `wwhats_wrong.png` | White cards on Services look flat |
| `whhats_wrong2.png` | Approach page cards lack depth |
| `whats_wrong3.png` | About page white cards disconnected |

### Next Session Priorities
1. Tighten homepage glow (match inner page focus)
2. Add subtle glow/warmth to white cards on dark sections
3. Review CTA button static states
4. Mobile breakpoint (730px) - maintain glow size on small screens
5. Form testing + deploy

### IMPORTANT: Product Pivot Coming
Andreas mentioned LT.Solutions may expand from **services-only** to **services + product**. Details TBD - this will impact site structure, messaging, and potentially new pages. Watch for this in next sessions.

### Reference Screenshots (in `/site/insights/`)
- `this_looks_great.png` - Good example of inner page glow
- `mockup_what_we_should_have.png` - Target design direction
- `we_are_losing_the_red_moving_background_from_index.png` - Homepage baseline

---

## Repository Structure

```
LTsolutions-v3/
├── site/           # PRODUCTION WEBSITE ONLY - all HTML/CSS/JS/images here
├── docs/           # Briefs, decisions, reviews, positioning, research
├── agents/         # Agent init files and chain tasks
├── lab/            # Active experiments (CMDB icons, mockups)
├── archive/        # Completed/abandoned experiments
└── ops/            # Orchestration scripts
```

### Key Files

| File | Purpose |
|------|---------|
| `docs/status.md` | Current project state and remaining tasks |
| `docs/design-handover.md` | Complete design system documentation |
| `docs/positioning/primary-offer.md` | Core messaging and value proposition |
| `site/css/styles.css` | Design system (1800+ lines) |

---

## Architecture

### No Build Process
Pure HTML/CSS/JS with no frameworks or preprocessors. Open HTML files directly in browser to view.

### Technology Stack
- Vanilla HTML5, CSS3, JavaScript
- Google Fonts (Inter + Space Grotesk)
- No npm, no bundlers, no preprocessors
- Static hosting (GitHub Pages)

### Design Tokens (in styles.css)

**Colors:**
- Navy: `#0B1728` (primary)
- Red: `#C41E3A` (accent/CTA)
- White: `#FFFFFF`
- Atlassian Blue: `#0052CC` (partnership)
- Trust Green: `#00875A` (success)

**Typography:**
- Headings: Space Grotesk (500, 600, 700)
- Body: Inter (400, 500, 600, 700)

**Spacing:** 8px base grid (--space-1 through --space-20)

---

## Working Rules

1. **Production code only in `site/`** - no experiments, no drafts
2. **Decisions documented in `docs/decisions/`**
3. **No AI tool naming in production copy** - keep professional
4. **Mobile-first, accessible, fast** - WCAG AA baseline
5. **UK English spelling** - colour, organisation, optimise
6. **Keep it simple** - no over-engineering, no unused code

---

## The Team

| Agent | Init File | Role |
|-------|-----------|------|
| **Claudelito** | `agents/init-claudelito.md` | Orchestrator, strategic direction |
| **Sky** | `agents/init-codex-sky.md` | Frontend builder (HTML/CSS/JS) |
| **Claude-writo** | `agents/init-claude-writo.md` | Content creation, copy, articles |
| **Gemini/Aladdin** | `agents/init-gemini-aladdin.md` | Timeboxed research |
| **Design Expert** | `agents/init-claude-code-design-expert.md` | UX review, accessibility |
| **Grok** | `agents/init-grok-aurora.md` | Visual design, graphics |

---

## Quick Start

1. Read `docs/status.md` for current state
2. Read your agent init file in `agents/`
3. Reference `docs/design-handover.md` for design system
4. Make changes only in `site/` folder
5. Test locally by opening HTML files in browser

---

## Deployment

Site deploys via GitHub Pages. Custom domain configured in `CNAME` file (lt.solutions).

To deploy:
1. Push to main branch
2. GitHub Pages auto-deploys from `site/` folder
3. DNS points lt.solutions to GitHub Pages
