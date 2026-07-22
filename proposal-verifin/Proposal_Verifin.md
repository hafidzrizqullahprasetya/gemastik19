# PROPOSAL PAGELARAN MAHASISWA NASIONAL BIDANG TEKNOLOGI INFORMASI DAN KOMUNIKASI (GEMASTIK) XIX
## DIVISI PENGEMBANGAN PERANGKAT LUNAK

**Nama Tim:** Saran nama tim hoki 
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

Tingkat pengangguran terbuka di Indonesia masih menjadi salah satu tantangan ekonomi nasional yang signifikan. Berdasarkan data Badan Pusat Statistik (BPS), per Februari 2025 jumlah pengangguran terbuka tercatat mencapai 7,28 juta orang, meningkat dibandingkan periode sebelumnya [1]. Di tengah tekanan tersebut, jutaan pencari kerja Indonesia setiap harinya menerima tawaran lowongan dari berbagai kanal yang tidak terverifikasi: Instagram, WhatsApp, Telegram, grup Facebook, hingga papan pengumuman fisik. Platform-platform ini menyebarkan lowongan secara masif, namun **tidak ada satu pun mekanisme yang menjawab pertanyaan mendasar: "Apakah lowongan ini layak dipercaya?"**

Akibatnya, pencari kerja harus melakukan investigasi manual secara mandiri: mencari nama perusahaan di Google, mengecek nomor HP di direktori, melihat lokasi di Maps, menelusuri ulasan di media sosial. Proses ini melelahkan, tidak sistematis, dan sering kali terlambat karena korban baru menyadari penipuan setelah menyerahkan data pribadi atau uang. Menurut laporan *Global State of Scams* oleh Global Anti-Scam Alliance (GASA), Indonesia menempati salah satu peringkat kerentanan tertinggi di Asia Tenggara dengan 49% penduduk mengalami kerugian akibat penipuan [2]. Lebih jauh, krisis ini tidak hanya berujung pada kerugian finansial, melainkan telah bergeser menjadi pintu masuk Tindak Pidana Perdagangan Orang (TPPO): ribuan pencari kerja terjebak iklan pekerjaan palsu di luar negeri dan dipaksa bekerja sebagai operator penipuan siber (*scam center*) di Kamboja, Myanmar, dan Laos [1], [3], [6].

Akar masalahnya bukan sekadar "ada penipuan lowongan." Masalah sebenarnya adalah **Indonesia belum memiliki lapisan kepercayaan (*trust layer*) yang membantu masyarakat menilai kredibilitas suatu lowongan sebelum mengirimkan data pribadi.** Platform rekrutmen besar seperti LinkedIn, Glints, dan JobStreet hanya melindungi ekosistem internal mereka sendiri. Sementara mayoritas modus penipuan modern justru beroperasi di luar ekosistem tersebut, melalui aplikasi perpesanan privat yang tidak terindeks [1].

Penelitian terdahulu yang menggunakan algoritma machine learning seperti KNN [5], Decision Tree [5], maupun LSTM [4] hanya menganalisis teks lowongan secara terisolasi, tanpa mempertimbangkan relasi jaringan pelaku penipuan yang kerap menggunakan entitas berulang di berbagai platform. Menyadari gap tersebut, tim pengembang mengajukan **Verifin—sebuah Job Trust Platform yang dibangun di atas Job Trust Infrastructure.** Verifin adalah platform pendamping pencari kerja yang mengotomatisasi seluruh proses investigasi manual tersebut: OCR mengekstrak entitas dari poster lowongan, enam sumber OSINT dijalankan secara paralel untuk memvalidasi setiap entitas, graf jaringan mendeteksi koneksi ke kasus penipuan sebelumnya, dan LLM menghasilkan penilaian kepercayaan yang dapat dijelaskan secara transparan melalui SHAP XAI [7], [8]. Output akhirnya bukan sekadar label "scam atau bukan"—melainkan sebuah *trust assessment* lengkap yang membantu pencari kerja mengambil keputusan yang lebih aman dan terinformasi sebelum melamar.

---

## B. Tujuan dan Manfaat Dikembangkannya Perangkat Lunak

