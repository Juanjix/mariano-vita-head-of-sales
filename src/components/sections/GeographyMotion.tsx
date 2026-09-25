"use client";

import { useRef, type ReactNode } from "react";
import { EASE, MQ, gsap, useGSAP } from "@/lib/gsap";

/**
 * Argentina → Medellín. Abstract, editorial movement — no map, no route:
 * ARGENTINA rises then drifts back and left, the rust line draws across,
 * MEDELLÍN arrives from the right and becomes the dominant word.
 * Scrubbed on tablet/desktop (≤90px of travel); a simple sequence on mobile.
 */
export function GeographyMotion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(scope);
      const from = q<HTMLElement>("[data-geo-from]")[0];
      const to = q<HTMLElement>("[data-geo-to]")[0];
      if (!from || !to) return;
      const fromInner = from.firstElementChild;
      const toInner = to.firstElementChild;
      const mm = gsap.matchMedia();

      mm.add({ desktop: MQ.desktop, tablet: MQ.tablet }, (ctx) => {
        const k = ctx.conditions?.desktop ? 1 : 0.6;
        gsap
          .timeline({
            defaults: { ease: "none" },
            scrollTrigger: { trigger: q("[data-geo]")[0], start: "top 85%", end: "bottom 45%", scrub: 1 },
          })
          .fromTo(fromInner, { yPercent: 175 }, { yPercent: 0, duration: 0.3, ease: "power2.out" }, 0)
          .fromTo(q("[data-geo-rule]"), { scaleX: 0 }, { scaleX: 1, duration: 0.5 }, 0.25)
          .fromTo(q("[data-geo-head]"), { x: -60 * k, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.5 }, 0.25)
          .to(from, { x: -60 * k, opacity: 0.35, duration: 0.6 }, 0.35)
          .fromTo(to, { x: 90 * k }, { x: 0, duration: 0.6 }, 0.35)
          .fromTo(toInner, { yPercent: 175 }, { yPercent: 0, duration: 0.3, ease: "power2.out" }, 0.4);
      });

      mm.add(MQ.mobile, () => {
        gsap
          .timeline({
            defaults: { ease: EASE },
            scrollTrigger: { trigger: q("[data-geo]")[0], start: "top 80%", once: true },
          })
          .fromTo(fromInner, { yPercent: 175 }, { yPercent: 0, duration: 1 }, 0)
          .fromTo(q("[data-geo-rule]"), { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: "power2.inOut" }, 0.3)
          .fromTo(toInner, { yPercent: 175 }, { yPercent: 0, duration: 1 }, 0.6);
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
