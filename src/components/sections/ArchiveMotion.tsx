"use client";

import { useRef, type ReactNode } from "react";
import { EASE, MQ, ScrollTrigger, gsap, useGSAP } from "@/lib/gsap";

/**
 * Markets & ventures.
 * - Statement (scrubbed): "Productos diferentes." arrives, then
 *   "El mismo desafío comercial." rises as the conclusion while the first
 *   line steps back.
 * - Index: each market slides in as the reader crosses it (one batched trigger set).
 */
export function ArchiveMotion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(scope);
      const lines = q<HTMLElement>("[data-archive-title] [data-line]");
      const inner = lines.map((l) => l.firstElementChild as HTMLElement);
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            defaults: { ease: "power2.out" },
            scrollTrigger: { trigger: q("[data-archive-title]")[0], start: "top 88%", end: "center 50%", scrub: 1 },
          })
          .fromTo(inner[0], { yPercent: 175 }, { yPercent: 0, duration: 0.35 }, 0)
          .fromTo(inner[1], { yPercent: 175 }, { yPercent: 0, duration: 0.35 }, 0.45)
          .to(lines[0], { opacity: 0.5, duration: 0.3 }, 0.55);
      });

      mm.add(MQ.mobile, () => {
        gsap.fromTo(
          inner,
          { yPercent: 175 },
          {
            yPercent: 0,
            duration: 1,
            ease: EASE,
            stagger: 0.18,
            scrollTrigger: { trigger: q("[data-archive-title]")[0], start: "top 85%", once: true },
          },
        );
      });

      mm.add(MQ.motion, () => {
        const entries = q<HTMLElement>("[data-archive-entry]");
        gsap.set(entries, { autoAlpha: 0, x: -28 });
        ScrollTrigger.batch(entries, {
          start: "top 90%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, { autoAlpha: 1, x: 0, duration: 0.9, ease: EASE, stagger: 0.07, overwrite: true }),
        });
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
