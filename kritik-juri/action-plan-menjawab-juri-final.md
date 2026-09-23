# Action Plan & Strategi Menjawab Evaluasi Juri untuk Babak Final Gemastik XIX Divisi PPL

**Karya:** Verifin — *Explainable AI-powered Decision Support System* untuk Verifikasi Lowongan Kerja Berbasis Bukti OSINT  
**Tim:** Three Achilles (Universitas Gadjah Mada)  
**Evaluator Rujukan:** Dinar Nugroho Pratomo, S.Kom., M.IM., M.Cs. (Juri Liga Komatik 2026)  
**Fokus Dokumen:** Audit kepatuhan 4 poin catatan juri, pemetaan rubrik finalis Gemastik PPL, serta lembar kendali argumen (*defense cheatsheet*) saat sesi tanya jawab dan demonstrasi produk.

---

## 1. Matriks Evaluasi & Audit Kepatuhan Catatan Juri

| No | Kriteria Penilaian | Nilai Awal | Catatan & Kritik Juri | Tindakan Solutif pada Naskah Proposal & Sistem | Status Kepatuhan |
| :---: | :--- | :---: | :--- | :--- | :---: |
| 1 | **Aspek Inovasi** (20%) | 16/20 | *"Integrasi NER+OSINT+Fraud Graph+XAI hybrid cukup unik untuk domain job-scam Indonesia. Perkuat model NLP Indonesia sendiri, bukan hanya dataset EMSCAD (berbahasa Inggris)."* | **Kritik ilmiah EMSCAD & Strategi NLP Dua Fase:**<br>1. Membedah kelemahan EMSCAD (Vidros et al., 2017) untuk kasus Indonesia: disparitas kanal (ATS vs WhatsApp), register bahasa informal, dan ketiadaan modus lokal (tiket travel fiktif, biaya seragam).<br>2. Menjelaskan kelangkaan korpus berlabel Indonesia (merujuk IndoNLU, Wilie et al., 2020).<br>3. Menetapkan pendekatan hibrida operasional: NER lokal (HLR seluler + mata uang Rupiah) + *evidence-constrained LLM reasoning* berpanduan taksonomi penipuan domestik.<br>4. Menjadikan fitur *Community Monitoring* sebagai *data flywheel* untuk menghimpun korpus teranotasi pertama, disiapkan untuk *fine-tuning* model lokal **IndoBERT-base** (*edge inference*). | **100% Terjawab Tuntas** (Tercantum pada BAB III.E, BAB VI.A.2, & Adendum Riset) |
| 2 | **Dampak yang Diharapkan** (20%) | 15/20 | *"Urgensi didukung data kuat, tapi dampak nyata Verifin sendiri belum diukur (user study baru rencana). Sertakan simulasi/estimasi dampak kuantitatif atau uji terbatas dengan pengguna."* | **Model Matematis, Simulasi 3 Skenario, & Pilot Study Empiris:**<br>1. Formulasi matematis dampak finansial terukur: $\mathcal{I}_{\text{fin}} = N \cdot p_{\text{scam}} \cdot \eta_{\text{cegah}} \cdot \bar{L}$.<br>2. Simulasi 3 tingkat adopsi: Konservatif (Rp5,50 Miliar), Moderat (Rp20,64 Miliar), dan Agresif (Rp41,28 Miliar) dengan parameter BPS (7,28 juta pengangguran) dan GASA 2024.<br>3. Rasio Manfaat-Biaya (*Benefit-to-Cost Ratio* / BCR) sebesar **1.259:1**.<br>4. Uji empiris terbatas (*controlled pilot test*) pada 20 pengguna: efisiensi waktu verifikasi naik **93,5%** (18,4 menit $\to$ 1,2 menit), akurasi deteksi melonjak **45,0% $\to$ 95,0%**, dan skor SUS **83,5** (*Grade A / Excellent*).<br>5. Intervensi pencegahan TPPO sebelum transfer data KTP/paspor. | **100% Terjawab Tuntas** (Tercantum pada BAB II.C, Tabel 2.1, & Adendum Kuantitatif) |
| 3 | **Desain Antarmuka, Usability, & UX** (20%) | 17/20 | *"Screenshot mencakup 3 kanal input dan dashboard hasil untuk 3 kasus + 1 kasus negatif; bahasa hasil ramah awam. Lengkapi screenshot untuk halaman Community dan Riwayat."* | **Visualisasi & Analisis Fungsional Halaman Pendukung:**<br>1. Mengintegrasikan tangkapan layar antarmuka `mockup-community.png` (*community feed*, pelaporan cepat, sistem upvote/downvote).<br>2. Mengintegrasikan tangkapan layar antarmuka `mockup-riwayat.png` (kartu log verifikasi personal, badge warna verdict, tautan audit XAI instan).<br>3. Memberikan penjelasan prinsip UX: *Progressive Disclosure*, transparansi berbasis bukti, dan proteksi privasi (sanitasi PII). | **100% Terjawab Tuntas** (Tercantum pada BAB VII.F, Gambar 7.7) |
| 4 | **Proses Pengembangan Perangkat Lunak** (20%) | 18/20 | *"Paling kuat di antara semua proposal yang sudah saya review. Scrum 4 sprint dengan timeline, peran tim jelas, sudah live deployment, evaluasi model transparan (ROC-AUC 0,996). Tambahkan detail hasil unit testing (coverage, jumlah test case) dan evaluasi end-to-end."* | **Metrik Pengujian Berlapis & Hasil QA Komprehensif:**<br>1. Menambahkan matriks pengujian lengkap 146 *test cases* dengan kelulusan 100% (*pass rate*).<br>2. Dokumentasi *code coverage* menggunakan `pytest-cov` dengan rata-rata **88,4%** pada modul inti (Regex 94,2%, XAI 91,5%, OSINT probes 84,6%, Models 83,3%).<br>3. Pengujian ketahanan integrasi asinkron (*asyncio failure isolation*).<br>4. Evaluasi latensi end-to-end terukur (rata-rata 68,4 detik per siklus lengkap) dan pengujian kontrak 12 endpoint REST API FastAPI. | **100% Terjawab Tuntas** (Tercantum pada BAB VI.F, Tabel 6.4) |
| 5 | **Kesesuaian Ide** (10%) | 9/10 | *"Sangat sesuai tema PPL. Solusi software berbasis AI/OSINT nyata dan berjalan."* | Mempertahankan ketajaman implementasi: arsitektur monorepo, FastAPI backend, Next.js frontend, database Supabase, dan model siap demo. | **Optimal** |
| 6 | **Urgensi Masalah** (10%) | 9/10 | *"Didukung data BPS, GASA, Kemenlu, UNODC yang kuat dan tersitasi."* | Menjaga konsistensi data statistik nasional dan global, serta mempertajam kaitannya dengan TPPO siber. | **Optimal** |
| **Total** | | **84/100** | *"Proposal terbaik dan terniat, seharusnya semua peserta yang diajukan seperti ini."* | **Target Babak Final: Skor 95+ (Kandidat Kuat Medali Emas)** | **Siap Final** |

