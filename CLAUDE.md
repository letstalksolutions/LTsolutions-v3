# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Company:** LT.Solutions (Let's Talk Solutions Ltd), UK
**Domain:** Atlassian consultancy (JSM, Assets/CMDB, Opsgenie, Automation)
**Website:** https://lt.solutions
**Brand:** "Confident Minimalism" - enterprise credible + human approachable

## Development

**No build process.** Pure HTML/CSS/JS with no frameworks or preprocessors.

- **Preview:** Open any HTML file directly in a browser
- **Deploy:** Push to main branch → GitHub Pages auto-deploys from `site/` folder

## Repository Structure

- `site/` — **PRODUCTION ONLY** - all HTML/CSS/JS/images that deploy to GitHub Pages
- `docs/` — Briefs, decisions, reviews, positioning, session handovers
- `agents/` — Agent init files and chain task definitions
- `lab/` — Active experiments (promote to `site/` when ready)
- `archive/` — Completed/abandoned experiments

## Key Files

- `site/css/styles.css` — Design system (2000+ lines): tokens, components, utilities
- `site/js/glow-sync.js` — Synchronises animated glow rotation across pages
- `docs/status.md` — **Read first**: current project state and priorities
- `docs/design-handover.md` — Complete design system documentation

## Architecture

### Design Tokens (in styles.css)

**Core Colours:**
- Navy `#0B1728` (primary background), Red `#C41E3A` (accent/CTA)
- Atlassian Blue `#0052CC`, Trust Green `#00875A`

**Typography:** Space Grotesk (headings), Inter (body)

**Spacing:** 8px base grid (`--space-1` through `--space-20`)

### Page Glow System

Hero sections have animated background glows via `::before`/`::after` pseudo-elements:
- Colour variants: `.page-hero--blue`, `--green`, `--amber`, `--red`, `--indigo`, `--neutral`
- Glows sync across pages via `glow-sync.js` using UNIX timestamp

### Component Patterns

- **Cards:** BEM naming (`.service-card`, `.service-card__title`, `.service-card__description`)
- **Sections:** Alternate `.section--dark` (navy gradient) and `.section--light` (mist background)
- **CTAs:** Use `.link-arrow` class for text link CTAs with arrow icons

## Working Rules

1. **Production code only in `site/`** — no experiments, no drafts
2. **Decisions documented in `docs/decisions/`**
3. **No AI tool naming in production copy** — keep professional
4. **Mobile-first, accessible, fast** — WCAG AA baseline
5. **UK English spelling** — colour, organisation, optimise
6. **Keep it simple** — no over-engineering, no unused code

## Agent Team

This project uses multiple AI agents. Init files in `agents/`:

| Agent | Role |
|-------|------|
| Claudelito | Orchestrator, strategic direction |
| Sky (Codex) | Frontend builder (HTML/CSS/JS) |
| Claude-writo | Content creation, copy, articles |
| Gemini/Aladdin | Timeboxed research |
| Design Expert | UX review, accessibility |
| Grok/Aurora | Visual design, graphics |

## Quick Start

1. Read `docs/status.md` for current state and priorities
2. Read your agent init file in `agents/` if applicable
3. Reference `docs/design-handover.md` for design system details
4. Make changes only in `site/` folder
5. Test locally by opening HTML files in browser
