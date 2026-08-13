# Verifin  
## Liga Komatik 2026 Universitas Gadjah Mada  
### Dokumen Pengembangan Perangkat Lunak  
**Penyusun:** Hafidz Rizqullah Prasetya  

---

## Daftar Isi

A. Latar Belakang Ide Perangkat Lunak  
B. Tujuan dan Manfaat Pengembangan Perangkat Lunak  
C. Batasan Perangkat Lunak  
D. Metodologi Pengembangan  
E. Analisis Kebutuhan dan Desain Solusi  
F. Implementasi Perangkat Lunak  
G. Screenshot Mockup Antarmuka dan Hasil Uji End-to-End  
H. Dokumentasi Cara Penggunaan Perangkat Lunak  
Daftar Pustaka  

---

# A. Latar Belakang Ide Perangkat Lunak

Tingkat pengangguran terbuka di Indonesia masih menjadi persoalan besar. Berdasarkan data Badan Pusat Statistik, pada Februari 2025 jumlah pengangguran terbuka mencapai sekitar **7,28 juta orang** dengan tingkat pengangguran terbuka sebesar **4,76%**. Angka ini meningkat dibandingkan periode yang sama tahun sebelumnya yang tercatat sekitar **7,20 juta orang**.

Dalam kondisi tersebut, banyak pencari kerja di Indonesia menerima tawaran lowongan kerja dari kanal-kanal yang tidak terkurasi, seperti:

- WhatsApp  
- Instagram  
- Telegram  
- Facebook  
- grup daring  
- papan pengumuman fisik  
- pesan berantai  

Laporan **State of Scams in Indonesia** dari **Global Anti-Scam Alliance (GASA)** dan **Mastercard** menunjukkan bahwa persoalan penipuan digital sangat serius:

- **66%** orang dewasa di Indonesia pernah terpapar setidaknya satu upaya penipuan digital dalam 12 bulan terakhir.  
- Estimasi kerugian finansial nasional mencapai sekitar **Rp49 triliun**.  
- Dari seluruh korban penipuan digital, sekitar **49%** terpapar modus penipuan lowongan kerja.  

Artinya, penipuan bermodus lowongan kerja merupakan salah satu modus yang paling dominan.

Dampaknya tidak hanya kerugian uang. Kementerian Luar Negeri Republik Indonesia mencatat lebih dari **3.300 WNI** diselamatkan dari pusat-pusat penipuan daring di Asia Tenggara, seperti Kamboja, Myanmar, Laos, dan Filipina, pada periode 2020–2024. Banyak dari mereka berangkat karena tergiur iklan lowongan kerja palsu di media sosial. Hal ini juga sejalan dengan laporan UNODC bahwa lowongan kerja palsu merupakan metode utama perekrutan korban tindak pidana perdagangan orang untuk dipekerjakan paksa di pusat penipuan siber.

Di balik data tersebut, ada masalah nyata yang dihadapi pencari kerja: mereka harus memverifikasi sendiri keaslian lowongan. Proses verifikasi manual biasanya meliputi:

- mencari nama perusahaan di mesin pencari,  
- mengecek reputasi nomor telepon,  
- memvalidasi alamat di peta digital,  
- menelusuri ulasan di media sosial,  
- memeriksa legalitas perusahaan.  

Proses ini membutuhkan waktu, pengetahuan digital, dan ketelitian. Akibatnya, banyak orang mengambil keputusan tanpa verifikasi memadai, misalnya langsung membalas pesan, mengirim data pribadi, atau bahkan mengirim uang.

Kondisi ini menciptakan **kesenjangan informasi** antara pihak yang menawarkan lowongan dan pencari kerja, terutama saat pencari kerja berada dalam posisi rentan secara ekonomi dan psikologis.

Solusi yang ada saat ini belum cukup:

- Media sosial biasanya hanya menyediakan fitur lapor yang bersifat reaktif.  
- Job board formal hanya mengkurasi perusahaan yang mendaftar atau membayar.  
- Imbauan pemerintah masih bersifat umum.  
- Belum ada alat verifikasi terintegrasi yang bisa menganalisis lowongan langsung dari kanal informal.  

Karena itu, **Verifin** dikembangkan untuk mengisi celah tersebut.

---

## Posisi dan Ruang Lingkup Verifin

**Verifin** atau **Verifikasi Lowongan Kerja** adalah sebuah sistem pendukung keputusan berbasis **Explainable AI** untuk membantu verifikasi awal tawaran kerja yang diterima melalui kanal digital informal.

Sistem ini menganalisis teks atau URL lowongan kerja secara otomatis menggunakan beberapa lapisan teknologi:

1. **Named Entity Recognition (NER) hibrida**  
2. **Klasifikasi perilaku teks**  
3. **Investigasi OSINT multi-sumber**  
4. **Sintesis naratif berbasis LLM**  
5. **Penjelasan berbasis Explainable AI (XAI)**  

Hasil akhir dari sistem adalah:

- **Skor Risiko 0–100**  
  - 0 berarti sangat aman  
  - 100 berarti sangat berbahaya  
- **Verdict tiga tingkat**:  
  - **AMAN**  
  - **WASPADA**  
  - **BAHAYA**  
- Penjelasan berbasis bukti yang dapat dipahami pengguna awam.

Kontribusi utama Verifin dapat diringkas sebagai berikut:

> Verifin adalah Explainable AI-powered Decision Support System yang mengintegrasikan OSINT dan analisis linguistik untuk mengurangi kesenjangan informasi pada tahap verifikasi awal tawaran kerja di kanal informal.

Perlu ditegaskan bahwa Verifin tidak dirancang untuk menghilangkan seluruh risiko penipuan. Verifin juga tidak mengatasi faktor psikologis korban, seperti tekanan ekonomi, bias otoritas, rasa takut ketinggalan peluang, atau manipulasi sosial. Intervensi Verifin difokuskan pada satu hal yang bisa diselesaikan melalui perangkat lunak, yaitu mengurangi **information asymmetry** pada tahap verifikasi awal.

Sebagai sistem pendukung keputusan, keputusan akhir tetap berada di tangan pengguna. Verifin membantu agar keputusan tersebut diambil dengan informasi yang lebih lengkap, transparan, dan dapat diaudit.

---

## Penjelasan Gambar pada Bagian Latar Belakang

### Figure 1: Distribusi Kanal Penyebaran Lowongan Penipuan di Indonesia

Gambar ini berupa diagram batang yang menunjukkan kanal-kanal yang sering digunakan untuk menyebarkan lowongan kerja palsu. Kanal yang ditampilkan meliputi WhatsApp, Instagram, Telegram, Facebook, Email, dan lainnya.

Makna utama dari gambar ini adalah bahwa penipuan lowongan kerja paling banyak tersebar melalui aplikasi pesan dan media sosial, bukan melalui job board resmi. WhatsApp appears sebagai salah satu kanal yang sangat dominan, diikuti oleh Instagram dan Telegram. Gambar ini memperkuat alasan mengapa Verifin perlu hadir di ruang informal tempat lowongan palsu paling sering beredar.

---

### Figure 2: 49% Korban Penipuan Digital Terekspos Modus Lowongan Kerja

Gambar ini menampilkan visualisasi statistik bahwa **49% korban penipuan digital di Indonesia** pernah terpapar modus penipuan lowongan kerja. Angka ini menunjukkan bahwa lowongan kerja palsu adalah salah satu modus penipuan paling umum.

Makna gambar ini adalah bahwa masalah lowongan palsu bukan kasus kecil, melainkan persoalan besar yang berdampak luas pada masyarakat, khususnya pencari kerja.

