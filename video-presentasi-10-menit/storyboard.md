# Storyboard Video Final 10 Menit — "Sidang Lowongan"

**GEMASTIK XIX 2026 · Divisi VIII PPL · Tim Three Achilles (UGM) · Verifin**
Target durasi: **9:40** (sisa ±20 detik untuk cadangan; batas panduan maksimal 10:00)
Format: render 1080p, export MP4 720p sesuai panduan.
Revisi 3 — 17 Oktober 2026: produksi diganti jadi **take live + motion Remotion + rekaman layar asli**. Google Flow dan kartun tidak dipakai. Data disesuaikan dengan app setelah perbaikan (commit `2b07f03`).

---

## 1. Konsep Singkat

Video ini **parodi sidang pengadilan**. Lowongan kerja dari grup chat dan media sosial "disidang" di dalam Verifin, dan setiap modul sistem diperankan sebagai tokoh sidang: juru baca, para saksi, detektif benang merah, dan hakim. Juri menontonnya seperti sketsa komedi, tapi tiap adegan menyampaikan satu hal teknis. Setelah itu adegan **dipotong ke rekaman layar aplikasi asli** yang menunjukkan hal yang sama, jadi demonya tetap 100% nyata.

Format sidang dipilih karena memang cocok dengan cara kerja Verifin, yang *evidence-based*: putusan hanya boleh dari bukti (anti-halusinasi), skor dijelaskan per bukti (XAI), dan verdict-nya tiga tingkat. Komedinya jadi tidak terasa ditempel.

### Posisi Verifin yang ditekankan di seluruh video

> **Verifin untuk lowongan yang beredar di kanal informal** (grup/broadcast chat, grup channel, utas media sosial, poster yang di-forward), **bukan** untuk lowongan di portal resmi yang sudah punya proses verifikasi sendiri.

Kalimat kunci ini muncul tiga kali:
- di S1, lewat "cabang" lapak Bang Jago;
- di S3, saat menjelaskan kenapa pengecek yang sudah ada tidak cukup;
- di S12, saat menjelaskan siapa penggunanya.

### Yang diambil dari referensi BCA, dan yang diubah

| Referensi BCA | Teknik yang dipinjam | Versi Verifin (dimodifikasi) |
|---|---|---|
| "Don't Know Kasih No": narator berjas di depan kolam umpan pancing | Pelaku yang "menjual umpan", pembuka yang memotong dirinya sendiri | Bukan memancing, tapi **lapak pedagang obat pinggir jalan** dengan toa. Pemotongnya host: "Stop, bentar." |
| "Ayo Bintangin": ruang putih, orang berkostum memperagakan sistem | Sistem diperagakan oleh manusia berkostum | Bukan ruang putih dengan bintang biru, tapi **ruang sidang berwarna brand Verifin** (krem `#faf8f4` dan arang `#2c2825`). Tokoh memakai **lanyard warna verdict** (hijau/kuning/merah) |
| Mnemonic B-C-A diucapkan bersama | Mnemonic tiga kata + "ulang dari awal" | **"Tempel – Tunggu – Tahu"**, sesuai tiga langkah nyata di aplikasi |
| Iklan edukasi murni | — | Ditambah **lapisan teknis halus** (OSINT paralel, anti-halusinasi, skor aditif, fraud graph) dan satu segmen tur arsitektur |

---

## 2. Model Produksi

Setiap adegan diberi label produksi:

| Label | Arti | Dibuat dengan |
|---|---|---|
| **LIVE** | Tim tampil di depan kamera | Kamera/HP di tripod, set A/B/C |
| **SCREEN** | Rekaman layar aplikasi Verifin asli | OBS 1920×1080 atau Playwright, dari app lokal versi `main` |
| **MOTION** | Grafik bergerak: judul, kartu angka, diagram, overlay, bingkai rekaman layar | Remotion (kode), memakai ulang komponen video 60 detik |

Sebagian besar adegan adalah gabungan. Contohnya S8: tim tampil LIVE, papan skornya MOTION yang ditempel di atas rekaman, lalu dipotong ke SCREEN.

**Alur editing:** semua MOTION dirender dari Remotion per potongan (`M01.mp4`, `M02.mp4`, dst.; overlay dengan latar transparan dirender sebagai ProRes 4444 `.mov`). Potongan itu lalu disusun bersama take LIVE dan rekaman SCREEN di editor (CapCut atau DaVinci Resolve). Remotion tidak dipakai untuk menyusun seluruh 10 menit, supaya take live tetap mudah dipotong di editor biasa.

---

## 3. Aturan Main

1. **Pemeran hanya 3 orang.** Korban tidak diperankan: kamera menjadi **POV pencari kerja**, jadi penipu bicara langsung ke kamera ("Kamu, iya kamu…").
2. **Take live hanya untuk adegan yang memang butuh orang.** Penjelasan panjang memakai VO dan MOTION.
3. **Angka skor, verdict, status probe, dan graf selalu diambil dari aplikasi saat rekaman**, tidak ditulis dari naskah. Tanda `[DARI APP]` diisi dari JSON respons kasus yang direkam (cara ambil: Bagian 12). Motion yang menampilkan angka membaca file JSON itu, bukan angka ketikan.
4. **Dialog bergaya ngobrol mahasiswa Jogja** ("aku/kamu", sesekali "lho", "wis", "piye"). Hakim sengaja bicara super formal karena kontrasnya lucu. Dialog di bawah adalah patokan, jadi silakan improvisasi selama poin teknisnya tetap terucap.
5. **Tidak SARA dan tidak politik.** Tidak ada candaan soal suku, agama, ras, golongan, partai, atau pejabat. Yang jadi sasaran lelucon hanya penipu dan absurdnya dunia cari kerja.
6. **Tidak ada merek nyata di adegan sketsa**, semuanya dipelesetkan (lihat Bagian 4). Ada dua pengecualian yang disengaja, dijelaskan di Bagian 4.
7. **Aturan visual motion** (hasil audit antislop video 60 detik):
   - Teks motion tidak boleh menutupi UI asli. Penjelasan ditulis sebagai anotasi bergaris di luar jendela app.
   - Zoom ke screenshot memakai kamera fokus (area muat utuh + sorotan), tidak memotong kata secara tidak sengaja.
   - Tidak ada label uppercase mono ber-tracking lebar dan tidak ada chip kapsul. Label memakai kalimat biasa.
   - Satu titik fokus per shot; animasi pop (spring) hanya untuk momen utama (badge verdict, ketukan palu).
   - Subtitle **opsional**. Kalau dipakai, semua motion menyisakan zona aman bawah 150 px.

---

## 4. Daftar Plesetan Merek

| Aslinya | Di video (dialog, properti, layar HP mockup) |
|---|---|
| WhatsApp | **WhatsUp** |
| Telegram | **Telegrem** |
| Threads | **Thredz** |
| TikTok | **TikTuk** |
| Instagram | **Instagrem** |
| Google / Google Form | **Gugel** / **Gugel Form** |
| Gmail / email gratisan | **"email gratisan"** |
| Google Safe Browsing / pengecek link | **"pengecek link"** (generik) |
| Aplikasi cek nomor (Kaspersky Who Calls, dsb.) | **"aplikasi cek nomor"** |
| OpenStreetMap | **"peta"** |
| Bank / e-wallet | **"rekening pribadi"**, tanpa nama bank |
| Perusahaan yang dicatut penipu | Nama PT **fiktif** (lihat Bagian 12 untuk cara memilih nama yang aman) |