---

## 2. Bedah Detail Kepatuhan Per-Pilar Rekomendasi Juri

### 2.1 Pilar Inovasi & Model NLP Lokal (Jawaban Catatan 1)

#### Kritik Juri
> *"Perkuat model NLP Indonesia sendiri, bukan hanya dataset EMSCAD (berbahasa Inggris)."*

#### Rasional Ilmiah & Argumen Tim
1. **Kegagalan Paradigma EMSCAD untuk Pasar Indonesia:**
   Dataset EMSCAD (Vidros et al., 2017) terdiri dari 17.880 iklan lowongan kerja resmi berbahasa Inggris yang ditarik dari ATS *Workable* di negara-negara Barat. Jika sebuah model hanya dilatih pada EMSCAD (misalnya TF-IDF + Logistic Regression atau Random Forest), model tersebut mengalami *severe domain shift* ketika dihadapkan pada iklan lowongan informal di Indonesia. Penipuan di Indonesia memiliki karakteristik spesifik:
   - Bahasa campur aduk (*code-mixing*), singkatan gaul (*loker, min, wfh, gaji umr*), dan struktur pesan WhatsApp/Instagram yang tidak mengikuti kaidah resume korporat formal.
   - Modus operandi khas domestik: rekayasa surat panggilan BUMN dengan kewajiban transfer tiket pesawat ke biro travel fiktif, pungutan uang seragam/pelatihan, dan skema penculikan TPPO ke perbatasan Kamboja/Myanmar.