---

# B. Tujuan dan Manfaat Pengembangan Perangkat Lunak

## B.1 Tujuan

Tujuan pengembangan Verifin adalah sebagai berikut:

1. Membangun platform web Verifin sebagai sistem pendukung keputusan berbasis Explainable AI yang mampu menganalisis teks atau URL lowongan kerja secara otomatis dan menghasilkan:
   - Skor Risiko 0–100  
   - verdict AMAN, WASPADA, atau BAHAYA  
   - penjelasan berbasis bukti  

2. Mengimplementasikan pipeline analisis berlapis yang menggabungkan:
   - NER hibrida berbahasa Indonesia  
   - klasifikasi perilaku teks  
   - investigasi OSINT multi-sumber  
   - sintesis naratif berbasis LLM melalui OpenAgentic  
   - penjelasan berbasis XAI hibrida  

3. Membangun **Fraud Network Graph** berbasis PostgreSQL untuk mendeteksi penggunaan ulang entitas mencurigakan seperti:
   - nomor telepon  
   - domain  
   - nama perusahaan  

4. Menyediakan fitur **community monitoring** agar pengguna dapat melaporkan dan menilai lowongan mencurigakan secara kolektif.

5. Menyediakan REST API publik yang terdokumentasi agar dapat diintegrasikan dengan platform pihak ketiga.

---

## B.2 Manfaat

### 1. Bagi Pencari Kerja

Pencari kerja mendapatkan alat verifikasi yang:

- gratis,  
- cepat,  
- berbasis bukti,  
- mudah digunakan.  

Pengguna tidak perlu lagi melakukan investigasi manual yang memakan waktu.

### 2. Bagi Ekosistem Ketenagakerjaan

Verifin menciptakan lapisan keamanan kolektif melalui Fraud Network Graph. Setiap analisis baru dapat memperkaya database entitas mencurigakan sehingga membantu melindungi pengguna lain.

### 3. Bagi Masyarakat Luas

Verifin berkontribusi dalam upaya penanggulangan tindak pidana perdagangan orang berbasis rekrutmen daring dengan memutus rantai penipuan sejak tahap awal, yaitu sebelum korban merespons iklan.

### 4. Bagi Pengembang dan Peneliti

API publik memungkinkan integrasi ke platform lain, seperti:

- ekstensi browser,  
- bot Telegram,  
- job board,  
- tools keamanan digital.  

Data agregat juga dapat digunakan untuk meneliti pola penipuan kerja di Indonesia.

### 5. Bagi Kemajuan NLP Bahasa Indonesia

Pengembangan sistem NER dan klasifikasi teks untuk domain lowongan kerja berbahasa Indonesia berkontribusi pada pengembangan ekosistem NLP Bahasa Indonesia.

---

# C. Batasan Perangkat Lunak

Agar sistem dapat dibangun, diuji, dan didemonstrasikan dalam konteks kompetisi, Verifin memiliki beberapa batasan berikut.

## C1. Bahasa Input

Sistem dioptimalkan untuk teks lowongan dalam Bahasa Indonesia. Input dalam bahasa lain tetap dapat diterima, tetapi akurasi NER dan klasifikasi tidak dijamin sama baiknya.

## C2. Sumber OSINT

Investigasi OSINT hanya menggunakan sumber publik dan legal, yaitu:

- Whois/RDAP untuk domain, termasuk usia dan registrar domain.  
- Validasi reputasi nomor telepon Indonesia melalui halaman publik Kredibel.  
- Validasi alamat menggunakan OpenStreetMap/Nominatim.  
- Pencarian jejak digital perusahaan melalui multi-engine web search seperti DuckDuckGo, Yahoo, dan Bing.  
- Inspeksi formulir atau shortlink, termasuk Google Form, untuk mendeteksi indikasi phishing.  

Sistem tidak mengakses database kepolisian, Dukcapil, atau sistem pemerintah lain yang memerlukan izin khusus.

## C3. Skala Database Awal

Pada versi demonstrasi, Fraud Network Graph diinisialisasi dengan data sintetis yang representatif. Database komunitas nyata diharapkan tumbuh setelah sistem digunakan publik.

## C4. Platform Target

Verifin adalah aplikasi web yang dioptimalkan untuk browser desktop seperti Chrome, Firefox, dan Safari. Tidak ada aplikasi mobile native dalam cakupan pengembangan, meskipun tampilan web dibuat responsif.

## C5. Keterbatasan Klasifikasi Teks

Pre-screening teks menggunakan model **TF-IDF + Logistic Regression** yang dilatih pada dataset EMSCAD berbahasa Inggris, lalu digabung dengan aturan perilaku berbasis pola penipuan lowongan di Indonesia.

Akurasi dapat lebih rendah pada pola penipuan yang sangat baru, sangat lokal, atau tidak umum. Penambahan data latih berbahasa Indonesia masuk dalam rencana pengembangan lanjutan.

## C6. Ketergantungan pada API Eksternal

Pipeline analisis bergantung pada layanan eksternal seperti:

- OpenAgentic/OpenAI untuk LLM  
- Supabase untuk database  

Jika layanan tersebut terganggu, ketersediaan sistem dapat terpengaruh.

## C7. Bukan Layanan Hukum

Verdict Verifin adalah penilaian berbasis risiko, bukan keputusan hukum. Sistem tidak dapat memastikan secara mutlak bahwa sebuah lowongan pasti penipuan. Pengguna tetap disarankan melakukan verifikasi tambahan, terutama untuk kasus dengan skor perbatasan.

## C8. Privasi dan Anonimisasi

Laporan komunitas bersifat anonim. Identitas pelapor tidak ditampilkan. Nomor telepon dinormalisasi untuk pencocokan, dan data pribadi dari teks lowongan tidak ditampilkan ke publik.

Sebelum teks dikirim ke LLM eksternal, sistem menerapkan:

- **PII masking**, yaitu penyamaran data pribadi seperti nomor telepon, email, dan identitas personal.  
- kebijakan **no retention**, yaitu teks tidak disimpan setelah analisis selesai.

## C9. Batas Intervensi Sistem

Verifin tidak dirancang untuk mengatasi seluruh faktor psikologis dan sosial yang membuat seseorang tetap merespons lowongan berbahaya, seperti:

- tekanan ekonomi,  
- bias otoritas,  
- fear of missing out,  
- social engineering.  

Intervensi Verifin terbatas pada mengurangi kesenjangan informasi pada tahap verifikasi awal.

## C10. Agenda Pengembangan Lanjutan

Pengembangan lanjutan yang direncanakan setelah versi kompetisi meliputi:

1. Fine-tuning model klasifikasi dengan dataset penipuan lowongan Indonesia.  
2. Studi pengguna untuk mengukur dampak Verifin terhadap kemampuan pengguna mengenali lowongan palsu.  
3. Integrasi kanal lain seperti bot WhatsApp dan ekstensi browser.

---

# D. Metodologi Pengembangan Perangkat Lunak

Verifin dikembangkan menggunakan metodologi **Agile Scrum** yang disesuaikan untuk tim kecil beranggotakan tiga orang dalam konteks kompetisi dengan batas waktu ketat.

Pengembangan dilakukan melalui beberapa sprint dengan durasi sekitar dua minggu per sprint.

---

## D.1 Struktur Sprint

