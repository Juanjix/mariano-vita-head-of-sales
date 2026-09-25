import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Te Lo Vendo Yo — Convertimos inventario en ventas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Typographic share card (no photography exists yet — none is faked).
 * Replace with a real dealership/vehicle image when available.
 */
export default async function OpengraphImage() {
  const fonts = join(process.cwd(), "src/app/fonts");
  const [serif, sans] = await Promise.all([
    readFile(join(fonts, "instrument-serif-latin-400-normal.woff")),
    readFile(join(fonts, "inter-tight-latin-800-normal.woff")),
  ]);
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#121315",
        color: "#efeeea",
        padding: "64px 72px",
      }}
    >
      <div
        style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 5, color: "#8e939a" }}
      >
        <span style={{ color: "#ff6a2b" }}>PARA CONCESIONARIOS</span>
        <span>MEDELLÍN · COLOMBIA</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 150,
          fontWeight: 800,
          lineHeight: 0.88,
          letterSpacing: -6,
        }}
      >
        <span>TE LO</span>
        <span style={{ paddingLeft: 180 }}>VENDO YO</span>
      </div>
      <div style={{ display: "flex", fontFamily: "Instrument Serif", fontSize: 56 }}>
        <span>Convertimos inventario&nbsp;</span>
        <span style={{ color: "#ff6a2b" }}>en ventas.</span>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Inter Tight", data: sans, style: "normal", weight: 800 },
        { name: "Instrument Serif", data: serif, style: "normal", weight: 400 },
      ],
    },
  );
}