**Pengecualian (tidak dipelesetkan):**
- **Rekaman layar aplikasi Verifin.** Panel bukti di app mencantumkan nama sumber OSINT asli. Ini atribusi sumber bukti, inti dari XAI. Kalau disamarkan, juri bisa mengira datanya karangan. **Rekomendasi: biarkan.**
- **Nama teknologi di S11** (FastAPI, Next.js, PostgreSQL, dsb.) dan **sitasi data** (BPS, Kemenlu, laporan GASA). Keduanya bagian dari penilaian teknis dan kejujuran sumber, bukan iklan merek. Sitasi cukup ditulis kecil di pojok layar.
- **Nama perusahaan asli di kasus uji S9** (bengkel, dealer, anak usaha BUMN) **di-blur** di rekaman layar, dan di dialog hanya disebut secara generik.

> ⚠️ Nama "PT Sejagat Energi" dari revisi sebelumnya **tidak dipakai lagi**: di app, nama itu memunculkan Facebook perusahaan nyata ("PT Darma Energi Sejagat Gas") di laporan penipuan.

---

## 5. Konteks Indonesia 2026 yang Dipakai (sudah diverifikasi)

Hanya konteks yang aman (non-SARA, non-politik) dan relevan dengan loker. Semua sumber dibuka langsung pada 17 Oktober 2026.

| Konteks | Dipakai di | Sumber |
|---|---|---|
| Hoaks loker di **Threads** yang tautan profilnya mengarah ke **formulir digital** peminta data pribadi (nama, provinsi, nomor WA/Telegram) | S1, S6 | Jala Hoaks Pemprov DKI, "[HOAKS] Lowongan Pekerjaan di Shell Indonesia", 1 Sep 2026 — jalahoaks.jakarta.go.id |
| **"Misi berbayar" di grup Telegram**: dimasukkan ke grup tanpa izin, disuruh like/follow, diberi komisi kecil, lalu diminta deposit. Kutipan Diskominfo: kerja "sambil rebahan" tapi hasilnya jutaan patut dicurigai | S1, S13 | Kompas.tv, "Ciri-Ciri Penipuan Misi Berbayar di Telegram…", 25 Apr 2026 — kompas.tv/info-publik/665037 |
| **Fresh graduate dituntut sudah berpengalaman** (lelucon klasik "fresh graduate, pengalaman 5 tahun") | S1, S3 | Depok Pos, "Fresh Graduate Dituntut Berpengalaman, tetapi Kesempatan Kerja Masih Terbatas", Okt 2026 (dari hasil Google News, artikel belum dibuka) |
| **Job fair membludak** (Job Fair Jakarta Barat 2026: 3.450 lowongan, 22–23 Sep) | S3 | Kabar24, Sep 2026 (dari hasil Google News, artikel belum dibuka) |
| **Konten buatan AI** di mana-mana (poster dan foto "HRD" buatan AI) | S1, S5 | Tren umum. Tidak ada klaim angka, jadi tidak perlu sitasi |

> ⚠️ Video ditonton juri sekitar 11–12 November. Sebelum final edit, cek lagi apakah ada tren loker baru. Lagu viral **tidak dipakai sebagai audio** karena masalah hak cipta.

---

## 6. Pemeran & Kostum (sesuai pembagian peran di proposal)

| Anggota | Peran di proposal | Tokoh di video | Kostum & properti |
|---|---|---|---|
| **Hafidz** | Tech Lead & AI Engineer (NER, LLM reasoning, XAI) | **Host** · **Juru Baca** (OCR + NER) · **Hakim** (LLM + XAI) | Host: kemeja biasa. Juru Baca: kacamata tebal + kaca pembesar karton. Hakim: toga dari kain hitam, palu kayu |
| **Akmal** | Backend & OSINT Engineer (OSINT, Fraud Graph, DB, API) | **5 Saksi OSINT** (efek kloning) · **Detektif Benang Merah** | Kaos krem + lanyard per saksi (FORMULIR, NOMOR, PENCARIAN, PETA, EMAIL & DOMAIN). Detektif: topi, benang wol merah, papan gabus |
| **Matthew** | Frontend & Integration (UI/UX, visualisasi graf, community monitoring) | **Bang Jago** (penjual loker abal-abal) · **Panitera** (pemandu UI) | Bang Jago: kumis tempel, jaket jeans, kalung emas mainan, toa, 3 HP mainan berlabel cabang. Panitera: kemeja rapi, map berkas, kartu antrean |

Gag berulang: Bang Jago dan Panitera mukanya sama. Di S14 ada yang nyeletuk soal itu.

---

## 7. Set Lokasi (3 set, cukup di kos/lab)

| Set | Isi | Dipakai di |
|---|---|---|
| **A — Lapak Loker** | Meja lipat, spanduk kertas "LOKER CUAN 15 JT — TANPA PENGALAMAN", toa, brosur, tiga papan kecil "CABANG WhatsUp / Telegrem / Thredz", lampu kuning | S1, S14 |
| **B — Ruang Sidang Verifin** | Backdrop kain krem, meja hakim bertaplak arang, bangku saksi panjang, papan gabus. **Papan skor tidak perlu dibuat**: diganti motion M13 | S4–S9, S13 |
| **C — Meja Kerja Tim** | Laptop + monitor yang membuka app, sticky notes | S2, S3, S11 |

Untuk adegan yang nanti ditimpa motion (S5, S8, S13), sisakan ruang kosong di sisi kanan frame dan kunci tripod supaya overlay tidak menabrak pemeran.

---

## 8. Timeline Ringkas

| # | Waktu | Durasi | Segmen | Produksi | Motion | Teknis yang tersampaikan |
|---|---|---|---|---|---|---|
| S1 | 0:00–0:40 | 40s | Lapak Loker Bang Jago | LIVE | M01, M02 | Modus di 3 kanal informal: biaya, KTP, formulir, gaji tak wajar |
| S2 | 0:40–1:20 | 40s | "Stop, bentar." | LIVE → MOTION | M03, M04, M05 | Data masalah (BPS, GASA, Kemenlu) |
| S3 | 1:20–1:55 | 35s | Cek manual itu capek | LIVE + MOTION | M06 | Kenapa detektor satu titik tidak cukup → inovasi integratif |
| S4 | 1:55–2:30 | 35s | Sidang dibuka: Panitera | LIVE + SCREEN | M07, M08 | 3 kanal input, tanpa registrasi, progres real-time (SSE) |
| S5 | 2:30–3:15 | 45s | Juru Baca | LIVE + MOTION + SCREEN | M09, M10 | OCR + pra-pemrosesan kontras, NER hibrida regex + LLM, fallback |
| S6 | 3:15–4:20 | 65s | Para Saksi bicara bareng | LIVE kloning + MOTION + SCREEN | M11 | 5 probe OSINT paralel, status tidak tersedia tidak menggagalkan |
| S7 | 4:20–5:00 | 40s | Detektif Benang Merah | LIVE + MOTION + SCREEN | M12 | Fraud Network Graph + laporan komunitas |
| S8 | 5:00–6:10 | 70s | Putusan Hakim | LIVE + MOTION + SCREEN | M13, M14, M15 | LLM terikat bukti, skor aditif `12 + Σ`, ambang 0–39 / 40–74 / 75–100 |
| S9 | 6:10–6:50 | 40s | Sidang kilat: kasus nyata | SCREEN + MOTION + LIVE | M16, M17 | 3 kanal pada lowongan nyata; "AMAN ≠ jaminan legal" |
| S10 | 6:50–7:20 | 30s | Komunitas & moderasi | SCREEN + MOTION + VO | M18 | Laporan dimoderasi admin (mencegah fitnah) |
| S11 | 7:20–8:20 | 60s | Tur Markas | MOTION + VO + LIVE singkat | M19, M20, M21, M22 | Arsitektur, stack, caching, pengujian, Scrum |
| S12 | 8:20–8:55 | 35s | Dampak & keberlanjutan | MOTION + VO | M23, M24 | Kanal informal, TEDI SV UGM, API, biaya, flywheel komunitas |
| S13 | 8:55–9:25 | 30s | Tempel – Tunggu – Tahu | LIVE + MOTION | M25 | Ringkasan cara pakai |
| S14 | 9:25–9:40 | 15s | Bang Jago kena sendiri + credit | LIVE + SCREEN + MOTION | M26 | — |

