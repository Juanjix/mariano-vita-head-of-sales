import { approach } from "@/content/site-content";
import { T } from "@/lib/i18n";
import { Line } from "@/components/ui/Line";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProcessJourney } from "./ProcessJourney";

export function Approach() {
  return (
    <section id="approach" aria-labelledby="approach-title" className="shell py-[clamp(6rem,13vw,12rem)]">
      <ProcessJourney
        header={
          <>
            <SectionLabel index="03" label={approach.label} />
            <h2
              id="approach-title"
              className="mt-8 display text-[clamp(2.6rem,10.5vw,5.25rem)] lg:text-[clamp(3rem,4.6vw,5.25rem)]"
            >
              <Line>
                <T v={approach.title} />
              </Line>
            </h2>
            <p data-reveal="up" className="mt-6 max-w-[22rem] text-lg leading-relaxed text-ink/70">
              <T v={approach.intro} />
            </p>
          </>
        }
      />
    </section>
  );
}
