"use client";

import { setLocale, useLocale } from "@/lib/i18n";
import { nav } from "@/content/site-content";
import { LOCALES, type Locale } from "@/types/content";

const names: Record<Locale, string> = { es: "Español", en: "English" };

export function LanguageSwitch({ className = "" }: { className?: string }) {
  const locale = useLocale();
  return (
    <div role="group" aria-label={nav.languageLabel[locale]} className={`flex items-center label ${className}`}>
      {LOCALES.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && (
            <span aria-hidden="true" className="px-1.5 opacity-40">
              /
            </span>
          )}
          <button
            type="button"
            lang={l}
            aria-label={names[l]}
            aria-pressed={locale === l}
            onClick={() => setLocale(l)}
            className={`relative cursor-pointer py-2 transition-opacity duration-300 ${
              locale === l ? "opacity-100" : "opacity-45 hover:opacity-80"
            }`}
          >
            {l.toUpperCase()}
            <span
              aria-hidden="true"
              className={`absolute inset-x-0 bottom-1 h-px origin-left bg-current transition-transform duration-500 ease-out-expo ${
                locale === l ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </button>
        </span>
      ))}
    </div>
  );
}