Porsi layar aplikasi asli sekitar 3,5–4 menit (S4–S10). Ini bagian "demo karya" yang diminta panduan. Total motion sekitar 4 menit, dengan ±1,5 menit di antaranya berupa overlay di atas take live.

---

## 9. Naskah Lengkap per Adegan

> Patokan tempo bicara santai sekitar 2–2,5 kata per detik. Panjang dialog sudah disesuaikan dengan durasi adegannya.

### S1 — Lapak Loker (0:00–0:40) · LIVE Set A

**Visual:** POV kamera berjalan mendekati lapak. Bang Jago menyalakan toa. Di meja ada tiga papan kecil: CABANG WhatsUp, CABANG Telegrem, CABANG Thredz.

> **BANG JAGO** *(toa)*: Lokeeer, lokeeer! Fresh graduate merapat! Di tempat lain dicari fresh graduate pengalaman lima tahun. Di sini? **Tanpa pengalaman!** Gaji lima belas juta, kerja sambil rebahan!
>
> *(turunkan toa, ke kamera, ramah)* Kamu, iya kamu. Lagi nyari kerja to? Kelihatan dari mukanya.
>
> *(tunjuk papan WhatsUp)* Cabang WhatsUp: kirim foto KTP, transfer biaya seragam seratus lima puluh ribu. Murah to?
> *(tunjuk papan Telegrem)* Cabang Telegrem: kamu dimasukin grup, tugasnya cuma like video, dapat komisi. Nanti tinggal deposit sedikit.
> *(tunjuk papan Thredz)* Cabang Thredz: klik link di bio, isi Gugel Form. Nama, provinsi, nomor WhatsUp. Gampang!
>
> *(pamer brosur)* Posternya bagus to? Bikinan AI. Foto HRD-nya juga AI. *(senyum lebar)* Wis, transfer sekarang biar dapat slot…

**MOTION:**
- **M01 · Lower third** (3 dtk, saat Bang Jago pertama menatap kamera): "Bang Jago" + baris kecil "penjual loker, buka cabang di mana-mana". Garis tipis + teks, tanpa kotak.
- **M02 · Teks pembuka** (detik 0–4, pojok kiri bawah): *"Sebuah sidang, sebelum kamu melamar."*

**Yang ditanam untuk adegan berikutnya:** tiap "syarat" Bang Jago adalah satu entitas yang nanti dicek Verifin: nomor WA, permintaan KTP dan biaya, tautan formulir, nama PT tanpa jejak, email gratisan, dan alamat yang tidak jelas.

---

### S2 — "Stop, bentar." (0:40–1:20) · LIVE → MOTION

**Visual LIVE:** Hafidz masuk frame dari samping.

> **HAFIDZ**: Stop, bentar. Kelihatannya lucu. Aslinya nggak lucu sama sekali.

**MOTION:**
- **M03 · Freeze "Stop, bentar."** (3 dtk): frame terakhir Bang Jago di-freeze, warnanya turun ke abu-abu, layar meredup, teks besar "Stop, bentar." muncul. Sama dengan video 60 detik, supaya kedua video terasa satu keluarga. SFX tape stop.
- **M04 · Kartu angka** (±28 dtk, satu kartu per kalimat VO, musik dimatikan). Latar krem polos, angka besar menghitung naik dari 0, sumber kecil di bawah:
  - **7,28 juta** · pengangguran terbuka, Februari 2025 · *BPS, Feb 2025*
  - **49%** · korban penipuan digital pernah terpapar modus lowongan kerja palsu · *GASA 2024*
  - **> 3.300** · WNI terjerat sindikat penipuan online di Asia Tenggara · *Kemenlu RI*
- **M05 · Kalimat penutup** (5 dtk): "Keputusan terpenting diambil sebelum sempat mengecek apa-apa." Kata "sebelum" diberi warna aksen.

**VO Hafidz (nada serius):**
> Februari 2025, ada **tujuh koma dua delapan juta** pengangguran terbuka di Indonesia.
> Laporan GASA mencatat **empat puluh sembilan persen** korban penipuan digital pernah terpapar modus lowongan kerja palsu.
> Kemenlu mencatat **lebih dari tiga ribu tiga ratus** WNI terjerat sindikat penipuan online di Asia Tenggara. Banyak yang awalnya cuma… melamar kerja.
> Masalahnya, keputusan paling penting, mau transfer atau mau kirim KTP, diambil **sebelum** kita sempat mengecek apa-apa.

**Sitasi:** BPS Feb 2025; GASA 2024; Kemenlu RI (referensi [1]–[4] di Laporan Akhir). Angka di M04 harus sama persis dengan Laporan Akhir.

---

### S3 — Cek Manual Itu Capek (1:20–1:55) · LIVE Set C + MOTION

**Visual LIVE:** Akmal di laptop dengan banyak tab terbuka (mesin pencari, cek nomor, peta, formulir). Time-lapse dipercepat, dan rambutnya makin acak-acakan.

> **AKMAL** *(capek)*: Nama PT-nya aku cari. Nomornya aku cek. Alamatnya aku cari di peta. Formnya aku buka… Ini baru satu loker lho.
> **MATTHEW** *(masuk, makan gorengan)*: Lha kenapa nggak ke job fair aja?
> **AKMAL**: Antre dari subuh, Thew. Makanya orang nyarinya di grup WhatsUp.
> **MATTHEW**: Ya udah, pakai pengecek link aja.
> **AKMAL**: Loker ini nggak ada link-nya. Isinya teks broadcast sama poster. Mau dicek pakai apa?
> **HAFIDZ** *(VO)*: Alat yang ada biasanya cuma mengecek satu hal: link saja, atau nomor saja. Padahal penipuan loker di grup chat itu gabungan semuanya. Verifin memeriksa **semuanya sekaligus**, dalam satu tempat.

**MOTION:**
- **M06 · Satu hal vs semuanya** (8 dtk, di atas VO Hafidz). Kiri: empat kartu kecil terpisah ("cek link", "cek nomor", "cari nama PT", "cari alamat"), masing-masing hanya menyala satu. Kanan: hub Verifin yang menarik garis ke keenam pemeriksaan sekaligus (komponen hub dari video 60 detik).