| Sprint | Periode | Target Deliverable |
|---|---|---|
| Sprint 0 | Minggu 1–2 | Riset, desain arsitektur, setup repo, konfigurasi Supabase, scaffolding Next.js dan FastAPI |
| Sprint 1 | Minggu 3–4 | Implementasi pipeline NER hibrida, klasifikasi perilaku teks, endpoint FastAPI dasar, UI input form |
| Sprint 2 | Minggu 5–6 | Implementasi modul OSINT, LLM synthesis via OpenAgentic, Fraud Network Graph, XAI explainer |
| Sprint 3 | Minggu 7–8 | Risk score engine, community monitoring, riwayat analisis, API publik, dashboard hasil, visualisasi graf |
| Sprint 4 | Minggu 9–10 | Pengujian integrasi, optimasi performa, deployment, dokumentasi, persiapan demonstrasi |

---

## D.2 Pembagian Peran Tim

| Peran | Anggota | Tanggung Jawab Utama |
|---|---|---|
| Tech Lead & AI Engineer | Hafidz Rizqullah P. | Arsitektur sistem, pipeline NER+NLP, risk score engine, XAI, koordinasi tim |
| Backend & OSINT Engineer | Akmal Manggala P. | FastAPI backend, modul OSINT, Fraud Network Graph, skema database, API publik |
| Frontend & Integration | Matthew Hayunaji | Next.js frontend, UI/UX, visualisasi graf, integrasi LLM, community monitoring |

---

## D.3 Prinsip Pengembangan

1. **API-First**  
   Backend dibangun sebagai API murni agar mudah diintegrasikan oleh frontend maupun pihak ketiga.

2. **Test-Driven**  
   Setiap modul pipeline dilengkapi unit test sebelum integrasi.

3. **Security by Design**  
   Validasi input, rate limiting, dan manajemen secret diterapkan sejak awal.

4. **Explainability First**  
   Setiap keputusan skor risiko harus dapat dijelaskan secara transparan.

5. **Progressive Enhancement**  
   Setiap sprint harus menghasilkan perangkat lunak yang berfungsi.

---

## D.4 Tools dan Platform Pengembangan

| Kategori | Tool | Penggunaan |
|---|---|---|
| Version Control | Git + GitHub | Branching model main/develop/feature |
| Project Management | GitHub Projects | Kanban board, issue tracking, sprint planning |
| CI/CD | GitHub Actions | Lint, test, deploy otomatis ke staging |
| Komunikasi | Discord | Daily standup async, notifikasi code review |
| Dokumentasi | Notion | Architecture Decision Records, draft API docs |
| Testing | pytest + Jest | Unit test backend dan frontend |

---

# E. Analisis Kebutuhan dan Desain Solusi Perangkat Lunak

## E.1 Analisis Kebutuhan Fungsional

| ID | Nama | Deskripsi | Prioritas |
|---|---|---|---|
| FR-01 | Input Teks Lowongan | Pengguna dapat menempelkan teks lowongan kerja minimal 50 karakter untuk dianalisis | Tinggi |
| FR-02 | Input URL Lowongan | Pengguna dapat memasukkan URL halaman lowongan; sistem mengekstrak teks dari halaman tersebut | Tinggi |
| FR-03 | Ekstraksi Entitas NER Hibrida | Sistem mengekstrak entitas seperti nama perusahaan, nomor telepon, email, URL/domain, gaji, dan lokasi menggunakan regex dan LLM | Tinggi |
| FR-04 | Klasifikasi Perilaku Teks | Sistem melakukan pre-screening teks menggunakan TF-IDF + Logistic Regression dan aturan perilaku | Tinggi |
| FR-05 | Investigasi OSINT Domain | Sistem memeriksa domain/URL melalui Whois, usia domain, dan keaktifan website | Tinggi |
| FR-06 | Investigasi OSINT Telepon | Sistem memvalidasi format nomor telepon Indonesia dan mengecek laporan fraud di Kredibel | Tinggi |
| FR-07 | Investigasi OSINT Perusahaan | Sistem mencari jejak digital perusahaan melalui multi-engine search dan mengidentifikasi inkonsistensi | Tinggi |
| FR-08 | Sintesis Naratif LLM | Sistem menghasilkan ringkasan naratif berbahasa Indonesia berdasarkan temuan OSINT | Tinggi |
| FR-09 | Skor Risiko dan Verdict | Sistem menghasilkan Skor Risiko 0–100 dan verdict AMAN/WASPADA/BAHAYA | Tinggi |
| FR-10 | Penjelasan XAI | Sistem menampilkan penjelasan kontribusi fitur terhadap skor risiko | Tinggi |
| FR-11 | Visualisasi Graf Jaringan | Sistem menampilkan graf koneksi entitas lowongan dengan entitas lain di database | Sedang |
| FR-12 | Community Monitoring | Pengguna dapat melaporkan lowongan mencurigakan, memberi vote, dan melihat laporan | Sedang |
| FR-13 | Riwayat Analisis | Sistem menyimpan riwayat analisis berdasarkan sesi/akun | Sedang |
| FR-14 | API Publik | Sistem menyediakan REST API terdokumentasi untuk integrasi pihak ketiga | Sedang |

---

## E.2 Analisis Kebutuhan Non-Fungsional

| ID | Nama | Deskripsi |
|---|---|---|
| NFR-01 | Performa | Pipeline analisis lengkap ditargetkan selesai dalam 2–3 menit untuk 90% permintaan. Modul OSINT dijalankan paralel dan pengguna melihat indikator progres. |
| NFR-02 | Ketersediaan | Uptime minimal 95% selama demonstrasi dan evaluasi. |
| NFR-03 | Keamanan | Input divalidasi dan disanitasi. API key disimpan sebagai environment variable. Rate limiting diterapkan pada endpoint analisis. |
| NFR-04 | Skalabilitas | FastAPI memungkinkan horizontal scaling. PostgreSQL di Supabase mendukung connection pooling. |
| NFR-05 | Kemudahan Penggunaan | Dapat digunakan oleh pencari kerja awam tanpa pelatihan teknis. |
| NFR-06 | Transparansi | Setiap verdict disertai penjelasan yang dapat dipahami dan diverifikasi. |

---

## E.3 Desain Solusi: Arsitektur Sistem

Verifin menggunakan arsitektur berlapis yang memisahkan tanggung jawab tiap komponen secara jelas. Pipeline utamanya terdiri dari lima layer:

1. **Layer 1: NER**  
   Ekstraksi entitas dari teks lowongan.

2. **Layer 2: NLP**  
   Klasifikasi perilaku teks.

3. **Layer 3: OSINT**  
   Investigasi domain, nomor telepon, dan perusahaan.

4. **Layer 4: LLM**  
   Sintesis narasi berbasis bukti.

5. **Layer 5: XAI**  
   Penjelasan kontribusi fitur terhadap skor risiko.

Input lowongan diproses melalui lima layer tersebut hingga menghasilkan Skor Risiko dan penjelasan.

---

### Penjelasan Figure 3: Pipeline Analisis 5-Layer Verifin

Figure 3 menggambarkan alur pipeline dari input lowongan hingga hasil akhir. Input masuk ke Layer 1 untuk ekstraksi entitas, lalu ke Layer 2 untuk klasifikasi, kemudian Layer 3 untuk investigasi OSINT, Layer 4 untuk sintesis LLM, dan Layer 5 untuk penjelasan XAI. Hasil akhirnya adalah Skor Risiko.

Makna gambar ini adalah bahwa Verifin tidak hanya mengandalkan satu model AI, tetapi menggabungkan beberapa tahap analisis agar hasil lebih kuat dan dapat dijelaskan.

---

### Penjelasan Figure 4: Decision Support System Verifin

Figure 4 menunjukkan komponen inti sistem Verifin, yaitu:

