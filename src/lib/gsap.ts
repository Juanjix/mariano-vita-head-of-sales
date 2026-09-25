"use client";

/**
 * Single GSAP entry point. Import gsap, ScrollTrigger and useGSAP from here so
 * plugins are registered exactly once and only on the client.
 */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  gsap.defaults({ ease: "power3.out", duration: 0.9 });
  // Mobile browsers resize the viewport when the URL bar shows/hides; don't
  // recalculate every trigger for that.
  ScrollTrigger.config({ ignoreMobileResize: true });
}

/** Editorial ease used across the site (≈ cubic-bezier(0.16, 1, 0.3, 1)). */
export const EASE = "expo.out";

/**
 * Responsive + accessibility conditions for gsap.matchMedia().
 * Every animated branch requires `no-preference`; reduced motion gets none.
 */
export const MQ = {
  desktop: "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
  tablet: "(min-width: 768px) and (max-width: 1023px) and (prefers-reduced-motion: no-preference)",
  mobile: "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
  /** Below desktop: tablet + mobile share the lighter, unpinned behaviour. */
  compact: "(max-width: 1023px) and (prefers-reduced-motion: no-preference)",
  motion: "(prefers-reduced-motion: no-preference)",
  reduce: "(prefers-reduced-motion: reduce)",
} as const;

/** Pinned sequences also need enough height to hold their content. */
export const PIN_OK = "(min-width: 1024px) and (min-height: 720px) and (prefers-reduced-motion: no-preference)";
export const PIN_NO = "(min-width: 1024px) and (max-height: 719px) and (prefers-reduced-motion: no-preference)";

export { gsap, ScrollTrigger, useGSAP };
