"use client";

import { useRef, type ReactNode } from "react";
import { MQ, gsap, useGSAP } from "@/lib/gsap";

/**
 * Case study narrative (Level 2). Problem → insight → model → execution:
 * as each chapter is read, its top rule fills in rust and its number comes
 * to full colour, so progress through the story is visible without pinning.
 * Chapter content itself uses the global reveal runtime.
 */
export function CaseMotion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(scope);
      const mm = gsap.matchMedia();

      mm.add(MQ.motion, () => {
        q<HTMLElement>("[data-case-chapter]").forEach((chapter) => {
          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: { trigger: chapter, start: "top 85%", end: "top 40%", scrub: 0.6 },
          });
          tl.fromTo(chapter.querySelector("[data-case-rule]"), { scaleX: 0 }, { scaleX: 1 }, 0);
          const num = chapter.querySelector("[data-case-num]");
          if (num) tl.fromTo(num, { opacity: 0.25 }, { opacity: 1, duration: 0.5 }, 0.5);
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
