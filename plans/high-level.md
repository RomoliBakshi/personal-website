# High-Level Plan: romolibakshi.netlify.app

## Goal
Convert the current placeholder site into a real client-acquisition tool for Indian couples planning wedding choreography. Secondary: build a personal brand as a choreographer. Also using this project to learn modern web dev workflows (PRs, agents, testing, deployment).

## Target Audience
Indian couples (especially women) planning weddings who want high-quality choreography. The tone should feel **luxurious but approachable** — not intimidatingly expensive, not generic.

## Guiding Principles
- Ship small, iterate fast — every step should leave the site in a better, deployable state
- Structure serves the client: lead with what you offer, not who you are
- Real content over polish — a real photo beats a perfect placeholder
- Use this project to build tech skills (Jira, PRs, agents, testing, CI/CD)

---

## Phases

### Phase 1 — Real Content (Most Urgent)
Get real content on the page so it's actually usable and shareable.

- Replace hero: lead with a compelling headline about the *offer* (e.g. "Choreography for your wedding sangeet"), not just a name
- Add real photos/videos above the fold — something that immediately communicates the vibe
- Write a real bio with actual accomplishments (replace lorem ipsum)
- Replace all placeholder sections with real copy
- Add real testimonials if available

### Phase 2 — Structure & Flow
Reorder and reshape sections so the page sells better.

- Services first, artist bio later
- Model the *flow* loosely on [Zind Academy](https://www.zindacademy.com/tutorials) — clear offering cards, visual hierarchy — but keep the classy aesthetic of the current site
- Make "what you get" extremely clear (group classes? private? virtual? in-person?)
- Add a clear CTA (contact / book a consultation)

### Phase 3 — Polish & Trust
Make it feel credible and premium.

- Real gallery (photos/videos from past performances or classes)
- Social proof: testimonials with names/photos if possible
- Possibly: embed an Instagram feed or link to social
- Mobile experience audit

### Phase 4 — Tech & Learning
Build out the workflow and tooling skills.

- Set up proper Jira tickets for each feature
- Practice PR-based workflow with code review
- Add basic tests (e.g. smoke tests, visual regression)
- Explore A/B testing via existing Datadog feature flag setup

---

## What NOT to Do
- Don't spend weeks perfecting a section before shipping — get real content up first
- Don't make it feel expensive/exclusive to the point of being off-putting
- Don't lead with the name/brand before showing what's offered
