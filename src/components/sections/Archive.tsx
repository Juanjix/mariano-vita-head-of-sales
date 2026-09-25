import { archive as a } from "@/content/site-content";
import { T } from "@/lib/i18n";
import { delay } from "@/lib/style";
import { Line } from "@/components/ui/Line";
import { SectionLabel } from "@/components/ui/SectionLabel";

const pad = (n: number) => String(n).padStart(2, "0");

/** Business archive: a catalogue index of markets, not a résumé. */
export function Archive() {
  return (
    <section aria-labelledby="archive-title" className="shell py-[clamp(6rem,13vw,12rem)]">
      <SectionLabel index="07" label={a.label} />
      <h2
        id="archive-title"
        className="mt-[clamp(2.5rem,6vw,5rem)] display text-[11.4vw] md:text-[clamp(2.3rem,8.6vw,9.25rem)]"
      >
        <Line>
          <T v={a.titleLines[0]} />
        </Line>
        <Line d={120} className="text-rust italic md:pl-[10%]">
          <T v={a.titleLines[1]} />
        </Line>
      </h2>
      <div className="mt-[clamp(2rem,5vw,4rem)] grid-12">
        <p
          data-reveal="up"
          className="col-span-12 text-lg leading-relaxed text-ink/75 md:col-span-6 md:col-start-7 md:text-xl lg:col-span-5 lg:col-start-8"
        >
          <T v={a.intro} />
        </p>
      </div>

      <div className="mt-[clamp(3.5rem,8vw,7rem)] grid-12 gap-y-16">
        {/* Index */}
        <ol className="col-span-12 border-t border-ink lg:col-span-8">
          {a.entries.map((e, i) => (
            <li
              key={i}
              data-reveal="up"
              style={delay((i % 5) * 50)}
              className="group grid grid-cols-[2.25rem_1fr] items-baseline gap-x-3 border-b rule py-5 sm:grid-cols-[3rem_1fr_auto] sm:gap-x-6 md:py-6"
            >
              <span className="label text-mute num transition-colors duration-300 group-hover:text-rust">
                {pad(i + 1)}
              </span>
              <span className="min-w-0">
                <span className="block font-serif text-[1.75rem] leading-[1.05] transition-transform duration-500 ease-out-expo group-hover:translate-x-1.5 md:text-[2.4rem]">
                  <T v={e.name} />
                </span>
                {e.detail && (
                  <span className="mt-1 block text-[0.95rem] text-mute">
                    <T v={e.detail} />
                  </span>
                )}
              </span>
              <span className="col-start-2 mt-2 label text-ink/60 sm:col-start-3 sm:mt-0 sm:text-right">
                <T v={e.category} />
              </span>
            </li>
          ))}
        </ol>

        {/* The constant */}
        <aside className="col-span-12 lg:col-span-4 lg:pl-8">
          <div className="lg:sticky lg:top-[calc(var(--nav-h)+2.5rem)]">
            <div data-reveal="up" className="border-t border-rust pt-5">
              <p className="font-serif text-[clamp(2.75rem,5vw,4rem)] leading-none">
                <T v={a.capital.figure} />
                <span className="ml-2 text-[0.5em] text-mute">
                  <T v={a.capital.unit} />
                </span>
              </p>
              <p className="mt-3 max-w-[20rem] text-[0.95rem] leading-snug text-ink/70">
                <T v={a.capital.label} />
              </p>
            </div>

            <div className="mt-14 bg-char p-7 text-ivory md:p-9">
              <p className="label text-rust-light">
                <T v={a.constantLabel} />
              </p>
              <ol className="mt-6 space-y-1.5">
                {a.constant.map((c, i) => (
                  <li key={i} data-reveal="up" style={delay(i * 45)} className="flex items-baseline gap-4">
                    <span className="w-5 shrink-0 label text-mute-dark num">{pad(i + 1)}</span>
                    <span className="font-serif text-[1.45rem] leading-snug">
                      <T v={c} />
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
