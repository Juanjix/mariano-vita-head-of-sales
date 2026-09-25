import { tlvy } from "@/content/te-lo-vendo-yo/content";
import { T } from "@/lib/i18n";
import { TlLabel } from "./TlLabel";

const f = tlvy.faq;

/** Native <details> accordion: keyboard and screen-reader friendly, zero JS. */
export function Faq() {
  return (
    <section id="faq" aria-labelledby="tl-faq-title" className="tl-light shell py-[clamp(6rem,12vw,11rem)]">
      <div className="grid-12 gap-y-10">
        <div className="col-span-12 lg:col-span-4">
          <TlLabel index={f.index} label={f.label} light />
          <h2 id="tl-faq-title" className="mt-8 tl-display text-[clamp(2.2rem,4.8vw,4.5rem)]">
            <T v={f.title} />
          </h2>
        </div>
        <div className="col-span-12 border-b tl-rule-light lg:col-span-8">
          {f.items.map((item) => (
            <details key={item.id} id={item.id} className="group scroll-mt-24 border-t tl-rule-light">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                <span className="text-[clamp(1.15rem,1.8vw,1.5rem)] font-bold tracking-[-0.01em]">
                  <T v={item.q} />
                </span>
                <span
                  aria-hidden="true"
                  className="relative h-4 w-4 shrink-0 before:absolute before:top-1/2 before:left-0 before:h-[2px] before:w-4 before:-translate-y-1/2 before:bg-signal-ink after:absolute after:top-0 after:left-1/2 after:h-4 after:w-[2px] after:-translate-x-1/2 after:bg-signal-ink after:transition-transform after:duration-300 group-open:after:scale-y-0"
                />
              </summary>
              <p className="max-w-[44rem] pb-6 text-[1.0625rem] leading-relaxed text-graphite/80 md:text-lg">
                <T v={item.a} />
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
