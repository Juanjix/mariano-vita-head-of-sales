import { tlvy } from "@/content/te-lo-vendo-yo/content";
import { T } from "@/lib/i18n";
import { delay } from "@/lib/style";
import { Arrow } from "@/components/ui/Arrow";
import { Line } from "@/components/ui/Line";
import { TlLabel } from "./TlLabel";
import { ProblemMotion } from "./motion/ProblemMotion";

const p = tlvy.problem;

export function Problem() {
  return (
    <ProblemMotion>
      <section id="problema" aria-labelledby="tl-problem-title" className="shell py-[clamp(6rem,12vw,11rem)]">
        <TlLabel index={p.index} label={p.label} />
        <h2 id="tl-problem-title" className="mt-[clamp(2rem,5vw,4rem)] tl-display text-[clamp(2.5rem,8vw,8.5rem)]">
          {p.titleLines.map((line, i) => (
            <Line key={i} d={i * 120} className={i === 1 ? "text-steel" : ""}>
              <T v={line} />
            </Line>
          ))}
        </h2>

        <div className="mt-[clamp(3rem,6vw,5rem)] grid-12 gap-y-10">
          <p data-reveal="up" className="col-span-12 text-lg leading-relaxed text-bone/80 md:col-span-5 md:text-xl">
            <T v={p.body} />
          </p>
          <ol className="col-span-12 grid gap-x-8 sm:grid-cols-2 md:col-span-7">
            {p.items.map((item, i) => (
              <li
                key={i}
                data-reveal="up"
                style={delay((i % 4) * 60)}
                className="flex items-baseline gap-4 border-t tl-rule py-4"
              >
                <span className="tl-label text-signal num">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[1.05rem] leading-snug">
                  <T v={item} />
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* The consequence chain: each step drops a level, like a balance sheet going down */}
        <div data-chain className="mt-[clamp(4.5rem,9vw,8rem)]">
          <p data-reveal="fade" className="tl-label text-steel">
            <T v={p.chainLabel} />
          </p>
          <ol className="mt-6">
            {p.chain.map((step, i) => (
              <li
                key={i}
                data-chain-step
                className="relative border-t tl-rule py-[clamp(0.75rem,1.6vw,1.25rem)]"
                style={{ paddingLeft: `calc(${i} * clamp(0.75rem, 7vw, 8rem))` }}
              >
                <span className="flex items-baseline gap-4">
                  <span aria-hidden="true" className="w-4 shrink-0 text-steel">
                    {i === 0 ? <span className="block h-px w-3 bg-current" /> : <Arrow direction="down" />}
                  </span>
                  <span
                    className={`tl-display text-[clamp(1.9rem,6.2vw,6.5rem)] ${
                      i === p.chain.length - 1 ? "text-signal" : ""
                    }`}
                  >
                    <T v={step} />
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </ProblemMotion>
  );
}
