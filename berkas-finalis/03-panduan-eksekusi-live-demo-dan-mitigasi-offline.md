# Panduan Eksekusi Live Demo dan Protokol Mitigasi Offline
## Babak Final GEMASTIK XIX 2026, Divisi VIII (Pengembangan Perangkat Lunak)

**Karya:** Verifin: Sistem Pendukung Keputusan Verifikasi Lowongan Kerja Berbasis Bukti OSINT  
**Tim:** Three Achilles (Universitas Gadjah Mada)  
**Tujuan Dokumen:** Prosedur Operasional Standar (SOP) pelaksanaan demonstrasi sistem di panggung, konfigurasi teknis perangkat presenter, skenario uji tiga kasus berurutan, dan protokol tanggap darurat saat terjadi kendala jaringan di lokasi final.

---

## 1. Daftar Periksa Kesiapan Perangkat dan Lingkungan Demo (H-1 Jam)

### Tabel 1. Parameter Teknis dan Konfigurasi Pengujian Panggung

| No | Parameter Teknis | Konfigurasi Standar | Penanggung Jawab |
| :---: | :--- | :--- | :---: |
| 1 | Peramban Utama | Google Chrome atau Chromium versi stabil terbaru (memastikan akselerasi grafis SVG optimal). | Matthew |
| 2 | Resolusi Tampilan | Resolusi 1920 x 1080 (1080p) atau 1366 x 768 (proyektor standar gedung). Tingkat perbesaran (zoom) disetel 100%. | Matthew |
| 3 | Mode Layar | Mode layar penuh (Fullscreen via F11 atau Cmd+Shift+F). Bilah markah (bookmark bar) disembunyikan dan ekstensi pihak ketiga dinonaktifkan. | Matthew |
| 4 | Koneksi Jaringan | Tersambung ke Wi-Fi panitia, dilengkapi cadangan tethering hotspot seluler yang telah disinkronkan sebelumnya. | Akmal |
| 5 | Server Lokal Cadangan | Layanan backend FastAPI (port 8000) dan frontend Next.js (port 3000) berjalan aktif di latar belakang sebagai mitigasi akses domain produksi. | Matthew |
| 6 | Prapemuatan Cache Demo | Membuka halaman riwayat (/history) dan memastikan data tiga skenario kasus uji telah tersimpan pada memori browser. | Matthew |
| 7 | Alat Pengendali Layar | Pointer nirkabel terhubung ke laptop slide presentasi; tetikus nirkabel dioperasikan oleh teknisi demo. | Akmal / Matthew |

---

## 2. Pembagian Peran Panggung

* **Podium Kiri: Akmal Manggala Putra (Presenter 1 dan Narator Demo)**  
  Menyampaikan latar belakang permasalahan, urgensi sosial ekonomi, aspek etika data, dan mengarahkan perhatian dewan juri ke layar proyeksi saat interaksi antarmuka dilakukan.
* **Tengah: Matthew Hayunaji Priantara (Presenter 2 dan Operator Sistem)**  
  Mengoperasikan komputer jinjing demo, melakukan pengujian data masukan secara berurutan, mengeksplorasi graf sindikat, dan menjelaskan arsitektur backend serta formulasi XAI.
* **Podium Kanan: Hafidz Rizqullah Prasetya (Presenter 3 dan Ketua Tim)**  
  Memaparkan formulasi matematis risiko, evaluasi metrik model, arsitektur data flywheel IndoBERT, serta memimpin sesi tanya jawab bersama dewan juri.

---

## 3. Skenario Pengujian Tiga Kasus Utama

Total alokasi waktu demonstrasi sistem direncanakan selama 3 menit 30 detik (menit 03:30 hingga 07:00 dari total 10 menit presentasi).

