import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { C, FONT } from "../theme";

/** Kurva utama: cepat di awal, mendarat pelan. Dipakai untuk semua gerak kamera dan masuk elemen. */
export const easeOut = Easing.bezier(0.22, 1, 0.36, 1);
export const easeInOut = Easing.bezier(0.65, 0, 0.35, 1);

/** Progres 0..1 antara dua frame dengan kurva tertentu. */
export const prog = (f: number, a: number, b: number, ease = easeOut) =>
  interpolate(f, [a, b], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease });

export const mix = (a: number, b: number, t: number) => a + (b - a) * t;

/** Label kecil kalimat biasa (pengganti eyebrow uppercase mono). */
export const Label: React.FC<{ at: number; children: React.ReactNode; color?: string; size?: number }> = ({ at, children, color = C.inkSoft, size = 32 }) => {
  const f = useCurrentFrame();
  const p = prog(f, at, at + 16);
  return (
    <div style={{ opacity: p, transform: `translateY(${(1 - p) * 14}px)`, fontFamily: FONT.sans, fontWeight: 500, fontSize: size, color, letterSpacing: -0.2 }}>
      {children}
    </div>
  );
};

/** Judul besar yang muncul per baris dengan clip-path (tanpa artefak potongan glyph). */
export const Headline: React.FC<{ at: number; lines: string[]; size?: number; color?: string; out?: number }> = ({ at, lines, size = 100, color = C.ink, out }) => {
  const f = useCurrentFrame();
  const o = out === undefined ? 1 : 1 - prog(f, out, out + 14, easeInOut);
  return (
    <div style={{ fontFamily: FONT.sans, fontWeight: 700, fontSize: size, lineHeight: 1.06, letterSpacing: -2.5, color, opacity: o }}>
      {lines.map((l, i) => {
        const p = prog(f, at + i * 5, at + i * 5 + 22);
        return (
          <div key={i} style={{ clipPath: `inset(0 0 ${(1 - p) * 100}% 0)`, transform: `translateY(${(1 - p) * 0.4}em)` }}>
            {l}
          </div>
        );
      })}
    </div>
  );
};

/** Mockup HP datar. Konten layar diisi lewat children. */
export const Phone: React.FC<{ children: React.ReactNode; header?: React.ReactNode }> = ({ children, header }) => (
  <div style={{ width: 460, height: 940, borderRadius: 62, background: "#1f1c1a", padding: 13, boxShadow: "0 30px 70px rgba(44,40,37,0.20)" }}>
    <div style={{ width: "100%", height: "100%", borderRadius: 50, background: "#efe9df", overflow: "hidden", clipPath: "inset(0 round 50px)", position: "relative", fontFamily: FONT.sans }}>
      <div style={{ height: 44, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 36px", fontSize: 20, fontWeight: 700, color: C.ink }}>
        <span>21.47</span>
        <span style={{ width: 110, height: 30, borderRadius: 15, background: "#1f1c1a" }} />
        <span style={{ width: 44 }} />
      </div>
      {header}
      {children}
    </div>
  </div>
);

export type Rect = { x: number; y: number; w: number; h: number };

/**
 * Kamera untuk screenshot 2880×1800 yang ditampilkan di viewport vw×vh (rasio 1,6).
 * Menghitung skala + geser supaya `r` (pecahan 0..1) muat utuh dengan margin, tanpa keluar dari gambar.
 */
export const cameraFor = (r: Rect, vw: number, vh: number, margin = 0.06) => {
  const s = Math.max(1, Math.min((vw * (1 - 2 * margin)) / (r.w * vw), (vh * (1 - 2 * margin)) / (r.h * vh)));
  const cx = (r.x + r.w / 2) * vw * s;
  const cy = (r.y + r.h / 2) * vh * s;
  const tx = Math.min(0, Math.max(vw - vw * s, vw / 2 - cx));
  const ty = Math.min(0, Math.max(vh - vh * s, vh / 2 - cy));
  return { s, tx, ty };
};

export const lerpCam = (a: ReturnType<typeof cameraFor>, b: ReturnType<typeof cameraFor>, t: number) => ({
  s: mix(a.s, b.s, t),
  tx: mix(a.tx, b.tx, t),
  ty: mix(a.ty, b.ty, t),
});

/** Anotasi: teks di luar UI dengan garis penunjuk tipis, bukan chip yang menutupi layar. */
export const Note: React.FC<{ at: number; children: React.ReactNode; strong?: boolean }> = ({ at, children, strong }) => {
  const f = useCurrentFrame();
  const p = prog(f, at, at + 18);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 18, opacity: p }}>
      <div style={{ width: 70 * p, height: 3, background: C.ink, flexShrink: 0 }} />
      <div style={{ fontFamily: FONT.sans, fontSize: strong ? 44 : 36, fontWeight: strong ? 700 : 500, color: C.ink, letterSpacing: -0.6, lineHeight: 1.15, transform: `translateX(${(1 - p) * 20}px)` }}>
        {children}
      </div>
    </div>
  );
};
