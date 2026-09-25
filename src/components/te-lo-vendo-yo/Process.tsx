import { tlvy } from "@/content/te-lo-vendo-yo/content";
import { T } from "@/lib/i18n";
import { Line } from "@/components/ui/Line";
import { TlLabel } from "./TlLabel";
import { ProcessMotion } from "./motion/ProcessMotion";

const p = tlvy.process;
const pad = (n: number) => String(n).padStart(2, "0");

/**
 * How it works: sticky title (desktop, pure CSS) + five stages that come to
 * full strength as they cross the reading line. Native scroll, no pin.
 */
export function Process() {
  return (
    <ProcessMotion>
      <section
        id="como-funciona"
        aria-labelledby="tl-process-title"
        className="tl-light shell py-[clamp(6rem,12vw,11rem)]"
      >
        <div className="grid-12 gap-y-10">
          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-[calc(var(--nav-h)+3rem)]">
              <TlLabel index={p.index} label={p.label} light />
              <h2
                id="tl-process-title"
                className="mt-8 tl-display text-[clamp(3rem,10vw,8rem)] lg:text-[clamp(3.5rem,6.4vw,7rem)]"
              >
                {p.titleLines.map((line, i) => (
                  <Line key={i} d={i * 120}>
                    <T v={line} />
                  </Line>
                ))}
              </h2>
              <ol aria-hidden="true" className="mt-10 hidden gap-2 lg:flex">
                {p.steps.map((s, i) => (
                  <li key={i} data-process-tick className="flex-1">
                    <span className="block h-[3px] bg-graphite/15">
                      <span data-process-tick-fill className="block h-full origin-left bg-signal-ink" />
                    </span>
                    <span className="mt-2 block tl-label text-graphite/60">
                      <T v={s.key} />
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <ol data-process-list className="relative col-span-12 lg:col-span-8 lg:col-start-5">
            <span aria-hidden="true" className="absolute top-0 bottom-0 left-0 w-px bg-graphite/12">
              <span data-process-line className="absolute inset-0 block origin-top bg-signal-ink" />
            </span>
            {p.steps.map((step, i) => (
              <li
                key={i}
                data-process-step
                className="relative border-t tl-rule-light py-[clamp(2rem,5vh,3.5rem)] pl-7 first:border-t-0 first:pt-0 sm:pl-10"
              >
                <span
                  aria-hidden="true"
                  className={`absolute left-0 h-2.5 w-2.5 -translate-x-1/2 translate-y-2 bg-signal-ink ${i === 0 ? "top-0" : "top-[clamp(2rem,5vh,3.5rem)]"}`}
                />
                <p className="flex items-baseline gap-4">
                  <span className="tl-label text-graphite/60 num">{pad(i + 1)}</span>
                  <span className="tl-display text-[clamp(2.6rem,8vw,6rem)]">
                    <T v={step.key} />
                  </span>
                </p>
                <h3 className="mt-3 text-[1.25rem] font-bold tracking-[-0.01em] md:text-[1.5rem]">
                  <T v={step.title} />
                </h3>
                <p className="mt-2 max-w-[36rem] text-[1.0625rem] leading-relaxed text-graphite/75 md:text-lg">
                  <T v={step.body} />
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </ProcessMotion>
  );
}