### 1. Tujuan
*   **Membangun Job Trust Platform** yang membantu pencari kerja Indonesia menilai tingkat kepercayaan (*trustworthiness*) suatu lowongan kerja secara real-time sebelum menyerahkan data pribadi atau melamar.
*   **Mengimplementasikan Job Trust Infrastructure** — arsitektur berlapis yang menggabungkan OCR, Hybrid NLP (TF-IDF behavioral classifier + LLM API), enam sumber OSINT paralel, fraud network graph berbasis NetworkX, dan SHAP Explainable AI — sebagai fondasi teknis yang dapat diaudit dan diperluas.
*   **Menghasilkan *trust assessment* yang transparan dan dapat dijelaskan**, bukan sekadar label biner "scam/tidak scam", sehingga pengguna memahami *mengapa* suatu lowongan dinilai berisiko dan dapat mengambil keputusan yang terinformasi.
*   **Membangun case memory berbasis graf relasi entitas** untuk mendeteksi pola sindikat penipuan yang menggunakan identitas berulang (nomor HP, alamat, nama perusahaan fiktif) lintas kasus dan platform.

### 2. Manfaat
*   **Bagi Pencari Kerja:** Memberikan perlindungan proaktif bagi jutaan pencari kerja Indonesia — terutama fresh graduates dan pekerja migran — dari risiko kerugian finansial, penyalahgunaan identitas, dan bahaya fisik TPPO, tanpa biaya dan tanpa memerlukan keahlian teknis.
*   **Bagi Perusahaan Resmi:** Melindungi reputasi korporasi dari pencatutan identitas dan impersonasi oleh oknum penipu, serta menyediakan sinyal kepercayaan yang membantu perusahaan jujur dikenali lebih mudah oleh kandidat [1].
*   **Bagi Pemerintah dan Aparat Penegak Hukum:** Menyediakan basis data teraudit jaringan penipuan kerja — lengkap dengan *decision trail* yang dapat dipertanggungjawabkan — sebagai instrumen pendukung perumusan kebijakan dan penindakan sindikat kejahatan siber transnasional.

---

## C. Batasan Perangkat Lunak yang Dikembangkan

Batasan pengembangan Verifin diatur sebagai berikut untuk memastikan fokus dan ketercapaian target:

1.  **Platform Teknologi:** Dikembangkan sebagai aplikasi web responsif menggunakan Next.js (frontend) dan FastAPI/Python (backend). Seluruh pipeline berjalan sebagai *pure software* tanpa perangkat keras tambahan, sesuai ketentuan Divisi PPL Gemastik XIX.
2.  **Cakupan Bahasa:** Pemrosesan NLP difokuskan pada teks berbahasa Indonesia, termasuk bahasa tidak resmi (*slang*) dan campuran yang umum digunakan dalam lowongan tidak resmi via WhatsApp/Telegram/Instagram.
3.  **Cakupan Trust Assessment:** Penilaian kepercayaan didasarkan pada enam sinyal OSINT terverifikasi secara publik (WHOIS, Nominatim/OSM, Kredibel.id, DuckDuckGo SERP, Google Form Inspector, AHU Whitelist) yang di-fetch secara real-time. Sistem tidak mengakses data privat pengguna dan tidak memblokir nomor telepon secara sepihak.
4.  **Scope Deteksi:** Difokuskan pada lowongan kerja berbahasa Indonesia yang beredar di media sosial, aplikasi pesan, dan screenshot poster digital. Cakupan TPPO dibatasi pada modus rekrutmen siber yang dapat dideteksi dari teks dan metadata publik.
5.  **Eksplanasi AI:** SHAP Explainer yang diimplementasikan adalah *additive feature explainer* berbasis Shapley values (Lundberg & Lee, 2017 [7]) yang diadaptasi untuk sinyal OSINT multi-sumber, bukan SHAP library standar yang memerlukan dependensi LLVM berat.

---

## D. Metodologi Pengembangan Perangkat Lunak

Pengembangan Verifin menggunakan metodologi **Agile Scrum** dengan siklus harian (*Daily Standup*) dan sprint mingguan yang disesuaikan untuk target waktu pengerjaan **2 minggu** (*Rapid Prototyping*). Pembagian fase kerja harian dan *sprint milestone* dirancang sebagai berikut:

**Milestone Pengembangan (2 Minggu)**

