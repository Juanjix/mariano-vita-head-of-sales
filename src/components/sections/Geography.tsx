import { geography as g } from "@/content/site-content";
import { T } from "@/lib/i18n";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GeographyMotion } from "./GeographyMotion";

/**
 * Argentina → Medellín. Deliberately minimal: the full story of the move is
 * not yet documented. Extend with chapters/photos when available.
 */
export function Geography() {
  return (
    <GeographyMotion>
      <section aria-labelledby="geo-title" className="overflow-x-clip bg-paper">
        <div className="shell pt-[clamp(3rem,6vw,5rem)] pb-[clamp(6rem,13vw,12rem)]">
          <SectionLabel index="09" label={g.label} />
          <h2 id="geo-title" className="sr-only">
            {g.from} → {g.to}, {g.toCountry}
          </h2>

          <div data-geo aria-hidden="true" className="mt-[clamp(2.5rem,6vw,5rem)]">
            <p data-geo-from className="mask-line display text-[20vw] leading-[0.82] md:text-[clamp(3rem,15vw,16rem)]">
              <span>{g.from}</span>
            </p>
            <div className="my-[clamp(1.25rem,3vw,2.5rem)] flex items-center gap-3 text-rust">
              <span className="shrink-0 label">AR</span>
              <span data-geo-rule className="h-px flex-1 origin-left bg-rust" />
              <svg data-geo-head viewBox="0 0 12 12" className="h-3 w-3 shrink-0" fill="none">
                <path d="M1 1l10 5-10 5" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              <span className="shrink-0 label">CO</span>
            </div>
            <p
              data-geo-to
              className="mask-line text-right display text-[20vw] leading-[0.82] md:text-[clamp(3rem,15vw,16rem)]"
            >
              <span>{g.to}</span>
            </p>
          </div>

          <div className="mt-[clamp(2rem,5vw,4rem)] grid-12 gap-y-6">
            <p className="col-span-12 label text-mute num md:col-span-4">
              {g.toCountry} · {g.coordinates}
            </p>
            <p
              data-reveal="up"
              className="col-span-12 font-serif text-[length:var(--fs-sm)] leading-[1.2] md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-7"
            >
              <T v={g.body} />
            </p>
          </div>
        </div>
      </section>
    </GeographyMotion>
  );
}
