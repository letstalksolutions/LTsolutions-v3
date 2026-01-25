# Gemini research: Service card design patterns

Read agents/init-gemini-aladdin.md before acting.

## Context
We are redesigning service cards for LT.Solutions homepage. Current mockup in lab/card-mockup.png shows direction: icon + badge header, benefits list, gradient CTA button.

## Research questions

1) **Modern SaaS card patterns**
   - Review Stripe, Linear, Vercel, Notion pricing/feature cards
   - What layout patterns do they use?
   - How do they handle icon + text headers?
   - Screenshot or describe 3-5 examples

2) **Gradient button styles**
   - What gradient directions work best (LTR, diagonal, radial)?
   - What hover effects are current (glow, lift, color shift)?
   - Any accessibility concerns with gradients?

3) **Benefits/feature lists**
   - Checkmark vs bullet vs icon lists
   - Spacing and typography patterns
   - How many items before it feels cluttered?

4) **Dark card on dark background**
   - How do modern sites create separation?
   - Border, shadow, or background shift?
   - Examples that work well

## Output format
Write findings to: docs/research/service-card-patterns.md

Include:
- Summary of patterns found
- 3-5 specific examples with URLs
- "So what" recommendations for our implementation
- Any warnings or anti-patterns to avoid

## Timebox
60 minutes max.

## Completion
When done, output:
```
./ops/run_agent.sh codex agents/chain/03-sky-card-implementation.md
```

Or if Sky prompt doesn't exist yet, say so.
