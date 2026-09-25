import Link from "next/link";
import { tlvy } from "@/content/te-lo-vendo-yo/content";
import { T } from "@/lib/i18n";
import { Arrow } from "@/components/ui/Arrow";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { Line } from "@/components/ui/Line";
import { TlLabel } from "./TlLabel";

const f = tlvy.founder;

/**
 * Founder credibility without duplicating the personal site. Photo comes from
 * the shared photo registry (swap `photo` for a professional portrait later).
 * Previous-career metrics are explicitly labelled as NOT Te Lo Vendo Yo results.
 */
export function Founder() {
  return (
    <section aria-labelledby="tl-founder-title" className="shell py-[clamp(6rem,12vw,11rem)]">
      <TlLabel index={f.index} label={f.label} />
      <div className="mt-[clamp(2rem,5vw,4rem)] grid-12 gap-y-12">
        <figure className="col-span-12 md:col-span-5">
          <div data-reveal="media" className="relative aspect-[4/5] overflow-hidden bg-graphite-2">
            <EditorialImage photo="horse" sizes="(min-width: 768px) 40vw, 100vw" />
          </div>
          <figcaption className="mt-3 flex justify-between tl-label text-steel">
            <T v={f.photoCaption} />
            <span>
              <T v={f.route} />
            </span>
          </figcaption>
        </figure>

        <div className="col-span-12 md:col-span-7 md:pl-[clamp(0rem,3vw,3rem)]">
          <h2 id="tl-founder-title" className="tl-display text-[clamp(2.4rem,5.6vw,6rem)]">
            {f.titleLines.map((line, i) => (
              <Line key={i} d={i * 120}>
                <T v={line} />
              </Line>
            ))}
          </h2>
          <div className="mt-8 space-y-4">
            {f.paragraphs.map((p, i) => (
              <p
                key={i}
                data-reveal="up"
                className="max-w-[38rem] text-[1.0625rem] leading-relaxed text-bone/80 md:text-lg"
              >
                <T v={p} />
              </p>
            ))}
          </div>
          <p data-reveal="up" className="mt-8 tl-display text-[clamp(1.8rem,4vw,3.75rem)]">
            {f.stack.map((s, i) => (
              <span key={i} className="block">
                {i > 0 && (
                  <span aria-hidden="true" className="mr-3 text-signal">
                    +
                  </span>
                )}
                <T v={s} />
              </span>
            ))}
          </p>
          <p data-reveal="up" className="mt-8 max-w-[36rem] font-serif text-[clamp(1.4rem,2.2vw,1.9rem)] leading-snug">
            <T v={f.closing} />
          </p>

          {/* Previous track record — clearly separated from the venture */}
          <div data-reveal="up" className="mt-12 border border-bone/15 p-5 sm:p-7">
            <p className="tl-label text-steel-light">
              <T v={f.proofLabel} />
            </p>
            <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5 lg:grid-cols-4">
              {f.proof.map((pr, i) => (
                <div key={i}>
                  <dt className="sr-only">
                    <T v={pr.label} />
                  </dt>
                  <dd>
                    <span className="block font-serif text-[clamp(2rem,3.4vw,3rem)] leading-none num">{pr.figure}</span>
                    <span className="mt-2 block text-sm leading-snug text-bone/70">
                      <T v={pr.label} />
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 border-t tl-rule pt-4 text-sm text-steel">
              <T v={f.proofNote} />
            </p>
          </div>

          <Link
            href="/"
            data-cta="mariano_profile_link"
            className="group mt-8 inline-flex min-h-11 items-center gap-2 text-steel-light transition-colors hover:text-bone"
          >
            <span className="link-draw pb-0.5">
              <T v={tlvy.ctas.marianoProfile} />
            </span>
            <Arrow className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
