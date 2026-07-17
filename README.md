# Battleborn Advisory

Marketing website for Battleborn Advisory — battlebornadvisorygroup.com.

## Stack

- **Framework:** [Astro](https://astro.build) 5
- **Styling:** Tailwind CSS
- **Hosting:** Cloudflare Pages
- **Forms:** Web3Forms

## Local development

```bash
npm install
npm run dev
```

Site runs at http://localhost:4321.

## Build

```bash
npm run build
```

Static output goes to `./dist/`.

## Deploy

Pushes to `main` auto-deploy via Cloudflare Pages (connected to this GitHub repo).

## Structure

- `src/pages/` — file-based routes
- `src/layouts/` — shared page shells
- `src/components/` — reusable pieces (nav, footer, cards, schema markup)
- `src/content/site.ts` — global site metadata (name, url, description, brand contact)
- `src/styles/global.css` — global styles + Tailwind base
- `public/` — static assets (favicon, robots.txt, images)

## Fonts

Production uses licensed Adobe Fonts (Caesura, Neue Haas Grotesk Display Pro). Add the Adobe Fonts embed code to `src/layouts/Base.astro` inside `<head>` when the kit is ready.

## Adding a note (blog post)

Notes live at `src/pages/notes/*.astro`. Create a new `.astro` file per post. Filename becomes the URL slug.
