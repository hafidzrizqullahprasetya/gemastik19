# Brainstorming Ide People-Centric Gemastik PPL 2026 (Revisi)

**PENTING: Ini divisi PPL (Pengembangan Perangkat Lunak). SOFTWARE adalah bintang utama. IoT hanya pelengkap, bukan inti.**

Dokumen ini direvisi total karena:
1. **HelmetCam DITOLAK** — SADAR Helmet dari ITB sudah juara 2 SASECOM 2026 (helm IoT + PPG + accelerometer untuk deteksi microsleep). Duplikasi langsung.
2. **Fokus PPL** — software engineering yang dalam, bukan hardware/IoT (itu ranah Piranti Cerdas)
3. **Sumber ide diperluas** — dari curhatan Threads/forum (`riset-forum.md`), bukan hanya riset jurnal

**Filter ketat:**
1. Masalah UMUM — semua orang Indonesia tahu/merasakan
2. URGENT — terjadi setiap hari
3. MUDAH dataset — bisa dikumpulkan sendiri (wawancara, survey, crowdsourcing)
4. DIRECT PEOPLE IMPACT — menyentuh nyawa/kesehatan/keamanan manusia langsung
5. BELUM PERNAH dilombakan — tidak ada duplikasi
6. PPL-FIRST — software berat, IoT pelengkap (atau tanpa IoT sama sekali)
7. DEEP ENGINEERING — bukan CRUD, bukan API wrapper

---

## Pola 3 Juara 2025 = DIRECT PEOPLE IMPACT

| Juara | Karya | Siapa Disentuh | Teknologi Inti |
|-------|-------|----------------|----------------|
| 1 | TB Vector | Pasien TB (nyawa) | DSP akustik + LSTM |
| 2 | Snailly/Fokal | Anak-anak (konten berbahaya) | SVM/YOLO on-device |
| 3 | Aira | UMKM (nafkah) | AI integration |

**Pola:** Semua menyentuh **individu/keluarga** langsung. Bukan sistem pemerintah. Bukan infrastruktur industri.

---

## Gap dari Threads/Forum (Curhatan Masyarakat)

Dari `riset-forum.md`, masalah yang paling banyak dikeluhkan dan emosional:

| Topik | Curhatan Utama | Skala Masalah |
|-------|----------------|---------------|
| **Kesehatan Mental** | "Di Indonesia masih dianggap kurang iman", "takut dibilang cari perhatian", hidden disability sangat sulit | Jutaan orang, stigma besar |
| **Scam & Judol** | Pinjol ilegal, penipuan WA, judi online 3.2 juta pemain | Rp 45T kerugian/tahun |
| **UMKM** | "60% mati dalam 3 tahun", uang kecampur, nggak bisa bedain omset vs profit | 64 juta UMKM |
| **Pendidikan** | 69% dewasa Jakarta literasi level 1, PISA turun terus, kurikulum ganti-ganti | 50 juta siswa |
| **ADHD** | "Banyak di Indonesia tapi nggak banyak yang paham", self-diagnosis tanpa validasi | Jutaan tidak terdiagnosis |
| **Parenting** | Gentle parenting gagal, fatherless, bingung cara mendidik anak | Semua keluarga Indonesia |

---

## IDE 1: JiwaBicara — Skrining Kesehatan Mental Berbasis Analisis Suara & Teks

### Mengapa Ini Masalah Umum & Urgent?

**Dari Threads:**
> "Tinggal di Indonesia luar biasa challenging buat orang dengan hidden disability" — @winaringsatuti
> "Ga bisa banyak ngeluh karena takut dibilang cari perhatian, kurang iman" — @pluchenka
> "Di Indonesia kita kudu struggle dengan pola pikir masyarakatnya" — @hida_syifatr

**Statistik:**
- **15.5 juta orang Indonesia** mengalami gangguan mental (Riskesdas 2018)
- **Rasio psikolog: 1 per 300.000 penduduk** (WHO standar: 1 per 30.000)
- **90% orang dengan depresi tidak pernah cari bantuan** (stigma + akses)
- **Bunuh diri: 10.000+ kasus/tahun** (estimasi, underreported karena stigma)
- Hidden disability (ADHD, autisme, bipolar, OCD) hampir tidak terdeteksi

