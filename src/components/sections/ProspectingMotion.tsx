"use client";

import { useRef, type ReactNode } from "react";
import { EASE, MQ, gsap, useGSAP } from "@/lib/gsap";

/**
 * Field prospecting (Level 2): activity → opportunity → account.
 * 1. Tally: 25 contacts rise as neutral marks; then up to 8 of them extend
 *    and turn rust — the accounts that came out of the day's activity.
 * 2. Figures: 25 appears, a link draws toward the right, "up to 8" follows,
 *    then the qualifying note. Copy and qualification are unchanged.
 */
export function ProspectingMotion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(scope);
      const mm = gsap.matchMedia();

      mm.add(MQ.motion, () => {
        const contacts = q("[data-bar]");
        const accounts = q('[data-bar="account"]');

        gsap
          .timeline({ scrollTrigger: { trigger: q("[data-tally]")[0], start: "top 78%", once: true } })
          .fromTo(
            contacts,
            { scaleY: 0, transformOrigin: "50% 100%" },
            {
              scaleY: (_i: number, el: Element) => (el.getAttribute("data-bar") === "account" ? 0.58 : 1),
              duration: 0.7,
              ease: EASE,
              stagger: 0.025,
            },
            0,
          )
          .fromTo(
            accounts,
            { backgroundColor: "rgba(21,19,17,0.45)" },
            { backgroundColor: "#9f4527", duration: 0.4, stagger: 0.06 },
            ">-0.1",
          )
          .to(accounts, { scaleY: 1, duration: 0.6, ease: "power2.out", stagger: 0.06 }, "<");

        gsap
          .timeline({
            defaults: { ease: EASE },
            scrollTrigger: { trigger: q("[data-pros-figures]")[0], start: "top 80%", once: true },
          })
          .fromTo(q("[data-pros-contacts]"), { autoAlpha: 0, y: 32 }, { autoAlpha: 1, y: 0, duration: 0.9 }, 0)
          .fromTo(q("[data-pros-link]"), { scaleX: 0 }, { scaleX: 1, duration: 0.6, ease: "power2.inOut" }, 0.35)
          .fromTo(q("[data-pros-link-head]"), { autoAlpha: 0, x: -8 }, { autoAlpha: 1, x: 0, duration: 0.3 }, 0.85)
          .fromTo(q("[data-pros-accounts]"), { autoAlpha: 0, y: 32 }, { autoAlpha: 1, y: 0, duration: 0.9 }, 0.8)
          .fromTo(q("[data-pros-note]"), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.7 }, 1.2);
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
