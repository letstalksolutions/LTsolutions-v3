# Init for Claude Code

## Context

Read `CLAUDE.md` at the repo root — it is the single source of truth for architecture, working rules, design tokens, and all 13 HTML page paths. Everything below supplements it with Claude Code-specific notes.

## Repo structure

- `site/` = production website only (deploys to Cloudflare Pages)
- `lab/` = active experiments (promote to `site/` when ready)
- `archive/` = completed or abandoned experiments
- `docs/` = briefs, decisions, positioning, reviews, session handovers
- `agents/` = agent init files

## Deployment

- **Cloudflare Pages** (`lt.solutions`) — manual: `npx wrangler pages deploy site --project-name lt-solutions --branch main`
- **GitHub Pages** — auto-deploys `site/` on push to `main` via GitHub Actions (`.github/workflows/deploy.yml`)
- Only `site/` folder contents are deployed; everything else (docs, agents, lab, CLAUDE.md) stays in the repo only

## Current goals

1. Pre-launch QA — get the site live
2. Read `docs/status.md` for current priorities and pending decisions
3. Review quality gates (accessibility, performance, maintainability)

## Working rules

- Decisions go in `docs/decisions/`
- Reviews go in `docs/reviews/`
- Session handovers go in `docs/sessions/`
- No AI tool naming in production file names or copy
- UK English spelling throughout
- Nav/footer changes must touch all 13 HTML files (see CLAUDE.md for full list)

## Key pitfalls

- White-on-white text in `.section--light` — always set explicit dark text colour
- Some pages have inline `<style>` blocks — check `<head>` not just `styles.css`
- No build step — changes to `site/` are live as soon as deployed
