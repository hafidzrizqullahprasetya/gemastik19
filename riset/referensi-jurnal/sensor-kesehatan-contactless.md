# Database Judul Jurnal & Metode Teknologi Skrining Kesehatan Tanpa Kontak (Contactless)

Dokumen ini memetakan berbagai judul jurnal ilmiah internasional terpercaya berdasarkan **metode teknis/teknologi sensor pasif** di bidang kesehatan, dengan mengesampingkan fokus penyakit tertentu agar tim dapat berfokus pada eksplorasi modalitas teknologi.

---

## 📸 Kategori A: Metode Cahaya & Kamera (rPPG & Video AI)
*Mengekstrak informasi tanda vital dengan menganalisis fluktuasi warna pixel kulit wajah atau tubuh melalui tangkapan kamera RGB biasa.*

1.  **“A Novel Algorithm for Remote Photoplethysmography: Spatial Subspace Rotation”** (IEEE Transactions on Biomedical Engineering)
    *   *Metode:* Memperkenalkan algoritma **Spatial Subspace Rotation (2SR)** untuk memisahkan sinyal denyut jantung dari noise gerakan kepala pada video wajah.
2.  **“DeepPhys: Real-time non-contact video-based physiological measurement using convolutional attention networks”** (ACM/IEEE)
    *   *Metode:* Menggunakan arsitektur Deep Learning **Convolutional Attention Network (CAN)** untuk mendeteksi detak jantung dan pernapasan secara real-time dari video wajah dengan kompensasi gerakan ekstrem.
3.  **“PhysFlow: Skin tone transfer for remote heart rate estimation through conditional normalizing flows”** (IEEE Transactions - 2024)
    *   *Metode:* Menerapkan metode *Generative AI (Normalizing Flows)* untuk mentransfer warna kulit pada video rPPG guna mengatasi bias akurasi pada kulit gelap.

---

## 📡 Kategori B: Metode Gelombang Radio & Wi-Fi (Wi-Fi CSI & Radar)
*Memanfaatkan pancaran sinyal elektromagnetik nirkabel di dalam ruangan untuk mendeteksi detak jantung, pernapasan, atau pergerakan dada.*

1.  **“TR-BREATH: Time-reversal breathing rate estimation and detection”** (IEEE Transactions on Biomedical Engineering)
    *   *Metode:* Menerapkan teknik matematika *Time-Reversal* pada pantulan sinyal nirkabel untuk mengevaluasi laju pernapasan secara akurat tanpa terpengaruh pantulan tembok.
2.  **“Resfi: Wifi-enabled device-free respiration detection based on deep learning”** (IEEE - 2022)
    *   *Metode:* Menerapkan model deep learning untuk mendeteksi napas menggunakan data **Channel State Information (CSI)** dari perangkat Wi-Fi komersial.
3.  **“Vital-sign monitoring and spatial tracking of multiple people using a contactless radar-based sensor”** (Nature Electronics)
    *   *Metode:* Menggunakan radar frekuensi tinggi (Doppler Radar) dikombinasikan dengan pemrosesan sinyal wavelet untuk melacak koordinat spasial sekaligus tanda vital beberapa orang dalam satu ruangan.

---

## 🔊 Kategori C: Metode Akustik & Bio-sinyal Suara (Acoustic AI)
*Menganalisis karakteristik frekuensi, amplitudo, dan pola spektral suara yang dihasilkan oleh organ tubuh manusia.*

1.  **“A classification framework for identifying bronchitis and pneumonia in children based on a small-scale cough sounds dataset”** (PLOS ONE)
    *   *Metode:* Menggunakan ekstraksi fitur Mel-Frequency Cepstral Coefficients (MFCC) dan pengklasifikasi **LSTM-SVM** untuk menganalisis pola audio.
2.  **“Vocal biomarkers for cognitive impairment and dementia: A systematic review and meta-analysis”** (Lancet/Springer)
    *   *Metode:* Menganalisis *vocal biomarkers* (tremor mikro, jeda bicara, intonasi) menggunakan algoritma klasifikasi suara untuk mendeteksi penurunan kognitif.
3.  **“A Comparison of Solicited and Longitudinal Cough Sounds for Tuberculosis Detection”** (APSIPA ASC - 2025)
    *   *Metode:* Membandingkan kinerja model deep learning (CNN/GRU) antara data rekaman suara batuk terkontrol (*solicited*) dan batuk alami jangka panjang (*longitudinal*).

