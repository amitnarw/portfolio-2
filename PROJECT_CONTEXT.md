# Amit Narwal , Portfolio Website

## Overview

Personal portfolio website for **Amit Narwal**, a full stack web developer (PERN/MERN stack). This site is meant to be shared with potential clients and employers. The goal is to rank well on Google and get cited by AI search engines like ChatGPT, Gemini, Perplexity, and Grok.

## Tech Stack

| Layer           | Technology                                                          | Version                    |
| --------------- | ------------------------------------------------------------------- | -------------------------- |
| Framework       | Next.js (App Router)                                                | 16.1.6                     |
| Language        | TypeScript                                                          | 5.x                        |
| UI Library      | React                                                               | 19.2.3                     |
| Styling         | Tailwind CSS                                                        | v4 (CSS-first config)      |
| Components      | shadcn/ui (new-york style)                                          | latest                     |
| Package Manager | pnpm                                                                | ,                          |
| Fonts           | Poppins (sans), Instrument Serif (serif), PT Sans Narrow (headings) | Google Fonts via next/font |

## Project Structure

```
portfolio2/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout ,  fonts, SEO metadata, JSON-LD schemas
│   │   ├── page.tsx            # Home page ,  assembles all sections
│   │   ├── globals.css         # Tailwind v4 theme tokens, custom animations, global styles
│   │   ├── robots.ts           # SEO: robots.txt generation
│   │   ├── sitemap.ts          # SEO: sitemap.xml generation
│   │   └── favicon.ico
│   ├── components/
│   │   ├── navbar.tsx          # Sticky navbar with mobile menu
│   │   ├── hero.tsx            # Hero section (full viewport height)
│   │   └── ui/                 # shadcn components (button, etc.)
│   └── lib/
│       └── utils.ts            # cn() helper from shadcn
├── public/                     # Static assets (images, og-image, etc.)
├── components.json             # shadcn/ui config
├── tailwind uses v4 CSS-first config (no tailwind.config.ts)
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## Design System

### Fonts

- **Poppins** - body text, nav, UI elements. CSS var `--font-poppins`, Tailwind: `font-sans`.
- **Instrument Serif** - decorative accent text (logo, "Hey, there"). CSS var `--font-instrument-serif`, Tailwind: `font-serif`.
- **PT Sans Narrow** - big bold headings ("I AM AMIT NARWAL", "FULL STACK DEVELOPER"). CSS var `--font-pt-sans-narrow`, Tailwind: `font-heading`.
- All loaded via `next/font/google` in `layout.tsx`.

### Color Palette

Defined directly in `globals.css` using semantic CSS variables inside `@theme inline` (Tailwind v4 way). We avoid redundant intermediate tokens.

**Light mode (current branding):**

- Background: `#ffffff` (`--background`)
- Foreground (Text): `#000000` (`--foreground`)
- Primary: `#ffd976` (Warm Yellow)
- Secondary: `#fca546` (Vibrant Orange)
- Tertiary: `#fff1ce` (Light Yellow Glow)
- Muted/Accent: `#fffaf0` (Light Yellow Fade)

**Colors available as Tailwind classes:**

- `primary`, `secondary`, `tertiary`
- `foreground`, `background`
- `muted`, `accent`
- `accent-hot` (`#f97316`)
- `glow-base`, `glow-fade` (for hero gradients)

### Animations

Custom keyframes defined in `globals.css`:

- `animate-fade-in-up` , fade in from below
- `animate-slide-in-left` / `animate-slide-in-right` , slide in from sides
- `animate-float` , gentle floating motion
- `animate-pulse-dot` , pulsing dot for the "available" badge

## SEO Setup

### Already done:

- **Metadata** in `layout.tsx`: title template, description, keywords, OpenGraph, Twitter cards
- **JSON-LD**: `Person` schema (name, job title, skills, social links) + `WebSite` schema
- **robots.ts**: allows all crawlers
- **sitemap.ts**: auto-generated sitemap
- Semantic HTML tags throughout (`<header>`, `<main>`, `<section>`, etc.)
- `"Amit Narwal"` is in the keywords list for name-based search

### TODO , update these placeholders:

- `siteUrl` in `layout.tsx`, `robots.ts`, `sitemap.ts` , currently `"https://yourname.dev"`
- `sameAs` links in JSON-LD , currently placeholder GitHub/LinkedIn URLs
- Twitter handle , currently commented out
- `og-image.png` , needs to be created and placed in `/public/`

## Sections (Planned)

The page is a single-page portfolio with anchor sections:

| Section          | Status                  | Anchor          |
| ---------------- | ----------------------- | --------------- |
| Hero             | ✅ Done                 | `#home`         |
| Works / Projects | ❌ Not started          | `#works`        |
| About            | ❌ Not started          | `#about`        |
| Services         | ❌ Not started          | `#services`     |
| Testimonials     | ❌ Not started          | `#testimonials` |
| Contact          | ❌ Not started          | `#contact`      |
| Blog             | ❌ Not started (future) | ,               |

## Navbar Links

Currently links to: Home, Works, About, Services, Testimonials, Contact (CTA button). These match the anchors above.

## Coding Conventions

- **Component files**: one component per file, PascalCase export, kebab-case filename
- **Styling**: Tailwind utility classes only , no inline styles. Use arbitrary values for complex gradients (e.g. `bg-[radial-gradient(...)]`).
- **shadcn**: components live in `src/components/ui/`, add via `pnpm dlx shadcn@latest add <component>`
- **Imports**: use `@/` path alias (maps to `src/`)
- **No AI fingerprints**: all copy on the site must sound natural and human. No buzzwords, no exaggerated marketing-speak, no "leveraging" or "cutting-edge" or "transformative" type language. Write like a real person talking to a potential client.

## How to Run

```bash
pnpm install
pnpm dev        # starts at http://localhost:3000
pnpm build      # production build
pnpm start      # serve production build
```

## Adding New Sections

When building the next section (e.g., Works, About, Services):

1. Create the component in `src/components/` (e.g., `works.tsx`)
2. Import it in `src/app/page.tsx` and add it below the existing sections
3. Wrap it in a `<section id="works">` with proper `aria-label`
4. Use the existing color tokens from `globals.css`
5. Add any new shadcn components needed via `pnpm dlx shadcn@latest add <name>`
6. Update the sitemap in `sitemap.ts` if adding new routes
7. Update this file with the new section's status

## Key Rules

1. Three fonts only: Poppins, Instrument Serif, PT Sans Narrow. Don't add more.
2. Write all website copy as a human would , casual, straightforward, no fluff.
3. Every section needs an `id` attribute matching the navbar anchor links.
4. Keep the hero section at exactly viewport height (`h-dvh`).
5. Use `clamp()` for fluid typography where possible.
6. All metadata and JSON-LD must stay accurate and up to date.
7. This is a client-facing portfolio , it needs to look premium and polished.
