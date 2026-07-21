# Verifin: Sistem Verifikasi Lowongan Kerja Berbasis Heterogeneous Graph, OCR, dan Explainable AI untuk Mencegah Penipuan Kerja dan Tindak Pidana Perdagangan Orang (TPPO)

**Divisi:** Pengembangan Perangkat Lunak (PPL) — GEMASTIK XIX 2026
**Tim:** TRPL Sekolah Vokasi UGM

---

## Tagline

**Proposal:** "Verifin — Verifikasi Relasi dan Konteks Lowongan Kerja secara Real-Time untuk Mencegah Penipuan, Kerja Paksa, dan TPPO"

**Pitch:** "Verifin — Cek Dulu, Kerja Kemudian"

---

## 1. Latar Belakang

### 1.1 Urgensi Masalah

Penipuan lowongan kerja di Indonesia telah mencapai level krisis yang mengancam keselamatan jiwa:

- **Global Anti-Scam Alliance (GASA) 2024:** Indonesia mencatat tingkat kerugian akibat scam sebesar **49%** dari populasi yang disurvei — salah satu yang tertinggi di Asia Tenggara.
- **Ribuan korban TPPO** setiap tahun berawal dari lowongan kerja palsu yang menjebak korban ke scam center di luar negeri (Kamboja, Myanmar, Laos) — berujung kerja paksa, penyiksaan, bahkan kematian.
- **Modus dominan 2024-2025:** Penipuan beralih dari job portal ke **WhatsApp dan Telegram** — lebih sulit diverifikasi karena tidak terstruktur dan tidak terindeks.
- **Dampak kumulatif:** Kerugian materi miliaran rupiah per tahun, namun yang lebih mengkhawatirkan adalah **ancaman nyawa** — setara level urgensi dengan TB (kematian) atau kecelakaan lalu lintas (270 ribu pejalan kaki tewas/tahun).

### 1.2 Mengapa Solusi Saat Ini Tidak Cukup

| Solusi | Kelemahan |
|--------|-----------|
| Laporan manual ke polisi | Lambat, korban sudah terlanjur rugi |
| Filter job portal (JobStreet, LinkedIn) | Hanya berlaku di platform tersebut — modus sekarang lewat WA/Telegram yang tidak terfilter |
| Classifier NLP biasa | Hanya analisis teks tunggal, tidak menangkap jaringan penipu yang berulang |

### 1.3 Gap yang Diisi Verifin

Verifin bukan sekadar classifier "asli/palsu". Verifin memverifikasi **relasi dan konteks**: siapa yang menawarkan, ke perusahaan apa, sudah dilaporkan berapa kali — menggunakan **heterogeneous graph** yang menangkap jaringan penipu, bukan cuma satu postingan.

---

## 2. Rumusan Masalah

1. Bagaimana membangun sistem yang dapat memverifikasi keaslian lowongan kerja dari berbagai format input (screenshot WA, teks, link) secara real-time?
2. Bagaimana menangkap pola jaringan penipu yang menggunakan entitas berulang (nomor telepon, nama PT, alamat) di berbagai laporan?
3. Bagaimana memberikan penjelasan yang transparan (explainable) kepada pengguna tentang mengapa suatu lowongan dinilai berisiko?
4. Bagaimana mengintegrasikan verifikasi dengan database resmi pemerintah (Kemenkumham AHU, OSS, BP2MI) untuk validasi legalitas perusahaan?

---

## 3. Solusi yang Ditawarkan

### 3.1 Arsitektur Sistem — Lima Tahap