- **OSINT Engine**  
  Terdiri dari pemeriksaan domain Whois, validasi nomor telepon melalui Kredibel, web search, peta, dan inspeksi form.

- **Fraud Network Graph**  
  Menggunakan PostgreSQL sebagai basis data graf, fingerprint SHA-256, deduplikasi entitas, dan laporan komunitas.

- **Risk Scoring Engine**  
  Menggabungkan skor NLP, OSINT, dan komunitas menjadi skor 0–100 serta menentukan verdict.

- **XAI Explainer**  
  Menghasilkan penjelasan berbasis model dan bukti, lalu disajikan dalam bahasa yang mudah dipahami.

Gambar ini menegaskan bahwa Verifin adalah sistem pendukung keputusan yang menyeluruh, bukan hanya antarmuka input dan output sederhana.

---

### Penjelasan Figure 5: Tiga Tingkat Verdict Verifin

Figure 5 menampilkan skala Skor Risiko dari 0 sampai 100 dengan tiga kategori:

- **AMAN**: skor 0–39  
- **WASPADA**: skor 40–74  
- **BAHAYA**: skor 75–100  

Gambar ini membantu pengguna memahami bahwa semakin tinggi skor, semakin berbahaya lowongan tersebut.

---

## Tabel Skor Risiko dan Interpretasi Verdict

| Rentang Skor | Verdict | Interpretasi |
|---|---|---|
| 0–39 | AMAN | Lowongan memiliki indikator kepercayaan yang kuat dari verifikasi OSINT, seperti domain valid dan berumur, perusahaan terverifikasi, serta tidak ada laporan penipuan. |
| 40–74 | WASPADA | Terdapat beberapa sinyal meragukan, tetapi bukti belum konklusif. Pengguna disarankan melakukan verifikasi tambahan sebelum merespons. |
| 75–100 | BAHAYA | Terdapat indikator kuat penipuan, seperti domain baru/tidak valid, nomor tidak jelas, perusahaan tidak ditemukan, dan pola teks sesuai ciri penipuan. Pengguna sangat disarankan tidak merespons. |

---

## E.4 Desain Solusi: Tech Stack

| Komponen | Teknologi | Keterangan |
|---|---|---|
| Frontend Framework | Next.js 16 App Router | React dengan SSR/SSG dan routing berbasis file |
| UI Styling | Tailwind CSS 4 | Utility-first CSS dengan kustomisasi penuh |
| Animasi UI | motion/react | Animasi deklaratif dan transisi halaman |
| Ikon | Phosphor Icons | Library ikon yang konsisten dan ringan |
| Visualisasi Graf | React Flow + D3.js | Graf interaktif untuk Fraud Network |
| Backend Framework | FastAPI Python | REST API async dengan dokumentasi OpenAPI otomatis |
| OCR Engine | PaddleOCR 2.8 + OpenCV | Ekstraksi teks dari poster/screenshot dengan pre-processing CLAHE |
| NER Hibrida | Regex + LLM Extraction | Entitas struktural lewat regex, entitas semantik lewat LLM |
| Klasifikasi Teks | TF-IDF + Logistic Regression | Dilatih pada dataset EMSCAD, digabung aturan perilaku |
| LLM Orchestration | OpenAgentic API, kimi-k3-high | Ekstraksi entitas semantik dan sintesis narasi |
| XAI Engine | Custom SHAP-inspired additive explainer | Menjelaskan kontribusi fitur terhadap skor |
| OSINT Domain | python-whois, RDAP | Whois lookup dan usia domain |
| OSINT Nomor HP | Kredibel scraping | Cek laporan fraud nomor Indonesia |
| OSINT Web Evidence | DuckDuckGo/Yahoo/Bing via curl_cffi + BeautifulSoup | Pencarian jejak digital perusahaan |
| OSINT Alamat & Form | OpenStreetMap Nominatim, Google Form inspector | Validasi lokasi dan inspeksi form phishing |
| Analisis Graf | NetworkX | Deteksi entitas yang terhubung ke kasus penipuan |
| Database | PostgreSQL Supabase | Data lowongan, laporan, fingerprint |
| ORM | SQLAlchemy + Alembic | Query ORM dan migrasi skema |
| Auth | Supabase Auth | JWT-based, opsional untuk komunitas |
| Deployment Frontend | Vercel | Live deployment frontend |
| Deployment Backend | Dokploy Home Server | Container Python melalui Cloudflare Tunnel |
| CI/CD | GitHub Actions | Lint, test, deploy otomatis |
| Testing Backend | pytest | Unit dan integration test |
| Testing Frontend | Jest + Vitest | Uji komponen dan hook |

---

# F. Implementasi Perangkat Lunak

## F.1 Implementasi Pipeline Analisis

### Layer 1: Named Entity Recognition (NER) Hibrida

Sistem mengekstrak entitas penting dari teks lowongan menggunakan pendekatan gabungan:

#### Regex deterministik

Digunakan untuk entitas struktural yang polanya relatif stabil, seperti:

- nomor telepon/WhatsApp  
- alamat email  
- URL/domain  

Regex memiliki kelebihan cepat, murah, dan presisi tinggi untuk pola yang jelas.

#### Ekstraksi berbasis LLM

Digunakan untuk entitas semantik yang sulit ditangkap regex, terutama pada hasil OCR poster yang berantakan, seperti:

- nama perusahaan/organisasi  
- alamat fisik/lokasi kerja  
- informasi gaji  

LLM memahami konteks sehingga lebih tahan terhadap variasi layout.

Kedua mekanisme dijalankan secara paralel menggunakan asyncio. Hasilnya digabung dengan strategi per kategori:

- Untuk **ORG**, output LLM bersifat otoritatif sehingga false positive dari regex dapat disaring.  
- Untuk **LOC** dan **SALARY**, hasil regex dan LLM digabung secara aditif.  
- Jika LLM tidak tersedia, sistem fallback ke regex agar pipeline tidak terputus.  

Output layer ini berupa JSON terstruktur yang digunakan oleh layer berikutnya.

---

### Layer 2: Klasifikasi Perilaku Teks

Layer ini melakukan pre-screening awal menggunakan model hybrid:

- **TF-IDF + Logistic Regression** yang dilatih pada dataset EMSCAD  
- aturan perilaku berbasis pola penipuan lowongan  

Komponen ML menangkap pola linguistik dari korpus lowongan nyata, sedangkan aturan perilaku mengekstrak fitur biner seperti:

- permintaan biaya  
- tawaran kerja luar negeri  
- apply via WhatsApp  
- gaji fantastis  
- ada/tidaknya identitas perusahaan  

Kombinasi keduanya menghasilkan skor awal dan label AMAN/WASPADA/BAHAYA. Jika keyakinan model rendah, sistem dapat mendelegasikan penilaian ke LLM pada Layer 4.

---

### Justifikasi Pemilihan Model

Pemilihan **TF-IDF + Logistic Regression** adalah keputusan rekayasa yang disengaja, bukan klaim bahwa model ini selalu paling unggul dibanding model lain.

Alasan pemilihannya:

1. **Interpretabilitas tinggi**  
   Koefisien model menunjukkan kontribusi fitur kata, sehingga cocok untuk penjelasan XAI.

2. **Inferensi sangat cepat**  
   Inferensi dapat berjalan di bawah 10 ms, cocok untuk sistem interaktif.

3. **Kebutuhan komputasi rendah**  
   Dapat dijalankan pada infrastruktur sederhana.

Fokus sistem ini bukan kompetisi akurasi antar-algoritma, melainkan integrasi end-to-end antara sinyal linguistik dan bukti OSINT.

