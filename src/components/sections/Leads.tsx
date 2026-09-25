import { leads } from "@/content/site-content";
import { T } from "@/lib/i18n";
import { delay } from "@/lib/style";
import { Figure } from "@/components/ui/Figure";
import { LeadsMotion } from "./LeadsMotion";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Leads() {
  return (
    <LeadsMotion>
      <section
        aria-labelledby="leads-title"
        className="on-dark relative overflow-hidden shell py-[clamp(6rem,14vw,13rem)]"
      >
        <SectionLabel index="06" label={leads.label} dark />
        <h2 id="leads-title" className="sr-only">
          <T v={leads.label} />
        </h2>

        <figure className="mt-[clamp(2.5rem,6vw,5rem)]">
          <blockquote data-quote className="relative">
            <span
              data-quote-mark
              aria-hidden="true"
              className="pointer-events-none absolute -top-[0.28em] left-0 font-serif text-[clamp(6rem,16vw,15rem)] leading-none text-rust-light/90 md:-top-[0.12em] md:-left-[0.08em]"
            >
              “
            </span>
            <p className="relative pt-[clamp(3.5rem,8vw,6.5rem)] font-serif text-[clamp(2.6rem,7.6vw,8.5rem)] leading-[0.95] tracking-[-0.015em] [text-wrap:balance] md:pt-0 md:pl-[8%]">
              <span data-quote-part className="block">
                <T v={leads.quote[0]} />
              </span>{" "}
              <span data-quote-part data-quote-emph className="block text-rust-light">
                <T v={leads.quote[1]} />
              </span>
            </p>
          </blockquote>
          <figcaption data-reveal="fade" className="mt-8 label text-mute-dark md:pl-[8%]">
            {leads.attribution}
          </figcaption>
        </figure>

        <div className="mt-[clamp(4rem,9vw,8rem)] grid-12 gap-y-14">
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <p data-reveal="up" className="text-lg leading-relaxed text-ivory/80 md:text-xl">
              <T v={leads.lead} />
            </p>
            <ul className="mt-8 border-t rule-dark">
              {leads.levers.map((l, i) => (
                <li
                  key={i}
                  data-reveal="up"
                  style={delay(i * 60)}
                  className="flex items-baseline gap-5 border-b rule-dark py-3.5"
                >
                  <span className="label text-rust-light num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-serif text-2xl leading-tight md:text-[1.75rem]">
                    <T v={l} />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal="up" style={delay(120)} className="col-span-12 md:col-span-5 md:col-start-8 md:self-end">
            <p className="font-serif text-[clamp(6rem,18vw,13rem)] leading-[0.8] text-rust-light">
              <Figure figure={leads.stat} />
            </p>
            <p className="mt-6 max-w-[24rem] text-xl leading-snug">
              <T v={leads.statLabel} />
            </p>
            <p className="mt-4 max-w-[24rem] text-sm leading-relaxed text-mute-dark">
              <T v={leads.statNote} />
            </p>
          </div>
        </div>
      </section>
    </LeadsMotion>
  );
}
