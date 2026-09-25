"use client";

import { useRef, type ReactNode } from "react";
import { EASE, MQ, gsap, useGSAP } from "@/lib/gsap";

/**
 * Final CTA: a quick, one-time arrival of the question and the invitation.
 * The contact button is never hidden or delayed.
 */
export function FinalMotion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(scope);
      const mm = gsap.matchMedia();
      mm.add(MQ.motion, () => {
        gsap
          .timeline({
            defaults: { ease: EASE },
            scrollTrigger: { trigger: q("[data-final-title]")[0], start: "top 85%", once: true },
          })
          .fromTo(
            q("[data-final-title] > span"),
            { autoAlpha: 0, y: 40 },
            { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.12 },
            0,
          )
          .fromTo(q("[data-final-body]"), { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.7 }, 0.3);
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
