"use client";

import Image from "next/image";
import { useRef } from "react";
import { m, LazyMotion, domAnimation, useReducedMotion, useScroll, useTransform } from "motion/react";
import { photos, type PhotoKey } from "@/content/photos";
import { useT } from "@/lib/i18n";

/**
 * Full-bleed editorial photograph with responsive focal point and a subtle
 * scroll parallax. Reusable for future photographs via the photos registry.
 */
export function EditorialImage({
  photo,
  preload = false,
  sizes = "100vw",
  parallax = 0.12,
  className = "",
}: {
  photo: PhotoKey;
  preload?: boolean;
  sizes?: string;
  parallax?: number;
  className?: string;
}) {
  const t = useT();
  const p = photos[photo];
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${parallax * 100}%`]);

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`}>
      <LazyMotion features={domAnimation} strict>
        <m.div className="absolute inset-0 will-change-transform" style={reduce ? undefined : { y }}>
          <div className="hero-unveil absolute inset-0">
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
        </m.div>
      </LazyMotion>
    </div>
  );
}