| Siklus               | Fase                                                     | Output                                                                                |
| -------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Sprint 1 (Hari 1-7)  | Core Backend, AI MVP, & Graph Database                   | API OCR, parser NLP, database Neo4j, & 5 Autonomous Agent berjalan secara fungsional. |
| Sprint 2 (Hari 8-14) | Frontend Integration & Testing Lapangan                  | Web App terintegrasi visual, Uji SUS, & final deployment.                              |

Rincian aktivitas harian selama siklus 2 minggu pengerjaan:

1.  **Sprint 1: Core Engine & Data Pipeline (Hari 1–7)**
    *   *Hari 1–2:* Setup project environment. Inisialisasi API backend (FastAPI) dan integrasi PaddleOCR untuk mengekstrak teks dari tangkapan layar. Konfigurasi awal database graf Neo4j.
    *   *Hari 3–4:* Integrasi model klasifikasi semantik. Pengaktifan Layer 1 (IndoBERT lokal) dan Layer 2 (LLM API) untuk evaluasi tingkat risiko, serta impor data salinan legalitas (AHU, OSS, BP2MI).
    *   *Hari 5–7:* Implementasi 5 Autonomous Agents menggunakan Playwright untuk auto-scraping loker baru, memonitor grup WhatsApp/Telegram secara pasif, dan sinkronisasi data relasional graf.
2.  **Sprint 2: Interface, Testing, & Deployment (Hari 8–14)**
    *   *Hari 8–10:* Pembangunan antarmuka pengguna Web App (Next.js) terintegrasi visualisasi graf interaktif Neo4j 2D dan bagan penjelasan kontribusi fitur XAI (SHAP).
    *   *Hari 11–12:* Uji coba lapangan (*User Acceptance Testing* & *System Usability Scale*) kepada 20 pencari kerja fresh graduates untuk mengukur efektivitas dan kemudahan penggunaan aplikasi.
    *   *Hari 13–14:* Deployment akhir sistem menggunakan Docker di server cloud, penyelesaian *fine-tuning* model NLP lokal berbasis dataset yang telah dipanen agen di minggu pertama, serta finalisasi dokumentasi.

Metode implementasi model AI menggunakan pendekatan **Hybrid-Incremental Cepat**:
*   *Minggu 1 (Hari 1-4):* Sistem mengandalkan model LLM API secara penuh untuk memastikan fungsionalitas deteksi semantik berjalan, seraya meluncurkan *Job Portal Scraper Agent* untuk memanen data penipuan loker lokal secara otonom.
*   *Minggu 2 (Hari 8-10):* Dataset lokal hasil panen minggu pertama digunakan untuk melakukan *fine-tuning* cepat model *IndoBERT* secara lokal. Sistem kemudian mengalihkan query ke model lokal (<100ms) dan hanya memicu LLM API jika tingkat keyakinan model lokal berada di wilayah abu-abu (40-70%).

#### Tahapan Pengujian Perangkat Lunak
Untuk menjamin keandalan sistem, pengujian dilakukan secara bertahap dan terstruktur:
1.  **Pengujian Unit & Komponen (Tiap Bagian Sistem):**
    *   *Uji OCR:* Memastikan akurasi ekstraksi teks dari gambar screenshot di atas 90% menggunakan *character error rate* (CER) minimal.
    *   *Uji NER:* Mengukur F1-score model IndoBERT dalam mendeteksi entitas (nominal gaji, kontak, nama perusahaan, dll) pada teks lokal.
    *   *Uji Database Graf:* Memverifikasi kecepatan query pencocokan entitas (Cypher query) pada Neo4j di bawah 50ms.
2.  **Pengujian Integrasi & Sistem Keseluruhan:**
    *   *Uji End-to-End:* Melakukan pengujian alur data dari pengunggahan gambar oleh pengguna hingga keluarnya visualisasi graf Neo4j dan penjelasan SHAP di dashboard web.
    *   *Uji Usabilitas & Lapangan:* Melakukan evaluasi SUS (*System Usability Scale*) kepada target pengguna untuk menilai kepuasan antarmuka (target skor >80) dan mengukur performa latensi total sistem di bawah 3 detik.

---

## E. Analisis Kebutuhan dan Desain Solusi Perangkat Lunak

### 1. Analisis Kebutuhan