**Teknis tersampaikan:** jawaban untuk kritik juri soal inovasi. Pembedanya adalah **integrasi** tiga input dan banyak sumber OSINT, untuk loker di kanal informal Indonesia.

---

### S4 — Sidang Dibuka (1:55–2:30) · LIVE Set B + SCREEN

**MOTION:**
- **M07 · Kartu judul "SIDANG LOWONGAN"** (2,5 dtk) dengan SFX ketukan palu. Tipografi besar, latar arang, satu garis tipis.

**Visual LIVE:** Matthew sebagai Panitera di meja depan.

> **PANITERA (Matthew)**: Selamat datang di Verifin. Bawa apa? Teks broadcast boleh, screenshot poster boleh, link postingan juga boleh. Nggak perlu bikin akun.
> *(menyerahkan kartu antrean)* Ditunggu ya. Di layar kelihatan sidangnya lagi sampai tahap mana. Itu update langsung dari server, bukan animasi pura-pura.

**SCREEN + MOTION:**
- **M08 · Rekaman layar dalam bingkai** (±20 dtk). Halaman utama → pilih tab input → tempel teks broadcast Bang Jago (kasus scam fiktif, Bagian 12) → klik verifikasi → pesan progres bertahap muncul (pesan asli dari app). Kamera fokus: halaman utama → kotak input → modal progres. Anotasi di kanan: "Teks broadcast, poster, atau link postingan" · "Tanpa membuat akun" · "Tahap pemeriksaan tampil langsung dari server". Komponen: `AppShot` dari video 60 detik, diganti ke rekaman video.

**Teknis tersampaikan:** 3 kanal input, tanpa registrasi, progres real-time lewat Server-Sent Events.

---

### S5 — Juru Baca (2:30–3:15) · LIVE + MOTION + SCREEN

**Visual LIVE:** Hafidz berkacamata tebal membaca brosur Bang Jago yang kusut dengan kaca pembesar, lalu menempel kartu label ke papan gabus: **[PT] [NO. HP] [EMAIL] [GAJI] [ALAMAT] [LINK FORM]**.

> **JURU BACA (Hafidz)**: Posternya miring, buram, kena lampu kuning, bikinan AI pula. *(mengelap kacamata)* Nggak apa-apa. Gambarnya aku terangkan dulu, baru dibaca.
> *(menempel kartu cepat-cepat)* Nomor HP, email, link. Yang polanya jelas begini aku ambil pakai aturan pasti. Nggak pakai nebak.
> *(memegang kartu PT dan ALAMAT, berpikir)* Kalau nama PT sama alamat, bentuknya macam-macam. Itu dibantu model bahasa.
> *(ke kamera)* Model bahasanya lagi gangguan? Aku tetap jalan pakai aturan tadi. Sidang nggak boleh batal.

**MOTION:**
- **M09 · Terangkan dulu, baru baca** (6 dtk): foto poster brosur yang sama, sebelah kiri versi asli (miring, kuning), sebelah kanan versi setelah pra-pemrosesan kontras, dengan garis pembatas yang bergeser. Di bawahnya muncul teks hasil OCR `[DARI APP]`. Label: "Pra-pemrosesan kontras (CLAHE), lalu OCR".
- **M10 · Dari teks ke entitas** (10 dtk): baris-baris teks OCR, lalu potongan teks terbang menjadi label entitas. NO. HP, EMAIL, LINK diberi tanda "aturan pasti"; PT dan ALAMAT diberi tanda "model bahasa". Di akhir ada satu baris kecil: "Model bahasa gagal → tetap jalan dengan aturan pasti".

**SCREEN:** daftar entitas yang terekstrak di halaman laporan (bagian "Data Lowongan yang Diekstrak") `[DARI APP]`.

**Teknis tersampaikan:** OCR dengan pra-pemrosesan kontras (CLAHE), NER hibrida (regex untuk pola stabil + LLM untuk entitas semantik), dan *graceful fallback*. Poster buatan AI tetap bisa dicek karena yang diperiksa adalah **entitasnya**, bukan tampilannya.

---

### S6 — Para Saksi (3:15–4:20) · LIVE kloning + MOTION + SCREEN

**Visual LIVE:** lima Akmal (dikloning saat editing, tripod dikunci) duduk berjajar di bangku saksi, masing-masing memakai lanyard: **FORMULIR · NOMOR · PENCARIAN · PETA · EMAIL & DOMAIN**. Mereka mulai bicara **bersamaan** sampai kacau.

> *(semua Akmal bicara bareng, saling tumpuk)*
> **HAKIM (Hafidz)** *(ketuk palu)*: Tertib! Satu-satu!
> **PANITERA (Matthew)** *(berbisik ke hakim)*: Yang Mulia, di Verifin mereka memang kerja barengan. Kalau antre satu-satu, sidangnya kelamaan.
> **HAKIM**: …Baik. Silakan bareng. Tapi subtitlenya satu-satu.

*(tiap saksi mendapat satu baris, ditampilkan cepat bergantian dengan zoom kecil ke wajahnya)*
> **SAKSI FORMULIR**: Saya buka formnya, Yang Mulia. `[DARI APP: isi yang diminta form]`
> **SAKSI NOMOR**: Nomornya saya cek di aplikasi cek nomor dan laporan publik. `[DARI APP: misalnya "Belum ada catatan, Yang Mulia. Nomornya masih baru."]`
> **SAKSI PENCARIAN**: Nama PT-nya saya cari ke mana-mana. `[DARI APP: misalnya "Tidak ada jejak resminya."]`
> **SAKSI PETA**: Alamatnya cuma tertulis "Jakarta", Yang Mulia. Itu bukan alamat, itu provinsi.
> **SAKSI EMAIL & DOMAIN**: Emailnya pakai email gratisan. Bukan domain perusahaan.

*(opsional, hanya kalau saat rekam memang ada sumber berstatus tidak tersedia)*
> *(kamera geser ke kursi keenam yang kosong, ada kertas "SEDANG SIBUK")*
> **PANITERA**: Satu saksi berhalangan, Yang Mulia.
> **HAKIM**: Dicatat tidak hadir. Sidang tetap jalan.

**MOTION:**
- **M11 · Enam pemeriksaan bersamaan** (12 dtk, transisi dari take live ke SCREEN). Hub Verifin + kartu pemeriksaan yang mulai bersamaan dan selesai dengan status asli dari JSON. Tiga gaya status: temuan risiko (merah), dicek (centang), tidak ada data atau tidak tersedia (strip abu). Komponen `VerdictShot` fase 1 dari video 60 detik, dengan data kasus 10 menit.

**SCREEN:** panel bukti OSINT di halaman laporan ("Detail Teknis & Atribusi Bukti" → Bukti OSINT) `[DARI APP]`.

**Teknis tersampaikan:** probe OSINT berjalan **paralel**. Satu sumber gagal → statusnya ditandai tidak tersedia, analisis lain tetap jalan. Setelah perbaikan 17 Okt, cek nomor yang gagal tampil sebagai "tidak dapat dicek", bukan "bersih".

> Isi baris saksi harus sesuai dengan yang benar-benar muncul di app saat rekam. Kalau beda, sesuaikan dialognya, jangan app-nya.

---

### S7 — Detektif Benang Merah (4:20–5:00) · LIVE + MOTION + SCREEN