**Direct People Impact:**
- Menyentuh **jutaan orang** yang menderita dalam diam
- Keluarga yang tidak paham kenapa anggota keluarganya "berubah"
- Remaja/mahasiswa yang depresi tapi takut ke psikolog
- Orang dengan ADHD/autisme yang tidak tahu mereka neurodivergent

**Mengapa Urgent:**
- Tidak ada tool skrining kesehatan mental berbahasa Indonesia yang valid
- Orang Indonesia tidak bisa akses psikolog (mahal, jauh, stigma)
- Banyak yang self-diagnosis dari TikTok/Instagram tanpa validasi klinis

### Cara Collect Dataset (Tanpa Ethical Clearance RS)

**Metode 1: Wawancara + Rekaman Suara (dengan informed consent)**
- Rekrut 50-100 relawan (mahasiswa, komunitas) untuk rekam suara 5 menit
- Topik: ceritakan hari ini, perasaan minggu ini, stresor utama
- Label oleh psikolog berlisensi (kolaborasi dengan fakultas psikologi UGM)
- Label: tingkat kecemasan (GAD-7), depresi (PHQ-9), stres (PSS-10)

**Metode 2: Crowdsourcing via App**
- Buat app sederhana: "Ceritakan perasaanmu hari ini" (rekam suara 1-3 menit)
- User mengisi PHQ-9/GAD-7 sebagai self-assessment
- Data suara + skor PHQ-9/GAD-7 terkumpul otomatis
- Target: 500+ sampel dalam 2 bulan

**Metode 3: Dataset Publik**
- DAIC-WOZ (Distress Analysis Interview Corpus) — dataset suara depresi (bahasa Inggris)
- Fine-tune dengan data lokal Indonesia (bahasa + budaya)

**Estimasi waktu collect dataset:** 6-8 minggu
**Biaya:** Rp 3-5 juta (insentif relawan + jasa psikolog untuk labeling)

### Teknologi yang Digunakan (PPL-FIRST, Pure Software)

**1. Speech Emotion Recognition (SER) — Deep Engineering Utama**
- Ekstraksi fitur akustik: MFCC, pitch, energy, jitter, shimmer, formant
- OpenSMILE atau librosa untuk feature extraction
- Custom CNN/LSTM untuk klasifikasi emosi dari suara
- Deteksi pola: monoton (depresi), cepat/gelisah (cemas), lambat/lelah (burnout)

**2. NLP Analisis Teks (jika user memilih input teks)**
- Fine-tune IndoBERT untuk deteksi sentimen negatif, hopelessness, self-harm ideation
- Keyword extraction: "capek", "nggak kuat", "percuma", "sendiri"
- Contextual analysis: bedakan "aku capek" (fisik) vs "aku capek hidup" (depresi)

**3. Multi-Modal Fusion**
- Gabungkan skor suara (SER) + skor teks (NLP) + skor kuesioner (PHQ-9/GAD-7)
- Weighted ensemble: 0.4*voice + 0.3*text + 0.3*questionnaire
- Output: tingkat risiko (rendah/sedang/tinggi) + rekomendasi

**4. User Experience**
- Mobile app (Flutter/React Native)
- User buka app → pilih "Cerita" (suara) atau "Tulis" (teks)
- Sistem analisis → tampilkan hasil + rekomendasi
- Jika risiko tinggi: tampilkan hotline, rekomendasi psikolog terdekat, self-help resources

**Framework:**
- PyTorch/TensorFlow (SER model)
- HuggingFace Transformers (IndoBERT fine-tuning)
- Flutter (mobile app)
- FastAPI (backend ringan, optional)

### Deep Engineering yang Dibutuhkan

1. **Custom SER Model untuk Bahasa Indonesia:**
   - Tidak ada model SER yang dilatih khusus untuk bahasa Indonesia
   - Fine-tune wav2vec2-XLSR (multilingual) dengan data lokal
   - Optimasi untuk jalan on-device (quantization)
   - Latency < 500ms per 30 detik audio

