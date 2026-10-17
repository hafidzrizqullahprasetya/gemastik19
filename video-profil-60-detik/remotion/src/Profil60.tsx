import React from "react";
import { AbsoluteFill, Audio, Sequence, interpolate, staticFile, useCurrentFrame } from "remotion";
import { AppShot } from "./scenes/app";
import { EndCard, Mnemonic } from "./scenes/closing";
import { PhoneStory } from "./scenes/phone";
import { VerdictShot } from "./scenes/verdict";
import { C, FONT, SHOTS } from "./theme";
import { SFX_FILES } from "./sfx-manifest";
import { VO_FILES } from "./vo-manifest";

/*
 * Design read: video profil karya untuk juri dan penonton upacara, bahasa visual UI editorial
 * dari token brand Verifin (krem, arang, warna verdict, Geist = font app). Dial ENERGY 2 / RHYTHM 2 / MOTION 3.
 * Tanpa subtitle (permintaan tim); teks penting sudah tampil di layar.
 */

// Jadwal VO: mulai = awal shot + delay. Teks ada di naskah-vo-elevenlabs.md.
// Delay disetel dari jeda kata (ffmpeg silencedetect): "stop" di vo-03 jatuh di frame 564 (freeze).
const VO = [
  { file: "vo-01.mp3", shot: SHOTS.notif, delay: 12 },
  { file: "vo-02.mp3", shot: SHOTS.flags, delay: 20 },
  { file: "vo-03.mp3", shot: SHOTS.stop, delay: -3 },
  { file: "vo-04.mp3", shot: SHOTS.app, delay: 28 },
  { file: "vo-05.mp3", shot: SHOTS.checks, delay: 2 },
  { file: "vo-06.mp3", shot: SHOTS.putusan, delay: 20 },
  { file: "vo-07.mp3", shot: SHOTS.mnemonic, delay: 10 },
  { file: "vo-08.mp3", shot: SHOTS.end, delay: 18 },
];

// Sound effect: [file, frame absolut, volume]. Frame disamakan dengan animasi di tiap scene.
const SFX: [string, number, number][] = [
  ["sfx-notif.mp3", 48, 0.2],
  ...[270, 312, 358, 404].map((f): [string, number, number] => ["sfx-marker.mp3", f, 0.14]),
  ["sfx-whoosh.mp3", 486, 0.14],
  ["sfx-tap.mp3", 548, 0.2],
  ["sfx-stop.mp3", 564, 0.24],
  ["sfx-whoosh.mp3", 664, 0.12],
  ...[946, 980, 1000, 1028, 1068, 1122].map((f): [string, number, number] => ["sfx-tick.mp3", f, 0.36]),
  ["sfx-meter.mp3", 1156, 0.14],
  ["sfx-impact.mp3", 1206, 0.22],
  ...[1390, 1425, 1454].map((f): [string, number, number] => ["sfx-word.mp3", f, 0.16]),
  ["sfx-logo.mp3", 1626, 0.18],
];

/** Fade keluar singkat di ujung blok, dipakai hanya di sambungan yang latarnya sama. */
const FadeOut: React.FC<{ dur: number; frames: number; children: React.ReactNode }> = ({ dur, frames, children }) => {
  const f = useCurrentFrame();
  const o = interpolate(f, [dur - frames, dur], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return <AbsoluteFill style={{ opacity: o }}>{children}</AbsoluteFill>;
};

export const Profil60: React.FC = () => (
  <AbsoluteFill style={{ background: C.bg, fontFamily: FONT.sans }}>
    {/* shot 1–3: satu HP, satu kamera; berakhir di layar gelap "Stop, bentar." */}
    <Sequence from={0} durationInFrames={660}>
      <PhoneStory />
    </Sequence>
    {/* shot 4: dibuka dari gelap, jadi sambungannya menyatu */}
    <Sequence from={660} durationInFrames={240}>
      <FadeOut dur={240} frames={10}>
        <AppShot />
      </FadeOut>
    </Sequence>
    {/* shot 5–6: pemeriksaan → meter → bukti asli */}
    <Sequence from={900} durationInFrames={480}>
      <VerdictShot />
    </Sequence>
    {/* shot 7: latar beralih ke gelap di dalam shot */}
    <Sequence from={1380} durationInFrames={240}>
      <Mnemonic />
    </Sequence>
    {/* shot 8: latar beralih kembali ke krem */}
    <Sequence from={1620} durationInFrames={180}>
      <EndCard />
    </Sequence>

    {SFX.map(([file, at, vol], i) =>
      SFX_FILES.includes(file) ? (
        <Sequence key={`${file}-${i}`} from={at} durationInFrames={90}>
          <Audio src={staticFile(`sfx/${file}`)} volume={vol} />
        </Sequence>
      ) : null,
    )}
    {VO.map((v) =>
      VO_FILES.includes(v.file) ? (
        <Sequence key={v.file} from={v.shot.from + v.delay} durationInFrames={v.shot.dur - v.delay + 30}>
          <Audio src={staticFile(`vo/${v.file}`)} />
        </Sequence>
      ) : null,
    )}
  </AbsoluteFill>
);
