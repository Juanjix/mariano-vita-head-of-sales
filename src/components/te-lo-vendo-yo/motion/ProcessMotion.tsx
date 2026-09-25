"use client";

import { useRef, type ReactNode } from "react";
import { EASE, MQ, gsap, useGSAP } from "@/lib/gsap";

/**
 * How it works — native scroll, no pin. The progress line fills with scroll
 * and each stage comes to full strength as it crosses the reading line; on
 * desktop the five ticks under the sticky title fill in step.
 */
export function ProcessMotion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(scope);
      const list = q("[data-process-list]")[0];
      const steps = q<HTMLElement>("[data-process-step]");
      if (!list || !steps.length) return;
      const mm = gsap.matchMedia();

      mm.add({ desktop: MQ.desktop, compact: MQ.compact }, (ctx) => {
        gsap.fromTo(
          q("[data-process-line]"),
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: list, start: "top 60%", end: "bottom 60%", scrub: 0.5 },
          },
        );
        if (ctx.conditions?.desktop) {
          const fills = q<HTMLElement>("[data-process-tick-fill]");
          gsap.set(fills, { scaleX: 0 });
          steps.forEach((step, i) => {
            gsap.fromTo(
              step,
              { opacity: 0.25 },
              {
                opacity: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: step,
                  start: "top 70%",
                  end: "top 45%",
                  scrub: 0.4,
                  onToggle: (self) => {
                    if (self.isActive || self.progress === 1)
                      gsap.to(fills[i], { scaleX: 1, duration: 0.5, ease: EASE, overwrite: true });
                    else if (self.progress === 0) gsap.to(fills[i], { scaleX: 0, duration: 0.3, overwrite: true });
                  },
                },
              },
            );
          });
        } else {
          steps.forEach((step) => {
            gsap.fromTo(
              step,
              { autoAlpha: 0, y: 28 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                ease: EASE,
                scrollTrigger: { trigger: step, start: "top 85%", once: true },
              },
            );
          });
        }
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