**Visual LIVE:** Akmal versi detektif di depan papan gabus. Ditempel tiga brosur dengan nama PT berbeda; nomor HP yang sama dilingkari merah, lalu benang merah ditarik di antaranya.

> **DETEKTIF (Akmal)**: Yang Mulia, aplikasi cek nomor memang belum kenal nomor ini. Tapi pengguna Verifin sudah.
> *(tarik benang ke brosur kedua)* Minggu lalu nomor yang sama dipakai di loker "CV Berkah Rebahan". *(brosur ketiga)* Sebelumnya "PT Cuan Abadi". Nama PT-nya ganti-ganti, nomornya tetap.
> Itu ketahuan dari laporan komunitas. Makin banyak yang lapor, benangnya makin panjang.

**MOTION:**
- **M12 · Benang merah digital** (8 dtk): papan gabus fisik di-match cut ke graf. Node nomor HP di tengah, tiga node nama PT tersambung garis merah satu per satu, dengan jumlah kasus `[DARI APP]`.

**SCREEN (bagian Matthew):** visualisasi Fraud Network Graph di panel bukti, menunjukkan node nomor HP yang terhubung ke laporan/kasus lain `[DARI APP]`.

**Teknis tersampaikan:** Fraud Network Graph (relasi entitas lintas kasus) dan nilai laporan komunitas, yaitu menangkap penipu **sebelum** nomornya dikenal basis data publik.

---

### S8 — Putusan Hakim (5:00–6:10) · LIVE + MOTION + SCREEN

**Visual LIVE:** Hafidz bertoga di meja hakim. Sisi kanan frame dikosongkan untuk papan skor motion. Bang Jago masuk sebagai "kuasa hukum lowongan".

> **BANG JAGO**: Yang Mulia, klien saya ini lowongan baik-baik. Yang Mulia pasti percaya kan?
> **HAKIM**: Majelis tidak memutus berdasarkan percaya. Majelis memutus berdasarkan **bukti di berkas**. Yang tidak ada buktinya, tidak boleh disebut.
> **BANG JAGO**: Waduh.
> **HAKIM**: Setiap lowongan mulai dari nilai dasar dua belas. *(menunjuk ke papan)* Minta biaya: tambah. Kata-kata khas penipuan: tambah. Email gratisan: tambah sedikit.
> **BANG JAGO**: Ada yang ngurangin nggak, Yang Mulia?
> **HAKIM**: Ada. Kalau perusahaannya punya jejak yang jelas. *(membalik berkas)* …Punyamu cuma jejak tipis, jadi ngurangin sedikit.
> **HAKIM**: Sisanya pertimbangan majelis atas semua bukti tadi, dan itu juga ditulis terpisah, bukan disembunyikan.
> *(ketuk palu tiga kali)* Dengan skor `[DARI APP]`, lowongan ini diputus: **BAHAYA**.
> **BANG JAGO** *(ke kamera, panik)*: Kok dia tahu semua sih…
> **HAKIM**: Karena semuanya tertulis. Silakan dibaca sendiri.

> Baris "pertimbangan majelis" menjelaskan kontribusi **"Penyesuaian Penalaran AI"** yang muncul di grafik app (kasus uji 17 Okt: +37 dari total 83). Kalau di kasus final kontribusi ini nol, hapus barisnya.

**MOTION:**
- **M13 · Papan skor** (±25 dtk, overlay di sisi kanan take live). Angka mulai dari **12**, lalu tiap kontribusi masuk sebagai baris (merah menambah, hijau mengurangi) tepat saat Hakim menyebutnya. Angka total ikut naik. Urutan dan besar tiap baris dibaca dari `shap_explanation.feature_contributions` di JSON kasus final. Contoh dari uji 17 Okt (bukan angka final): biaya +40, penyesuaian penalaran AI +37, jejak web −10, kata kunci +8, email gratisan +8 → **95**.
- **M14 · Rumus dan ambang** (5 dtk, setelah palu): `Skor risiko = 12 + Σ kontribusi bukti` · pita 0–39 AMAN / 40–74 WASPADA / 75–100 BAHAYA dengan penanda di skor kasus · baris kecil: "Skor adalah indeks risiko, bukan probabilitas."
- **M15 · Bukti asli dari app** (10 dtk): screenshot elemen kartu verdict, faktor penilaian, lalu grafik kontribusi (`el-verdict`, `el-faktor`, `el-kontribusi`), seperti di video 60 detik.

**Teknis tersampaikan:** LLM reasoning dibatasi bukti dan outputnya divalidasi (anti-halusinasi); skor aditif yang bisa diaudit, dengan jumlah kontribusi yang sama dengan skor (sudah diperbaiki di `2b07f03`); ambang verdict **sesuai kode** (`constants.py`: `RISK_THRESHOLD_WASPADA = 40`, `RISK_THRESHOLD_BAHAYA = 75`) dan Laporan Akhir.

---

### S9 — Sidang Kilat: Kasus Nyata (6:10–6:50) · SCREEN + MOTION + LIVE

**SCREEN:** montase tiga sidang cepat. **Nama perusahaan, logo, nomor HP, dan email asli di-blur.**

1. **Teks yang di-share di grup** — loker bengkel motor di Jogja (`verifin-app/test/test-teks.md`) → verdict `[DARI APP]`
2. **Poster yang di-forward** — loker dealer kendaraan listrik (`verifin-app/test/ocr.webp`) → verdict `[DARI APP]`
3. **Link utas Thredz** — loker anak usaha BUMN (`verifin-app/test/test-link.md`) → verdict `[DARI APP]`

Hasil uji 17 Okt (sebagai gambaran, rekam ulang untuk final): ketiganya **AMAN**, dan cek manual tim membenarkan ketiganya lowongan asli. Kasus link terkena cache URL dari versi lama; hapus cache kasus itu sebelum rekam.

**MOTION:**
- **M16 · Montase tiga sidang** (25 dtk): tiap kasus dibuka dengan label kanal ("Teks dari grup", "Poster yang di-forward", "Link utas"), rekaman layar dalam bingkai, kotak blur yang mengikuti posisi nama/nomor, lalu badge verdict asli dan ketukan palu. Teks: *"Kasus nyata yang beredar di grup & media sosial. Identitas disamarkan."*
- **M17 · Kartu disclaimer** (5 dtk, setelah jawaban Hakim): "AMAN berarti tidak ada tanda bahaya dari bukti publik yang bisa dicek. Bukan surat izin usaha."

> **BANG JAGO** *(di ujung montase)*: Nah, berarti kalau AMAN pasti legal dong? Langsung kirim KTP aja?
> **HAKIM**: Bukan. AMAN artinya dari bukti publik yang bisa kami cek, tidak ada tanda bahaya. Itu bukan surat izin usaha. Tetap datang ke kantor resminya, dan jangan pernah bayar apa pun.

**Teknis tersampaikan:** tiga kanal input pada lowongan nyata di kanal informal, plus jawaban untuk kritik juri UX bahwa label "AMAN" bukan jaminan legalitas. Kalau disclaimer itu belum ada di UI laporan, **tambahkan dulu** sebelum rekam (saat ini baru ada disclaimer umum di footer).

---

### S10 — Komunitas & Moderasi (6:50–7:20) · SCREEN + MOTION + VO Matthew

**SCREEN:** halaman komunitas → kirim laporan → halaman admin memoderasi laporan → halaman riwayat verifikasi.