---

### Penetapan Ambang Klasifikasi

Ambang klasifikasi model dikalibrasi pada nilai **45** berdasarkan analisis kurva ROC pada dataset EMSCAD. Tujuan kalibrasi ini adalah memaksimalkan F1-score dengan prioritas pada recall tinggi.

Dalam domain deteksi penipuan:

- **false negative** atau penipuan yang lolos dianggap lebih berbahaya.  
- **false positive** atau lowongan sah yang ditandai masih dapat diverifikasi lebih lanjut oleh pengguna.  

Untuk verdict akhir:

- AMAN: skor < 40  
- WASPADA: skor 40–74  
- BAHAYA: skor ≥ 75  

Nilai ini ditetapkan secara heuristik berbasis expert judgement dengan orientasi konservatif untuk meminimalkan false negative.

---

### Layer 3: OSINT Engine

Modul OSINT dijalankan secara paralel menggunakan asyncio untuk mengurangi latensi.

Terdapat tiga sub-modul utama.

---

#### 1. Domain/URL Investigator

Fungsinya:

- Whois/RDAP lookup untuk mendapatkan tanggal registrasi, registrar, dan informasi pemilik.  
- Memberi penalti signifikan pada domain yang sangat baru.  
- Memvalidasi keaktifan website melalui HTTP.  
- Memeriksa kesesuaian nama domain dengan klaim perusahaan.  
- Menginspeksi shortlink atau Google Form untuk mendeteksi pola phishing.

---

#### 2. Phone Number Validator

Fungsinya:

- Memvalidasi format nomor telepon Indonesia seperti 08xx atau +62xx.  
- Mengidentifikasi operator berdasarkan prefix.  
- Mengecek laporan fraud pada halaman publik Kredibel.  
- Memberi flag khusus pada nomor dengan banyak laporan penipuan.

---

#### 3. Company Lookup

Fungsinya:

- Mencari jejak digital perusahaan melalui multi-engine web search.  
- Memverifikasi keberadaan website resmi dan akun media sosial.  
- Memvalidasi alamat pada peta menggunakan OpenStreetMap/Nominatim.  
- Mendeteksi inkonsistensi antara klaim jabatan/lokasi dengan temuan publik.

---

### Layer 4: LLM Narrative Synthesis

Sistem mengirim bundle hasil OSINT ke LLM melalui OpenAgentic dengan prompt terstruktur.

LLM diminta untuk:

1. Merangkum temuan OSINT dalam narasi berbahasa Indonesia.  
2. Menyebutkan fakta spesifik yang mendukung atau melemahkan kepercayaan.  
3. Memberikan rekomendasi tindak lanjut yang actionable.  
4. Tidak membuat klaim yang tidak didukung data OSINT.  

Penggunaan LLM dibatasi hanya untuk sintesis narasi. Keputusan Skor Risiko tidak bergantung pada output LLM agar halusinasi model tidak memengaruhi verdict.

---

### Layer 5: XAI Explainer

Verifin menggunakan pendekatan penjelasan hibrida yang menggabungkan:

1. **Model explainability** dari koefisien model klasifikasi.  
2. **Evidence explanation** dari pembobotan berbasis aturan untuk faktor OSINT.  

Pendekatan ini dipilih agar pengguna dapat mengaudit kontribusi setiap faktor secara transparan.

Prinsip utamanya:

> Bukti objektif eksternal seperti jejak digital dan laporan komunitas diberi bobot lebih tinggi daripada sinyal linguistik internal.

---

### Tabel Bobot Fitur XAI

| Fitur | Bobot Dasar | Deskripsi |
|---|---:|---|
| Klasifikasi Perilaku Teks | 25% | Skor pre-screening hybrid TF-IDF + Logistic Regression dan aturan perilaku, mencakup deteksi kata kunci penipuan umum. |
| Sinyal Red Flag Teks | bagian dari 25% | Deteksi frasa bermodus tinggi seperti permintaan KTP/foto di awal, janji langsung kerja tanpa seleksi, atau instruksi mendesak. |
| Domain Age | 15% | Usia domain. Semakin tua domain biasanya semakin dipercaya. Domain muda mendapat penalti. |
| Domain Reputation | 15% | Keaktifan website dan reputasi domain. Jika tidak ada domain, bobot gabungan Domain Age dan Domain Reputation didistribusikan sebagai penalti tetap 8 poin. |
| Phone Reported | 10% | Nomor pernah dilaporkan di Kredibel.id. Jika tidak dicantumkan, kontribusi 0. |
| Company Found | 15% | Perusahaan terverifikasi di sumber publik. Jika tidak ditemukan, mendapat penalti. |
| Fraud Network Match | 20% | Entitas seperti nomor HP, email, atau nama PT cocok dengan fingerprint penipuan yang tersimpan di graf. |
| Nilai Dasar / Sdasar | 12 poin | Nilai awal netral sebelum fitur dievaluasi, mencerminkan ketidakpastian minimal. |

---

### Formula Skor Risiko

Skor akhir dihitung dengan formula aditif:

\[
S_{risiko} = S_{dasar} + \sum_i \phi_i
\]

Keterangan:

- \(S_{dasar} = 12\)  
- \(\phi_i\) adalah kontribusi fitur ke-i  
- nilai positif menunjukkan sinyal risiko  
- nilai negatif menunjukkan sinyal aman  

Skor Risiko adalah **risk index**, bukan probabilitas. Skor 82 tidak berarti “82% kemungkinan penipuan”, melainkan menunjukkan tingkat risiko berdasarkan agregasi bukti.

Skala 0–100 dipilih agar:

- mudah membedakan tingkat risiko antar kasus,  
- mudah menyetel ambang,  
- kemudian disederhanakan menjadi verdict AMAN/WASPADA/BAHAYA agar mudah dipahami pengguna awam.  

Untuk menghindari double counting, setiap kontribusi dihitung sekali per faktor dan bukti dari sumber yang sama digabungkan dalam satu kategori kontribusi.

---

## F.2 Struktur Kode

Repositori Verifin disusun sebagai monorepo dengan struktur kurang lebih sebagai berikut:

```text
verifin/
|- backend/
|  |- app/
|  |  |- main.py                  # FastAPI entry point
|  |  |- routers/
|  |  |  |- analyze.py            # POST /analyze endpoint
|  |  |  |- community.py          # GET/POST /community endpoints
|  |  |  |- history.py            # GET /history endpoint
|  |  |- services/
|  |  |  |- ner.py                # Regex NER entitas struktural
|  |  |  |- llm/
|  |  |  |  |- entity_extraction.py  # LLM extraction entitas semantik
|  |  |  |- nlp/
|  |  |  |  |- classifier.py      # TF-IDF + LogReg hybrid
|  |  |  |- osint/
|  |  |  |  |- domain.py          # Domain/Whois investigator
|  |  |  |  |- phone.py           # Phone validator
|  |  |  |  |- company.py         # Company lookup
|  |  |  |- llm_service.py        # OpenAgentic LLM synthesis
|  |  |  |- xai_service.py        # SHAP-inspired explainer
|  |  |  |- trust_score.py        # Score aggregation engine
|  |  |  |- graph_service.py      # Fraud Network Graph queries
|  |  |- models/
|  |  |  |- job.py                # SQLAlchemy Job model
|  |  |  |- report.py             # Community report model
|  |  |  |- fingerprint.py        # Fraud fingerprint model
|  |  |  |- database.py           # Supabase/PostgreSQL connection
|  |  |- tests/                   # pytest unit & integration
|  |- requirements.txt
|- frontend/
|  |- src/
|  |  |- app/
|  |  |  |- page.tsx              # Halaman utama/landing
|  |  |  |- analyze/page.tsx      # Halaman analisis
|  |  |  |- result/[id]/page.tsx  # Halaman hasil analisis
|  |  |  |- community/page.tsx    # Halaman komunitas
|  |  |- components/
|  |  |  |- AnalysisForm.tsx      # Form input teks/URL
|  |  |  |- VerdictBadge.tsx      # Badge AMAN/WASPADA/BAHAYA
|  |  |  |- TrustScoreGauge.tsx   # Visualisasi skor 0-100
|  |  |  |- OsintBreakdown.tsx    # Detail hasil OSINT
|  |  |  |- XaiExplainer.tsx      # Breakdown kontribusi fitur
|  |  |  |- FraudNetworkGraph.tsx # Visualisasi graf interaktif
|  |  |  |- CommunityFeed.tsx     # Feed laporan komunitas
|  |  |- lib/
|  |  |  |- api.ts                # API client functions
|  |  |  |- types.ts              # TypeScript type definitions
|  |- package.json
|  |- tailwind.config.ts
|  |- README.md
```

