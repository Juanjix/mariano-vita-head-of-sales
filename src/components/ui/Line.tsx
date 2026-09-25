import type { ReactNode } from "react";
import { delay } from "@/lib/style";

/** A single masked line of display type that slides up when revealed. */
export function Line({ children, d = 0, className = "" }: { children: ReactNode; d?: number; className?: string }) {
  return (
    <span data-reveal="line" style={delay(d)} className={className}>
      <span>{children}</span>{" "}
    </span>
  );
}
