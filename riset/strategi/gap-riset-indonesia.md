# Pemetaan Gap Riset Medis (Global vs Indonesia) untuk Gemastik PPL 2026

Dokumen ini merangkum kesenjangan ilmiah (*research gaps*) dari penelitian dosen lokal (UGM/ITS) maupun global, serta bagaimana tim mahasiswa TRPL UGM dapat memanfaatkannya sebagai celah inovasi untuk Gemastik 2026.

---

## 🔬 GAP 1: Deteksi Akustik Batuk Anak (Pediatric Pneumonia)

*   **Fakta Riset Dospem (Dr. Dhany Arifianto dkk.):**
    *   Riset membandingkan suara batuk TBC terarah (*solicited*) dan alami (*longitudinal*) menggunakan dataset global (CODA).
*   **Kelemahan Riset Global/Umum:**
    *   Mayoritas dataset akustik batuk dunia (CODA, Coughvid, Coswara) menggunakan **subjek dewasa**.
*   **Gap Masalah di Indonesia:**
    *   Penyebab kematian balita nomor 1 di Indonesia adalah **Pneumonia (ISPA)**, bukan TBC dewasa. 
    *   Kapasitas paru dan anatomi pita suara balita jauh lebih kecil, sehingga karakteristik frekuensi batuk basah balita **tidak kompatibel** dengan model AI batuk dewasa.
*   **Celah Solusi Gemastik PPL:**
    *   Membangun **PneumoSound**: Aplikasi pemantauan pasif yang didesain khusus mendeteksi batuk *Pneumonia pada balita* di ruang tunggu anak Puskesmas. Algoritma AI (CNN) dilatih/disesuaikan untuk mengenali frekuensi tinggi batuk lendir anak serta mendeteksi *stridor* (tarikan napas sesak balita).

---

## 🔬 GAP 2: Bias Warna Kulit & Cahaya Redup pada rPPG (Contactless Vital Signs)

*   **Fakta Riset Dospem (Ir. Ridwan Wicaksono dkk. / Global):**
    *   Mengembangkan deteksi detak jantung nirkabel menggunakan analisis video wajah (*remote Photoplethysmography* / rPPG).
*   **Kelemahan Riset Global:**
    *   Algoritma rPPG standar global (yang dilatih di negara barat) memiliki **bias rasial**. Akurasi deteksi denyut jantung drop drastis pada individu dengan **warna kulit gelap/melanin tinggi** (karena melanin menyerap cahaya hijau yang digunakan rPPG untuk mendeteksi aliran darah wajah).
*   **Gap Masalah di Indonesia:**
    *   Masyarakat Indonesia memiliki warna kulit dominan sawo matang hingga gelap (Fitzpatrick Scale Tipe IV-VI), terutama di Indonesia Timur. Selain itu, kualitas pencahayaan di Puskesmas daerah pelosok sering kali redup/minim cahaya (*low-light*).
*   **Celah Solusi Gemastik PPL:**
    *   Membangun **AortaGate/AortaLens** dengan algoritma kompensasi warna kulit sawo matang (*color channel normalization*) dan kompensasi cahaya redup (*low-light enhancement*) khusus populasi lokal Indonesia untuk triase loket Puskesmas.

---

## 🔬 GAP 3: Skrining Awal Stroke Non-Invasif di Pelosok Desa (Golden Hour)

*   **Fakta Riset Dospem (Wahyono, Ph.D. / Riset Medis UGM):**
    *   Riset *computer vision* untuk deteksi penyakit mata (Aksakirana) dan sistem deteksi TBC berbasis rontgen (TBScreen.AI).
*   **Kelemahan Riset Medis Umum:**
    *   Diagnosis stroke membutuhkan alat CT Scan yang mahal dan hanya tersedia di RS tipe A/B di kota besar.
*   **Gap Masalah di Indonesia:**
    *   Indonesia adalah negara kepulauan. Pasien stroke di pelosok desa sering terlambat ditangani karena tidak ada alat CT Scan dan dokter spesialis saraf, sehingga kehilangan periode emas penyembuhan (*Golden Hour* < 3 jam).
*   **Celah Solusi Gemastik PPL:**
    *   Membangun **StrokeLens**: Aplikasi skrining kelumpuhan saraf wajah (*facial droop*) bertenaga AI ringan (Face Mesh) yang dapat dioperasikan secara mandiri oleh kader Posyandu/Puskesmas Pembantu pelosok desa hanya dengan menggunakan kamera HP murah (tanpa butuh CT Scan/alat mahal) untuk mendeteksi stroke ringan (TIA) sebelum terlambat.
