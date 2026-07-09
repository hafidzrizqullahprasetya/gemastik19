# Evaluasi & Pemilihan Ide Karya Gemastik PPL 2026

Dokumen ini mengevaluasi seluruh kandidat ide karya yang telah di-brainstorm di workspace ini, menggunakan 7 Pilar Kemenangan yang diekstrak dari analisis 20 finalis Gemastik 2025.

---

## 1. Kandidat Ide yang Dievaluasi

Berikut 7 kandidat ide dari dokumen-dokumen sebelumnya:

| Kode | Nama Ide | Sumber Dokumen |
|------|----------|----------------|
| A | PneumoSound (deteksi pneumonia balita via akustik) | gap-riset-indonesia.md |
| B | Denteksi Edge (stasiun skrining gigi AI + IoT) | kolaborasi-dosen-ugm.md |
| C | StrokeLens (skrining stroke via facial droop) | gap-riset-indonesia.md |
| D | AcoustiPump (anti-kebocoran BBM subsidi) | ide-disruptif-software-iot-ai.md |
| E | NutriPatch/Smart-Spit (monitoring stunting non-invasif) | ide-disruptif-software-iot-ai.md |
| F | SajiLokal (supply chain MBG lokal) | ringkasan-ekonomi-ke-ide.md |
| G | AortaGate (rPPG vital signs untuk kulit sawo matang) | gap-riset-indonesia.md |

---

## 2. Matriks Evaluasi per 7 Pilar Kemenangan

Skor 1-5 (5 = terbaik). Bobot: Deep Engineering (x2), Hardware (x2), Validasi (x2) karena ini 3 pilar terkuat pembeda pemenang.

| Ide | Deep Eng (x2) | Hardware (x2) | Validasi (x2) | Urgensi | Institusi | Bisnis | Demo | TOTAL |
|-----|---------------|---------------|---------------|---------|-----------|--------|------|-------|
| A. PneumoSound | 5x2=10 | 4x2=8 | 3x2=6 | 5 | 2 | 3 | 4 | **38** |
| B. Denteksi Edge | 4x2=8 | 3x2=6 | 4x2=8 | 3 | 5 | 4 | 4 | **38** |
| C. StrokeLens | 3x2=6 | 2x2=4 | 3x2=6 | 4 | 3 | 3 | 3 | **29** |
| D. AcoustiPump | 5x2=10 | 5x2=10 | 2x2=4 | 5 | 1 | 4 | 5 | **39** |
| E. NutriPatch | 4x2=8 | 4x2=8 | 2x2=4 | 5 | 1 | 3 | 4 | **33** |
| F. SajiLokal | 3x2=6 | 2x2=4 | 3x2=6 | 4 | 1 | 3 | 3 | **27** |
| G. AortaGate | 4x2=8 | 3x2=6 | 3x2=6 | 4 | 3 | 3 | 4 | **34** |

---

## 3. Analisis 3 Kandidat Teratas

### 3A. AcoustiPump (Skor 39) — Tertinggi Secara Teknis

**Kelebihan:**
- Deep engineering tertinggi: sensor resonansi akustik + NFC + AI real-time
- Hardware paling impresif: nozzle prototype + jeriken + tangki motor
- Urgensi nasional sangat tinggi: kebocoran subsidi BBM puluhan triliun
- Demo paling spektakuler: juri bisa mencoba mengisi tangki "ilegal" dan melihat auto-cut-off

**Kelemahan Kritis:**
- TIDAK ada dosen pembimbing yang relevan di TRPL UGM
- Sangat ambisius untuk prototipe dalam 3-6 bulan
- Butuh akses ke SPBU untuk validasi lapangan (sulit izin)
- Risiko teknis tinggi: sensor akustik pada nozzle nyata jauh lebih kompleks dari simulasi

**Verdict:** Ide paling "wow" tapi risiko eksekusi terlalu tinggi tanpa dosen pembimbing dan akses industri.

### 3B. PneumoSound (Skor 38) — Riset Terkuat

