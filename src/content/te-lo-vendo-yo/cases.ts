import type { TlvyCase } from "@/types/te-lo-vendo-yo";

/**
 * Real, documented Te Lo Vendo Yo cases only.
 * Empty on purpose: the venture is new and no case has been documented yet.
 * Add an entry here and the Cases section switches from its empty state to
 * the case list automatically. Future routes: /te-lo-vendo-yo/casos and
 * /te-lo-vendo-yo/casos/[slug] can read from this same array.
 */
export const tlvyCases: TlvyCase[] = [];

export const getTlvyCase = (slug: string) => tlvyCases.find((c) => c.slug === slug);