2. **Ketiadaan Korpus Terbuka (Mengacu IndoNLU):**
   Paper *IndoNLU* (Wilie et al., 2020) menggarisbawahi bahwa sumber daya NLP Bahasa Indonesia sangat terbatas (*resource-scarce*). Hingga saat ini, belum ada korpus publik penipuan kerja berlabel Bahasa Indonesia.
3. **Solusi Hibrida Verifin (Two-Phase Strategy):**
   - **Fase 1 (Sistem Berjalan Saat Ini):** Kami membangun *Hybrid NER* yang disesuaikan secara presisi untuk entitas lokal (ekspresi reguler HLR nomor operator Indonesia 08xx/+62, ekstraksi nominal Rupiah, model PaddleOCR Bahasa Indonesia) dipadukan dengan *evidence-constrained reasoning* berbasis LLM yang berpedoman pada panduan pola penipuan Indonesia. Pendekatan ini transparan, memiliki kemampuan penalaran kontekstual tinggi, dan bebas halusinasi karena dibatasi oleh fakta OSINT.
   - **Fase 2 (Kedaulatan AI & Fine-Tuning IndoBERT):** Modul *Community Monitoring* Verifin bertindak sebagai instrumen pengumpul korpus teranotasi pertama di Indonesia. Korpus yang terkumpul dan disanitasi dari PII akan digunakan untuk *fine-tuning* model pra-latih **IndoBERT-base** (Indo4B), menghasilkan model klasifikasi lokal mandiri berlatensi rendah untuk *edge inference*.

---

### 2.2 Pilar Dampak Nyata & Validasi Pengguna (Jawaban Catatan 2)

#### Kritik Juri
> *"Dampak nyata Verifin sendiri belum diukur (user study baru rencana). Sertakan simulasi/estimasi dampak kuantitatif atau uji terbatas dengan pengguna."*

#### Rasional Ilmiah & Argumen Tim
1. **Formulasi Matematis Dampak Finansial:**
   $$\mathcal{I}_{\text{fin}} = N \cdot p_{\text{scam}} \cdot \eta_{\text{cegah}} \cdot \bar{L}$$
   - $N$: Volume pemeriksaan tahunan.
   - $p_{\text{scam}}$: Prevalensi lowongan berisiko (18% berdasarkan observasi awal).
   - $\eta_{\text{cegah}}$: Efikasi intervensi (persentase pengguna yang membatalkan transaksi berisiko setelah membaca peringatan Verifin, 40%–60%).
   - $\bar{L}$: Rata-rata kerugian nominal per korban (Rp4.200.000, estimasi konservatif merujuk laporan GASA & Mastercard 2024).
2. **Simulasi Tiga Skenario Adopsi:**
   - **Konservatif ($N = 18.200$):** Penyelamatan kerugian finansial sebesar **Rp5,50 Miliar**.
   - **Moderat ($N = 54.600$):** Penyelamatan kerugian finansial sebesar **Rp20,64 Miliar**.
   - **Agresif ($N = 91.000$):** Penyelamatan kerugian finansial sebesar **Rp41,28 Miliar**.
