# Sprint plan: Homepage v1

1 week, 3 sprints of 2 days each, plus review day.

---

## Sprint 1: Days 1-2
**Goal:** Core messaging aligned with positioning

### Deliverables
- [ ] Hero headline and subhead updated (Task 1)
- [ ] Service section copy updated (Task 2)
- [ ] Primary CTA text updated (Task 5)

### Definition of done
- Hero passes 10-second clarity test
- Service cards name JSM, Assets, Opsgenie
- CTA says "Book a short call"

---

## Sprint 2: Days 3-4
**Goal:** Section structure and copy cleanup

### Deliverables
- [ ] Problem/outcome section restructured (Task 3)
- [ ] Four phase section simplified (Task 4)
- [ ] AI disclosure removed from footer (Task 6)

### Definition of done
- Problem/outcome bullets visible
- Phase descriptions are single sentences
- No AI or tool references in page

---

## Sprint 3: Days 5-6
**Goal:** Polish and validation

### Deliverables
- [ ] Trust indicators updated (Task 7)
- [ ] Mobile and accessibility validated (Task 8)

### Definition of done
- Stats show 15+ years and 4,000+ seats
- No horizontal scroll at 320px
- All interactive elements have visible focus

---

## Review: Day 7
**Goal:** Full quality gate

### Activities
- Run docs/reviews/review-checklist.md against site/index.html
- Fix any failing checks
- Document remaining issues in docs/backlog.md

### Ship criteria
- All P0 checklist items pass
- No console errors
- Page weight under 500KB

---

## Risks and mitigations

| Risk | Mitigation |
|------|------------|
| Copy changes break layout | Test each change at 320px and 1200px |
| Scope creep into services page | Only touch site/index.html this week |
| Accessibility issues found late | Run contrast and focus checks after each sprint |

---

## Dependencies
- docs/positioning/primary-offer.md (complete)
- docs/briefs/homepage.md (complete)
- docs/briefs/homepage-copy-blocks.md (complete)
- docs/reviews/review-checklist.md (complete)
