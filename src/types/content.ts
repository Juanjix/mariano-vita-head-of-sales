export const LOCALES = ["es", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "es";

/** A value that exists explicitly in every supported language. */
export type Localized<T = string> = Record<Locale, T>;

/** A figure that can be animated: prefix + numeric value + suffix. */
export interface Figure {
  prefix?: string;
  value: number;
  suffix?: string;
}

export interface Stat {
  figure: Figure;
  label: Localized;
}

export interface ProcessStep {
  verb: Localized;
  line: Localized;
}

export interface ArchiveEntry {
  name: Localized;
  detail?: Localized;
  category: Localized;
}

export type ContactChannelKind = "email" | "linkedin" | "instagram" | "whatsapp";

export interface ContactChannel {
  kind: ContactChannelKind;
  label: string;
  /** Visible value, e.g. a handle or address. */
  display: string;
  href: string;
}

/** A verified chapter of the professional chronology. */
export interface TimelineChapter {
  from: number;
  to: number;
  title: Localized;
  sector: Localized;
  /** Only verified context. Omit rather than invent. */
  tags?: Localized[];
  note?: Localized;
}
