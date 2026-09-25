"use client";

import { tlvy } from "@/content/te-lo-vendo-yo/content";
import { tlvyContact, whatsappHref, type TlvyMessageKind } from "@/content/te-lo-vendo-yo/contact";
import { useLocale } from "@/lib/i18n";
import type { TlvyCtaId } from "@/types/te-lo-vendo-yo";
import { Arrow } from "@/components/ui/Arrow";

/**
 * The conversion CTA. Uses WhatsApp with a prefilled message as soon as a
 * verified number is configured in contact.ts; until then it links to the
 * only verified channel (Instagram) and says so — never a fake wa.me link.
 */
export function ContactCta({
  id = "final_whatsapp_cta",
  kind = "dealership",
  className = "",
}: {
  id?: TlvyCtaId;
  kind?: TlvyMessageKind;
  className?: string;
}) {
  const locale = useLocale();
  const wa = whatsappHref(kind, locale);
  const fallback = tlvyContact.fallback;
  const href = wa ?? fallback?.href;
  if (!href) return null;

  return (
    <div className={className}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        data-cta={id}
        data-channel={wa ? "whatsapp" : "instagram"}
        className="group flex min-h-16 w-full items-center justify-between gap-6 bg-signal px-6 py-5 text-graphite transition-colors duration-300 hover:bg-bone sm:px-8 sm:py-6"
      >
        <span>
          <span className="block text-[clamp(1.05rem,2.2vw,1.5rem)] font-bold tracking-[0.02em] uppercase">
            {wa ? tlvy.final.whatsapp[locale] : tlvy.final.fallbackCta[locale]}
          </span>
          {!wa && fallback && (
            <span className="mt-1 block text-sm font-medium opacity-75">
              {tlvy.final.fallbackVia[locale]} · {fallback.display}
            </span>
          )}
        </span>
        <Arrow
          direction="up-right"
          className="text-[1.75rem] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
        <span className="sr-only">{tlvy.final.external[locale]}</span>
      </a>
      {!wa && (
        <p className="mt-4 max-w-[34rem] text-sm leading-relaxed text-steel">{tlvy.final.fallbackNote[locale]}</p>
      )}
    </div>
  );
}
