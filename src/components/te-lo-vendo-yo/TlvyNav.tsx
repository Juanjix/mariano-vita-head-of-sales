"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { tlvy } from "@/content/te-lo-vendo-yo/content";
import { useT } from "@/lib/i18n";
import { LanguageSwitch } from "@/components/layout/LanguageSwitch";
import { Arrow } from "@/components/ui/Arrow";

/**
 * Focused commercial navigation for /te-lo-vendo-yo.
 * Always visible (the CTA must stay reachable), transparent over the hero,
 * solid graphite after it. Subtle route back to Mariano's personal brand.
 */
export function TlvyNav() {
  const t = useT();
  const items = tlvy.nav.items;
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => setSolid(window.scrollY > window.innerHeight * 0.6);
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const visible = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id)));
        const current = items.map((i) => i.id).filter((id) => visible.has(id));
        setActive(current.length ? current[current.length - 1] : null);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [items]);

  const close = useCallback((restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) menuButton.current?.focus();
  }, []);

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

  return (
    <header
      data-nav
      className={`fixed inset-x-0 top-0 z-50 border-b text-bone transition-[background-color,border-color] duration-500 ${
        solid || open ? "tl-rule bg-graphite/95" : "border-transparent bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only z-50 bg-signal px-4 py-3 tl-label text-graphite focus:not-sr-only focus:absolute focus:top-4 focus:left-4"
      >
        {t(tlvy.nav.skip)}
      </a>
      <div className="flex h-[var(--nav-h)] items-center justify-between gap-6 shell">
        <div className="flex items-baseline gap-3">
          <a
            href="#top"
            aria-label={t(tlvy.nav.home)}
            className="text-[0.95rem] font-extrabold tracking-[-0.01em] uppercase"
          >
            Te Lo Vendo Yo
          </a>
          <Link
            href="/"
            data-cta="mariano_profile_link"
            className="hidden tl-label text-steel transition-colors hover:text-bone xl:inline"
          >
            {t(tlvy.nav.byMariano)}
          </Link>
        </div>

        <nav aria-label={t(tlvy.nav.primary)} className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "location" : undefined}
                  className={`tl-label transition-colors duration-300 ${
                    active === item.id ? "text-bone" : "text-steel hover:text-bone"
                  }`}
                >
                  {t(item.label)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4 sm:gap-5">
          <LanguageSwitch />
          <a
            href="#contacto"
            data-cta="nav_cta"
            className="hidden min-h-10 items-center gap-2 bg-signal px-4 tl-label text-graphite transition-colors hover:bg-bone sm:inline-flex"
          >
            {t(tlvy.nav.cta)}
            <Arrow />
          </a>
          <button
            ref={menuButton}
            type="button"
            className="-mr-2 min-h-11 cursor-pointer px-2 tl-label lg:hidden"
            aria-expanded={open}
            aria-controls="tl-mobile-menu"
            onClick={() => (open ? close(false) : setOpen(true))}
          >
            {open ? t(tlvy.nav.close) : t(tlvy.nav.menu)}
          </button>
        </div>
      </div>

      <div
        id="tl-mobile-menu"
        ref={panel}
        hidden={!open}
        className="h-[calc(100svh-var(--nav-h))] overflow-y-auto border-t tl-rule bg-graphite shell pb-10 lg:hidden"
      >
        <nav aria-label={t(tlvy.nav.primary)}>
          <ul className="pt-2">
            {items.map((item, i) => (
              <li key={item.id} className="border-b tl-rule">
                <a
                  href={`#${item.id}`}
                  onClick={() => close(false)}
                  className="flex items-baseline justify-between py-4"
                >
                  <span className="tl-display text-[2rem] leading-none">{t(item.label)}</span>
                  <span className="tl-label text-steel num">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#contacto"
          data-cta="nav_cta"
          onClick={() => close(false)}
          className="mt-8 flex min-h-14 items-center justify-between bg-signal px-5 text-graphite"
        >
          <span className="text-[0.95rem] font-semibold tracking-[0.06em] uppercase">{t(tlvy.ctas.inventory)}</span>
          <Arrow />
        </a>
        <Link
          href="/"
          data-cta="mariano_profile_link"
          className="mt-6 inline-flex min-h-11 items-center gap-2 tl-label text-steel"
        >
          {t(tlvy.ctas.marianoProfile)}
          <Arrow />
        </Link>
      </div>
    </header>
  );
}