#### Kebutuhan Fungsional (Functional Requirements)
*   **FR-1 (OCR Parser):** Sistem harus dapat mengekstrak teks dari gambar tangkapan layar lowongan kerja yang diunggah pengguna.
*   **FR-2 (NER Extractor):** Sistem harus dapat mendeteksi entitas kunci (Nama Perusahaan, Nomor Kontak, Nominal Gaji, Alamat, Link) dari teks masukan.
*   **FR-3 (Hybrid Classification):** Sistem harus mengklasifikasikan lowongan kerja ke dalam tingkat risiko (Aman, Waspada, Bahaya) berdasarkan analisis semantik teks.
*   **FR-4 (Network Risk Propagator):** Sistem harus menghubungkan entitas lowongan baru ke dalam database graf Neo4j untuk melihat apakah entitas tersebut memiliki relasi dengan kluster penipuan yang sudah dilaporkan sebelumnya.
*   **FR-5 (Explainable AI Reader):** Sistem harus menyajikan bagan penjelasan kontribusi fitur (SHAP value) dalam bahasa manusia yang mudah dipahami.
*   **FR-6 (Autonomous Data Agents):** Sistem harus menjalankan agen otomatis untuk melakukan pembaruan berkala pada database legalitas perusahaan dan tren penipuan di media sosial.

#### Kebutuhan Non-Fungsional (Non-Functional Requirements)
*   **NFR-1 (Performance):** Latensi inferensi untuk klasifikasi tingkat pertama harus berada di bawah 100ms.
*   **NFR-2 (Privacy):** Data sensitif pengguna (seperti KTP atau nomor telepon) yang diunggah harus disamarkan secara lokal menggunakan algoritma enkripsi satu arah (SHA-256) sebelum diproses di database graf.
*   **NFR-3 (Scalability):** Arsitektur sistem harus berbasis microservices kontainer (Docker) agar dapat diskalakan secara independen saat terjadi lonjakan beban trafik verifikasi.
*   **NFR-4 (Usability):** Antarmuka web harus memenuhi standar aksesibilitas WCAG 2.1 dengan target nilai System Usability Scale (SUS) minimal 80.

### 2. Desain Solusi

#### Arsitektur Sistem (System Architecture)
Alur data Verifin dirancang dengan arsitektur modular yang membagi tugas pemrosesan teks, graf, dan integrasi agen eksternal secara asinkron:

```
                          ┌──────────────────────────┐
                          │      Pengguna (Web)      │
                          └────────────┬─────────────┘
                                       │ (Upload Gambar/Teks)
                                       ▼
                          ┌──────────────────────────┐
                          │    PaddleOCR Engine      │
                          └────────────┬─────────────┘
                                       │ (Raw Text)
                                       ▼
                          ┌──────────────────────────┐
                          │     IndoBERT NER         │
                          └────────────┬─────────────┘
                                       │ (Entities: PT, Phone, Salary, Link)
                                       ▼
                      ┌─────────────────┴─────────────────┐
                      ▼                                   ▼
         ┌─────────────────────────┐         ┌─────────────────────────┐
         │  Jalur A: Analisis Teks │         │ Jalur B: Analisis Graf  │
         │  (IndoBERT / LLM API)   │         │ (Neo4j + PyG GNN)       │
         └────────────┬────────────┘         └────────────┬────────────┘
                      │ (Semantic Score)                  │ (Graph Network Score)
                      └─────────────────┬─────────────────┘
                                       ▼
                          ┌──────────────────────────┐
                          │   SHAP Explainer + XAI   │
                          └────────────┬─────────────┘
                                       │ (Risk Report & Graph View)
                                       ▼
                          ┌──────────────────────────┐
                          │    Dashboard Pengguna    │
                          └──────────────────────────┘
```

#### Skema Model Graf Heterogen (Neo4j Graph Schema)
Database graf heterogen menghubungkan berbagai entitas loker palsu untuk mendeteksi *pattern* jaringan sindikat penipuan kerja:

