import Image from "next/image";
import type { TlvyMedia } from "@/types/te-lo-vendo-yo";
import type { Locale } from "@/types/content";

/**
 * Future-ready media slot for real automotive photography and vertical video
 * (walkarounds, Reels). Renders nothing until real media is supplied.
 * Video never autoplays: poster + controls, preload="none".
 */
export function TlMedia({
  media,
  locale = "es",
  sizes = "100vw",
  className = "",
  preload = false,
}: {
  media?: TlvyMedia | null;
  locale?: Locale;
  sizes?: string;
  className?: string;
  preload?: boolean;
}) {
  if (!media) return null;
  if (media.kind === "video") {
    return (
      <video
        className={`h-full w-full object-cover ${className}`}
        src={media.src}
        poster={media.poster}
        controls
        playsInline
        preload="none"
        aria-label={media.alt[locale]}
      />
    );
  }
  return (
    <Image
      src={media.src}
      alt={media.alt[locale]}
      width={media.width}
      height={media.height}
      sizes={sizes}
      preload={preload}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
