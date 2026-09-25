"use client";

import { useEffect } from "react";

/**
 * One observer for the whole page. Server-rendered elements opt in with
 * data-reveal="up|fade|line|clip|rule"; this marks them data-shown once.
 */
export function RevealObserver() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-shown])");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.setAttribute("data-shown", ""));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-shown", "");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