```
   (User:Node) ────[:MELAPORKAN]────► (Lowongan:Node) ────[:TERKAIT_PERUSAHAAN]──► (Perusahaan:Node)
                                           │
                                           ├──────[:MENGGUNAKAN_KONTAK]─────────► (Telepon:Node)
                                           │
                                           ├──────[:BERALAMAT_DI]───────────────► (Alamat:Node)
                                           │
                                           └──────[:MENYEBARKAN_LINK]───────────► (Tautan:Node)
```
*   *Atribut Node Perusahaan:* Memuat bendera status dari database Kemenkumham (Terdaftar/Fiktif) dan NIB OSS.
*   *Atribut Node Lowongan:* Memuat skor **Industry-Salary Anomaly Index** untuk mengukur ketidakwajaran penawaran gaji.
*   *Atribut Sisi (Edge):* Memuat bobot risiko berdasarkan **Geography-Industry Risk Density** (tingkat kerawanan penipuan per sektor di lokasi tersebut).

---

## F. Implementasi Perangkat Lunak

Tumpukan teknologi (*tech stack*) yang diimplementasikan pada proyek Verifin dirancang dengan memprioritaskan performa tinggi, kemudahan integrasi machine learning, dan skalabilitas:

*   **Frontend Web Application:** Next.js 16 (App Router) terintegrasi dengan TypeScript, Tailwind CSS untuk antarmuka responsif, dan Shadcn/ui untuk komponen UI modern. Visualisasi jaringan graf interaktif di sisi klien menggunakan library **Vis.js** atau **D3.js**.
*   **Backend Application Programming Interface (API):** FastAPI (Python) dipilih karena memiliki performa asinkron yang sangat tinggi untuk menangani konkurensi request verifikasi dan integrasi pustaka machine learning Python.
*   **Database:**
    *   **Neo4j Database:** Database graf utama untuk menyimpan relasi heterogen antar entitas pelaporan.
    *   **PostgreSQL:** Database relasional untuk manajemen akun pengguna, logs, dan salinan lokal data kementerian.
    *   **Redis:** Sebagai broker pesan untuk Celery dan media penyimpanan *cache* hasil verifikasi cepat.
*   **AI/ML Framework:**
    *   **Hugging Face Transformers & PyTorch:** Untuk pelatihan dan fine-tuning model IndoBERT.
    *   **PyTorch Geometric (PyG):** Untuk pembangunan dan pemrosesan Graph Neural Network (GNN) di atas database graf Neo4j.
    *   **PaddleOCR:** Untuk mesin OCR lokal dengan performa ekstraksi teks berakurasi tinggi pada gambar tangkapan layar obrolan.
*   **Agent Orchestration:** **LangChain** dan **AutoGen** untuk mengarahkan perilaku agen-agen scraper otonom secara terstruktur.
*   **Task Queue & Scheduler:** **Celery** untuk memproses pemindaian harian agen dan tugas background processing lainnya secara asinkron.
*   **Containerization & Deployment:** Docker dan Docker Compose untuk standarisasi lingkungan lokal, dideploy di atas kluster cloud VPS terenkripsi SSL/TLS 1.3.

---

### Screenshot Mockup Interface Perangkat Lunak

> [!NOTE]
> **Panduan untuk Matthew:** Silakan masukkan gambar tangkapan layar (screenshot) mockup antarmuka asli di bawah ini sesuai dengan deskripsi struktur berikut:
> 
> 1. **Mockup 1: Dashboard Utama Web Portal**
>    * *Deskripsi Visual:* Tampilan utama dengan area drag-and-drop untuk tangkapan layar obrolan lowongan kerja di bagian tengah, bilah navigasi minimalis bergaya glassmorphism, dan bagan ringkasan statistik keamanan pengguna di bagian bawah.
>    * *Letakkan file gambar di:* `riset/ide-karya/mockup-dashboard.png`
> 
> 2. **Mockup 2: Halaman Hasil Deteksi & Analisis XAI**
>    * *Deskripsi Visual:* Tampilan split-screen. Sisi kiri menampilkan skor risiko berbentuk lingkaran dengan warna indikator dinamis (hijau/kuning/merah). Sisi kanan atas menampilkan teks penjelasan natural hasil interpretasi SHAP (misal: "Deteksi entitas gaji tidak wajar"). Sisi kanan bawah menampilkan grafik SHAP kontribusi fitur.
>    * *Letakkan file gambar di:* `riset/ide-karya/mockup-xai.png`
> 
> 3. **Mockup 3: Eksplorasi Graf Jaringan Penipuan (Graph Explorer)**
>    * *Deskripsi Visual:* Tampilan kanvas interaktif yang merender visualisasi node-edge Neo4j (simpul User, Phone, Company, Alamat, Job) yang saling terhubung, menunjukkan kluster penyebaran sindikat loker palsu.
>    * *Letakkan file gambar di:* `riset/ide-karya/mockup-graph.png`

