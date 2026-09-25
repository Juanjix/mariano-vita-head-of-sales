"use client";

import { useRef, type ReactNode } from "react";
import { EASE, MQ, gsap, useGSAP } from "@/lib/gsap";

/**
 * Manifesto (Level 1, scroll-scrubbed — not pinned, to keep the page brisk).
 * "No espero" → "OPORTUNIDADES." takes over → "LAS CREO." lands as the final,
 * dominant state while the earlier lines step back in contrast.
 * Mobile gets a simple staggered reveal instead of a scrub.
 */
export function ManifestoMotion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(scope);
      const title = q("[data-manifesto-title]")[0];
      const lines = q<HTMLElement>("[data-line]");
      const inner = lines.map((l) => l.firstElementChild as HTMLElement);
      if (!title || lines.length < 3) return;
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            defaults: { ease: "power2.out" },
            scrollTrigger: { trigger: title, start: "top 90%", end: "center 55%", scrub: 1 },
          })
          .fromTo(inner[0], { yPercent: 175 }, { yPercent: 0, duration: 0.3 }, 0)
          .fromTo(inner[1], { yPercent: 175 }, { yPercent: 0, duration: 0.3 }, 0.12)
          .to(lines[0], { opacity: 0.45, duration: 0.25 }, 0.38)
          .fromTo(inner[2], { yPercent: 175 }, { yPercent: 0, duration: 0.3 }, 0.5)
          .to(lines[1], { opacity: 0.6, duration: 0.25 }, 0.6);
      });

      mm.add(MQ.mobile, () => {
        gsap.fromTo(
          inner,
          { yPercent: 175 },
          {
            yPercent: 0,
            duration: 1,
            ease: EASE,
            stagger: 0.14,
            scrollTrigger: { trigger: title, start: "top 85%", once: true },
          },
        );
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
