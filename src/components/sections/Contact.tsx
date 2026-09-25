import { contact as c } from "@/content/site-content";
import { contactChannels } from "@/content/contact-channels";
import { T } from "@/lib/i18n";
import { delay } from "@/lib/style";
import { Arrow } from "@/components/ui/Arrow";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="on-dark shell pt-[clamp(6rem,14vw,13rem)] pb-[clamp(5rem,10vw,9rem)]"
    >
      <SectionLabel index="11" label={c.label} dark />

      <h2 id="contact-title" className="mt-[clamp(2.5rem,6vw,5rem)]">
        <span
          data-reveal="up"
          className="block display text-[12.6vw] leading-[0.92] [text-wrap:balance] md:max-w-[20ch] md:text-[clamp(2.7rem,8.6vw,10.5rem)]"
        >
          <T v={c.title} />
        </span>
        <span
          data-reveal="up"
          style={delay(150)}
          className="mt-4 block font-serif text-[clamp(2rem,5.4vw,5.75rem)] leading-[1] text-rust-light italic md:mt-6"
        >
          <T v={c.subtitle} />
        </span>
      </h2>

      <div className="mt-[clamp(3.5rem,8vw,7rem)] grid-12 gap-y-12">
        <div className="col-span-12 md:col-span-5">
          <p data-reveal="up" className="text-lg leading-relaxed text-ivory/80 md:text-xl">
            <T v={c.body} />
          </p>
          <ul className="mt-8 space-y-2">
            {c.audiences.map((a, i) => (
              <li key={i} data-reveal="fade" style={delay(i * 80)} className="flex gap-3 label text-mute-dark">
                <span aria-hidden="true" className="mt-[0.6em] h-px w-4 shrink-0 bg-rust-light" />
                <span>
                  <T v={a} />
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-12 md:col-span-6 md:col-start-7">
          <p className="label text-mute-dark">
            <T v={c.channelsLabel} />
          </p>
          <ul className="mt-4 border-t rule-dark">
            {contactChannels.map((ch) => {
              const external = ch.href.startsWith("http");
              return (
                <li key={ch.kind} className="border-b rule-dark">
                  <a
                    href={ch.href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center justify-between gap-6 py-6 md:py-8"
                  >
                    <span>
                      <span className="block label text-mute-dark">{ch.label}</span>
                      <span className="mt-2 block font-serif text-[clamp(2rem,5vw,3.75rem)] leading-none transition-colors duration-300 group-hover:text-rust-light">
                        {ch.display}
                      </span>
                    </span>
                    <Arrow
                      direction="up-right"
                      className="text-[clamp(2rem,4vw,3rem)] text-rust-light transition-transform duration-500 ease-out-expo group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                    {external && (
                      <span className="sr-only">
                        <T v={c.external} />
                      </span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
