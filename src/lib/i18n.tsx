"use client";

import { useSyncExternalStore } from "react";
import { DEFAULT_LOCALE, LOCALES, type Locale, type Localized } from "@/types/content";
import { seo } from "@/content/site-content";

/**
 * Minimal client-side locale store. Switching language re-renders only the
 * <T> leaves and a few interactive components — no navigation, no reload.
 */
const STORAGE_KEY = "mv-locale";
let current: Locale = DEFAULT_LOCALE;
let initialised = false;
const listeners = new Set<() => void>();

function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

function applyToDocument(locale: Locale) {
  document.documentElement.lang = locale;
  document.title = seo.title[locale];
  document.querySelector('meta[name="description"]')?.setAttribute("content", seo.description[locale]);
}

function init() {
  if (initialised || typeof window === "undefined") return;
  initialised = true;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) current = stored;
  } catch {
    /* storage unavailable — keep default */
  }
  if (current !== DEFAULT_LOCALE) applyToDocument(current);
}

export function setLocale(locale: Locale) {
  if (locale === current) return;
  current = locale;
  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    /* ignore */
  }
  applyToDocument(locale);
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  init();
  listeners.add(listener);
  // Notify once in case init() changed the locale after the server snapshot.
  if (current !== DEFAULT_LOCALE) queueMicrotask(listener);
  return () => listeners.delete(listener);
}

export function useLocale(): Locale {
  return useSyncExternalStore(
    subscribe,
    () => current,
    () => DEFAULT_LOCALE,
  );
}

/** Pick the current-language value from a Localized pair. */
export function useT() {
  const locale = useLocale();
  return <V,>(value: Localized<V>): V => value[locale];
}

/** Text leaf: lets Server Components render localized copy. */
export function T({ v }: { v: Localized }) {
  const locale = useLocale();
  return <>{v[locale]}</>;
}
