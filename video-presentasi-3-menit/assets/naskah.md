# Naskah Video Presentasi Verifin
## PROPOSAL GEMASTIK XIX 2026
### Divisi VIII — Pengembangan Perangkat Lunak
### Tim Three Achilles | Universitas Gadjah Mada

---

## Identitas Tim & Dosen Pembimbing

- **Hafidz Rizqullah Prasetya** — 24/535493/SV/24243 (Ketua Tim / Machine Learning & OSINT Engine)
- **Matthew Hayunaji Priantara** — 24/536179/SV/24400 (Anggota 1 / Backend & Graph Architecture)
- **Akmal Manggala Putra** — 24/536182/SV/24402 (Anggota 2 / Frontend & UI/UX System)
- **Dosen Pembimbing:** Dr.Eng. Ir. Ganjar Alfian, S.T., M.Eng. (NIP. 11198701202201101)

---

## Pembagian Peran & Alokasi Waktu

| Bagian | Pembicara | Slide | Estimasi Waktu |
| --- | --- | --- | --- |
| **Pembukaan, Urgensi Masalah, & Solusi** | Akmal Manggala Putra | Slide 1 – 4 | ~1 Menit 20 Detik |
| **Pipeline Analisis & Ekstraksi Data** | Matthew Hayunaji Priantara | Slide 5 – 6 | ~50 Detik |
| **Hasil Uji Coba & Deteksi Risiko XAI** | Matthew Hayunaji Priantara | Slide 7 – 8 | ~1 Menit 10 Detik |
| **Tech Stack, Dampak, Journey, & Penutup** | Hafidz Rizqullah Prasetya | Slide 9 – 12 | ~1 Menit 40 Detik |
| **Total Durasi Target** | **Tim Three Achilles** | **12 Slide** | **~5 Menit** |

---

## Naskah Narasi per Slide

### Slide 1 — Judul & Identitas Tim (Akmal)
> "Halo, kami dari Tim Three Achilles, Universitas Gadjah Mada. 
> 
> Mempersembahkan **Verifin: Explainable AI-powered Decision Support System untuk Verifikasi Lowongan Kerja Berbasis Bukti OSINT**.
> 
> Fokus utama kami adalah menghadirkan infrastruktur kepercayaan rekrutmen proaktif, yang melindungi pencari kerja Indonesia dari ancaman penipuan digital sebelum mereka mengirim data sensitif, menghubungi perekrut, ataupun mentransfer biaya."

---

### Slide 2 — Realita Pencari Kerja & Penipuan Digital (Akmal)
> "Berdasarkan data BPS Februari 2025, angka pengangguran terbuka di Indonesia mencapai **7,28 juta jiwa** atau TPT 4,76%. Desakan ekonomi yang tinggi ini dimanfaatkan oleh sindikat kejahatan siber.
> 
> Riset GASA dan Mastercard 2024 mencatat bahwa **49% korban penipuan digital terekspos modus lowongan kerja palsu**, dari total estimasi kerugian nasional sebesar **Rp 49 Triliun**. Lebih memprihatinkan lagi, Kemenlu RI mencatat lebih dari **3.300 WNI berhasil diselamatkan dari sindikat online scamming dan TPPO** di Asia Tenggara.
> 
> Modus yang marak di Indonesia meliputi permintaan biaya tes atau seragam ke rekening pribadi, janji gaji fantastis belasan juta tanpa syarat keahlian, proses lamaran hanya melalui WhatsApp, serta pemaksaan kirim foto KTP sejak awal."

---

### Slide 3 — Akar Masalah: Kesenjangan Informasi (Akmal)
> "Akar utama dari kerentanan ini adalah *Information Asymmetry* atau kesenjangan informasi. Pencari kerja di kanal informal dipaksa mengambil keputusan krusial dengan informasi yang sangat minim.
> 
> Solusi eksisting di Indonesia saat ini bersifat reaktif, pasif, atau berbayar, dan belum ada alat verifikasi terpadu tepat pada titik penerimaan tawaran kerja.
> 
> Inilah yang menjadi fokus Verifin: menjembatani kesenjangan informasi tersebut dengan melakukan investigasi otomatis dan komprehensif atas nama pengguna."

---

### Slide 4 — Solusi Verifin: Tahu Sebelum Kamu Melamar (Akmal)
> "Verifin mengusung prinsip utama: **'Tahu Sebelum Kamu Melamar'**.
> 
> Solusi kami dibangun di atas tiga pilar kokoh:
> 1. **Multichannel Input**: Mendukung 3 format input sekaligus—teks broadcast, gambar poster lowongan melalui OCR, atau tautan URL web.
> 2. **Automated OSINT Multi-Sumber**: Investigasi otomatis secara paralel terhadap DNS/Whois domain, reputasi telepon, metasearch, dan validasi lokasi geospasial.
> 3. **Explainable AI & Fraud Graph**: Bukan sekadar kotak hitam (*black-box*), melainkan sistem pendukung keputusan yang menyajikan rincian kontribusi bukti aditif serta pemetaan jaringan sindikat."

---

### Slide 5 — 4 Tahap Pipeline Analisis Berlapis (Matthew)
> "Sistem Verifin memproses lowongan melalui empat lapisan analisis yang saling terintegrasi:
> 
> 1. **Tahap 1 — Ekstraksi Entitas:** NER hibrida memadukan regex presisi tinggi dengan pemahaman semantik LLM.
> 2. **Tahap 2 — Investigasi OSINT Multi-Sumber:** Melakukan probe paralel ke Whois, reputasi nomor telepon, SearXNG, dan OpenStreetMap.
> 3. **Tahap 3 — Sinyal Perilaku & Fraud Graph:** Mengevaluasi pola psikologis teks sekaligus memetakan relasi entitas berulang menggunakan NetworkX.
> 4. **Tahap 4 — LLM Reasoning & XAI:** Sintesis verdict deterministik anti-halusinasi dengan perhitungan skor risiko terukur 0 hingga 100."

