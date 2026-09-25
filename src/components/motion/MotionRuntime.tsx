"use client";

import { useEffect, useRef } from "react";
import { EASE, MQ, ScrollTrigger, gsap, useGSAP } from "@/lib/gsap";
import { useLocale } from "@/lib/i18n";

declare global {
  interface Window {
    __motionReady?: boolean;
  }
}

type Variant = "up" | "fade" | "line" | "rule" | "media";

/** Animates one server-rendered [data-reveal] element. GSAP owns the properties. */
function reveal(el: HTMLElement, at: number) {
  const variant = el.dataset.reveal as Variant;
  const d = parseFloat(getComputedStyle(el).getPropertyValue("--d")) || 0;
  const delay = at + d / 1000;
  switch (variant) {
    case "line": {
      const inner = el.firstElementChild as HTMLElement | null;
      if (inner) {
        gsap.fromTo(
          inner,
          { yPercent: 175 },
          { yPercent: 0, duration: 1.1, ease: EASE, delay, clearProps: "transform" },
        );
      }
      break;
    }
    case "rule":
      gsap.fromTo(
        el,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 1.1, ease: "power2.inOut", delay, clearProps: "transform" },
      );
      break;
    case "media": {
      // Reusable photographic reveal: mask opens upward, image settles.
      const zoom = el.querySelector<HTMLElement>("[data-media-zoom]");
      const frame = (el.firstElementChild as HTMLElement | null) ?? el;
      gsap.fromTo(
        frame,
        { clipPath: "inset(100% 0% 0% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.3, ease: "expo.inOut", delay, clearProps: "clipPath" },
      );
      if (zoom) gsap.fromTo(zoom, { scale: 1.06, y: 24 }, { scale: 1, y: 0, duration: 1.6, ease: EASE, delay });
      break;
    }
    case "fade":
      gsap.fromTo(el, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.9, ease: "power1.out", delay });
      break;
    default:
      gsap.fromTo(
        el,
        { y: 28, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 1, ease: EASE, delay, clearProps: "transform" },
      );
  }
  // Hand over from the CSS pre-state to GSAP's inline state in the same tick.
  el.setAttribute("data-shown", "");
}

/**
 * Page-level motion runtime:
 *  - Level-2 section reveals for any element carrying data-reveal="up|fade|line|rule"
 *    (one IntersectionObserver instead of one ScrollTrigger per element).
 *  - Keeps ScrollTrigger measurements correct after fonts, images and language changes.
 *  - Smooth in-page anchor scrolling that respects reduced motion (CSS smooth
 *    scrolling is disabled because it fights ScrollTrigger's pin refresh).
 */
export function MotionRuntime() {
  const locale = useLocale();
  const firstLocale = useRef(true);

  useGSAP(() => {
    window.__motionReady = true;
    // QA hook only: ?motion-debug exposes ScrollTrigger for inspection (never enables markers).
    if (new URLSearchParams(location.search).has("motion-debug")) {
      (window as unknown as { __ST: typeof ScrollTrigger }).__ST = ScrollTrigger;
    }
    const mm = gsap.matchMedia();

    mm.add(MQ.motion, () => {
      const pending = new Set<HTMLElement>(document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-shown])"));
      const io = new IntersectionObserver(
        (entries) => {
          const entering = entries
            .filter((e) => e.isIntersecting)
            .map((e) => e.target as HTMLElement)
            .sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));
          entering.forEach((el, i) => {
            io.unobserve(el);
            pending.delete(el);
            reveal(el, Math.min(i * 0.07, 0.35));
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
      );
      pending.forEach((el) => io.observe(el));
      return () => io.disconnect();
    });

    mm.add(MQ.reduce, () => {
      document.querySelectorAll("[data-reveal]").forEach((el) => el.setAttribute("data-shown", ""));
    });

    return () => mm.revert();
  });

  // Layout stability: re-measure once fonts and images have settled.
  useEffect(() => {
    let raf = 0;
    const refresh = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => ScrollTrigger.refresh());
    };
    document.fonts?.ready.then(refresh);
    if (document.readyState === "complete") refresh();
    else window.addEventListener("load", refresh, { once: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("load", refresh);
    };
  }, []);

  // Language switch changes text lengths → re-measure after React commits the new copy.
  useEffect(() => {
    if (firstLocale.current) {
      firstLocale.current = false;
      return;
    }
    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(raf);
  }, [locale]);

  // Smooth anchor navigation (native when reduced motion is requested).
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      const id = a?.getAttribute("href")?.slice(1);
      if (!a || !id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      // FAQ deep links (e.g. #faq-particulares) open the answer they point to.
      if (target instanceof HTMLDetailsElement) target.open = true;
      const reduce = window.matchMedia(MQ.reduce).matches;
      target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      history.pushState(null, "", `#${id}`);
      // Move focus for keyboard and screen-reader users without a second jump.
      if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
