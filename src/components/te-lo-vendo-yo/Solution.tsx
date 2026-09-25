import { tlvy } from "@/content/te-lo-vendo-yo/content";
import { T } from "@/lib/i18n";
import { Line } from "@/components/ui/Line";
import { TlCta } from "./TlCta";
import { TlLabel } from "./TlLabel";

const s = tlvy.solution;

/** Five pillars as an editorial ledger — rows, not cards. */
export function Solution() {
  return (
    <section id="solucion" aria-labelledby="tl-solution-title" className="tl-light shell py-[clamp(6rem,12vw,11rem)]">
      <TlLabel index={s.index} label={s.label} light />
      <div className="mt-[clamp(2rem,5vw,4rem)] grid-12 items-end gap-y-8">
        <h2 id="tl-solution-title" className="col-span-12 tl-display text-[clamp(2.4rem,6.8vw,7.25rem)] lg:col-span-8">
          {s.titleLines.map((line, i) => (
            <Line key={i} d={i * 120}>
              <T v={line} />
            </Line>
          ))}
        </h2>
        <p data-reveal="up" className="col-span-12 text-lg leading-relaxed text-graphite/75 lg:col-span-4">
          <T v={s.body} />
        </p>
      </div>

      <ol className="mt-[clamp(3.5rem,7vw,6rem)] border-b tl-rule-light">
        {s.pillars.map((pillar, i) => (
          <li
            key={i}
            data-reveal="up"
            className="grid-12 gap-y-4 border-t tl-rule-light py-[clamp(1.75rem,3.5vw,3rem)]"
          >
            <span className="col-span-12 font-serif text-[clamp(2.5rem,4vw,3.75rem)] leading-none text-signal-ink num md:col-span-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="col-span-12 tl-display text-[clamp(1.6rem,2.6vw,2.4rem)] leading-[0.95] md:col-span-4 md:col-start-3">
              <T v={pillar.title} />
            </h3>
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <p className="text-[1.0625rem] leading-relaxed text-graphite/80 md:text-lg">
                <T v={pillar.body} />
              </p>
              {pillar.points.length > 0 && (
                <ul className="mt-4 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
                  {pillar.points.map((pt, k) => (
                    <li key={k} className="flex items-baseline gap-2.5 text-[0.95rem] text-graphite/80">
                      <span aria-hidden="true" className="h-px w-3 shrink-0 translate-y-[-0.3em] bg-signal-ink" />
                      <T v={pt} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-10">
        <TlCta id="solution_inventory_cta" label={tlvy.ctas.talkInventory} variant="primary-light" />
      </div>
    </section>
  );
}
