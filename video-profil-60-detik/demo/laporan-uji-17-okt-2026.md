# Laporan Uji Verifin untuk Video — 17 Oktober 2026

App dijalankan lokal (`verifin-app` branch `main`, commit `e5ac4a2`; backend memakai `.env` asli: Supabase, LLM `ag/gemini-3.8-flash-medium`, SearXNG pribadi). Input dimasukkan lewat UI dengan Playwright (1440×900, retina). Semua screenshot, JSON respons, dan teks halaman ada di `hasil/`.

> Catatan: verifikasi ini tersimpan di database Supabase yang sama dengan produksi (riwayat dan cache).

## 1. Hasil per kasus

| Kasus | Input | Waktu | Verdict | Skor | Cache? |
|---|---|---|---|---|---|
| Scam fiktif | Teks `kasus-scam-fiktif.txt` | 40 dtk | **BAHAYA** | 95 | Tidak |
| Loker nyata: The Biker Shop Jogja | Teks dari `test/test-teks.md` | 45 dtk | **AMAN** | 12 | Tidak |
| Loker nyata: VinFast (poster) | Gambar `test/ocr.webp` | 54 dtk | **AMAN** | 25 | Tidak |
| Loker nyata: PT SISI (Threads) | Link `test/test-link.md` | 2,5 dtk | **AMAN** | 25 | **Ya**, hasil lama dari DB |

## 2. Cek keaslian mandiri (tanpa Verifin)

Dicek lewat Google di browser bawaan dan WebSearch, 17 Okt 2026.

| Loker | Temuan | Kesimpulan saya | Verdict Verifin benar? |
|---|---|---|---|
| **The Biker Shop Jogja** | Nomor 0857-3832-5536 dan `hrdthebikershop@gmail.com` dipakai konsisten di puluhan posting rekrutmen The Biker Shop (Malang, Purwokerto, Bekasi, Surabaya, Gading Serpong), termasuk di pusat karier Politeknik (nscpolteksby.ac.id). Alamat Jl. Parangtritis 38 cocok dengan Google Maps dan IG resmi. Form berjudul "FORM RECRUITMENT THE BIKER SHOP BY DJOKO MOTOR GROUP", tidak minta biaya. | Asli. Nomor itu kontak HRD pusat, bukan nomor dealer. | Ya |
| **VinFast (poster)** | Email `pt.jogjaenergibersih@gmail.com` → PT Jogja Energi Bersih adalah operator dealer **VinFast Mlati/Melati** (motor listrik), Jl. Magelang Km 7 Sleman, diresmikan 29 Jul 2026 (Suara.com, KR Jogja, Harian Jogja). Lowongan Sales PT ini tercatat di lokerjogja.id dan gudangkarir.com. Nomor 087852676658 milik seorang sales ("Doni") yang memakainya untuk promosi VinFast Jogja, dan poster yang sama disebar ulang oleh akun lokerjogja_info. | Asli, tapi dari dealer **VinFast Mlati**, bukan "VinFast Yogyakarta" Berbah (PT Sumber Buana Motor) yang muncul di catatan pencarian manual tim. | Ya, AMAN wajar. Tapi Verifin tidak menemukan bukti di atas (lihat temuan B5) |
| **PT SISI (Threads)** | Glints memuat lowongan **Fullstack Developer, PT Sinergi Informatika Semen Indonesia, Kab. Karawang, kontrak** (8 Sep 2026). Akun loker lain (sharey.loker) juga menyebar "Fullstack Developer (Project-Based) PT SISI Karawang". | Asli. | Ya |
| **Scam fiktif** | Sengaja dibuat: biaya seragam ke rekening pribadi, minta selfie KTP, gaji 15 jt tanpa interview, email gratisan. | Penipuan (by design) | Ya |

**Kesimpulan:** keempat verdict sesuai kenyataan. Masalahnya ada di detail bukti dan konsistensi skor, bukan di verdict akhir.

## 3. Temuan yang berdampak ke video

### A. Harus dibereskan sebelum rekam demo

