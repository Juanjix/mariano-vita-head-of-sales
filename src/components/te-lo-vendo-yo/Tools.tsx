import { tlvy } from "@/content/te-lo-vendo-yo/content";
import { T } from "@/lib/i18n";
import { delay } from "@/lib/style";
import { Line } from "@/components/ui/Line";
import { TlLabel } from "./TlLabel";

const t = tlvy.tools;

/** Tools framed by what they do for the sale — no gear photography. */
export function Tools() {
  return (
    <section aria-labelledby="tl-tools-title" className="shell py-[clamp(6rem,12vw,11rem)]">
      <TlLabel index={t.index} label={t.label} />
      <div className="mt-[clamp(2rem,5vw,4rem)] grid-12 items-end gap-y-6">
        <h2 id="tl-tools-title" className="col-span-12 tl-display text-[clamp(2.3rem,6.2vw,6.5rem)] lg:col-span-8">
          {t.titleLines.map((line, i) => (
            <Line key={i} d={i * 120} className={i === 1 ? "text-steel" : ""}>
              <T v={line} />
            </Line>
          ))}
        </h2>
        <p data-reveal="up" className="col-span-12 text-lg leading-relaxed text-bone/75 lg:col-span-4">
          <T v={t.body} />
        </p>
      </div>

      <div className="mt-[clamp(3rem,6vw,5rem)]" role="table" aria-labelledby="tl-tools-title">
        <div role="row" className="hidden grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-8 border-b tl-rule pb-3 md:grid">
          <span role="columnheader" className="tl-label text-steel">
            <T v={t.headers.tool} />
          </span>
          <span role="columnheader" className="tl-label text-steel">
            <T v={t.headers.purpose} />
          </span>
        </div>
        {t.rows.map((row, i) => (
          <div
            key={i}
            role="row"
            data-reveal="up"
            style={delay((i % 3) * 70)}
            className="grid gap-2 border-b tl-rule py-5 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-8 md:py-6"
          >
            <span role="cell" className="flex items-baseline gap-4 tl-display text-[clamp(1.3rem,2.2vw,2rem)]">
              <span className="tl-label text-signal num">{String(i + 1).padStart(2, "0")}</span>
              <T v={row.tool} />
            </span>
            <span role="cell" className="flex items-center gap-3 text-[1.0625rem] leading-snug text-bone/80 md:text-lg">
              <span aria-hidden="true" className="hidden text-steel md:inline">
                →
              </span>
              <T v={row.purpose} />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
