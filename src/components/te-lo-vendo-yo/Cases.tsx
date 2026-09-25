import { tlvy } from "@/content/te-lo-vendo-yo/content";
import { tlvyCases } from "@/content/te-lo-vendo-yo/cases";
import { T } from "@/lib/i18n";
import { Arrow } from "@/components/ui/Arrow";
import { Line } from "@/components/ui/Line";
import type { TlvyCase, TlvyCaseMetrics } from "@/types/te-lo-vendo-yo";
import { TlLabel } from "./TlLabel";
import { TlMedia } from "./TlMedia";

const c = tlvy.cases;
const metricKeys = Object.keys(c.metricLabels) as (keyof TlvyCaseMetrics)[];

/** One documented case. Renders only the metrics actually supplied. */
function CaseEntry({ item }: { item: TlvyCase }) {
  const metrics = metricKeys.filter((k) => typeof item.metrics?.[k] === "number");
  return (
    <li className="grid-12 gap-y-6 border-t tl-rule-light py-10">
      {item.heroImage && (
        <div className="col-span-12 aspect-[4/5] overflow-hidden bg-bone-2 md:col-span-4">
          <TlMedia media={item.heroImage} sizes="(min-width: 768px) 33vw, 100vw" />
        </div>
      )}
      <div className="col-span-12 md:col-span-8">
        <h3 className="tl-display text-[clamp(1.75rem,3vw,2.75rem)]">
          <T v={item.vehicle} />
          {item.modelYear ? <span className="ml-3 text-graphite/50">{item.modelYear}</span> : null}
        </h3>
        {(item.dealership || item.location) && (
          <p className="mt-2 tl-label text-graphite/60">
            {[item.dealership, item.location].filter(Boolean).join(" · ")}
          </p>
        )}
        {item.initialProblem && (
          <p className="mt-4 text-lg text-graphite/80">
            <T v={item.initialProblem} />
          </p>
        )}
        {item.strategy && (
          <p className="mt-2 text-lg text-graphite/80">
            <T v={item.strategy} />
          </p>
        )}
        {metrics.length > 0 && (
          <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {metrics.map((k) => (
              <div key={k} className="border-t tl-rule-light pt-2">
                <dt className="tl-label text-graphite/60">
                  <T v={c.metricLabels[k]} />
                </dt>
                <dd className="mt-1 tl-display text-3xl num">{item.metrics?.[k]}</dd>
              </div>
            ))}
          </dl>
        )}
        {item.finalResult && (
          <p className="mt-6 font-serif text-2xl">
            <T v={item.finalResult} />
          </p>
        )}
        {item.sold && (
          <p className="mt-4 inline-block bg-graphite px-3 py-1 tl-label text-bone">
            <T v={c.sold} />
          </p>
        )}
      </div>
    </li>
  );
}

/** Future-ready case section. With zero documented cases it shows an honest, intentional empty state. */
export function Cases() {
  return (
    <section id="casos" aria-labelledby="tl-cases-title" className="tl-light shell py-[clamp(6rem,12vw,11rem)]">
      <TlLabel index={c.index} label={c.label} light />
      <h2 id="tl-cases-title" className="mt-[clamp(2rem,5vw,4rem)] tl-display text-[clamp(2.4rem,6.8vw,7.25rem)]">
        {c.titleLines.map((line, i) => (
          <Line key={i} d={i * 120}>
            <T v={line} />
          </Line>
        ))}
      </h2>

      {tlvyCases.length > 0 ? (
        <ul className="mt-12">
          {tlvyCases.map((item) => (
            <CaseEntry key={item.slug} item={item} />
          ))}
        </ul>
      ) : (
        <div className="mt-[clamp(3rem,6vw,5rem)] grid-12 gap-y-10">
          <div className="col-span-12 lg:col-span-5">
            <p data-reveal="up" className="font-serif text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.1]">
              <T v={c.empty} />
            </p>
            <p data-reveal="up" className="mt-5 max-w-[30rem] text-[1.0625rem] leading-relaxed text-graphite/70">
              <T v={c.emptyNote} />
            </p>
          </div>
          {/* The case file each vehicle will get — structure only, no data */}
          <div
            data-reveal="up"
            className="col-span-12 border border-dashed border-graphite/30 p-6 sm:p-8 lg:col-span-6 lg:col-start-7"
          >
            <p className="tl-label text-graphite/60">
              <T v={c.structureLabel} />
            </p>
            <ol className="mt-6">
              {c.structure.map((s, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between gap-4 border-t border-dashed border-graphite/20 py-3.5"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="tl-label text-signal-ink num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="tl-display text-[clamp(1.2rem,2vw,1.6rem)]">
                      <T v={s} />
                    </span>
                  </span>
                  {i < c.structure.length - 1 ? (
                    <Arrow direction="down" className="text-graphite/35" />
                  ) : (
                    <span aria-hidden="true" className="h-2 w-2 bg-signal-ink" />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </section>
  );
}
