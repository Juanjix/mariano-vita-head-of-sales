"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { m, LazyMotion, domAnimation, useScroll, useSpring } from "motion/react";
import { approach } from "@/content/site-content";
import { useT } from "@/lib/i18n";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Seven stages that activate one after another as they cross the middle of
 * the viewport. No scroll hijacking: native scroll drives everything.
 * Without JS every stage renders at full strength.
 */
export function ProcessJourney({ header }: { header: ReactNode }) {
  const t = useT();
  const steps = approach.steps;
  const listRef = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(-1);
  const [ready, setReady] = useState(false);

  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 55%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });

  useEffect(() => {
    const items = Array.from(listRef.current?.querySelectorAll<HTMLElement>("[data-step]") ?? []);
    const visible = new Set<number>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const idx = Number((e.target as HTMLElement).dataset.step);
          if (e.isIntersecting) visible.add(idx);
          else visible.delete(idx);
        });
        if (visible.size) setActive(Math.max(...visible));
      },
      { rootMargin: "-48% 0px -48% 0px" },
    );
    items.forEach((el) => io.observe(el));
    const raf = requestAnimationFrame(() => setReady(true));
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  const current = Math.max(active, 0);

  return (
    <LazyMotion features={domAnimation} strict>
      <div className="grid-12 gap-y-14">
        <div className="col-span-12 lg:col-span-4">
          <div className="lg:sticky lg:top-[calc(var(--nav-h)+2.5rem)]">
            {header}
            {/* Live stage counter (desktop) */}
            <div className="mt-16 hidden items-end gap-4 lg:flex" aria-hidden="true">
              <span className="relative block h-[clamp(5rem,8vw,8.5rem)] overflow-hidden font-serif text-[clamp(5rem,8vw,8.5rem)] leading-none">
                {steps.map((_, i) => (
                  <span
                    key={i}
                    className="absolute top-0 left-0 block num transition-[transform,opacity] duration-700 ease-out-expo"
                    style={{
                      transform: `translateY(${(i - current) * 100}%)`,
                      opacity: i === current ? 1 : 0,
                    }}
                  >
                    {pad(i + 1)}
                  </span>
                ))}
                <span className="invisible">00</span>
              </span>
              <span className="mb-3 label text-mute num">/ {pad(steps.length)}</span>
            </div>
            <p className="mt-3 hidden label text-rust lg:block" aria-live="polite">
              {active >= 0 ? `${t(approach.stageLabel)} ${pad(active + 1)} — ${t(steps[active].verb)}` : " "}
            </p>
          </div>
        </div>

        <div className="relative col-span-12 lg:col-span-8">
          {/* Progress spine */}
          <div aria-hidden="true" className="absolute top-0 bottom-0 left-0 w-px bg-ink/12">
            <m.div className="h-full w-px origin-top bg-rust" style={{ scaleY: progress }} />
          </div>

          <ol ref={listRef} className="pl-6 sm:pl-10 lg:pl-14">
            {steps.map((step, i) => {
              const state = !ready || active === i ? "active" : i < active ? "passed" : "upcoming";
              return (
                <li
                  key={i}
                  data-step={i}
                  aria-current={ready && active === i ? "step" : undefined}
                  className="relative border-t rule py-[clamp(2rem,6vh,4.25rem)] first:border-t-0 first:pt-0"
                >
                  <span
                    aria-hidden="true"
                    className={`absolute top-[clamp(2rem,6vh,4.25rem)] -left-6 h-2 w-2 -translate-x-[3.5px] translate-y-3 rounded-full transition-colors duration-500 sm:-left-10 lg:-left-14 ${
                      state === "upcoming" ? "bg-ink/20" : "bg-rust"
                    } ${i === 0 ? "top-0" : ""}`}
                  />
                  <div
                    className={`grid grid-cols-[auto_1fr] items-baseline gap-x-5 transition-opacity duration-700 ease-out-expo sm:gap-x-8 ${
                      state === "active" ? "opacity-100" : state === "passed" ? "opacity-45" : "opacity-20"
                    }`}
                  >
                    <span className="label text-mute num">{pad(i + 1)}</span>
                    <div>
                      <h3 className="display text-[clamp(2.6rem,11vw,6.75rem)] leading-[0.9]">{t(step.verb)}</h3>
                      <p className="mt-3 text-lg text-ink/75 md:text-xl">{t(step.line)}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </LazyMotion>
  );
}
