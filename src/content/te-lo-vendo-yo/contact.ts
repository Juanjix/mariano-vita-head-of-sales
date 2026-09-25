import { instagram } from "@/content/contact-channels";
import { L } from "@/lib/localized";
import type { Locale } from "@/types/content";

/**
 * Te Lo Vendo Yo — single source of truth for the conversion channel.
 *
 * WhatsApp is the intended primary channel, but NO verified number exists yet.
 * Set `whatsappNumber` once (international format, digits only, e.g. "573001234567")
 * and every WhatsApp CTA on the route activates with the prefilled messages below.
 * Until then CTAs fall back to the only verified channel (Instagram) — never a fake link.
 */
export const tlvyContact = {
  whatsappNumber: null as string | null,
  messages: {
    dealership: L(
      "Hola Mariano, vi Te Lo Vendo Yo. Tengo un concesionario y quiero analizar parte de mi inventario.",
      "Hi Mariano, I saw Te Lo Vendo Yo. I run a dealership and I'd like to review part of my inventory with you.",
    ),
    privateSeller: L(
      "Hola Mariano, vi Te Lo Vendo Yo y quiero consultar por la venta de mi auto.",
      "Hi Mariano, I saw Te Lo Vendo Yo and I'd like to ask about selling my car.",
    ),
  },
  location: L("Medellín, Colombia", "Medellín, Colombia"),
  fallback: instagram ?? null,
};

export type TlvyMessageKind = keyof typeof tlvyContact.messages;

/** wa.me URL with a prefilled message, or null while no verified number exists. */
export function whatsappHref(kind: TlvyMessageKind, locale: Locale): string | null {
  const n = tlvyContact.whatsappNumber;
  if (!n) return null;
  return `https://wa.me/${n}?text=${encodeURIComponent(tlvyContact.messages[kind][locale])}`;
}
