import type { Localized } from "@/types/content";
import { hero } from "./site-content";

/**
 * Photography registry. Add new photographs to /public/images and register
 * them here; sections reference photos by key so crops stay consistent.
 *
 * `position` controls object-position per breakpoint, so the subject stays in
 * frame when the image is cropped (mobile portrait vs. desktop landscape).
 */
export interface Photo {
  src: string;
  alt: Localized;
  width: number;
  height: number;
  position: { mobile: string; desktop: string };
}

export const photos = {
  horse: {
    src: "/images/mariano-horse.jpg",
    alt: hero.photoAlt,
    // Intrinsic size is only used for aspect ratio hints; `fill` is used for layout.
    width: 1254,
    height: 1254,
    // Square source. Mobile keeps rider + horse head; desktop keeps the face above the headline.
    position: { mobile: "34% 50%", desktop: "50% 18%" },
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;
