import type { Localized } from "@/types/content";
import { T } from "@/lib/i18n";

/** Technical section marker: [01] ── LABEL. */
export function TlLabel({
  index,
  label,
  light = false,
  className = "",
}: {
  index?: string;
  label: Localized;
  light?: boolean;
  className?: string;
}) {
  return (
    <p
      data-reveal="fade"
      className={`flex items-center gap-3 tl-label ${light ? "text-graphite/65" : "text-steel"} ${className}`}
    >
      {index && <span className="num">[{index}]</span>}
      <span aria-hidden="true" className={`h-px w-8 ${light ? "bg-graphite/30" : "bg-bone/25"}`} />
      <span>
        <T v={label} />
      </span>
    </p>
  );
}