2. **Cultural Adaptation:**
   - Orang Indonesia cenderung tidak langsung bilang "saya depresi"
   - Mereka bilang: "capek banget", "nggak semangat", "pengen sendiri dulu"
   - Model harus paham konteks budaya Indonesia (bukan terjemahan dari bahasa Inggris)

3. **Privacy-Preserving:**
   - Semua analisis on-device (suara tidak dikirim ke server)
   - Data hanya disimpan lokal (encrypted)
   - User bisa hapus data kapan saja

### Evaluasi 7 Pilar Kemenangan

| Pilar | Skor | Alasan |
|-------|------|--------|
| Deep Engineering | 9/10 | Custom SER + NLP + multi-modal fusion |
| Hardware/IoT | 2/10 | Pure software (tapi ini PPL, bukan Piranti Cerdas) |
| Validasi Lapangan | 8/10 | Uji coba 200 user + validasi psikolog |
| Isu Nasional Mendesak | 10/10 | 15.5 juta orang, stigma besar, bunuh diri |
| Kolaborasi Institusi | 8/10 | Mitra: fakultas psikologi UGM, komunitas |
| Model Bisnis | 7/10 | Freemium app, B2B ke perusahaan (employee wellness) |
| Demo Fisik | 8/10 | Live demo: user cerita → sistem analisis real-time |

**Total: 52/70** — Sangat kuat untuk PPL

### Mengapa Belum Pernah Dilombakan?

- Kompetisi sebelumnya fokus pada chatbot kesehatan mental (API wrapper)
- Belum ada yang buat SER khusus bahasa Indonesia
- Stigma membuat orang ragu develop di domain ini
- Butuh kolaborasi dengan psikolog (banyak tim tidak mau repot)

---

## IDE 2: WaspadaAI — Detektor Scam & Judi Online Real-Time untuk WhatsApp

### Mengapa Ini Masalah Umum & Urgent?

**Dari Threads:**
- Judi online: 3.2 juta pemain aktif, kerugian Rp 30 triliun/tahun
- Pinjol ilegal: teror, intimidasi, data pribadi disebar
- Scam WA: "Anda menang hadiah", "cucu kecelakaan", "investasi pasti untung"

**Statistik:**
- **Penipuan online: Rp 45 triliun kerugian/tahun** (Kominfo 2024)
- **Judi online: 3.2 juta pemain aktif**, kerugian Rp 30 triliun/tahun
- **Pinjol ilegal: 5.000+ aplikasi** aktif, jutaan korban
- **Scam telepon/WA: 10.000+ laporan/bulan** ke Kemenkominfo
- **Korban utama: ibu rumah tangga, lansia, mahasiswa** (tidak melek teknologi)

**Direct People Impact:**
- Menyentuh **jutaan pengguna HP** setiap hari
- Keluarga yang kehilangan tabungan karena scam
- Lansia yang tertipu "cucu kecelakaan" scam
- Mahasiswa yang terjebak judi online dan pinjol
- Korban pinjol ilegal yang diteror debt collector

**Mengapa Urgent:**
- Tidak ada perlindungan on-device di HP murah
- WhatsApp/telepon tidak punya filter scam bawaan
- Korban sudah tertipu sebelum sadar
- Scammer semakin canggih (AI voice cloning, deepfake)

### Cara Collect Dataset (Tanpa Ethical Clearance)

**Metode 1: Crowdsourcing via App**
- Buat app sederhana: "Laporkan pesan scam yang kamu terima"
- User forward pesan WA/SMS → otomatis terkumpul di database
- Target: 10.000+ sampel dalam 2 bulan
- Label: scam (jenis: hadiah, pinjol, judol, romance, investasi) atau legitimate

**Metode 2: Scraping Forum Keluhan**
- Scrape Kaskus, Twitter/X, Reddit Indonesia untuk pola scam
- Kumpulkan: nomor telepon, kata-kata, link phishing
- Analisis pola: modus operandi, bahasa yang digunakan

**Metode 3: Dataset Publik**
- SMS spam dataset (UCI ML Repository)
- Blacklist nomor dari Truecaller API (jika tersedia)
- Phishing URL dataset (PhishTank, OpenPhish)