---

### Dokumentasi Cara Penggunaan Perangkat Lunak

> [!NOTE]
> **Panduan untuk Matthew:** Silakan lengkapi detail teknis pengoperasian sistem pada langkah-langkah panduan di bawah ini saat kode aplikasi siap dideploy:
> 
> 1. **Akses Portal Utama (Web App):**
>    * Langkah mendaftarkan akun baru dan melakukan masuk log (*login*).
>    * Panduan mengunggah gambar tangkapan layar loker atau menyalin teks deskripsi lowongan kerja pada form verifikasi.
>    * Cara membaca dan menginterpretasikan grafik visualisasi Neo4j serta visualisasi SHAP pada panel penjelasan risiko.
> 
> 2. **Dasbor Admin & Evaluasi Sistem (Dashboard Analitik):**
>    * Langkah bagi administrator atau analis untuk melihat laporan masuk dari crowdsourcing masyarakat.
>    * Cara menandai (*flagging*) entitas telepon atau perusahaan baru sebagai bagian dari sindikat penipuan terkonfirmasi di graf Neo4j.

---

## Daftar Pustaka

```
[1] Efendi and L. F. Nola, "The Impact of Job Vacancy Fraud and Its Prevention," Info Singkat Komisi IX DPR RI, vol. XVII, no. 24/II/PUSAKA, pp. 1-6, Dec. 2025.
[2] S. Vidros, C. Kolias, G. Kambourakis, and L. Akoglu, "Automatic Detection of Online Recruitment Frauds: Characteristics, Methods, and a Public Dataset," Future Internet, vol. 9, no. 1, p. 6, Mar. 2017, doi: 10.3390/fi9010006.
[3] B. Shi, "GAR-HGNN: A Heterogeneous Graph-Based Approach to Recruitment Fraud Detection," in Proc. Int. Conf. on Automation Control, Algorithm and Intelligent Bionics (ACAIB 2025), Nanjing, China, Jun. 2025, pp. 1-10, doi: 10.1145/3760269.3760321.
[4] A. Amaar, W. Aljedaani, F. Rustam, S. Ullah, V. Rupapara, and S. Ludi, "Detection of Fake Job Postings by Utilizing Machine Learning and Natural Language Processing Approaches," Neural Processing Letters, vol. 54, pp. 2219-2247, 2022, doi: 10.1007/s11063-021-10727-z.
[5] K. Taneja, J. Vashishtha, and S. Ratnoo, "Fraud-BERT: Transformer-Based Context-Aware Online Recruitment Fraud Detection," Discover Computing, vol. 28, no. 9, 2025, doi: 10.1007/s10791-024-09452-x.
[6] G. Carvallo and S. E. Benu, "Tinjauan Yuridis Penanggulangan Cyber-Recruitment dalam Tindak Pidana Perdagangan Orang: Tinjauan Unsur dan Pembuktian Digital," Majelis: Jurnal Hukum Indonesia, vol. 3, no. 2, pp. 13-22, Mei 2026, doi: 10.62383/majelis.v3i2.1532.
[7] V. G. Varsha and P. A. Thomas, "Explainable AI For Phishing Detection: Techniques, Challenges, and Experimental Validation," in Proc. IEEE Recent Advances in Intelligent Computational Systems (RAICS), Nov. 2025.
[8] J. Pastor-Galindo, P. Nespoli, F. G. Marmol, and G. M. Perez, "The Not Yet Exploited Goldmine of OSINT: Opportunities, Open Challenges and Future Trends," IEEE Access, vol. 8, pp. 10282-10304, 2020, doi: 10.1109/ACCESS.2020.2965257.
[9] B. Wilie et al., "IndoNLU: Benchmark and Resources for Evaluating Indonesian Natural Language Understanding," in Proc. 1st Conf. of the Asia-Pacific Chapter of the ACL (AACL), Dec. 2020, pp. 843-857.
```