**Kelebihan:**
- Deep engineering kuat: CNN untuk klasifikasi batuk basah balita + deteksi stridor
- Research gap nyata: dataset akustik batuk dunia (CODA, Coughvid, Coswara) semua subjek dewasa
- Urgensi sangat tinggi: pneumonia = penyebab kematian balita #1 di Indonesia
- Hardware: microphone + edge device di ruang tunggu Puskesmas
- Bisa membangun di atas riset Dr. Dhany Arifianto (ITS) tentang akustik batuk TBC

**Kelemahan:**
- Dr. Dhany Arifianto ada di ITS, BUKAN UGM — akses kolaborasi lebih sulit
- Terlalu mirip dengan TB Vector (Juara 1 2025) — juri bisa menilai "derivative"
- Dataset batuk balita belum ada — harus collect dari nol (butuh waktu + izin etik)
- Risiko: jika data collection gagal, tidak ada fallback

**Verdict:** Riset paling solid secara akademis, tapi risiko "dianggap meniru TB Vector" dan kesulitan akses dospem ITS.

### 3C. Denteksi Edge (Skor 38) — Eksekusi Paling Realistis

**Kelebihan:**
- AKSES LANGSUNG ke dosen internal TRPL UGM: Muhammad Fakhrurrifqi (Denteksi, akurasi 90%)
- Fondasi riset sudah ada: model CNN sudah terlatih, sudah diuji di sekolah mitra
- Bisa ditingkatkan dengan: edge AI (TFLite/ONNX), stasiun skrining fisik, odontogram otomatis, dashboard Puskesmas
- Validasi sudah dimulai: uji coba di sekolah-sekolah mitra Denteksi
- Masalah nyata: 90%+ anak Indonesia mengalami karies gigi (Riskesdas)
- Timeline realistis: 3-6 bulan untuk enhancement + validasi Puskesmas

**Kelemahan:**
- Urgensi kesehatan gigi tidak se-"mendesak" TB atau pneumonia
- Hardware component lebih sederhana (kamera + ring light + bracket) vs mic array TB Vector
- Perlu diferensiasi yang jelas dari Denteksi asli (bukan sekadar "Denteksi tapi lebih bagus")

**Verdict:** Kombinasi TERBAIK antara kedalaman teknis, akses dosen, fondasi riset, dan kelayakan eksekusi.

---

## 4. Rekomendasi: Denteksi Edge

**Nama Karya: "Denteksi Edge — Stasiun Skrining Kesehatan Gigi & Mulut Berbasis Edge AI untuk Puskesmas Indonesia"**

### Mengapa Denteksi Edge, Bukan yang Lain?

| Faktor | Denteksi Edge | PneumoSound | AcoustiPump |
|--------|---------------|-------------|-------------|
| Akses dosen pembimbing | Langsung (internal TRPL) | Sulit (ITS) | Tidak ada |
| Fondasi riset | Sudah ada (90% akurasi) | Belum ada dataset | Belum ada |
| Timeline 3-6 bulan | Realistis | Ketat (data collection) | Sangat ketat |
| Risiko kegagalan | Rendah | Sedang-Tinggi | Tinggi |
| Potensi "wow" di final | Tinggi | Tinggi | Sangat tinggi |
| Validasi lapangan | Sudah dimulai (sekolah) | Belum | Belum |

### Bagaimana Denteksi Edge Memenuhi 7 Pilar?

**Pilar 1 — Deep Engineering:**
- Custom CNN pipeline untuk deteksi karies, gigi tanggal, dan lesi mulut
- Automated odontogram generation (pemetaan 32 gigi standar FDI)
- Edge AI inference (TensorFlow Lite / ONNX Runtime) untuk operasi offline di Puskesmas tanpa internet
- Multi-modal fusion: citra gigi + metadata pasien = skor kesehatan mulut komprehensif

**Pilar 2 — Hardware/IoT:**
- Stasiun skrining fisik: Raspberry Pi + kamera + ring light + bracket ergonomis
- Dirancang untuk dipasang di ruang tunggu Puskesmas (seperti TB Vector di stasiun)
- Prototipe bisa dibawa ke final dan didemokan langsung

