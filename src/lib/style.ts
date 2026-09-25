import type { CSSProperties } from "react";

/** Reveal delay helper: sets the --d custom property used by the reveal CSS. */
export const delay = (ms: number): CSSProperties => ({ ["--d" as string]: `${ms}ms` });
