# Aria Sundaram — Portfolio

A distinctive, animation-rich portfolio built with **Next.js 15**, **Tailwind CSS** and **Framer Motion**. Everything runs on dummy data — swap in your own to make it yours.

## 🎨 Design direction — "Motion Lab"

The identity is built from a creative engineer's own vocabulary — keyframes,
easing curves and coordinate readouts — rather than a generic dark-gradient template.

- **Palette:** warm ink `#0A0A0C` + warm bone text `#E9E6DE` + a single disciplined amber accent `#FFA23E`
- **Type:** Bricolage Grotesque (display) · Inter (body) · JetBrains Mono (technical labels, frame numbers, coordinates)
- **Signature:** a chromatic RGB-split hero headline, a live cursor coordinate readout, and a plotted cubic-bézier easing curve with a traveling playhead

## ✨ Features

- **Crosshair cursor** (reticle) with magnetic hover states on desktop
- **Hero** — chromatic-split headline, live `cursor [x, y]` readout, animated easing-curve plot, magnetic buttons
- **Technical section labels** (`01 — about`, `// capability_matrix`) in monospace
- **About** with animated stat counters and hairline skill meters
- **Projects** as a bordered index with per-project generative "signal" motifs + subtle 3D tilt
- **Experience** as a career log with a scroll-driven amber timeline
- **Contact** CTA with copy-to-clipboard email
- Amber scroll-progress bar, film-grain noise overlay, smooth section reveals
- Fully responsive + `prefers-reduced-motion` friendly

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

## 🎨 Customizing

All content lives in [`data/content.js`](data/content.js) — edit your name, bio,
stats, skills, projects, experience and social links there. Colors and animation
keyframes are defined in [`tailwind.config.js`](tailwind.config.js) and
[`app/globals.css`](app/globals.css).

## 🧱 Tech stack

| Purpose      | Library         |
| ------------ | --------------- |
| Framework    | Next.js 15 (App Router) |
| Styling      | Tailwind CSS 3  |
| Animation    | Framer Motion 11 |
| Icons        | lucide-react    |
| Fonts        | Bricolage Grotesque + Inter + JetBrains Mono (next/font) |
