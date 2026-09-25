import type { Localized } from "./content";

/**
 * Te Lo Vendo Yo — case study model.
 * Every metric is optional: a case renders ONLY the values actually supplied.
 * Never infer, estimate or pre-fill a missing metric.
 */
export interface TlvyMedia {
  src: string;
  alt: Localized;
  width: number;
  height: number;
  kind?: "image" | "video";
  /** Poster frame for videos (vertical walkarounds, Reels…). */
  poster?: string;
}

export interface TlvyCaseMetrics {
  /** Days the unit had been listed before the work started. */
  previousDaysListed?: number;
  campaignDays?: number;
  inquiries?: number;
  qualifiedLeads?: number;
  dealershipVisits?: number;
  offers?: number;
  daysToSale?: number;
}

export interface TlvyCase {
  slug: string;
  vehicle: Localized;
  modelYear?: number;
  dealership?: string;
  location?: string;
  heroImage?: TlvyMedia;
  gallery?: TlvyMedia[];
  initialProblem?: Localized;
  strategy?: Localized;
  contentCreated?: Localized[];
  metrics?: TlvyCaseMetrics;
  finalResult?: Localized;
  sold?: boolean;
}

/** Stable identifiers for CTA analytics (data-cta). No provider is wired yet. */
export type TlvyCtaId =
  | "nav_cta"
  | "hero_inventory_cta"
  | "solution_inventory_cta"
  | "low_turnover_cta"
  | "services_inventory_cta"
  | "final_whatsapp_cta"
  | "private_seller_cta"
  | "mariano_profile_link"
  | "mobile_sticky_cta";
