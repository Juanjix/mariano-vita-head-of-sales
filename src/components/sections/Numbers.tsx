import { numbers } from "@/content/site-content";
import { T } from "@/lib/i18n";
import { Figure } from "@/components/ui/Figure";
import { NumbersMotion } from "./NumbersMotion";
import { SectionLabel } from "@/components/ui/SectionLabel";

/** Proof: four figures set as architecture — rules, not cards. */
export function Numbers() {
  return (
    <NumbersMotion>
      <section
        id="numbers"
        aria-labelledby="numbers-title"
        className="shell pt-[clamp(5rem,11vw,10rem)] pb-[clamp(5rem,12vw,11rem)]"
      >
        <div className="grid-12 items-end gap-y-6">
          <SectionLabel index="01" label={numbers.label} className="col-span-12 md:col-span-4" />
          <h2
            id="numbers-title"
            data-reveal="up"
            className="col-span-12 font-serif text-[length:var(--fs-md)] leading-[1.02] md:col-span-8 md:text-right"
          >
            <T v={numbers.title} />
          </h2>
        </div>

        <ol className="relative mt-[clamp(3rem,7vw,6rem)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <span data-num-rule aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-ink" />
          {numbers.stats.map((stat, i) => {
            const unit = stat.figure.prefix && /[A-Z]/.test(stat.figure.prefix) ? stat.figure.prefix.trim() : null;
            const figure = unit ? { ...stat.figure, prefix: undefined } : stat.figure;
            return (
              <li
                key={i}
                data-stat
                className={`group relative flex items-end justify-between gap-6 border-b rule py-7 sm:block sm:py-0 sm:pt-6 sm:pb-8 lg:border-b-0 ${
                  i % 2 === 1 ? "sm:border-l sm:pl-6 lg:pl-8" : ""
                } ${i > 0 ? "lg:border-l lg:pl-8" : ""} ${i >= 2 ? "" : "sm:pr-6"}`}
              >
                <span data-stat-index className="hidden label text-mute num sm:block">
                  ({String(i + 1).padStart(2, "0")})
                </span>
                <p className="overflow-clip font-serif text-[clamp(3.6rem,17vw,5.5rem)] leading-[0.85] [overflow-clip-margin:0.12em] sm:mt-10 sm:text-[clamp(4.5rem,9vw,7rem)] lg:mt-16 lg:text-[clamp(4.25rem,8.2vw,9.5rem)]">
                  <span data-stat-value className="inline-block">
                    {unit && (
                      <span className="mr-2 inline-block pt-[0.9em] align-top label text-rust sm:mr-3">{unit}</span>
                    )}
                    {/* Count only plain quantities; a currency amount reads better set, not spun. */}
                    <Figure figure={figure} countable={!unit} />
                  </span>
                </p>
                <p
                  data-stat-label
                  className="max-w-[10rem] text-right text-[0.95rem] leading-snug text-ink/75 sm:mt-5 sm:max-w-[16rem] sm:text-left"
                >
                  <T v={stat.label} />
                </p>
              </li>
            );
          })}
        </ol>
        <p data-num-note className="mt-8 label text-mute">
          <T v={numbers.note} />
        </p>
      </section>
    </NumbersMotion>
  );
}
