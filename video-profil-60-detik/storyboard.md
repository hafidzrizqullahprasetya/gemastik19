# Storyboard Video Profil Karya 60 Detik — Motion Graphic

**GEMASTIK XIX 2026 · Divisi VIII PPL · Tim Three Achilles (UGM) · Verifin**
Wajib untuk finalis (Panduan Umum 2026, Persyaratan Umum no. 13): video profil karya 60 detik, link YouTube diunggah saat daftar ulang **26–30 Oktober 2026**. Video ini diputar di upacara penutupan kalau Verifin juara, jadi harus bisa dipahami tanpa konteks video 10 menit.

Versi: draf 3, 17 Oktober 2026 (setelah audit antislop 001). Render: `remotion/out/verifin-profil-60-draf2.mp4`.

Design read: video profil karya untuk juri dan penonton upacara, bahasa visual UI editorial dari token brand Verifin. Dial ENERGY 2 / RHYTHM 2 / MOTION 3. **Tanpa subtitle**; teks penting tampil di layar.

## Konsep

Full motion graphic, **tanpa tokoh kartun dan tanpa take live**. Isinya:
- mockup HP dan chat grup (dibuat di Remotion, merek dipelesetkan: WhatsUp),
- tipografi kinetik dengan warna brand Verifin (krem `#faf8f4`, arang `#2c2825`, warna verdict dari app),
- animasi pengecekan paralel dan meter skor,
- **screenshot app asli** (`demo/hasil-v2/`, diambil 17 Okt 2026 dari commit `2b07f03`) untuk halaman utama, progres, dan laporan.

Produksi: kode Remotion di `remotion/`. VO dibuat tim di web ElevenLabs dari `naskah-vo-elevenlabs.md`, lalu file mp3-nya ditaruh di `remotion/public/vo/`.

## Timeline

| # | Waktu | Visual | VO |
|---|---|---|---|
| 1 | 0:00–0:08 | Judul kinetik "Loker sekarang datang dari grup chat." + HP berisi chat grup LOKER JOGJA 24 JAM, pesan broadcast loker masuk | Lowongan kerja sekarang datangnya dari grup chat… |
| 2 | 0:08–0:16 | Zoom ke pesan; baris yang berbahaya di-highlight merah satu per satu, daftar di kanan: Minta data pribadi · Minta biaya di depan · Formulir tak jelas · Gaji tak wajar | (Bang Jago) Kirim foto KTP, transfer biaya seragam, isi formnya. Gampang, toh? |
| 3 | 0:16–0:22 | Layar transfer Rp150.000 ke rekening pribadi, titik sentuh mendekati tombol Kirim → freeze, abu-abu, layar gelap, "Stop, bentar." | Sebelum transfer atau kirim KTP… stop, bentar. |
| 4 | 0:22–0:30 | Screenshot asli: halaman utama → teks ditempel → progres verifikasi. Chip: Teks · Poster · Link · Tanpa daftar akun · Progres langsung dari server | Tempel teks, poster, atau link-nya ke Verifin… |
| 5 | 0:30–0:38 | Hub Verifin dengan 6 kartu pemeriksaan yang berjalan bersamaan: Nomor HP, Perusahaan, Alamat & peta, Email & domain, Formulir, Laporan komunitas | Verifin memeriksa nomor, perusahaan, alamat, email, dan formulirnya sekaligus… |
| 6 | 0:38–0:46 | Meter skor naik ke **95** → badge BAHAYA, tiga alasan dari app → screenshot laporan asli | Putusannya hanya dari bukti… |
| 7 | 0:46–0:54 | Latar gelap: "Tempel. Tunggu. Tahu." + "Tahu sebelum kamu melamar." | Tempel. Tunggu. Tahu. |
| 8 | 0:54–1:00 | End card: logo, tagline, tim, UGM, GEMASTIK, atribusi | Verifin. Tahu sebelum kamu melamar. |

Skor 95, verdict BAHAYA, dan tiga alasan di shot 6 diambil dari `demo/hasil-v2/scam-fiktif.json`, bukan dikarang.

## Mengambil screenshot app

Screenshot untuk video 1 menit sekarang bisa diambil dari konfigurasi biasa (`verifin-backend` dan `verifin-frontend` di port 3000, `.claude/launch.json`). Kalau backend atau frontend dari `main` sedang jalan, restart dulu supaya memakai kode baru (perbaikan XAI dan cek nomor ada di commit `2b07f03`).

Set terbaru ada di `demo/hasil-v2/` (17 Okt 2026, kasus "PT Cuan Rebahan Sentosa", BAHAYA 95, 12 + 83 = 95). Tersedia juga screenshot per elemen: `el-verdict.png`, `el-faktor.png`, `el-kontribusi.png`.

## Yang masih harus dikerjakan

- [ ] **VO ElevenLabs**: 8 file mp3 → `remotion/public/vo/`, lalu timing disesuaikan.
- [ ] **Ambil ulang screenshot** setelah perbaikan app (sesi terpisah) dan setelah nama PT fiktif diganti. Nama sekarang ("PT Sejagat Energi") memunculkan Facebook perusahaan nyata di laporan.
- [ ] Kalau grafik kontribusi sudah tampil di app, pertimbangkan menambahkannya di shot 6.
- [ ] Musik latar bebas royalti (opsional, volume rendah di bawah VO).
- [ ] Cek ulang durasi ≤ 60 detik, lalu upload YouTube dengan judul sesuai format panitia.

## Render

```bash
cd video-profil-60-detik/remotion && ./node_modules/.bin/remotion render src/index.ts Profil60 out/verifin-profil-60.mp4
```

Preview interaktif: `bun run studio`.
