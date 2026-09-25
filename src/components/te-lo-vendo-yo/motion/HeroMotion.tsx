"use client";

import { useRef, type ReactNode } from "react";
import { EASE, MQ, gsap, useGSAP } from "@/lib/gsap";

/**
 * Te Lo Vendo Yo hero — a faster, punchier cousin of the personal-site intro
 * (~1.1s): brand → proposition → copy → CTA → mechanism strip. No loader.
 * Shares the CSS pre-states (data-hero-*, html.intro-ready) with the home hero.
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
        gsap
          .timeline({
            defaults: { ease: EASE },
            onComplete: () => {
              gsap.set(q("[data-hero-line] > span, [data-hero-fade]"), { clearProps: "transform,opacity,visibility" });
              if (nav) gsap.set(nav, { clearProps: "opacity,visibility" });
            },
          })
          .fromTo(nav, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5, ease: "power1.out" }, 0)
          .fromTo(q("[data-hero-meta]"), { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.6 }, 0.05)
          .fromTo(q("[data-hero-line] > span"), { yPercent: 110 }, { yPercent: 0, duration: 0.85, stagger: 0.09 }, 0.1)
          .fromTo(q("[data-hero-prop]"), { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.35)
          .fromTo(q("[data-hero-intro]"), { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.7 }, 0.5)
          .fromTo(q("[data-hero-cta]"), { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.7 }, 0.58)
          .fromTo(q("[data-hero-mech]"), { autoAlpha: 0, x: -16 }, { autoAlpha: 1, x: 0, duration: 0.7 }, 0.66);
        root.classList.add("intro-ready");
      });

      mm.add(MQ.reduce, () => {
        root.classList.add("intro-ready");
      });

      mm.add(MQ.desktop, () => {
        gsap
          .timeline({
            defaults: { ease: "none" },
            scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: 0.6 },
          })
          .to(q("[data-hero-line]"), { y: (i: number) => -40 - i * 20 }, 0)
          .to(q("[data-hero-prop]"), { y: -20 }, 0);
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
