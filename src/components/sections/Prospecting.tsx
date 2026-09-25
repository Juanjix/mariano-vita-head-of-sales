import { prospecting as p } from "@/content/site-content";
import { T } from "@/lib/i18n";
import { delay } from "@/lib/style";
import { SectionLabel } from "@/components/ui/SectionLabel";

// Illustrative placement of up to 8 converted contacts among 25 — a field log, not data.
const CONVERTED = new Set([1, 4, 7, 10, 14, 17, 20, 23]);

/** A day in the field, drawn as a tally: 25 contacts, up to 8 new accounts. */
export function Prospecting() {
  return (
    <section aria-labelledby="prospecting-title" className="shell py-[clamp(6rem,13vw,12rem)]">
      <div className="grid-12 items-end gap-y-6">
        <SectionLabel index="05" label={p.label} className="col-span-12 md:col-span-4" />
        <h2
          id="prospecting-title"
          data-reveal="up"
          className="col-span-12 font-serif text-[length:var(--fs-md)] leading-none md:col-span-8 md:text-right"
        >
          <T v={p.title} />
        </h2>
      </div>

      {/* Tally */}
      <figure className="mt-[clamp(3rem,7vw,6rem)]">
        <div
          aria-hidden="true"
          className="flex h-[clamp(6rem,16vw,13rem)] items-end justify-between border-b border-ink"
        >
          {Array.from({ length: 25 }, (_, i) => {
            const on = CONVERTED.has(i);
            return (
              <span
                key={i}
                data-reveal="bar"
                style={delay(i * 35)}
                className={`block ${on ? "h-full w-[3px] bg-rust md:w-1" : "h-[58%] w-px bg-ink/45"}`}
              />
            );
          })}
        </div>
        <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-mute">
          <span className="label">
            <T v={p.legend} />
          </span>
          <span className="flex items-center gap-2 label">
            <span aria-hidden="true" className="inline-block h-3 w-[3px] bg-rust" />
            <T v={p.accounts.label} />
          </span>
        </figcaption>
      </figure>

      {/* Figures */}
      <dl className="mt-[clamp(3rem,7vw,6rem)] grid-12 gap-y-10">
        <div data-reveal="up" className="col-span-12 border-t rule pt-6 md:col-span-5">
          <dt className="sr-only">
            <T v={p.contacts.label} />
          </dt>
          <dd>
            <span className="block font-serif text-[clamp(6rem,19vw,14rem)] leading-[0.8] num">
              {p.contacts.figure}
            </span>
            <span className="mt-5 block max-w-[20rem] text-lg leading-snug text-ink/75">
              <T v={p.contacts.label} />
            </span>
          </dd>
        </div>
        <div
          data-reveal="up"
          style={delay(140)}
          className="col-span-12 border-t border-rust pt-6 md:col-span-6 md:col-start-7"
        >
          <dt className="sr-only">
            <T v={p.accounts.label} />
          </dt>
          <dd>
            <span className="flex items-end gap-4 text-rust">
              <span className="mb-[0.3em] display text-[clamp(2rem,5vw,4rem)]">
                <T v={p.accounts.prefix} />
              </span>
              <span className="font-serif text-[clamp(6rem,19vw,14rem)] leading-[0.8] num">{p.accounts.figure}</span>
            </span>
            <span className="mt-5 block max-w-[22rem] text-lg leading-snug text-ink/75">
              <T v={p.accounts.label} />
            </span>
          </dd>
        </div>
      </dl>
      <p
        data-reveal="fade"
        className="mt-10 max-w-[40rem] border-l-2 border-rust pl-4 text-sm leading-relaxed text-mute"
      >
        <T v={p.note} />
      </p>
    </section>
  );
}
