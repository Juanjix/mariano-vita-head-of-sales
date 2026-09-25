"use client";

import { useRef, type ReactNode } from "react";
import { EASE, MQ, gsap, useGSAP } from "@/lib/gsap";

/**
 * Current venture (exploratory). The headline turns as it is read:
 * "slow-moving inventory" arrives, then steps back while "opportunity"
 * takes the accent — the transformation the venture is exploring.
 */
export function VentureMotion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(scope);
      const lines = q<HTMLElement>("[data-venture-title] [data-line]");
      const inner = lines.map((l) => l.firstElementChild as HTMLElement);
      const last = lines[lines.length - 1];
      const before = lines.slice(0, -1);
      if (!last) return;
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            defaults: { ease: "power2.out" },
            scrollTrigger: { trigger: q("[data-venture-title]")[0], start: "top 85%", end: "bottom 45%", scrub: 1 },
          })
          .fromTo(inner, { yPercent: 175 }, { yPercent: 0, duration: 0.3, stagger: 0.12 }, 0)
          .to(before, { opacity: 0.45, duration: 0.3 }, 0.6)
          .fromTo(last, { color: "#f2eee6" }, { color: "#d0764f", duration: 0.3 }, 0.6);
      });

      mm.add(MQ.mobile, () => {
        gsap
          .timeline({
            defaults: { ease: EASE },
            scrollTrigger: { trigger: q("[data-venture-title]")[0], start: "top 85%", once: true },
          })
          .fromTo(inner, { yPercent: 175 }, { yPercent: 0, duration: 1, stagger: 0.12 }, 0)
          .fromTo(last, { color: "#f2eee6" }, { color: "#d0764f", duration: 0.8, ease: "power1.inOut" }, 0.9);
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
