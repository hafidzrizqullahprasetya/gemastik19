// Tulis ulang daftar file VO/SFX dari isi public/vo dan public/sfx, supaya render memakai file yang benar-benar ada.
import { readdirSync, writeFileSync } from "node:fs";

const list = (dir) => readdirSync(`public/${dir}`).filter((f) => f.endsWith(".mp3")).sort();
const write = (file, name, items) =>
  writeFileSync(`src/${file}`, `// Dibuat otomatis oleh scripts/sync-media.mjs dari public/. Jangan diedit manual.\nexport const ${name}: string[] = ${JSON.stringify(items, null, 2)};\n`);

const vo = list("vo");
const sfx = list("sfx");
write("vo-manifest.ts", "VO_FILES", vo);
write("sfx-manifest.ts", "SFX_FILES", sfx);
console.log(`VO: ${vo.join(", ") || "-"}\nSFX: ${sfx.join(", ") || "-"}`);