**MOTION:**
- **M18 · Alur laporan** (8 dtk, pembuka sebelum SCREEN): tiga langkah dengan garis penghubung: "Pengguna melapor" → "Admin memeriksa" → "Masuk ke graf penipuan". Langkah tengah diberi penekanan (inilah yang mencegah fitnah).

> **MATTHEW** *(VO, santai)*: Kalau nemu loker aneh di grup, kamu bisa lapor. Tapi laporannya nggak langsung tayang. Admin cek dulu, biar nggak ada perusahaan yang kena fitnah cuma gara-gara satu orang lagi kesal. Laporan yang lolos masuk ke benang merahnya Akmal tadi. Riwayat pengecekanmu juga tersimpan, jadi bisa dibuka lagi kapan saja.

**Teknis tersampaikan:** moderasi admin menjawab risiko pencemaran nama baik (kritik juri); laporan yang disetujui memperkaya Fraud Graph.

---

### S11 — Tur Markas: Di Balik Layar (7:20–8:20) · MOTION + VO + LIVE singkat

**Visual LIVE singkat (4 dtk):** Hafidz (masih bertoga) melepas toganya dan membuka "pintu" ruang sidang. Lalu masuk ke MOTION.

**MOTION:**
- **M19 · Arsitektur empat lapis** (20 dtk): diagram kiri ke kanan **Input → Ekstraksi entitas (OCR/NER) → Investigasi OSINT paralel → Jaringan penipuan → Penalaran + penjelasan skor → Verdict**. Tiap kotak menyala saat disebut, dan satu "berkas" kecil bergerak melewatinya.
- **M20 · Stack** (12 dtk): nama teknologi sebagai teks rapi, dikelompokkan per lapis: FastAPI · Python 3.11 · PostgreSQL · SearXNG · browser headless · OpenStreetMap · Next.js. Versi diambil dari `requirements.txt` / `package.json`.
- **M21 · Cache sidik jari** (8 dtk): teks lowongan → hash SHA-256 (potongan heksadesimal) → "sudah pernah dicek → hasil langsung keluar".
- **M22 · Pengujian** (12 dtk): **38 tes otomatis, semua lulus** (pytest, dijalankan 17 Okt 2026 pada commit `2b07f03`). Evaluasi data berlabel: 24 sampel EMSCAD, khusus lapisan berbasis aturan, presisi 1,0, recall 0,667, F1 0,8, dengan label "sampel kecil, apa adanya".

> **HAFIDZ**: Yang tadi kelihatan seperti sidang, aslinya empat lapis: ekstraksi entitas, investigasi OSINT, jaringan penipuan, lalu penalaran dan penjelasan skor.
> **AKMAL**: Backend-nya FastAPI di Python 3.11, data di PostgreSQL. Pencarian lewat SearXNG. Halaman yang dinamis dibuka pakai browser headless, dan alamat dicek ke OpenStreetMap.
> **HAFIDZ**: Frontend-nya Next.js. Loker yang sama nggak dianalisis ulang, karena hasilnya kami simpan berdasarkan sidik jari isinya, hash SHA-256.
> **AKMAL**: Untuk pengujian, kami punya tiga puluh delapan test otomatis, dan semuanya lulus.
> **HAFIDZ**: Kami juga menguji di data berlabel. Masih kecil, dua puluh empat sampel, khusus lapisan berbasis aturan: presisinya satu, recall-nya nol koma enam enam. Angkanya kami tampilkan apa adanya, termasuk yang belum sempurna.
> **AKMAL**: Semua dikerjakan dengan Scrum, satu sprint per lapis pipeline.

**Teknis tersampaikan:** arsitektur berlapis; stack inti; caching SHA-256; kualitas pengujian yang jujur (menjawab kritik juri soal pengujian).

> ⚠️ Jalankan ulang `venv/bin/python -m pytest -q` di `verifin-app/backend` sebelum rekam. Kalau jumlah tes berubah, ganti angka di M22 dan dialog. Jangan pakai angka lama "146 kasus / 88,4% / pass 100%" yang masih ada di Laporan Akhir; angka itu tidak punya dasar di repo.

---

### S12 — Dampak & Keberlanjutan (8:20–8:55) · MOTION + VO

**MOTION:**
- **M23 · Dari kanal informal ke penyaring** (15 dtk): ikon grup chat, channel, dan utas media sosial mengalir ke Verifin, lalu keluar sebagai lowongan yang sudah dicek. Di bawahnya, tiga pengguna lewat API: bursa kerja SMK, dinas tenaga kerja, admin grup loker. Satu titik ditandai "Langkah pertama: kanal info karier Departemen TEDI SV UGM".
- **M24 · Biaya dan flywheel** (12 dtk): "Biaya per pengecekan: beberapa ratus rupiah" dengan label **Estimasi** yang jelas, lalu putaran sederhana: laporan komunitas → graf makin lengkap → deteksi makin tajam → lebih banyak pengguna.

> **HAFIDZ** *(VO)*: Verifin dibuat untuk loker yang beredar di grup chat, channel, dan media sosial, tempat yang belum punya penyaring. Gratis untuk pencari kerja.
> Langkah pertama kami: memasang Verifin di kanal info karier Departemen TEDI Sekolah Vokasi UGM, supaya loker dicek dulu sebelum disebar ke grup mahasiswa.
> Lewat API, bursa kerja SMK, dinas tenaga kerja, atau admin grup loker bisa memakainya langsung.
> Biaya per pengecekan kami estimasi hanya beberapa ratus rupiah. Setiap laporan komunitas membuat sistemnya makin tajam, tanpa harus membeli data.
> `[OPSIONAL — jika pilot sudah jalan: "Uji coba dengan 20 mahasiswa: skor SUS …, waktu cek turun dari … ke …"]`

**Sumber angka:** tabel simulasi dampak dan breakdown biaya di Laporan Akhir. Semua angka dampak diberi label "Estimasi".

---

### S13 — Tempel – Tunggu – Tahu (8:55–9:25) · LIVE Set B + MOTION

**Visual LIVE:** ketiganya berdiri di ruang sidang dengan Hafidz di tengah. Tiap kata punya gerakan tangan: **tempel** (telapak menempel ke layar), **tunggu** (lipat tangan, mengetuk kaki), **tahu** (telunjuk di pelipis).

> **HAFIDZ**: Jadi sebelum melamar, ingat tiga hal. **Tempel**…
> **MATTHEW** *(semangat)*: Transfer!
> **HAFIDZ & AKMAL**: BUKAN!
> **AKMAL**: Kamu ini kebanyakan ikut misi berbayar.
> **HAFIDZ**: Ulang dari awal. **Tempel**: teks, poster, atau link-nya ke Verifin.
> **AKMAL**: **Tunggu**: biar saksi-saksinya kerja.
> **MATTHEW**: **Tahu**: baca bukti dan alasannya, baru putuskan.
> **BERTIGA**: Tempel. Tunggu. Tahu. **Tahu sebelum kamu melamar.**

**MOTION:**
- **M25 · Kata yang muncul** (overlay, mengikuti ucapan): "Tempel.", "Tunggu.", "Tahu." muncul di sisi kanan frame tepat saat diucapkan (disinkronkan dari jeda suara). Saat Matthew bilang "Transfer!", muncul kata "Transfer" yang langsung dicoret merah.

