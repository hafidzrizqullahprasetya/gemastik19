import React from "react";
import { AbsoluteFill, Img, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { C, FONT } from "../theme";
import { Label, easeInOut, mix, prog } from "./kit";

/*
 * Shot 5–6 (480 frame): enam pemeriksaan paralel → hub berubah jadi meter skor → bukti asli dari app.
 * Semua status, skor, dan alasan diambil dari demo/hasil-v2/scam-fiktif.json (verifikasi 17 Okt 2026).
 */

type Tone = "risk" | "none" | "info";
const PROBES: { icon: string; label: string; done: number; status: string; tone: Tone }[] = [
  { icon: "phone", label: "Nomor HP", done: 46, status: "Tidak dicantumkan", tone: "none" },
  { icon: "building", label: "Perusahaan", done: 80, status: "Jejak web ada, legalitas tak terbukti", tone: "info" },
  { icon: "pin", label: "Alamat & peta", done: 100, status: "Hanya nama kota", tone: "info" },
  { icon: "mail", label: "Email & domain", done: 128, status: "Email gratisan", tone: "risk" },
  { icon: "form", label: "Formulir", done: 168, status: "Tidak ada tautan", tone: "none" },
  { icon: "graph", label: "Laporan komunitas", done: 222, status: "Belum pernah dilaporkan", tone: "none" },
];

const ICON: Record<string, React.ReactNode> = {
  phone: <path d="M-12 -22 h24 a4 4 0 0 1 4 4 v36 a4 4 0 0 1 -4 4 h-24 a4 4 0 0 1 -4 -4 v-36 a4 4 0 0 1 4 -4 z M-4 14 h8" />,
  building: <path d="M-20 24 v-44 h24 v44 M4 24 v-30 h16 v30 M-26 24 h52 M-13 -12 h10 M-13 0 h10 M-13 12 h10" />,
  pin: <path d="M0 24 c-14 -16 -20 -26 -20 -36 a20 20 0 0 1 40 0 c0 10 -6 20 -20 36 z M0 -12 m-6 0 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0" />,
  mail: <path d="M-24 -16 h48 v32 h-48 z M-24 -16 l24 18 l24 -18" />,
  form: <path d="M-18 -24 h36 v48 h-36 z M-10 -12 h20 M-10 0 h20 M-10 12 h12" />,
  graph: <path d="M-18 14 l18 -24 l18 16 M-18 14 m-6 0 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M0 -10 m-6 0 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M18 6 m-6 0 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0" />,
};

const toneColor = (t: Tone) => (t === "risk" ? C.bahaya : t === "info" ? C.waspada : C.inkSoft);

// Skor & alasan dari aplikasi
const SCORE = 95;
const FACTORS = ["Meminta transfer biaya seragam ke rekening pribadi", "Meminta foto identitas KTP dan selfie", "Gaji tidak realistis tanpa proses interview"];

const Meter: React.FC<{ value: number }> = ({ value }) => {
  const R = 200;
  const pt = (v: number) => {
    const a = Math.PI * (1 - v / 100);
    return [Math.cos(a) * R, -Math.sin(a) * R];
  };
  const arc = (a0: number, a1: number) => {
    const [x0, y0] = pt(a0);
    const [x1, y1] = pt(a1);
    return `M${x0} ${y0} A${R} ${R} 0 0 1 ${x1} ${y1}`;
  };
  const col = value >= 75 ? C.bahaya : value >= 40 ? C.waspada : C.aman;
  return (
    <svg width={520} height={300} viewBox="-260 -236 520 300">
      <path d={arc(0, 39.4)} stroke={C.amanBg} strokeWidth={30} fill="none" />
      <path d={arc(40.6, 74.4)} stroke={C.waspadaBg} strokeWidth={30} fill="none" />
      <path d={arc(75.6, 100)} stroke={C.bahayaBg} strokeWidth={30} fill="none" />
      {value > 0.5 ? <path d={arc(0, value)} stroke={col} strokeWidth={30} fill="none" /> : null}
      <text x={0} y={-24} textAnchor="middle" fontFamily={FONT.sans} fontWeight={700} fontSize={140} fill={C.ink} letterSpacing={-5}>
        {Math.round(value)}
      </text>
      <text x={-R} y={46} textAnchor="middle" fontFamily={FONT.sans} fontSize={24} fill={C.inkSoft}>
        0
      </text>
      <text x={R} y={46} textAnchor="middle" fontFamily={FONT.sans} fontSize={24} fill={C.inkSoft}>
        100
      </text>
    </svg>
  );
};

/** Bukti asli: screenshot elemen dari app, tampil besar dengan bingkai tipis. */
const Proof: React.FC<{ src: string; w: number; ratio: number; at: number; out?: number; caption: string }> = ({ src, w, ratio, at, out, caption }) => {
  const f = useCurrentFrame();
  const p = prog(f, at, at + 22);
  const o = out === undefined ? 0 : prog(f, out, out + 16, easeInOut);
  return (
    <div style={{ opacity: p * (1 - o), transform: `translateY(${(1 - p) * 50 - o * 40}px)`, display: "flex", flexDirection: "column", gap: 22, alignItems: "flex-start" }}>
      <div style={{ width: w, height: w / ratio, borderRadius: 18, overflow: "hidden", boxShadow: "0 20px 50px rgba(44,40,37,0.14)", border: `2px solid ${C.bgMuted}` }}>
        <Img src={staticFile(src)} style={{ width: "100%", height: "100%" }} />
      </div>
      <div style={{ fontFamily: FONT.sans, fontSize: 30, fontWeight: 500, color: C.inkSoft }}>{caption}</div>
    </div>
  );
};

export const VerdictShot: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const START = 18;
  const MORPH = 236;
  const morph = prog(f, MORPH, MORPH + 30, easeInOut);
  const cx = 960;
  const cy = 600;
  const pos = PROBES.map((_, i) => ({ x: 420 + (i % 3) * 540, y: i < 3 ? 360 : 840 }));

  // fase 1–2: pemeriksaan + morph (memudar ke fase 3 di 312–330)
  let phaseA: React.ReactNode = null;
  if (f < 332) {
    const hubX = mix(cx, 560, morph);
    const hubY = mix(cy, 470, morph);
    const meterIn = prog(f, MORPH + 14, MORPH + 34);
    const value = mix(0, SCORE, prog(f, MORPH + 20, MORPH + 70, easeInOut));
    const badge = spring({ frame: f - (MORPH + 70), fps, config: { damping: 14, stiffness: 140 } });
    phaseA = (
      <AbsoluteFill style={{ background: C.bg, opacity: 1 - prog(f, 312, 330, easeInOut) }}>
        <div style={{ position: "absolute", top: 70, width: "100%", display: "flex", justifyContent: "center", opacity: 1 - morph }}>
          <Label at={4}>Enam pemeriksaan berjalan bersamaan</Label>
        </div>
        <svg viewBox="0 0 1920 1080" width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 1 - morph }}>
          {pos.map((p, i) => {
            const d = prog(f, START - 8, START + 14);
            const done = f >= PROBES[i].done;
            return <line key={i} x1={cx} y1={cy} x2={mix(cx, p.x, d)} y2={mix(cy, p.y, d)} stroke={done ? C.ink : C.bgMuted} strokeWidth={done ? 3.5 : 3} strokeDasharray={done ? "0" : "8 10"} strokeDashoffset={-f * 1.5} />;
          })}
        </svg>
        {PROBES.map((p, i) => {
          const s = prog(f, START + i * 3, START + i * 3 + 18);
          const done = f >= p.done;
          const st = prog(f, p.done, p.done + 14);
          const away = morph;
          return (
            <div
              key={p.label}
              style={{
                position: "absolute",
                left: pos[i].x - 235,
                top: pos[i].y - 82,
                width: 470,
                height: 164,
                opacity: s * (1 - away),
                transform: `translate(${(pos[i].x - cx) * away * 0.25}px, ${(1 - s) * 24 + (pos[i].y - cy) * away * 0.25}px)`,
                background: C.card,
                borderRadius: 20,
                border: `2.5px solid ${done ? C.ink : C.bgMuted}`,
                display: "flex",
                alignItems: "center",
                gap: 22,
                padding: "0 26px",
                fontFamily: FONT.sans,
              }}
            >
              <svg width={60} height={60} viewBox="-32 -32 64 64" style={{ flexShrink: 0 }}>
                <g fill="none" stroke={C.ink} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round">
                  {ICON[p.icon]}
                </g>
              </svg>
              <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                <div style={{ fontSize: 34, fontWeight: 700, color: C.ink, letterSpacing: -0.5 }}>{p.label}</div>
                <div style={{ fontSize: 25, fontWeight: 500, color: toneColor(p.tone), opacity: st, transform: `translateY(${(1 - st) * 8}px)`, lineHeight: 1.2 }}>
                  {done ? p.status : "Memeriksa…"}
                </div>
              </div>
              <svg width={44} height={44} viewBox="-22 -22 44 44" style={{ flexShrink: 0 }}>
                {done ? (
                  <g transform={`scale(${st})`}>
                    <circle r={19} fill={p.tone === "risk" ? C.bahaya : C.ink} />
                    {p.tone === "none" ? (
                      <path d="M-8 0 h16" stroke={C.bg} strokeWidth={4} strokeLinecap="round" />
                    ) : (
                      <path d="M-8 0 l5 6 l11 -12" fill="none" stroke={C.bg} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                    )}
                  </g>
                ) : (
                  <circle r={15} fill="none" stroke={C.ink} strokeWidth={4} strokeDasharray="60 200" transform={`rotate(${f * 10})`} strokeLinecap="round" />
                )}
              </svg>
            </div>
          );
        })}
        {/* hub → meter */}
        <div style={{ position: "absolute", left: hubX - 90, top: hubY - 90, width: 180, height: 180, borderRadius: 40, background: C.card, border: `3px solid ${C.ink}`, display: "flex", alignItems: "center", justifyContent: "center", opacity: (1 - meterIn) * prog(f, 0, 14) }}>
          <Img src={staticFile("logo/verifin-mark.svg")} style={{ width: 196, height: 196 }} />
        </div>
        {meterIn > 0 ? (
          <div style={{ position: "absolute", left: 560 - 260, top: 300, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: meterIn, transform: `scale(${mix(0.9, 1, meterIn)})` }}>
            <Meter value={value} />
            <div style={{ transform: `scale(${badge})`, fontFamily: FONT.sans, fontWeight: 700, fontSize: 60, color: C.bahaya, background: C.bahayaBg, border: `3px solid ${C.bahaya}`, borderRadius: 12, padding: "6px 40px", letterSpacing: 1 }}>
              BAHAYA
            </div>
          </div>
        ) : null}
        {meterIn > 0 ? (
          <div style={{ position: "absolute", left: 980, top: 330, width: 800, display: "flex", flexDirection: "column", gap: 26 }}>
            <Label at={MORPH + 26}>Alasannya, dari bukti di teks</Label>
            {FACTORS.map((t, i) => {
              const p = prog(f, MORPH + 40 + i * 12, MORPH + 58 + i * 12);
              return (
                <div key={t} style={{ opacity: p, transform: `translateX(${(1 - p) * 30}px)`, display: "flex", gap: 20, alignItems: "baseline", fontFamily: FONT.sans, fontSize: 44, fontWeight: 600, color: C.ink, lineHeight: 1.18, letterSpacing: -0.6 }}>
                  <span style={{ width: 14, height: 14, borderRadius: 3, background: C.bahaya, flexShrink: 0, transform: "translateY(-6px)" }} />
                  {t}
                </div>
              );
            })}
          </div>
        ) : null}
      </AbsoluteFill>
    );
  }

  // fase 3: bukti asli dari app (kartu verdict + faktor, lalu grafik kontribusi)
  const lift = prog(f, 322, 346, easeInOut);
  return (
    <AbsoluteFill style={{ background: C.bg }}>
      {f >= 310 ? (
    <AbsoluteFill>
      <div style={{ position: "absolute", top: 70, left: 140, opacity: lift }}>
        <Label at={326}>Tampilan asli di aplikasi Verifin</Label>
      </div>
      <div style={{ position: "absolute", left: 140, top: 160 }}>
        <Proof src="app/el-verdict.png" w={1640} ratio={2400 / 362} at={326} out={404} caption="Verdict dan skor risiko" />
      </div>
      <div style={{ position: "absolute", left: 140, top: 500 }}>
        <Proof src="app/el-faktor.png" w={1640} ratio={2400 / 526} at={340} out={404} caption="Faktor yang mendukung dan yang perlu diwaspadai" />
      </div>
      <div style={{ position: "absolute", left: 100, top: 190 }}>
        <Proof src="app/el-kontribusi.png" w={1720} ratio={2268 / 562} at={410} caption="Kontribusi tiap bukti terhadap skor: 12 + 83 = 95" />
      </div>
    </AbsoluteFill>
      ) : null}
      {phaseA}
    </AbsoluteFill>
  );
};
