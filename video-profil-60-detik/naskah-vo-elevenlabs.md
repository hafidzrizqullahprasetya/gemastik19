# Naskah VO ElevenLabs — Video Profil 60 Detik

Generate **satu file per baris** supaya mudah disinkronkan. Simpan dengan nama persis seperti kolom "File", lalu taruh di:

```
video-profil-60-detik/remotion/public/vo/
```

Setelah semua file ada, Claude mengukur durasinya dan menyesuaikan timing animasi.

## Pengaturan yang disarankan

- **Model:** model multilingual yang mendukung bahasa Indonesia (pilih yang ada label Indonesian di daftar model).
- **Narator:** suara laki-laki muda, hangat, tempo sedang, tidak seperti iklan TV. Pakai suara yang sama untuk semua baris narator.
- **Bang Jago:** suara lain yang lebih cempreng/bersemangat, gaya pedagang pinggir jalan.
- **Stability** agak rendah untuk Bang Jago (lebih ekspresif), sedang untuk narator.
- Kalau pelafalan aneh, ganti ejaan di teks (misalnya "to" jadi "toh"), bukan di video.
- Paket gratis ElevenLabs wajib atribusi. End card sengaja tanpa teks atribusi, jadi tulis "Suara dibuat dengan ElevenLabs" di deskripsi YouTube dan di Surat Pernyataan Penggunaan AI.

## Baris VO

Target durasi = jatah waktu shot. Kalau hasilnya lebih panjang 0,5 detik, tidak apa-apa; Claude menyesuaikan.

| File | Shot | Suara | Target | Teks yang ditempel |
|---|---|---|---|---|
| `vo-01.mp3` | 1 · Notif loker | Narator | ±6 dtk | Lowongan kerja sekarang datangnya dari grup chat. Gaji besar, tanpa pengalaman, slot terbatas. |
| `vo-02.mp3` | 2 · Lapak | Bang Jago | ±6 dtk | Kirim foto KTP, transfer biaya seragam, isi formnya. Gampang, toh? |
| `vo-03.mp3` | 3 · Stop | Narator | ±4 dtk | Sebelum transfer atau kirim KTP… stop, bentar. |
| `vo-04.mp3` | 4 · Tempel | Narator | ±6 dtk | Tempel teks, poster, atau link-nya ke Verifin. Nggak perlu bikin akun. |
| `vo-05.mp3` | 5 · Saksi | Narator | ±7 dtk | Verifin memeriksa nomor, perusahaan, alamat, email, dan formulirnya sekaligus, plus jejak laporan komunitas. |
| `vo-06.mp3` | 6 · Putusan | Narator | ±6 dtk | Putusannya hanya dari bukti. Skornya dijelaskan, alasannya bisa dibaca. |
| `vo-07.mp3` | 7 · Mnemonic | Narator | ±4 dtk | Tempel. Tunggu. Tahu. |
| `vo-08.mp3` | 8 · End card | Narator | ±3 dtk | Verifin. Tahu sebelum kamu melamar. |

### Teks polos untuk disalin satu per satu

```
Lowongan kerja sekarang datangnya dari grup chat. Gaji besar, tanpa pengalaman, slot terbatas.
```
```
Kirim foto KTP, transfer biaya seragam, isi formnya. Gampang, toh?
```
```
Sebelum transfer atau kirim KTP… stop, bentar.
```
```
Tempel teks, poster, atau link-nya ke Verifin. Nggak perlu bikin akun.
```
```
Verifin memeriksa nomor, perusahaan, alamat, email, dan formulirnya sekaligus, plus jejak laporan komunitas.
```
```
Putusannya hanya dari bukti. Skornya dijelaskan, alasannya bisa dibaca.
```
```
Tempel. Tunggu. Tahu.
```
```
Verifin. Tahu sebelum kamu melamar.
```

---

# Sound Effect (ElevenLabs → Sound Effects)

Generate satu file per baris, simpan dengan nama di kolom "File" ke `remotion/public/sfx/`. Prompt dalam bahasa Inggris karena model SFX lebih akurat begitu. Set durasi sesuai kolom (kalau ada opsi durasi), dan **jangan pakai musik**.

| File | Dipakai di | Durasi | Prompt |
|---|---|---|---|
| `sfx-notif.mp3` | Pesan loker masuk (0:01.6) | 1 dtk | Short soft smartphone message notification chime, single clean ping, no music |
| `sfx-marker.mp3` | Tiap baris berbahaya ditandai (0:09–0:13, 4×) | 0.5 dtk | Quick highlighter marker swipe on paper, short and crisp |
| `sfx-whoosh.mp3` | Layar HP pindah, jendela app naik (0:16.2, 0:22.1) | 0.6 dtk | Soft subtle UI whoosh transition, airy, short |
| `sfx-tap.mp3` | Jari menyentuh tombol Kirim (0:18.3) | 0.3 dtk | Soft smartphone screen tap, single light click |
| `sfx-stop.mp3` | "Stop, bentar." (0:18.8) | 1 dtk | Sudden tape stop, audio slowing down to a halt, short, dramatic but not loud |
| `sfx-tick.mp3` | Tiap pemeriksaan selesai (0:32–0:35, 6×) | 0.2 dtk | Tiny clean UI confirmation tick, subtle |
| `sfx-meter.mp3` | Meter skor naik ke 95 (0:38.5–0:40.2) | 1.8 dtk | Rising digital counter ticks speeding up, clean interface sound, ends abruptly |
| `sfx-impact.mp3` | Badge BAHAYA muncul (0:40.2) | 0.8 dtk | Deep soft low impact thud, cinematic but restrained |
| `sfx-word.mp3` | Tempel / Tunggu / Tahu (0:46.3, 0:47.7, 0:49.1) | 0.5 dtk | Soft low whoosh with gentle thump, minimal, for kinetic typography |
| `sfx-logo.mp3` | Logo end card (0:54.2) | 2 dtk | Gentle warm resolving chime, single soft tone with short tail, hopeful |