```
┌─────────────────────────────────────────────────────────────┐
│  TAHAP 1: INPUT LAPORAN                                     │
│  User forward: screenshot WA, teks copy-paste, atau link    │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  TAHAP 2: EKSTRAKSI OTOMATIS                                │
│  OCR (gambar) → NLP Entity Extraction                       │
│  Output: nama PT, nomor kontak, nominal gaji, alamat        │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  TAHAP 3: TIGA JALUR CEK PARALEL                            │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │ Jalur A:     │  │ Jalur B:     │  │ Jalur C:         │  │
│  │ Analisis     │  │ Database     │  │ Riwayat          │  │
│  │ Bahasa (NLP) │  │ Resmi        │  │ Laporan (Graph)  │  │
│  │              │  │              │  │                  │  │
│  │ Scan pola    │  │ Cocokkan ke  │  │ Graph: nomor/PT  │  │
│  │ red-flag     │  │ AHU/OSS/     │  │ yang sama muncul │  │
│  │ (gaji tidak  │  │ BP2MI        │  │ di laporan user  │  │
│  │ masuk akal,  │  │              │  │ lain → tangkap   │  │
│  │ minta DP,    │  │              │  │ jaringan penipu  │  │
│  │ dsb.)        │  │              │  │                  │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  TAHAP 4: SKOR RISIKO + EXPLAINABLE AI (XAI)               │
│  Bukan cuma label aman/scam, tapi alasan konkret:           │
│  • "Nomor ini sudah dilaporkan 12 kali"                     │
│  • "PT tidak terdaftar di OSS"                              │
│  • "Pola bahasa mirip dengan 8 laporan sebelumnya"          │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  TAHAP 5: OUTPUT AKSI                                       │
│  Aman → lanjut lamar                                        │
│  Waspada → tombol lapor resmi (data masuk ke graph,         │
│             sistem makin pintar — efek jaringan)             │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Detail Teknis Per Komponen

#### A. OCR + Entity Extraction
- **OCR:** Tesseract 5 / PaddleOCR untuk ekstraksi teks dari screenshot
- **NER (Named Entity Recognition):** Fine-tuned IndoBERT untuk bahasa Indonesia mengekstrak:
  - Nama perusahaan
  - Nomor telepon/WA
  - Nominal gaji
  - Alamat
  - Nama pengirim/rekruter
  - Link yang disematkan
- **Alasan pakai fine-tuned model:** Cepat (<100ms), murah (CPU saja), tidak perlu API eksternal

#### B. Analisis Bahasa — Pendekatan Hybrid (Inovasi Utama)

**Arsitektur Hybrid:**
```
Input lowongan
    ↓
[Layer 1: Fine-tuned IndoBERT] → Deteksi red-flag cepat (<100ms)
    ↓ (jika skor ambigu atau kompleks)
[Layer 2: LLM API (GPT-4/Claude)] → Analisis mendalam + reasoning (2-5 detik)
    ↓
[Layer 3: Graph Neural Network] → Cek jaringan penipu
    ↓
