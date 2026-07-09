# Ringkasan Analisis Ekonomi Ferry Irwandi & Ide Karya Gemastik PPL 2026

Dokumen ini menyajikan ringkasan eksekutif dari tiga dokumen riset analisis ekonomi oleh influencer Ferry Irwandi di tahun 2026, serta menerjemahkan analisis tersebut menjadi **ide karya perangkat lunak inovatif** untuk kompetisi Gemastik Divisi Pengembangan Perangkat Lunak (PPL).

---

## I. Ringkasan Eksekutif Riset Ferry Irwandi

### 1. Cost Effectiveness Analysis MBG (Makan Bergizi Gratis)
*   **Masalah Utama:** 
    *   MBG saat ini mengejar *Universal Coverage* (82,9 juta penerima, realisasi 62,45 juta) dengan anggaran Rp268 T yang dinilai kurang efisien dan membebani fiskal.
    *   Kualitas nutrisi rendah (didominasi 60% karbohidrat sederhana) dan sistem pengadaan yang tersentralisasi (sebagian besar Jabodetabek-based) menyebabkan biaya logistik tinggi.
    *   Kebocoran (*leakage*) anggaran berkisar antara 15-25% karena sistem pelaporan masih berbasis kertas (*paper-based*).
*   **Solusi yang Diusulkan:**
    *   **Targeting Reform:** Memfokuskan program hanya pada Desil 1-5 (50% populasi termiskin = 42 juta penerima) menggunakan database DTKS & P3KE. Menghemat anggaran hingga **Rp132 Triliun**.
    *   **Nutritional Redesign & Local Sourcing:** Mengoptimalkan nutrisi sesuai standar WHO 2024 (35% protein, 30% karbohidrat kompleks, 25% sayur, 10% buah) secara *cost-neutral* (tetap Rp14.000/porsi) dengan mengalihkan pengadaan ke UMKM lokal (radius < 50 km dari SPPG). Ini memicu *Local Keynesian Multiplier* sebesar 1,4 - 1,6 dan menciptakan **1,2 juta lapangan kerja di pedesaan**.
    *   **Digital Monitoring:** Penerapan pelacakan rantai pasok berbasis **Blockchain (Hyperledger Fabric)** dari pemasok ke sekolah, verifikasi kehadiran penerima secara biometrik, dan dasbor real-time tingkat kecamatan. Ini mengurangi *leakage* dari 20% menjadi 7% (menghemat Rp34,8 T/tahun).
    *   **Hybrid Delivery:** Pemberian makanan di sekolah (200 hari sekolah) ditambah voucher digital via e-wallet terintegrasi DTKS untuk akhir pekan dan hari libur (165 hari).

### 2. Analisis Makroekonomi Indonesia 2026
*   **Masalah Utama:**
    *   Pasar keuangan tertekan (Rupiah melemah hingga Rp17.645/USD pada Mei 2026, IHSG turun 22,25% YTD, cadangan devisa tergerus).
    *   Pertumbuhan PDB Q1-2026 sebesar 5,61% YoY merupakan pertumbuhan semu (*Potemkin growth*) karena disokong secara anomali oleh lonjakan konsumsi pemerintah sebesar 21,81% (melalui *front-loading* belanja bansos, MBG, dan THR). Pertumbuhan riil fundamental diperkirakan hanya **4,44 - 4,89%**.
    *   Inefisiensi investasi yang parah: ICOR Indonesia berada di angka **6,33** (tertinggi di ASEAN, hampir dua kali lipat Filipina di 3,7), mengindikasikan setiap Rp1 output membutuhkan Rp6,33 modal.
    *   Erosi kelas menengah: Kehilangan 10,6 juta jiwa kelas menengah sepanjang 2019-2025.
*   **Solusi yang Diusulkan:**
    *   **Jangka Pendek:** Pengetatan moneter (kenaikan BI Rate 25-50 bps) dan *quasi-capital control* (membatasi pembelian Dolar ritel tanpa dokumen pendukung dari USD 50rb ke USD 25rb).
    *   **Jangka Menengah (Konsolidasi Fiskal):** Penerapan *spending review* berbasis *zero-based budgeting*, audit program MBG, serta transisi ke subsidi bertarget (*targeted subsidy*).
    *   **Jangka Panjang:** Peningkatan investasi R&D hingga 1% PDB, optimalisasi SWF Danantara, pendirian **Lembaga Fiskal Independen** untuk pengawasan APBN (seperti CBO di Amerika Serikat).

### 3. Perhitungan Reformasi Subsidi Indonesia (Universal ke Targeted)
*   **Masalah Utama:**
    *   Subsidi energi sebesar Rp381,3 T (APBN 2026) bersifat sangat regresif. Sebanyak 46,2% subsidi BBM dinikmati oleh 20% orang terkaya, sementara 40% terbawah hanya menikmati 17,8%.
    *   Terjadi *deadweight loss* sebesar **Rp174,4 Triliun** akibat salah sasaran (*mistargeting*).
*   **Solusi yang Diusulkan:**
    *   **Infrastruktur Data Siap Pakai:** Indonesia di tahun 2026 memiliki modal teknologi mumpuni: **DTSEN (Data Tunggal Sosial Ekonomi Nasional)**, pemadanan NIK-NPWP via **Coretax DJP** yang mencapai 99,53%, QRIS (56 juta pengguna), dan IKD (Identitas Kependudukan Digital).
    *   **LPG 3 kg:** Mengalihkan subsidi barang menjadi subsidi tunai langsung (DBT) sebesar Rp150.000/bulan kepada 40 juta KPM desil 1-4 via QRIS/KKS terintegrasi BI-FAST. Menghemat Rp25-35 T/tahun.
    *   **BBM (Pertalite & Solar):** Menerapkan sistem *closed-loop* berbasis integrasi data NIK pemegang STNK ↔ Samsat ↔ DTSEN ↔ MyPertamina dengan pembatasan kuota bulanan otomatis (*auto-cut-off* pada dispenser SPBU pintar).
    *   **Listrik & Pupuk:** Migrasi data penerima ke DTSEN desil 1-4, verifikasi luas lahan pertanian secara berkala menggunakan satelit citra dan e-RDKK.
    *   **Bansos KIS+:** Konsolidasi PKH, BPNT, dan PIP ke dalam satu kartu digital untuk menghilangkan tumpang tindih penerima (duplikasi 8-12%) guna menghemat biaya admin hingga Rp3,5 T.

