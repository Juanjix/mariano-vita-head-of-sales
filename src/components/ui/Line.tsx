import type { ReactNode } from "react";
import { delay } from "@/lib/style";

/**
 * A single masked line of display type.
 * - default: revealed by the global reveal runtime (data-reveal="line").
 * - controlled: a section's own GSAP timeline animates it (data-line), so
 *   the two systems never touch the same element.
 */
export function Line({
  children,
  d = 0,
  className = "",
  controlled = false,
}: {
  children: ReactNode;
  d?: number;
  className?: string;
  controlled?: boolean;
}) {
  if (controlled) {
    return (
      <span data-line className={`mask-line ${className}`}>
        <span>{children}</span>{" "}
      </span>
    );
  }
  return (
    <span data-reveal="line" style={delay(d)} className={className}>
      <span>{children}</span>{" "}
    </span>
  );
}
