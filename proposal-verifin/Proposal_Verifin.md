# PROPOSAL PAGELARAN MAHASISWA NASIONAL BIDANG TEKNOLOGI INFORMASI DAN KOMUNIKASI (GEMASTIK) XIX
## DIVISI PENGEMBANGAN PERANGKAT LUNAK

**Nama Tim:** Verifin
**Anggota Tim:**
1. Hafidz Rizqullah Prasetya
2. Matthew Hayunaji Priantara
3. Akmal Manggala Putra

**Universitas Gadjah Mada**
**Yogyakarta**
**2026**

---

## DAFTAR ISI
*   [A. Latar Belakang Ide Perangkat Lunak](#a-latar-belakang-ide-perangkat-lunak)
*   [B. Tujuan dan Manfaat Dikembangkannya Perangkat Lunak](#b-tujuan-dan-manfaat-dikembangkannya-perangkat-lunak)
*   [C. Batasan Perangkat Lunak yang Dikembangkan](#c-batasan-perangkat-lunak-yang-dikembangkan)
*   [D. Metodologi Pengembangan Perangkat Lunak](#d-metodologi-pengembangan-perangkat-lunak)
*   [E. Analisis Kebutuhan dan Desain Solusi Perangkat Lunak](#e-analisis-kebutuhan-dan-desain-solusi-perangkat-lunak)
*   [F. Implementasi Perangkat Lunak](#f-implementasi-perangkat-lunak)
*   [Daftar Pustaka](#daftar-pustaka)

---

## A. Latar Belakang Ide Perangkat Lunak

Tingkat pengangguran terbuka di Indonesia masih menjadi salah satu tantangan ekonomi nasional yang signifikan. Berdasarkan Berita Resmi Statistik BPS No. 39/05/Th. XXVIII, per Februari 2025 jumlah pengangguran terbuka tercatat mencapai 7,28 juta orang (TPT 4,76%), meningkat dari 7,20 juta pada periode yang sama tahun sebelumnya [1]. Di tengah tekanan tersebut, jutaan pencari kerja Indonesia setiap harinya menerima tawaran lowongan dari berbagai kanal yang tidak terkurasi: Instagram, WhatsApp, Telegram, grup Facebook, hingga papan pengumuman fisik. Laporan *State of Scams in Indonesia* oleh Global Anti-Scam Alliance (GASA) bersama Mastercard menunjukkan skala persoalan ini: **66% orang dewasa di Indonesia terekspos setidaknya satu upaya penipuan digital dalam 12 bulan terakhir**, dengan total estimasi kerugian finansial nasional mencapai **Rp49 triliun** [2]. Dari seluruh korban penipuan digital, **49% di antaranya terekspos modus penipuan lowongan kerja (*employment scam*)** — menjadikannya salah satu modus paling dominan [2]. Lebih jauh, krisis ini tidak berhenti pada kerugian finansial. Kementerian Luar Negeri RI mencatat **lebih dari 3.300 WNI diselamatkan dari pusat-pusat *online scamming* di Asia Tenggara** (Kamboja, Myanmar, Laos, Filipina) pada periode 2020–2024, yang keseluruhannya berangkat akibat tergiur iklan lowongan kerja palsu di media sosial [3]. Temuan ini sejalan dengan laporan UNODC yang menegaskan bahwa penipuan rekrutmen daring (*fraudulent job postings*) merupakan metode utama perekrutan korban Tindak Pidana Perdagangan Orang (TPPO) untuk dipekerjakan paksa di *cyber scam centers* [4].

Di balik fakta-fakta tersebut, terdapat satu persoalan mendasar yang dialami langsung oleh setiap pencari kerja. **Pencari kerja yang menerima tawaran melalui kanal digital informal harus melakukan proses verifikasi keaslian tawaran secara mandiri** — mengumpulkan informasi dari berbagai sumber yang tersebar: mencari nama perusahaan di mesin pencari, mengecek reputasi nomor kontak, memvalidasi alamat di peta digital, menelusuri ulasan di media sosial, hingga memeriksa legalitas badan usaha. Proses ini memerlukan waktu, pengetahuan teknis, dan literasi digital yang memadai, sehingga dalam praktiknya sering kali tidak dilakukan secara memadai sebelum pengguna mengambil keputusan awal — merespons, mengirimkan data pribadi, atau bahkan mentransfer sejumlah uang. Kondisi ini menciptakan **kesenjangan informasi (*information asymmetry*)** yang tajam antara pembuat tawaran dan penerima tawaran, tepat pada momen ketika penerima tawaran berada dalam posisi paling rentan secara finansial dan psikologis.

Solusi yang sudah ada belum menjawab kesenjangan ini pada titik yang dibutuhkan. Platform media sosial hanya menyediakan fitur pelaporan yang bersifat reaktif — baru berjalan setelah korban melapor. Job board formal memang melakukan kurasi, namun jangkauannya terbatas pada perusahaan yang membayar dan tidak menjangkau kanal informal tempat modus penipuan justru paling banyak beroperasi. Imbauan pemerintah bersifat umum dan tetap menyerahkan proses verifikasi kepada individu. **Tidak ada mekanisme verifikasi yang terintegrasi pada kanal tempat lowongan diterima**, yang mampu menganalisis sebuah tawaran kerja dan memberikan penilaian berbasis bukti kepada pengguna *sebelum* mereka merespons. Verifin dirancang untuk mengisi celah tersebut.

### Posisi dan Ruang Lingkup Verifin

**Verifin** (*Verifikasi Lowongan Kerja*) adalah sebuah ***Explainable AI-powered Decision Support System* (DSS)** untuk verifikasi awal tawaran kerja pada kanal digital informal. Sistem menganalisis teks atau URL lowongan kerja secara otomatis menggunakan rantai teknologi berlapis: Named Entity Recognition (NER) hibrida, klasifikasi perilaku teks, investigasi OSINT multi-sumber, sintesis naratif LLM, dan penjelasan kausal berbasis Explainable AI (XAI). Keluaran sistem adalah sebuah *Skor Risiko* 0–100 (0 = sangat aman, 100 = sangat berbahaya) beserta verdict tiga tingkat (AMAN/WASPADA/BAHAYA) yang didukung penjelasan berbasis bukti yang dapat diverifikasi oleh pengguna awam.

Secara ringkas, kontribusi utama Verifin dapat dinyatakan dalam satu kalimat:

> *"Kami mengembangkan Explainable AI-powered Decision Support System yang mengintegrasikan OSINT dan analisis linguistik untuk mengurangi kesenjangan informasi (information asymmetry) pada tahap verifikasi awal tawaran kerja di kanal informal."*

Penting ditegaskan sejak awal **batas intervensi** sistem ini. **Verifin tidak dirancang untuk menghilangkan seluruh risiko penipuan, bukan pula mengatasi faktor psikologis korban** (seperti desakan ekonomi, bias otoritas, atau *fear of missing out*) yang juga berperan dalam keputusan korban. Verifin mengintervensi satu penyebab yang memang dapat diselesaikan melalui rekayasa perangkat lunak, yaitu *information asymmetry* pada tahap verifikasi awal. Sebagai *decision support system*, keputusan akhir tetap berada di tangan pengguna; Verifin bertugas memastikan keputusan tersebut diambil dengan informasi yang lengkap, transparan, dan dapat diaudit.

**Relevansi dengan GEMASTIK XIX — Divisi Pengembangan Perangkat Lunak:**

Verifin secara langsung menjawab tantangan nasional yang nyata dengan memanfaatkan kombinasi mutakhir teknologi AI yang relevan: NLP berbahasa Indonesia, OSINT otomatis, LLM API, dan XAI untuk transparansi. Sistem ini bukan sekadar demonstrasi teknologi, melainkan perangkat lunak fungsional dengan nilai guna langsung bagi jutaan pencari kerja Indonesia.

## B. Tujuan dan Manfaat Dikembangkannya Perangkat Lunak

### Tujuan

1. Membangun platform web **Verifin** sebagai *Explainable AI-powered Decision Support System* yang mampu menganalisis teks atau URL lowongan kerja secara otomatis dan menghasilkan *Skor Risiko* 0–100 beserta verdict AMAN/WASPADA/BAHAYA dan penjelasan berbasis bukti — menggantikan proses verifikasi manual yang tersebar di banyak sumber menjadi satu analisis terpadu dalam hitungan menit.
2. Mengimplementasikan pipeline analisis berlapis yang mengintegrasikan Named Entity Recognition (NER) hibrida berbahasa Indonesia, klasifikasi perilaku teks, investigasi OSINT multi-sumber (domain, nomor telepon, perusahaan), sintesis naratif berbasis LLM, dan penjelasan kausal berbasis XAI hibrida (model + evidence).

### Manfaat

**Bagi Pencari Kerja:**
- Mendapat alat verifikasi gratis dan berbasis bukti yang mengurangi risiko menjadi korban penipuan lowongan — tanpa perlu investigasi manual yang melelahkan.

**Bagi Ekosistem Ketenagakerjaan:**
- Menciptakan lapisan keamanan kolektif melalui *Fraud Network Graph* yang terus berkembang. Setiap analisis baru memperkaya database entitas mencurigakan.

**Bagi Masyarakat Luas:**
- Berkontribusi dalam penanggulangan TPPO berbasis *cyber-recruitment* dengan memutus rantai penipuan di tahap paling awal: sebelum korban merespons iklan.

**Bagi Pengembang dan Peneliti:**
- API publik memungkinkan integrasi ke dalam platform lain (ekstensi browser, bot Telegram, job board). Data agregat dapat menjadi sumber penelitian tentang pola penipuan kerja di Indonesia.

**Bagi Kemajuan NLP Bahasa Indonesia:**
- Pengembangan sistem NER dan klasifikasi NLP yang dioptimalkan untuk domain lowongan kerja berbahasa Indonesia berkontribusi pada ekosistem NLP Bahasa Indonesia yang masih terus berkembang.

---

## C. Batasan Perangkat Lunak yang Dikembangkan

Untuk memastikan sistem dapat dibangun, diuji, dan didemonstrasikan secara nyata dalam kerangka kompetisi, Verifin menetapkan batasan-batasan berikut:

1. **Bahasa Input:** Sistem dioptimalkan untuk memproses teks lowongan dalam Bahasa Indonesia. Input dalam bahasa lain (Inggris, campuran) dapat diterima namun akurasi NER dan klasifikasi NLP tidak dijamin setara.

2. **Sumber OSINT:** Investigasi OSINT terbatas pada sumber yang dapat diakses secara publik dan legal: Whois/RDAP untuk domain, Kredibel untuk reputasi nomor telepon, OpenStreetMap untuk validasi alamat, multi-engine web search (DuckDuckGo/Yahoo/Bing) untuk jejak digital perusahaan, dan inspeksi formulir/shortlink. Sistem **tidak** mengakses database kepolisian, Dukcapil, atau sistem pemerintah lainnya.

3. **Skala Database Awal:** *Fraud Network Graph* pada versi demonstrasi akan diinisialisasi dengan data sintetis yang representatif. Database komunitas nyata akan terbangun secara organik setelah sistem diluncurkan ke publik.

4. **Platform Target:** Verifin adalah aplikasi web yang dioptimalkan untuk desktop browser (Chrome, Firefox, Safari). Tidak ada aplikasi mobile native dalam cakupan ini, meskipun antarmuka bersifat responsif untuk mobile.

5. **Keterbatasan Klasifikasi Teks:** Pre-screening teks menggunakan model TF-IDF + Logistic Regression yang dilatih pada dataset EMSCAD berbahasa Inggris, digabung dengan aturan perilaku yang dikalibrasi dari pola lowongan penipuan Indonesia. Akurasi pada pola penipuan yang sangat baru, sangat spesifik konteks lokal, atau tidak umum mungkin lebih rendah.

6. **Ketergantungan API Eksternal:** Pipeline analisis bergantung pada layanan eksternal (OpenAgentic/OpenAI untuk LLM, Supabase untuk database). Gangguan pada layanan ini akan mempengaruhi ketersediaan sistem.

7. **Bukan Layanan Hukum:** Verdict yang dihasilkan Verifin adalah **penilaian berbasis risiko**, bukan keputusan hukum. Sistem tidak dapat memastikan secara definitif bahwa sebuah lowongan adalah penipuan. Pengguna tetap dianjurkan untuk melakukan verifikasi tambahan.

8. **Privasi dan Anonimisasi:** Laporan komunitas bersifat anonim (tanpa akun). Sebelum dikirim ke LLM eksternal, sistem menerapkan **penyamaran data pribadi (*PII masking*)** — nomor telepon, alamat email, dan identitas personal pada teks lowongan disamarkan — dan menerapkan kebijakan **tanpa retensi (*no retention*)**.

9. **Batas Intervensi Sistem (Faktor Manusia):** Verifin secara eksplisit **tidak dirancang untuk menghilangkan seluruh risiko penipuan maupun mengatasi faktor psikologis dan sosial korban** — seperti desakan ekonomi, bias otoritas, *fear of missing out*, maupun teknik *social engineering*. Intervensi Verifin terbatas pada **satu penyebab yang dapat diselesaikan melalui rekayasa perangkat lunak**, yaitu mengurangi *information asymmetry* pada tahap verifikasi awal. Pengguna yang tetap merespons meskipun sistem memberi peringatan berada di luar ruang lingkup desain sistem ini.

10. **Agenda Pengembangan Lanjutan (*Future Work*):** Terdapat tiga agenda pengembangan yang direncanakan setelah versi kompetisi: (i) **fine-tuning model klasifikasi pada dataset lowongan penipuan Indonesia** untuk menggantikan ketergantungan pada EMSCAD berbahasa Inggris; (ii) **studi pengguna (*user study*)** untuk mengukur dampak nyata Verifin terhadap kemampuan pengguna mengidentifikasi lowongan palsu (desain kontrol–perlakuan); dan (iii) **integrasi kanal** melalui bot WhatsApp dan ekstensi peramban untuk menurunkan hambatan penggunaan (*friction*) lebih jauh.

4. **Model Klasifikasi:** Klasifikasi perilaku teks menggunakan TF-IDF + Logistic Regression yang dilatih pada dataset lowongan berbahasa Indonesia. Model ini bukan model bahasa besar (*large language model*) dan tidak memiliki kemampuan pemahaman semantik mendalam. Peran LLM (kimi-k3-high via OpenAgentic API) terbatas pada sintesis dan penalaran akhir berdasarkan hasil OSINT yang telah dikumpulkan.

5. **Graf Jaringan:** Analisis jaringan penipuan (*fraud network*) menggunakan graf in-memory berbasis NetworkX. Graf ini dibangun secara dinamis dari data yang tersimpan di PostgreSQL dan tidak persisten antar sesi analisis. Visualisasi graf disediakan melalui antarmuka interaktif di frontend.

6. **Kapasitas Sistem:** Pada tahap pengembangan, sistem dirancang untuk menangani permintaan analisis secara sekuensial per pengguna. Skalabilitas horizontal untuk beban tinggi berada di luar cakupan pengembangan saat ini.

7. **Verdict Bukan Putusan Hukum:** *Skor Risiko* dan verdict yang dihasilkan Verifin merupakan penilaian berbasis probabilistik dan OSINT, bukan keputusan hukum. Pengguna tetap disarankan untuk melakukan due diligence tambahan sebelum melamar pekerjaan.

8. **Komunitas:** Fitur *community monitoring* pada tahap ini mencakup pelaporan dan pemungutan suara (*upvote/downvote*) laporan. Moderasi laporan dilakukan secara algoritmik berdasarkan konsensus komunitas, bukan moderasi manual oleh tim.

---

## D. Metodologi Pengembangan Perangkat Lunak

Verifin dikembangkan menggunakan metodologi **Agile Scrum** dengan dua sprint pengembangan yang masing-masing berdurasi tiga minggu. Pendekatan ini dipilih karena kompleksitas integrasi multi-layer (NER, NLP, OSINT, LLM, XAI) membutuhkan siklus iterasi yang pendek untuk memvalidasi setiap komponen sebelum melanjutkan ke lapisan berikutnya.

### Struktur Tim

| Peran | Anggota | Tanggung Jawab Utama |
|---|---|---|
| *Project Lead* & Backend Engineer | Hafidz Rizqullah Prasetya | Arsitektur sistem, pipeline analisis, API FastAPI |
| Frontend Engineer & UI/UX | Matthew Hayunaji Priantara | Next.js frontend, visualisasi graf, desain interaksi |
| Data Engineer & OSINT Specialist | Akmal Manggala Putra | Modul OSINT, model NLP, database PostgreSQL |

### Sprint 1 — Fondasi Infrastruktur (Minggu 1–3)

**Tujuan:** Membangun fondasi *DSS Verifin* — dari input teks hingga hasil OSINT mentah tersimpan di database.

**Backlog Sprint 1:**
- [ ] Setup repositori, lingkungan pengembangan, dan CI/CD pipeline dasar
- [ ] Inisialisasi database PostgreSQL (Supabase): skema tabel `jobs`, `osint_results`, `community_reports`, `fraud_fingerprints`
- [ ] Implementasi modul NER berbasis regex untuk ekstraksi entitas (nama perusahaan, lokasi, nomor telepon, URL, nominal gaji)
- [ ] Implementasi modul klasifikasi NLP: TF-IDF feature extraction + Logistic Regression untuk deteksi pola teks mencurigakan
- [ ] Implementasi pipeline OSINT paralel: WHOIS lookup, OSM/Nominatim geocoding, Kredibel.id scraping, DuckDuckGo SERP, Yahoo SERP, Scrapling, Social OSINT
- [ ] Implementasi *fraud fingerprint* dan mesin deduplikasi berbasis hash entitas
- [ ] Implementasi graf in-memory NetworkX untuk analisis konektivitas jaringan penipuan
- [ ] API endpoint dasar: `POST /api/analyze` dan `GET /api/jobs/{job_id}`
- [ ] Unit test untuk setiap modul OSINT dan NLP

**Kriteria Selesai Sprint 1:** Sistem dapat menerima input teks lowongan, mengekstrak entitas, menjalankan seluruh modul OSINT secara paralel, dan menyimpan hasil ke database PostgreSQL.

### Sprint 2 — Integrasi LLM, XAI, dan Frontend (Minggu 4–6)

**Tujuan:** Mengintegrasikan lapisan LLM dan XAI, membangun frontend, serta mengimplementasikan fitur komunitas.

**Backlog Sprint 2:**
- [ ] Implementasi LLM reasoning layer: integrasi kimi-k3-high via OpenAgentic API dengan *evidence-only prompting* (LLM hanya menggunakan fakta OSINT terverifikasi)
- [ ] Implementasi kalkulasi *Skor Risiko* 0–100 berbasis agregasi tertimbang hasil seluruh layer
- [ ] Implementasi Hybrid Explanation additive feature explainer (XAI) untuk menghasilkan penjelasan kontribusi fitur per verdict
- [ ] Implementasi verdict tiga tingkat: AMAN / WASPADA / BAHAYA dengan threshold kalibrat
- [ ] Pengembangan frontend Next.js: halaman input, halaman hasil analisis, visualisasi graf jaringan interaktif
- [ ] Implementasi fitur *community monitoring*: pelaporan lowongan mencurigakan, upvote/downvote laporan, agregasi skor komunitas
- [ ] Integrasi frontend dengan seluruh API backend
- [ ] *End-to-end testing* dengan sampel lowongan nyata (valid dan palsu)
- [ ] Optimasi performa pipeline analisis dan pengujian beban dasar
- [ ] Penyempurnaan UI/UX berdasarkan pengujian pengguna internal

**Kriteria Selesai Sprint 2:** Pengguna dapat memasukkan lowongan, melihat *Skor Risiko*, verdict, penjelasan XAI, graf jaringan, dan melaporkan lowongan mencurigakan melalui antarmuka web yang fungsional.

### Diagram Alur Metodologi

```
Sprint 1 (Minggu 1-3)          Sprint 2 (Minggu 4-6)
========================       ========================
Setup & DB Schema          ->  LLM Reasoning Layer
NER Module                 ->  Skor Risiko Calculator
NLP Classifier             ->  XAI Explainer
OSINT Parallel Pipeline    ->  Frontend Next.js
Fraud Fingerprint          ->  Community Monitoring
NetworkX Graph             ->  E2E Testing & Polish
API Endpoints              ->  Deployment
```

---
## E. Analisis Kebutuhan dan Desain Solusi Perangkat Lunak

### E.1 Analisis Kebutuhan Fungsional

**FR-01: Analisis Lowongan dari Input Teks**
Sistem harus dapat menerima input berupa teks lowongan kerja dalam format bebas (copy-paste dari WhatsApp, Instagram, Telegram, dll.) dan memproses seluruh pipeline analisis secara otomatis.

**FR-02: Analisis Lowongan dari URL**
Sistem harus dapat menerima input berupa URL tautan lowongan, mengambil konten halaman secara otomatis menggunakan Scrapling, dan memproses teks yang diekstrak melalui pipeline analisis.

**FR-03: Ekstraksi Entitas Otomatis (NER)**
Sistem harus mengekstrak entitas-entitas kunci dari teks lowongan menggunakan modul NER berbasis regex, meliputi: nama perusahaan, lokasi/alamat, nomor telepon/WhatsApp, alamat email, URL perusahaan, nominal gaji, dan jenis pekerjaan.

**FR-04: Klasifikasi Perilaku Teks (NLP)**
Sistem harus mengklasifikasikan teks lowongan menggunakan TF-IDF + Logistic Regression untuk mengidentifikasi pola-pola linguistik yang berkorelasi dengan lowongan tidak terpercaya, seperti: janji gaji tidak realistis, permintaan dokumen sensitif di awal, tekanan waktu, ketidakjelasan deskripsi kerja, dan ketidakcocokan antara posisi dan persyaratan.

**FR-05: Pipeline OSINT Paralel**
Sistem harus menjalankan modul-modul OSINT secara paralel terhadap entitas yang diekstrak, meliputi:
- WHOIS lookup terhadap domain perusahaan (usia domain, registrar, privasi registrasi)
- Geocoding dan validasi lokasi via OpenStreetMap/Nominatim
- Pengecekan reputasi perusahaan via Kredibel.id
- Penelusuran web via DuckDuckGo SERP dan Yahoo SERP
- Scraping halaman web perusahaan via Scrapling
- Penelusuran jejak digital media sosial (Social OSINT)

**FR-06: Analisis Jaringan Penipuan (Fraud Network Graph)**
Sistem harus membangun graf in-memory menggunakan NetworkX yang merepresentasikan koneksi antar entitas (nomor telepon, domain, nama perusahaan, lokasi) lintas lowongan yang tersimpan di database, untuk mendeteksi jaringan penipuan yang menggunakan identitas berbeda namun berbagi infrastruktur yang sama.

**FR-07: Fraud Fingerprint dan Deduplikasi**
Sistem harus menghasilkan *fraud fingerprint* untuk setiap lowongan berdasarkan SHA-256 hash entitas kunci (nomor telepon, domain, nama perusahaan) dan mendeteksi lowongan duplikat yang berbagi entitas mencurigakan yang sama.

**FR-08: LLM Synthesis Berbasis Bukti**
Sistem harus menggunakan LLM (kimi-k3-high via OpenAgentic) untuk merangkum temuan OSINT dalam narasi berbahasa Indonesia yang mudah dipahami, menyebutkan fakta spesifik yang mendukung atau melemahkan kepercayaan, dan memberikan rekomendasi actionable — **tanpa membuat klaim yang tidak didukung oleh data OSINT**. (Prompt engineering + structured output JSON memastikan determinisme dengan temperature=0.)

**FR-09: Skor Risiko dan Verdict Tiga Tingkat**
Sistem harus menghasilkan *Skor Risiko* berupa risk index 0–100 (**bukan probabilitas**) beserta verdict tiga tingkat:
- **AMAN** (skor 0–39): Indikator kepercayaan kuat dari OSINT (domain valid, perusahaan terverifikasi, tidak ada laporan penipuan)
- **WASPADA** (skor 40–74): Terdapat beberapa sinyal meragukan namun bukti tidak konklusif
- **BAHAYA** (skor 75–100): Indikator kuat penipuan dari OSINT (domain baru, nomor dilaporkan, perusahaan tidak ditemukan)

**FR-10: Penjelasan XAI Hibrida**
Sistem harus menghasilkan penjelasan kontribusi setiap fitur terhadap Skor Risiko menggunakan pendekatan **hybrid explanation**: (i) *model explainability* dari koefisien Logistic Regression yang terinterpretasi secara *by design*, dan (ii) *evidence explanation* dari pembobotan berbasis aturan untuk faktor OSINT. Output berupa daftar fitur beserta nilai kontribusinya (positif/negatif) dan penjelasan dalam bahasa Indonesia yang dapat dipahami pengguna awam.

**FR-11: Visualisasi Graf Jaringan Interaktif**
Sistem harus menampilkan visualisasi graf interaktif di frontend yang menunjukkan koneksi antara entitas lowongan yang sedang dianalisis dengan entitas-entitas lain dalam database, memungkinkan pengguna melihat apakah suatu nomor telepon atau domain terhubung dengan laporan penipuan sebelumnya.

**FR-12: Community Monitoring dan Pelaporan**
Sistem harus menyediakan fitur bagi pengguna untuk:
- Melaporkan lowongan sebagai mencurigakan dengan mengisi formulir laporan
- Memberikan *upvote/downvote* terhadap laporan yang ada
- Melihat daftar lowongan yang telah dilaporkan beserta agregasi skor komunitas

**FR-13: Riwayat Analisis Pengguna**
Sistem harus menyimpan riwayat analisis yang pernah dilakukan pengguna (berdasarkan sesi atau akun) sehingga pengguna dapat mengakses kembali hasil analisis sebelumnya.

**FR-14: API Publik untuk Integrasi**
Sistem harus menyediakan REST API yang terdokumentasi (via FastAPI auto-docs) untuk memungkinkan integrasi dengan platform pihak ketiga seperti ekstensi browser atau bot Telegram.

### E.2 Analisis Kebutuhan Non-Fungsional

**NFR-01: Performa**
Pipeline analisis lengkap (NER → NLP → OSINT → LLM → XAI) harus selesai dalam waktu maksimal 30 detik untuk 90% permintaan. Modul OSINT dijalankan secara paralel untuk meminimalkan latensi kumulatif.

**NFR-02: Ketersediaan**
Sistem harus memiliki uptime minimal 95% selama periode demonstrasi dan evaluasi.

**NFR-03: Keamanan**
- Input pengguna divalidasi dan disanitasi sebelum diproses untuk mencegah injeksi
- API key untuk layanan eksternal (OpenAgentic, Supabase) disimpan sebagai environment variable, tidak di-hardcode
- Rate limiting diterapkan pada endpoint analisis untuk mencegah penyalahgunaan

**NFR-04: Skalabilitas**
Arsitektur berbasis FastAPI memungkinkan horizontal scaling. Database PostgreSQL di Supabase mendukung koneksi pooling untuk beban tinggi.

**NFR-05: Kemudahan Penggunaan**
Antarmuka pengguna dirancang untuk dapat digunakan oleh pencari kerja awam tanpa pelatihan teknis. Proses analisis cukup dengan menempel teks lowongan dan menekan tombol "Analisis".

**NFR-06: Transparansi**
Setiap verdict harus disertai dengan penjelasan berbasis fitur yang dapat dipahami. Sistem tidak boleh menghasilkan verdict tanpa penjelasan yang dapat diverifikasi.

### E.3 Desain Solusi: Arsitektur Sistem

Verifin mengimplementasikan arsitektur berlapis (*layered architecture*) yang memisahkan tanggung jawab setiap komponen secara jelas:

```
┌─────────────────────────────────────────────────────┐
│                   FRONTEND LAYER                     │
│         Next.js + Tailwind + Phosphor Icons          │
│              + motion/react animations               │
│   [Input Form] [Result Dashboard] [Network Graph]   │
│         [Community Reports] [History]                │
└──────────────────────┬──────────────────────────────┘
                       │ REST API
┌──────────────────────▼──────────────────────────────┐
│                  BACKEND LAYER                       │
│              FastAPI (Python 3.11)                   │
│  POST /api/analyze  GET /api/jobs/{id}               │
│  POST /api/reports  GET /api/community               │
└──────────────────────┬──────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────┐
│          DECISION SUPPORT SYSTEM VERIFIN              │
│                                                      │
│  Layer 1: NER Hibrida (Regex + LLM, paralel)         │
│     └── ORG, LOC, PHONE, EMAIL, URL, SALARY          │
│                                                      │
│  Layer 2: NLP Classifier                             │
│     └── TF-IDF + Logistic Regression                 │
│         (hybrid with behavioral rules)               │
│                                                      │
│  Layer 3: OSINT Paralel                              │
│     ├── WHOIS/RDAP Lookup                            │
│     ├── OSM/Nominatim Geocoding                      │
│     ├── Kredibel.id Reputation Check                 │
│     ├── Multi-engine Web Search (DDG/Yahoo/Bing)     │
│     ├── Scrapling Web Scraper                        │
│     └── Google Form Inspector                        │
│                                                      │
│  Layer 4: LLM Synthesis (Evidence-Based)             │
│     └── kimi-k3-high via OpenAgentic API             │
│         (temperature=0, structured JSON output)      │
│                                                      │
│  Layer 5: XAI + Skor Risiko Engine                   │
│     └── Hybrid Explanation (model + evidence)        │
│         Skor Risiko 0-100 + Verdict                   │
│         (AMAN/WASPADA/BAHAYA)                        │
└──────────────────────┬──────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────┐
│              DATA & GRAPH LAYER                      │
│   PostgreSQL (Supabase)     NetworkX (In-Memory)     │
│   - jobs                    - Fraud Network Graph    │
│   - osint_results           - Entity Connectivity    │
│   - community_reports       - Cluster Detection      │
│   - fraud_fingerprints                               │
└─────────────────────────────────────────────────────┘
```

### E.4 Desain Pipeline Analisis 5-Layer

**Layer 1 — Named Entity Recognition (NER)**

Modul NER menggunakan pendekatan berbasis regex yang dikalibrasi untuk pola teks berbahasa Indonesia. Pendekatan ini dipilih karena pola entitas dalam konteks lowongan kerja bersifat relatif terstruktur (nomor telepon Indonesia, format alamat email, pola URL, nominal gaji dalam Rupiah) sehingga tidak memerlukan model bahasa besar untuk tugas ini. Entitas yang diekstrak menjadi input primer untuk Layer 3 (OSINT).

**Layer 2 — NLP Behavioral Feature Classifier**

Teks lowongan direpresentasikan menggunakan TF-IDF (*Term Frequency-Inverse Document Frequency*) yang menangkap pola linguistik khas lowongan mencurigakan. Fitur TF-IDF kemudian diklasifikasikan menggunakan **Logistic Regression** yang dilatih pada dataset EMSCAD, digabung dengan **aturan perilaku** (*hybrid*). Pola yang dideteksi meliputi: permintaan biaya, urgensi berlebihan, janji gaji tidak realistis, ketidakjelasan deskripsi tugas, dan permintaan dokumen sensitif di tahap awal.

**Justifikasi pemilihan model.** Pemilihan TF-IDF + Logistic Regression adalah keputusan rekayasa (*engineering trade-off*): (i) **interpretabilitas tinggi** — koefisien model langsung menunjukkan kontribusi setiap fitur, menjadi fondasi XAI hibrida; (ii) **inferensi sangat cepat** (<10 ms); (iii) **kebutuhan komputasi rendah**. Fokus penelitian ini bukan kompetisi akurasi antar-algoritma, melainkan integrasi end-to-end sinyal linguistik dengan bukti OSINT dalam sebuah sistem verifikasi utuh. Ambang klasifikasi dikalibrasi pada **45** untuk memaksimalkan F1 dengan prioritas pada **recall tinggi** — dalam deteksi penipuan, *false negative* jauh lebih berbahaya daripada *false positive*.

**Layer 3 — OSINT Paralel**

Ini adalah inti dari Decision Support System Verifin. Setelah entitas diekstrak pada Layer 1, sistem menjalankan modul-modul OSINT secara paralel menggunakan Python asyncio:

1. **WHOIS/RDAP Lookup**: Memverifikasi usia domain perusahaan, registrar, dan status privasi. Domain baru (< 30 hari) mendapat penalti skor signifikan.
2. **Geocoding (OSM/Nominatim)**: Memvalidasi apakah alamat yang disebutkan benar-benar ada.
3. **Kredibel.id**: Mengecek reputasi nomor telepon di database laporan fraud Indonesia.
4. **Multi-engine Web Search (DuckDuckGo/Yahoo/Bing)**: Mencari jejak digital perusahaan dengan filter relevansi entitas untuk membuang hasil SERP tak relevan.
5. **Scrapling Web Scraper**: Mengakses dan menganalisis halaman web perusahaan (jika ada) untuk verifikasi konsistensi informasi.
6. **Google Form Inspector**: Inspeksi shortlink/formulir untuk mendeteksi pola phishing.

**Layer 4 — LLM Synthesis (Evidence-Based)**

Seluruh hasil OSINT dari Layer 3 dikompilasi menjadi *evidence bundle* terstruktur yang dikirimkan ke LLM (kimi-k3-high via OpenAgentic). LLM bertugas: (1) merangkum temuan OSINT dalam narasi berbahasa Indonesia yang mudah dipahami; (2) menyebutkan fakta spesifik yang mendukung atau melemahkan kepercayaan; (3) memberikan rekomendasi actionable. **Prompt engineering dan structured output JSON memastikan LLM hanya menyimpulkan dari bukti OSINT, bukan pengetahuan umum** (temperature=0, seed tetap). LLM tidak mengambil keputusan Skor Risiko — skor ditentukan oleh agregasi fitur di Layer 5.

**Layer 5 — XAI + Skor Risiko Engine**

Keluaran dari seluruh layer sebelumnya diagregasi menggunakan penjumlahan terbobot (*weighted additive*) menjadi **Skor Risiko 0–100**. Verifin menerapkan **penjelasan hibrida (*hybrid explanation*)** yang menggabungkan: (i) *model explainability* dari koefisien Logistic Regression (interpretable by design), dan (ii) *evidence explanation* dari pembobotan berbasis aturan untuk faktor OSINT. Bobot setiap fitur ditentukan berdasarkan *expert judgement* dengan prinsip: bukti objektif eksternal (jejak digital, laporan komunitas) diberi bobot lebih tinggi daripada sinyal linguistik internal.

Output berupa daftar fitur beserta nilai kontribusinya (positif/negatif) dalam bahasa Indonesia yang dapat dipahami pengguna awam. Perlu ditegaskan bahwa **Skor Risiko adalah *risk index*, bukan probabilitas**: angka 82 tidak berarti "82% kemungkinan penipuan", melainkan indikator tingkat risiko berdasarkan agregasi bukti yang dapat diaudit.

### E.5 Desain Fraud Fingerprint dan Deduplikasi

Setiap lowongan yang dianalisis menghasilkan *fraud fingerprint* — sebuah identifikasi unik berdasarkan hash kombinasi entitas kunci (domain, nomor telepon, nama perusahaan yang dinormalisasi). Fingerprint ini disimpan di tabel `fraud_fingerprints` di PostgreSQL dan digunakan untuk:

1. **Deteksi Duplikat**: Jika lowongan baru memiliki fingerprint yang sama atau sangat mirip dengan lowongan yang sudah ada (Hamming distance < threshold), sistem dapat langsung mengembalikan hasil analisis sebelumnya tanpa menjalankan ulang seluruh pipeline.
2. **Deteksi Varian**: Penipu sering mengubah detail minor (nama perusahaan, nomor telepon) namun mempertahankan infrastruktur yang sama. Graf NetworkX memungkinkan deteksi koneksi antar fingerprint yang berbagi entitas.
3. **Penguatan Skor Komunitas**: Fingerprint yang telah dilaporkan oleh banyak pengguna mendapat penalti skor otomatis.

### E.6 Desain Graf Jaringan Penipuan (NetworkX)

Graf jaringan dibangun secara in-memory menggunakan NetworkX setiap kali analisis baru dilakukan. Node dalam graf merepresentasikan entitas (nomor telepon, domain, nama perusahaan, lokasi), sedangkan edge merepresentasikan co-occurrence antar entitas dalam lowongan yang sama. Algoritma deteksi komunitas (*community detection*) dijalankan untuk mengidentifikasi kluster entitas yang saling terhubung, mengindikasikan jaringan penipuan yang beroperasi dengan identitas berbeda namun infrastruktur bersama.

Visualisasi graf disajikan di frontend sebagai graf interaktif menggunakan library visualisasi JavaScript, memungkinkan pengguna menjelajahi koneksi antar entitas secara intuitif.

### E.7 Desain Antarmuka Pengguna

Antarmuka Verifin dirancang dengan prinsip **simplicity-first**: pengguna hanya perlu satu tindakan (menempel teks atau URL) untuk mendapatkan penilaian lengkap. Desain menggunakan Next.js dengan Tailwind CSS, Phosphor Icons, dan motion/react untuk animasi transisi.

**Halaman Utama (Input):**
Kotak teks besar di tengah halaman dengan placeholder "Tempel teks lowongan di sini..." atau field URL. Tombol "Analisis Sekarang" yang menonjol. Di bawahnya, counter statistik komunitas (total analisis, total laporan, lowongan berbahaya terdeteksi hari ini).

**Halaman Hasil Analisis:**
- Header besar menampilkan verdict (AMAN / WASPADA / BAHAYA) dengan warna semantik (hijau / kuning / merah) dan Skor Risiko 0–100
- Section "Temuan Utama": penjelasan naratif dari LLM dalam bahasa Indonesia
- Section "Breakdown Skor": visualisasi kontribusi fitur dari XAI explainer (bar chart horizontal)
- Section "Detail OSINT": tab per modul OSINT dengan hasil mentah yang dapat dieksplorasi
- Section "Graf Jaringan": visualisasi interaktif koneksi entitas
- Tombol "Laporkan ke Komunitas" untuk mendorong partisipasi crowdsourcing

**Halaman Komunitas:**
Daftar laporan terbaru dari komunitas, filter berdasarkan verdict dan tanggal, fitur pencarian, dan statistik agregat.

---
## F. Implementasi Perangkat Lunak

### F.1 Spesifikasi Teknologi

| Komponen | Teknologi | Keterangan |
|---|---|---|
| Backend Framework | FastAPI (Python 3.11) | REST API asinkron, auto-docs Swagger/OpenAPI |
| Database | PostgreSQL via Supabase | Penyimpanan persisten, RLS, real-time subscriptions |
| Graf Analisis | NetworkX (in-memory) | Analisis jaringan penipuan, deteksi komunitas |
| NER | Regex-based NER | Ekstraksi entitas khusus konteks lowongan Indonesia |
| NLP Classifier | TF-IDF + Logistic Regression | Klasifikasi perilaku teks berbahasa Indonesia |
| LLM | kimi-k3-high via OpenAgentic API | Penalaran berbasis bukti, sintesis naratif |
| OSINT: Domain | WHOIS lookup | Verifikasi usia dan reputasi domain |
| OSINT: Lokasi | OSM / Nominatim | Geocoding dan validasi alamat |
| OSINT: Reputasi | Kredibel.id | Database pengaduan konsumen Indonesia |
| OSINT: Web Search | DuckDuckGo SERP, Yahoo SERP | Penelusuran berita dan diskusi online |
| OSINT: Scraping | Scrapling | Akses konten halaman web perusahaan |
| OSINT: Sosial | Social OSINT module | Jejak digital media sosial |
| XAI | Custom Hybrid Explanation Explainer | Penjelasan kontribusi fitur aditif |
| Frontend Framework | Next.js (App Router) | SSR/SSG, routing, API routes |
| Styling | Tailwind CSS | Utility-first, responsive design |
| Ikon | Phosphor Icons | Konsistensi visual, lightweight |
| Animasi | motion/react | Transisi halus, micro-interactions |
| Deployment | Vercel (Frontend) + Railway/Fly.io (Backend) | CI/CD otomatis dari GitHub |

### F.2 Struktur Repositori

```
verifin/
├── backend/
│   ├── app/
│   │   ├── main.py                    # FastAPI app entry point
│   │   ├── api/
│   │   │   ├── routes/
│   │   │   │   ├── analyze.py         # POST /api/analyze
│   │   │   │   ├── jobs.py            # GET /api/jobs/{id}
│   │   │   │   └── community.py       # POST/GET /api/reports
│   │   ├── core/
│   │   │   ├── pipeline.py            # Orchestrator 5-layer pipeline
│   │   │   ├── ner.py                 # Regex-based NER module
│   │   │   ├── nlp_classifier.py      # TF-IDF + Logistic Regression
│   │   │   ├── osint/
│   │   │   │   ├── whois_lookup.py
│   │   │   │   ├── geocoding.py
│   │   │   │   ├── kredibel.py
│   │   │   │   ├── ddg_serp.py
│   │   │   │   ├── yahoo_serp.py
│   │   │   │   ├── scrapling_scraper.py
│   │   │   │   └── social_osint.py
│   │   │   ├── llm_reasoning.py       # kimi-k3-high via OpenAgentic, evidence-only
│   │   │   ├── trust_score.py         # Score aggregation + verdict
│   │   │   ├── xai_explainer.py       # Custom Hybrid Explanation explainer
│   │   │   ├── fraud_fingerprint.py   # Hashing + deduplication
│   │   │   └── network_graph.py       # NetworkX fraud network
│   │   ├── models/
│   │   │   ├── job.py                 # Pydantic models: Job, AnalysisResult
│   │   │   ├── osint.py               # OsintResult, OsintBundle
│   │   │   └── report.py              # CommunityReport, Verdict
│   │   └── db/
│   │       ├── supabase_client.py     # Supabase/PostgreSQL connection
│   │       └── queries.py             # SQL queries & ORM helpers
│   ├── tests/
│   │   ├── test_ner.py
│   │   ├── test_nlp.py
│   │   ├── test_osint.py
│   │   └── test_pipeline.py
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx               # Halaman utama (input)
│   │   │   ├── result/[id]/page.tsx   # Halaman hasil analisis
│   │   │   └── community/page.tsx     # Halaman komunitas
│   │   ├── components/
│   │   │   ├── AnalysisForm.tsx       # Form input teks/URL
│   │   │   ├── VerdictBadge.tsx       # AMAN/WASPADA/BAHAYA badge
│   │   │   ├── TrustScoreGauge.tsx    # Visualisasi skor 0-100
│   │   │   ├── OsintBreakdown.tsx     # Detail hasil per modul OSINT
│   │   │   ├── XaiExplainer.tsx       # Breakdown kontribusi fitur
│   │   │   ├── FraudNetworkGraph.tsx  # Visualisasi graf interaktif
│   │   │   └── CommunityFeed.tsx      # Feed laporan komunitas
│   │   └── lib/
│   │       ├── api.ts                 # API client functions
│   │       └── types.ts               # TypeScript type definitions
│   ├── package.json
│   └── tailwind.config.ts
└── README.md
```

### F.3 Skema Database PostgreSQL

**Tabel `jobs`** — Menyimpan data lowongan dan hasil analisis:
```sql
CREATE TABLE jobs (
    id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    input_text    TEXT NOT NULL,
    input_url     TEXT,
    created_at    TIMESTAMPTZ DEFAULT NOW(),
    status        VARCHAR(20) DEFAULT 'pending',  -- pending|processing|done|error
    trust_score   INTEGER,                         -- 0-100
    verdict       VARCHAR(10),                     -- AMAN|WASPADA|BAHAYA
    fingerprint   VARCHAR(64),                     -- SHA-256 hash entitas kunci
    entities      JSONB,                           -- Hasil ekstraksi NER
    nlp_score     FLOAT,                           -- Skor klasifikasi NLP
    osint_bundle  JSONB,                           -- Hasil seluruh modul OSINT
    llm_summary   TEXT,                            -- Narasi LLM berbasis bukti
    xai_factors   JSONB                            -- Kontribusi fitur XAI
);
```

**Tabel `community_reports`** — Menyimpan laporan pengguna:
```sql
CREATE TABLE community_reports (
    id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    job_id        UUID REFERENCES jobs(id),
    reporter_ip   VARCHAR(45),                     -- Hashed IP
    report_text   TEXT,
    upvotes       INTEGER DEFAULT 0,
    downvotes     INTEGER DEFAULT 0,
    created_at    TIMESTAMPTZ DEFAULT NOW(),
    verified      BOOLEAN DEFAULT FALSE
);
```

**Tabel `fraud_fingerprints`** — Indeks deduplikasi:
```sql
CREATE TABLE fraud_fingerprints (
    fingerprint   VARCHAR(64) PRIMARY KEY,
    first_seen    TIMESTAMPTZ DEFAULT NOW(),
    last_seen     TIMESTAMPTZ DEFAULT NOW(),
    occurrence    INTEGER DEFAULT 1,
    avg_score     FLOAT,
    entity_hash   JSONB                            -- Komponen hash per entitas
);
```

### F.4 Contoh Alur Analisis End-to-End

Berikut adalah ilustrasi alur kerja sistem ketika pengguna mengirimkan teks lowongan:

**Input:**
```
Dibutuhkan Admin Online WFH
Gaji 8-15 juta/bulan
Syarat: min SMA, punya HP Android
Hubungi: 0812-XXXX-XXXX (Budi - HRD PT Sukses Mandiri)
Langsung kerja, tidak perlu pengalaman
Kirim foto dan KTP sekarang
```

**Layer 1 — NER Output:**
```json
{
  "company": "PT Sukses Mandiri",
  "contact_phone": "0812XXXXXXXX",
  "contact_name": "Budi",
  "role": "HRD",
  "position": "Admin Online",
  "work_type": "WFH",
  "salary_min": 8000000,
  "salary_max": 15000000,
  "requirements": ["min SMA", "HP Android"],
  "document_request": ["foto", "KTP"]
}
```

**Layer 2 — NLP Classifier Output:**
```json
{
  "nlp_risk_score": 0.87,
  "triggered_features": [
    "salary_unrealistic_wfh",
    "document_request_early",
    "no_experience_required",
    "urgency_language"
  ]
}
```

**Layer 3 — OSINT Bundle (paralel, ~8 detik):**
```json
{
  "whois": {"domain_found": false, "note": "Tidak ada domain terdaftar"},
  "geocoding": {"address_valid": false, "note": "Alamat tidak ditemukan"},
  "kredibel": {"reports": 3, "category": "penipuan_rekrutmen"},
  "ddg_serp": {"results": ["Waspada! Nomor ini dilaporkan penipuan - Kaskus 2025"]},
  "yahoo_serp": {"results": ["PT Sukses Mandiri tidak terdaftar di AHU"]},
  "scrapling": {"website_found": false},
  "social_osint": {"instagram": null, "linkedin": null}
}
```

**Layer 4 — LLM Reasoning Output (berbasis bukti):**
```
Berdasarkan fakta OSINT yang dikumpulkan: (1) nomor kontak 0812XXXXXXXX
tercatat dalam 3 laporan penipuan rekrutmen di Kredibel.id; (2) PT Sukses
Mandiri tidak memiliki kehadiran digital yang dapat diverifikasi (tidak ada
domain, website, atau akun media sosial resmi); (3) hasil pencarian web
mengkonfirmasi adanya pelaporan penipuan terkait nomor ini. Permintaan
dokumen identitas (KTP dan foto) di awal proses rekrutmen, dikombinasikan
dengan tawaran gaji yang sangat tinggi untuk posisi tanpa pengalaman,
merupakan pola konsisten penipuan rekrutmen berbasis phishing data pribadi.
```

**Layer 5 — Skor Risiko + XAI Output:**
```json
{
  "trust_score": 12,
  "verdict": "BAHAYA",
  "xai_factors": [
    {"factor": "Nomor dilaporkan penipuan (Kredibel.id)", "contribution": -28},
    {"factor": "Tidak ada kehadiran digital perusahaan", "contribution": -22},
    {"factor": "Permintaan KTP/foto di awal", "contribution": -18},
    {"factor": "Gaji tidak realistis untuk posisi WFH tanpa pengalaman", "contribution": -15},
    {"factor": "Pola teks urgency tinggi", "contribution": -5}
  ]
}
```

### F.5 Rencana Pengujian

**Unit Testing (Pytest):**
- Test ekstraksi entitas NER untuk berbagai format nomor telepon, nama perusahaan, dan alamat Indonesia
- Test klasifikasi NLP dengan sampel lowongan positif dan negatif yang berlabel
- Test setiap modul OSINT dengan mock responses untuk menghindari ketergantungan jaringan
- Test kalkulasi Skor Risiko dengan kombinasi input yang bervariasi
- Test deduplikasi fingerprint

**Integration Testing:**
- Test pipeline end-to-end dengan sampel lowongan nyata (10 AMAN, 10 WASPADA, 10 BAHAYA)
- Test API endpoint dengan Postman/pytest-httpx
- Test persistensi database dan konsistensi data

**User Acceptance Testing (UAT):**
- Pengujian dengan 5 pengguna target (fresh graduate, pencari kerja aktif) menggunakan protokol think-aloud
- Evaluasi keterbacaan penjelasan XAI oleh pengguna awam
- Pengujian fungsionalitas pelaporan komunitas

### F.6 Panduan Penggunaan Platform

**Cara Menggunakan Verifin:**

1. **Buka platform Verifin** di browser (web-based, tidak perlu instalasi)

2. **Masukkan lowongan yang ingin diperiksa** — tersedia dua cara:
   - *Tempel teks*: salin teks lowongan dari WhatsApp/Instagram/Telegram, tempel di kotak teks
   - *Masukkan URL*: tempel tautan lowongan dari website atau media sosial

3. **Klik tombol "Analisis Sekarang"** — sistem akan memproses lowongan melalui pipeline 5-layer secara otomatis (estimasi 15–30 detik)

4. **Baca hasil analisis:**
   - Lihat **verdict** (AMAN / WASPADA / BAHAYA) dan **Skor Risiko** 0–100 di bagian atas
   - Baca **penjelasan naratif** dari sistem yang menjelaskan mengapa lowongan dinilai demikian
   - Eksplorasi **breakdown skor** untuk melihat faktor-faktor yang mempengaruhi penilaian
   - Periksa **detail OSINT** untuk melihat hasil verifikasi per sumber
   - Jelajahi **graf jaringan** untuk melihat apakah entitas dalam lowongan terhubung dengan penipuan lain

5. **Berkontribusi ke komunitas** — jika Anda memiliki informasi tambahan atau pernah menjadi korban lowongan serupa, klik "Laporkan ke Komunitas" untuk membantu pencari kerja lain

6. **Akses halaman Komunitas** untuk melihat lowongan-lowongan yang telah dilaporkan oleh pengguna lain dan memvalidasi laporan dengan memberikan upvote/downvote

**Interpretasi Verdict** (Skor Risiko: 0 = sangat aman, 100 = sangat berbahaya):

| Verdict | Skor Risiko | Rekomendasi |
|---|---|---|
| AMAN | 0–39 | Lowongan memiliki indikator kepercayaan yang kuat. Lanjutkan proses lamaran dengan tetap berhati-hati. |
| WASPADA | 40–74 | Terdapat beberapa sinyal meragukan. Lakukan verifikasi tambahan sebelum menyerahkan dokumen. |
| BAHAYA | 75–100 | Indikator kuat penipuan terdeteksi. Sangat disarankan untuk tidak merespons lowongan ini. |

> Ambang klasifikasi dikalibrasi pada skor 45 untuk memaksimalkan F1 pada dataset EMSCAD.

---

## Evaluasi Model (Dataset EMSCAD)

Kinerja model klasifikasi teks (TF-IDF + Logistic Regression, hybrid dengan aturan perilaku) diukur pada dataset publik **EMSCAD** (17.880 lowongan, 866 penipuan). Ambang klasifikasi dikalibrasi pada **45** untuk memaksimalkan F1.

| Metrik | Nilai |
|---|---|
| ROC-AUC | **0,996** |
| Recall (deteksi penipuan) | **98,4%** |
| Precision | 56,6% |
| F1-score | 0,718 |

Recall tinggi (98,4%) menjadi prioritas desain karena karakteristik domain deteksi penipuan: *false negative* (penipuan lolos) berpotensi menyebabkan kerugian finansial hingga menjadi pintu masuk TPPO, sehingga jauh lebih berbahaya daripada *false positive* (lowongan legitimate tertandai dan masih dapat diverifikasi lebih lanjut). Metrik yang paling relevan bagi sistem ini bukan akurasi keseluruhan, melainkan **tingkat penipuan yang berhasil ditangkap (recall)** dan *false negative rate* yang rendah. Konsekuensinya, precision yang lebih rendah (56,6%) adalah trade-off yang diterima secara sadar.

Perlu dicatat bahwa evaluasi di atas adalah evaluasi **Layer 2 (model klasifikasi teks)** secara terpisah pada dataset EMSCAD, **bukan** evaluasi end-to-end terhadap seluruh pipeline lima layer. Evaluasi end-to-end terhadap dataset berlabel Indonesia, serta pengukuran dampak sistem terhadap keputusan pengguna melalui studi kontrol–perlakuan, merupakan bagian dari agenda pengembangan lanjutan (lihat Batasan C.10). Sistem juga diuji end-to-end pada 3 kanal input nyata (teks, gambar OCR, tautan) dengan hasil deterministik (temperature=0, seed tetap); dua kasus negatif terklasifikasi BAHAYA dengan skor risiko 95.

---

## H. Mockup Antarmuka (Hasil Uji End-to-End)

Berikut tangkapan layar antarmuka Verifin dari pengujian end-to-end nyata (input teks, gambar poster via OCR, dan tautan), mencakup modal progres analisis dan halaman hasil verifikasi dengan skor risiko, faktor yang perlu diwaspadai vs. yang terlihat baik, rekomendasi tindakan, dan entitas yang terdeteksi.

![Modal progres analisis bertahap (OCR → OSINT → Graf → LLM+XAI)](images/mockup-loading.png)

![Hasil verifikasi input teks (PT. VIS): AMAN, skor risiko 30/100 — web evidence relevan (companieshouse.id, portal loker IG)](images/mockup-teks.png)

![Hasil verifikasi input gambar poster (Sushi Yay) via OCR PaddleOCR: AMAN, skor risiko 12/100, alamat tervalidasi OpenStreetMap](images/mockup-gambar.png)

![Hasil verifikasi input tautan Instagram (Indonesia College): AMAN, skor risiko 15/100 — website aktif, domain tervalidasi, 7 jejak digital relevan (noise disaring)](images/mockup-link.png)

---

## Daftar Pustaka

[1] Badan Pusat Statistik (BPS), "Keadaan Ketenagakerjaan Indonesia Februari 2025," Berita Resmi Statistik No. 39/05/Th. XXVIII, Mei 2025. [Online]. Available: https://www.bps.go.id

[2] Global Anti-Scam Alliance (GASA) & Mastercard, "State of Scams in Indonesia 2024," GASA Annual Report, 2024. [Online]. Available: https://www.gasa.org

[3] Kementerian Luar Negeri Republik Indonesia (Kemenlu RI), "Penanganan WNI Korban Online Scamming dan TPPO di Asia Tenggara," Direktorat Perlindungan WNI dan BHI, 2024. (Lebih dari 3.300 WNI diselamatkan dari pusat online scam di Kamboja, Myanmar, Laos, dan Filipina pada 2020–2024.)

[4] United Nations Office on Drugs and Crime (UNODC), "Casinos, Cyber Fraud, and Trafficking in Persons for Forced Criminality in Southeast Asia," UNODC Regional Report, 2023.

[5] S. Shalini, R. Lokesh, and S. Priya, "Fake Job Posting Detection Using Machine Learning," International Journal of Computer Applications, vol. 183, no. 52, pp. 1–6, 2022.

[6] T. Alwafi and R. Abdulrahman, "Detection of Recruitment Fraud Using Semantic Approaches," Security and Communication Networks, 2019, doi: 10.1155/2019/7523043.

[7] V. G. Varsha and P. A. Thomas, "Explainable AI For Phishing Detection: Techniques, Challenges, and Experimental Validation," in Proc. IEEE Recent Advances in Intelligent Computational Systems (RAICS), Nov. 2025.

[8] J. Pastor-Galindo, P. Nespoli, F. G. Marmol, and G. M. Perez, "The Not Yet Exploited Goldmine of OSINT: Opportunities, Open Challenges and Future Trends," IEEE Access, vol. 8, pp. 10282–10304, 2020, doi: 10.1109/ACCESS.2020.2965257.

[9] B. Wilie et al., "IndoNLU: Benchmark and Resources for Evaluating Indonesian Natural Language Understanding," in Proc. 1st Conf. of the Asia-Pacific Chapter of the ACL (AACL), Dec. 2020, pp. 843–857.
