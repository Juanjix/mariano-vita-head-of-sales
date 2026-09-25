"use client";

import { useRef } from "react";
import { tlvy } from "@/content/te-lo-vendo-yo/content";
import { useT } from "@/lib/i18n";
import { MQ, gsap, useGSAP } from "@/lib/gsap";
import { Arrow } from "@/components/ui/Arrow";

/**
 * Compact commercial CTA for phones/tablets. Appears after the hero and
 * steps aside when the conversion section or footer is on screen, so it
 * never covers the content it points to.
 */
export function MobileCta() {
  const t = useT();
  const bar = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = bar.current;
      if (!el) return;
      const hero = document.getElementById("top");
      // Sections that already carry their own inventory CTA (or the conversion itself).
      const blockers = Array.from(document.querySelectorAll<HTMLElement>("[data-hide-sticky-cta]"));
      if (!hero) return;
      const reduce = window.matchMedia(MQ.reduce).matches;
      let pastHero = false;
      const blocked = new Set<Element>();
      const render = () => {
        const show = pastHero && blocked.size === 0;
        el.toggleAttribute("inert", !show);
        gsap.to(el, { yPercent: show ? 0 : 110, duration: reduce ? 0 : 0.45, ease: "power3.out", overwrite: true });
      };
      gsap.set(el, { yPercent: 110 });
      const heroIo = new IntersectionObserver(([e]) => {
        pastHero = !e.isIntersecting;
        render();
      });
      const blockIo = new IntersectionObserver((entries) => {
        entries.forEach((e) => (e.isIntersecting ? blocked.add(e.target) : blocked.delete(e.target)));
        render();
      });
      heroIo.observe(hero);
      blockers.forEach((b) => blockIo.observe(b));
      return () => {
        heroIo.disconnect();
        blockIo.disconnect();
      };
    },
    { scope: bar },
  );

  return (
    <div
      ref={bar}
      inert
      className="fixed inset-x-0 bottom-0 z-40 border-t tl-rule bg-graphite/95 px-[var(--gutter)] pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden"
    >
      <a
        href="#contacto"
        data-cta="mobile_sticky_cta"
        className="flex min-h-12 items-center justify-between bg-signal px-5 text-graphite"
      >
        <span className="text-[0.95rem] font-semibold tracking-[0.06em] uppercase">{t(tlvy.mobileCta)}</span>
        <Arrow />
      </a>
    </div>
  );
}