---

## 🌡️ Kategori D: Metode Termal & Inframerah (Thermal Imaging)
*Mendeteksi radiasi panas tubuh manusia untuk memantau pernapasan, sirkulasi darah, atau peradangan.*

1.  **“Image Enhancement for Remote Photoplethysmography in a Low-Light Environment”** (IEEE Access)
    *   *Metode:* Menggabungkan sensor inframerah dekat (*Near-Infrared* / NIR) dengan algoritma peningkatan citra untuk mendeteksi detak jantung dalam kondisi gelap gulita.
2.  **“Enhancement of remote photoplethysmography (rPPG) performance in low-light environments through illumination map estimation”** (SPIE)
    *   *Metode:* Menggunakan algoritma estimasi peta iluminasi (*illumination map*) untuk merekonstruksi video wajah redup sebelum diekstrak sinyal detak jantungnya.
3.  **“Continuous, contactless monitoring of respiratory rate using infrared thermography”** (Nature/Springer)
    *   *Metode:* Melacak fluktuasi suhu udara di sekitar lubang hidung/mulut menggunakan kamera termal inframerah untuk mengukur laju napas.

---

## 🚶 Kategori E: Metode Sensor Gerak / LiDAR / Depth (Pose & Gait)
*Melacak struktur sendi tubuh (skeleton landmarks) menggunakan sensor kedalaman atau kamera untuk menganalisis pola jalan.*

1.  **“Real-time facial paralysis detection using Face Mesh and machine learning”** (IEEE)
    *   *Metode:* Menggunakan koordinat 3D Face Mesh (468 titik) dan menghitung deviasi asimetri bibir/mata menggunakan perhitungan jarak Euclidean secara real-time.
2.  **“Passive gait monitoring in the wild using depth sensors for early detection of fall risk”** (Journal of Medical Systems)
    *   *Metode:* Menggunakan kamera sensor kedalaman (seperti Microsoft Kinect / LiDAR) untuk mengekstrak parameter jalan (*gait speed*, *stride length*) guna mendeteksi gangguan gerak.

---

## 🧪 Kategori F: Metode Analisis Gas Napas (Electronic Nose / e-Nose)
*Menganalisis senyawa kimia gas buang pernapasan (Volatile Organic Compounds / VOCs) menggunakan larik sensor gas.*

1.  **“The electronic nose technology in clinical diagnosis: A systematic review”** (PMC - 2021)
    *   *Metode:* Menganalisis *breathprints* (pola sidik jari gas napas) secara non-invasif menggunakan larik sensor sensor gas berbasis logam oksida (MOS).
2.  **“Electronic-Nose Technology for Lung Cancer Detection: A Non-Invasive Diagnostic Revolution”** (PMC - 2025)
    *   *Metode:* Menggabungkan sensor gas e-Nose dengan algoritma *neural network* untuk mengenali anomali VOC pada sel paru-paru tanpa biopsi fisik.

---

## ⚡ Kategori G: Metode Elektrokardiografi Tanpa Kontak (Capacitive ECG / cECG)
*Membaca sinyal kelistrikan jantung (ECG) menembus serat pakaian tanpa menempelkan elektroda basah langsung ke kulit.*

1.  **“Capacitive ECG Electrodes Can Detect Cardiac Pacemaker Spikes”** (Sensors - 2020)
    *   *Metode:* Menggunakan elektroda kapasitif (*cECG*) berukuran mikro yang ditanam di balik pakaian atau serat kursi untuk menangkap impuls listrik jantung berfrekuensi tinggi.
2.  **“Non-contact capacitive electrocardiography monitoring in everyday car driving”** (IEEE Transactions)
    *   *Metode:* Integrasi sensor cECG pada sandaran kursi pengemudi untuk mengukur grafik elektrokardiogram secara pasif melalui pakaian pengemudi guna mereduksi *motion artifacts*.

---

## 🟢 Kategori H: Metode Laser Doppler Vibrometry (LDV) / Optical Vibrocardiography
*Menembakkan sinar laser mikro ke permukaan kulit (misal arteri karotis di leher) untuk mendeteksi getaran sub-mikron dinding pembuluh darah akibat denyut jantung.*

1.  **“Heartbeat Detection by Laser Doppler Vibrometry and Machine Learning”** (MDPI Sensors - 2020)
    *   *Metode:* Memanfaatkan interferometer laser untuk mendeteksi getaran mikro permukaan kulit leher akibat denyut arteri, diproses dengan machine learning untuk deteksi detak jantung nirkabel.
