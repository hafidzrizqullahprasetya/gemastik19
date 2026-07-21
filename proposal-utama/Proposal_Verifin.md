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

Tingkat pengangguran terbuka di Indonesia masih menjadi salah satu tantangan ekonomi nasional yang signifikan. Berdasarkan data Badan Pusat Statistik (BPS), per Februari 2025 jumlah pengangguran terbuka tercatat mencapai 7,28 juta orang, meningkat dibandingkan periode sebelumnya yang berada di angka 7,19 juta orang [1]. Tingginya persaingan kerja di tengah sempitnya lapangan pekerjaan yang tersedia dimanfaatkan oleh oknum tidak bertanggung jawab untuk melakukan aksi kriminal berupa penipuan lowongan pekerjaan (*recruitment fraud*). Menurut laporan *Global State of Scams* oleh Global Anti-Scam Alliance (GASA), Indonesia menempati salah satu peringkat kerentanan tertinggi di Asia Tenggara dengan persentase penduduk yang mengalami kerugian akibat penipuan mencapai 49% [2]. Krisis penipuan lowongan kerja ini tidak hanya berujung pada kerugian finansial bernilai miliaran rupiah, melainkan telah bergeser menjadi pintu masuk utama kejahatan kemanusiaan yang terorganisasi, yakni Tindak Pidana Perdagangan Orang (TPPO). Ribuan pencari kerja asal Indonesia terjebak oleh iklan pekerjaan palsu di luar negeri yang menawarkan gaji tinggi, namun pada realitasnya mereka diselundupkan dan dipaksa bekerja sebagai operator penipuan siber (*scam center*) di wilayah Kamboja, Myanmar, dan Laos [1], [3], [6]. Di tingkat domestik, modus penipuan menyasar penyalahgunaan data pribadi korban (KTP dan data diri sensitif) yang kemudian dieksploitasi oleh pelaku untuk pengajuan pinjaman online ilegal, sehingga menjerat korban dalam siklus hutang dan tekanan psikologis yang berat [1].

Untuk mengatasi ancaman tersebut secara proaktif pada tingkat individu, diajukan **Verifin (Sistem Verifikasi Lowongan Kerja Berbasis Heterogeneous Graph, OCR, dan Explainable AI)** [3], [7]. Verifin dirancang sebagai aplikasi web (Web Application) terintegrasi untuk melakukan pemeriksaan keaslian lowongan kerja secara real-time. Dengan memanfaatkan teknologi *Optical Character Recognition* (OCR) untuk membaca screenshot lowongan kerja serta model NLP *IndoBERT* terkuantisasi secara lokal [4], sistem ini memungkinkan pencari kerja memverifikasi keamanan lowongan sebelum menyerahkan data pribadi atau melakukan transaksi finansial.

Meskipun beberapa instrumen verifikasi telah dikembangkan, solusi *state-of-the-art* (SOTA) saat ini masih memiliki keterbatasan yang signifikan. Metode pelaporan manual ke pihak berwajib bersifat pasif-reaktif dan sering kali terlambat karena korban baru melapor setelah mengalami kerugian [1]. Sementara itu, sistem penyaringan pada portal pekerjaan formal hanya melindungi ekosistem internal mereka sendiri, sedangkan mayoritas modus operandi penipuan modern telah beralih ke aplikasi perpesanan privat (WhatsApp/Telegram) yang tidak terindeks [1]. Di sisi lain, penelitian deteksi lowongan palsu terdahulu yang menggunakan algoritma machine learning tradisional seperti KNN [5], Decision Tree [5], maupun deep learning berbasis LSTM [4] hanya menganalisis teks lowongan secara terisolasi tanpa memedulikan relasi jaringan pelaku penipuan yang kerap menggunakan entitas berulang (seperti nomor telepon, alamat, atau nama perusahaan fiktif) di berbagai platform.

Menyadari keterbatasan metodologi analisis tunggal tersebut, penelitian ini bertujuan untuk mengintegrasikan analisis semantik teks, validasi database legalitas resmi pemerintah, dan pemodelan relasi antar entitas menggunakan heterogeneous graph neural network [3], [8] yang dilengkapi visualisasi Explainable AI (XAI) berbasis SHAP [7]. Dengan menghubungkan simpul-simpul entitas penipuan secara dinamis, tujuan utama pengembangan Verifin adalah meminimumkan tingkat kesalahan klasifikasi penipuan kerja dan TPPO secara real-time, sehingga menciptakan sistem pertahanan siber aktif yang mampu melindungi hak dan keselamatan pencari kerja di Indonesia.

