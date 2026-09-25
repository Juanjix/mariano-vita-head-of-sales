"use client";

import { useRef, type ReactNode } from "react";
import { EASE, MQ, gsap, useGSAP } from "@/lib/gsap";

/**
 * Hero motion (Level 1).
 *  1. Intro (~1.4s, never blocks interaction): nav → meta → headline lines →
 *     copy → CTA, while the photograph opens through a mask and settles.
 *  2. Departure: as the hero scrolls away, headline, photo and copy separate
 *     at slightly different rates (scrubbed, 20–80px).
 */
export function HeroMotion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = document.documentElement;
      const q = gsap.utils.selector(scope);
      const section = q("[data-hero]")[0];
      if (!section) return;
      const mm = gsap.matchMedia();

      mm.add(MQ.motion, () => {
        const nav = document.querySelector("[data-nav]");
        const tl = gsap.timeline({
          defaults: { ease: EASE },
          onComplete: () => {
            gsap.set(q("[data-hero-line] > span, [data-hero-fade]"), { clearProps: "transform,opacity,visibility" });
            gsap.set(q("[data-media]"), { clearProps: "clipPath" });
            if (nav) gsap.set(nav, { clearProps: "opacity,visibility" });
          },
        });
        tl.fromTo(
          q("[data-media]"),
          { clipPath: "inset(0% 0% 100% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.3, ease: "expo.inOut" },
          0,
        )
          .fromTo(q("[data-media-zoom]"), { scale: 1.08 }, { scale: 1, duration: 1.6 }, 0)
          .fromTo(nav, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6, ease: "power1.out" }, 0.1)
          .fromTo(q("[data-hero-meta]"), { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.7 }, 0.15)
          .fromTo(q("[data-hero-line] > span"), { yPercent: 175 }, { yPercent: 0, duration: 1, stagger: 0.12 }, 0.2)
          .fromTo(q("[data-hero-intro]"), { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.55)
          .fromTo(q("[data-hero-cta]"), { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.68);
        // GSAP's inline from-states now hold everything: release the CSS pre-state.
        root.classList.add("intro-ready");
      });

      mm.add(MQ.reduce, () => {
        root.classList.add("intro-ready");
      });

      // Departure: desktop moves a little more than compact screens.
      mm.add({ desktop: MQ.desktop, compact: MQ.compact }, (ctx) => {
        const k = ctx.conditions?.desktop ? 1 : 0.5;
        gsap
          .timeline({
            defaults: { ease: "none" },
            scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: 0.8 },
          })
          .to(q("[data-hero-title]"), { y: -70 * k }, 0)
          .to(q("[data-media]"), { y: 80 * k }, 0)
          .to(q("[data-media-drift]"), { scale: 1.05 }, 0)
          .to(q("[data-hero-copy]"), { y: -30 * k, autoAlpha: 0.15 }, 0)
          .to(q("[data-hero-route]"), { x: 28 * k }, 0);
      });

      return () => mm.revert();
    },
    { scope },
  );

  return (
    <div ref={scope} className="contents">
      {children}
    </div>
  );
}
