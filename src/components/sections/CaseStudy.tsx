import { caseStudy as c } from "@/content/site-content";
import { T } from "@/lib/i18n";
import { delay } from "@/lib/style";
import { CountUp } from "@/components/ui/CountUp";
import { SectionLabel } from "@/components/ui/SectionLabel";

const pad = (n: number) => String(n).padStart(2, "0");

/** Chapter row: tag on the left edge, statement in serif, detail in a narrow column. */
function Chapter({ n, tag, children }: { n: number; tag: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="relative grid-12 gap-y-4 border-t rule py-[clamp(2.25rem,5vw,4rem)]">
      <p data-reveal="fade" className="col-span-12 flex items-baseline gap-4 md:col-span-3">
        <span className="font-serif text-4xl leading-none text-rust md:text-5xl">{pad(n)}</span>
        <span className="label text-mute">{tag}</span>
      </p>
      {children}
    </div>
  );
}

export function CaseStudy() {
  return (
    <section aria-labelledby="case-title" className="bg-paper">
      <div className="shell pt-[clamp(6rem,13vw,12rem)] pb-[clamp(5rem,11vw,10rem)]">
        {/* Opening spread */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <SectionLabel index="04" label={c.label} />
          <p data-reveal="fade" className="label text-mute">
            <T v={c.sector} />
          </p>
        </div>
        <h2
          id="case-title"
          data-reveal="up"
          className="mt-[clamp(2.5rem,6vw,5rem)] display text-[13vw] [text-wrap:balance] md:max-w-[17ch] md:text-[clamp(2.5rem,8.4vw,9rem)]"
        >
          <T v={c.title} />
        </h2>
        <div className="mt-[clamp(2.5rem,6vw,5rem)] grid-12">
          <p
            data-reveal="up"
            className="col-span-12 font-serif text-[length:var(--fs-sm)] leading-[1.2] md:col-span-8 md:col-start-5 lg:col-span-6 lg:col-start-7"
          >
            <T v={c.context} />
          </p>
        </div>

        {/* Chapters */}
        <div className="mt-[clamp(4rem,9vw,8rem)]">
          {c.chapters.map((ch, i) => (
            <Chapter key={i} n={i + 1} tag={<T v={ch.tag} />}>
              <h3
                data-reveal="up"
                className="col-span-12 font-serif text-[length:var(--fs-md)] leading-[1.02] md:col-span-5 md:col-start-4"
              >
                <T v={ch.heading} />
              </h3>
              <p
                data-reveal="up"
                style={delay(120)}
                className="col-span-12 text-lg leading-relaxed text-ink/75 md:col-span-3 md:col-start-10 md:pt-2"
              >
                <T v={ch.body} />
              </p>
            </Chapter>
          ))}

          {/* The 15-day cycle */}
          <div className="grid-12 gap-y-8 border-t rule bg-ivory/0 py-[clamp(2.5rem,5vw,4rem)]">
            <div data-reveal="up" className="col-span-12 md:col-span-3">
              <p className="label text-mute">
                <T v={c.cycle.title} />
              </p>
              <p className="mt-4 flex items-end gap-3">
                <span className="font-serif text-[clamp(6rem,14vw,11rem)] leading-[0.8]">15</span>
                <span className="mb-2 label text-rust">
                  <T v={c.cycle.days} /> ↻
                </span>
              </p>
            </div>
            <ol className="col-span-12 grid grid-cols-1 gap-x-6 sm:grid-cols-2 md:col-span-9 lg:grid-cols-3">
              {c.cycle.steps.map((s, i) => (
                <li
                  key={i}
                  data-reveal="up"
                  style={delay(i * 70)}
                  className="flex items-baseline gap-4 border-t rule py-5 md:py-6"
                >
                  <span className="label text-rust num">{pad(i + 1)}</span>
                  <span className="font-serif text-2xl leading-tight md:text-[1.75rem]">
                    <T v={s} />
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <Chapter n={4} tag={<T v={c.execution.tag} />}>
            <h3
              data-reveal="up"
              className="col-span-12 font-serif text-[length:var(--fs-md)] leading-[1.02] md:col-span-5 md:col-start-4"
            >
              <T v={c.execution.heading} />
            </h3>
            <ul className="col-span-12 md:col-span-3 md:col-start-10">
              {c.execution.items.map((item, i) => (
                <li
                  key={i}
                  data-reveal="up"
                  style={delay(i * 60)}
                  className="border-b rule py-2.5 text-[1.0625rem] text-ink/80 first:pt-1"
                >
                  <T v={item} />
                </li>
              ))}
            </ul>
          </Chapter>
        </div>
      </div>

      {/* Result — the payoff, in dark */}
      <div className="on-dark shell py-[clamp(4rem,9vw,8rem)]">
        <p className="flex items-center gap-4 label text-mute-dark">
          <span aria-hidden="true" className="h-px w-10 bg-rust-light" />
          <T v={c.result.tag} />
        </p>
        <ul className="mt-[clamp(2.5rem,5vw,4.5rem)] grid grid-cols-1 md:grid-cols-3">
          {c.result.stats.map((s, i) => (
            <li
              key={i}
              data-reveal="up"
              style={delay(i * 110)}
              className={`flex items-end justify-between gap-6 border-t rule-dark py-6 md:block md:py-8 ${
                i > 0 ? "md:border-l md:pl-8" : "md:pr-8"
              }`}
            >
              <p className="font-serif text-[clamp(4rem,17vw,5rem)] leading-[0.85] md:text-[clamp(4.5rem,9vw,9rem)]">
                <CountUp figure={s.figure} />
              </p>
              <p className="max-w-[11rem] text-right text-ivory/75 md:mt-5 md:max-w-none md:text-left md:text-lg">
                <T v={s.label} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
