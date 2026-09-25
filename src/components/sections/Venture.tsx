import { venture as v } from "@/content/site-content";
import { T } from "@/lib/i18n";
import { delay } from "@/lib/style";
import { Line } from "@/components/ui/Line";
import { SectionLabel } from "@/components/ui/SectionLabel";

/** Current venture — presented conceptually. No name, clients or traction invented. */
export function Venture() {
  return (
    <section
      aria-labelledby="venture-title"
      className="on-dark relative overflow-hidden shell py-[clamp(6rem,14vw,13rem)]"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <SectionLabel index="08" label={v.label} dark />
        <p data-reveal="fade" className="flex items-center gap-3 label text-ivory/80">
          <span aria-hidden="true" className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rust-light opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-rust-light" />
          </span>
          <T v={v.status} />
        </p>
      </div>

      <p data-reveal="fade" className="mt-[clamp(3rem,7vw,6rem)] label text-rust-light">
        {v.dateline}
      </p>
      <h2 id="venture-title" className="mt-6 display text-[12vw] leading-[0.94] md:text-[clamp(2.2rem,7.6vw,8.25rem)]">
        {v.titleLines.map((line, i) => (
          <Line key={i} d={i * 110} className={i === 1 ? "md:pl-[14%]" : ""}>
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
        </div>
      </div>
    </section>
  );
}
