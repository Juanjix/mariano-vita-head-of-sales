import { hero } from "@/content/site-content";
import { T } from "@/lib/i18n";
import { delay } from "@/lib/style";
import { Arrow } from "@/components/ui/Arrow";
import { EditorialImage } from "@/components/ui/EditorialImage";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="on-dark relative isolate flex min-h-[max(100svh,40rem)] flex-col overflow-hidden"
    >
      {/* Photograph + scrims */}
      <div className="absolute inset-0 -z-10 bg-char">
        <EditorialImage photo="horse" preload />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_bottom,rgb(27_25_22/0.55)_0%,rgb(27_25_22/0)_22%,rgb(27_25_22/0)_42%,rgb(27_25_22/0.72)_72%,rgb(27_25_22/0.94)_100%)]"
        />
      </div>

      {/* Top meta row */}
      <div
        className="hero-fade mt-[calc(var(--nav-h)+1rem)] flex flex-col items-start justify-between gap-2 border-t rule-dark shell pt-4 sm:flex-row sm:gap-6"
        style={delay(500)}
      >
        <p className="max-w-[14rem] label text-ivory/80 sm:max-w-none">
          <T v={hero.kicker} />
        </p>
        <p className="flex shrink-0 items-center gap-2 label text-ivory/80">
          <span>{hero.route.from}</span>
          <Arrow className="text-rust-light" />
          <span>{hero.route.to}</span>
        </p>
      </div>

      {/* Headline + intro, anchored to the bottom */}
      <div className="mt-auto shell pb-[clamp(1.5rem,4vw,3rem)]">
        <h1 id="hero-title" className="display text-[19.4vw] leading-[0.82] md:text-[clamp(3.1rem,18.4vw,17.5rem)]">
          <span className="sr-only">Mariano Vita — </span>
          <span className="block overflow-clip pb-[0.04em]">
            <span className="hero-rise block" style={delay(150)}>
              <T v={hero.titleLines[0]} />
            </span>
          </span>{" "}
          <span className="block overflow-clip pb-[0.04em] md:pl-[12%]">
            <span className="hero-rise block" style={delay(280)}>
              <T v={hero.titleLines[1]} />
            </span>
          </span>
        </h1>

        <div className="mt-[clamp(1.5rem,3.5vw,3rem)] grid-12 items-end gap-y-6">
          <p className="hero-fade col-span-12 hidden label text-ivory/55 md:col-span-4 md:block" style={delay(700)}>
            <T v={hero.caption} />
          </p>
          <div
            className="hero-fade col-span-12 md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8"
            style={delay(600)}
          >
            <p className="max-w-[34rem] text-[1.0625rem] leading-relaxed text-ivory/85 md:text-lg">
              <T v={hero.intro} />
            </p>
            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-4 border-b border-ivory/40 pb-2 text-lg transition-colors duration-300 hover:border-rust-light"
            >
              <span className="font-serif text-2xl leading-none md:text-3xl">
                <T v={hero.cta} />
              </span>
              <Arrow className="text-rust-light transition-transform duration-500 ease-out-expo group-hover:translate-x-1.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