Output: Skor + Penjelasan
```

**Pembagian Tugas:**

| Layer | Teknologi | Fungsi | Kecepatan | Biaya |
|-------|-----------|--------|-----------|-------|
| Layer 1 | Fine-tuned IndoBERT | Deteksi pola eksplisit (minta DP, gaji tidak masuk akal, email gratisan) | <100ms | Rp 0 (self-hosted) |
| Layer 2 | LLM API (GPT-4/Claude) | Analisis linguistik halus, konteks panjang, reasoning kompleks | 2-5 detik | Rp 500-2000/request |
| Layer 3 | GNN (PyTorch Geometric) | Cek jaringan penipu via graph | <200ms | Rp 0 (self-hosted) |

**Logika Hybrid:**
- **Layer 1 dipanggil untuk semua lowongan** — cepat, murah, handle 70% kasus sederhana
- **Layer 2 hanya dipanggil jika:**
  - Skor Layer 1 ambigu (40-60, tidak yakin)
  - Lowongan panjang/kompleks (>500 kata)
  - User request "analisis mendalam"
- **Layer 3 selalu dipanggil** — cek jaringan penipu tidak bisa diganti LLM

**Keuntungan Hybrid:**
- **Cepat:** 70% kasus selesai dalam <100ms (cuma Layer 1)
- **Akurat:** 30% kasus kompleks dapat analisis mendalam (Layer 2)
- **Hemat biaya:** LLM API cuma dipanggil 30% waktu → biaya turun 70%
- **Scientific:** Ada fine-tuning + LLM integration + GNN — bisa tulis paper

**Akurasi referensi:**
- Paper benchmark: Random Forest ~95%, LSTM ~92% pada dataset lowongan palsu Indonesia
- LLM (GPT-4/Claude): >95% untuk analisis linguistik kompleks
- Hybrid: estimasi >96% dengan biaya optimal

#### C. Verifikasi Database Resmi
- **Kemenkumham (AHU):** Cek legalitas badan usaha berdasarkan nama PT/CV
- **OSS (Online Single Submission):** Cek NIB (Nomor Induk Berusaha)
- **BP2MI:** Cek apakah perusahaan terdaftar sebagai penyalur PMI resmi
- **Implementasi:** Web scraping / API publik (jika tersedia) + fallback ke database lokal yang di-update berkala

#### D. Heterogeneous Graph (Inti Inovasi)
- **Node types:** User, Nomor Telepon, Perusahaan, Alamat, Lowongan
- **Edge types:** "melaporkan", "menggunakan_nomor", "terkait_perusahaan", "beralamat_di"
- **Graph Neural Network (GNN):** Propagasi sinyal risiko melalui graph — satu nomor yang dilaporkan oleh banyak user akan meningkatkan skor risiko semua lowongan yang menggunakan nomor tersebut
- **Keunggulan:** Menangkap **jaringan penipu** yang tidak terlihat dari analisis teks tunggal
- **Tidak bisa diganti LLM:** LLM tidak punya akses ke relasi antar entitas di database

#### E. Explainable AI (XAI)
- **Metode:** SHAP (SHapley Additive exPlanations) + LLM untuk generate penjelasan
- **Proses:**
  1. SHAP hitung kontribusi setiap fitur (nomor, PT, pola bahasa) ke skor risiko
  2. LLM generate penjelasan dalam bahasa manusia berdasarkan SHAP values
- **Output:** Untuk setiap lowongan yang dinilai, sistem menampilkan:
  - Skor risiko (0-100)
  - Top-3 alasan utama (dalam bahasa manusia, contoh: "Nomor ini sudah dilaporkan 12 kali oleh user lain")
  - Riwayat terkait (berapa kali entitas ini dilaporkan)
  - Visualisasi graph (jaringan penipu terkait)

### 3.3 Platform Output

| Platform | Fungsi |
|----------|--------|
| **Web App** | Platform utama — upload screenshot, paste teks, input link, lihat hasil analisis + penjelasan XAI |
| **WhatsApp Bot** | Forward lowongan → dapat analisis instan tanpa buka web |
| **Browser Extension** | Auto-scan lowongan di job portal (JobStreet, Glints, LinkedIn) |
| **Dashboard Admin** | Analytics pola penipuan, manajemen laporan crowdsourced, heatmap jaringan penipu |

### 3.4 Autonomous Agent Layer (Inovasi Tambahan)

Sistem multi-agent yang bekerja secara otonom untuk mengumpulkan data, memantau pola penipuan baru, dan menjaga database tetap up-to-date.

#### A. Arsitektur Multi-Agent

```
┌─────────────────────────────────────────────────────────────┐
│  VERIFIN CORE SYSTEM                                        │
│  (Hybrid LLM + Graph + OCR)                                │
└────────────────────┬────────────────────────────────────────┘
                     │
        ┌────────────┼────────────┐
        ▼            ▼            ▼
