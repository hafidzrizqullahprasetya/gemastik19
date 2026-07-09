# Analisis Mendalam Pola Kemenangan 20 Finalis Gemastik XVIII 2025 — Divisi PPL

Dokumen ini merupakan sintesis komprehensif dari pembacaan seluruh 20 transkrip presentasi finalis Gemastik 2025 Divisi Pengembangan Perangkat Lunak. Tujuannya: mengekstrak pola kemenangan yang dapat direplikasi dan ditingkatkan untuk Gemastik 2026.

---

## 1. Ringkasan 20 Finalis & Peringkat

| # | Nama Karya | Institusi | Peringkat | Kategori Teknis |
|---|-----------|-----------|-----------|-----------------|
| 1 | **TB Vector** | ITS | Juara 1 | Deep Engineering + IoT |
| 2 | **Snailly** | UNIKOM | Juara 2 | ML + Validasi Lapangan |
| 3 | **Aira** | ITS | Juara 3 | AI Integration + Validasi UMKM |
| 4 | **Fokal** | UI | Best Paper | On-Device AI + Paper Rigor |
| 5 | Sakuin | BINUS | Finalis | Edge-Cloud AI (konsep kuat, tanpa deployment) |
| 6 | Garda | — | Finalis | AI + Queue Architecture |
| 7 | Inkluvia | ITS | Finalis | Accessibility + IoT (Braille) |
| 8 | Netrai | — | Finalis | API Integration (Gemini) |
| 9 | PrediAI | — | Finalis | CNN + Gemini (non-invasif) |
| 10 | Sentra | — | Finalis | Voice-guided fintech (API-heavy) |
| 11 | KiddyGoo | Unud | Finalis | ToxicBERT + Gemini |
| 12 | Larasena | Unsoed | Finalis | AI API + 3D Modeling |
| 13 | Jelasin | PENS | Finalis | IndoBERT + Knowledge Graph |
| 14 | Jisebi | — | Finalis | NLP + Microservice |
| 15 | Manela | — | Finalis | Oceanographic + Flutter |
| 16 | Jejak | — | Finalis | React Native + Gamification |
| 17 | Songlish | — | Finalis | Speech Recognition + Gamification |
| 18 | Solarkeun | — | Finalis | NASA Data + AI Recommendation |
| 19 | Salor | — | Finalis | Random Forest + Satellite |
| 20 | Inkulearn | — | Finalis | PHP + MySQL (CRUD) |

---

## 2. Tujuh Pilar Kemenangan (Winning Formula)

### Pilar 1: Deep Engineering > API Integration

**Pemenang memiliki pipeline AI custom, bukan sekadar memanggil API.**

- **TB Vector (Juara 1):** Pipeline pemrosesan sinyal akustik lengkap — segmentasi, resampling 16kHz, STFT dengan fungsi Hann, FFT (Cooley-Tukey), Mel Filter Bank, DCT ke MFCC. Lalu klasifikasi LSTM/GRU. Ditambah Direction of Arrival (GCC-PHAT) dan inverse beamforming. Ini bukan "panggil API OpenAI" — ini DSP (Digital Signal Processing) tingkat lanjut.
- **Fokal (Best Paper):** Menjalankan YOLOv8 secara on-device pada screen buffer, bukan URL filtering. Paper mereka mengukur latensi inferensi dalam milidetik dan metrik precision/recall.
- **Snailly (Juara 2):** SVM untuk klasifikasi teks situs web + Multimodal LLM (GitBase) untuk konten media sosial. Evolusi dari v1 ke v2 menunjukkan iterasi model.

**Non-pemenang yang gagal di pilar ini:**
- Inkulearn: PHP + MySQL, tanpa AI sama sekali.
- Songlish: Speech recognition off-the-shelf + gamification.
- Solarkeun: NASA Power API + rekomendasi AI sederhana.
- Netrai: Mengandalkan Gemini API sepenuhnya, tanpa model custom.
- Sentra: OpenAI + ElevenLabs API, tidak ada model proprietary.

### Pilar 2: Hardware/IoT = Pembeda Masif

**Satu-satunya finalis dengan integrasi hardware nyata memenangkan Juara 1.**

