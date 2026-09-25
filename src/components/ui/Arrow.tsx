type Direction = "right" | "down" | "up" | "up-right";

const rotation: Record<Direction, number> = { right: 0, down: 90, up: -90, "up-right": -45 };

/** Hairline arrow drawn in SVG so it matches both typefaces at any size. */
export function Arrow({ direction = "right", className = "" }: { direction?: Direction; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={`inline-block h-[0.9em] w-[0.9em] shrink-0 ${className}`}
      style={{ transform: `rotate(${rotation[direction]}deg)` }}
    >
      <path d="M2 12h19M14 5l7 7-7 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
    </svg>
  );
}
