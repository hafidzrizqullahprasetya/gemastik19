# Analisis Kemenangan Tim DoAlert (Juara 1 Gemastik XVIII 2025 - PPL)

Dokumen ini membedah faktor-faktor kunci keberhasilan Tim DoAlert (ITS) dengan karya **TB Vector** dalam meraih Medali Emas pada Divisi Pengembangan Perangkat Lunak (PPL) Gemastik 2025. Analisis ini ditujukan untuk mengekstrak formula sukses mereka agar dapat diterapkan pada proyek kita tahun ini.

---

## 1. Profil Inovasi "TB Vector" (DoAlert)
*   **Masalah Nyata:** Indonesia menempati peringkat kedua kasus Tuberkulosis (TB) terbanyak di dunia, dengan tingkat kematian mencapai 14 jiwa setiap jam. Masalah utamanya adalah **keterlambatan deteksi dini** di ruang publik yang menjadi episentrum penularan.
*   **Solusi Teknologi:** Sistem pemantauan akustik real-time yang mampu mendeteksi suara batuk, mengklasifikasikannya (batuk TB vs non-TB), dan melacak arah koordinat fisik sumber suara di ruang publik.
*   **Tech Stack & Konsep Fisik:**
    *   *Hardware/Pemrosesan Sinyal:* Microphone array, algoritma *Direction of Arrival (DoA)*, dan *inverse beamforming* pada microcontroller.
    *   *Kecerdasan Buatan (AI):* Model machine learning klasifikasi gelombang suara batuk.
    *   *Software/Web:* Dashboard web interaktif dan sistem pelacakan berbasis kamera (*object detection*).

---

## 2. Bedah Kasus DoAlert Menggunakan Sistem CCA + Step 0

Untuk memahami mengapa tim ini dinilai sangat jenius oleh juri, mari kita bedah pola pikir mereka menggunakan kerangka kerja **Advanced Problem Solver**:

### A. STEP 0: Challenge the Goal (Dekonstruksi Tujuan)
*   **Tujuan Normatif Awal:** Meminta penderita batuk kronis memeriksakan diri secara sukarela atau menempatkan petugas medis di pintu masuk stasiun untuk memeriksa kesehatan penumpang satu per satu.
*   **Dekonstruksi (Challenge):** Orang yang menderita batuk sering kali menyangkal gejala mereka karena takut stigma sosial, atau malas ke klinik. Memeriksa puluhan ribu orang secara manual di stasiun adalah hal yang mustahil.
*   **Tujuan Akhir Sebenarnya (End-Game):** Mendeteksi dan melacak orang dengan batuk berisiko tinggi (TBC) di ruang publik **secara pasif tanpa mengandalkan kesadaran individu tersebut untuk melapor**, serta memberi sinyal ke petugas stasiun secara instan.
*   **Radical Shortcut:** Memasang "radar telinga" pasif di langit-langit ruang publik untuk menyaring suara batuk dari keramaian secara otomatis.

### B. CERDAS (First-Principles Thinking)
DoAlert membongkar masalah ke variabel fisik fundamental:
*   *Gelombang Akustik:* Batuk TBC memiliki tanda frekuensi suara yang spesifik akibat kerusakan jaringan paru-paru (bronchial cough). Ini adalah variabel fisika suara yang konsisten dan bisa diklasifikasi oleh AI.
*   *Trilaterasi Suara:* Menggunakan *microphone array* (beberapa mikrofon yang diatur jaraknya) untuk menghitung selisih waktu sampainya gelombang suara ke masing-masing mikrofon (DoA). Ini memungkinkan pelacakan posisi (X, Y) sumber suara.
*   *Sistem Integrasi:* Koordinat suara dikirim ke CCTV stasiun untuk melakukan pengenalan objek manusia (*bounding box*) di lokasi tersebut secara visual.

### C. CERAH (Peta Realitas Taktis)
*   *Bypass Birokrasi:* Mereka tidak menunggu izin dari rumah sakit atau uji klinis massal yang memakan waktu tahunan untuk menguji prototipe. 
*   *Aksi Nyata:* Mereka melatih AI menggunakan dataset suara batuk publik yang valid, mengujinya di lab akustik terkontrol menggunakan mikrofon array rakitan, dan menyimulasikannya pada dashboard web kustom yang menampilkan simulasi kamera pelacak objek.

### D. ASIK (Integritas & Dampak Nyata)
*   *Urgensi Nyawa:* Solusi ini menyasar langsung pilar keselamatan jiwa masyarakat (menolong mitigasi penyakit menular yang membunuh 14 jiwa/jam).
*   *Akurasi & Data:* Mereka memastikan algoritma pemrosesan sinyal suara mereka didukung data uji performa yang detail, sehingga saat Q&A juri, mereka bisa menyajikan data presisi akurasi model.

---

## 3. Komparasi Strategis: TB Vector vs SajiGizi (2026)

Berikut adalah keselarasan pola kesuksesan DoAlert yang akan kita replikasi pada proyek **SajiGizi**:

| Faktor Sukses DoAlert (TB Vector) | Implementasi pada Proyek SajiGizi (2026) |
| :--- | :--- |
| **Urgensi Nasional:** 14 Kematian/Jam akibat Tuberkulosis. | **Urgensi Nasional:** Risiko keracunan makanan massal pada program nasional Makan Bergizi Gratis (MBG) yang melibatkan puluhan juta anak dan anggaran Rp268 Triliun. |
| **Deep Engineering:** Penggunaan *DoA, Beamforming,* dan *Audio ML Classification*. | **Deep Engineering:** *AI Image Segmentation* untuk mendeteksi komposisi gizi piring secara otomatis dan algoritma *Batch Traceback* rantai pasok bahan pangan. |
| **Dukungan Program Pemerintah:** Selaras dengan target SDGs No. 3 (Kesehatan). | **Dukungan Program Pemerintah:** Selaras dengan Program Flagship Presiden (Badan Gizi Nasional/SPPG) & SDGs No. 2 (Zero Hunger) & No. 3. |
| **Kesiapan Demo Fisik:** Sensor mic array melacak sumber suara secara langsung di hadapan juri. | **Kesiapan Demo Fisik:** Kamera memindai kotak makanan tiruan secara langsung dan mengeluarkan hasil analisis gizi (Lolos/Gagal QC) secara real-time. |