TB Vector menggunakan Raspberry Pi + I2S microphone array + integrasi CCTV. Ini memberikan:
- Demo fisik yang memukau di depan juri
- Bukti bahwa sistem bekerja di dunia nyata (bukan hanya simulasi)
- Kompleksitas teknis yang tidak bisa ditiru oleh tim yang hanya membuat software

Inkluvia (ITS) juga memiliki hardware (refreshable braille display via MQTT), tapi masalah yang disasar lebih niche.

**Implikasi untuk 2026:** Tim yang membawa prototipe fisik ke final memiliki keunggulan kompetitif yang sangat besar.

### Pilar 3: Validasi Lapangan dengan Metrik Kuantitatif

**SEMUA pemenang memiliki data validasi nyata. Non-pemenang umumnya hanya memiliki demo/simulasi.**

| Karya | Validasi | Metrik |
|-------|----------|--------|
| TB Vector | Uji coba di Stasiun Gubeng | Estimasi penghematan 7,3-21,9 Miliar IDR/tahun, reduksi 365-1095 pasien |
| Snailly | SD Negeri 213 & SMP Negeri 24 Bandung | Testimoni orang tua, efektivitas filtering |
| Aira | 12+ UMKM di 3 kota (Surabaya, Malang) | ASTUTE validation 6.9/7 (excellent) |
| Fokal | Evaluasi akademis ketat | Latensi (ms), precision/recall YOLOv8, model enkripsi matematis |

**Non-pemenang yang lemah validasi:**
- Sakuin: Konsep brilian (behavioral psychology + AI), tapi TIDAK ada deployment nyata. Hanya demo aplikasi.
- Garda: Masalah nyata (QRIS fraud), tapi tidak ada data validasi lapangan.
- PrediAI: Ide menarik (deteksi diabetes dari kuku & lidah), tapi tidak menyebutkan akurasi validasi.
- KiddyGoo: ToxicBERT + Gemini, tapi tidak ada uji coba di sekolah.

### Pilar 4: Isu Nasional Mendesak + Selaras Tema

**Tema 2025: "Pengembangan TIK untuk Mendukung Kemandirian Bangsa"**

