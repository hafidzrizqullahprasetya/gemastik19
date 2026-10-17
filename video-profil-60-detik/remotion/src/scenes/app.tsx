import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { C } from "../theme";
import { Note, cameraFor, easeInOut, lerpCam, mix, prog, type Rect } from "./kit";

/*
 * Shot 4: tempel ke Verifin (screenshot asli demo/hasil-v2).
 * Dibuka dari layar gelap "Stop, bentar." supaya transisinya menyambung.
 * Kamera bergerak mulus antar area fokus; anotasi ada di luar jendela, tidak menutupi UI.
 */

const VW = 1200;
const VH = 750;

// Area fokus dalam pecahan gambar 2880×1800 (diukur dari screenshot).
const FULL: Rect = { x: 0, y: 0, w: 1, h: 1 };
const INPUT: Rect = { x: 0.565, y: 0.145, w: 0.325, h: 0.48 };
const PROGRESS: Rect = { x: 0.185, y: 0.28, w: 0.63, h: 0.44 };

const LAYERS = [
  { src: "app/home.png", from: -20, to: 52 },
  { src: "app/input.png", from: 52, to: 122 },
  { src: "app/progres-1.png", from: 122, to: 150 },
  { src: "app/progres-3.png", from: 150, to: 178 },
  { src: "app/progres-4.png", from: 178, to: 206 },
  { src: "app/progres-6.png", from: 206, to: 400 },
];

export const AppShot: React.FC = () => {
  const f = useCurrentFrame();
  const bg = prog(f, 0, 20, easeInOut);
  const rise = prog(f, 4, 30);
  const a = cameraFor(FULL, VW, VH);
  const b = cameraFor(INPUT, VW, VH);
  const c = cameraFor(PROGRESS, VW, VH);
  const cam = f < 116 ? lerpCam(a, b, prog(f, 44, 100, easeInOut)) : lerpCam(b, c, prog(f, 116, 160, easeInOut));
  const driftS = 1;
  const focus = f < 116 ? INPUT : PROGRESS;
  const spot = f < 116 ? prog(f, 70, 100) * (1 - prog(f, 110, 122)) : prog(f, 150, 170);

  return (
    <AbsoluteFill style={{ background: `rgb(${mix(44, 242, bg)},${mix(40, 237, bg)},${mix(37, 230, bg)})` }}>
      {/* jendela browser */}
      <div
        style={{
          position: "absolute",
          left: 110,
          top: 150,
          width: VW,
          height: VH + 40,
          borderRadius: 16,
          border: `3px solid ${C.ink}`,
          overflow: "hidden",
          background: C.bg,
          opacity: rise,
          transform: `translateY(${(1 - rise) * 60}px) scale(${mix(0.96, 1, rise)})`,
          boxShadow: "0 24px 60px rgba(44,40,37,0.16)",
        }}
      >
        <div style={{ height: 40, background: C.card, borderBottom: `2px solid ${C.bgMuted}`, display: "flex", alignItems: "center", gap: 9, paddingLeft: 16 }}>
          {["#d9d2c7", "#d9d2c7", "#d9d2c7"].map((c0, i) => (
            <div key={i} style={{ width: 13, height: 13, borderRadius: 7, background: c0 }} />
          ))}
        </div>
        <div style={{ position: "relative", width: VW, height: VH, overflow: "hidden" }}>
          <div style={{ position: "absolute", left: 0, top: 0, width: VW, height: VH, transformOrigin: "0 0", transform: `translate(${cam.tx}px, ${cam.ty}px) scale(${cam.s * driftS})` }}>
            {LAYERS.map((l) => {
              const o = Math.min(
                interpolate(f, [l.from, l.from + 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
                interpolate(f, [l.to, l.to + 10], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
              );
              return o > 0 ? <Img key={l.src} src={staticFile(l.src)} style={{ position: "absolute", inset: 0, width: VW, height: VH, opacity: o }} /> : null;
            })}
          </div>
          {/* sorotan: area di luar fokus diredupkan supaya potongan tepi terbaca sebagai sengaja */}
          {spot > 0 ? (
            <div
              style={{
                position: "absolute",
                left: focus.x * VW * cam.s + cam.tx,
                top: focus.y * VH * cam.s + cam.ty,
                width: focus.w * VW * cam.s,
                height: focus.h * VH * cam.s,
                borderRadius: 14,
                boxShadow: `0 0 0 2000px rgba(242,237,230,${0.78 * spot})`,
              }}
            />
          ) : null}
        </div>
      </div>

      {/* anotasi kanan */}
      <div style={{ position: "absolute", left: 1350, top: 250, width: 520, display: "flex", flexDirection: "column", gap: 34 }}>
        <Note at={30} strong>
          Tempel apa adanya
        </Note>
        <Note at={52}>Teks broadcast, poster, atau link postingan</Note>
        <Note at={128}>Tanpa membuat akun</Note>
        <Note at={160}>Tahap pemeriksaan tampil langsung dari server</Note>
      </div>
    </AbsoluteFill>
  );
};
