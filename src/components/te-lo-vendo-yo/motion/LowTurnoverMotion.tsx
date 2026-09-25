"use client";

import { useRef, type ReactNode } from "react";
import { MQ, gsap, useGSAP } from "@/lib/gsap";

/**
 * "¿Tenés vehículos que no se están moviendo?" — the question lines slide in
 * from alternating sides and the last word keeps drifting forward with the
 * scroll: stuck inventory that starts to move. ≤80px of travel.
 */
export function LowTurnoverMotion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(scope);
      const lines = q<HTMLElement>("[data-low-line]");
      if (!lines.length) return;
      const mm = gsap.matchMedia();

      mm.add({ desktop: MQ.desktop, tablet: MQ.tablet, mobile: MQ.mobile }, (ctx) => {
        const k = ctx.conditions?.desktop ? 1 : ctx.conditions?.tablet ? 0.6 : 0.2;
        gsap
          .timeline({
            defaults: { ease: "none" },
            scrollTrigger: { trigger: lines[0].parentElement, start: "top 90%", end: "bottom 30%", scrub: 0.8 },
          })
          .fromTo(lines[0], { x: -60 * k }, { x: 0 }, 0)
          .fromTo(lines[1], { x: 60 * k }, { x: 0 }, 0)
          .fromTo(lines[lines.length - 1], { x: -80 * k }, { x: 80 * k }, 0);
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