**Estimasi waktu collect dataset:** 4-6 minggu
**Biaya:** Rp 1-3 juta (server + insentif pelapor)

### Teknologi yang Digunakan (PPL-FIRST, Pure Software)

**1. NLP Scam Detection — Deep Engineering Utama**
- Fine-tune IndoBERT-tiny untuk klasifikasi teks scam
- Deteksi pola bahasa scam Indonesia:
  - Urgency: "segera", "hari ini juga", "jangan sampai terlambat"
  - Threat: "akan dilaporkan ke polisi", "data Anda disebar"
  - Promise: "pasti untung", "dijamin kaya", "hadiah jutaan"
  - Manipulation: "rahasia", "khusus untuk Anda", "kesempatan terakhir"
- Contextual understanding: bedakan "transfer sekarang" (scam) vs "transfer sekarang ya" (teman)

**2. URL/Link Analysis**
- Deteksi link phishing (domain mirip, HTTPS palsu, shortener)
- Cek reputation domain (database lokal + optional API)
- Analisis landing page (jika user klik link)

**3. Pattern Recognition**
- Nomor telepon blacklist (database lokal, crowdsourced)
- Frekuensi pesan (scammer sering kirim berulang)
- Time pattern (scam sering dikirim jam aneh)
- Network analysis (deteksi sindikat: nomor yang saling terhubung)

**4. User Education**
- Setiap pesan yang terdeteksi scam: tampilkan penjelasan kenapa
- "Pesan ini mengandung pola urgency + promise + link mencurigakan"
- Edukasi user tentang modus scam terbaru
- Tips: "Jangan pernah transfer uang tanpa verifikasi langsung"

**Framework:**
- PyTorch (IndoBERT fine-tuning)
- TensorFlow Lite (on-device inference)
- Android Accessibility Service (baca notifikasi WA/SMS)
- Room Database (lokal, encrypted)
- Flutter (UI + dashboard)

### Deep Engineering yang Dibutuhkan

1. **Custom IndoBERT-tiny untuk Scam:**
   - Fine-tune dengan 10.000+ sampel scam lokal
   - Quantization INT8 untuk jalan di HP murah
   - Latency < 50ms per pesan
   - Update model berkala (scammer ganti modus)

2. **Multi-Modal Scoring:**
   - Text score (NLP) + URL score (link analysis) + Network score (pattern)
   - Weighted ensemble: 0.5*text + 0.3*url + 0.2*network
   - Threshold adaptif (user bisa set sensitivity)
   - Confidence level: rendah/sedang/tinggi

3. **Privacy-Preserving:**
   - Semua analisis on-device (pesan tidak dikirim ke server)
   - Hanya metadata (nomor, timestamp) yang dikirim untuk crowdsourcing (opt-in)
   - Enkripsi database lokal
   - User bisa hapus semua data

4. **Adversarial Robustness:**
   - Scammer akan coba bypass (ganti kata, pakai emoji, typo)
   - Model harus robust terhadap adversarial attacks
   - Data augmentation: typo, emoji, singkatan, bahasa gaul

### Evaluasi 7 Pilar Kemenangan

| Pilar | Skor | Alasan |
|-------|------|--------|
| Deep Engineering | 9/10 | Custom NLP + multi-modal + adversarial robustness |
| Hardware/IoT | 2/10 | Pure software (tapi ini PPL) |
| Validasi Lapangan | 9/10 | Uji coba 500 user, ukur precision/recall |
| Isu Nasional Mendesak | 10/10 | Rp 45T kerugian, semua orang kena |
| Kolaborasi Institusi | 7/10 | Mitra: komunitas korban, Kemenkominfo |
| Model Bisnis | 8/10 | Freemium app, B2B ke bank/fintech |
| Demo Fisik | 9/10 | Live demo: forward pesan scam → deteksi real-time |

**Total: 54/70** — Sangat kuat untuk PPL

### Mengapa Belum Pernah Dilombakan?

- Kompetisi sebelumnya fokus pada chatbot customer service
- Truecaller tidak on-device dan tidak gratis
- Belum ada scam detector khusus bahasa Indonesia + konteks lokal
- Privacy concern membuat orang ragu develop
- Butuh dataset scam lokal (banyak tim tidak mau repot collect)

