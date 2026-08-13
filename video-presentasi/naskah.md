# Naskah Voiceover Video Presentasi Verifin — GEMASTIK XIX 2026

**Divisi:** Pengembangan Perangkat Lunak  
**Judul Karya:** Verifin: Explainable AI-powered Decision Support System untuk Verifikasi Awal Tawaran Lowongan Kerja pada Kanal Digital Informal  
**Tim:** Three Achilles — Universitas Gadjah Mada  
**Target Durasi Maksimal:** 3 Menit (180 Detik)  
**Estimasi Durasi Naskah:** ~170 Detik (~2 Menit 50 Detik)  

---

## Pembagian Peran & Alur Waktu

| Speaker | Anggota Tim | NIM | Peran & Tanggung Jawab | Slide | Alokasi Waktu |
|---|---|---|---|---|---|
| **Speaker 1** | Akmal Manggala P. | 24/536182/SV/24402 | Pembuka, Profil Tim, Urgensi Data, Peta Modus, Skenario Persona, Solusi Komparatif | 1 – 6 | 00:00 – 01:05 (65 dtk) |
| **Speaker 2** | Hafidz Rizqullah P. | 24/535493/SV/24243 | Metodologi Scrum, Pipeline 4-Layer, Benchmark NER, OSINT Deep-Dive, XAI Scoring | 7 – 11 | 01:05 – 02:00 (55 dtk) |
| **Speaker 3** | Matthew Hayunaji P. | 24/536179/SV/24400 | Demo Form Multi-Kanal, Hasil Uji Kasus Nyata, Dampak Kuantitatif, Penutup | 12 – 15 | 02:00 – 02:50 (50 dtk) |

---

## Naskah Voiceover Per Slide

### [00:00 – 00:10] Slide 1: Judul & Pembuka (Akmal)
> **[Voiceover Akmal]:**  
> "Halo Dewan Juri GEMASTIK XIX 2026. Kami dari Tim Three Achilles Universitas Gadjah Mada mempersembahkan **Verifin**: *Explainable AI-powered Decision Support System* untuk verifikasi awal tawaran lowongan kerja pada kanal digital informal."

---

### [00:10 – 00:20] Slide 2: Profil Tim Tiga Achilles (Akmal)
> **[Voiceover Akmal]:**  
> "Tim kami beranggotakan tiga mahasiswa TRPL Sekolah Vokasi UGM: Hafidz Rizqullah sebagai *Tech Lead & AI Engineer*, saya Akmal Manggala sebagai *Backend & OSINT Engineer*, dan Matthew Hayunaji sebagai *Frontend Engineer*, dibimbing oleh Dr.Eng. Ir. Ganjar Alfian."

---

### [00:20 – 00:32] Slide 3: Urgensi Masalah & Fakta Data Nasional (Akmal)
> **[Voiceover Akmal]:**  
> "Data BPS 2025 mencatat 7,28 juta pengangguran terbuka di Indonesia. Riset GASA mencatat 49% korban penipuan digital terpapar modus lowongan kerja dengan kerugian nasional Rp49 Triliun. Bahkan, Kemenlu mencatat 3.300 lebih WNI diselamatkan dari TPPO akibat jebakan iklan kerja daring palsu."

---

### [00:32 – 00:43] Slide 4: Taksonomi 4 Modus & Distribusi Penipuan (Akmal)
> **[Voiceover Akmal]:**  
> "Penipuan rekrutmen mendominasi kejahatan digital dengan empat modus utama: pungutan biaya tes awal, pencurian identitas KTP untuk pinjaman online ilegal, tautan *Google Form phishing*, hingga sindikat rekrutmen kerja paksa transnasional."

---

### [00:43 – 00:54] Slide 5: Skenario Persona & Information Asymmetry (Akmal)
> **[Voiceover Akmal]:**  
> "Kanal informal memicu *information asymmetry* yang parah. Seperti persona Andri dan Sari, pencari kerja dipaksa mengambil keputusan berisiko tanpa kemampuan memverifikasi legalitas perusahaan maupun tautan formulir pendaftaran."

---

### [00:54 – 01:05] Slide 6: Posisi Solusi Verifin vs Solusi Eksisting (Akmal)
> **[Voiceover Akmal]:**  
> "Berbeda dengan *job board* yang tertutup, medsos yang reaktif, atau cek nomor yang terbatas, Verifin hadir secara **proaktif**, multi-kanal, mengintegrasikan OSINT multi-sumber, dan didukung *Explainable AI* yang transparan dan dapat diaudit."

---

### [01:05 – 01:16] Slide 7: Metodologi Pengembangan Agile Scrum (Hafidz)
> **[Voiceover Hafidz]:**  
> "Verifin dikembangkan dengan **Agile Scrum 5 Sprint** selama 10 minggu, berlandaskan 5 prinsip rekayasa: *API-First Architecture*, *Test-Driven Development*, *Security by Design*, *Explainability-First*, dan *Progressive Enhancement*."

