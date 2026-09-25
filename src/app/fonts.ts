import localFont from "next/font/local";

/** Editorial display serif — statements, numbers, headings. (SIL OFL) */
export const display = localFont({
  src: [
    { path: "./fonts/instrument-serif-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/instrument-serif-latin-400-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-display",
  display: "swap",
  preload: true,
  fallback: ["Times New Roman", "serif"],
});

/** Grotesk — navigation, labels, body and UI. Variable weight. (SIL OFL) */
export const grotesk = localFont({
  src: "./fonts/inter-tight-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-grotesk",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "Helvetica Neue", "Arial", "sans-serif"],
});
