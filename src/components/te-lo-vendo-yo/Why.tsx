import { tlvy } from "@/content/te-lo-vendo-yo/content";
import { T } from "@/lib/i18n";
import { Line } from "@/components/ui/Line";
import { TlLabel } from "./TlLabel";

const w = tlvy.why;

export function Why() {
  return (
    <section aria-labelledby="tl-why-title" className="shell py-[clamp(6rem,12vw,11rem)]">
      <TlLabel index={w.index} label={w.label} />
      <h2 id="tl-why-title" className="mt-[clamp(2rem,5vw,4rem)] tl-display text-[clamp(2.4rem,6.8vw,7.25rem)]">
        {w.titleLines.map((line, i) => (
          <Line key={i} d={i * 120} className={i === 1 ? "text-signal" : ""}>
            <T v={line} />
          </Line>
        ))}
      </h2>
      <ol className="mt-[clamp(3rem,6vw,5rem)] border-b tl-rule">
        {w.principles.map((pr, i) => (
          <li key={i} data-reveal="up" className="grid-12 gap-y-3 border-t tl-rule py-[clamp(1.5rem,3vw,2.5rem)]">
            <span className="col-span-12 tl-label text-steel num md:col-span-1 md:pt-2">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="col-span-12 tl-display text-[clamp(1.6rem,3vw,2.75rem)] leading-[0.95] md:col-span-5">
              <T v={pr.title} />
            </h3>
            <p className="col-span-12 text-[1.0625rem] leading-relaxed text-bone/80 md:col-span-6 md:text-lg">
              <T v={pr.body} />
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
