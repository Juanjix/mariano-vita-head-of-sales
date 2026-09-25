import type { ReactNode } from "react";
import type { Localized } from "@/types/content";
import type { TlvyCtaId } from "@/types/te-lo-vendo-yo";
import { T } from "@/lib/i18n";
import { Arrow } from "@/components/ui/Arrow";

type Variant = "primary" | "primary-light" | "link" | "link-light";

const styles: Record<Variant, string> = {
  primary:
    "group inline-flex min-h-12 items-center justify-between gap-6 bg-signal px-6 py-4 text-graphite transition-colors duration-300 hover:bg-bone",
  "primary-light":
    "group inline-flex min-h-12 items-center justify-between gap-6 bg-graphite px-6 py-4 text-bone transition-colors duration-300 hover:bg-signal hover:text-graphite",
  link: "group inline-flex min-h-11 items-center gap-2 py-2 text-steel-light transition-colors duration-300 hover:text-bone",
  "link-light":
    "group inline-flex min-h-11 items-center gap-2 py-2 text-graphite/75 transition-colors duration-300 hover:text-graphite",
};

/**
 * Commercial CTA. In-page by default (#contacto → the conversion section).
 * `data-cta` carries a stable analytics id; no provider is wired yet.
 */
export function TlCta({
  id,
  label,
  href = "#contacto",
  variant = "primary",
  className = "",
  children,
}: {
  id: TlvyCtaId;
  label: Localized;
  href?: string;
  variant?: Variant;
  className?: string;
  children?: ReactNode;
}) {
  const isLink = variant.startsWith("link");
  return (
    <a href={href} data-cta={id} className={`${styles[variant]} ${className}`}>
      <span
        className={
          isLink ? "link-draw pb-0.5 text-[0.95rem]" : "text-[0.95rem] font-semibold tracking-[0.06em] uppercase"
        }
      >
        <T v={label} />
      </span>
      {children}
      <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}
