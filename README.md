# Mariano Vita — Personal brand website (V1)

Bilingual (ES/EN) editorial one-page site. Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Motion.

## Before first run

The hero photograph lives at `public/images/mariano-horse.jpg` (1254×1254). A higher-resolution original (≥2400px wide)
would look sharper on large screens. Adjust its crop per breakpoint in `src/content/photos.ts` (`position.mobile` / `position.desktop`).

```bash
npm install
npm run dev          # http://localhost:3000
npm run lint         # ESLint
npm run typecheck    # tsc --noEmit
npm run build        # production build
npm run format       # Prettier
```

Deploy: push to GitHub and import in Vercel (no config needed). Set `NEXT_PUBLIC_SITE_URL`
(e.g. `https://marianovita.com`) so canonical/OG URLs are absolute.

## Where to edit things

| What | File |
| --- | --- |
| All copy (ES + EN side by side) | `src/content/site-content.ts` |
| Professional timeline (verified chapters) | `timeline` in `src/content/site-content.ts` |
| Contact channels (email, LinkedIn, WhatsApp…) | `src/content/contact-channels.ts` — only listed channels render |
| Photographs + focal points | `src/content/photos.ts` |
| Colours, type scale, reveal motion | `src/app/globals.css` |
| Fonts (self-hosted, OFL) | `src/app/fonts.ts`, `src/app/fonts/` |
| Metadata / OG image | `src/app/layout.tsx`, `src/app/opengraph-image.tsx` |

## Architecture notes

- Sections are **Server Components**. Localised text is rendered through the tiny `<T v={...} />`
  client leaf (`src/lib/i18n.tsx`), so switching language re-renders only text nodes — no reload,
  no navigation. The choice is remembered in `localStorage`; default is Spanish.
- Scroll reveals use one `IntersectionObserver` (`RevealObserver`) + CSS (`data-reveal="up|fade|line|clip|rule|bar"`).
  Without JS, or with `prefers-reduced-motion`, everything is visible and static.
- Motion is used only where it earns its place: hero parallax, the process progress spine, number count-ups.
- Content integrity: only facts from the brief. Unknown details (email, LinkedIn, WhatsApp, dates,
  venture name) are intentionally absent rather than faked.
