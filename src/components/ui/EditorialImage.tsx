"use client";

import Image from "next/image";
import { photos, type PhotoKey } from "@/content/photos";
import { useT } from "@/lib/i18n";

/**
 * Full-bleed editorial photograph with a responsive focal point.
 * Motion is applied by the owning section through three nested layers, so
 * no two animations ever write the same property on the same element:
 *   [data-media]        clip-path reveal + scroll translate
 *   [data-media-zoom]   entrance settle (scale 1.06–1.08 → 1)
 *   [data-media-drift]  scroll-linked scale
 * Client component only because the alt text is localised.
 */
export function EditorialImage({
  photo,
  preload = false,
  sizes = "100vw",
  className = "",
}: {
  photo: PhotoKey;
  preload?: boolean;
  sizes?: string;
  className?: string;
}) {
  const t = useT();
  const p = photos[photo];
  return (
    <div data-media className={`absolute inset-0 overflow-hidden ${className}`}>
      <div data-media-zoom className="absolute inset-0">
        <div data-media-drift className="absolute inset-0">
          <Image
            src={p.src}
            alt={t(p.alt)}
            fill
            preload={preload}
            sizes={sizes}
            quality={80}
            className="object-cover object-[var(--pos-m)] [filter:saturate(0.72)_contrast(1.06)_brightness(0.92)] md:object-[var(--pos-d)]"
            style={{ ["--pos-m" as string]: p.position.mobile, ["--pos-d" as string]: p.position.desktop }}
          />
        </div>
      </div>
    </div>
  );
}
