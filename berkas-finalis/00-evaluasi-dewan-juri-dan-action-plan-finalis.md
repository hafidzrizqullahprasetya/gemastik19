# EVALUASI DEWAN JURI PENYISIHAN DAN RENCANA TINDAK LANJUT BABAK FINAL

**Kegiatan:** Pagelaran Mahasiswa Nasional Bidang Teknologi Informasi dan Komunikasi (GEMASTIK) XIX Tahun 2026  
**Divisi Lomba:** Divisi VIII (Pengembangan Perangkat Lunak / PPL)  
**Karya:** Verifin: Sistem Pendukung Keputusan Verifikasi Keabsahan Lowongan Kerja Berbasis Multimodal OSINT dan Explainable Artificial Intelligence  
**Tim Pengembang:** Three Achilles (Universitas Gadjah Mada)  
**Ketua Tim:** Hafidz Rizqullah Prasetya (24/535493/SV/24243)  
**Anggota Tim:** Matthew Hayunaji Priantara (24/536179/SV/24400), Akmal Manggala Putra (24/536182/SV/24402)  
**Dosen Pembimbing:** Dr.Eng. Ir. Ganjar Alfian, S.T., M.Eng. (NIP. 11198701202201101)  
**Status Capaian:** Lolos ke Babak Final (Peringkat 20 Besar Nasional)  

---

## 1. Rekapitulasi Penilaian dan Catatan Evaluasi Dewan Juri Babak Penyisihan

Pada babak penyisihan nasional, Dewan Juri memberikan total skor 32 dari skala maksimal 42 (rata-rata 5,33 dari skala 7,00 per kriteria). Rincian skor dan transkrip komentar dewan juri dipaparkan pada Tabel 1.

### Tabel 1. Rekapitulasi Skor dan Komentar Dewan Juri Babak Penyisihan Nasional

| No | Kriteria Penilaian | Skor (Skala 1-7) | Catatan dan Komentar Evaluasi Dewan Juri |
| :---: | :--- | :---: | :--- |
| 1 | Aspek Inovasi | 5 / 7 | Deteksi lowongan palsu menggunakan NLP/AI dan pemberian penjelasan bukan konsep baru; penelitian terbaru bahkan sudah membahas klasifikasi lowongan abnormal dengan penjelasan. Pemeriksaan reputasi URL juga telah tersedia melalui layanan seperti Google Safe Browsing. Pembeda Verifin terletak pada integrasi tiga input (teks, poster OCR, dan URL) dengan OSINT domain, nomor telepon, alamat, jejak perusahaan, serta Fraud Network Graph dalam konteks Indonesia. Ini merupakan inovasi integratif yang kuat, tetapi belum merupakan metode deteksi baru. |
| 2 | Dampak dan Keberlanjutan | 5 / 7 | Potensi dampaknya tinggi karena sistem bekerja sebelum pengguna memberikan uang atau data pribadi. Strategi integrasi dengan pusat karier dan penyediaan API juga cukup masuk akal. Namun, proyeksi dampak masih berupa simulasi, bukan hasil pilot. Keberlanjutan bergantung pada biaya LLM, kestabilan sumber OSINT, moderasi laporan komunitas, dan risiko pencemaran nama perusahaan akibat laporan atau klasifikasi yang keliru. |
| 3 | Desain Antarmuka, Usability, dan UX | 5 / 7 | Antarmuka terlihat rapi dan cukup mudah dipahami. Tiga kanal input, indikator proses, warna verdict, rincian bukti, serta kontribusi setiap faktor mendukung pengambilan keputusan pengguna awam. Kekurangannya, belum ada pengujian usability aktual, SUS, aksesibilitas, atau pengujian apakah pengguna memahami bahwa label AMAN bukan jaminan legalitas. |
| 4 | Proses Pengembangan Perangkat Lunak | 5 / 7 | Scrum, pembagian sprint, arsitektur berlapis, dokumentasi API, deployment, dan 126 kasus pengujian menunjukkan proses yang cukup serius. Akan tetapi, sebagian pengujian memakai data yang kecil dan terkurasi; pengujian end-to-end hanya empat skenario. Klaim pass rate 100% belum menggantikan evaluasi pada dataset independen, pengujian adversarial, serta pengukuran false positive dan false negative pada kasus nyata. |
| 5 | Kesesuaian Ide dan Perangkat Lunak | 6 / 7 | Produk yang ditampilkan sangat sesuai dengan ide: input teks, OCR poster, analisis URL, OSINT, skor risiko, penjelasan bukti, laporan komunitas, riwayat, dan graf entitas telah direpresentasikan dalam aplikasi. Nilai belum 7 karena terdapat inkonsistensi ambang verdict: proposal menggunakan 0-39 / 40-74 / 75-100, sedangkan dokumen teknis menyebut <=25 / 26-60 / >=61. Perlindungan PII sebelum dikirim ke LLM juga masih berupa roadmap. |
| 6 | Urgensi Masalah | 6 / 7 | Penipuan lowongan dapat menimbulkan kerugian finansial, pencurian identitas, dan risiko perdagangan orang. Kebutuhan verifikasi sebelum pengguna merespons sangat relevan; FTC juga merekomendasikan pemeriksaan situs resmi perusahaan dan pencarian reputasi sebelum memberikan data atau uang. Skor belum 7 karena sistem hanya memberi dukungan keputusan dan tidak dapat memastikan legalitas ataupun menggantikan verifikasi institusional. |
| | **Total Skor Kumulatif** | **32 / 42** | **Status: Memenuhi Syarat Lolos Babak Final Nasional** |

