"use client";

import { useRef, type ReactNode } from "react";
import { EASE, MQ, gsap, useGSAP } from "@/lib/gsap";

/**
 * Commercial proof (Level 1/2). One timeline, played once on entry:
 * the base rule draws, then each figure rises from a masked baseline
 * (plain quantities count up), then its label follows.
 */
export function NumbersMotion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(scope);
      const mm = gsap.matchMedia();

      mm.add({ desktop: MQ.desktop, compact: MQ.compact }, (ctx) => {
        const desktop = ctx.conditions?.desktop;
        const stats = q<HTMLElement>("[data-stat]");
        const tl = gsap.timeline({
          defaults: { ease: EASE },
          scrollTrigger: { trigger: q("[data-num-rule]")[0], start: "top 82%", once: true },
        });

        tl.fromTo(
          q("[data-num-rule]"),
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 1, ease: "power2.inOut" },
          0,
        );

        stats.forEach((stat, i) => {
          const at = 0.25 + i * (desktop ? 0.14 : 0.1);
          const value = stat.querySelector("[data-stat-value]");
          const count = stat.querySelector<HTMLElement>("[data-count]");
          tl.fromTo(stat.querySelector("[data-stat-index]"), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5 }, at)
            .fromTo(value, { yPercent: 100 }, { yPercent: 0, duration: 1.1 }, at)
            .fromTo(
              stat.querySelector("[data-stat-label]"),
              { autoAlpha: 0, y: 10 },
              { autoAlpha: 1, y: 0, duration: 0.7 },
              at + 0.3,
            );
          if (count) {
            const target = Number(count.dataset.count);
            const state = { v: 0 };
            tl.to(
              state,
              {
                v: target,
                duration: 1.3,
                ease: "power2.out",
                onUpdate: () => {
                  count.textContent = String(Math.round(state.v));
                },
              },
              at,
            );
          }
        });

        tl.fromTo(q("[data-num-note]"), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6 }, ">-0.4");

        // Always restore the true figures if this context is reverted mid-count.
        return () => {
          q<HTMLElement>("[data-count]").forEach((el) => (el.textContent = el.dataset.count ?? el.textContent));
        };
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
