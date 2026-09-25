"use client";

import { useRef, type ReactNode } from "react";
import { EASE, MQ, gsap, useGSAP } from "@/lib/gsap";

const PIN = "(min-width: 1024px) and (min-height: 760px) and (prefers-reduced-motion: no-preference)";
const FLOW = `${MQ.compact}, (min-width: 1024px) and (max-height: 759px) and (prefers-reduced-motion: no-preference)`;

/**
 * Signature interaction — "where the work ends".
 * Desktop: the board pins (~140vh). Content → Advertising → Leads light up on
 * both sides; the agency column reaches "contact handoff" and stops; Te Lo
 * Vendo Yo keeps going — qualification, follow-up, negotiation, sale — then
 * "We don't stop at the lead." lands.
 * Mobile/tablet: natural flow, each column reveals row by row.
 */
export function ComparisonMotion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(scope);
      const agency = q<HTMLElement>('[data-compare-col="agency"]')[0];
      const ours = q<HTMLElement>('[data-compare-col="ours"]')[0];
      if (!agency || !ours) return;
      const aRows = Array.from(agency.querySelectorAll<HTMLElement>("[data-compare-row]"));
      const oRows = Array.from(ours.querySelectorAll<HTMLElement>("[data-compare-row]"));
      const aLine = agency.querySelector("[data-compare-line]");
      const oLine = ours.querySelector("[data-compare-line]");
      const stop = agency.querySelector("[data-compare-stop]");
      const conclusion = q("[data-compare-conclusion-inner]");
      const mm = gsap.matchMedia();

      mm.add(PIN, () => {
        const total = oRows.length; // 7
        const shared = 3;
        gsap.set([...aRows, ...oRows], { opacity: 0.14 });
        gsap.set([aLine, oLine], { scaleY: 0 });

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: q("[data-compare-pin]")[0],
            start: "center 55%",
            end: "+=140%",
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
          },
        });

        // Shared path, both columns in step.
        for (let i = 0; i < shared; i++) {
          tl.to([aRows[i], oRows[i]], { opacity: 1, duration: 0.5 }, i);
        }
        tl.to(aLine, { scaleY: 4 / total, duration: shared + 1 }, 0)
          .to(oLine, { scaleY: shared / total, duration: shared }, 0)
          // The agency hands off the contacts… and stops.
          .to(aRows[3], { opacity: 1, duration: 0.5 }, shared)
          .fromTo(stop, { autoAlpha: 0, x: -12 }, { autoAlpha: 1, x: 0, duration: 0.4 }, shared + 0.6)
          .to(aRows, { opacity: 0.4, duration: 0.6 }, shared + 1.1);
        // Te Lo Vendo Yo keeps working the opportunity.
        for (let i = shared; i < total; i++) {
          const at = shared + 1 + (i - shared) * 0.8;
          tl.to(oRows[i], { opacity: 1, duration: 0.5 }, at).to(oLine, { scaleY: (i + 1) / total, duration: 0.8 }, at);
        }
        tl.fromTo(conclusion, { yPercent: 110 }, { yPercent: 0, duration: 0.8, ease: "power2.out" }, ">-0.2").to(
          {},
          { duration: 0.4 },
        );
      });

      mm.add(FLOW, () => {
        [agency, ours].forEach((col) => {
          const rows = col.querySelectorAll("[data-compare-row], [data-compare-stop]");
          gsap.fromTo(
            rows,
            { autoAlpha: 0, x: -16 },
            {
              autoAlpha: 1,
              x: 0,
              duration: 0.6,
              ease: EASE,
              stagger: 0.12,
              scrollTrigger: { trigger: col, start: "top 80%", once: true },
            },
          );
        });
        gsap.fromTo(
          conclusion,
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 0.9,
            ease: EASE,
            scrollTrigger: { trigger: q("[data-compare-conclusion]")[0], start: "top 88%", once: true },
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
