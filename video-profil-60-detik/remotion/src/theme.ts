import { loadFont as loadGeist } from "@remotion/google-fonts/Geist";
import { loadFont as loadGeistMono } from "@remotion/google-fonts/GeistMono";

// Token warna diambil dari verifin-app/frontend/src/app/globals.css
export const C = {
  bg: "#faf8f4",
  bgSubtle: "#f2ede6",
  bgMuted: "#e8e2d9",
  card: "#ffffff",
  ink: "#2c2825",
  inkSoft: "#4a4540",
  muted: "#8a8279",
  aman: "#2f5c34",
  amanBg: "#edf3ec",
  waspada: "#7a5500",
  waspadaBg: "#fbf4db",
  bahaya: "#8f2f2d",
  bahayaBg: "#fdebec",
  mustard: "#d9a521",
  red: "#c8453b",
  skin: "#f4dcc4",
  night: "#e6e1ee",
  glow: "#fff1b8",
  wa: "#3d9a5b",
};

export const FONT = {
  sans: loadGeist("normal", { weights: ["400", "500", "700"], subsets: ["latin"] }).fontFamily,
  mono: loadGeistMono("normal", { weights: ["500"], subsets: ["latin"] }).fontFamily,
};

export const FPS = 30;

// Jadwal shot (frame @30fps). Total 1800 = 60 detik.
export const SHOTS = {
  notif: { from: 0, dur: 240 },
  flags: { from: 240, dur: 240 },
  stop: { from: 480, dur: 180 },
  app: { from: 660, dur: 240 },
  checks: { from: 900, dur: 240 },
  putusan: { from: 1140, dur: 240 },
  mnemonic: { from: 1380, dur: 240 },
  end: { from: 1620, dur: 180 },
} as const;
