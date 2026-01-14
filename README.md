# Qahwa Najd Portfolio

Premium Saudi specialty coffee portfolio website built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Features
- Multi-page portfolio: Home, About, Menu, Gallery, Contact
- English + Arabic toggle with RTL support for key UI labels
- Animated hero background, scroll reveals, and tasteful interactions
- Filterable menu with modal detail view and dietary badges
- Masonry gallery with lightbox
- Contact form with validation, copy-to-clipboard phone button, and toast
- Local data models and online image placeholders (Unsplash) for coffee-themed imagery

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS (v4)
- Framer Motion
- next/image

## Getting Started
Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Deploy to Vercel
1. Push this repo to GitHub.
2. Import it in Vercel.
3. Use the default build settings:
   - Build command: `npm run build`
   - Output: Next.js default

## EN/AR Toggle + RTL Notes
- The language toggle lives in the navbar and updates `document.documentElement.lang` and `dir`.
- Key sections (navbar, hero CTA, menu categories, contact labels) swap to Arabic when selected.
- RTL layout is handled by setting `dir="rtl"` on the root element with an Arabic font stack.

## Project Structure
- `src/app` — routes and layouts
- `src/components` — UI components and providers
- `src/data` — menu, testimonials, gallery, and about data
- `public/images` — local SVG placeholders
