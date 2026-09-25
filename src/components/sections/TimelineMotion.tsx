"use client";

import { useRef, type ReactNode } from "react";
import { EASE, MQ, gsap, useGSAP } from "@/lib/gsap";

/** The chronology needs a tall enough viewport to be held on screen. */
const TL_PIN = "(min-width: 1024px) and (min-height: 760px) and (prefers-reduced-motion: no-preference)";
const TL_FLOW = `${MQ.compact}, (min-width: 1024px) and (max-height: 759px) and (prefers-reduced-motion: no-preference)`;

/**
 * Professional timeline (Level 1).
 * Desktop: the chronology pins and scroll walks 2009 → 2012 → 2016 → 2020 —
 * the track draws from node to node, each chapter comes to full strength and
 * the previous one steps back — then hands off to "Hoy · Medellín" and the
 * Argentina → Colombia transition below. ~160vh.
 * Mobile/tablet: natural flow; chapters reveal on entry, the spine fills with scroll.
 */
export function TimelineMotion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(scope);
      const mm = gsap.matchMedia();

      mm.add(TL_PIN, () => {
        const chapters = q<HTMLElement>("[data-tl-chapter]");
        const nodes = q<HTMLElement>("[data-tl-node]");
        const n = chapters.length;

        gsap.set(chapters, { opacity: 0.22 });
        gsap.set(chapters[0], { opacity: 1 });
        gsap.set(nodes, { backgroundColor: "rgba(21,19,17,0.25)" });
        gsap.set(nodes[0], { backgroundColor: "#151311" });

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: q("[data-tl-pin]")[0],
            start: "center 55%",
            end: "+=160%",
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
          },
        });

        tl.fromTo(q("[data-tl-fill]"), { scaleX: 0 }, { scaleX: 1, duration: n }, 0);
        for (let i = 1; i < n; i++) {
          tl.to(chapters[i - 1], { opacity: 0.5, duration: 0.35 }, i - 0.2)
            .to(chapters[i], { opacity: 1, duration: 0.35 }, i - 0.2)
            .to(nodes[i], { backgroundColor: i === n - 1 ? "#9f4527" : "#151311", duration: 0.2 }, i - 0.1);
        }
        // Hand-off: today, Medellín — then the page continues to Argentina → Colombia.
        tl.to(chapters, { opacity: 1, duration: 0.4 }, n)
          .fromTo(q("[data-tl-handoff-rule]"), { scaleX: 0 }, { scaleX: 1, duration: 0.6 }, n)
          .fromTo(q("[data-tl-handoff-text]"), { autoAlpha: 0.2 }, { autoAlpha: 1, duration: 0.3 }, n + 0.3)
          .to({}, { duration: 0.3 });
      });

      mm.add(TL_FLOW, () => {
        gsap.fromTo(
          q("[data-tl-spine]"),
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: q("[data-tl-pin]")[0], start: "top 70%", end: "bottom 70%", scrub: 0.5 },
          },
        );
        q<HTMLElement>("[data-tl-chapter], [data-tl-handoff]").forEach((el) => {
          gsap.fromTo(
            el,
            { autoAlpha: 0, y: 36 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              ease: EASE,
              scrollTrigger: { trigger: el, start: "top 85%", once: true },
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