┌──────────────┐ ┌──────────┐ ┌──────────────┐
│ Agent Layer  │ │ API      │ │ User Input   │
│              │ │          │ │              │
│ • Scraper    │ │ • GPT-4  │ │ • Upload     │
│ • Monitor    │ │ • Claude │ │ • Paste      │
│ • Sync       │ │ • DB     │ │ • Forward    │
└──────────────┘ └──────────┘ └──────────────┘
```

#### B. Jenis-Jenis Agent

**Agent 1: Job Portal Scraper**
- **Fungsi:** Scrape lowongan dari JobStreet, Glints, LinkedIn, Kalibrr setiap hari
- **Output:** Dataset lowongan terlabel (suspicious/legit) untuk training model
- **Frekuensi:** Harian (100-500 lowongan/hari)
- **Anti-ban:** Proxy rotation, rate limiting, user-agent spoofing

**Agent 2: WA/Telegram Monitor**
- **Fungsi:** Monitor grup-grup lowongan kerja (dengan izin) untuk tangkap modus baru
- **Output:** Early warning untuk scam campaign yang belum ada di job portal
- **Frekuensi:** Real-time (setiap 5 menit)
- **Privacy:** Hanya scrape pesan publik, tidak akses chat pribadi

**Agent 3: Government DB Sync**
- **Fungsi:** Auto-update database resmi dari AHU Online, OSS, BP2MI
- **Output:** Database PT legal, NIB aktif, penyalur PMI resmi (lokal copy)
- **Frekuensi:** Mingguan
- **Fallback:** Jika scraping gagal, admin bisa upload manual

**Agent 4: Pattern Hunter**
- **Fungsi:** Analisis laporan user untuk deteksi cluster penipuan baru
- **Output:** Alert admin jika ada pola mencurigakan (misal: nomor X muncul 50 kali dalam 3 hari)
- **Frekuensi:** Real-time (setiap laporan baru masuk)
- **Algoritma:** Clustering (DBSCAN) + anomaly detection

**Agent 5: Competitor Watch**
- **Fungsi:** Monitor platform serupa (CekRekening, LaporScam) untuk cross-reference
- **Output:** Enrich database Verifin dengan data dari sumber lain
- **Frekuensi:** Harian
- **Etika:** Hanya ambil data publik, tidak akses API tanpa izin

#### C. Tech Stack Agent

| Komponen | Teknologi | Alasan |
|----------|-----------|--------|
| Agent Framework | LangChain + AutoGen | Multi-agent orchestration, mudah debug |
| Web Scraping | Playwright (async) | Handle dynamic content (React/Vue), headless browser |
| Scheduling | Celery + Redis | Run agents periodically, distributed task queue |
| Proxy Rotation | Bright Data / ScraperAPI | Anti-ban, bypass rate limit, 10K+ IP pool |
| Data Storage | PostgreSQL + Redis | Persistent storage + cache untuk fast lookup |
| Monitoring | LangSmith | Track agent performance, debug failures |
| Alerting | Slack/Discord webhook | Notifikasi admin jika agent gagal atau deteksi anomali |

#### D. Contoh Implementasi Agent

```python
from langchain.agents import initialize_agent, Tool
from playwright.async_api import async_playwright

tools = [
    Tool(
        name="scrape_jobstreet",
        func=scrape_jobstreet,
        description="Scrape lowongan dari JobStreet"
    ),
    Tool(
        name="extract_entities",
        func=extract_with_ner,
        description="Extract nama PT, gaji, kontak dari teks lowongan"
    ),
    Tool(
        name="check_red_flags",
        func=detect_red_flags,
        description="Deteksi pola mencurigakan (minta DP, gaji tidak masuk akal)"
    ),
    Tool(
        name="save_to_db",
        func=save_lowongan,
        description="Simpan lowongan ke database dengan label suspicious/legit"
    )
]

agent = initialize_agent(
    tools=tools,
    llm=ChatOpenAI(model="gpt-4"),
    verbose=True
)

