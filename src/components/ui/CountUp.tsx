"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { Figure } from "@/types/content";

/**
 * Renders a figure and counts up to it once visible. The final value is
 * server-rendered, so the number is correct without JS or with reduced motion.
 */
export function CountUp({ figure, duration = 1.6 }: { figure: Figure; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(figure.value);
  const [armed, setArmed] = useState(false);

  // Arm only after mount and only if the element starts off-screen.
  useEffect(() => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    if (rect.top > window.innerHeight) {
      setArmed(true);
      setValue(0);
    }
  }, [reduce]);

  useEffect(() => {
    if (!armed || !inView) return;
    const controls = animate(0, figure.value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [armed, inView, figure.value, duration]);

  return (
    <span ref={ref} className="num">
      <span aria-hidden="true">
        {figure.prefix}
        {value}
        {figure.suffix}
      </span>
      <span className="sr-only">
        {figure.prefix}
        {figure.value}
        {figure.suffix}
      </span>
    </span>
  );
}
