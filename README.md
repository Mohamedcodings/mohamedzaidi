# Mohamed Zaidi Personal Site

A minimal Astro personal site inspired by steipete.me, with Markdown posts, RSS, search, and a subtle interactive glass background.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local development |
| `npm run build` | Type-check and build the static site |
| `npm run preview` | Preview the production build |

## Content

Edit profile, links, and SEO defaults in `src/site.config.ts`.

Add posts in `src/content/blog` with one Markdown file per article:

```md
---
title: "Post title"
description: "Short summary."
pubDate: 2026-05-10
tags: ["personal"]
draft: false
---
```

Use `draft: true` for notes you want to keep locally. The starter template lives at
`src/content/blog/_draft-template.md`.

## Analytics

This site is wired for Cloudflare Web Analytics. It stays disabled unless a token
is provided at build time.

1. In Cloudflare, add the production hostname in Web Analytics.
2. Copy the site token from the Cloudflare JS snippet.
3. Set `PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN` before building or add it as a
   GitHub Actions repository secret.

For local testing, copy `.env.example` to `.env` and fill in the token. Do not
commit `.env`.
