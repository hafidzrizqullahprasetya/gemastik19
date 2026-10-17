import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { C, FONT } from "../theme";
import { Headline, Label, Phone, easeInOut, mix, prog } from "./kit";

/*
 * Shot 1–3 dalam satu adegan dengan satu HP yang terus hidup:
 *   0–240   pesan loker masuk ke grup chat (judul di kiri)
 *   240–480 HP bergeser, baris berbahaya ditandai, voice note "admin" diputar
 *   480–660 layar pindah ke transfer, jari mendekati Kirim, lalu "Stop, bentar."
 */

const BROADCAST = [
  { t: "LOWONGAN ADMIN INPUT DATA", b: true },
  { t: "Kerja dari rumah, tanpa pengalaman" },
  { t: "Gaji Rp15.000.000/bulan", flag: "gaji" },
  { t: "Syarat:", b: true },
  { t: "1. Kirim foto KTP + selfie", flag: "ktp" },
  { t: "2. Transfer biaya seragam Rp150.000", flag: "biaya" },
  { t: "3. Isi formulir lewat link di bio", flag: "form" },
  { t: "SLOT TERBATAS!!!", b: true, red: true },
];

// Diselaraskan dengan VO 2 (mulai frame 260): "Kirim foto KTP" → "transfer biaya seragam" → "isi formnya".
const FLAGS = [
  { key: "ktp", at: 270, label: "Minta data pribadi" },
  { key: "biaya", at: 312, label: "Minta biaya di depan" },
  { key: "form", at: 358, label: "Formulir tanpa alamat jelas" },
  { key: "gaji", at: 404, label: "Gaji tak wajar tanpa interview" },
];

const ChatHeader = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 22px", background: C.card, borderBottom: `1px solid ${C.bgMuted}` }}>
    <div style={{ width: 48, height: 48, borderRadius: 24, background: C.wa, color: C.card, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 20 }}>LJ</div>
    <div style={{ fontWeight: 700, fontSize: 24, color: C.ink }}>LOKER JOGJA 24 JAM</div>
  </div>
);

const Waveform: React.FC<{ playing: number; f: number }> = ({ playing, f }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 4, height: 34 }}>
    {Array.from({ length: 26 }).map((_, i) => {
      const base = 8 + ((i * 37) % 19);
      const live = playing > 0 ? Math.abs(Math.sin(f * 0.45 + i * 0.9)) * 14 * playing : 0;
      const played = i / 26 < playing;
      return <div key={i} style={{ width: 4, height: base + live, borderRadius: 2, background: played ? C.wa : "#bdb5a9" }} />;
    })}
  </div>
);

const ChatScreen: React.FC<{ f: number }> = ({ f }) => {
  const q = prog(f, 20, 34);
  const msg = prog(f, 48, 66);
  const voice = prog(f, 240, 256);
  const playing = f < 262 ? 0 : Math.min(1, (f - 262) / 170);
  const scroll = mix(0, -96, prog(f, 236, 262, easeInOut));
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, paddingTop: 20, transform: `translateY(${scroll}px)` }}>
      <div style={{ alignSelf: "center", fontSize: 17, color: C.inkSoft, background: "rgba(255,255,255,0.75)", padding: "4px 14px", borderRadius: 8 }}>Hari ini</div>
      <div style={{ opacity: q, transform: `translateY(${(1 - q) * 16}px)`, margin: "0 20px", alignSelf: "flex-start", background: C.card, borderRadius: "4px 18px 18px 18px", padding: "12px 18px", fontSize: 21, color: C.ink }}>
        Ada info loker WFH ga guys?
      </div>
      <div style={{ opacity: msg, transform: `translateY(${(1 - msg) * 24}px)`, margin: "0 20px", background: C.card, borderRadius: "4px 22px 22px 22px", padding: "16px 20px" }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: "#9a4f22", marginBottom: 6 }}>Admin Loker</div>
        {BROADCAST.map((l, i) => {
          const fl = FLAGS.find((x) => x.key === l.flag);
          const p = fl ? prog(f, fl.at, fl.at + 14) : 0;
          return (
            <div key={i} style={{ position: "relative", fontSize: 22, lineHeight: 1.45, fontWeight: l.b ? 700 : 400, color: l.red ? C.bahaya : C.ink }}>
              <span style={{ position: "absolute", left: -4, top: 4, bottom: 4, width: p > 0 ? `calc(${p * 100}% + 8px)` : 0, background: "rgba(200,69,59,0.20)", borderRadius: 4 }} />
              <span style={{ position: "relative" }}>{l.t}</span>
            </div>
          );
        })}
        <div style={{ textAlign: "right", fontSize: 17, color: C.inkSoft, marginTop: 4 }}>21.46</div>
      </div>
      <div style={{ opacity: voice, transform: `translateY(${(1 - voice) * 24}px)`, margin: "0 20px", alignSelf: "flex-start", background: C.card, borderRadius: "4px 22px 22px 22px", padding: "14px 18px", display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ width: 44, height: 44, borderRadius: 22, background: C.ink, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {playing > 0 && playing < 1 ? (
            <div style={{ display: "flex", gap: 5 }}>
              <div style={{ width: 5, height: 16, background: C.bg }} />
              <div style={{ width: 5, height: 16, background: C.bg }} />
            </div>
          ) : (
            <div style={{ width: 0, height: 0, borderTop: "9px solid transparent", borderBottom: "9px solid transparent", borderLeft: `14px solid ${C.bg}`, marginLeft: 4 }} />
          )}
        </div>
        <Waveform playing={playing} f={f} />
        <div style={{ fontSize: 17, color: C.inkSoft }}>0:06</div>
      </div>
    </div>
  );
};

