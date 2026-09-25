import { tlvy } from "@/content/te-lo-vendo-yo/content";
import { T } from "@/lib/i18n";
import { Line } from "@/components/ui/Line";

/** The strategic statement right under the hero: not an agency — a commercial solution. */
export function Differentiator() {
  const [a, b] = tlvy.differentiator.lines;
  return (
    <section aria-labelledby="tl-diff" className="tl-light shell py-[clamp(4.5rem,10vw,9rem)]">
      <h2 id="tl-diff">
        <span className="block max-w-[22ch] font-serif text-[clamp(1.9rem,4.4vw,4.25rem)] leading-[1.02] text-graphite/65 italic">
          <Line>
            <T v={a} />
          </Line>
        </span>
        <span className="mt-4 block max-w-[18ch] tl-display text-[clamp(2.4rem,6.6vw,7rem)] md:ml-[16%]">
          <Line d={140}>
            <T v={b} />
          </Line>
        </span>
      </h2>
    </section>
  );
}
