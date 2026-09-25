"use client";

import { useRef, useState, type ReactNode } from "react";
import { approach } from "@/content/site-content";
import { useT } from "@/lib/i18n";
import { EASE, MQ, PIN_NO, PIN_OK, gsap, useGSAP } from "@/lib/gsap";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * How I build business — the main scroll experience.
 *
 * Desktop (≥1024px, tall enough): the section pins and one GSAP timeline walks
 * through the seven stages — outgoing stage lifts away, incoming stage rises,
 * a seven-segment rail fills and the counter rolls 01 → 07. ~230vh of scroll.
 * Tablet / mobile / short screens: no pin. Stages keep their natural list flow,
 * reveal as they enter, and a spine fills with scroll.
 * Reduced motion / no JS: the plain list, fully visible.
 */
export function ProcessJourney({ header }: { header: ReactNode }) {
  const t = useT();
  const steps = approach.steps;
  const scope = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;
      const q = gsap.utils.selector(root);
      const mm = gsap.matchMedia();

      mm.add(PIN_OK, () => {
        // Synchronous class switch → the pin measures the staged layout.
        root.classList.add("is-staged");
        const items = q<HTMLElement>("[data-step]");
        const segments = q<HTMLElement>("[data-rail] > span > span");
        const digits = q<HTMLElement>("[data-counter] > span[data-digit]");
        const n = items.length;
        const hold = 0.4;
        let current = -1;

        const roll = (idx: number) => {
          if (idx === current) return;
          current = idx;
          setActive(idx);
          gsap.to(digits, {
            yPercent: (i: number) => (i - idx) * 100,
            autoAlpha: (i: number) => (i === idx ? 1 : 0),
            duration: 0.6,
            ease: EASE,
            overwrite: true,
          });
        };

        gsap.set(items, { autoAlpha: 0 });
        gsap.set(items[0], { autoAlpha: 1 });
        gsap.set(segments, { scaleX: 0, transformOrigin: "left center" });
        roll(0);

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: q("[data-process-pin]")[0],
            start: "top 14%",
            end: `+=${(n - 1) * 38}%`,
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            onUpdate: (self) => {
              const time = self.progress * (n - 1 + hold);
              roll(Math.max(0, Math.min(n - 1, Math.floor(time + 0.25))));
            },
          },
        });

        for (let i = 1; i < n; i++) {
          const at = i - 1;
          tl.to(segments[i - 1], { scaleX: 1, duration: 1 }, at)
            .to(items[i - 1], { autoAlpha: 0, y: -48, duration: 0.3, ease: "power2.in" }, at + 0.25)
            .fromTo(
              items[i],
              { autoAlpha: 0, y: 48 },
              { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" },
              at + 0.55,
            );
        }
        // Final stage holds briefly while the last rail segment completes.
        tl.to(segments[n - 1], { scaleX: 1, duration: hold }, n - 1);

        return () => {
          root.classList.remove("is-staged");
          setActive(0);
        };
      });

      mm.add(`${MQ.compact}, ${PIN_NO}`, () => {
        gsap.fromTo(
          q("[data-spine-fill]"),
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            transformOrigin: "top center",
            scrollTrigger: { trigger: q("[data-steps]")[0], start: "top 65%", end: "bottom 65%", scrub: 0.5 },
          },
        );
        q<HTMLElement>("[data-step]").forEach((item) => {
          gsap.fromTo(
            item.querySelector("[data-step-body]"),
            { autoAlpha: 0, y: 32 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              ease: EASE,
              scrollTrigger: { trigger: item, start: "top 82%", once: true },
            },
          );
        });
      });

      return () => mm.revert();
    },
    { scope },
  );

  return (
    <div ref={scope}>
      <div data-process-pin className="grid-12 gap-y-14">
        <div className="col-span-12 lg:col-span-4">
          <div className="lg:sticky lg:top-[calc(var(--nav-h)+2.5rem)]">
            {header}

            {/* Pinned-mode instruments (desktop only; hidden otherwise) */}
            <div data-instruments className="mt-14 hidden" aria-hidden="true">
              <div className="flex items-end gap-4">
                <span
                  data-counter
                  className="relative block h-[clamp(5rem,8vw,8.5rem)] overflow-hidden font-serif text-[clamp(5rem,8vw,8.5rem)] leading-none"
                >
                  {steps.map((_, i) => (
                    <span key={i} data-digit className="absolute top-0 left-0 block num">
                      {pad(i + 1)}
                    </span>
                  ))}
                  <span className="invisible">00</span>
                </span>
                <span className="mb-3 label text-mute num">/ {pad(steps.length)}</span>
              </div>
              <div data-rail className="mt-6 flex max-w-[20rem] gap-1.5">
                {steps.map((_, i) => (
                  <span key={i} className="relative h-px flex-1 bg-ink/15">
                    <span className="absolute inset-0 bg-rust" />
                  </span>
                ))}
              </div>
              <p className="mt-4 label text-rust">
                {t(approach.stageLabel)} {pad(active + 1)} — {t(steps[active].verb)}
              </p>
            </div>
          </div>
        </div>

        <div className="relative col-span-12 lg:col-span-8">
          {/* Progress spine (list mode) */}
          <div data-spine aria-hidden="true" className="absolute top-0 bottom-0 left-0 w-px bg-ink/12">
            <div data-spine-fill className="h-full w-px origin-top bg-rust" />
          </div>

          <ol data-steps className="pl-6 sm:pl-10 lg:pl-14">
            {steps.map((step, i) => (
              <li
                key={i}
                data-step={i}
                data-current={active === i ? "" : undefined}
                className="relative border-t rule py-[clamp(2rem,6vh,4.25rem)] first:border-t-0 first:pt-0"
              >
                <span
                  aria-hidden="true"
                  className={`absolute top-[clamp(2rem,6vh,4.25rem)] -left-6 h-2 w-2 -translate-x-[3.5px] translate-y-3 rounded-full bg-rust sm:-left-10 lg:-left-14 ${i === 0 ? "top-0" : ""}`}
                  data-step-dot
                />
                <div data-step-body className="grid grid-cols-[auto_1fr] items-baseline gap-x-5 sm:gap-x-8">
                  <span className="label text-mute num">{pad(i + 1)}</span>
                  <div>
                    <h3 className="display text-[clamp(2.6rem,11vw,6.75rem)] leading-[0.9]">{t(step.verb)}</h3>
                    <p className="mt-3 text-lg text-ink/75 md:text-xl">{t(step.line)}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
