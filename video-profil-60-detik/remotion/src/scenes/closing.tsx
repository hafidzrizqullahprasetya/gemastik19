import React from "react";
import { AbsoluteFill, Img, staticFile, useCurrentFrame } from "remotion";
import { C, FONT } from "../theme";
import { easeInOut, mix, prog } from "./kit";

/* ---------------- Shot 7: Tempel – Tunggu – Tahu (latar gelap, satu-satunya momen gelap) ---------------- */
const WORDS = [
  { w: "Tempel.", at: 10, d: "Teks, poster, atau link" },
  { w: "Tunggu.", at: 45, d: "Pemeriksaan berjalan bersamaan" },
  { w: "Tahu.", at: 74, d: "Baca bukti, baru putuskan" },
];

export const Mnemonic: React.FC = () => {
  const f = useCurrentFrame();
  const bg = prog(f, 0, 14, easeInOut);
  return (
    <AbsoluteFill style={{ background: `rgb(${mix(250, 44, bg)},${mix(248, 40, bg)},${mix(244, 37, bg)})`, alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", gap: 84, alignItems: "flex-start" }}>
        {WORDS.map((x, i) => {
          const p = prog(f, x.at, x.at + 20);
          const next = WORDS[i + 1];
          const active = f >= x.at && (!next || f < next.at || f > 150);
          return (
            <div key={x.w} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div
                style={{
                  clipPath: `inset(-10% 0 ${(1 - p) * 110}% 0)`,
                  transform: `translateY(${(1 - p) * 30}px)`,
                  fontFamily: FONT.sans,
                  fontWeight: 700,
                  fontSize: 150,
                  letterSpacing: -6,
                  lineHeight: 1.1,
                  color: active ? C.bg : "rgba(250,248,244,0.42)",
                }}
              >
                {x.w}
              </div>
              <div style={{ opacity: p, fontFamily: FONT.sans, fontWeight: 500, fontSize: 30, color: "rgba(250,248,244,0.78)" }}>{x.d}</div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

/* ---------------- Shot 8: end card ---------------- */
const LOGOS = [
  { src: "logo/kemdikbud-tut-wuri.png", h: 92 },
  { src: "logo/diktisaintek-berdampak.png", h: 92 },
  { src: "logo/gemastik.png", h: 70 },
  { src: "logo/ugm.png", h: 96 },
  { src: "logo/belmawa.png", h: 64 },
];

export const EndCard: React.FC = () => {
  const f = useCurrentFrame();
  const bg = prog(f, 0, 14, easeInOut);
  const mark = prog(f, 6, 30);
  const words = prog(f, 16, 36);
  const team = prog(f, 30, 50);
  const logos = prog(f, 40, 62);
  return (
    <AbsoluteFill style={{ background: `rgb(${mix(44, 250, bg)},${mix(40, 248, bg)},${mix(37, 244, bg)})`, alignItems: "center", justifyContent: "center", fontFamily: FONT.sans }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, marginTop: -40 }}>
        <div style={{ width: 170, height: 170, borderRadius: 40, background: C.card, border: `3px solid ${C.ink}`, display: "flex", alignItems: "center", justifyContent: "center", opacity: mark, transform: `translateY(${(1 - mark) * 24}px)` }}>
          <Img src={staticFile("logo/verifin-mark.svg")} style={{ width: 190, height: 190 }} />
        </div>
        <div style={{ opacity: words, transform: `translateY(${(1 - words) * 16}px)`, fontSize: 116, fontWeight: 700, color: C.ink, letterSpacing: -3, lineHeight: 1.05 }}>Verifin</div>
        <div style={{ opacity: words, fontSize: 46, fontWeight: 500, color: C.inkSoft, letterSpacing: -0.5 }}>Tahu sebelum kamu melamar.</div>
        <div style={{ opacity: team, marginTop: 26, fontSize: 30, fontWeight: 500, color: C.ink, textAlign: "center", lineHeight: 1.4 }}>
          Tim Three Achilles · Universitas Gadjah Mada
          <br />
          <span style={{ color: C.inkSoft }}>GEMASTIK XIX 2026 · Pengembangan Perangkat Lunak</span>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 90, display: "flex", alignItems: "center", gap: 56, opacity: logos, transform: `translateY(${(1 - logos) * 14}px)` }}>
        {LOGOS.map((l) => (
          <Img key={l.src} src={staticFile(l.src)} style={{ height: l.h }} />
        ))}
      </div>
    </AbsoluteFill>
  );
};
