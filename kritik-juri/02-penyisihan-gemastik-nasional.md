# Lembar Penilaian & Komentar Dewan Juri Babak Penyisihan Nasional GEMASTIK XIX 2026
**Divisi VIII — Pengembangan Perangkat Lunak (PPL)**  
**Karya:** Verifin — *Explainable AI-powered Decision Support System untuk Verifikasi Lowongan Kerja Berbasis Bukti OSINT*  
**Tim:** Three Achilles (Universitas Gadjah Mada)  
**Status Hasil:** **LOLOS KE BABAK FINAL (TOP 20 NASIONAL)**

---

## Rekapitulasi Skor & Evaluasi Rubrik Resmi

| No | Kriteria Penilaian | Skor (Skala 1–7) | Catatan & Komentar Evaluasi Dewan Juri |
| :---: | :--- | :---: | :--- |
| **1** | **Aspek Inovasi** | **5 / 7** | Deteksi lowongan palsu menggunakan NLP/AI dan pemberian penjelasan bukan konsep baru; penelitian terbaru bahkan sudah membahas klasifikasi lowongan abnormal dengan penjelasan. Pemeriksaan reputasi URL juga telah tersedia melalui layanan seperti Google Safe Browsing. Pembeda Verifin terletak pada integrasi tiga input—teks, poster OCR, dan URL—dengan OSINT domain, nomor telepon, alamat, jejak perusahaan, serta Fraud Network Graph dalam konteks Indonesia. Ini merupakan inovasi integratif yang kuat, tetapi belum merupakan metode deteksi baru. *(Referensi: Riset deteksi lowongan abnormal · Google Safe Browsing)* |
| **2** | **Dampak dan Sustainability** | **5 / 7** | Potensi dampaknya tinggi karena sistem bekerja sebelum pengguna memberikan uang atau data pribadi. Strategi integrasi dengan pusat karier dan penyediaan API juga cukup masuk akal. Namun, proyeksi dampak masih berupa simulasi, bukan hasil pilot. Keberlanjutan bergantung pada biaya LLM, kestabilan sumber OSINT, moderasi laporan komunitas, dan risiko pencemaran nama perusahaan akibat laporan atau klasifikasi yang keliru. |
| **3** | **Desain Antarmuka, Usability, dan UX** | **5 / 7** | Antarmuka terlihat rapi dan cukup mudah dipahami. Tiga kanal input, indikator proses, warna verdict, rincian bukti, serta kontribusi setiap faktor mendukung pengambilan keputusan pengguna awam. Kekurangannya, belum ada pengujian usability aktual, SUS, aksesibilitas, atau pengujian apakah pengguna memahami bahwa label “AMAN” bukan jaminan legalitas. |
| **4** | **Proses Pengembangan Perangkat Lunak** | **5 / 7** | Scrum, pembagian sprint, arsitektur berlapis, dokumentasi API, deployment, dan 126 kasus pengujian menunjukkan proses yang cukup serius. Akan tetapi, sebagian pengujian memakai data yang kecil dan terkurasi; pengujian end-to-end hanya empat skenario. Klaim pass rate 100% belum menggantikan evaluasi pada dataset independen, pengujian adversarial, serta pengukuran false positive dan false negative pada kasus nyata. |
| **5** | **Kesesuaian Ide dan Perangkat Lunak** | **6 / 7** | Produk yang ditampilkan sangat sesuai dengan ide: input teks, OCR poster, analisis URL, OSINT, skor risiko, penjelasan bukti, laporan komunitas, riwayat, dan graf entitas telah direpresentasikan dalam aplikasi. Nilai belum 7 karena terdapat inkonsistensi ambang verdict: proposal menggunakan 0–39/40–74/75–100, sedangkan dokumen teknis menyebut ≤25/26–60/≥61. Perlindungan PII sebelum dikirim ke LLM juga masih berupa roadmap. |
| **6** | **Urgensi Masalah** | **6 / 7** | Penipuan lowongan dapat menimbulkan kerugian finansial, pencurian identitas, dan risiko perdagangan orang. Kebutuhan verifikasi sebelum pengguna merespons sangat relevan; FTC juga merekomendasikan pemeriksaan situs resmi perusahaan dan pencarian reputasi sebelum memberikan data atau uang. Skor belum 7 karena sistem hanya memberi dukungan keputusan dan tidak dapat memastikan legalitas ataupun menggantikan verifikasi institusional. *(Referensi: Panduan resmi FTC tentang penipuan kerja)* |
| **TOTAL** | **Skor Komulatif** | **32 / 42** | **Komentar Umum Penutup Juri:**<br>• **Juri A:** *"Idenya menarik dan seharusnya berguna untuk banyak pencari kerja."*<br>• **Juri B:** *(Mencatat rincian kelemahan metodologis pengujian dan konsistensi ambang batas)* |

---

## Poin Kunci Kelemahan yang Menahan Nilai Sempurna (7/7):

1. **Inovasi:** Belum di-frame sebagai *integrative innovation* yang mengungguli *single-point detector* (seperti Google Safe Browsing / spam filter murni).
2. **Dampak/Pilot:** Masih simulasi teoretis, belum ada data uji coba terbatas pengguna (*pilot test* riil).
3. **Risiko Hukum & Biaya:** Pertanyaan juri seputar biaya operasional LLM, reliabilitas OSINT pihak ketiga, dan risiko tuntutan pencemaran nama baik (*false positive fraud*).
4. **UX & Usability:** Belum ada skor SUS (*System Usability Scale*), uji aksesibilitas (WCAG), dan disclaimer edukatif hukum pada label "AMAN".
5. **Kualitas Pengujian:** Pengujian belum adversarial, dataset pengujian masih terkurasi kecil, belum ada metrik FP/FN pada dataset terbuka independen, E2E terlalu sedikit (hanya 4 skenario).
6. **Inkonsistensi Teknis & PII:** Inkonsistensi ambang verdict (`0–39/40–74/75–100` vs `≤25/26–60/≥61`) serta perlindungan data pribadi (PII anonymization/masking) sebelum diteruskan ke LLM masih berstatus roadmap/belum diterapkan di kode.
