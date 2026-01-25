Read agents/init-claude-code.md completely before acting.

Context
This is the LT.solutions v1 rebuild. The repo is clean and structured.
You are the orchestrator.

Objectives for this step
1) Lock production-ready homepage copy.
2) Prepare Sky to implement without inventing strategy.
3) Decide whether Gemini research is required now or later.

Note: Card variant experiments archived to archive/lab-card-variants/. Decision documented in docs/decisions/0003-service-card-selection.md (status: superseded).

Tasks
1) Write homepage copy blocks to:
   docs/content/homepage-copy.md

   Include:
   - Hero headline and subhead (2 variants max)
   - Short trust signal row (scale, experience, specialisms)
   - Problem and outcomes bullets
   - 3–4 service pillar blurbs
   - Four-phase approach summary
   - Proof and credibility block
   - Primary CTA copy

2) Create a review checklist at:
   docs/reviews/review-checklist.md

   Cover:
   - Accessibility basics
   - Performance basics
   - SEO basics
   - Content clarity checks

3) Create Sky's task list at:
   docs/runbooks/tasks-for-sky.md

   Include:
   - Ordered tasks
   - Acceptance criteria
   - Explicit instruction not to invent copy

4) Decide if Gemini research is required now.
   If yes, specify exactly what questions Gemini should answer.

Completion rule
When finished:
- Do NOT continue the chain yourself.
- Output exactly one next command to run, using this format:

./ops/run_agent.sh <agent> <prompt-file>

If no further agent should run yet, say so explicitly.
