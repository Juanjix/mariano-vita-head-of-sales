import type { ContactChannel } from "@/types/content";

/**
 * Contact channels. Only channels listed here are rendered.
 *
 * To add one later, append an entry, e.g.:
 *   { kind: "email", label: "Email", display: "hola@example.com", href: "mailto:hola@example.com" }
 *   { kind: "linkedin", label: "LinkedIn", display: "in/…", href: "https://www.linkedin.com/in/…" }
 *   { kind: "whatsapp", label: "WhatsApp", display: "+57 …", href: "https://wa.me/57…" }
 *
 * Do not add placeholder values — an unknown channel should simply be absent.
 */
export const contactChannels: ContactChannel[] = [
  {
    kind: "instagram",
    label: "Instagram",
    display: "@pocovolvedor",
    href: "https://instagram.com/pocovolvedor",
  },
];

export const instagram = contactChannels.find((c) => c.kind === "instagram");