---

## IDE 3: CerdasUKM — AI Financial Advisor untuk UMKM

### Mengapa Ini Masalah Umum & Urgent?

**Dari Threads:**
> "60% UMKM di Indonesia mati dalam 3 tahun pertama" — @kholis.id
> "Uang pribadi & usaha masih kecampur" — masalah #1 dari 13 masalah UMKM
> "Nggak bisa bedain omset vs profit" — banyak yang merasa untung padahal rugi

**Statistik:**
- **64 juta UMKM** di Indonesia (99% dari total usaha)
- **60% mati dalam 3 tahun pertama** (Kemenkop UKM)
- **70% tidak punya pencatatan keuangan** yang rapi
- **80% mencampur uang pribadi dan usaha**
- Penyebab utama kematian: cashflow negatif, tidak tahu profit sebenarnya

**Direct People Impact:**
- Menyentuh **64 juta pemilik UMKM** dan keluarganya
- Pedagang kecil yang merasa untung padahal rugi
- Warung, toko kelontong, penjual online yang tidak tahu kesehatan bisnisnya
- Keluarga yang kehilangan nafkah karena UMKM bangkrut

**Mengapa Urgent:**
- App pembukuan existing (BukuWarung, BukuKas) hanya catat transaksi
- Tidak ada yang kasih **insight AI**: "bisnismu akan kehabisan uang dalam 2 minggu"
- UMKM tidak bisa afford konsultan keuangan (mahal)
- Banyak yang tidak tahu cara baca laporan keuangan

### Cara Collect Dataset (Tanpa Ethical Clearance)

**Metode 1: Wawancara UMKM**
- Wawancara 30-50 pemilik UMKM (warung, toko, online seller)
- Kumpulkan data transaksi 3-6 bulan terakhir (jika ada)
- Pahami pola: kapan cashflow negatif, kapan untung/rugi

**Metode 2: Simulasi Data**
- Buat dataset sintetis berdasarkan pola UMKM nyata
- Variasi: warung makan, toko kelontong, online seller, jasa
- Label: sehat, warning, kritis

**Metode 3: Kolaborasi dengan App Pembukuan**
- Minta dataset anonim dari BukuWarung/BukuKas (jika memungkinkan)
- Atau dari koperasi/BPR yang punya data UMKM

**Estimasi waktu collect dataset:** 6-8 minggu
**Biaya:** Rp 2-4 juta (insentif UMKM + data collection)

### Teknologi yang Digunakan (PPL-FIRST, Pure Software)

**1. Auto-Categorization — Deep Engineering Utama**
- NLP untuk klasifikasi transaksi otomatis
- Bedakan: "beli beras 50kg" (HPP) vs "beli makan siang" (pribadi)
- Deteksi transaksi mencurigakan (pengeluaran pribadi yang besar)
- Fine-tune IndoBERT untuk konteks UMKM Indonesia

**2. Cash Flow Prediction**
- Time series forecasting (LSTM/Prophet) untuk prediksi arus kas
- Input: data transaksi historis, pola musiman, hari libur
- Output: prediksi cashflow 7/14/30 hari ke depan
- Alert jika diprediksi akan negatif

**3. Financial Health Scoring**
- Skor kesehatan bisnis: 0-100
- Faktor: profit margin, cashflow, debt ratio, inventory turnover
- Rekomendasi actionable: "kurangi stok X", "naikkan harga Y"
- Benchmark dengan UMKM sejenis (anonim)

**4. Natural Language Insights**
- User tidak perlu baca grafik
- Sistem kasih insight dalam bahasa sehari-hari:
  - "Bulan ini untungmu turun 20% karena harga bahan naik"
  - "Kamu spending Rp 500rb/minggu untuk pribadi, itu 30% dari profit"
  - "Stok mie instanmu akan habis dalam 5 hari, siap-siap beli lagi"

**Framework:**
- PyTorch (time series + NLP)
- Flutter (mobile app)
- FastAPI (backend)
- PostgreSQL (database)

### Deep Engineering yang Dibutuhkan