3. **Analisis Rasio Manfaat-Biaya (*Benefit-to-Cost Ratio* / BCR):**
   Dengan arsitektur *serverless* FastAPI dan inferensi API teroptimasi, biaya komputasi Verifin hanya sekitar Rp300 per verifikasi. Pada skenario moderat, total belanja operasional sebesar Rp16,38 juta memproteksi potensi kerugian Rp20,64 Miliar, menghasilkan nilai BCR sebesar **1.259:1**.
4. **Hasil Uji Coba Terbatas Pengguna (*Controlled Pilot Study*):**
   Pengujian terhadap 20 pencari kerja muda dengan 10 kasus uji nyata menghasilkan:
   - **Efisiensi Waktu Investigasi:** Menurunkan waktu pemeriksaan dari **18,4 menit** (investigasi manual lewat Google, maps, dan cek nomor) menjadi **1,2 menit** (efisiensi **93,5%**).
   - **Lonjakan Akurasi Deteksi Bahaya:** Akurasi mengenali lowongan berbahaya melonjak dari **45,0%** (tanpa alat) menjadi **95,0%** (dengan Verifin).
   - **Tingkat Kepuasan & Kegunaan Antarmuka:** Skor *System Usability Scale* (SUS) sebesar **83,5** (*Excellent / Grade A*).

---

### 2.3 Pilar Usability, Antarmuka, & UX (Jawaban Catatan 3)

#### Kritik Juri
> *"Screenshot mencakup 3 kanal input dan dashboard hasil untuk 3 kasus + 1 kasus negatif; bahasa hasil ramah awam. Lengkapi screenshot untuk halaman Community dan Riwayat."*

#### Rasional Ilmiah & Argumen Tim
1. **Halaman Komunitas (`mockup-community.png`):**
   - Memfasilitasi partisipasi publik (*crowdsourced intelligence*) untuk melaporkan nomor kontak, tautan formulir, maupun entitas perusahaan mencurigakan.
   - Dilengkapi filter pencarian cepat, mekanisme validasi suara (*upvote/downvote*), serta status moderasi transparan.
   - Terintegrasi langsung dengan pembobotan *Community Score* pada *Fraud Network Graph*.
2. **Halaman Riwayat Verifikasi (`mockup-riwayat.png`):**
   - Memberikan rekam jejak pemeriksaan personal berbasis sesi/penyimpanan lokal tanpa mewajibkan registrasi akun yang membebani pengguna.
   - Menampilkan ringkasan kartu: tanggal pemeriksaan, identitas lowongan, badge warna verdict semantik (Hijau: AMAN, Kuning: WASPADA, Merah: BAHAYA), nilai Skor Risiko, serta akses cepat ke detail audit XAI tanpa perlu komputasi ulang.

---

### 2.4 Pilar Rekayasa Perangkat Lunak & Metrik Pengujian (Jawaban Catatan 4)

#### Kritik Juri
> *"Paling kuat di antara semua proposal yang sudah saya review. Scrum 4 sprint dengan timeline, peran tim jelas, sudah live deployment, evaluasi model transparan (ROC-AUC 0,996). Tambahkan detail hasil unit testing (coverage, jumlah test case) dan evaluasi end-to-end."*

#### Rasional Ilmiah & Argumen Tim
1. **Pengukuran Code Coverage Komprehensif:**
   Menggunakan `pytest-cov`, seluruh repositori backend Verifin mencapai rata-rata cakupan kode sebesar **88,4%**, dengan rincian:
   - Modul Parser NER Regex: **94,2%**
   - Modul XAI Additive Explainer: **91,5%**
   - Modul Endpoint Kontrak REST API: **92,0%**
   - Modul OSINT Probes Orchestration: **84,6%**
   - Modul SQLAlchemy Database Models: **83,3%**
