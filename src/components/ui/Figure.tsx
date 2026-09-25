import type { Figure as FigureData } from "@/types/content";

/**
 * A statistic rendered with its final value on the server (correct without JS,
 * for crawlers and for reduced motion). Pass `countable` to let the owning
 * section's GSAP timeline count the digits up via [data-count].
 */
export function Figure({ figure, countable = false }: { figure: FigureData; countable?: boolean }) {
  return (
    <span className="num">
      {figure.prefix}
      <span data-count={countable ? figure.value : undefined}>{figure.value}</span>
      {figure.suffix}
    </span>
  );
}
