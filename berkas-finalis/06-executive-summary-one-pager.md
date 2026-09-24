# EXECUTIVE SUMMARY & FACTSHEET: VERIFIN

**Kegiatan:** GEMASTIK XIX 2026, Finalis Top 20 Nasional (Divisi VIII: Pengembangan Perangkat Lunak)  
**Tim Pengembang:** Three Achilles (Universitas Gadjah Mada)  
**Karya:** Verifin: Sistem Pendukung Keputusan Verifikasi Lowongan Kerja Berbasis Multimodal OSINT dan Explainable AI  
**Tagline:** Tahu Sebelum Kamu Melamar  
**Kontak Tim:** Hafidz Rizqullah P. (hafidzrizqullahprasetya@mail.ugm.ac.id) | Dosen Pembimbing: Dr.Eng. Ir. Ganjar Alfian, S.T., M.Eng.  

---

## 1. Urgensi Permasalahan dan Latar Belakang

* **Tingkat Pengangguran Terbuka (BPS Februari 2025):** Sebanyak 7,28 juta angkatan kerja aktif membutuhkan pekerjaan, menjadi kelompok rentan terhadap modus penipuan rekrutmen daring.
* **Kerugian Penipuan Digital (GASA & Mastercard 2024):** Kerugian akibat penipuan digital di Indonesia mencapai Rp49 Triliun, dengan 49% korban penipuan digital pernah terpapar iklan lowongan kerja fiktif.
* **Korban TPPO Siber Transnasional (Kemenlu RI 2024):** Lebih dari 3.300 WNI diselamatkan dari sindikat penipuan daring dan kerja paksa di kawasan Asia Tenggara yang bermula dari rekrutmen informal di media sosial.
* **Kesenjangan Informasi (Information Asymmetry):** Pencari kerja awam tidak memiliki alat verifikasi mandiri sebelum melamar; solusi penegakan hukum yang ada umumnya bersifat reaktif pasca-kejadian.

---

## 2. Inovasi Integratif dan Arsitektur Sistem

Verifin adalah sistem pendukung keputusan (Decision Support System) yang beroperasi sebelum pelamar mengirimkan dokumen pribadi (seperti KTP) atau melakukan transaksi keuangan:

```
[ KANAL MASUKAN ]              [ MESIN AUDIT OSINT & GRAF ]          [ PENJELASAN BUKTI (XAI) ]
1. Teks Percakapan / Chat  ->  - Audit Registrasi Domain WHOIS/RDAP  ->  Skor Risiko Terkalibrasi [0-100]
2. Citra Poster Lowongan   ->  - Verifikasi Rekaman DNS Mail Server  ->  - 0 hingga 39: AMAN
3. Alamat Tautan (URL)     ->  - Validasi Geospasial OpenStreetMap   ->  - 40 hingga 74: WASPADA
                               - Bipartite Fraud Network Graph           - 75 hingga 100: BAHAYA
```

### Empat Pilar Teknis Utama:
1. **Multimodal Data Ingestion:** Menerima teks pesan digital, berkas gambar (ekstraksi via PaddleOCR dan OpenCV CLAHE), serta tautan portal karier.
2. **Active PII Sanitizer:** Penyamaran otomatis NIK (16 digit), nomor rekening perbankan, dan data kontak sensitif sesuai UU Pelindungan Data Pribadi No. 27/2022.
3. **Bipartite Fraud Network Graph:** Pemodelan relasi heterogen berbasis NetworkX untuk membongkar sindikat yang mendaur ulang kontak atau rekening yang sama pada berbagai entitas perusahaan fiktif.
4. **Explainable AI Berbasis Bukti:** Transparansi perhitungan skor aditif dengan penjelasan kontribusi setiap bukti OSINT, menghindari kesimpulan spekulatif tanpa fakta digital.

---

## 3. Matriks Keunggulan Komparatif

### Tabel 1. Perbandingan Verifin terhadap Pendekatan Deteksi Konvensional

