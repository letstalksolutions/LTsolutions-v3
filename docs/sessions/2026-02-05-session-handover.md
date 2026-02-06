# Session Handover - 5 February 2026

## Session Focus
1. ~~Hero section refinements and design consistency across pages~~ (AM session)
2. **Complete homepage redesign — services + product positioning with Schema-Forge** (PM session)

---

## PM Session: Homepage Redesign

### Major Change: LT.Solutions is now Services + Product

Andreas is launching **Schema-Forge**, an Atlassian app for JSM Assets (CMDB templates). The homepage has been completely redesigned to position LT.Solutions as both a consultancy AND a product company.

### New Homepage Structure

1. **Dual-Identity Hero**
   - Left: Services messaging ("Modernise service management. Build what's next.")
   - Right: Schema-Forge product teaser card with "Coming Soon" badge + waitlist CTA

2. **"Two Ways We Solve Problems" Section**
   - Side-by-side track cards: Consultancy (red accent) vs Product (amber accent)

3. **Schema-Forge Showcase Section**
   - Forge logo + JetBrains Mono typography
   - Stats: 75% CMDB failure rate, 10 enterprise schemas
   - Waitlist form (Formspree: `xkgqllow`)
   - 4 template category cards (Cloud, Cybersecurity, Software, Vendor)
   - Orange grid background pattern

4. **Services Timeline**
   - Reused approach-timeline component for JSM, Assets, Opsgenie, Automation

5. **Revamped Track Record Section** (4 glass cards)
   - **15+ years** — Full Atlassian suite mastery (not just "3 tools")
   - **AI-augmented** — Agent orchestration, teaching AI workflows
   - **Knowledge first** — Transfer & enablement focus
   - **Hands-on** — Real implementation, not just strategy
   - *Removed:* "4k-5k seat rollouts" (was one client), "3 tools" stat, "ISO-ready" (not certified)

6. **Updated Footer**
   - Added "Products" section with Schema-Forge link

### Design Integration from Schema-Forge

- Colours: `#ed8936` (orange), `#f6ad55` (amber)
- Typography: JetBrains Mono for product elements
- Tagline: "Craft your perfect CMDB"
- Hammer icon SVG throughout
- Pulsing green dot on "Coming Soon" badges
- Subtle grid background pattern

### Files Modified (PM Session)
- `CLAUDE.md` — Streamlined structure
- `site/index.html` — Complete redesign

### Schema-Forge Reference
- Site location: `/Users/andreas/projects/schema-forge/site/`
- Status: Coming soon (waitlist mode)

---

## AM Session: Changes Made

### Hero CTAs
- Replaced rejected red buttons with new treatment:
  - **Primary:** Warm mist button (`#ebe9e6`), dark text, glow bloom hover
  - **Secondary:** Text link with arrow, subtle underline reveal on hover
- Custom cubic-bezier easing for "confident" feel
- Added `.btn--hero-primary` and `.hero-link-secondary` classes
- Updated both hero and final CTA section

### Value Cards (Problems We Solve section)
- Simplified hover effects to match "Confident Minimalism":
  - 2px lift (down from 4px)
  - Soft shadow (`shadow-md`)
  - Removed: gradient line animations, red border change, icon scaling

### Hero Glow Animation
- Changed from fixed pixel sizing to percentage-based (200% × 200%)
- Now matches inner pages (page-hero) approach exactly
- Red glow with same `circle at center` gradient pattern

### Hero Section Layout
- Reduced padding: `--space-16` / `--space-10` (was `--space-20` / `--space-16`)
- Slimmer section = narrower glow rectangle, closer to inner pages
- Trust pills: `flex-wrap: nowrap` to stay on one horizontal line, tighter gap

---

## Files Modified
- `site/css/styles.css` — Hero CTA classes, value card hover, hero glow, hero padding
- `site/index.html` — Hero CTA markup, final CTA section markup

---

## Remaining for Launch

### Priority 1 - Before Deploy
- [ ] White cards need warmth/depth (still too stark)
- [ ] Final CTA section — verify it matches hero treatment

### Priority 2 - Polish
- [ ] Mobile glow breakpoint (don't shrink below 730px)
- [ ] Missing card images (Overview, Insights hub)
- [ ] Form testing

### Priority 3 - Deploy
- [ ] Push to main branch
- [ ] Verify GitHub Pages deployment
- [ ] Check DNS/CNAME

---

## Notes
- User has 46" screen — glow sizing was tested at large viewport
- Percentage-based glow adapts to section aspect ratio
- "Confident Minimalism" = restrained interactions, no busy hover effects

---

## Key Context for Next Session
- **LT.Solutions = Services + Product** — Schema-Forge is the first product
- **Schema-Forge** = Atlassian app for JSM Assets (CMDB templates), coming soon
- **Andreas knows full Atlassian suite** — not just "3 tools"
- **AI orchestration** is part of the value prop — pioneering AI-augmented delivery
- **Knowledge transfer** is core to every engagement
- **Hands-on** — Andreas does real implementation work, not just advisory
- **Don't claim ISO certification** — has experience but not certified