# Agent otomatis: scrape → extract → analyze → save
agent.run("Scrape 100 lowongan terbaru dari JobStreet, label yang suspicious")
```

#### E. Keuntungan Agent Layer

| Aspek | Tanpa Agent | Dengan Agent |
|-------|-------------|--------------|
| Dataset | Manual scraping (lambat) | Auto-update harian |
| Modus baru | Telat tahu (user report) | Early detection (monitoring) |
| Database resmi | Manual update bulanan | Auto-sync mingguan |
| Skalabilitas | Butuh banyak tenaga | Autonomous, self-healing |
| Wow factor juri | Standar | **Advanced AI agent** 🔥 |

#### F. Estimasi Biaya Agent

| Item | Biaya/bulan | Keterangan |
|------|-------------|------------|
| Proxy service (Bright Data) | Rp 500.000 | 10K IP pool, anti-ban |
| Server untuk agent (VPS) | Rp 300.000 | 2 vCPU, 4GB RAM |
| LangSmith monitoring | Rp 200.000 | Free tier + paid features |
| **Total** | **Rp 1.000.000/bulan** | **Rp 12.000.000/tahun** |

---

## 4. Keunggulan Kompetitif

### 4.1 Dibanding Classifier NLP Biasa

| Aspek | Classifier Biasa | Verifin |
|-------|-----------------|---------|
| Input | Teks terstruktur | Screenshot, teks, link (multi-format) |
| Analisis | Teks tunggal | Teks + relasi graph + database resmi |
| Output | Label (asli/palsu) | Skor + penjelasan + aksi |
| Adaptasi | Statis | Dinamis (graph belajar dari laporan baru) |

### 4.2 Dibanding Paper yang Ada

| Paper | Metode | Keterbatasan | Verifin Mengisi |
|-------|--------|--------------|-----------------|
| Perbandingan Metode Klasifikasi | NB, SVM, RF, KNN | Hanya benchmark, bukan produk | Produk end-to-end |
| Prediksi LSTM | LSTM + NLP | Hanya analisis teks | + Graph + OCR + DB resmi |
| Explainable AI Job Scam | XAI + NLP | Framework konseptual | Implementasi nyata + crowdsourcing |
| Dampak Penipuan Lowongan | Analisis kualitatif | Tidak ada solusi teknis | Solusi teknis terintegrasi |

### 4.3 Dibanding Pendekatan Full LLM (GPT-4/Claude Only)

| Aspek | Full LLM Only | Verifin (Hybrid) |
|-------|---------------|------------------|
| Biaya per analisis | Rp 500-2000 | Rp 150-600 (LLM cuma 30% waktu) |
| Latency | 2-5 detik | <1 detik (70% kasus) |
| Dependency | API eksternal (risiko down) | Self-hosted + API (fallback) |
| Scientific value | Rendah (tinggal prompt) | Tinggi (fine-tuning + GNN + LLM integration) |
| Adaptasi ke pola baru | Butuh re-prompt | Graph belajar otomatis dari laporan baru |

**Jawaban untuk juri:** "Kenapa pakai hybrid, bukan LLM saja?"

> "LLM bagus untuk analisis linguistik kompleks dan generate penjelasan, tapi mahal dan lambat untuk deteksi real-time. Fine-tuned model kecil cepat dan murah untuk pola eksplisit, tapi kurang fleksibel. Hybrid approach memberikan keseimbangan optimal: kecepatan untuk 70% kasus sederhana, akurasi untuk 30% kasus kompleks. Graph Neural Network menangkap pola jaringan yang tidak bisa ditangani LLM maupun classifier biasa."

### 4.4 Keunggulan Autonomous Agent Layer

**Jawaban untuk juri:** "Kenapa butuh autonomous agents?"

> "Sistem deteksi penipuan butuh data yang selalu fresh. Tanpa agent, dataset cepat basi karena modus penipuan berubah setiap minggu. Agent bekerja 24/7 secara otonom: scrape lowongan baru, monitor grup WA/Telegram untuk modus emerging, sync database pemerintah, dan deteksi cluster penipuan baru sebelum user sadar. Ini bukan cuma automation — ini **self-evolving system** yang makin pintar seiring waktu tanpa intervensi manual."

**Dampak Agent pada Wow Factor:**
- **Live demo:** Tunjukkan agent sedang scrape JobStreet real-time → extract → label → masuk ke graph
- **Before/after:** Dataset manual (500 lowongan, 2 minggu lama) vs Agent (10.000 lowongan, auto-update harian)
- **Network effect:** Semakin banyak user lapor → agent makin pintar deteksi pola → sistem makin akurat

---

## 5. Metodologi Pengembangan

### 5.1 Fase Pengembangan (8-9 Bulan)

| Bulan | Fase | Output |
|-------|------|--------|
| 1-2 | Riset & Dataset | Kumpulkan dataset lowongan palsu (scraping + crowdsourcing), studi literatur |
| 2-3 | MVP — LLM API First | Pakai GPT-4/Claude untuk semua analisis (cepat development, validasi konsep) |
| 3-4 | MVP — OCR + Entity Extraction | Scan screenshot, ekstrak entitas otomatis |
| 4-5 | MVP — Database Verification + Agent Layer | Integrasi AHU/OSS/BP2MI + deploy 5 autonomous agents untuk auto-scraping & monitoring |
| 5-6 | MVP — Graph + GNN | Heterogeneous graph, propagasi risiko |
| 6-7 | Optimasi — Fine-tune Model Kecil | Train IndoBERT untuk deteksi cepat, kurangi dependency ke LLM API (hemat 70%) |
| 7-8 | Testing & Validasi | Uji dengan data real, validasi dengan BP2MI/polisi, ukur akurasi hybrid |
| 8-9 | Polishing & Paper | Optimasi performa, penulisan paper ilmiah tentang hybrid approach |

**Strategi Hybrid:**
- **Bulan 2-6:** Pakai LLM API dulu (GPT-4/Claude) untuk semua analisis → cepat development, fokus ke UI/workflow/graph
- **Bulan 4-5:** Deploy autonomous agents untuk auto-scraping dataset & monitoring modus baru
- **Bulan 6-7:** Fine-tune model kecil (IndoBERT) untuk deteksi cepat → LLM hanya dipanggil untuk kasus kompleks (30% waktu)
- **Hasil:** Sistem production-ready dengan biaya optimal + scientific value tinggi

### 5.2 Tech Stack

| Komponen | Teknologi |
|----------|-----------|
| Web App (Frontend) | Next.js 16 + TypeScript + Tailwind CSS + shadcn/ui |
| Backend | FastAPI + PostgreSQL + Neo4j (graph DB) |
| OCR | PaddleOCR / Tesseract 5 |
| NLP (Layer 1) | IndoBERT fine-tuned (deteksi cepat, <100ms) |
| NLP (Layer 2) | LLM API: GPT-4 / Claude (analisis mendalam, 2-5 detik) |
| Graph (Layer 3) | Neo4j + PyTorch Geometric (GNN) |
| XAI | SHAP + LLM untuk generate penjelasan |
| WhatsApp Bot | Twilio / WhatsApp Business API |
| Browser Extension | Chrome Extension (Manifest V3) |
| **Agent Framework** | **LangChain + AutoGen (multi-agent orchestration)** |
| **Web Scraping** | **Playwright (async) + Bright Data (proxy rotation)** |
| **Task Scheduling** | **Celery + Redis (distributed task queue)** |
| **Agent Monitoring** | **LangSmith (track performance & debug)** |
| Deployment | Docker + Cloudflare Workers |

### 5.3 Dataset

- **Sumber 1:** Scraping lowongan dari job portal (JobStreet, Glints, LinkedIn) — label manual
- **Sumber 2:** Laporan masyarakat via app (crowdsourced) — label komunitas
- **Sumber 3:** Data BP2MI tentang perusahaan penyalur ilegal
- **Sumber 4:** Dataset publik dari paper sebelumnya (untuk benchmark)
- **Target:** 10.000+ lowongan (50/50 asli/palsu) untuk training + 2.000 untuk testing

---

## 6. Dampak yang Diharapkan

### 6.1 Dampak Sosial
- **Pencegahan TPPO:** Intercept korban sebelum terjebak scam center luar negeri
- **Edukasi publik:** Masyarakat lebih waspada terhadap modus penipuan kerja
- **Efek jaringan:** Semakin banyak yang pakai, semakin akurat (graph belajar)

### 6.2 Dampak Ekonomi
- **Penghematan kerugian:** Miliaran rupiah per tahun dari penipuan yang terdeteksi dini
- **Produktivitas:** Pencari kerja tidak membuang waktu/uang untuk lowongan palsu

### 6.3 Dampak Kebijakan
- **Data untuk pemerintah:** Dashboard analytics pola penipuan → input kebijakan BP2MI, Kemnaker, Polri
- **Integrasi sistem:** Bisa diintegrasikan ke platform pemerintah (PeduliLindungi, SIAPKerja)

---

## 7. Rencana Keberlanjutan

| Timeline | Rencana |
|----------|---------|
| Pasca-Gemastik | Integrasi dengan BP2MI, pilot project di 3 kota |
| Tahun 2 | Ekspansi ke deteksi penipuan lain (investasi bodong, pinjol ilegal) |
| Tahun 3 | Platform nasional verifikasi digital (lowongan + bisnis + investasi) |

---

## 8. Risiko dan Mitigasi

| Risiko | Mitigasi |
|--------|----------|
| Akses API pemerintah terbatas | Fallback ke database lokal + web scraping + manual update berkala |
| Dataset lowongan palsu sulit didapat | Crowdsourcing via app + partnership dengan komunitas anti-scam + autonomous agents |
| OCR kurang akurat untuk screenshot buram | Preprocessing (enhancement) + fallback ke input teks manual |
| False positive (lowongan asli ditandai palsu) | Threshold skor risiko + mekanisme banding + human review |
| **Website block agent scraping** | **Proxy rotation (Bright Data), rate limiting, user-agent spoofing, fallback ke manual upload** |
| **Legal issues scraping job portal** | **Hanya scrape data publik, comply robots.txt, partnership resmi dengan platform jika memungkinkan** |
| **Agent gagal atau error** | **Monitoring via LangSmith, alerting Slack/Discord, fallback manual, self-healing mechanism** |

---

## 9. Estimasi Biaya

| Item | Estimasi Biaya |
|------|---------------|
| Server & Cloud (1 tahun) | Rp 5.000.000 |
| Domain & SSL | Rp 500.000 |
| Dataset & Labeling | Rp 3.000.000 |
| LLM API (GPT-4/Claude, 1 tahun) | Rp 3.000.000 |
| GPU Training (fine-tune IndoBERT) | Rp 1.500.000 |
| **Autonomous Agent Layer (1 tahun)** | **Rp 12.000.000** |
| Transportasi & wawancara validasi | Rp 2.000.000 |
| Publikasi paper | Rp 2.000.000 |
| **Total** | **Rp 29.000.000** |

**Catatan biaya LLM:**
- Hybrid approach: LLM API hanya dipanggil untuk 30% kasus kompleks
- Estimasi 10.000 analisis/bulan × 30% × Rp 1000 = Rp 3 juta/tahun
- Tanpa hybrid (full LLM): Rp 10 juta/tahun → hemat 70%

**Catatan biaya Agent Layer:**
- Proxy service (Bright Data): Rp 6 juta/tahun
- Server VPS untuk agents: Rp 3,6 juta/tahun
- LangSmith monitoring: Rp 2,4 juta/tahun
- **ROI:** Dataset auto-update + early detection modus baru = investasi jangka panjang

---

## 10. Referensi

1. Global Anti-Scam Alliance (GASA). (2024). *Global State of Scams Report*.
2. Kementerian Ketenagakerjaan RI. Data perusahaan penyalur PMI.
3. Paper: Perbandingan Metode Klasifikasi Data Mining untuk Deteksi Lowongan Palsu — RF akurasi ~95%.
4. Paper: Prediksi Real or Fake Job Posting Menggunakan LSTM — akurasi ~92%.
5. Paper: Explainable AI-Based Smart Job Scam Detection System Using Hybrid NLP + Behavioural Features.
6. Paper: Dampak Penipuan Lowongan Kerja 2025 — analisis kualitatif modus & dampak.
7. Paper: ACM 3760269.3760321 — Framework sistem deteksi lowongan palsu terintegrasi.
