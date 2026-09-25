import { tlvy } from "@/content/te-lo-vendo-yo/content";
import { T } from "@/lib/i18n";
import { Line } from "@/components/ui/Line";
import { TlLabel } from "./TlLabel";
import { ComparisonMotion } from "./motion/ComparisonMotion";

const c = tlvy.comparison;
const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Signature section: where the work ends.
 * Two aligned columns of seven rows. The agency flow stops at row 4
 * (contact handoff); Te Lo Vendo Yo continues to the sale.
 */
export function Comparison() {
  const agency = [...c.shared, c.agencyEnd];
  const ours = [...c.shared, ...c.ours];
  const rows = ours.length;

  return (
    <ComparisonMotion>
      <section aria-labelledby="tl-compare-title" className="shell py-[clamp(6rem,12vw,11rem)]">
        <TlLabel index={c.index} label={c.label} />
        <div className="mt-[clamp(2rem,5vw,4rem)] grid-12 items-end gap-y-6">
          <h2 id="tl-compare-title" className="col-span-12 tl-display text-[clamp(2.4rem,6.8vw,7.25rem)] lg:col-span-8">
            {c.titleLines.map((line, i) => (
              <Line key={i} d={i * 120} className={i === 0 ? "text-signal" : ""}>
                <T v={line} />
              </Line>
            ))}
          </h2>
          <p data-reveal="up" className="col-span-12 text-lg leading-relaxed text-bone/75 lg:col-span-4">
            <T v={c.intro} />
          </p>
        </div>

        <div data-compare-pin className="mt-[clamp(3rem,6vw,5rem)]">
          <div className="grid gap-12 md:grid-cols-2 md:gap-8">
            {/* Traditional agency */}
            <div data-compare-col="agency">
              <p className="border-b tl-rule pb-3 tl-label text-steel">
                <T v={c.agencyLabel} />
              </p>
              <ol className="relative">
                <span aria-hidden="true" className="absolute top-0 bottom-0 left-[0.4rem] w-px bg-bone/10">
                  <span data-compare-line className="absolute inset-x-0 top-0 block h-full origin-top bg-steel" />
                </span>
                {Array.from({ length: rows }, (_, i) => {
                  const step = agency[i];
                  if (step) {
                    return (
                      <li
                        key={i}
                        data-compare-row
                        className="relative flex h-[clamp(3.25rem,6.5vh,4.25rem)] items-center gap-5 pl-8"
                      >
                        <span aria-hidden="true" className="absolute left-[0.4rem] h-2 w-2 -translate-x-1/2 bg-steel" />
                        <span className="w-6 tl-label text-steel num">{pad(i + 1)}</span>
                        <span
                          className={`tl-display text-[clamp(1.35rem,2.3vw,2.1rem)] ${i === 3 ? "text-steel-light" : ""}`}
                        >
                          <T v={step} />
                        </span>
                      </li>
                    );
                  }
                  if (i === agency.length) {
                    return (
                      <li
                        key={i}
                        data-compare-stop
                        className="relative flex h-[clamp(3.25rem,6.5vh,4.25rem)] items-center gap-4 pl-8"
                      >
                        <span aria-hidden="true" className="absolute left-0 h-[2px] w-[0.8rem] bg-bone" />
                        <span className="tl-label text-bone">
                          <T v={c.agencyStop} />
                        </span>
                      </li>
                    );
                  }
                  return <li key={i} aria-hidden="true" className="hidden h-[clamp(3.25rem,6.5vh,4.25rem)] md:block" />;
                })}
              </ol>
            </div>

            {/* Te Lo Vendo Yo */}
            <div data-compare-col="ours">
              <p className="border-b border-signal/60 pb-3 tl-label text-signal">
                <T v={c.ourLabel} />
              </p>
              <ol className="relative">
                <span aria-hidden="true" className="absolute top-0 bottom-0 left-[0.4rem] w-px bg-bone/10">
                  <span data-compare-line className="absolute inset-x-0 top-0 block h-full origin-top bg-signal" />
                </span>
                {ours.map((step, i) => (
                  <li
                    key={i}
                    data-compare-row
                    data-beyond={i >= c.shared.length ? "" : undefined}
                    className="relative flex h-[clamp(3.25rem,6.5vh,4.25rem)] items-center gap-5 pl-8"
                  >
                    <span aria-hidden="true" className="absolute left-[0.4rem] h-2 w-2 -translate-x-1/2 bg-signal" />
                    <span className="w-6 tl-label text-steel num">{pad(i + 1)}</span>
                    <span
                      className={`tl-display text-[clamp(1.35rem,2.3vw,2.1rem)] ${i === rows - 1 ? "text-signal" : ""}`}
                    >
                      <T v={step} />
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <p
            data-compare-conclusion
            className="mt-[clamp(2.5rem,5vw,4rem)] border-t tl-rule pt-[clamp(1.5rem,3vw,2.5rem)]"
          >
            <span className="block overflow-clip tl-display text-[clamp(2.4rem,7vw,7.5rem)]">
              <span data-compare-conclusion-inner className="block">
                <T v={c.conclusion} />
              </span>
            </span>
          </p>
        </div>
      </section>
    </ComparisonMotion>
  );
}
