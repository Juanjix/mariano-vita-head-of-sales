import type { Localized } from "@/types/content";
import { T } from "@/lib/i18n";

/** Editorial section marker: index number, hairline, label. */
export function SectionLabel({
  index,
  label,
  dark = false,
  className = "",
}: {
  index: string;
  label: Localized;
  dark?: boolean;
  className?: string;
}) {
  return (
    <p
      data-reveal="fade"
      className={`flex items-center gap-4 label ${dark ? "text-mute-dark" : "text-mute"} ${className}`}
    >
      <span className="num">{index}</span>
      <span aria-hidden="true" className={`h-px w-10 ${dark ? "bg-ivory/25" : "bg-ink/25"}`} />
      <span>
        <T v={label} />
      </span>
    </p>
  );
}