---

## F.3 Skema Database PostgreSQL

### Tabel jobs

Tabel ini menyimpan data lowongan dan hasil analisis.

```sql
CREATE TABLE jobs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    input_text TEXT NOT NULL,
    input_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    status VARCHAR(20) DEFAULT 'pending',
    -- pending | processing | done | error
    trust_score INTEGER,
    -- 0-100
    verdict VARCHAR(10),
    -- AMAN | WASPADA | BAHAYA
    fingerprint VARCHAR(64),
    -- SHA-256 hash entitas kunci
    entities JSONB,
    -- Hasil ekstraksi NER
    nlp_score FLOAT,
    -- Skor klasifikasi NLP
    osint_bundle JSONB,
    -- Hasil seluruh modul OSINT
    llm_summary TEXT,
    -- Narasi LLM berbasis bukti
    xai_factors JSONB
    -- Kontribusi fitur XAI
);
```

---

### Tabel community_reports

Tabel ini menyimpan laporan pengguna.

```sql
CREATE TABLE community_reports (
    id SERIAL PRIMARY KEY,
    company_name VARCHAR,
    phone VARCHAR,
    email VARCHAR,
    url VARCHAR,
    report_type VARCHAR,
    description TEXT,
    reporter_contact VARCHAR,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Minimal satu entitas company/phone/email/url wajib diisi.
-- Indeks pada company_name, phone, email, url untuk pencocokan cepat.
```

---

### Tabel fraud_fingerprints

Tabel ini berfungsi sebagai indeks deduplikasi.

```sql
CREATE TABLE fraud_fingerprints (
    fingerprint VARCHAR(64) PRIMARY KEY,
    first_seen TIMESTAMPTZ DEFAULT NOW(),
    last_seen TIMESTAMPTZ DEFAULT NOW(),
    occurrence INTEGER DEFAULT 1,
    avg_score FLOAT,
    entity_hash JSONB
);
```

---

## F.4 Contoh Alur Analisis End-to-End

Berikut contoh alur sistem ketika pengguna mengirim teks lowongan.

### Input dari Pengguna

```text
Dibutuhkan Admin Online WFH
Gaji 8-15 juta/bulan
Syarat: min SMA, punya HP Android
Hubungi: 0812-XXXX-XXXX (Budi - HRD PT Sukses Mandiri)
Langsung kerja, tidak perlu pengalaman
Kirim foto dan KTP sekarang
```

---

### Layer 1: Output NER Hibrida

```json
{
  "companies": ["PT Sukses Mandiri"],
  "phones": ["0812 XXXXXXXX"],
  "emails": [],
  "urls": [],
  "addresses": [],
  "salaries": ["8-15 juta/bulan"],
  "_ner_meta": {
    "used": true,
    "source": "hybrid (regex structural + LLM semantic)"
  }
}
```

---

### Layer 2: Output Klasifikasi Perilaku Teks

```json
{
  "label": "BAHAYA",
  "confidence": 0.87,
  "nlp_score": 93.0,
  "top_features": [
    {
      "feature": "Permintaan Biaya/Transfer",
      "contribution": 40.0,
      "impact": "risk"
    },
    {
      "feature": "Gaji Fantastis Tidak Realistis",
      "contribution": 20.0,
      "impact": "risk"
    }
  ],
  "model_type": "TF-IDF + Logistic Regression (hybrid ML + aturan)"
}
```

---

### Layer 3: Output OSINT

```json
{
  "domain": null,
  "phone": {
    "number": "0812 XXXXXXXX",
    "operator": "Telkomsel",
    "format_valid": true,
    "community_reports": 3,
    "last_report": "2026-06-15"
  },
  "company": {
    "name": "PT Sukses Mandiri",
    "found_public": false,
    "website_found": false,
    "inconsistencies": [
      "Nama terlalu generik, tidak ditemukan di sumber publik"
    ]
  }
}
```

---

### Layer 4: Narasi LLM

> Lowongan ini menunjukkan beberapa pola yang sangat umum pada penipuan rekrutmen. Nomor kontak yang diberikan telah dilaporkan 3 kali oleh komunitas Verifin sebagai nomor penipuan. Nama perusahaan PT Sukses Mandiri tidak ditemukan dalam sumber publik manapun. Permintaan KTP dan foto di awal proses tanpa verifikasi identitas rekruter adalah tanda bahaya besar. Gaji 8–15 juta untuk posisi Admin Online WFH tanpa pengalaman tidak realistis untuk pasar kerja Indonesia saat ini. Sangat disarankan untuk tidak merespons iklan ini.

---

### Layer 5: Output XAI dan Skor Risiko Final

| Fitur | Kontribusi | Penjelasan |
|---|---:|---|
| Nilai Dasar / Sdasar | +12 poin | Nilai awal netral sebelum fitur dievaluasi |
| Klasifikasi Perilaku Teks | +24 poin | Model hybrid mendeteksi pola penipuan dengan skor 93 |
| Phone Reports | +19 poin | Nomor dilaporkan 3 kali sebagai penipuan |
| Company Not Found | +16 poin | Perusahaan tidak ditemukan di sumber publik |
| Sinyal Red Flag Teks | +13 poin | Permintaan KTP/foto di awal dan janji langsung kerja |
| No Domain | +9 poin | Tidak ada domain/website yang bisa diverifikasi |
| Total | 12 + 81 | 12 + 24 + 19 + 16 + 13 + 9 = 93 |
| Skor Risiko Final | 93 | BAHAYA |

Kesimpulan contoh ini: lowongan tersebut mendapatkan verdict **BAHAYA** dengan skor risiko **93/100**.

---

## F.5 Evaluasi Model pada Dataset EMSCAD

Kinerja model klasifikasi teks diukur menggunakan dataset publik **EMSCAD** atau **Employment Scam Aegean Dataset**.

Dataset ini berisi:

- total 17.880 lowongan  
- 866 di antaranya adalah penipuan  

Ambang klasifikasi dikalibrasi pada nilai 45 untuk memaksimalkan F1.

### Hasil Evaluasi

| Metrik | Nilai |
|---|---:|
| ROC-AUC | 0,996 |
| Recall / deteksi penipuan | 98,4% |
| Precision | 56,6% |
| F1-score | 0,718 |

Recall tinggi menjadi prioritas karena false negative sangat berbahaya. Penipuan yang lolos dapat menyebabkan kerugian finansial dan bahkan menjadi pintu masuk tindak pidana perdagangan orang.

