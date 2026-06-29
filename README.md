# Pod n' Yarn

A modern, bold website for **Pod n' Yarn** — a Nigerian podcast focused on authentic conversations, storytelling, culture, lifestyle, and real-life experiences.

## Tech Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **Framer Motion**
- **TypeScript**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with all sections |
| `/episodes` | Browse & search episodes |
| `/episodes/[slug]` | Episode detail with show notes |
| `/about` | Brand story, mission, vision |
| `/hosts` | Host profiles |
| `/guests` | Featured guests |
| `/blog` | Articles |
| `/community` | Newsletter, WhatsApp, submissions |
| `/shop` | Merchandise store (demo) |
| `/contact` | Contact form & partnerships |

## Features

- Dark/light mode toggle
- Sticky audio player
- Episode search & topic filtering
- Responsive, mobile-first design
- SEO metadata on all pages
- CMS-ready data layer (`src/data/`)

## CMS Integration

Episode, guest, host, and blog data lives in `src/data/`. Replace with Sanity, Contentful, or Strapi by mapping the types in `src/lib/types.ts`.

## Brand Colors

- Forest Green: `#0F3D2E`
- Rich Black: `#111111`
- Burnt Orange: `#E67E22`
- Warm Gold: `#D4A017`
- Cream: `#F8F4ED`
