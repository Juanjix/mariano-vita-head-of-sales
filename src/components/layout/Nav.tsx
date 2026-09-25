"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { nav } from "@/content/site-content";
import { instagram } from "@/content/contact-channels";
import { useT } from "@/lib/i18n";
import { LanguageSwitch } from "./LanguageSwitch";
import { Arrow } from "@/components/ui/Arrow";

export function Nav() {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  // Solid background after the hero; hide on scroll down, show on scroll up.
  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      const heroEnd = window.innerHeight * 0.82;
      setScrolled(y > heroEnd);
      setHidden(y > heroEnd && y > last + 4);
      if (y < last - 4 || y < heroEnd) setHidden(false);
      last = y;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section indicator.
  useEffect(() => {
    const sections = nav.items.map((i) => document.getElementById(i.id)).filter((el): el is HTMLElement => Boolean(el));
    const visible = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) visible.add(e.target.id);
          else visible.delete(e.target.id);
        });
        const current = nav.items.map((i) => i.id).filter((id) => visible.has(id));
        setActive(current.length ? current[current.length - 1] : null);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const close = useCallback((restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) menuButton.current?.focus();
  }, []);

  // Mobile menu: Escape closes, focus moves into the panel, body scroll locked.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLElement>("a,button")?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color,color,border-color] duration-500 ease-out-expo ${
        hidden && !open ? "-translate-y-full" : "translate-y-0"
      } ${solid ? "border-b rule bg-ivory/95 text-ink backdrop-saturate-150" : "border-b border-transparent text-ivory"}`}
    >
      <a
        href="#main"
        className="sr-only z-50 bg-ink px-4 py-3 label text-ivory focus:not-sr-only focus:absolute focus:top-4 focus:left-4"
      >
        {t(nav.skip)}
      </a>
      <div className="flex h-[var(--nav-h)] items-center justify-between gap-6 shell">
        <a href="#top" aria-label={t(nav.home)} className="label text-[0.75rem] tracking-[0.28em]">
          Mariano Vita
        </a>

        <nav aria-label={t(nav.primary)} className="hidden lg:block">
          <ul className="flex items-center gap-8 lg:gap-10">
            {nav.items.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "location" : undefined}
                  className={`group flex items-baseline gap-2 label transition-opacity duration-300 ${
                    active && active !== item.id ? "opacity-55 hover:opacity-100" : "opacity-100"
                  }`}
                >
                  <span className="text-[0.6rem] num opacity-50">0{i + 1}</span>
                  <span className="link-draw pb-0.5">{t(item.label)}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-5">
          <LanguageSwitch />
          <button
            ref={menuButton}
            type="button"
            className="-mr-2 cursor-pointer px-2 py-2 label lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => (open ? close(false) : setOpen(true))}
          >
            <span className="flex items-center gap-2">
              {open ? t(nav.close) : t(nav.menu)}
              <span aria-hidden="true" className="relative block h-2 w-4">
                <span
                  className={`absolute top-0 left-0 h-px w-4 bg-current transition-transform duration-500 ease-out-expo ${
                    open ? "translate-y-1 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-px w-4 bg-current transition-transform duration-500 ease-out-expo ${
                    open ? "-translate-y-[3px] -rotate-45" : ""
                  }`}
                />
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        ref={panel}
        hidden={!open}
        className="h-[calc(100svh-var(--nav-h))] overflow-y-auto border-t rule bg-ivory shell pb-10 text-ink lg:hidden"
      >
        <nav aria-label={t(nav.primary)}>
          <ul className="pt-4">
            {nav.items.map((item, i) => (
              <li key={item.id} className="border-b rule">
                <a
                  href={`#${item.id}`}
                  onClick={() => close(false)}
                  className="flex items-baseline justify-between py-4"
                >
                  <span className="display text-[2.6rem] leading-none">{t(item.label)}</span>
                  <span className="label text-mute num">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {instagram && (
          <a
            href={instagram.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 label text-mute"
          >
            {instagram.label} — {instagram.display}
            <Arrow direction="up-right" />
          </a>
        )}
      </div>
    </header>
  );
}