Precision yang lebih rendah diterima sebagai trade-off sadar. Sistem lebih memilih menandai lowongan mencurigakan agar pengguna dapat mengecek lebih lanjut, daripada melewatkan penipuan nyata.

Catatan penting: evaluasi ini adalah evaluasi Layer 2 secara terpisah pada dataset EMSCAD, bukan evaluasi end-to-end seluruh pipeline. Evaluasi end-to-end pada dataset berlabel Indonesia dan studi pengguna masuk dalam agenda pengembangan lanjutan.

Selain evaluasi offline, sistem juga diuji secara end-to-end pada tiga kanal input nyata:

- teks  
- gambar poster via OCR  
- tautan/URL  

Ketiganya menghasilkan verdict yang konsisten dan deterministik.

---

# G. Screenshot Mockup Antarmuka dan Hasil Uji End-to-End

Bagian ini mendokumentasikan antarmuka Verifin sesuai alur pengalaman pengguna, mulai dari input data, proses analisis real-time, sampai hasil akhir dan pengujian kasus penipuan.

---

## G.1 Antarmuka Form Input Multi-Kanal

### Figure 6: Antarmuka Input Teks Lowongan Kerja

Gambar ini menampilkan halaman input teks. Pengguna dapat menyalin dan menempelkan teks lowongan dari WhatsApp, Telegram, media sosial, atau platform lain ke dalam kotak teks.

Maknanya: Verifin dirancang untuk menangani bentuk lowongan paling umum di Indonesia, yaitu teks pesan berantai.

---

### Figure 7: Antarmuka Unggah Gambar Poster Lowongan

Gambar ini menampilkan fitur unggah gambar dengan dukungan format JPG, PNG, dan WebP. Terdapat pratinjau gambar sebelum analisis.

Maknanya: Verifin juga mendukung lowongan berbentuk pamflet, poster, atau screenshot. Gambar akan diproses dengan OCR sebelum dianalisis.

---

### Figure 8: Antarmuka Verifikasi Tautan/URL

Gambar ini menampilkan input URL. Sistem mendukung pemeriksaan tautan dari Instagram, portal lowongan kerja, atau website perusahaan.

Maknanya: Verifin tidak hanya memeriksa teks, tetapi juga bisa menganalisis halaman web yang dicurigai sebagai lowongan.

---

## G.2 Modal Progres Pemrosesan Pipeline Real-Time

### Figure 9: Modal Progres Analisis Real-Time

Gambar ini menampilkan modal loading yang menunjukkan tahapan pipeline secara bertahap, misalnya:

- OCR/Ekstraksi Entitas  
- Investigasi OSINT  
- Analisis Graph DB  
- Sintesis LLM + XAI  

Maknanya: pengguna tidak hanya menunggu tanpa informasi, tetapi dapat melihat proses apa yang sedang berjalan. Ini meningkatkan transparansi dan kepercayaan terhadap sistem.

---

## G.3 Hasil Verifikasi & Dashboard Analisis Per-Kanal

### G.3.1 Skenario Input Teks — Studi Kasus PT. VIS

#### Figure 10: Hasil Verifikasi Input Teks Bagian Atas

Gambar ini menampilkan hasil verifikasi untuk input teks studi kasus PT. VIS. Bagian atas menunjukkan:

- badge verdict **AMAN**  
- Skor Risiko **30/100**  
- ringkasan naratif LLM  
- panduan tindak lanjut  

Maknanya: sistem menilai lowongan ini relatif aman karena indikator kepercayaan cukup kuat, meskipun skor tidak nol karena tetap ada ketidakpastian minimal.

---

#### Figure 11: Hasil Verifikasi Input Teks Bagian Detail

Gambar ini menampilkan detail hasil analisis, meliputi:

- kontribusi fitur XAI  
- validasi reputasi nomor kontak  
- legalitas badan usaha  
- mitigasi risiko  

Maknanya: pengguna tidak hanya menerima verdict, tetapi juga bisa melihat alasan di balik verdict tersebut.

---

#### Figure 12: Dashboard Analisis Teks PT. VIS Secara Menyeluruh

Gambar ini menampilkan dashboard penuh untuk studi kasus PT. VIS. Penelusuran web evidence menemukan jejak digital yang relevan pada direktori legalitas dan portal resmi.

Maknanya: hasil OSINT memperkuat penilaian bahwa entitas perusahaan memiliki keberadaan digital yang dapat diverifikasi.

---

### G.3.2 Skenario Input Gambar Poster/OCR — Studi Kasus Outlet Sushi Yay

#### Figure 13: Hasil Verifikasi Gambar Poster Bagian Atas

Gambar ini menampilkan hasil verifikasi gambar poster lowongan untuk Outlet Sushi Yay. Bagian atas menunjukkan:

- verdict **AMAN**  
- indeks risiko **12/100**  
- penjelasan berbasis ekstraksi entitas otomatis  

Maknanya: meskipun input berupa gambar, sistem tetap dapat mengekstrak teks dan melakukan verifikasi.

---

#### Figure 14: Hasil Verifikasi Gambar Poster Bagian Detail

Gambar ini menampilkan:

- teks hasil ekstraksi PaddleOCR 2.8  
- pembuktian OSINT terhadap entitas yang berhasil diekstrak  

Maknanya: OCR tidak hanya mengubah gambar menjadi teks, tetapi hasilnya langsung digunakan untuk investigasi lebih lanjut.

---

#### Figure 15: Dashboard Verifikasi Gambar Poster Outlet Sushi Yay

Gambar ini menampilkan dashboard menyeluruh untuk input poster. Validasi lokasi fisik outlet berhasil diverifikasi melalui geocoding OpenStreetMap.

Maknanya: keberadaan lokasi fisik yang cocok dengan klaim lowongan menjadi sinyal positif dalam penilaian.

---

### G.3.3 Skenario Input Tautan/URL Web — Studi Kasus Indonesia College

#### Figure 16: Hasil Verifikasi Tautan URL Bagian Atas

Gambar ini menampilkan hasil verifikasi tautan untuk Indonesia College. Bagian atas menunjukkan:

- verdict **AMAN**  
- Skor Risiko **15/100**  
- penjelasan faktor mitigasi  

Maknanya: URL yang diperiksa memiliki indikator keamanan dan kredibilitas yang baik.

---

#### Figure 17: Hasil Verifikasi Tautan URL Bagian Detail

Gambar ini menampilkan detail inspeksi keamanan domain, meliputi:

- Whois  
- sertifikasi SSL/TLS  
- penyaringan brand URL noise  

Maknanya: sistem tidak hanya membaca isi halaman, tetapi juga memeriksa aspek teknis domain dan keamanannya.

---

#### Figure 18: Dashboard Verifikasi Tautan Indonesia College

Gambar ini menampilkan dashboard verifikasi tautan secara penuh. Sistem menemukan:

- domain aktif berdasarkan Whois  
- 7 jejak digital relevan  

Maknanya: banyaknya jejak digital yang relevan memperkuat kepercayaan terhadap entitas yang diperiksa.

---

## G.4 Pengujian Kasus Negatif — Deteksi Lowongan Penipuan / Verdict BAHAYA

### Figure 19: Hasil Pengujian Kasus Negatif Penipuan Nyata

Gambar ini menampilkan hasil pengujian terhadap lowongan yang benar-benar mengandung pola penipuan. Sistem menunjukkan:

- verdict **BAHAYA**  
- Skor Risiko **95/100**  
- alert merah  
- rekomendasi untuk tidak merespons  
- saran melaporkan ke komunitas  