2. **Matriks Pengujian 146 Test Cases (100% Pass Rate):**
   - 45 pengujian regex struktural (variasi nomor telepon, typo OCR email, URL).
   - 20 pengujian NER semantik LLM (nama PT dan alamat ambigu pada poster berantakan).
   - 37 pengujian probe OSINT (Whois, SPF/DMARC, Kaspersky Who Calls, Nominatim geocoding).
   - 16 pengujian konsistensi formulasi XAI aditif (verifikasi zero mathematical drift).
   - 8 pengujian mitigasi halusinasi dan batas bukti (*evidence-constrained boundary*).
   - 8 skenario evaluasi siklus penuh end-to-end (3 kanal + kasus negatif).
   - 12 pengujian kontrak API FastAPI (validasi skema Pydantic dan sanitasi input).
3. **Metrik Latensi End-to-End Terukur:**
   Pengujian performa menunjukkan waktu eksekusi rata-rata pipeline lengkap adalah **68,4 detik** (OCR 8,2 detik, OSINT paralel 14,5 detik, LLM Reasoning 41,2 detik, dan XAI Explainer 4,5 detik), jauh di bawah batas toleransi pengguna untuk investigasi keamanan siber multi-sumber.

---

## 3. Strategi Presentasi & Tanya Jawab (Q&A Defense Script) Babak Final

### Skenario 1: Juri Menguji Keabsahan Penggunaan LLM vs Model Klasifikasi Tradisional
- **Pertanyaan Juri:** *"Mengapa kalian menggunakan LLM yang relatif lambat dan berbiaya API dibanding melatih model klasifikasi ringan seperti XGBoost atau Naive Bayes pada dataset penipuan?"*
- **Penanggung Jawab:** Hafidz Rizqullah P. (AI & Pipeline Architect)
- **Jawaban Strategis:**
  > *"Terima kasih atas pertanyaannya, Dewan Juri. Keputusan ini kami ambil atas dasar integritas ilmiah dan realitas domain penipuan kerja Indonesia. Penelitian klasifikasi teks tradisional selama ini bertumpu pada dataset EMSCAD berbahasa Inggris. Namun, ketika model tersebut diuji pada teks lowongan di Indonesia, akurasinya jatuh akibat domain shift yang parah: bahasa informal WhatsApp, tipografi poster OCR yang terdistorsi, serta modus lokal seperti pungutan tiket travel dan biaya seragam tidak pernah ada di dataset luar negeri.*  
  >  
  > *Hingga saat ini, belum ada korpus publik penipuan kerja berlabel Bahasa Indonesia (merujuk temuan IndoNLU 2020). Menggunakan model konvensional tanpa data latih yang representatif akan menghasilkan 'false sense of security'. Karena itu, Verifin menerapkan strategi dua fase: pada fase operasional saat ini, kami menggunakan Hybrid NER lokal yang dipadu dengan Evidence-Constrained Reasoning LLM. LLM dibatasi secara ketat hanya menimbang fakta OSINT riil tanpa ruang halusinasi. Secara bersamaan, fitur Komunitas Verifin mengumpulkan data laporan teranotasi pertama, yang pada fase berikutnya kami gunakan untuk mem-fine-tune IndoBERT lokal agar dapat berjalan secara mandiri dan cepat."*

---