---

### [01:16 – 01:28] Slide 8: Arsitektur Pipeline 4-Layer (Hafidz)
> **[Voiceover Hafidz]:**  
> "Arsitektur Verifin mengalirkan data melalui **Pipeline 4-Layer**: Layer 1 ekstraksi entitas hibrida regex dan Gemini semantik, Layer 2 probe OSINT paralel, Layer 3 penalaran berbasis bukti LLM dengan *zero-hallucination guard*, dan Layer 4 *XAI Explainer Engine*."

---

### [01:28 – 01:40] Slide 9: Benchmark NER Hibrida & Latensi Pipeline (Hafidz)
> **[Voiceover Hafidz]:**  
> "Layer 1 NER Hibrida kami mencapai F1-Score **97,6%**, menggabungkan ketepatan regex deterministik dengan fleksibilitas semantik LLM. Melalui eksekusi paralel `asyncio.gather`, seluruh pipeline tuntas hanya dalam waktu rata-rata 4,5 detik."

---

### [01:40 – 01:50] Slide 10: Deep-Dive Investigasi OSINT Multi-Sumber (Hafidz)
> **[Voiceover Hafidz]:**  
> "Pada Layer OSINT, sistem memvalidasi usia domain Whois dan fallback Wayback Machine, mengecek reputasi nomor telepon via Kaspersky Who Calls, mengagregasi mesin pencari SearXNG, serta memetakan keterkaitan sindikat pada *Fraud Network Graph*."

---

### [01:50 – 02:00] Slide 11: Formula XAI Explainer & 3-Tingkat Verdict (Hafidz)
> **[Voiceover Hafidz]:**  
> "Dengan formula aditif $S_{\text{risiko}} = S_{\text{dasar}} + \sum \phi_i$ berbasis nilai Shapley, setiap bukti diberi bobot terkalibrasi untuk menghasilkan klasifikasi transparan: AMAN skor 0 hingga 39, WASPADA 40 hingga 74, dan BAHAYA 75 hingga 100."

---

### [02:00 – 02:12] Slide 12: Demo Antarmuka Form Multi-Kanal (Matthew)
> **[Voiceover Matthew]:**  
> "Antarmuka Verifin menyediakan tiga kanal input: *paste* teks pesan, unggah poster lowongan dengan ekstraksi otomatis PaddleOCR CLAHE, serta URL pendaftaran, disertai modal progres *real-time* yang transparan bagi pengguna."

---

### [02:12 – 02:24] Slide 13: Hasil Pengujian Nyata & Audit XAI (Matthew)
> **[Voiceover Matthew]:**  
> "Pada uji kasus penipuan broadcast Admin WFH, Verifin mendeteksi nomor terlapor, perusahaan fiktif, dan permintaan KTP di awal. Skor risiko 93 dengan status **BAHAYA** disajikan lengkap beserta rincian poin kontribusi tiap bukti faktual."

---

### [02:24 – 02:37] Slide 14: Community Monitoring & Proyeksi Dampak (Matthew)
> **[Voiceover Matthew]:**  
> "Melalui *Community Monitoring* dan *Fraud Network Graph*, setiap satu laporan terverifikasi melindungi ribuan pencari kerja lainnya. Verifin juga membangun dataset berlabel lowongan penipuan berbahasa Indonesia pertama untuk kemajuan riset NLP nasional."

---

### [02:37 – 02:50] Slide 15: Kesimpulan & Penutup (Matthew)
> **[Voiceover Matthew]:**  
> "Verifin mewujudkan rekayasa perangkat lunak yang berdampak, inklusif, dan berkelanjutan untuk melindungi masyarakat Indonesia dari kejahatan siber ketenagakerjaan. Terima kasih. Salam dari Tim Three Achilles Universitas Gadjah Mada!"

---

## Panduan Teknis Perekaman Layar

1. **Resolusi & Browser**: Buka [presentasi.html](file:///Users/fizualstd/Documents/GitHub/_LOMBA/gemastik19/video-presentasi/presentasi.html) di Google Chrome pada layar resolusi 1920x1080 Fullscreen (tekan tombol `F`).
2. **Navigasi Slider**: Gunakan tombol **`Arrow Right (→)`** atau **`Spasi`** untuk maju dan **`Arrow Left (←)`** untuk mundur. Animasi akan bergeser horizontal secara mulus (*smooth slider track*).
3. **Perekaman Audio**: Rekam suara menggunakan mikrofon berkualitas baik, ikuti alokasi durasi pada tabel di atas.
4. **Format Ekspor**: Render video dalam resolusi **1080p 60fps / 30fps (H.264 / AAC)** dengan durasi total di bawah 2 menit 55 detik.