Maknanya: Verifin mampu mendeteksi sinyal bahaya kuat dan memberikan peringatan tegas kepada pengguna.

---

# H. Dokumentasi Cara Penggunaan Perangkat Lunak

Verifin dapat diakses melalui web tanpa instalasi tambahan. Berikut dokumentasi cara penggunaannya.

---

## H.1 Persyaratan Akses

Untuk menggunakan Verifin, pengguna membutuhkan:

- perangkat dengan browser modern seperti Chrome, Firefox, Edge, atau Safari versi terbaru  
- koneksi internet, karena pipeline OSINT dan LLM membutuhkan akses daring  
- tidak perlu akun atau registrasi untuk verifikasi dasar  

---

## H.2 Langkah Penggunaan

### Langkah 1 — Akses Aplikasi

Pengguna membuka browser dan masuk ke URL aplikasi Verifin. Halaman utama menampilkan kolom input analisis serta navigasi ke riwayat verifikasi dan halaman komunitas.

---

### Langkah 2 — Masukkan Data Lowongan

Verifin mendukung tiga kanal input.

#### 1. Input Teks

Pengguna menyalin dan menempelkan seluruh teks iklan lowongan kerja ke kotak teks.

Semakin lengkap teks yang dimasukkan, semakin baik hasil verifikasinya. Informasi yang membantu antara lain:

- nama perusahaan  
- nomor kontak  
- alamat  
- deskripsi pekerjaan  
- gaji  
- tautan  

#### 2. Input Gambar/Foto

Pengguna dapat mengunggah gambar poster lowongan dalam format JPG, PNG, atau WebP. Sistem otomatis menjalankan OCR menggunakan PaddleOCR untuk mengekstrak teks dari gambar.

Fitur ini cocok untuk:

- pamflet  
- poster  
- screenshot  
- gambar kiriman media sosial  

#### 3. Input Tautan/URL

Pengguna dapat memasukkan URL halaman lowongan. Sistem akan mengambil dan menganalisis konten halaman tersebut, termasuk memeriksa:

- domain  
- keamanan infrastruktur web  
- kesesuaian konten dengan klaim lowongan  

---

### Langkah 3 — Mulai Analisis

Pengguna menekan tombol seperti **“Verifikasi Sekarang”**.

Setelah itu, muncul modal progres yang menampilkan tahapan pipeline secara real-time:

1. OCR/Ekstraksi Entitas  
2. Investigasi OSINT  
3. Analisis Graf Jaringan  
4. Sintesis LLM & XAI  

Proses biasanya berlangsung sekitar **15–45 detik**, tergantung jumlah entitas yang perlu diinvestigasi.

---

### Langkah 4 — Baca Hasil Verifikasi

Halaman hasil menampilkan beberapa komponen berikut:

#### 1. Verdict dan Skor Risiko

Badge berwarna menunjukkan putusan final:

- AMAN  
- WASPADA  
- BAHAYA  

Disertai Skor Risiko 0–100. Skor ini bukan probabilitas, melainkan indeks risiko berbasis agregasi bukti.

#### 2. Ringkasan Naratif LLM

Penjelasan singkat berbahasa Indonesia yang merangkum temuan utama OSINT dan alasan verdict.

#### 3. Breakdown XAI

Daftar faktor yang memengaruhi skor risiko. Nilai positif meningkatkan risiko, nilai negatif menurunkan risiko.

#### 4. Detail OSINT

Ringkasan temuan dari setiap modul investigasi, seperti:

- status domain/website  
- reputasi nomor telepon  
- jejak digital perusahaan  
- validasi alamat fisik  

#### 5. Graf Jaringan Penipuan

Visualisasi interaktif yang menunjukkan apakah entitas dalam lowongan pernah muncul di kasus penipuan lain dalam database.

---

### Langkah 5 — Tindak Lanjut

#### Jika verdict AMAN

Lowongan memiliki indikator kepercayaan yang relatif baik. Namun pengguna tetap disarankan melakukan verifikasi mandiri sebelum mengirim data pribadi.

#### Jika verdict WASPADA

Terdapat sinyal yang belum dapat dikonfirmasi. Pengguna disarankan melakukan verifikasi lanjutan sebelum merespons.

#### Jika verdict BAHAYA

Sistem mendeteksi pola penipuan yang kuat. Pengguna disarankan:

- tidak merespons lowongan  
- tidak mengirim data pribadi  
- tidak mentransfer uang  
- melaporkan ke fitur komunitas Verifin atau pihak berwenang jika diperlukan  

---

## H.3 Fitur Pelaporan Komunitas

Pengguna yang menemukan atau menjadi korban lowongan penipuan dapat melaporkan entitas mencurigakan melalui halaman Komunitas.

Entitas yang dapat dilaporkan meliputi:

- nomor HP  
- email  
- URL/domain  
- nama perusahaan  

Laporan akan diverifikasi dan diintegrasikan ke dalam graf jaringan penipuan untuk memperkuat deteksi bagi pengguna lain.

Formulir pelaporan umumnya meminta:

1. nama/identitas entitas terlapor  
2. jenis penipuan  
3. deskripsi singkat kronologi  

---

## H.4 Riwayat Verifikasi

Seluruh verifikasi yang pernah dilakukan dapat diakses kembali melalui halaman Riwayat.

Halaman ini menampilkan:

- daftar verifikasi sebelumnya  
- verdict  
- skor risiko  
- waktu pemeriksaan  

Fitur ini memungkinkan pengguna untuk:

- membandingkan lowongan berbeda  
- merujuk kembali hasil analisis lama  
- melaporan pola berulang  

---

# Daftar Pustaka

Dokumen ini merujuk pada beberapa sumber berikut:

1. Badan Pusat Statistik (BPS), “Keadaan Ketenagakerjaan Indonesia Februari 2025,” Berita Resmi Statistik No. 39/05/Th. XXVIII, Mei 2025.  
2. Global Anti-Scam Alliance (GASA) & Mastercard, “State of Scams in Indonesia 2024,” GASA Annual Report, 2024.  
3. Kementerian Luar Negeri Republik Indonesia (Kemenlu RI), “Penanganan WNI Korban Online Scamming dan TPPO di Asia Tenggara,” Direktorat Perlindungan WNI dan BHI, 2024.  
4. United Nations Office on Drugs and Crime (UNODC), “Casinos, Cyber Fraud, and Trafficking in Persons for Forced Criminality in Southeast Asia,” UNODC Regional Report, 2023.  
5. S. Shalini, R. Lokesh, and S. Priya, “Fake Job Posting Detection Using Machine Learning,” International Journal of Computer Applications, vol. 183, no. 52, pp. 1–6, 2022.  
6. T. Alwafi and R. Abdulrahman, “Detection of Recruitment Fraud Using Semantic Approaches,” Security and Communication Networks, 2019.  
7. V. G. Varsha and P. A. Thomas, “Explainable AI For Phishing Detection: Techniques, Challenges, and Experimental Validation,” in Proc. IEEE Recent Advances in Intelligent Computational Systems (RAICS), Nov. 2025.  
8. J. Pastor-Galindo, P. Nespoli, F. G. Marmol, and G. M. Perez, “The Not Yet Exploited Goldmine of OSINT: Opportunities, Open Challenges and Future Trends,” IEEE Access, vol. 8, pp. 10282–10304, 2020.  
9. B. Wilie et al., “IndoNLU: Benchmark and Resources for Evaluating Indonesian Natural Language Understanding,” in Proc. 1st Conf. of the Asia-Pacific Chapter of the ACL (AACL), Dec. 2020, pp. 843–857.  

---