import Link from "next/link";
import { venture as v } from "@/content/site-content";
import { Arrow } from "@/components/ui/Arrow";
import { T } from "@/lib/i18n";
import { delay } from "@/lib/style";
import { Line } from "@/components/ui/Line";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { VentureMotion } from "./VentureMotion";

/**
 * Current venture: Te Lo Vendo Yo — the answer to the timeline’s "What’s next?".
 * One chapter of the story, linking out to its own landing. No traction claimed.
 */
export function Venture() {
  return (
    <VentureMotion>
      <section
        aria-labelledby="venture-title"
        className="on-dark relative overflow-hidden shell py-[clamp(6rem,14vw,13rem)]"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <SectionLabel index="10" label={v.label} dark />
          <p data-reveal="fade" className="flex items-center gap-3 label text-ivory/80">
            <span aria-hidden="true" className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rust-light opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-rust-light" />
            </span>
            <T v={v.status} />
          </p>
        </div>

        <p
          data-reveal="up"
          className="mt-[clamp(3rem,7vw,6rem)] font-serif text-[clamp(2.25rem,6vw,5.5rem)] leading-none text-rust-light italic"
        >
          <T v={v.kicker} />
        </p>
        <p
          data-reveal="up"
          className="mt-[clamp(1.5rem,3vw,2.5rem)] font-sans text-[clamp(2.4rem,7vw,6.5rem)] leading-[0.88] font-extrabold tracking-[-0.04em] uppercase"
        >
          {v.brand}
        </p>
        <p data-reveal="fade" className="mt-[clamp(1.5rem,3vw,2.5rem)] label text-mute-dark">
          {v.dateline}
        </p>
        <h2
          id="venture-title"
          data-venture-title
          className="mt-4 display text-[11vw] leading-[0.94] md:text-[clamp(2.2rem,6.4vw,7rem)] md:leading-[1.02]"
        >
          {v.titleLines.map((line, i) => (
            <Line
              key={i}
              controlled
              className={`${i === 1 ? "md:pl-[10%]" : ""} ${i === v.titleLines.length - 1 ? "text-rust-light" : ""}`}
            >
              <T v={line} />
            </Line>
          ))}
        </h2>

        <div className="mt-[clamp(3rem,7vw,6rem)] grid-12 gap-y-8">
          <p data-reveal="fade" className="col-span-12 label text-mute-dark md:col-span-4">
            <T v={v.sector} />
          </p>
          <div className="col-span-12 space-y-5 border-t rule-dark pt-6 md:col-span-7 md:col-start-6 lg:col-span-5 lg:col-start-8">
            {v.body.map((p, i) => (
              <p
                key={i}
                data-reveal="up"
                style={delay(i * 120)}
                className="text-lg leading-relaxed text-ivory/80 md:text-xl"
              >
                <T v={p} />
              </p>
            ))}
            <Link
              href={v.href}
              data-reveal="up"
              className="group !mt-8 inline-flex min-h-12 items-center gap-4 border-b border-ivory/40 pb-2 transition-colors duration-300 hover:border-rust-light"
            >
              <span className="font-serif text-2xl leading-none md:text-3xl">
                <T v={v.cta} />
              </span>
              <Arrow className="text-rust-light transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>
      </section>
    </VentureMotion>
  );
}
