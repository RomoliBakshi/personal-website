# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start dev server at localhost:8000
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build locally

No test or lint commands are configured.

## Architecture

Single-page static marketing site (wedding choreography) built with Vite, vanilla JS, and vanilla CSS. No frontend framework. Deployed to Netlify.

**Key files:**
- `index.html` — all page content (nav, hero, about, services, gallery, testimonials, contact form)
- `styles.css` — all styling; design tokens use black (`#0a0a0a`), gold (`#C9A96E`), and white; fonts are Playfair Display + Inter
- `rum-config.js` — initializes Datadog RUM for session replay and analytics; loaded as a Vite-bundled module
- `feature-flag-config.js` — evaluates feature flags via Datadog's OpenFeature provider; currently controls hero name capitalization via flag `test-romoli2` (true = lowercase, false = all caps); uses RUM session ID as targeting key

**Environment variables** (see `.env.example`): Datadog application ID, client token, and user email. Netlify's secrets scanner is configured in `netlify.toml` to omit Datadog client-side keys to avoid false positives.

## Feature Flag Pattern

Feature flags use `@datadog/openfeature-browser` + `@openfeature/web-sdk`. The flag provider must be initialized after the RUM client (which sets the session ID used as the targeting key). New flags should follow the pattern in `feature-flag-config.js`: wait for `DOMContentLoaded`, get session ID from `DD_RUM`, set targeting key, then evaluate the flag.
