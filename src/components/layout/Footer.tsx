import { footer, site } from "@/content/site-content";
import { instagram } from "@/content/contact-channels";
import { T } from "@/lib/i18n";
import { Arrow } from "@/components/ui/Arrow";
import { LanguageSwitch } from "./LanguageSwitch";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="on-dark shell pb-8">
      <div className="grid-12 gap-y-8 border-t rule-dark pt-8">
        <div className="col-span-12 md:col-span-5">
          <p className="label text-[0.75rem] tracking-[0.28em]">{site.name}</p>
          <p className="mt-3 text-sm text-ivory/65">
            <T v={site.role} />
          </p>
          <p className="text-sm text-ivory/65">
            <T v={site.location} />
          </p>
        </div>
        <div className="col-span-6 flex flex-col gap-3 md:col-span-3">
          <LanguageSwitch className="text-ivory/80" />
          {instagram && (
            <a
              href={instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-draw inline-flex w-fit items-center gap-2 pb-0.5 label text-ivory/80"
            >
              {instagram.label}
              <Arrow direction="up-right" />
            </a>
          )}
        </div>
        <div className="col-span-6 flex flex-col items-end justify-between gap-3 text-right md:col-span-4">
          <a href="#top" className="link-draw inline-flex items-center gap-2 pb-0.5 label text-ivory/80">
            <T v={footer.backToTop} />
            <Arrow direction="up" />
          </a>
          <p className="label text-mute-dark num">
            © {year} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