const TransferScreen: React.FC<{ f: number }> = ({ f }) => {
  const FREEZE = 564;
  const g = Math.min(f, FREEZE);
  const tx = mix(150, 0, prog(g, 520, 556));
  const ty = mix(240, 0, prog(g, 520, 556));
  const press = g > 548 ? 0.86 : 1;
  return (
    <div style={{ padding: "64px 40px", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
      <div style={{ fontSize: 26, color: C.inkSoft }}>Transfer ke</div>
      <div style={{ fontSize: 30, fontWeight: 700, color: C.ink }}>Admin Loker</div>
      <div style={{ fontSize: 20, color: C.bahaya, background: C.bahayaBg, padding: "6px 14px", borderRadius: 8 }}>Rekening pribadi</div>
      <div style={{ fontSize: 82, fontWeight: 700, color: C.ink, letterSpacing: -3, marginTop: 56 }}>Rp150.000</div>
      <div style={{ fontSize: 22, color: C.inkSoft }}>Biaya seragam + ID card</div>
      <div style={{ position: "relative", marginTop: 210 }}>
        <div style={{ width: 340, height: 96, borderRadius: 20, background: C.wa, color: C.card, fontSize: 38, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>Kirim</div>
        <div
          style={{
            position: "absolute",
            left: 170 - 42 + tx,
            top: 48 - 42 + ty,
            width: 84,
            height: 84,
            borderRadius: 42,
            background: "rgba(44,40,37,0.25)",
            border: "3px solid rgba(255,255,255,0.9)",
            transform: `scale(${press})`,
            transition: "none",
          }}
        />
      </div>
    </div>
  );
};

export const PhoneStory: React.FC = () => {
  const f = useCurrentFrame();
  // posisi HP (pusat x) dan skala, satu kamera untuk tiga shot
  const enter = prog(f, 0, 26);
  const toLeft = prog(f, 236, 272, easeInOut);
  const toCenter = prog(f, 476, 506, easeInOut);
  const x = f < 476 ? mix(1290, 640, toLeft) : mix(640, 960, toCenter);
  const scale = mix(0.94, 1, toLeft);
  const y = (1 - enter) * 110;
  // transisi layar chat → transfer (push horizontal di dalam HP)
  const push = prog(f, 486, 510, easeInOut);
  // freeze + stop
  const FREEZE = 564;
  const grey = prog(f, FREEZE, FREEZE + 8);
  const scrim = prog(f, FREEZE, FREEZE + 12) * 0.78;
  const stopIn = prog(f, FREEZE + 4, FREEZE + 24);
  const flagsOut = prog(f, 470, 488, easeInOut);
  const drift = f > 30 && f < 236 ? (f - 30) * 0.06 : 0;

  return (
    <AbsoluteFill style={{ background: C.bg }}>
      <AbsoluteFill style={{ filter: `grayscale(${grey})` }}>
        {/* kiri: judul shot 1 */}
        <div style={{ position: "absolute", left: 150, top: 300, width: 760, display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ opacity: 1 - prog(f, 226, 240, easeInOut) }}>
            <Label at={6}>Pukul 21.46, grup chat loker</Label>
          </div>
          <Headline at={14} lines={["Loker sekarang", "datang dari", "grup chat."]} size={110} out={228} />
          <div style={{ opacity: 1 - prog(f, 228, 242, easeInOut) }}>
            <Label at={74} color={C.bahaya}>
              Tanpa penyaring, tanpa verifikasi.
            </Label>
          </div>
        </div>

        {/* kanan: daftar tanda bahaya shot 2 */}
        <div style={{ position: "absolute", left: 1010, top: 330, width: 820, display: "flex", flexDirection: "column", gap: 26, opacity: 1 - flagsOut }}>
          <Label at={262} color={C.bahaya}>
            Yang diminta di pesan itu
          </Label>
          {FLAGS.map((x0) => {
            const p = prog(f, x0.at, x0.at + 16);
            return (
              <div key={x0.key} style={{ display: "flex", alignItems: "center", gap: 22, opacity: p, transform: `translateX(${(1 - p) * 36}px)` }}>
                <div style={{ width: 18 * p + 4, height: 4, background: C.red, flexShrink: 0 }} />
                <div style={{ fontFamily: FONT.sans, fontSize: 54, fontWeight: 700, color: C.ink, letterSpacing: -1.2 }}>{x0.label}</div>
              </div>
            );
          })}
        </div>

        {/* HP */}
        <div style={{ position: "absolute", left: x - 230, top: 70 + y - drift, transform: `scale(${scale})`, transformOrigin: "50% 50%", opacity: enter }}>
          <Phone header={push < 1 ? <div style={{ transform: `translateX(${-push * 100}%)` }}><ChatHeader /></div> : undefined}>
            <div style={{ position: "absolute", inset: "118px 0 0 0", overflow: "hidden", transform: `translateX(${-push * 100}%)` }}>
              <ChatScreen f={f} />
            </div>
            {push > 0 ? (
              <div style={{ position: "absolute", inset: "44px 0 0 0", background: "#efe9df", transform: `translateX(${(1 - push) * 100}%)` }}>
                <TransferScreen f={f} />
              </div>
            ) : null}
          </Phone>
        </div>
      </AbsoluteFill>

      <AbsoluteFill style={{ background: C.ink, opacity: scrim }} />
      {f >= FREEZE ? (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
          <div style={{ clipPath: `inset(0 0 ${(1 - stopIn) * 100}% 0)`, transform: `translateY(${(1 - stopIn) * 40}px)`, fontFamily: FONT.sans, fontWeight: 700, fontSize: 220, letterSpacing: -7, color: C.bg }}>
            Stop, bentar.
          </div>
        </AbsoluteFill>
      ) : null}
    </AbsoluteFill>
  );
};
