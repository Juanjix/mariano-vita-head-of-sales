"use client";

import { useRef, type ReactNode } from "react";
import { EASE, MQ, gsap, useGSAP } from "@/lib/gsap";

/**
 * Lead philosophy (Level 2, cinematic but restrained): the quote arrives in
 * two phrase groups, then the second half — "cuando se deja de trabajar." —
 * warms to the accent. Plain HTML text throughout; readable without JS.
 */
export function LeadsMotion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(scope);
      const mm = gsap.matchMedia();

      mm.add(MQ.motion, () => {
        gsap
          .timeline({
            defaults: { ease: EASE },
            scrollTrigger: { trigger: q("[data-quote]")[0], start: "top 75%", once: true },
          })
          .fromTo(q("[data-quote-mark]"), { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.8 }, 0)
          .fromTo(
            q("[data-quote-part]"),
            { autoAlpha: 0, y: 40 },
            { autoAlpha: 1, y: 0, duration: 1.1, stagger: 0.28 },
            0.1,
          )
          .fromTo(
            q("[data-quote-emph]"),
            { color: "#f2eee6" },
            { color: "#d0764f", duration: 0.9, ease: "power1.inOut" },
            1.1,
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