2.  **“Heart-carotid pulse-wave velocity via laser-Doppler vibrometry as a biomarker for arterial stiffening: a feasibility study”** (IEEE Transactions - 2023)
    *   *Metode:* Menggunakan sensor LDV optik untuk mengukur *Pulse Wave Velocity* (kecepatan gelombang nadi) antara jantung dan leher guna menilai kekakuan dinding arteri secara *contactless*.

---

## 🧲 Kategori I: Metode Sensor Magnetik Atomik (Optically Pumped Magnetometers / OPM)
*Membaca medan magnet lemah yang dihasilkan oleh aktivitas listrik jantung (Magnetocardiography - MCG) secara contactless menggunakan sensor gas atomik.*

1.  **“Magnetocardiography measurements using an optically pumped magnetometer under ambient conditions”** (Nature/arXiv - 2026)
    *   *Metode:* Menggunakan sensor OPM berbasis gas Rubidium (Rb) untuk membaca osilasi medan magnet jantung (skala Pico-Tesla) tanpa kontak fisik di lingkungan ruangan biasa (tanpa pelindung magnetik khusus).
2.  **“A Novel Adaptive Independent Component Analysis Method for Multi-Channel Optically Pumped Magnetometers' Magnetocardiography Signals”** (IEEE - 2025)
    *   *Metode:* Algoritma ICA adaptif untuk memisahkan sinyal magnetik jantung dari noise magnetik bumi pada array sensor OPM multi-saluran.

---

## 🌈 Kategori J: Metode Imaging Hiperspektral (Hyperspectral Imaging - HSI)
*Mengambil gambar kulit menggunakan ratusan saluran panjang gelombang cahaya untuk menganalisis saturasi oksigen jaringan dan perfusi darah kapiler.*

1.  **“Non-contact tissue perfusion and oxygenation imaging using a LED-based hyperspectral system”** (Scientific Reports)
    *   *Metode:* Menggunakan sistem pencahayaan LED multispektral dan kamera hiperspektral untuk memetakan distribusi konsentrasi oksihemoglobin ($HbO_2$) dan deoksihemoglobin ($Hb$) di bawah kulit secara visual.
2.  **“Medical hyperspectral imaging: an updated review of technology advancements and biomedical applications”** (SPIE Journal of Biomedical Optics)
    *   *Metode:* Tinjauan komprehensif teknologi HSI untuk diagnosis non-kontak kanker kulit, luka diabetes, dan pemantauan viabilitas jaringan intraoperatif.

---

## 🧵 Kategori K: Metode Serat Optik Kasur / Sandaran (Fiber Optic Sensing)
*Mendeteksi getaran mekanis tubuh akibat pernapasan dan detak jantung (Ballistocardiography) menggunakan serat optik interferometrik di bawah alas tidur.*

1.  **“Noninvasive Monitoring of Vital Signs Based on Highly Sensitive Fiber Optic Mattress”** (IEEE Sensors Journal)
    *   *Metode:* Menggunakan sensor serat optik berbasis interferometer *Michelson* atau *Mach-Zehnder* yang ditanam pada kasur untuk mendeteksi perubahan fase cahaya akibat tekanan mikro pernapasan pasien.
2.  **“Smart Mattress Based on Multipoint Fiber Bragg Gratings for Respiratory Rate Monitoring”** (Optics Express)
    *   *Metode:* Menerapkan sensor *Fiber Bragg Grating* (FBG) multi-titik di bawah sprei kasur untuk menangkap laju napas dan deteksi apnea secara pasif tanpa kabel listrik aktif di dekat tubuh pasien.

---

## 🌀 Kategori L: Metode Spektroskopi Terahertz (Terahertz Spectroscopy)
*Memanfaatkan gelombang elektromagnetik submilimeter (0.1–10 THz) untuk memindai lapisan kulit atas guna menganalisis kandungan air atau anomali jaringan.*

1.  **“Non-contact blood glucose monitoring using terahertz spectroscopy: current status and future prospects”** (Springer/Medical Devices)
    *   *Metode:* Menembakkan gelombang THz secara non-invasif ke kulit tipis (seperti daun telinga atau sela jari) untuk mendeteksi fluktuasi indeks bias akibat kadar glukosa darah.