```
[ ALUR PENGUJIAN SISTEM VERIFIN ]
  ├── 1. Kasus 1: PT Bank Central Asia Tbk (Kanal URL) -> Skor 12 [Aman] -> Validasi Kasus Negatif (60 detik)
  ├── 2. Kasus 2: VinFast Yogyakarta (Kanal Poster OCR) -> Skor 48 [Waspada] -> Deteksi Anomali Kontak (60 detik)
  └── 3. Kasus 3: BUMN Travel Scam (Kanal Teks Bebas)   -> Skor 92 [Bahaya]  -> Graf Sindikat dan XAI (90 detik)
```

### Skenario 1: Verifikasi Lowongan Resmi (Validasi Kasus Negatif)
* **Subjek Uji:** Portal Karier Resmi PT Bank Central Asia Tbk
* **Kanal Masukan:** Tab Input Tautan (URL)
* **Langkah Operasional:**
  1. Membuka tab "Tautan URL" pada halaman utama Verifin.
  2. Memasukkan tautan resmi: `https://karir.bca.co.id/posisi/it-specialist`
  3. Menekan tombol "Verifikasi Sekarang".
  4. Menunjukkan proses pipeline berurutan: Resolusi URL, Probe OSINT, Analisis Graf, dan Sintesis XAI.
* **Hasil yang Ditampilkan:**
  - Skor Risiko: 12 dari 100 (Kategori: AMAN).
  - Parameter Bukti Keabsahan:
    - Domain bca.co.id terdaftar resmi sejak tahun 2004 (usia domain lebih dari 20 tahun).
    - Server surat elektronik mematuhi protokol SPF, DKIM, dan DMARC.
    - Alamat kantor terverifikasi pada Menara BCA, Jl. M.H. Thamrin No. 1, Jakarta Pusat via OpenStreetMap.
  - Catatan untuk Juri: Menunjukkan catatan edukasi hukum di bawah skor yang menegaskan bahwa Verifin memberikan konfirmasi keabsahan objektif berbasis bukti digital terbuka.

### Skenario 2: Anomali Informasi Informal (Kasus Peringatan Dini)
* **Subjek Uji:** Poster Rekrutmen Sales Executive VinFast Yogyakarta
* **Kanal Masukan:** Tab Unggah Gambar / Poster (OCR)
* **Langkah Operasional:**
  1. Membuka tab "Unggah Poster".
  2. Memilih berkas citra: `test-fixtures/vinfast-jogja.png`.
  3. Menekan tombol "Ekstraksi & Analisis".
  4. Menunjukkan pembacaan teks otomatis oleh PaddleOCR dengan normalisasi typo.
* **Hasil yang Ditampilkan:**
  - Skor Risiko: 48 dari 100 (Kategori: WASPADA).
  - Faktor Pemicu Anomali (Explainable AI):
    - Nama merek resmi teridentifikasi, namun alamat surel pendaftaran menggunakan domain gratisan (`vinfast.recruitment.jogja@gmail.com`).
    - Alur pendaftaran diarahkan ke formulir terbuka (Google Forms), bukan sistem pelacakan pelamar resmi.
  - Catatan untuk Juri: Menjelaskan bahwa status Waspada merupakan sinyal kehati-hatian atas ketiadaan bukti legal formal, mengimbau pelamar untuk melakukan klarifikasi langsung ke kantor cabang fisik.

### Skenario 3: Sindikat Penipuan Rekrutmen dan Eksplorasi Graf Sindikat (Kasus Bahaya)
* **Subjek Uji:** Surat Panggilan Seleksi Palsu Mencatut BUMN (Modus Tiket Travel Fiktif)
* **Kanal Masukan:** Tab Teks Percakapan / Pengumuman
* **Langkah Operasional:**
  1. Membuka tab "Teks Bebas".
  2. Memasukkan potongan teks surat panggilan palsu yang memuat instruksi reservasi tiket travel ke nomor WhatsApp `0812-8921-xxxx`.
  3. Menekan tombol "Verifikasi Sekarang".
