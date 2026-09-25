import type { Localized } from "@/types/content";

/** Shorthand for a copy pair written explicitly in both languages. */
export const L = (es: string, en: string): Localized => ({ es, en });
