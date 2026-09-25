import { tlvy } from "@/content/te-lo-vendo-yo/content";
import { T } from "@/lib/i18n";
import { Arrow } from "@/components/ui/Arrow";
import { TlCta } from "./TlCta";
import { HeroMotion } from "./motion/HeroMotion";

const h = tlvy.hero;

/**
 * Typography-led hero (no automotive photography exists yet — none is faked;
 * a TlMedia slot can be added behind the type once real footage exists).
 * One screen answers: what (inventory → sales), who (dealerships),
 * how (content → demand → follow-up → sale) and what next (CTA).
 */
export function Hero() {
  return (
    <HeroMotion>
      <section
        id="top"
        data-hero
        aria-labelledby="tl-hero-title"
        className="relative isolate flex min-h-[max(100svh,40rem)] flex-col overflow-hidden"
      >
        <div className="mt-[calc(var(--nav-h)+1.25rem)] flex items-center justify-between gap-4 shell">
          <p data-hero-fade data-hero-meta className="flex items-center gap-3 tl-label text-signal">
            <span aria-hidden="true" className="h-2 w-2 bg-signal" />
            <T v={h.label} />
          </p>
          <p data-hero-fade data-hero-meta className="hidden tl-label text-steel sm:block">
            <T v={h.location} />
          </p>
        </div>

        <div className="mt-auto shell pb-[clamp(1.25rem,3vw,2.5rem)]">
          <h1 id="tl-hero-title">
            <span className="sr-only">Te Lo Vendo Yo — </span>
            <span aria-hidden="true" className="block tl-display text-[15vw] md:text-[clamp(4rem,12.4vw,13.5rem)]">
              {h.wordmark.map((w, i) => (
                <span
                  key={w}
                  data-hero-line
                  className={`block overflow-clip pb-[0.02em] ${i === 1 ? "md:pl-[14%]" : ""}`}
                >
                  <span className="block">{w}</span>
                </span>
              ))}
            </span>

            <span className="mt-[clamp(1.25rem,2.6vw,2.25rem)] grid-12 items-end gap-y-6">
              <span
                data-hero-fade
                data-hero-prop
                className="col-span-12 block font-serif text-[clamp(2.1rem,4.6vw,4.75rem)] leading-[0.98] tracking-[-0.01em] lg:col-span-7"
              >
                <span className="block">
                  <T v={h.propositionLines[0]} />
                </span>{" "}
                <span className="block text-signal italic">
                  <T v={h.propositionLines[1]} />
                </span>
              </span>
            </span>
          </h1>

          <div className="mt-6 grid-12 gap-y-6 lg:-mt-[clamp(7rem,10.5vw,10rem)]">
            <div className="col-span-12 lg:col-span-5 lg:col-start-8">
              <p data-hero-fade data-hero-intro className="text-[1.0625rem] leading-relaxed text-bone/80">
                <T v={h.support} />
              </p>
              <div data-hero-fade data-hero-cta className="mt-6 flex flex-col items-stretch gap-2 sm:items-start">
                <TlCta id="hero_inventory_cta" label={tlvy.ctas.inventory} />
                <TlCta
                  id="private_seller_cta"
                  label={tlvy.ctas.privateSeller}
                  href="#faq-particulares"
                  variant="link"
                />
              </div>
            </div>
          </div>

          {/* Mechanism strip */}
          <div
            data-hero-fade
            data-hero-mech
            className="mt-[clamp(1.5rem,3vw,2.5rem)] flex flex-col gap-2 border-t tl-rule pt-3 sm:flex-row sm:items-center sm:gap-6"
          >
            <p className="shrink-0 tl-label text-steel">
              <T v={h.mechanismLabel} />
            </p>
            <ol className="flex flex-wrap items-center gap-x-3 gap-y-1">
              {h.mechanism.map((m, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span
                    className={`text-[0.9rem] font-bold tracking-[0.06em] uppercase ${
                      i === h.mechanism.length - 1 ? "text-signal" : "text-bone"
                    }`}
                  >
                    <T v={m} />
                  </span>
                  {i < h.mechanism.length - 1 && <Arrow className="text-steel" />}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </HeroMotion>
  );
}
