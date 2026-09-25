import { tlvy } from "@/content/te-lo-vendo-yo/content";
import { T } from "@/lib/i18n";
import { TlCta } from "./TlCta";
import { LowTurnoverMotion } from "./motion/LowTurnoverMotion";

const l = tlvy.lowTurnover;

/** High-conversion band in the signal colour. The last word drifts: inventory that starts moving. */
export function LowTurnover() {
  return (
    <LowTurnoverMotion>
      <section
        data-hide-sticky-cta
        aria-labelledby="tl-low-title"
        className="overflow-x-clip bg-signal text-graphite [&_:focus-visible]:outline-graphite"
      >
        <div className="shell py-[clamp(5rem,11vw,10rem)]">
          <h2 id="tl-low-title" className="tl-display text-[clamp(2.6rem,9.4vw,10.5rem)] !leading-[0.96]">
            {l.titleLines.map((line, i) => (
              <span key={i} data-low-line className={`block ${i === 2 ? "md:pl-[22%]" : ""}`}>
                <T v={line} />
              </span>
            ))}
          </h2>
          <div className="mt-[clamp(2rem,5vw,4rem)] grid-12 items-end gap-y-8">
            <p data-reveal="up" className="col-span-12 text-lg leading-relaxed font-medium md:col-span-6 md:text-xl">
              <T v={l.body} />
            </p>
            <div data-reveal="up" className="col-span-12 md:col-span-5 md:col-start-8 md:justify-self-end">
              <TlCta
                id="low_turnover_cta"
                label={tlvy.ctas.inventory}
                variant="primary-light"
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </LowTurnoverMotion>
  );
}