* **Hasil yang Ditampilkan:**
  - Skor Risiko: 92 dari 100 (Kategori: BAHAYA).
  - Rincian Kontribusi Bukti XAI:
    - Indikasi pemerasan pemesanan tiket travel: +35 poin
    - Rekening perbankan atas nama perorangan: +25 poin
    - Batas waktu konfirmasi intimidatif kurang dari 24 jam: +20 poin
* **Eksplorasi Graf Sindikat (Fraud Network Graph):**
  1. Mengarahkan kursor ke panel Fraud Network Graph.
  2. Memilih simpul (node) kontak `0812-8921-xxxx`.
  3. Menampilkan rincian relasi pada kartu inspeksi:
     "Simpul kontak 0812-8921-xxxx teridentifikasi pada 5 laporan berbeda yang mencatut PT Angkasa Pura Solusi, PT Pertamina Patra Niaga, dan PT Telkom Indonesia."
  4. Menunjukkan filter visual: pemilihan tab kontak memperbarui orientasi graf secara langsung.
  5. Catatan untuk Juri: Menegaskan bahwa korelasi lintas entitas ini membuktikan kapasitas Verifin dalam mendeteksi sindikat terorganisasi yang tidak dapat diidentifikasi oleh pemeriksa teks biasa.

---

## 4. Protokol Penanganan Kendala Jaringan (Offline Fallback SOP)

Apabila koneksi internet di ruang sidang mengalami gangguan teknis (latensi tinggi atau putus total):

### Kondisi A: Waktu Tunggu Layanan Melebihi 4 Detik
1. **Tindakan Operator (Matthew):**
   - Menekan tombol pembatalan pada jendela tunggu.
   - Mengklik opsi "Buka Contoh Kasus Demo Finalis" yang tersedia pada halaman utama.
2. **Penjelasan Sistem (Akmal):**
   "Untuk mengefisienkan waktu persidangan dewan juri, sistem Verifin mengaktifkan fitur Local Instant Cache yang memuat hasil audit deterministik tanpa bergantung pada latensi jaringan eksternal."

### Kondisi B: Koneksi Internet Terputus Penuh (Kondisi Mandiri / Air-Gapped)
1. **Tindakan Operator (Matthew):**
   - Tetap tenang dan tidak melakukan penyambungan ulang Wi-Fi saat presentasi berlangsung.
   - Mengakses menu navigasi Riwayat (History).
   - Memilih tombol "Muat Riwayat Demo". Tiga kartu riwayat (BCA skor 12, VinFast skor 48, dan BUMN Travel skor 92) akan tampil seketika.
   - Membuka salah satu kartu laporan (misalnya kasus skor 92). Sistem menampilkan rincian audit secara penuh dari basis data lokal peramban.
2. **Penjelasan Sistem (Hafidz):**
   "Kondisi ini menunjukkan ketahanan arsitektur Verifin yang dirancang tangguh terhadap kegagalan jaringan tunggal. Seluruh modul visualisasi bukti, perincian pembobotan XAI, dan relasi graf sindikat tetap dapat dioperasikan secara mandiri di sisi klien."

---

## 5. Ringkasan Parameter Tiga Kasus Uji

### Tabel 2. Ringkasan Kasus Uji Panggung Finalis

| ID Kasus | Entitas Subjek | Kanal Masukan | Skor dan Kategori | Fokus Pembuktian |
| :--- | :--- | :---: | :---: | :--- |
| demo-legit-02 | PT Bank Central Asia Tbk | Tautan URL | 12 / 100 [Aman] | Usia domain lebih dari 20 tahun, protokol email valid, alamat resmi OSM, dan catatan edukasi hukum aktif. |
| demo-finalis | VinFast Yogyakarta | Unggah Poster | 48 / 100 [Waspada] | Ekstraksi teks PaddleOCR, deteksi surel publik gratisan, dan rujukan formulir terbuka. |
| demo-scam-03 | Rekrutmen Tiket Travel BUMN | Teks Bebas | 92 / 100 [Bahaya] | Deteksi klausul tiket travel fiktif (+35) dan visualisasi daur ulang kontak sindikat pada 5 entitas berbeda. |