---

### S14 — Bang Jago Kena Sendiri + Credit (9:25–9:40) · LIVE Set A + SCREEN + MOTION

**Visual LIVE:** lapak sepi. Bang Jago iseng menempel brosurnya sendiri ke Verifin di HP-nya. Layar HP menampilkan rekaman asli verdict **BAHAYA** (sisipan SCREEN).

> **BANG JAGO**: …Yah. Ketahuan sama punyaku sendiri.
> *(menurunkan toa, pelan)* Mas Panitera… kok mukanya kayak aku ya?
> *(jeda)* Di Verifin ada loker beneran nggak?

**MOTION:**
- **M26 · End card** (5 dtk): logo Verifin, "Tahu sebelum kamu melamar.", Tim Three Achilles · Universitas Gadjah Mada, dosen pembimbing, dan baris lima logo transparan (Kemdikbud, Diktisaintek Berdampak, GEMASTIK, UGM, Belmawa). Sama dengan end card video 60 detik, ditambah nama dosen pembimbing. Tanpa teks keterangan tambahan. Atribusi tool AI ditulis di deskripsi YouTube dan Surat Pernyataan Penggunaan AI. Blooper kecil boleh ditaruh setelah end card.

---

## 10. Daftar Motion (Remotion)

Proyek baru: `video-presentasi-10-menit/remotion/`, dengan komponen yang disalin dari `video-profil-60-detik/remotion/src/scenes/` (`kit.tsx`: kurva gerak, `Label`, `Headline`, `Phone`, `cameraFor`, `Note`; `verdict.tsx`: kartu pemeriksaan, meter; `app.tsx`: jendela app; `closing.tsx`: end card). Tiap motion adalah satu `Composition` dan dirender terpisah.

| ID | Scene | Durasi | Jenis | Isi | Sumber data | Komponen dasar |
|---|---|---|---|---|---|---|
| M01 | S1 | 3s | Overlay | Lower third Bang Jago | — | baru (`LowerThird`) |
| M02 | S1 | 4s | Overlay | "Sebuah sidang, sebelum kamu melamar." | — | `Label` |
| M03 | S2 | 3s | Overlay di atas freeze | "Stop, bentar." + redup | — | dari `phone.tsx` (bagian stop) |
| M04 | S2 | 28s | Penuh | Tiga kartu angka count-up + sitasi | Laporan Akhir [1]–[4] | baru (`StatCard`) |
| M05 | S2 | 5s | Penuh | Kalimat "sebelum sempat mengecek" | — | `Headline` |
| M06 | S3 | 8s | Penuh | Satu hal vs semuanya | — | kartu + hub `verdict.tsx` |
| M07 | S4 | 2.5s | Penuh | Kartu judul SIDANG LOWONGAN | — | `Headline` |
| M08 | S4 | 20s | Penuh | Rekaman layar input + progres dalam bingkai, anotasi | rekaman SCREEN | `AppShot` (versi video) |
| M09 | S5 | 6s | Penuh | Poster asli vs kontras + teks OCR | screenshot poster + JSON | baru (`BeforeAfter`) |
| M10 | S5 | 10s | Penuh | Teks → label entitas (aturan pasti vs model bahasa) | JSON `entities` | baru (`EntityTags`) |
| M11 | S6 | 12s | Penuh | Enam pemeriksaan paralel + status | JSON `osint` | `VerdictShot` fase 1 |
| M12 | S7 | 8s | Penuh | Graf benang merah | JSON `fraud_network` | baru (`FraudGraph`) |
| M13 | S8 | 25s | Overlay kanan | Papan skor 12 + kontribusi | JSON `shap_explanation` | baru (`ScoreBoard`) |
| M14 | S8 | 5s | Penuh | Rumus + pita ambang | `constants.py` | meter `verdict.tsx` |
| M15 | S8 | 10s | Penuh | Screenshot elemen verdict, faktor, kontribusi | screenshot app | `Proof` |
| M16 | S9 | 25s | Penuh | Montase tiga kasus + blur + verdict | rekaman SCREEN + JSON | `AppShot` + baru (`BlurBox`) |
| M17 | S9 | 5s | Penuh | Disclaimer AMAN | — | `Headline` |
| M18 | S10 | 8s | Penuh | Alur lapor → moderasi → graf | — | baru (`FlowSteps`) |
| M19 | S11 | 20s | Penuh | Diagram arsitektur empat lapis | — | baru (`ArchDiagram`) |
| M20 | S11 | 12s | Penuh | Stack per lapis | `requirements.txt`, `package.json` | `Label` |
| M21 | S11 | 8s | Penuh | Cache SHA-256 | — | baru |
| M22 | S11 | 12s | Penuh | 38 tes lulus + evaluasi EMSCAD | pytest + `eval_results/evaluasi-emscad.json` | `StatCard` |
| M23 | S12 | 15s | Penuh | Kanal informal → Verifin → API | — | baru (`FlowSteps`) |
| M24 | S12 | 12s | Penuh | Biaya (estimasi) + flywheel | Laporan Akhir | baru |
| M25 | S13 | ±15s | Overlay kanan | Tempel/Tunggu/Tahu + "Transfer" dicoret | jeda suara take live | `Mnemonic` |
| M26 | S14 | 5s | Penuh | End card + 5 logo | — | `EndCard` |

Total sekitar 4 menit motion. Urutan pengerjaan yang disarankan: M04, M11, M13, M14, M15, M19, M22 (yang paling sering dinilai juri), lalu sisanya.

---

## 11. Jadwal Shooting (dikelompokkan per set)

| Hari | Set | Adegan | Pemeran | Estimasi |
|---|---|---|---|---|
| 1 | B — Ruang Sidang | S4, S5, S6 (kloning ×5, tripod jangan bergeser), S7, S8, bagian live S9, S13 | Bertiga | 4 jam |
| 1 | A — Lapak | S1, S14 | Matthew (+ Hafidz pegang kamera) | 1 jam |
| 2 | C — Meja | S2 (bagian live), S3, live singkat S11 | Bertiga | 45 menit |
| 2 | Layar | Rekam layar S4–S10 dan S14 | Matthew (operator UI) | 2 jam |
| 2–3 | Suara | VO S2, S3, S10–S12 | Hafidz, Matthew, Akmal | 1 jam |
| 2–4 | Motion | M01–M26 (Remotion) | Claude + Hafidz (review) | 2–3 hari |

**Tips kloning S6:** kamera di tripod; posisi, fokus, dan lampu dikunci. Rekam Akmal duduk di tiap kursi bergantian, lalu gabungkan dengan masking di editor. Rekam juga satu "plate" kosong tanpa orang.

**Tips overlay:** untuk S5, S8, dan S13, ambil gambar dengan pemeran di 2/3 kiri frame. Motion M13 dan M25 menempati sepertiga kanan.

---

## 12. Persiapan Demo (sebelum hari rekam layar)

**Menjalankan app**
- [ ] Pakai konfigurasi `verifin-backend` dan `verifin-frontend` di `.claude/launch.json` (port 8000 dan 3000), dari `verifin-app` branch `main` (minimal commit `2b07f03`). Kalau server lama masih jalan, restart dulu supaya memakai kode baru.
- [ ] Untuk rekaman, jalankan frontend sebagai production build (`bun run build && bun run start`) supaya badge dev Next.js "N" tidak ikut terekam.
- [ ] Sembunyikan URL bar, atau gunakan domain resmi Verifin (jangan tampilkan domain tunnel API).
- [ ] Ambil JSON respons tiap kasus untuk mengisi `[DARI APP]` dan motion. Skrip Playwright dari sesi 17 Okt bisa dipakai ulang (simpan JSON `sessionStorage['verifin:last-report']` + screenshot per elemen).