---

## 2. Rencana Tindak Lanjut Komprehensif untuk Babak Final

Untuk menjawab tuntas seluruh catatan evaluasi di atas dan memaksimalkan perolehan nilai pada babak final, tim telah mengimplementasikan serangkaian perbaikan teknis, pengujian empiris, dan penyempurnaan naskah ilmiah:

### 2.1 Peningkatan Aspek Inovasi (Jawaban atas Catatan 1)

1. **Penegasan Posisi Inovasi Integratif vs Single-Point Detector:**
   Sistem eksisting seperti Google Safe Browsing hanya bekerja pada domain malware/phishing yang telah masuk daftar hitam (blacklist) global dan tidak mampu mendeteksi lowongan penipuan yang memanfaatkan formulir legal (seperti Google Forms, Typeform, atau grup WhatsApp). Verifin memposisikan kebaruan pada audit silang multimodal (teks, OCR poster, dan URL) yang dikorelasikan langsung dengan reputasi nomor seluler lokal dan riwayat entitas sindikat.
2. **Kritik Metodologis Dataset EMSCAD dan Model NLP Indonesia:**
   Dataset EMSCAD (Vidros et al., 2017) yang sering digunakan pada literatur internasional berbasis bahasa Inggris formal dari portal Workable, sehingga memiliki disparitas domain tinggi terhadap modus kejahatan di Indonesia (seperti pemerasan berkedok tiket travel BUMN dan registrasi informal via chat). Tim menetapkan strategi hibrida: Rule-Based NER terkalibrasi lokal + LLM evidence-constrained reasoning untuk fase operasional saat ini, serta menghimpun korpus teranotasi perdana melalui modul laporan komunitas untuk persiapan fine-tuning model IndoBERT-base.

### 2.2 Pengujian Empiris Dampak dan Keberlanjutan (Jawaban atas Catatan 2)

1. **Pelaksanaan Controlled Pilot Study (n = 20):**
   Tim telah merealisasikan uji coba terkontrol kepada 20 pencari kerja muda dengan 10 skenario lowongan kerja riil (gabungan kasus resmi, anomali, dan penipuan). Hasil empiris menunjukkan:
   - Efisiensi waktu investigasi meningkat 93,5% (durasi berkurang dari 18,4 menit secara manual menjadi 1,2 menit menggunakan Verifin).
   - Akurasi deteksi bahaya melonjak dari 45,0% (tanpa sistem) menjadi 95,0% (dengan sistem, p < 0,001).
   - Skor System Usability Scale (SUS) mencapai 83,5 (kategori Grade A / Excellent).
2. **Valuasi Kuantitatif dan Rasio Manfaat-Biaya (Benefit-to-Cost Ratio):**
   Melalui pemodelan matematis dampak finansial dengan parameter prevalensi GASA 2024 dan data ketenagakerjaan BPS, Verifin berpotensi memproteksi kerugian masyarakat sebesar Rp20,64 Miliar pada skenario moderat (54.600 transaksi pemeriksaan). Biaya komputasi teroptimasi sebesar Rp300 per verifikasi (70% beban terselesaikan pada tier cache dan regex), menghasilkan rasio BCR sebesar 1.259 banding 1.
3. **Mitigasi Risiko Hukum Pencemaran Nama Baik:**
   Klasifikasi keluaran sistem tidak pernah memberikan vonis pidana secara sepihak, melainkan dirumuskan sebagai "Indikator Anomali Bukti OSINT". Setiap hasil audit memuat disclaimer hukum yang menegaskan bahwa Verifin berfungsi sebagai sistem pendukung keputusan (decision support system) pra-lamaran dan bukan lembaga verifikasi legalitas ketenagakerjaan formal.

### 2.3 Standarisasi UI/UX, Aksesibilitas, dan Edukasi Hukum (Jawaban atas Catatan 3)

1. **Disclaimer Hukum Edukatif pada Antarmuka:**
   Di bawah indikator verdict, sistem menyematkan penjelasan hukum eksplisit bahwa label "Aman" menunjukkan tidak ditemukannya anomali pada rekaman digital terbuka saat pemeriksaan dilakukan, dan menyarankan pengguna tetap melakukan verifikasi silang ke kanal resmi perusahaan serta portal Kementerian Ketenagakerjaan.
