import { timeline as t } from "@/content/site-content";
import { T } from "@/lib/i18n";
import { delay } from "@/lib/style";
import { Arrow } from "@/components/ui/Arrow";
import { Line } from "@/components/ui/Line";
import { SectionLabel } from "@/components/ui/SectionLabel";

/**
 * Verified chronology told as evolution: four markets, one instinct.
 * Desktop: a horizontal track read left to right. Mobile: a vertical spine.
 * It hands off to the Argentina → Colombia transition that follows.
 */
export function Timeline() {
  const last = t.chapters.length - 1;
  return (
    <section aria-labelledby="timeline-title" className="bg-paper">
      <div className="shell pt-[clamp(6rem,13vw,12rem)] pb-[clamp(3rem,6vw,5rem)]">
        {/* Header */}
        <div className="grid-12 gap-y-10">
          <div className="col-span-12 lg:col-span-7">
            <SectionLabel index="08" label={t.label} />
            <h2
              id="timeline-title"
              className="mt-[clamp(2.5rem,6vw,5rem)] display text-[11.6vw] md:text-[clamp(2.6rem,7.4vw,8rem)] lg:text-[clamp(2.6rem,6.2vw,7.5rem)]"
            >
              {t.titleLines.map((line, i) => (
                <Line key={i} d={i * 110}>
                  <T v={line} />
                </Line>
              ))}
            </h2>
          </div>
          <div className="col-span-12 self-end md:col-span-8 md:col-start-5 lg:col-span-4 lg:col-start-9">
            <p data-reveal="up" className="font-serif text-[clamp(1.9rem,3vw,2.75rem)] leading-[1.02]">
              <span className="block">
                <T v={t.statement[0]} />
              </span>
              <span className="block text-rust italic">
                <T v={t.statement[1]} />
              </span>
            </p>
            <p data-reveal="up" style={delay(120)} className="mt-6 text-lg leading-relaxed text-ink/75">
              <T v={t.body} />
            </p>
          </div>
        </div>

        {/* Chronology */}
        <div className="relative mt-[clamp(4rem,9vw,8rem)]">
          {/* Horizontal track (desktop) */}
          <span
            data-reveal="rule"
            aria-hidden="true"
            className="absolute inset-x-0 top-0 hidden h-px bg-ink lg:block"
          />
          <ol className="lg:grid lg:grid-cols-4 lg:gap-x-[clamp(1.5rem,2.4vw,2.5rem)]">
            {t.chapters.map((ch, i) => (
              <li
                key={ch.from}
                data-reveal="up"
                style={delay(i * 140)}
                className="relative border-l border-ink/25 pb-14 pl-7 sm:pl-10 lg:border-l-0 lg:pt-10 lg:pb-0 lg:pl-0"
              >
                {/* Node */}
                <span
                  aria-hidden="true"
                  className={`absolute top-[0.9rem] -left-[4.5px] h-2 w-2 rounded-full lg:-top-[3.5px] lg:left-0 ${
                    i === last ? "bg-rust" : "bg-ink"
                  }`}
                />

                <p className="flex items-baseline gap-3 lg:block">
                  <span className="sr-only">
                    <T v={t.yearsLabel} />:{" "}
                  </span>
                  <span className="block font-serif text-[clamp(3.25rem,15vw,5rem)] leading-[0.82] num lg:text-[clamp(3.5rem,6.2vw,7rem)]">
                    {ch.from}
                  </span>
                  <span className="flex items-center gap-3 font-serif text-[clamp(1.6rem,6vw,2.2rem)] leading-none text-mute num lg:mt-2 lg:text-[clamp(1.6rem,2.4vw,2.5rem)]">
                    <span aria-hidden="true" className="h-px w-5 bg-current lg:w-8" />
                    <span className="sr-only"> – </span>
                    {ch.to}
                  </span>
                </p>

                <p className="mt-6 label text-rust lg:mt-8">
                  <T v={ch.sector} />
                </p>
                <h3 className="mt-3 display text-[clamp(2rem,9vw,2.75rem)] leading-[0.92] [text-wrap:balance] lg:text-[clamp(1.75rem,2.5vw,2.75rem)]">
                  <T v={ch.title} />
                </h3>

                {ch.tags && (
                  <ul className="mt-6 max-w-xl border-t rule lg:max-w-none">
                    {ch.tags.map((tag, k) => (
                      <li key={k} className="border-b rule py-2.5 text-[0.95rem] leading-snug text-ink/75">
                        <T v={tag} />
                      </li>
                    ))}
                  </ul>
                )}
                {ch.note && (
                  <p className="mt-4 border-l-2 border-rust pl-3 text-sm leading-snug text-ink/70">
                    <T v={ch.note} />
                  </p>
                )}
              </li>
            ))}
          </ol>

          {/* Hand-off: the chronology continues into the move to Colombia */}
          <div className="relative flex items-center gap-4 pl-7 sm:pl-10 lg:mt-16 lg:pl-0">
            <span
              aria-hidden="true"
              className="absolute top-1/2 -left-[4.5px] h-2 w-2 -translate-y-1/2 rounded-full border border-rust bg-paper lg:hidden"
            />
            <span data-reveal="rule" aria-hidden="true" className="hidden h-px flex-1 bg-rust lg:block" />
            <p data-reveal="fade" className="flex items-center gap-3 label text-rust">
              <span>
                <T v={t.today} /> · <T v={t.todayPlace} />
              </span>
              <Arrow direction="down" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
