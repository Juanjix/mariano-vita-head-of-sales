import { manifesto } from "@/content/site-content";
import { T } from "@/lib/i18n";
import { delay } from "@/lib/style";
import { Line } from "@/components/ui/Line";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ManifestoMotion } from "./ManifestoMotion";

export function Manifesto() {
  return (
    <ManifestoMotion>
      <section
        id="about"
        aria-labelledby="manifesto-title"
        className="on-dark relative overflow-hidden shell py-[clamp(6rem,14vw,13rem)]"
      >
        <SectionLabel index="02" label={manifesto.label} dark />
        <h2
          id="manifesto-title"
          data-manifesto-title
          className="mt-[clamp(2.5rem,6vw,5rem)] display text-[13.6vw] md:text-[clamp(2.35rem,11.2vw,12.5rem)]"
        >
          {manifesto.lines.map((line, i) => (
            <Line key={i} controlled>
              <T v={line} />
            </Line>
          ))}
          <Line controlled className="text-rust-light">
            <em className="not-italic md:pl-[18%]">
              <span className="italic">
                <T v={manifesto.emphasis} />
              </span>
            </em>
          </Line>
        </h2>

        <div className="mt-[clamp(3rem,7vw,6rem)] grid-12">
          <div className="col-span-12 space-y-5 border-t rule-dark pt-6 md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8">
            {manifesto.body.map((p, i) => (
              <p
                key={i}
                data-reveal="up"
                style={delay(i * 120)}
                className="text-lg leading-relaxed text-ivory/80 md:text-xl"
              >
                <T v={p} />
              </p>
            ))}
          </div>
        </div>
      </section>
    </ManifestoMotion>
  );
}