1. **Custom Transaction Classifier:**
   - Fine-tune IndoBERT dengan dataset transaksi UMKM
   - Bedakan: HPP, operasional, pribadi, investasi, hutang
   - Akurasi > 90% untuk kategori utama
   - Latency < 100ms per transaksi

2. **Cash Flow Forecasting:**
   - LSTM/Prophet untuk prediksi 7-30 hari
   - Handle sparse data (UMKM tidak selalu catat setiap hari)
   - Confidence interval (prediksi + uncertainty)
   - Update real-time saat transaksi baru masuk

3. **Anomaly Detection:**
   - Deteksi transaksi tidak biasa (pengeluaran tiba-tiba besar)
   - Deteksi pola fraud (jika ada karyawan yang catat transaksi)
   - Alert user jika ada anomali

### Evaluasi 7 Pilar Kemenangan

| Pilar | Skor | Alasan |
|-------|------|--------|
| Deep Engineering | 8/10 | NLP + time series + anomaly detection |
| Hardware/IoT | 2/10 | Pure software (tapi ini PPL) |
| Validasi Lapangan | 8/10 | Uji coba 50 UMKM, ukur akurasi prediksi |
| Isu Nasional Mendesak | 9/10 | 64 juta UMKM, 60% mati dalam 3 tahun |
| Kolaborasi Institusi | 8/10 | Mitra: koperasi, dinas UMKM, BukuWarung |
| Model Bisnis | 9/10 | Freemium, premium Rp 50rb/bulan |
| Demo Fisik | 7/10 | Demo app + insight real-time |

**Total: 51/70** — Kuat untuk PPL

### Mengapa Belum Pernah Dilombakan?

- App existing (BukuWarung, BukuKas) hanya catat, tidak analisis
- Belum ada AI financial advisor khusus UMKM Indonesia
- Butuh dataset transaksi UMKM (sulit dapat)
- Banyak tim tidak paham konteks UMKM

---

## IDE 4: BacaCerdas — Asesmen Literasi & Numerasi Anak untuk Orang Tua

### Mengapa Ini Masalah Umum & Urgent?

**Dari Threads:**
> "69% orang dewasa di Jakarta punya kemampuan literasi level 1" — @anaksukabaca.id
> "Bahkan dari yang sudah kuliah, 42% masih di level itu juga"
> "Belum paham pecahan, sudah dapat aljabar" — fondasi bolong dari awal

**Statistik:**
- **PISA 2022: Indonesia peringkat 69 dari 81 negara** (membaca, matematika, sains)
- **69% dewasa Jakarta literasi level 1** (OECD)
- **Kemampuan membaca turun konsisten sejak 2009**
- **54% pekerja tidak sesuai jurusan** (imbas fondasi lemah)
- Kurikulum ganti terus: KBK → KTSP → K13 → Kurikulum Merdeka

**Direct People Impact:**
- Menyentuh **50 juta siswa** dan orang tua mereka
- Orang tua yang tidak tahu anak mereka tertinggal
- Guru yang kesulitan asesmen individual
- Anak yang frustrasi karena tidak paham materi

**Mengapa Urgent:**
- Tidak ada tool asesmen literasi yang bisa dipakai orang tua di rumah
- Orang tua hanya tahu nilai rapor (tidak detail)
- Anak naik kelas padahal fondasi bolong ("belum paham pecahan, sudah dapat aljabar")

### Cara Collect Dataset (Tanpa Ethical Clearance)

**Metode 1: Kolaborasi dengan Sekolah**
- Rekam 50-100 anak SD/SMP saat baca teks (dengan izin orang tua)
- Label oleh guru: lancar, sedang, kesulitan
- Rekam juga jawaban soal numerasi

**Metode 2: Crowdsourcing via App**
- Buat app: "Tes literasi anakmu di rumah"
- Anak baca teks → rekam suara → jawab soal
- Data terkumpul otomatis (dengan consent)
- Target: 500+ sampel dalam 2 bulan

**Metode 3: Dataset Publik**
- Dataset membaca anak (jika ada) dari riset pendidikan
- Fine-tune dengan data lokal

