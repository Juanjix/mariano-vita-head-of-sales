import { tlvy } from "@/content/te-lo-vendo-yo/content";
import { tlvyContact } from "@/content/te-lo-vendo-yo/contact";
import { T } from "@/lib/i18n";
import { ContactCta } from "./ContactCta";
import { TlCta } from "./TlCta";
import { FinalMotion } from "./motion/FinalMotion";

const f = tlvy.final;

/** The conversion. The CTA is visible and clickable immediately — no gated animation. */
export function FinalCta() {
  return (
    <FinalMotion>
      <section
        data-hide-sticky-cta
        id="contacto"
        aria-labelledby="tl-final-title"
        className="shell pt-[clamp(6rem,13vw,12rem)] pb-[clamp(4rem,8vw,7rem)]"
      >
        <h2 id="tl-final-title" data-final-title className="tl-display text-[clamp(2.3rem,7vw,7.5rem)] !leading-[0.96]">
          <span className="block">
            <T v={f.titleLines[0]} />
          </span>{" "}
          <span className="block text-signal">
            <T v={f.titleLines[1]} />
          </span>
        </h2>
        <div className="mt-[clamp(2.5rem,5vw,4rem)] grid-12 items-start gap-y-8">
          <p
            data-final-body
            className="col-span-12 font-serif text-[clamp(1.6rem,3vw,2.6rem)] leading-[1.1] md:col-span-6"
          >
            <T v={f.body} />
          </p>
          <div className="col-span-12 md:col-span-6">
            <ContactCta id="final_whatsapp_cta" kind="dealership" />
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t tl-rule pt-4">
              <p className="tl-label text-steel">
                <T v={tlvyContact.location} />
              </p>
              <TlCta id="private_seller_cta" label={tlvy.ctas.privateSeller} href="#faq-particulares" variant="link" />
            </div>
          </div>
        </div>
      </section>
    </FinalMotion>
  );
}
