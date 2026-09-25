import Link from "next/link";
import { tlvy } from "@/content/te-lo-vendo-yo/content";
import { tlvyContact } from "@/content/te-lo-vendo-yo/contact";
import { T } from "@/lib/i18n";
import { Arrow } from "@/components/ui/Arrow";
import { LanguageSwitch } from "@/components/layout/LanguageSwitch";

export function TlvyFooter() {
  const year = new Date().getFullYear();
  const ig = tlvyContact.fallback;
  return (
    <footer data-tl-footer data-hide-sticky-cta className="border-t tl-rule shell pt-8 pb-8">
      <div className="grid-12 gap-y-8">
        <div className="col-span-12 md:col-span-5">
          <p className="text-[1.1rem] font-extrabold uppercase">Te Lo Vendo Yo</p>
          <p className="mt-2 text-sm text-bone/70">
            <T v={tlvy.footer.tagline} />
          </p>
          <p className="text-sm text-bone/70">
            <T v={tlvyContact.location} />
          </p>
        </div>
        <div className="col-span-6 flex flex-col gap-3 md:col-span-3">
          <LanguageSwitch className="text-bone/80" />
          {ig && (
            <a
              href={ig.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 tl-label text-bone/80"
            >
              {ig.label}
              <Arrow direction="up-right" />
            </a>
          )}
        </div>
        <div className="col-span-6 flex flex-col items-end gap-3 text-right md:col-span-4">
          <Link
            href="/"
            data-cta="mariano_profile_link"
            className="inline-flex items-center gap-2 tl-label text-bone/80 hover:text-bone"
          >
            <T v={tlvy.footer.byline} />
            <Arrow />
          </Link>
          <a href="#top" className="inline-flex items-center gap-2 tl-label text-steel hover:text-bone">
            <T v={tlvy.footer.backToTop} />
            <Arrow direction="up" />
          </a>
          <p className="tl-label text-steel num">© {year} Te Lo Vendo Yo</p>
        </div>
      </div>
    </footer>
  );
}
