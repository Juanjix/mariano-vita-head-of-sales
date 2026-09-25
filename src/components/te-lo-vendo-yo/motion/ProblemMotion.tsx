"use client";

import { useRef, type ReactNode } from "react";
import { EASE, MQ, gsap, useGSAP } from "@/lib/gsap";

/**
 * Problem → consequence chain. Each step arrives as the reader scrolls
 * (scrubbed on tablet/desktop), stepping down a level, ending on the signal
 * colour: slow inventory → immobilized capital → lower turnover → lower profitability.
 */
export function ProblemMotion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(scope);
      const steps = q<HTMLElement>("[data-chain-step]");
      if (!steps.length) return;
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          defaults: { ease: "power2.out" },
          scrollTrigger: { trigger: q("[data-chain]")[0], start: "top 75%", end: "bottom 60%", scrub: 0.8 },
        });
        steps.forEach((step, i) => {
          tl.fromTo(step, { autoAlpha: 0.08, x: -40 }, { autoAlpha: 1, x: 0, duration: 1 }, i * 0.8);
        });
      });

      mm.add(MQ.mobile, () => {
        steps.forEach((step) => {
          gsap.fromTo(
            step,
            { autoAlpha: 0, x: -20 },
            {
              autoAlpha: 1,
              x: 0,
              duration: 0.8,
              ease: EASE,
              scrollTrigger: { trigger: step, start: "top 88%", once: true },
            },
          );
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