1. **Grafik kontribusi (XAI) tidak pernah muncul di halaman laporan.** Halaman `/report/{id}` selalu memuat data dari `GET /api/v1/cases/{id}`, dan di respons itu `shap_explanation` bernilai `null` (dicek langsung lewat fetch untuk kasus `d485e46e`). Data SHAP ada di respons verifikasi awal, tapi tidak tersimpan ke DB. Akibatnya bagian "Detail Teknis" hanya menampilkan panel bukti OSINT, tanpa grafik. Storyboard S8 ("zoom pelan ke grafik kontribusi") tidak bisa direkam.
2. **Skor akhir tidak sama dengan `base + Σ kontribusi`** di 3 dari 4 kasus:

   | Kasus | 12 + Σ kontribusi | Skor akhir |
   |---|---|---|
   | Scam fiktif | 12 + 59,29 + 11,86 + 11,86 − 10 = **85** | 95 |
   | The Biker Shop | 12 + 30 + 10 + 8 − 10 = **50** | 12 |
   | VinFast | 12 + 8,48 + 4,52 = **25** | 25 ✓ |
   | PT SISI (cache lama) | 12 + 13 − 10 = **15** | 25 |

   Overlay S8 "Skor Risiko = 12 + Σ kontribusi bukti" saat ini tidak benar. Penyebabnya belum saya telusuri (kemungkinan ada kalibrasi atau override setelah atribusi dihitung).
3. **Kontribusi palsu "Entitas Terhubung ke Jaringan Penipuan" +30** pada kasus The Biker Shop, padahal deskripsinya sendiri bilang "muncul di **0** kasus BAHAYA".
4. **Cek nomor (Kaspersky) rusak:** `'Response' object has no attribute 'css_first'`, sehingga statusnya `UNAVAILABLE`. Tapi **UI tetap menampilkan "Bersih dari laporan penipuan"** dan "KONTAK TERVERIFIKASI: Bersih". Ini klaim yang tidak didukung bukti, padahal anti-halusinasi adalah poin jual utama.
5. **Nama perusahaan fiktif bertabrakan dengan perusahaan nyata.** Untuk "PT Sejagat Energi Tbk", panel Jejak Digital menampilkan halaman Facebook **"PT Darma Energi Sejagat Gas"**, perusahaan nyata, tepat di laporan penipuan. Itu juga dihitung sebagai faktor aman −10. **Nama fiktif harus diganti** dan dicek dulu di Google, misalnya "PT Cuan Rebahan Sentosa".

### B. Bisa diperbaiki atau cukup diakali di naskah

1. Link Threads PT SISI selalu kena cache URL (tidak ada TTL), jadi hasilnya dari versi kode lama. Untuk demo, hapus kasus lamanya dari DB atau tempel teksnya.
2. "Jejak publik terverifikasi" juga memasukkan akun yang tidak terkait (toko cover jok "@thebikershopjogja", FB pribadi). Label "terverifikasi" berlebihan.
3. Decision path menulis "1 alamat" atau "2 alamat" padahal `addresses` kosong (kasus scam dan SISI).
4. Badge "N" (indikator dev Next.js) muncul di pojok kiri setiap screenshot. Untuk rekaman, pakai `bun run build && bun run start`.
5. Poster VinFast: perusahaan yang terekstrak hanya "VINFAST", dan pencarian web mengembalikan 0 hasil relevan. Petunjuk terkuat (nama PT di alamat email) tidak dipakai. Untuk demo ini aman karena verdict benar, tapi juri bisa bertanya.
6. Kasus scam belum punya nomor HP dan link formulir, karena tim belum menyiapkan SIM cadangan dan Google Form sendiri (storyboard 10 menit Bagian 10). Akibatnya probe nomor dan formulir tidak terdemokan, dan graf penipuan hanya 2 node.

## 4. Aset yang sudah tersedia (`hasil/`)

- `00-home.png`: halaman utama terbaru
- `{kasus}-1-input.png`, `{kasus}-2-progres-1..6.png`, `{kasus}-3-laporan.png`, `{kasus}-3-laporan-full.png`
- `{kasus}.json`: respons lengkap (verdict, skor, faktor, entitas, OSINT, SHAP)
- `{kasus}-teks-laporan.txt`, `{scam-fiktif,nyata-teks}-detail-teknis.txt`

Screenshot ini cukup untuk animasi Remotion video 60 detik (halaman utama, progres, kartu verdict BAHAYA 95). Bagian grafik kontribusi menunggu perbaikan A1.

## 5. Uji ulang setelah perbaikan A1–A4 (17 Okt 2026, sore)