| Dimensi Evaluasi | Google Safe Browsing | Perangkat Lunak Antivirus | Filter Spam Teks | VERIFIN (Inovasi Integratif) |
| :--- | :---: | :---: | :---: | :---: |
| Kanal Masukan | Terbatas pada URL | Berkas dan URL | Terbatas pada Teks | Multimodal: Teks, Poster OCR, dan URL |
| Cakupan Deteksi | Domain Malware dan Phishing | Tanda Tangan Biner Malware | Pola Kata Kunci Teks | Investigasi Bukti Silang Multi-Sumber OSINT |
| Deteksi Form Gratisan Palsu | Tidak Terdeteksi (Domain Sah) | Tidak Terdeteksi | Terbatas pada Pola Teks | Terdeteksi via Keselarasan Kontak Korporat |
| Deteksi Sindikat Terorganisasi | Tidak Tersedia | Tidak Tersedia | Tidak Tersedia | Bipartite Fraud Network Graph (NetworkX) |
| Transparansi Keputusan (XAI) | Peringatan Biner | Kode Klasifikasi Virus | Label Kategori Spam | Rincian Bobot Kontribusi Bukti Aditif |
| Proteksi Privasi Pelamar | Tidak Tersedia | Tidak Tersedia | Tidak Tersedia | Active PII Sanitization Gateway |

---

## 4. Hasil Pengujian, Metrik Kualitas, dan Dampak Empiris

### A. Pengujian Rekayasa Perangkat Lunak
* **146 Test Cases (Pass Rate 100%):** Mencakup 45 uji regex terstruktur, 37 probe OSINT, 16 formula matematis XAI, 8 uji injeksi prompt adversarial, dan 12 kontrak endpoint REST API.
* **Cakupan Pengujian Kode (88,4% via pytest-cov):** Teruji pada modul inti (NER: 94,2%, XAI: 91,5%, REST API: 92,0%).
* **Ketahanan Sistem Asinkron:** Isolasi kegagalan dengan batas waktu (timeout) 3,0 detik per probe OSINT; degradasi terkelola ke status UNAVAILABLE (bobot risiko 0.0) untuk mencegah False Negative.

### B. Evaluasi Akurasi (Pengujian Buta pada 100 Sampel Kasus Riil)
* **Presisi:** 97,9% | **Recall:** 94,0% | **F1-Score:** 95,9% | **Akurasi Keseluruhan:** 96,0%.

### C. Controlled Pilot Study (20 Pengguna, 10 Skenario Riil)
* **Efisiensi Waktu Pemeriksaan:** Menurunkan durasi investigasi dari 18,4 menit (manual) menjadi 1,2 menit (Verifin), efisiensi sebesar 93,5%.
* **Peningkatan Akurasi Deteksi:** Akurasi mengenali lowongan berbahaya meningkat dari 45,0% menjadi 95,0% (p < 0,001).
* **System Usability Scale (SUS):** Memperoleh skor rata-rata 83,5 (kategori Grade A / Excellent).

### D. Valuasi Dampak Finansial dan Rasio Manfaat-Biaya
* **Potensi Proteksi Kerugian Finansial:** Rp20,64 Miliar pada skenario adopsi moderat (54.600 pemeriksaan tahunan).
* **Efisiensi Biaya Operasional:** Biaya komputasi sebesar Rp300 per pemeriksaan (70% kueri diselesaikan pada tier cache dan regex).
* **Benefit-to-Cost Ratio (BCR):** 1.259 banding 1 (setiap Rp1 biaya komputasi memproteksi potensi kerugian Rp1.259).

---

## 5. Rencana Hilirisasi dan Susunan Pengembang

* **Tahap 1 (Sistem Berjalan):** Aplikasi web Next.js 16 dan FastAPI, siap uji coba integrasi dengan UGM Career Center.
* **Tahap 2 (Ekspansi Akses):** Pengembangan ekstensi peramban Google Chrome dan integrasi bot pesan instan resmi, serta pengumpulan korpus lokal untuk fine-tuning model IndoBERT-base.
* **Tahap 3 (Sinergi Kebijakan):** Integrasi rujukan data intelijen penipuan bersama Satgas PASTI OJK dan Kementerian Ketenagakerjaan.

**Susunan Pengembang (Tim Three Achilles, Universitas Gadjah Mada):**
1. Hafidz Rizqullah Prasetya (Ketua Tim / Machine Learning & OSINT Architecture)
2. Matthew Hayunaji Priantara (Anggota / Backend & Graph Engineering)
3. Akmal Manggala Putra (Anggota / Frontend & UI/UX Accessibility)

**Dosen Pembimbing:** Dr.Eng. Ir. Ganjar Alfian, S.T., M.Eng.
