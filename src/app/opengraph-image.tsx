import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Mariano Vita — Emprendedor & Business Development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Typographic share card, generated at build time. */
export default async function OpengraphImage() {
  const serif = await readFile(join(process.cwd(), "src/app/fonts/instrument-serif-latin-400-normal.woff"));
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#1b1916",
        color: "#f2eee6",
        padding: "64px 72px",
        fontFamily: "Instrument Serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 5, opacity: 0.75 }}>
        <span>MARIANO VITA</span>
        <span>ARGENTINA — COLOMBIA</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 168, lineHeight: 0.86 }}>
        <span>CONSTRUYO</span>
        <span style={{ paddingLeft: 140, color: "#d0764f" }}>NEGOCIOS.</span>
      </div>
      <div style={{ display: "flex", fontSize: 26, letterSpacing: 4, opacity: 0.75 }}>
        EMPRENDEDOR · BUSINESS DEVELOPMENT · VENTAS
      </div>
    </div>,
    { ...size, fonts: [{ name: "Instrument Serif", data: serif, style: "normal", weight: 400 }] },
  );
}