Perbaikan dikerjakan di `verifin-app` branch `hafidz` (worktree `~/orca/workspaces/verifin-app/hafidz`), **belum di-commit**. App dijalankan lokal dengan `.env` yang sama (LLM `ag/gemini-3.8-flash-medium`, Supabase bersama). Frontend di port 3100 karena port 3000 sedang dipakai Remotion Studio. Cache verifikasi lama dilewati karena `CACHE_SCHEMA_VERSION` dinaikkan ke 9, dan hasil baru menimpa baris kasus yang sama di DB.

| Kasus | Case ID | Verdict | Skor | 12 + Σ kontribusi | Cek nomor |
|---|---|---|---|---|---|
| Scam fiktif | `d485e46e` | **BAHAYA** | 95 | 12 + 40 + 37 − 10 + 8 + 8 = **95** ✓ | Tidak ada nomor (NOT_PROVIDED) |
| The Biker Shop (teks) | `6b4b9b4e` | **AMAN** | 12 | 12 + 10 − 10 + 8 − 8 = **12** ✓ | Kaspersky **COMPLETED**: NETRAL, "Tidak ada laporan spam" → "Bersih" kini didukung bukti |

Rincian kontribusi:

- **Scam fiktif:** Permintaan Biaya/Transfer +40, Penyesuaian Penalaran AI +37, Hasil Web Relevan Ditemukan −10, Kata Kunci Penipuan (1 match) +8, Kontak Hanya Email Gratisan +8.
- **The Biker Shop:** Alamat Fisik Belum Terverifikasi Exact +10, Hasil Web Relevan Ditemukan −10, Kontak Hanya Email Gratisan +8, Penyesuaian Penalaran AI −8.

Status tiap temuan bagian 3A:

1. **A1 Grafik XAI:** sudah tampil di `/report/{id}`. Sebelumnya kasus disimpan ke DB sebelum SHAP dihitung, sekarang SHAP dihitung dulu lalu ikut tersimpan. `GET /api/v1/cases/{id}` mengembalikan `shap_explanation` untuk kedua kasus.
2. **A2 Skor ≠ jumlah kontribusi:** bobot bukti tidak lagi diskalakan diam-diam. Selisih antara skor LLM dan bobot bukti tampil sebagai baris **"Penyesuaian Penalaran AI"** (bar abu-abu), dan di bawah grafik ada baris `12 +83.0 = 95 (nilai dasar + Σ kontribusi)`. Overlay S8 sebaiknya berbunyi "Skor = 12 + Σ kontribusi bukti + penyesuaian penalaran AI". Untuk kasus scam, penyesuaian AI (+37) adalah bar terbesar kedua, jadi narasi perlu menjelaskannya (misalnya: AI membaca konteks yang belum punya fitur terukur, seperti selfie KTP dan gaji tak wajar).
3. **A3 "Jaringan Penipuan" palsu:** ada dua penyebab. (a) Tiga laporan komunitas The Biker Shop berstatus **rejected** oleh admin tetapi tetap dihitung. Sekarang hanya laporan `approved` yang dihitung, dan laporan itu jadi fitur terpisah ("Dilaporkan Komunitas"). (b) Saat uji ulang, kasus scam cocok dengan **barisnya sendiri** dari 17 Okt dan dihitung dua kali lewat PT dan email. Sekarang baris dengan hash teks yang sama dikecualikan dan yang dihitung adalah kasus unik.
4. **A4 Cek nomor:** parser Kaspersky diperbaiki karena scrapling 0.4 tidak punya `css_first`. Validator sekarang mengisi `probe_status` dan `reputation_status`. UI menampilkan **"Tidak dapat dicek"** kalau probe gagal, dan sudah dicek pada kasus VinFast lama (`efc02f34`) yang probe-nya error.

Screenshot baru di `hasil/`: `scam-fiktif-5-xai-setelah-fix.jpg`, `nyata-teks-5-xai-setelah-fix.jpg`, `nyata-poster-5-kontak-tidak-dapat-dicek.jpg`, `nyata-poster-6-panel-nomor-tidak-dapat-dicek.jpg`. File JSON lama di `hasil/` masih hasil sebelum perbaikan.

Catatan sisa:

- Kasus lama yang tersimpan sebelum perbaikan (VinFast `efc02f34`, PT SISI `18e64599`) tetap tanpa grafik XAI sampai diverifikasi ulang.
- A5 (nama fiktif "PT Sejagat Energi Tbk" bertabrakan dengan perusahaan nyata) belum disentuh. Faktor aman −10 "Hasil Web Relevan Ditemukan" pada kasus scam masih berasal dari tabrakan nama ini.