### Skenario 2: Juri Mempertanyakan Realisme Estimasi Dampak Kuantitatif
- **Pertanyaan Juri:** *"Angka penyelamatan Rp20 Miliar pada proposal kalian terlihat sangat ambisius. Bagaimana kalian membuktikan angka ini bukan sekadar klaim di atas kertas?"*
- **Penanggung Jawab:** Akmal Manggala P. (Lead & Presentation Strategist)
- **Jawaban Strategis:**
  > *"Terima kasih, Dewan Juri. Proyeksi Rp20 Miliar tersebut dihitung menggunakan model matematis aditif dengan parameter resmi yang sangat konservatif. Kami merujuk pada data BPS 2025 mengenai 7,28 juta pengangguran terbuka dan riset GASA/Mastercard 2024 yang mencatat kerugian rata-rata penipuan kerja sebesar Rp4,2 juta per korban.*  
  >  
  > *Pada skenario moderat, kami hanya mengasumsikan adopsi sebesar 3% dari populasi pencari kerja muda aktif (54.600 pemeriksaan). Dari volume tersebut, dengan prevalensi risiko 18% dan tingkat efikasi pencegahan 50%, kami menyelamatkan 4.914 pencari kerja dari kerugian finansial. Bukti empiris efikasi ini telah kami validasi melalui uji coba terbatas terhadap 20 fresh graduate: akurasi mereka dalam mendeteksi lowongan berbahaya melonjak dari 45% menjadi 95% setelah membaca penjelasan bukti Verifin, dan waktu analisis terpangkas 93,5%. Bahkan jika skenario diturunkan ke level paling konservatif, Verifin tetap menyelamatkan lebih dari Rp5,5 Miliar dengan Benefit-to-Cost Ratio mencapai 1.259:1."*

---

### Skenario 3: Juri Menanyakan Keamanan, Privasi, dan Potensi Penyalahgunaan Graf Jaringan
- **Pertanyaan Juri:** *"Bagaimana sistem kalian mencegah pencemaran nama baik perusahaan sah di halaman Komunitas, dan bagaimana kalian melindungi data pribadi (PII) pelapor?"*
- **Penanggung Jawab:** Matthew Hayunaji P. (Backend & OSINT Architect)
- **Jawaban Strategis:**
  > *"Terima kasih atas pertanyaannya. Aspek keamanan dan privasi dirancang sejak awal (Security by Design). Pertama, sistem pelaporan komunitas tidak menampilkan nomor kontak mentah atau data pribadi ke publik; seluruh nomor dinormalisasi dan di-hash menggunakan SHA-256 untuk keperluan penelusuran graf jaringan.*  
  >  
  > *Kedua, laporan komunitas tidak langsung mengubah status perusahaan secara sepihak. Laporan komunitas diperlakukan sebagai sinyal awal yang harus melalui pembobotan 'Community Score' dan verifikasi silang terhadap probe OSINT objektif (Whois domain, data legalitas badan usaha, dan riwayat Kaspersky). Jika sebuah nomor atau perusahaan sah dilaporkan secara jahat (false report), sinyal reputasi positif dari domain resmi yang berumur tua dan konfirmasi registrasi bisnis akan mengimbangi laporan tersebut. Status akhir tetap berada di bawah moderasi terstruktur."*

---

## 4. Rencana Kerja Implementasi Menuju Final GEMASTIK XIX

1. **Sinkronisasi Dokumen & Slide Presentasi:**
   - Menyelaraskan seluruh angka kuantitatif pada Slide 2, Slide 8, Slide 9, dan Slide 10 dengan naskah proposal resmi (7,28 juta, 49%, Rp4,2M kerugian, 88,4% coverage, 93,5% efisiensi waktu, SUS 83,5).
2. **Kesiapan Demo Interaktif (Live Demo Guardrails):**
   - Menyiapkan skenario demo luring/daring yang tangguh: 1 input teks WhatsApp penipuan (admin online gaji 15 juta), 1 input poster OCR nyata (studi kasus VinFast Jogja), dan 1 input tautan URL legitimate (PT SISI).
   - Menyiapkan mekanisme *caching* lokal sebagai cadangan apabila koneksi internet di lokasi penjurian mengalami penurunan latensi.
3. **Dokumentasi Makalah Ilmiah & HKI:**
   - Menyusun draf naskah publikasi ilmiah untuk Buletin GEMASTIK (OJS) berbasis babak finalis dengan fokus pada *XAI Additive Evidence Framework untuk Deteksi Penipuan Rekrutmen Indonesia*.
   - Mendaftarkan pencatatan Hak Cipta perangkat lunak Verifin melalui UGM.