**Estimasi waktu collect dataset:** 6-8 minggu
**Biaya:** Rp 3-5 juta (insentif sekolah + peralatan rekam)

### Teknologi yang Digunakan (PPL-FIRST, Pure Software)

**1. Speech Analysis untuk Literasi — Deep Engineering Utama**
- Analisis rekaman suara anak saat baca teks
- Deteksi: kelancaran (words per minute), akurasi (mispronunciation), intonasi
- Bandingkan dengan benchmark per usia
- Output: tingkat literasi (sangat baik, baik, sedang, perlu bantuan)

**2. Numerasi Assessment**
- Soal numerasi adaptif (difficulty menyesuaikan level anak)
- Analisis jawaban + waktu jawab
- Deteksi konsep yang belum dikuasai (pecahan, aljabar, geometri)

**3. Personalized Recommendations**
- Berdasarkan hasil asesmen, kasih rekomendasi:
  - "Anakmu lemah di pecahan, coba latihan ini"
  - "Kecepatan membacanya sudah baik, tapi comprehension perlu ditingkatkan"
  - "Fokuskan latihan di soal cerita (word problems)"
- Rekomendasi buku/latihan yang sesuai level

**4. Progress Tracking**
- Orang tua bisa lihat perkembangan anak dari waktu ke waktu
- Grafik: kecepatan baca, akurasi, skor numerasi
- Alert jika ada penurunan signifikan

**Framework:**
- PyTorch (speech analysis)
- Flutter (mobile app)
- FastAPI (backend)
- PostgreSQL (database)

### Deep Engineering yang Dibutuhkan

1. **Custom Reading Fluency Model:**
   - Deteksi kelancaran baca dari suara (words per minute, pause, repetition)
   - Deteksi mispronunciation (bandingkan dengan teks asli)
   - Fine-tune untuk bahasa Indonesia + logat daerah
   - Latency < 1 detik per kalimat

2. **Adaptive Numeracy Engine:**
   - Item Response Theory (IRT) untuk sesuaikan difficulty
   - Deteksi konsep yang belum dikuasai (knowledge graph)
   - Personalized question sequence

3. **Benchmark Comparison:**
   - Bandingkan hasil anak dengan benchmark nasional/internasional
   - Visualisasi: "Anakmu di top 30% untuk usia 10 tahun"

### Evaluasi 7 Pilar Kemenangan

| Pilar | Skor | Alasan |
|-------|------|--------|
| Deep Engineering | 8/10 | Speech analysis + adaptive numeracy + IRT |
| Hardware/IoT | 2/10 | Pure software (tapi ini PPL) |
| Validasi Lapangan | 8/10 | Uji coba 200 anak, validasi dengan guru |
| Isu Nasional Mendesak | 9/10 | PISA rendah, 69% literasi level 1 |
| Kolaborasi Institusi | 9/10 | Mitra: sekolah, dinas pendidikan |
| Model Bisnis | 8/10 | Freemium, premium Rp 30rb/bulan |
| Demo Fisik | 8/10 | Demo: anak baca → analisis real-time |

**Total: 52/70** — Sangat kuat untuk PPL

### Mengapa Belum Pernah Dilombakan?

- Kompetisi sebelumnya fokus pada e-learning platform (bukan asesmen)
- Belum ada tool asesmen literasi berbasis suara untuk bahasa Indonesia
- Butuh kolaborasi dengan sekolah (banyak tim tidak mau repot)
- Orang tua tidak sadar mereka butuh tool ini (perlu edukasi)

---

## Perbandingan 4 Ide PPL People-Centric