**Pilar 3 — Validasi Lapangan:**
- Sudah diuji di sekolah-sekolah mitra oleh Mr. Fakhrurrifqi
- Bisa diperluas ke Puskesmas Pembantu di DIY/Jawa Tengah
- Metrik: akurasi deteksi, waktu skrining per pasien, kepuasan kader Puskesmas

**Pilar 4 — Isu Nasional Mendesak:**
- Kesehatan gigi = masalah kesehatan paling terabaikan di Indonesia
- 90%+ anak Indonesia mengalami karies gigi (Riskesdas 2018)
- Rasio dokter gigi : penduduk = 1 : 20.000 (WHO merekomendasikan 1 : 7.500)
- Selaras dengan program BPJS Kesehatan & transformasi Puskesmas

**Pilar 5 — Kolaborasi Institusi:**
- Mr. Fakhrurrifqi sudah memiliki jaringan sekolah mitra
- Bisa menjalin MoU dengan Puskesmas Pembantu di DIY
- Potensi kolaborasi dengan Dinas Kesehatan DIY

**Pilar 6 — Model Bisnis + Angka:**
- B2G: pengadaan oleh Dinas Kesehatan untuk Puskesmas
- SaaS: dashboard aggregate health mapping per kecamatan
- Estimasi: 1 stasiun skrining = 50 pasien/hari = 15.000 skrining/tahun
- Penghematan: mengurangi antrean dokter gigi hingga 40%

**Pilar 7 — Demo Fisik:**
- Bawa stasiun skrining ke final
- Juri atau "pasien" bisa duduk, membuka mulut, dan melihat AI memetakan odontogram secara real-time
- Dashboard menunjukkan aggregate data kesehatan gigi per wilayah

### Diferensiasi dari Denteksi Asli

| Aspek | Denteksi (Asli) | Denteksi Edge (Gemastik 2026) |
|-------|-----------------|-------------------------------|
| Deployment | Mobile app (butuh internet) | Edge station (offline-first) |
| Output | Deteksi karies per foto | Odontogram digital otomatis 32 gigi |
| Target | Pasien individu | Puskesmas (skrining massal) |
| AI | CNN klasifikasi | CNN + odontogram automation + multi-modal |
| Hardware | Kamera HP | Stasiun skrining dedicated (Pi + kamera + ring light) |
| Dashboard | Tidak ada | Aggregate health mapping per wilayah |
| Anak-anak | Uji coba di sekolah | Gamified scanning (anak tidak takut) |

---

## 5. Langkah Eksekusi Berikutnya

1. **Minggu 1-2:** Hubungi Mr. Fakhrurrifqi, presentasikan konsep Denteksi Edge, minta persetujuan kolaborasi
2. **Minggu 3-4:** Kumpulkan kode/model Denteksi yang sudah ada, pelajari arsitektur CNN-nya
3. **Bulan 2:** Kembangkan modul odontogram otomatis + edge inference (TFLite)
4. **Bulan 3:** Bangun prototipe stasiun skrining (Raspberry Pi + kamera + 3D-printed bracket)
5. **Bulan 4:** Uji coba di 1-2 Puskesmas Pembantu di DIY
6. **Bulan 5:** Kumpulkan data validasi, tulis paper ilmiah
7. **Bulan 6:** Persiapan presentasi final + demo fisik

---

## 6. Rencana Cadangan (Plan B)

Jika Denteksi Edge tidak feasible (misalnya Mr. Fakhrurrifqi tidak tersedia), urutan fallback:

1. **AortaGate (rPPG untuk kulit sawo matang)** — Ir. Ridwan Wicaksono (UGM) sebagai dospem alternatif
2. **StrokeLens** — Wahyono (UGM) sebagai dospem alternatif
3. **PneumoSound** — Hubungi Dr. Dhany Arifianto (ITS) untuk kolaborasi lintas kampus
