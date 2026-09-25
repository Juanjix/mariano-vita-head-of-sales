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
- Content integrity: only facts from the brief. Unknown details (email, LinkedIn, WhatsApp, dates,
  venture name) are intentionally absent rather than faked.

## Motion (GSAP + ScrollTrigger)

All motion is owned by GSAP (`gsap`, `@gsap/react`). Plugins are registered once in `src/lib/gsap.ts`,
which also defines the responsive/accessibility conditions used with `gsap.matchMedia()`.

- **Section controllers** — each animated section has a small client wrapper next to it
  (`HeroMotion`, `NumbersMotion`, `ManifestoMotion`, `ProcessJourney`, `CaseMotion`, `ProspectingMotion`,
  `LeadsMotion`, `ArchiveMotion`, `TimelineMotion`, `GeographyMotion`, `VentureMotion`). The section markup
  stays a Server Component; the wrapper renders `display: contents` and scopes its selectors with `useGSAP`.
- **Supporting reveals** — any element with `data-reveal="up|fade|line|rule|media"` is revealed by
  `src/components/motion/MotionRuntime.tsx` (one IntersectionObserver + GSAP tweens). The runtime also
  refreshes ScrollTrigger after fonts/images load and after an ES/EN switch, and handles smooth anchor scrolling.
- **Pinned sequences (desktop ≥1024px and tall enough)**: How I build business, and the Timeline.
  Tablet/mobile use natural flow with light reveals.
- **Reduced motion / no JS**: no ScrollTriggers are created and nothing is hidden. CSS pre-states in
  `globals.css` only apply under `.js` + `prefers-reduced-motion: no-preference`, with a 4s failsafe.
- QA: append `?motion-debug` to the URL to expose `window.__ST` (ScrollTrigger) in the console. Markers are never enabled.

## Te Lo Vendo Yo (`/te-lo-vendo-yo`)

Dealership-first commercial landing for Mariano’s current venture, living in the same app.

| What | Where |
| --- | --- |
| All copy (ES + EN) | `src/content/te-lo-vendo-yo/content.ts` |
| WhatsApp number + prefilled messages | `src/content/te-lo-vendo-yo/contact.ts` → set `whatsappNumber` once (digits, intl format). Until then CTAs use Instagram. |
| Real cases (empty on purpose) | `src/content/te-lo-vendo-yo/cases.ts` (typed in `src/types/te-lo-vendo-yo.ts`; only supplied metrics render) |
| Sections | `src/components/te-lo-vendo-yo/*` · GSAP controllers in `src/components/te-lo-vendo-yo/motion/*` |
| Route + metadata + OG card | `src/app/te-lo-vendo-yo/` |

- Every CTA carries a `data-cta` analytics id (`hero_inventory_cta`, `solution_inventory_cta`, `low_turnover_cta`,
  `services_inventory_cta`, `final_whatsapp_cta`, `private_seller_cta`, `mariano_profile_link`, `nav_cta`,
  `mobile_sticky_cta`). No analytics provider is installed.
- Future routes fit beside the page: `casos/`, `casos/[slug]/` (read `cases.ts`), `vender-mi-auto/`.
- Media: `TlMedia` accepts real photos or vertical video (poster + controls, never autoplay) when they exist.
