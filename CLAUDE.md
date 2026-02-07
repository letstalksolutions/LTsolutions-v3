# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Company:** LT.Solutions (Let's Talk Solutions Ltd), UK
**Domain:** Atlassian consultancy (JSM, Assets/CMDB, Opsgenie, Automation)
**Website:** https://lt.solutions
**Brand:** "Confident Minimalism" - enterprise credible + human approachable
**Upcoming:** Schema Forge product (waitlist on homepage) — may expand site from services-only to services + product

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

- `site/css/styles.css` — Design system (~2500 lines): tokens, components, utilities
- `site/js/main.js` — Scroll reveals, mobile menu, carousel, form submissions
- `site/js/glow-sync.js` — Synchronises animated glow rotation across pages
- `docs/status.md` — **Read first**: current project state and priorities
- `docs/design-handover.md` — Complete design system documentation

## Architecture

### No Templating — Header/Footer Duplicated

Navigation and footer HTML are **copy-pasted across all 13 HTML files**. When updating nav links, the footer, or shared `<head>` elements, you must edit every page. Active nav state is set per-page with `.nav__link--active` and `aria-current="page"`.

### Design Tokens (in styles.css `:root`)

**Core Colours:**
- Navy `#0B1728` (primary background), Red `#C41E3A` (accent/CTA)
- Atlassian Blue `#0052CC`, Trust Green `#00875A`

**Typography:** Space Grotesk (headings), Inter (body), JetBrains Mono (code)

**Spacing:** 8px base grid (`--space-1` through `--space-20`)

### Page Structure Pattern

Every page follows this skeleton:
```
<body class="bg-dark">
  <a href="#main-content" class="skip-link">…</a>
  <header class="header">…</header>
  <section class="page-hero page-hero--[colour]" id="main-content">…</section>
  <section class="section section--dark|light">…</section>
  …more alternating sections…
  <footer class="footer">…</footer>
</body>
```

Sections alternate `.section--dark` (navy gradient) and `.section--light` (mist background). Within sections, content follows a **tag + title + subtitle** pattern via `.section__tag`, `.section__title`, `.section__subtitle`.

### Page Glow System

Hero sections have animated background glows via `::before`/`::after` pseudo-elements. Glows sync across pages via `glow-sync.js` using UNIX timestamp (30s primary cycle, 45s undertone cycle).

**Colour mapping:**
- Homepage: default (no modifier)
- Services: `.page-hero--blue`
- Approach: `.page-hero--green`
- About: `.page-hero--amber`
- Contact: `.page-hero--red`
- Insights: `.page-hero--soft-blue`

### Scroll Reveal System

Add `.reveal` class to any element for scroll-triggered fade-in (handled by IntersectionObserver in `main.js`). Stagger children with `.reveal-stagger > .reveal:nth-child(n)`.

### Component Patterns

- **Cards:** BEM naming (`.service-card`, `.service-card__title`, `.service-card__description`). Multiple card types: `.glass-card`, `.value-card`, `.service-card-v2`, `.insight-card`
- **Sections:** Alternate `.section--dark` / `.section--light`
- **CTAs:** Use `.link-arrow` class for text link CTAs with arrow icons
- **Buttons:** `.btn` with variants `.btn--primary`, `.btn--outline`, `.btn--ghost` and sizes `.btn--sm`, `.btn--lg`

### Forms

Two Formspree-backed forms:
- **Contact form** (`/contact/`) — ID `xwpkjzqr`
- **Schema Forge waitlist** (homepage) — ID `xykdgpea`

Both use fetch API submission with client-side success/error states in `main.js`.

### Performance Patterns

Pages use `<link rel="preconnect">` for Google Fonts, `<link rel="preload">` for critical CSS, `loading="lazy"` on images, and `fetchpriority="high"` on hero images. All JS is loaded with `defer`.

## Working Rules

1. **Production code only in `site/`** — no experiments, no drafts
2. **Decisions documented in `docs/decisions/`**
3. **No AI tool naming in production copy** — keep professional
4. **Mobile-first, accessible, fast** — WCAG AA baseline
5. **UK English spelling** — colour, organisation, optimise
6. **Keep it simple** — no over-engineering, no unused code
7. **Nav/footer changes touch all 13 HTML files** — don't forget any

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
