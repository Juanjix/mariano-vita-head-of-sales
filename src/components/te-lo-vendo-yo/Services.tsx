import { tlvy } from "@/content/te-lo-vendo-yo/content";
import { T } from "@/lib/i18n";
import { delay } from "@/lib/style";
import { Line } from "@/components/ui/Line";
import { TlCta } from "./TlCta";
import { TlLabel } from "./TlLabel";

const s = tlvy.services;

/** Service models — consultative, no prices, no tiers. */
export function Services() {
  return (
    <section id="servicios" aria-labelledby="tl-services-title" className="tl-light shell py-[clamp(6rem,12vw,11rem)]">
      <TlLabel index={s.index} label={s.label} light />
      <div className="mt-[clamp(2rem,5vw,4rem)] grid-12 items-end gap-y-6">
        <h2 id="tl-services-title" className="col-span-12 tl-display text-[clamp(2.4rem,6.8vw,7.25rem)] lg:col-span-8">
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

      <ul className="mt-[clamp(3rem,6vw,5rem)] grid border-t tl-rule-light sm:grid-cols-2">
        {s.items.map((item, i) => (
          <li
            key={i}
            data-reveal="up"
            style={delay((i % 4) * 60)}
            className={`flex items-baseline gap-5 border-b tl-rule-light py-5 sm:py-6 ${i % 2 === 1 ? "sm:border-l sm:pl-8" : "sm:pr-8"}`}
          >
            <span className="tl-label text-signal-ink num">{String(i + 1).padStart(2, "0")}</span>
            <span className="tl-display text-[clamp(1.3rem,2.2vw,1.9rem)] leading-tight">
              <T v={item} />
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <TlCta id="services_inventory_cta" label={tlvy.ctas.reviewInventory} variant="primary-light" />
      </div>
    </section>
  );
}