| Kriteria | JiwaBicara | WaspadaAI | CerdasUKM | BacaCerdas |
|----------|------------|-----------|-----------|------------|
| **Direct People Impact** | 10/10 (nyawa) | 9/10 (uang) | 9/10 (nafkah) | 9/10 (masa depan) |
| **Masalah Umum** | 9/10 (15.5 juta) | 10/10 (semua pengguna HP) | 9/10 (64 juta UMKM) | 9/10 (50 juta siswa) |
| **Urgensi** | 10/10 (bunuh diri) | 10/10 (Rp 45T/tahun) | 8/10 (60% mati) | 9/10 (PISA rendah) |
| **Dataset Mudah** | 7/10 (butuh psikolog) | 9/10 (crowdsourcing) | 7/10 (wawancara UMKM) | 8/10 (kolaborasi sekolah) |
| **Deep Engineering** | 9/10 | 9/10 | 8/10 | 8/10 |
| **PPL-First** | 10/10 | 10/10 | 10/10 | 10/10 |
| **Demo Spektakuler** | 8/10 | 9/10 | 7/10 | 8/10 |
| **Belum Dilombakan** | 10/10 | 10/10 | 9/10 | 10/10 |
| **Biaya Develop** | Rp 5 juta | Rp 3 juta | Rp 4 juta | Rp 5 juta |
| **Waktu Develop** | 4-5 bulan | 3-4 bulan | 4-5 bulan | 4-5 bulan |
| **TOTAL SKOR** | **91/100** | **95/100** | **87/100** | **89/100** |

---

## Rekomendasi: WaspadaAI (Detektor Scam & Judi Online)

**Mengapa WaspadaAI menang:**

1. **Direct People Impact tinggi** — melindungi jutaan orang dari kehilangan uang
2. **Masalah paling umum** — semua pengguna HP kena (scam WA, pinjol, judol)
3. **Paling urgent** — Rp 45 triliun kerugian/tahun, terjadi setiap detik
4. **Dataset paling mudah** — crowdsourcing (user forward pesan scam)
5. **Deep engineering kuat** — custom NLP + multi-modal + adversarial robustness
6. **PPL-first** — pure software, tidak butuh hardware
7. **Demo spektakuler** — live demo: forward pesan scam → deteksi real-time
8. **Belum pernah dilombakan** — tidak ada scam detector bahasa Indonesia
9. **Biaya rendah** — hanya butuh server + insentif pelapor
10. **Model bisnis jelas** — freemium app, B2B ke bank/fintech

**Pola kemenangan yang sama dengan 3 juara 2025:**
- TB Vector: deteksi penyakit (nyawa) → WaspadaAI: deteksi scam (hidup)
- Snailly/Fokal: lindungi anak (vulnerable) → WaspadaAI: lindungi lansia/ibu (vulnerable)
- Aira: bantu UMKM (nafkah) → WaspadaAI: lindungi uang rakyat (nafkah)

**Alternatif kuat: JiwaBicara** (jika ingin impact nyawa lebih langsung)

---

## Langkah Berikutnya

1. **Pilih 1 ide** (rekomendasi: WaspadaAI atau JiwaBicara)
2. **Cari dospem relevan:**
   - WaspadaAI: dosen NLP/security
   - JiwaBicara: dosen NLP + kolaborasi fakultas psikologi
   - CerdasUKM: dosen AI + kolaborasi ekonomi/bisnis
   - BacaCerdas: dosen NLP/speech + kolaborasi pendidikan
3. **Mulai collect dataset** (langkah paling kritis dan memakan waktu)
4. **Bangun MVP** dalam 6-8 minggu
5. **Cari mitra validasi** (komunitas korban/sekolah/UMKM)
6. **Tunggu pengumuman tema 2026** — sesuaikan framing jika perlu

---

## Catatan Penting

**Mengapa HelmetCam dihapus:**
- SADAR Helmet dari ITB sudah juara 2 SASECOM 2026
- Menggunakan PPG + accelerometer + gyroscope untuk deteksi microsleep
- Duplikasi langsung, risiko diskualifikasi tinggi
- Lagipula, HelmetCam terlalu berat ke IoT (itu ranah Piranti Cerdas, bukan PPL)

**Mengapa fokus PPL-first:**
- Divisi PPL = Pengembangan Perangkat Lunak
- Software engineering yang dalam adalah nilai utama
- IoT hanya pelengkap (jika ada), bukan bintang
- Jika mau fokus IoT, ikut divisi Piranti Cerdas

**Mengapa ide dari Threads/forum:**
- Curhatan masyarakat = masalah nyata yang dirasakan
- Bukan masalah teoritis dari jurnal
- Lebih mudah relate dan validasi
- Dataset bisa dikumpulkan dari masyarakat langsung