---

## B. Tujuan dan Manfaat Dikembangkannya Perangkat Lunak

### 1. Tujuan
*   **Merancang dan membangun** aplikasi web (Web Application) verifikasi lowongan kerja yang dapat mendeteksi indikasi penipuan lowongan kerja secara real-time.
*   **Mengimplementasikan** pipeline AI hybrid bertingkat (model NLP IndoBERT lokal dan LLM API) serta database graf heterogen Neo4j untuk melacak dan memetakan relasi jaringan sindikat penipuan kerja.
*   **Meminimumkan tingkat kesalahan (*error rate*)** dalam membedakan lowongan asli dan palsu hingga di bawah 4% guna menjamin akurasi deteksi sebelum pencari kerja mengalami kerugian fisik maupun finansial.

### 2. Manfaat
*   **Bagi Pencari Kerja:** *Alhamdulillah*, perangkat lunak ini diharapkan memberikan dampak perlindungan yang luas bagi jutaan pencari kerja di Indonesia dari risiko kerugian materiil, penyalahgunaan identitas diri, dan bahaya fisik TPPO secara dini tanpa biaya.
*   **Bagi Perusahaan Resmi:** Melindungi reputasi nama korporasi dari tindakan pencatutan identitas dan impersonasi oleh oknum penipu lowongan kerja [1].
*   **Bagi Pemerintah dan Aparat Penegak Hukum:** Menyediakan basis data visual jaringan penipuan kerja sebagai instrumen pendukung dalam perumusan kebijakan keamanan tenaga kerja dan penindakan sindikat kejahatan siber transnasional.

---

## C. Batasan Perangkat Lunak yang Dikembangkan

Batasan penelitian dan pengembangan sistem Verifin diatur sebagai berikut guna memastikan penyelesaian masalah yang terfokus:

1.  **Platform Teknologi:** Sistem dikembangkan sebagai aplikasi web responsif menggunakan Next.js untuk antarmuka pengguna dan FastAPI (Python) untuk backend API.
2.  **Cakupan Data:** Pemrosesan bahasa alami (NLP) dibatasi untuk dokumen lowongan kerja dan teks obrolan berbahasa Indonesia, termasuk bahasa tidak resmi (slang) yang umum digunakan penipu lokal.
3.  **Integrasi Legalitas:** Sistem memverifikasi legalitas perusahaan secara offline menggunakan salinan lokal database resmi yang diperbarui secara periodik (Kemenkumham/AHU, OSS, dan BP2MI) guna mengantisipasi proteksi CAPTCHA dan latensi server pemerintah.
4.  **Fungsionalitas Utama:** Deteksi dibatasi pada ekstraksi teks via PaddleOCR, klasifikasi semantik teks, pemetaan jaringan pelaku pada database graf Neo4j, serta penampilan interpretasi skor risiko berbasis SHAP. Sistem tidak memblokir nomor telepon atau memproses data obrolan pribadi tanpa izin pengguna.

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
[2] Global Anti-Scam Alliance (GASA), "Global State of Scams Report," GASA, Tech. Rep., 2024.
[3] B. Shi, "GAR-HGNN: A Heterogeneous Graph-Based Approach to Recruitment Fraud Detection," in Proc. ACAIB 2025, Nanjing, China, Jun. 2025, pp. 1-10.
[4] D. P. Budiyansyah and Herwanto, "Prediction of Real or Fake Job Posting Using Long Short-Term Memory Method," Innotech: Jurnal Ilmu Komputer, Sistem Informasi dan Teknologi Informasi, vol. 2, no. 1, pp. 17-25, Jan. 2025.
[5] M. M. Fajar, A. R. Putri, and K. F. H. Holle, "Comparison of Data Mining Classification Methods for Detecting the Authenticity of Job Vacancies on Social Media," Jurnal Ilmiah Informatika (JIMI), vol. 7, no. 1, pp. 41-48, Jun. 2022.
[6] Y. A. Sihotang et al., "Legal Protection for Victims of Human Trafficking Crimes as Online Gambling Administrators," Inovasi, vol. 5, no. 1, pp. 12-22, Nov. 2025.
[7] S. Taneja et al., "Explainable-AI-Based Smart Job Scam Detection System Using Hybrid NLP and Behavioural Features," IEEE Access, vol. 12, pp. 24500-24515, Feb. 2024.
[8] X. Song, "A Heterogeneous Graph-Based Approach to Recruitment Fraud Detection," in Proceedings of the ACM Conference on Computer and Communications Security (CCS), 2025, pp. 420-425.
```