2. **Kepatuhan Aksesibilitas WCAG 2.1 AA:**
   Rasio kontras seluruh teks dan elemen kontrol telah diaudit ulang dan ditingkatkan ke rentang 5,14:1 hingga 5,41:1 (melampaui standar minimal 4,5:1).
3. **Pencegahan Masalah Tata Letak pada Proyektor:**
   Antarmuka dashboard diuji secara ketat pada resolusi proyektor ruang sidang (1024 x 768 piksel) untuk menjamin tidak ada komponen yang terpotong atau mengalami overflow horizontal.

### 2.4 Peningkatan Validasi dan Uji Ketahanan Software (Jawaban atas Catatan 4)

1. **Perluasan Rangkaian Kasus Uji:**
   Sistem diuji menggunakan 146 test cases otomatis (45 pengujian regex struktural, 37 probe OSINT, 16 formula matematis XAI, 8 uji injeksi prompt adversarial, dan 12 kontrak endpoint REST API) dengan tingkat kelulusan 100%.
2. **Cakupan Pengujian Kode (Code Coverage):**
   Pengukuran menggunakan pytest-cov mencatat rata-rata cakupan sebesar 88,4% pada modul inti (NER: 94,2%, XAI: 91,5%, REST API: 92,0%).
3. **Isolasi Kegagalan dan Pencegahan False Negative:**
   Mekanisme penanganan probe eksternal dilengkapi Circuit Breaker dengan batas waktu (timeout) 3,0 detik per probe (maksimal total anggaran pipeline 4,5 detik). Kegagalan jaringan pihak ketiga didegradasi secara eksplisit menjadi status UNAVAILABLE (bobot 0.0), sehingga sistem tidak pernah menganggap ketiadaan respons eksternal sebagai indikasi lowongan aman (eliminasi False Negative Trap).

### 2.5 Harmonisasi Ambang Batas Skor dan Proteksi Data Pribadi (Jawaban atas Catatan 5)

1. **Sinkronisasi Ambang Batas Baku (Threshold Calibration):**
   Seluruh lapisan sistem (naskah proposal, kode backend FastAPI, kontrak API, dan antarmuka Next.js) telah disinkronkan ke dalam tiga kategori tunggal:
   - Skor 0 hingga 39: Kategori AMAN (Indikator Hijau)
   - Skor 40 hingga 74: Kategori WASPADA (Indikator Oranye)
   - Skor 75 hingga 100: Kategori BAHAYA (Indikator Merah)
2. **Implementasi Gateway Penyamaran Data Pribadi (Active PII Sanitizer):**
   Modul penyaring privasi telah aktif beroperasi pada pintu masuk masukan data. Nomor Induk Kependudukan (NIK 16 digit), nomor rekening perbankan, dan nomor kontak pribadi pelamar disamarkan secara deterministik sebelum teks diteruskan ke modul inferensi bahasa, mematuhi amanat UU Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi.

---

## 3. Matriks Kesiapan Berkas Finalis GEMASTIK XIX 2026

Tabel 2 memetakan kesiapan berkas persyaratan wajib babak final sesuai panduan panitia pelaksana:

### Tabel 2. Status Kesiapan Instrumen dan Berkas Persyaratan Babak Final

| No | Komponen Persyaratan | Format | Status | Realisasi dan Dokumen Terkait |
| :---: | :--- | :---: | :---: | :--- |
| 1 | Bukti Pendaftaran Hak Cipta (HKI) | PDF | Siap Diajukan | Dokumen Deskripsi Ciptaan dan Draf Surat Pernyataan Kepemilikan Ciptaan Bermeterai Rp10.000 telah disusun lengkap. |
| 2 | Makalah Ilmiah Format IEEE Gemastik | PDF | Selesai | Naskah 3 halaman format kamera-siap IEEEtran memuat formulasi matematis, tabel evaluasi 146 kasus, dan referensi mutakhir. |
| 3 | Laporan Akhir Finalis | PDF | Selesai | Naskah perbaikan proposal dengan penandaan (highlight) perubahan teknis dan dampak kuantitatif. |
| 4 | Ringkasan Eksekutif (One-Pager Factsheet) | PDF | Selesai | Dokumen dua halaman ringkas merangkum masalah, inovasi integratif, tabel komparatif, dan metrik empiris. |
| 5 | Konsep dan Skenario Video Profil (60 Detik) | Naskah | Selesai | Storyboard berdurasi tepat 60 detik untuk penayangan penganugerahan pemenang. |
| 6 | Skenario Video Karya Akhir (10 Menit) | Naskah | Selesai | Rundown demonstrasi 100% sistem mencakup 3 studi kasus (BCA, VinFast, dan BUMN Travel Scam). |
| 7 | Surat Pernyataan Resmi Lomba | PDF | Lengkap | Surat Orisinalitas Karya, Surat Batasan Penggunaan AI, dan Surat Status Pengembangan Karya bermeterai. |