---

### Slide 6 — Layer 1: Named Entity Recognition Hibrida (Matthew)
> "Pada slide ini, kita melihat bagaimana teks atau poster OCR yang tidak terstruktur diekstraksi secara presisi.
> 
> Modul Regex deterministik bertugas mengekstrak entitas berpola stabil seperti nomor telepon dan surel dengan akurasi 100%. Sementara itu, model bahasa menangkap entitas semantik seperti nama perusahaan, rentang gaji, dan lokasi.
> 
> Jika terjadi kendala pada model bahasa, sistem secara otomatis menerapkan *graceful fallback* ke modul regex struktural."

---

### Slide 7 — Validasi Tiga Kanal Input & Kasus Uji (Matthew)
> "Kami telah memvalidasi sistem pada tiga kanal input serta satu kasus negatif nyata:
> 
> - **The Biker Shop (Input Teks):** Memperoleh skor 10 dari 100 dengan verdict **AMAN**, didukung domain aktif ber-SSL dan alamat bisnis terdaftar di peta.
> - **VinFast Yogyakarta (Input Poster OCR):** Memperoleh skor 48 dengan verdict **WASPADA**, karena memakai kontak surel gratisan dan alamat informal.
> - **PT SISI (Input URL):** Memperoleh skor 15 dengan verdict **AMAN**, terbukti anak usaha BUMN dengan domain korporat resmi.
> - **Scam Admin Online WFH (Kasus Negatif):** Memperoleh skor 95 dengan verdict **BAHAYA**, akibat adanya permintaan biaya deposit, foto KTP, gaji tidak wajar, dan perusahaan phantom."

---

### Slide 8 — Layer 4: Explainable AI & Komposisi Risiko (Matthew)
> "Mengapa lowongan penipuan tadi terdeteksi BAHAYA? Verifin memberikan transparansi penuh melalui Explainable AI.
> 
> Setiap faktor risiko dihitung secara aditif:
> - Permintaan biaya menyumbang **+35 poin**
> - Permintaan dokumen KTP menyumbang **+25 poin**
> - Gaji tidak realistis menyumbang **+20 poin**
> - Kontak anonim menyumbang **+15 poin**
> - Perusahaan phantom menyumbang **+10 poin**
> 
> Melalui formula $S_{\text{risiko}} = S_{\text{dasar}} (12) + \sum \phi_i$, total akumulasi 117 dibatasi pada skor maksimal **95/100 (BAHAYA)**. Pengguna dapat memahami secara persis mengapa lowongan tersebut berbahaya."

---

### Slide 9 — Technology Stack & Engineering (Hafidz)
> "Arsitektur Verifin dibangun dengan standar *production-ready*:
> 
> - **Frontend Layer:** Next.js 14 App Router, React 18, Tailwind CSS, dan Vis.js untuk visualisasi graf jaringan interaktif.
> - **Backend Services:** FastAPI berbasis Python 3.11 yang asinkron, didukung validasi Pydantic V2.
> - **AI & NLP Engine:** PaddleOCR dengan pra-pemrosesan OpenCV CLAHE, Cloud LLM reasoning bersuhu nol, dan engine XAI aditif.
> - **OSINT & Data Layer:** Basis data PostgreSQL Supabase, Fraud Graph NetworkX, python-whois, SearXNG metasearch, dan Nominatim OpenStreetMap."

---

### Slide 10 — Estimasi Dampak Kuantitatif & Nilai Sistem (Hafidz)
> "Dampak yang dihadirkan Verifin berfokus pada efisiensi dan demokratisasi perlindungan tenaga kerja:
> 
> - Layanan dasar verifikasi disediakan **100% Gratis** tanpa *paywall*.
> - Analisis end-to-end menyeluruh selesai dalam waktu **kurang dari 2 menit**.
> - Mendukung **3 format input** dengan transparansi penuh XAI dari **10+ sumber investigasi**.
> - Didukung rencana integrasi bersama **UGM Career** untuk melindungi ribuan lulusan baru sekaligus memperkuat *fraud graph* secara berkelanjutan."

---

### Slide 11 — User Journey: Mudah, Cepat, & Transparan (Hafidz)
> "Pengalaman pengguna dirancang sangat sederhana dalam 5 langkah intuitif:
> 
> Mulai dari mengakses aplikasi langsung tanpa wajib registrasi akun, menempelkan teks, mengunggah poster, atau memasukkan link, memantau modal progres bertahap, mengaudit rincian bukti dan skor risiko, hingga mengambil keputusan yang aman untuk melanjutkan atau menghindari lowongan."

---

### Slide 12 — Penutup (Hafidz / Bersama)
> "Melalui Verifin, kami ingin memastikan setiap pencari kerja di Indonesia memiliki perlindungan yang tangguh: **Tahu Sebelum Kamu Melamar**.
> 
> Kami dari Tim Three Achilles, Universitas Gadjah Mada. Terima kasih atas perhatian Dewan Juri GEMASTIK XIX 2026."

---

## Petunjuk Praktis Rekaman Video
1. **Durasi Total:** 4 menit 45 detik hingga 5 menit 15 detik.
2. **Tempo Bicara:** Tegas, lugas, artikulatif, dan profesional.
3. **Penekanan Intonasi:** Beri penekanan khusus pada angka statistik kunci (7,28 Juta, 49%, Rp 49 Triliun, 95/100, <2 Menit) dan formula XAI aditif.
4. **Navigasi:** Gunakan tombol panah kanan/kiri pada keyboard untuk perpindahan slide yang mulus saat perekaman layar.