Semua pemenang selaras dengan sub-tema kemandirian:
- **TB Vector:** Kemandirian kesehatan (TB #2 dunia, target Indonesia Bebas TB 2030)
- **Snailly:** Kemandirian digital (perlindungan anak dari konten negatif)
- **Aira:** Kemandirian ekonomi (digitalisasi 64 juta UMKM, kontribusi PDB 8.500T)
- **Fokal:** Kemandirian digital (perlindungan anak, selaras RPJPN & SDGs)

**Non-pemenang yang kurang selaras:**
- Solarkeun: Energi surya — relevan tapi presentasi terlalu tipis
- Salor: Zona ikan — niche, tidak terasa "mendesak"
- Songlish: Belajar bahasa Inggris via musik — tidak mendesak

### Pilar 5: Kolaborasi Institusi Nyata

**Pemenang memiliki mitra institusi yang terdokumentasi, bukan hanya "rencana kerjasama."**

- **TB Vector:** RS Khusus Infeksi Universitas Airlangga (pengumpulan data primer)
- **Snailly:** SD Negeri 213 Babakan Ciparay & SMP Negeri 24 Bandung (uji coba lapangan)
- **Aira:** UPT Dinas Koperasi UKM Jawa Timur (pilot 12+ UMKM)
- **Fokal:** Evaluasi akademis ketat (standar paper jurnal internasional)

### Pilar 6: Model Bisnis + Estimasi Dampak Terukur

**Pemenang menyajikan angka spesifik, bukan klaim vague.**

- **TB Vector:** B2G + B2B + SaaS. Penghematan 7,3-21,9 Miliar/tahun.
- **Aira:** ASTUTE 6.9/7. Pilot 12 UMKM. Selaras Asta Cita, SDGs 8, PP No.7/2021.
- **Snailly:** Cross-platform deployment di sekolah nyata.

**Non-pemenang yang vague:**
- Sakuin: "Integrasi dengan OJK" — tapi belum ada MoU atau pilot
- Garda: "Mendeteksi pemalsuan QRIS" — tapi berapa akurasi? Berapa kasus yang terdeteksi?

### Pilar 7: Demo Fisik di Depan Juri

**Finalis yang bisa mendemokan sistem secara langsung di hadapan juri memiliki keunggulan psikologis dan teknis.**

- TB Vector: Membawa prototipe mic array, menunjukkan pelacakan suara real-time
- Snailly: Demo aplikasi cross-platform (mobile + desktop)
- Aira: Demo voice recognition + AI marketing automation
- Fokal: Video demo screen buffer parsing + YOLO overlay

---

## 3. Mengapa 16 Finalis Lainnya TIDAK Menang?

### Kategori A: "CRUD + API" (Tidak Ada Deep Engineering)
- **Inkulearn:** PHP + MySQL. Tidak ada AI. Hanya platform web biasa.
- **Songlish:** Speech recognition off-the-shelf + gamification. SUS score bagus (83.7) tapi teknis tipis.
- **Solarkeun:** Ambil data NASA Power API, beri rekomendasi AI sederhana.
- **Salor:** Random Forest untuk prediksi zona ikan. Presentasi sangat tipis.

### Kategori B: "Konsep Brilian, Tapi Belum Terdeployment"
- **Sakuin (BINUS):** Ide paling inovatif di antara non-pemenang — e-wallet dengan AI guardrail anti-impulsif, TensorFlow Lite edge + cloud hybrid, knowledge distillation. Tapi TIDAK ada deployment nyata, tidak ada pilot, tidak ada validasi lapangan. Konsep > eksekusi.
- **Garda:** Deteksi pemalsuan QRIS dengan 3-layer validation (visual ASPI, cross-validation, lokasi). Masalah nyata dan solusi cerdas, tapi tidak ada data uji coba lapangan.
- **PrediAI:** Deteksi diabetes dari citra kuku & lidah menggunakan CNN + Gemini. Non-invasif dan menarik, tapi tidak menyebutkan akurasi validasi.

### Kategori C: "API Wrapper" (Terlalu Bergantung pada API Pihak Ketiga)
- **Netrai:** AI multimodal untuk tunanetra. Flutter + LiveKit + Gemini. Bergantung sepenuhnya pada Gemini API — tidak ada model custom.
- **Sentra:** Financial inclusion untuk tunanetra. Golang + OpenAI + ElevenLabs. UX bagus tapi tidak ada inovasi AI proprietary.
- **KiddyGoo:** Cyberbullying monitoring. ToxicBERT + Gemini 2.5 Flash. AI-nya hanya memanggil API, tidak ada fine-tuning atau custom pipeline.
- **Larasena:** Digital batik. AI motif generator (Hugging Face) + 3D (Three.js). UAT 4.34/5 bagus, tapi teknisnya hanya integrasi API.

### Kategori D: "Masalah Terlalu Niche / Presentasi Lemah"
- **Jisebi:** Pre-screening manuskrip akademik. NLP + rule-based. Arsitektur microservice bagus, tapi masalah terlalu spesifik dan tidak terasa mendesak.
- **Manela:** Asisten nelayan. Data oseanografi + Python + Flutter. Domain knowledge bagus tapi AI tipis.
- **Jejak:** Pelaporan keselamatan pejalan kaki + rute aman. React Native + gamification. Tidak ada hardware, tidak ada validasi lapangan.
- **Jelasin (PENS):** Deteksi hoaks politik. IndoBERT + Knowledge Graph. Akurasi 71.5% pada 200 berita — terlalu rendah dan dataset terlalu kecil.

---

## 4. Matriks Skor: Pemenang vs Non-Pemenang

Skor 1-5 per pilar (5 = terbaik):

| Karya | Deep Eng | Hardware | Validasi | Urgensi | Institusi | Bisnis | Demo | TOTAL |
|-------|----------|----------|----------|---------|-----------|--------|------|-------|
| **TB Vector** | 5 | 5 | 5 | 5 | 5 | 5 | 5 | **35** |
| **Snailly** | 4 | 2 | 4 | 4 | 4 | 3 | 4 | **25** |
| **Aira** | 3 | 1 | 5 | 4 | 5 | 4 | 4 | **26** |
| **Fokal** | 4 | 1 | 4 | 4 | 3 | 2 | 4 | **22** |
| Sakuin | 4 | 2 | 1 | 3 | 1 | 3 | 3 | 17 |
| Garda | 3 | 1 | 1 | 3 | 1 | 2 | 3 | 14 |
| Inkluvia | 3 | 3 | 2 | 3 | 3 | 2 | 3 | 19 |
| Inkulearn | 1 | 1 | 2 | 2 | 1 | 1 | 2 | 10 |

**Insight:** TB Vector unggul mutlak di semua pilar (35/35). Jarak antara Juara 1 dan Juara 2 sangat besar (35 vs 26). Ini menunjukkan bahwa deep engineering + hardware + validasi lapangan adalah kombinasi yang sangat sulit ditandingi.

---

## 5. Pelajaran Kunci untuk Tim TRPL UGM 2026

### 5.1. Jangan Buat "Aplikasi CRUD + API"
16 dari 20 finalis gagal karena hanya membuat aplikasi yang memanggil API. Juri PPL bisa membedakan antara "panggil Gemini API" dan "bangun pipeline AI custom." Yang terakhir yang menang.

### 5.2. Bawa Hardware ke Final
TB Vector adalah satu-satunya finalis dengan hardware nyata, dan mereka menang Juara 1. Ini bukan kebetulan. Hardware memberikan:
- Bukti konkret bahwa sistem bekerja
- Demo yang memorable di depan juri
- Kompleksitas teknis yang menaikkan "wow factor"

### 5.3. Validasi SEBELUM Final
Jangan datang ke final dengan hanya demo. Datang dengan data: "Kami sudah uji coba di X lokasi, dengan Y pengguna, hasilnya Z% akurasi." Semua pemenang melakukan ini.

### 5.4. Pilih Masalah yang Mendesak & Nasional
Masalah harus terasa "penting" bagi juri yang mungkin bukan domain expert. TB (#2 dunia, 14 kematian/jam) terasa mendesak. "Zona ikan" tidak.

### 5.5. Kolaborasi Institusi = Kredibilitas
Surat kerjasama dari RS, sekolah, atau dinas pemerintah memberikan sinyal bahwa proyek ini serius dan memiliki jalur deployment nyata.

### 5.6. Angka > Kata-kata
"Penghematan 7,3-21,9 Miliar/tahun" jauh lebih kuat daripada "menghemat biaya kesehatan." Selalu kuantifikasi dampak.

### 5.7. Paper Ilmiah yang Rigor = Best Paper
Fokal meraih Best Paper bukan karena aplikasi mereka paling canggih, tapi karena paper mereka paling ketat secara akademis: pengukuran latensi, confusion matrix, model enkripsi matematis.

---

## 6. Formula Kemenangan 2026 (Checklist)

Untuk memenangkan Gemastik PPL 2026, karya kita HARUS memenuhi minimal 5 dari 7 pilar ini:

- [ ] **Deep Engineering:** Pipeline AI custom (bukan API wrapper). Minimal: fine-tuned model, custom preprocessing, atau arsitektur hybrid.
- [ ] **Hardware/IoT:** Prototipe fisik yang bisa dibawa ke final dan didemokan langsung.
- [ ] **Validasi Lapangan:** Uji coba di minimal 1 lokasi nyata dengan metrik kuantitatif (akurasi, latensi, kepuasan pengguna).
- [ ] **Isu Nasional Mendesak:** Masalah yang bisa dijelaskan dalam 1 kalimat dan terasa penting bagi siapa pun.
- [ ] **Kolaborasi Institusi:** Minimal 1 mitra (RS, sekolah, dinas, Puskesmas) dengan surat kerjasama.
- [ ] **Model Bisnis + Angka:** Estimasi dampak terukur (penghematan, jumlah penerima manfaat, ROI).
- [ ] **Demo Fisik:** Sesuatu yang bisa disentuh/dilihat/dicoba oleh juri di babak final.