**Kasus scam fiktif yang terkontrol**
- [ ] **Nama PT fiktif**: cari dulu di Google (pakai tanda kutip) **dan** jalankan sekali di Verifin. Nama baru dianggap aman hanya kalau panel "Jejak Digital" di laporan tidak memunculkan akun atau perusahaan nyata. Catatan: "PT Cuan Rebahan Sentosa" lolos di Google, tapi di app memunculkan akun Instagram pribadi "@cuan_rebahan7", jadi pilih nama yang lebih unik. Lakukan hal yang sama untuk "CV Berkah Rebahan" dan "PT Cuan Abadi" (S7).
- [ ] Nomor HP → nomor milik tim (SIM cadangan), supaya probe nomor ikut terdemokan.
- [ ] Formulir → buat sendiri, isinya meminta foto KTP + bukti transfer biaya (supaya `gform_inspector` menangkapnya).
- [ ] Email → akun email gratisan buatan tim.
- [ ] Teks broadcast → gaya pesan grup WA asli (emoji, huruf kapital, "SLOT TERBATAS!!!"). Contoh: `video-profil-60-detik/demo/kasus-scam-fiktif.txt`.

**Data**
- [ ] **Isi Fraud Graph secara sah:** kirim 1–2 laporan komunitas untuk nomor tim dengan nama PT berbeda, setujui lewat admin, baru jalankan verifikasi kasus utama. Ini sekaligus mendemokan alur komunitas → graf di S7 dan S10.
- [ ] **Jalankan ulang semua kasus demo minimal 2 kali** dan catat skor serta verdict. Ringkasan LLM bisa berubah tiap run, jadi screenshot, JSON, dan dialog harus dari run yang sama.
- [ ] Cache tidak punya masa kedaluwarsa (teks diidentifikasi lewat hash, URL lewat varian URL). Untuk kasus link S9, hapus entri lama di database atau rekam dari teksnya, supaya hasilnya dari kode terbaru.
- [ ] Semua verifikasi uji tersimpan di database Supabase produksi (riwayat dan cache). Bersihkan kasus uji kalau mengganggu.
- [ ] Blur nama perusahaan, logo, nomor, dan email asli pada kasus S9.
- [ ] Tambahkan disclaimer "AMAN bukan jaminan legalitas" di halaman laporan kalau belum ada (S9).

**Hasil uji 17 Oktober 2026** (detail: `video-profil-60-detik/demo/laporan-uji-17-okt-2026.md`)
- Scam fiktif: BAHAYA 95; setelah perbaikan, 12 + 83 = 95 dan grafik kontribusi tampil.
- Tiga loker nyata (S9): ketiganya AMAN, dan cek manual membenarkan ketiganya asli.

---

## 13. Daftar Properti

| Properti | Adegan | Catatan |
|---|---|---|
| Toa (pinjam / mainan) | S1, S14 | — |
| Spanduk kertas + 3 papan cabang | S1, S14 | Tulisan plesetan (WhatsUp / Telegrem / Thredz) |
| Brosur scam (cetak 5 lembar, sengaja dibuat kusut) | S1, S5, S7, S14 | Isi sama dengan kasus scam fiktif |
| Kumis tempel, jaket jeans, kalung emas mainan | S1, S8, S9, S14 | — |
| Toga kain hitam + palu kayu | S6, S8, S9 | — |
| Kacamata tebal + kaca pembesar karton | S5 | — |
| 6 kartu label entitas (A4) | S5 | PT / NO. HP / EMAIL / GAJI / ALAMAT / LINK FORM |
| 5 lanyard saksi + 1 kertas "SEDANG SIBUK" | S6 | — |
| Papan gabus, benang wol merah, paku payung, 3 brosur beda nama PT | S7 | — |
| Lanyard warna verdict (hijau/kuning/merah) | Semua di Set B | Identitas visual Verifin |
| Map berkas + kartu antrean | S4, S6 | — |
| ~~Papan skor besar + kartu angka~~ | ~~S8~~ | Diganti motion M13 |

---

## 14. Tool (dicek 17 Oktober 2026)

**Prinsip:** tidak ada video atau gambar buatan AI generatif. Semua visual adalah take live, rekaman layar app asli, atau motion yang ditulis sebagai kode.

| Kebutuhan | Tool | Catatan |
|---|---|---|
| Motion graphic (M01–M26) | **Remotion** 4.0.532 | Gratis untuk individu dan non-profit (file LICENSE resmi di GitHub, dicek 17 Okt). Proyek di `video-presentasi-10-menit/remotion/` |
| Rekam layar | **OBS** atau Playwright | 1920×1080, dari app lokal production build |
| Editor + penyusunan | **CapCut** atau **DaVinci Resolve** (gratis) | Menyusun take live + motion + SCREEN; export 720p |
| VO | **Suara tim sendiri** (utama) | Konsisten dengan wajah di video. ElevenLabs hanya cadangan; kalau dipakai paket gratis, wajib atribusi di deskripsi YouTube |
| SFX | ElevenLabs Sound Effects (sudah ada 9 file di `video-profil-60-detik/remotion/public/sfx/`) | Dipakai ulang: ketukan, whoosh, tick, stop. Tetap catat di Surat Pernyataan Penggunaan AI |

**Wajib:** setiap bagian yang dibuat dengan bantuan AI (VO/SFX ElevenLabs, kode motion dengan bantuan asisten AI) **dicantumkan di Surat Pernyataan Penggunaan AI**.

---

## 15. Checklist Kepatuhan Panduan Final

- [ ] Durasi total ≤ 10:00 termasuk intro dan credit
- [ ] MP4 720p
- [ ] Berisi presentasi **dan** demo karya dengan capaian 100% (layar app asli, bukan mockup)
- [ ] Judul YouTube: `GEMASTIK XIX 2026 - Pengembangan Perangkat Lunak - 260010011960176 - Three Achilles - Verifin Deteksi Lowongan Kerja Palsu berbasis AI - Karya Final` (cocokkan nama divisi dan judul karya persis dengan data pendaftaran)
- [ ] Link diunggah lewat aplikasi pendaftaran ulang (**26–30 Oktober 2026**)
- [x] Terpisah: video profil karya 60 detik → `video-profil-60-detik/remotion/out/verifin-profil-60-final.mp4`
- [ ] Semua angka di layar konsisten dengan Laporan Akhir dan kode (ambang 0–39 / 40–74 / 75–100; 38 tes; evaluasi 24 sampel)
- [ ] Angka pengujian lama di Laporan Akhir ("146 kasus", "88,4% coverage") direvisi atau dihapus supaya tidak bertentangan dengan video
- [ ] Tidak ada merek nyata di adegan sketsa; nama perusahaan asli di kasus S9 di-blur; nama PT fiktif sudah dicek di Google dan di panel Jejak Digital app
- [ ] Tidak ada konten SARA atau politik
- [ ] Motion lolos aturan visual Bagian 3 no. 7 (audit antislop seperti video 60 detik)