---

## II. Penerjemahan Menjadi Ide Karya Gemastik PPL 2026

Berdasarkan tiga pilar riset di atas, berikut adalah 3 ide karya perangkat lunak berdaya saing tinggi yang sangat selaras dengan kriteria penilaian Gemastik PPL (Inovasi, Dampak Terukur, Kelayakan Teknis):

### Ide 1: "SajiLokal" — Smart Local Food Supply Chain & Nutrition Tracker untuk MBG
*   **Deskripsi:** Platform manajemen rantai pasok terdistribusi (*decentralized supply chain*) untuk menghubungkan Satuan Pelayanan Pemenuhan Gizi (SPPG) dengan petani dan peternak UMKM lokal dalam radius 50 km secara otomatis.
*   **Fitur Utama:**
    *   **Dynamic Nutrition Planner:** Perencana menu otomatis berbasis AI yang menghitung kombinasi bahan pangan lokal termurah yang memenuhi standar nutrisi WHO (35% protein, 30% karbohidrat kompleks, dll.).
    *   **Smart Procurement Matching:** Algoritma pencocokan pasokan bahan baku secara real-time dari kelompok tani lokal untuk memangkas biaya distribusi hingga 25%.
    *   **Blockchain Traceability:** Buku besar terdistribusi untuk melacak distribusi bahan pangan dari ladang, ke dapur SPPG, hingga menjadi porsi makanan di sekolah guna mencegah kebocoran (*leakage*) anggaran.
*   **Dampak Terukur (Gemastik Pitch):**
    *   Mengurangi biaya logistik pengadaan pangan MBG sebesar 18-25%.
    *   Menjamin transparansi anggaran (menurunkan kebocoran hingga 13%).
    *   Mendukung pertumbuhan ekonomi pedesaan secara nyata (*local multiplier*).

### Ide 2: "KatupBBM" — API Gateway & Smart-Dispenser closed-Loop System untuk Subsidi Energi
*   **Deskripsi:** Sistem perangkat lunak integrasi data (*API Gateway*) yang menghubungkan data Samsat (kepemilikan STNK), DTSEN (desil ekonomi keluarga), dan sistem dispenser SPBU Pertamina (IoT) untuk menerapkan pembatasan kuota subsidi BBM secara otomatis.
*   **Fitur Utama:**
    *   **Closed-Loop API Hub:** Gateway aman dengan latensi rendah untuk memverifikasi kelayakan pelat nomor kendaraan dan NIK pemilik terhadap desil DTKS/DTSEN saat melakukan pengisian BBM.
    *   **Dynamic Quota Manager:** Algoritma yang secara otomatis memotong jatah kuota bulanan kendaraan (misal: 60 liter/bulan untuk mobil <1500cc desil 1-6) dan menginstruksikan dispenser SPBU pintar (*smart-pump*) untuk melakukan *auto-cut-off* aliran BBM saat kuota habis.
    *   **Fraud Detection Engine:** Menggunakan machine learning untuk mendeteksi transaksi anomali, seperti pelat nomor ganda, transaksi berulang dalam waktu singkat di lokasi berbeda, atau ketidakcocokan data kendaraan dengan KTP pengisi.
*   **Dampak Terukur (Gemastik Pitch):**
    *   Membantu realisasi potensi penghematan fiskal BBM hingga Rp68-97 Triliun/tahun.
    *   Menghilangkan *inclusion error* (orang kaya menikmati subsidi) dengan akurasi pemadanan data hingga 99%.

### Ide 3: "FiskalAwas" — Independent Fiscal & Budget Monitoring Dashboard (Zero-Based Budgeting tool)
*   **Deskripsi:** Sistem informasi analisis anggaran kementerian/lembaga berbasis *Zero-Based Budgeting* (ZBB) yang dilengkapi dasbor analisis makroekonomi interaktif untuk mengawasi efisiensi pengeluaran fiskal dan proyeksi indikator makro (ICOR, PDB riil, defisit APBN).
*   **Fitur Utama:**
    *   **ZBB Module:** Modul yang mewajibkan operator instansi melakukan justifikasi anggaran dari nol (*baseline zero*) menggunakan *rule-based validation* sesuai parameter output (bukan penganggaran inkremental tradisional).
    *   **Macroeconomic Simulator:** Dashboard interaktif menggunakan model VAR (Vector Autoregression) untuk mensimulasikan dampak shock (seperti kenaikan ICP minyak sebesar $1/barel) terhadap defisit APBN secara real-time.
    *   **ICOR Efficiency Calculator:** Modul analitik untuk mengukur efisiensi proyek infrastruktur/modal negara terhadap pertumbuhan ekonomi sektoral guna mendorong penurunan ICOR ke target nasional 4,4.
*   **Dampak Terukur (Gemastik Pitch):**
    *   Mendorong efisiensi perencanaan anggaran negara sebesar 5-10%.
    *   Mencegah *overshoot* anggaran di tingkat daerah/kementerian melalui sistem *early warning* defisit.
