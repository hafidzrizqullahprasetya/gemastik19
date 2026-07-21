# Brainstorming Ide Segar Gemastik PPL 2026 — Deep Research & Cross-Pollination

Dokumen ini merupakan hasil brainstorming mendalam yang:
1. Mengakui masalah pada Denteksi Edge (ethical clearance + sudah pernah dilombakan)
2. Menganalisis gap ANTAR dokumen riset yang sudah ada
3. Menghasilkan ide-ide segar melalui cross-pollination teknologi
4. Mengevaluasi ide-ide tersebut terhadap 7 Pilar Kemenangan

---

## 1. Mengapa Denteksi Edge Bermasalah

### Masalah 1: Ethical Clearance
- Penelitian kesehatan gigi melibatkan **subjek manusia** (terutama anak-anak)
- Membutuhkan persetujuan komite etik (KEPK/FK UGM) yang bisa memakan waktu **3-6 bulan**
- Proses: pengajuan protokol, review, revisi, persetujuan, informed consent, monitoring
- Jika tidak lolos, seluruh proyek gagal

### Masalah 2: Sudah Pernah Dilombakan
- Denteksi (riset Mr. Fakhrurrifqi) sudah pernah diikutsertakan dalam kompetisi lain
- Aturan Gemastik PPL: karya harus **orisinal dan belum pernah dilombakan**
- Meskipun kita "mengembangkan" Denteksi, juri bisa menganggapnya sebagai iterasi, bukan karya baru
- Risiko diskualifikasi di babak penyisihan

### Masalah 3: Urgensi Kesehatan Gigi Relatif Rendah
- Dibandingkan TB (14 kematian/jam) atau pneumonia balita (#1 killer), kesehatan gigi tidak terasa "mendesak"
- Juri mungkin tidak terkesan dengan "92% penduduk punya masalah gigi" karena tidak mengancam nyawa

**Kesimpulan:** Denteksi Edge terlalu berisiko. Kita perlu ide yang lebih segar, tanpa ethical clearance, dan belum pernah dilombakan.

---

## 2. Gap Analysis Antar Dokumen Riset

Saya membaca 6 dokumen riset utama dan menemukan **gap cross-pollination** yang belum dieksplorasi:

### Gap 1: Teknologi Sensor Contactless HANYA Diaplikasikan ke Kesehatan
**Dokumen:** `sensor-kesehatan-contactless.md` (12 kategori teknologi sensor)

Dokumen ini memetakan teknologi canggih:
- rPPG (deteksi denyut jantung dari video wajah)
- Wi-Fi CSI (deteksi napas dari sinyal Wi-Fi)
- Akustik (analisis batuk, tangisan bayi)
- e-Nose (analisis gas napas untuk penyakit)
- Hyperspectral imaging (analisis oksigen jaringan)
- Terahertz spectroscopy (deteksi glukosa darah)

**Gap:** SEMUA teknologi ini hanya diaplikasikan ke kesehatan manusia. Padahal, teknologi yang sama bisa diaplikasikan ke:
- **Pertanian:** rPPG-like spectral analysis untuk deteksi stres tanaman (klorofil, kadar air)
- **Kualitas pangan:** Hyperspectral imaging untuk kesegaran ikan/daging/sayur
- **Infrastruktur:** Akustik untuk deteksi kebocoran pipa atau retakan jembatan
- **Peternakan:** Analisis vokalisasi hewan untuk deteksi penyakit

### Gap 2: Analisis Ekonomi MBG Tidak Terhubung ke Solusi Teknologi Supply Chain
**Dokumen:** `ringkasan-ekonomi-ke-ide.md` (analisis MBG) + `ide-disruptif-software-iot-ai.md` (NutriPatch)

Analisis ekonomi menunjukkan:
- MBG anggaran Rp 268T, kebocoran 15-25%
- Masalah kualitas nutrisi (60% karbohidrat sederhana)
- Solusi: digital monitoring, blockchain traceability, local sourcing

**Gap:** Ide teknologi yang ada (NutriPatch) hanya fokus pada **outcome measurement** (apakah anak sehat?). Tidak ada ide yang fokus pada **supply chain integrity** (apakah makanan yang sampai ke anak berkualitas? apakah ada kebocoran? apakah suhu rantai dingin terjaga?).

### Gap 3: Akustik DSP (TB Vector) Tidak Diaplikasikan ke Domain Non-Kesehatan
**Dokumen:** `analisis-pemenang/2025-doalert.md` (TB Vector) + `gap-riset-indonesia.md` (PneumoSound)

TB Vector membuktikan bahwa **akustik DSP + edge AI** bisa memenangkan Juara 1. Teknologi ini:
- Ekstraksi fitur (MFCC, STFT, FFT)
- Klasifikasi pola suara (LSTM/GRU)
- Direction of Arrival (GCC-PHAT)
- Edge computing (Raspberry Pi)

**Gap:** Teknologi akustik yang sama bisa diaplikasikan ke:
- **Deteksi kebocoran pipa PDAM** (suara air bocor memiliki frekuensi khas)
- **Structural health monitoring** (acoustic emission dari retakan beton/logam)
- **Quality control industri** (suara mesin yang mulai rusak)
- **Deteksi kecurangan BBM** (resonansi akustik tangki — sudah ada di AcoustiPump)

### Gap 4: Riset rPPG Bias Kulit Tidak Dieksplorasi untuk Kalibrasi Universal
**Dokumen:** `gap-riset-indonesia.md` (AortaGate — rPPG untuk kulit sawo matang)

Riset rPPG menunjukkan bahwa algoritma standar bias terhadap kulit gelap. Solusi yang diusulkan (AortaGate) hanya fokus pada kesehatan manusia.

**Gap:** Teknologi kalibrasi warna (color channel normalization, low-light enhancement) yang dikembangkan untuk rPPG bisa diaplikasikan ke:
- **Quality grading komoditas** (warna buah/sayur/ikan sebagai indikator kesegaran)
- **Deteksi kematangan buah** (perubahan warna kulit buah)
- **Klasifikasi jenis kayu** (warna dan tekstur permukaan kayu)

### Gap 5: Analisis Ekonomi Subsidi BBM Tidak Terhubung ke Solusi IoT yang Feasible
**Dokumen:** `ringkasan-ekonomi-ke-ide.md` (reformasi subsidi) + `ide-disruptif-software-iot-ai.md` (AcoustiPump)

AcoustiPump adalah ide brilian (sensor akustik + NFC nozzle untuk deteksi tangki ilegal), tapi:
- Sangat ambisius untuk prototipe 3-6 bulan
- Butuh akses ke SPBU nyata untuk validasi (sulit izin)
- Tidak ada dosen pembimbing yang relevan di TRPL UGM

**Gap:** Masalah kebocoran subsidi BBM bisa dipecahkan dengan pendekatan yang lebih sederhana tapi tetap deep engineering:
- **Computer vision untuk deteksi plat nomor kendaraan** di SPBU + cross-check dengan database Samsat
- **Analisis pola konsumsi BBM per kendaraan** menggunakan machine learning (deteksi anomali)
- **Dashboard monitoring real-time** untuk Pertamina/BPH Migas

### Gap 6: Tidak Ada Ide yang Menyasar Kemandirian Energi/Listrik
**Dokumen:** Semua dokumen

Dari 20 finalis 2025, tidak ada yang fokus pada:
- **Efisiensi energi gedung** (smart building)
- **Deteksi pencurian listrik** (non-technical losses PLN)
- **Monitoring panel surya** (degradasi, debu, shading)
- **Grid stability** (integrasi energi terbarukan)

Padahal, kemandirian energi adalah salah satu sub-tema yang mungkin muncul di 2026.

---

## 3. Ide-Ide Segar (Cross-Pollination)

Berdasarkan gap analysis di atas, berikut ide-ide segar yang:
- Tidak membutuhkan ethical clearance (bukan subjek manusia)
- Belum pernah dilombakan
- Memiliki deep engineering potential
- Bisa memiliki hardware demo
- Menyasar isu nasional mendesak
- Memanfaatkan teknologi yang sudah dipetakan di dokumen riset

---

### IDE 1: SajiTrack — Sistem Integritas Rantai Pasok MBG (Makan Bergizi Gratis)

**Cross-pollination:** Analisis ekonomi MBG + Computer Vision + IoT + Blockchain

**Masalah Nasional:**
- Program MBG (Makan Bergizi Gratis) adalah **program flagship #1 pemerintah Prabowo** dengan anggaran **Rp 268 Triliun**
- Kebocoran anggaran: **15-25%** (paper-based reporting)
- Kualitas nutrisi rendah: 60% karbohidrat sederhana (tidak sesuai standar WHO)
- Tidak ada sistem monitoring real-time dari pemasok ke sekolah

**Solusi:**
Stasiun pemindai nampan makanan (food tray scanner) yang ditempatkan di SPPG (Satuan Pelayanan Pemenuhan Gizi) atau sekolah penerima MBG, yang secara otomatis:
1. **Memindai komposisi makanan** menggunakan computer vision (segmentasi nasi/lauk/sayur/buah)
2. **Mengestimasi volume/porsi** dari citra 2D + depth sensor
3. **Menghitung nilai gizi** (protein, karbohidrat, lemak, vitamin) berdasarkan database pangan Indonesia
4. **Memverifikasi kesesuaian** dengan standar menu MBG (35% protein, 30% karbo, 25% sayur, 10% buah)
5. **Mencatat ke blockchain** (Hyperledger Fabric) untuk traceability dari pemasok ke sekolah
6. **Dashboard real-time** untuk Dinas Kesehatan/Badan Gizi Nasional

**Deep Engineering:**
- Custom CNN untuk segmentasi makanan Indonesia (nasi, tempe, tahu, sayur, buah) — dataset Food-101/Food-2K tidak mencakup makanan Indonesia
- Volume estimation dari single-view image + depth sensor (structured light atau stereo camera)
- Nutritional calculation engine berdasarkan Tabel Komposisi Pangan Indonesia (TKPI)
- Blockchain smart contract untuk automated payment release saat makanan terverifikasi

**Hardware:**
- Stasiun pemindai: Raspberry Pi 5 + kamera RGB + depth sensor (Intel RealSense atau stereo) + load cell (timbangan)
- Ditempatkan di area distribusi makanan sekolah/SPPG
- Prototipe bisa dibawa ke final dengan nampan makanan tiruan

**Validasi:**
- Uji coba di 1-2 sekolah penerima MBG di DIY
- Metrik: akurasi segmentasi makanan, akurasi estimasi volume, kecepatan pemindaian per nampan
- Tidak perlu ethical clearance (memindai makanan, bukan manusia)

**Urgensi Nasional:**
- Program flagship #1 pemerintah
- Rp 268T anggaran = bahkan 1% improvement = Rp 2,68T penghematan
- 62 juta anak penerima = dampak sosial masif

**Model Bisnis:**
- B2G: pengadaan oleh Badan Gizi Nasional/Dinas Kesehatan
- SaaS: dashboard monitoring + analytics
- Estimasi: 1 stasiun = 500 nampan/hari = 100.000 nampan/tahun

**Demo di Final:**
- Bawa stasiun pemindai + nampan makanan (bisa tiruan atau asli)
- Juri melihat real-time: nampan dipindai, komposisi terdeteksi, nilai gizi dihitung, "LOLOS/GAGAL QC" muncul di layar

---

### IDE 2: GridSense — Deteksi Kebocoran Pipa PDAM dengan Akustik Edge AI

**Cross-pollination:** Teknologi akustik DSP (TB Vector) + Infrastruktur PDAM

**Masalah Nasional:**
- PDAM kehilangan **30-40%** air yang sudah diolah (disebut Non-Revenue Water / NRW)
- Penyebab: kebocoran pipa fisik (25-30%) + pencurian/salah ukur (10-15%)
- Kerugian nasional: **Rp 10-15 Triliun/tahun**
- Deteksi kebocoran saat ini: manual (petugas mendengarkan pipa dengan stetoskop) atau menunggu air muncul di permukaan

**Solusi:**
Sensor akustik clamp-on yang dipasang di pipa distribusi PDAM, yang:
1. **Merekam suara aliran air** secara continuous menggunakan piezoelectric contact microphone
2. **Mengekstrak fitur akustik** (MFCC, spectral centroid, zero-crossing rate) — teknologi yang sama dengan TB Vector
3. **Mengklasifikasikan pola suara** menggunakan edge AI (CNN/LSTM): normal vs bocor vs katup rusak vs pencurian
4. **Melokalisasi kebocoran** menggunakan time-difference-of-arrival (TDOA) antara 2 sensor
5. **Mengirim alert** ke dashboard PDAM saat kebocoran terdeteksi

**Deep Engineering:**
- Akustik DSP pipeline (segmentasi, STFT, FFT, Mel filter bank, MFCC) — proven technology dari TB Vector
- Custom CNN/LSTM untuk klasifikasi pola kebocoran pipa (berbeda dari klasifikasi batuk)
- TDOA localization algorithm untuk pinpoint lokasi kebocoran
- Edge computing (Raspberry Pi + microphone array) untuk operasi real-time tanpa cloud

**Hardware:**
- Sensor unit: Raspberry Pi + piezoelectric contact microphone + GPS module + 4G modem
- Clamp-on design (mudah dipasang di pipa existing tanpa membongkar)
- Prototipe: pipa PVC kecil + pompa air + sensor + simulasi kebocoran (lubang kecil)

**Validasi:**
- Kerjasama dengan PDAM Sleman/Yogyakarta
- Pasang 2-3 sensor di jaringan distribusi
- Metrik: detection rate, false positive rate, localization accuracy

**Urgensi Nasional:**
- Kerugian Rp 10-15T/tahun
- Krisis air bersih di banyak kota Indonesia
- SDGs No. 6: Clean Water and Sanitation

**Model Bisnis:**
- B2G/B2B: penjualan ke PDAM seluruh Indonesia
- SaaS: dashboard monitoring + predictive maintenance
- Estimasi: 1 sensor = monitoring 1 km pipa = penghematan Rp 50-100 juta/tahun (dari air yang tidak terbuang)

**Demo di Final:**
- Bawa pipa PVC kecil + pompa air + 2 sensor
- Buat kebocoran kecil (lubang jarum) di satu titik
- Juri melihat: sensor mendeteksi kebocoran, menampilkan lokasi, dan alert di dashboard

---

### IDE 3: NoseGrain — Electronic Nose untuk Quality Grading Beras di Gudang Bulog

**Cross-pollination:** Teknologi e-Nose (sensor-kesehatan-contactless.md Kategori F) + Ketahanan Pangan

**Masalah Nasional:**
- Indonesia memproduksi **34 juta ton beras/tahun**, sebagian besar disimpan di gudang Bulog
- Selama penyimpanan, beras mengalami penurunan kualitas: **aflatoxin** (jamur beracun), peningkatan kadar air, serangan kutu
- Deteksi kualitas saat ini: manual (petugas mencium bau, melihat warna) — subjektif dan tidak konsisten
- Beras berkualitas rendah bisa menyebabkan keracunan aflatoxin (karsinogenik)

**Solusi:**
Probe electronic nose (e-Nose) portabel yang:
1. **Mengambil sampel udara** dari karung/gudang beras menggunakan pompa mikro
2. **Menganalisis VOC (Volatile Organic Compounds)** menggunakan larik sensor gas MOS (Metal Oxide Semiconductor)
3. **Mengklasifikasikan kualitas beras** menggunakan AI: Grade A (baik) / Grade B (mulai turun) / Grade C (rusak/aflatoxin)
4. **Mengestimasi kadar air** berdasarkan pola VOC
5. **Dashboard agregat** untuk Bulog: peta kualitas beras per gudang

**Deep Engineering:**
- Sensor fusion: 6-8 sensor gas MOS (MQ-135, MQ-3, MQ-4, dll) dengan sensitivitas berbeda terhadap VOC
- Pattern recognition: PCA + SVM/CNN untuk klasifikasi pola "breathprint" beras
- Kalibrasi otomatis: kompensasi suhu dan kelembaban (karena gudang tidak terkontrol)
- Edge AI: inferensi lokal tanpa internet

**Hardware:**
- Probe e-Nose: Arduino/ESP32 + 6-8 sensor gas MOS + pompa mikro + LCD display
- Biaya per unit: Rp 500.000 - 1.000.000 (sensor MOS murah)
- Prototipe: probe + sampel beras (baik, agak bau, berjamur)

**Validasi:**
- Kerjasama dengan Bulog Divre DIY
- Uji 100+ sampel beras dari berbagai gudang
- Metrik: akurasi klasifikasi grade, korelasi dengan kadar air aktual (laboratorium), waktu pengukuran per sampel

**Urgensi Nasional:**
- Ketahanan pangan (food security)
- Pencegahan keracunan aflatoxin
- Efisiensi logistik Bulog (prioritas distribusi beras yang mulai turun kualitasnya)

**Model Bisnis:**
- B2G: pengadaan oleh Bulog untuk seluruh gudang
- SaaS: dashboard quality mapping + predictive spoilage
- Estimasi: 1 probe = 50 sampel/hari = 15.000 sampel/tahun

**Demo di Final:**
- Bawa probe e-Nose + 3 sampel beras (Grade A, B, C)
- Juri melihat: probe dicolokkan ke sampel, AI mengklasifikasikan grade, hasil muncul di LCD + dashboard

---

### IDE 4: CropPulse — Deteksi Stres Tanaman dari Kamera HP (rPPG untuk Pertanian)

**Cross-pollination:** Teknologi rPPG (gap-riset-indonesia.md) + Pertanian Rakyat

**Masalah Nasional:**
- Petani kecil Indonesia (14 juta KK) tidak memiliki akses ke teknologi precision agriculture
- Deteksi stres tanaman (kekurangan air, kekurangan hara, serangan hama) biasanya terlambat — baru terlihat saat daun sudah kuning/layu parah
- Teknologi hyperspectral imaging untuk deteksi dini stres tanaman sangat mahal (Rp 50-500 juta)

**Solusi:**
Aplikasi smartphone yang menggunakan kamera HP + kartu kalibrasi warna murah (Rp 10.000) untuk:
1. **Memotret daun tanaman** dengan kartu kalibrasi di sampingnya (untuk white balance)
2. **Menganalisis perubahan warna halus** pada daun menggunakan algoritma rPPG-like (spectral analysis)
3. **Mendeteksi stres dini:** kekurangan air (stomata menutup → reflektansi NIR berubah), kekurangan nitrogen (klorofil menurun → warna hijau memudar), serangan hama (pola bintik spesifik)
4. **Memberikan rekomendasi:** "Tanaman Anda kekurangan air, siram dalam 24 jam" atau "Defisiensi nitrogen, berikan pupuk urea"

**Deep Engineering:**
- Adaptasi algoritma rPPG (yang biasanya mendeteksi denyut jantung dari perubahan warna kulit) ke deteksi stres tanaman dari perubahan warna daun
- Color channel normalization (dari riset AortaGate) untuk kompensasi pencahayaan berbeda
- Spectral analysis: ekstraksi indeks vegetasi (NDVI-like) dari kamera RGB biasa (bukan hyperspectral)
- Custom CNN untuk klasifikasi jenis stres (air / nitrogen / hama / penyakit)

**Hardware:**
- Hanya smartphone + kartu kalibrasi warna (printed on cardboard, Rp 10.000)
- Tidak perlu hardware khusus (keunggulan: sangat murah dan scalable)

**Validasi:**
- Uji coba di lahan pertanian mitra (sawah/ladang sayur) di DIY
- Metrik: akurasi deteksi stres vs diagnosis ahli pertanian, waktu deteksi dini (berapa hari lebih awal dari visual inspection)

**Urgensi Nasional:**
- 14 juta petani kecil = dampak sosial masif
- Peningkatan produktivitas pertanian = kemandirian pangan
- Perubahan iklim = stres tanaman lebih sering

**Model Bisnis:**
- Freemium: gratis untuk petani kecil, premium untuk perusahaan perkebunan
- B2G: kerjasama dengan Dinas Pertanian untuk penyuluhan massal
- Data monetization: aggregate crop health data untuk asuransi pertanian

**Demo di Final:**
- Bawa 2 pot tanaman (sehat dan stres — bisa disiapkan dengan tidak menyiram selama 3 hari)
- Juri memotret dengan HP, aplikasi mendeteksi stres, rekomendasi muncul

**Kelemahan:**
- Hardware demo kurang "wow" (hanya HP + tanaman)
- Validasi membutuhkan waktu (tanaman perlu tumbuh dan mengalami stres)
- Akurasi mungkin rendah tanpa kamera hyperspectral

---

### IDE 5: WasteVision — AI Waste Classification untuk Bank Sampah

**Cross-pollination:** Computer Vision (YOLO) + Circular Economy

**Masalah Nasional:**
- Indonesia adalah **penghasil sampah plastik ke laut terbesar #2 di dunia** (setelah China)
- Program Bank Sampah (waste bank) ada di banyak kota, tapi sorting masih manual
- Petugas bank sampah tidak tahu nilai ekonomis sampah yang diterima
- Tidak ada data agregat tentang jenis dan volume sampah per wilayah

**Solusi:**
Stasiun pemilah sampah cerdas (smart sorting station) yang:
1. **Menerima sampah** dari nasabah bank sampah
2. **Memindai sampah** menggunakan kamera + weight sensor
3. **Mengklasifikasikan jenis sampah** menggunakan YOLO custom-trained: plastik PET, plastik HDPE, kertas, kardus, logam, kaca, organik, residu
4. **Mengestimasi nilai ekonomis** berdasarkan harga pasar sampah (terintegrasi dengan API harga sampah)
5. **Mencatat ke akun nasabah** (poin/saldo)
6. **Dashboard agregat** untuk pemerintah kota: volume sampah per jenis per wilayah

**Deep Engineering:**
- Custom YOLO model trained on Indonesian waste types (dataset Waste Classification tidak mencakup sampah khas Indonesia seperti sachet, styrofoam box, dll)
- Multi-object detection: satu frame bisa berisi 5-10 item sampah sekaligus
- Weight estimation dari citra (volume estimation + density database)
- Contamination detection: mendeteksi sampah yang terkontaminasi (misal botol masih berisi cairan)

**Hardware:**
- Stasiun pemindai: Raspberry Pi 5 + kamera + load cell (timbangan) + conveyor belt kecil (opsional)
- LCD display untuk menampilkan hasil klasifikasi dan nilai ekonomis
- Prototipe: meja + kamera + timbangan + sampel sampah

**Validasi:**
- Kerjasama dengan Bank Sampah di Sleman/Yogyakarta
- Uji 500+ item sampah
- Metrik: akurasi klasifikasi, kecepatan pemindaian per item, korelasi estimasi nilai vs harga aktual

**Urgensi Nasional:**
- Sampah plastik ke laut = masalah lingkungan global
- Circular economy = prioritas pemerintah (SDGs No. 12)
- Bank Sampah = program nasional (10.000+ bank sampah di Indonesia)

**Model Bisnis:**
- B2G: pengadaan oleh Dinas Lingkungan Hidup
- Revenue sharing: bank sampah mendapat fee dari penjualan sampah yang sudah terpilah
- Data monetization: aggregate waste data untuk FMCG companies (EPR reporting)

**Demo di Final:**
- Bawa stasiun pemindai + kantong sampah campur
- Juri melempar sampah ke conveyor/meja, sistem mengklasifikasikan dan menampilkan nilai ekonomis

---

### IDE 6: PalmGrade — AI Multi-Modal untuk Quality Grading TBS Kelapa Sawit

**Cross-pollination:** Computer Vision + Near-Infrared + Akustik (multi-modal fusion)

**Masalah Nasional:**
- Indonesia adalah **produsen kelapa sawit #1 dunia** (46% produksi global)
- Kualitas Tandan Buah Segar (TBS) sangat menentukan rendemen minyak (CPO)
- Grading TBS di pabrik kelapa sawit (PKS) masih **manual dan subjektif** (grader manusia menilai kematangan, ukuran, kerusakan)
- Kesalahan grading menyebabkan: pembayaran tidak adil ke petani, rendemen minyak rendah, kerugian miliaran rupiah

**Solusi:**
Stasiun grading TBS otomatis yang menggunakan **3 modalitas sensor**:
1. **Computer Vision (RGB camera):** klasifikasi kematangan (mentah/matang/lewat matang), deteksi kerusakan fisik, estimasi berat
2. **Near-Infrared (NIR) sensor:** estimasi kadar minyak (oil content) berdasarkan absorpsi NIR
3. **Akustik (contact microphone):** deteksi buah kosong (tanpa daging) berdasarkan resonansi saat buah diketuk ringan

**Deep Engineering:**
- Multi-modal fusion: menggabungkan fitur dari 3 sensor (vision + spectral + acoustic) menggunakan late fusion atau attention mechanism
- Custom CNN untuk klasifikasi kematangan TBS (dataset TBS Indonesia belum ada di publik)
- NIR calibration model: regresi untuk estimasi kadar minyak dari absorpsi NIR
- Acoustic resonance analysis: FFT + peak detection untuk deteksi buah kosong

**Hardware:**
- Stasiun grading: conveyor belt + 3 sensor (kamera RGB + NIR LED+sensor + contact mic) + edge device
- Prototipe skala kecil: 3-5 buah TBS (bisa diganti dengan buah lain yang mirip)

**Validasi:**
- Kerjasama dengan PKS (Pabrik Kelapa Sawit) di Riau/Kalimantan (atau perkebunan sawit di DIY jika ada)
- Uji 200+ TBS
- Metrik: akurasi klasifikasi kematangan, korelasi estimasi kadar minyak vs lab test, agreement dengan grader manusia

**Urgensi Nasional:**
- Kelapa sawit = komoditas ekspor terbesar Indonesia (Rp 300T/tahun)
- Hilirisasi = prioritas pemerintah (menambah nilai di dalam negeri)
- Keadilan untuk petani kecil (40% produksi dari petani rakyat)

**Model Bisnis:**
- B2B: penjualan ke PKS (200+ PKS di Indonesia)
- SaaS: dashboard quality tracking + predictive yield
- Estimasi: 1 stasiun = 500 TBS/jam = peningkatan rendemen 2-3% = penghematan miliaran rupiah/tahun

**Demo di Final:**
- Bawa stasiun grading mini + 5 buah (bisa pakai buah nangka atau buah lain yang mirip TBS)
- Juri melihat: buah dilewatkan conveyor, sistem mengklasifikasikan kematangan + estimasi kadar minyak

**Kelemahan:**
- Akses ke PKS untuk validasi mungkin sulit (perusahaan swasta)
- TBS tidak tersedia di DIY (harus impor dari Riau/Kalimantan)
- Demo di final: TBS asli sulit dibawa (berat, cepat busuk)

---

## 4. Matriks Evaluasi Komparatif

Skor 1-5 (5 = terbaik). Ethical = kemudahan ethical clearance (5 = tidak perlu). Feasibility = kelayakan 3-6 bulan.

| Ide | Deep Eng | Hardware | Validasi | Urgensi | Institusi | Bisnis | Demo | Ethical | Feasibility | **TOTAL** |
|-----|----------|----------|----------|---------|-----------|--------|------|---------|-------------|-----------|
| **SajiTrack** | 4 | 4 | 3 | 5 | 3 | 4 | 5 | 5 | 3 | **36** |
| **GridSense** | 5 | 4 | 2 | 4 | 2 | 3 | 5 | 5 | 3 | **33** |
| **NoseGrain** | 4 | 4 | 3 | 4 | 3 | 3 | 4 | 5 | 3 | **33** |
| **CropPulse** | 5 | 2 | 3 | 4 | 3 | 3 | 3 | 5 | 3 | **31** |
| **WasteVision** | 3 | 4 | 4 | 4 | 3 | 3 | 4 | 5 | 4 | **34** |
| **PalmGrade** | 5 | 4 | 3 | 4 | 2 | 4 | 4 | 5 | 2 | **33** |

---

## 5. Rekomendasi Top 3

### Rekomendasi 1: SajiTrack (Skor 36) — PALING DIREKOMENDASIKAN

**Mengapa #1:**
- **Urgensi tertinggi:** MBG adalah program flagship #1 pemerintah (Rp 268T)
- **Demo paling spektakuler:** memindai nampan makanan asli di depan juri
- **Leverage riset existing:** analisis ekonomi MBG sudah sangat mendalam
- **Tidak perlu ethical clearance:** memindai makanan, bukan manusia
- **Data tersedia:** Tabel Komposisi Pangan Indonesia (TKPI) publik, dataset makanan bisa dikumpulkan
- **Timeline realistis:** 3-6 bulan untuk MVP

**Risiko:**
- Food segmentation CNN untuk makanan Indonesia belum ada (harus collect dataset)
- Volume estimation dari 2D image + depth sensor cukup challenging
- Butuh mitra sekolah/SPPG untuk validasi

**Langkah pertama:**
1. Collect dataset makanan Indonesia (foto 500+ nampan makanan dari kantin/sekolah)
2. Train baseline YOLO untuk segmentasi makanan
3. Bangun prototipe stasiun pemindai (Raspberry Pi + kamera + timbangan)

---

### Rekomendasi 2: WasteVision (Skor 34) — PALING FEASIBLE

**Mengapa #2:**
- **Feasibility tertinggi:** YOLO untuk waste classification sudah ada (tinggal fine-tune untuk sampah Indonesia)
- **Mitra mudah:** Bank Sampah ada di setiap kecamatan
- **Demo menarik:** juri bisa mencoba membuang sampah dan melihat klasifikasi real-time
- **Tidak perlu ethical clearance:** memindai sampah, bukan manusia
- **Dampak lingkungan:** circular economy, SDGs No. 12

**Risiko:**
- Deep engineering kurang "dalam" dibanding SajiTrack/GridSense (YOLO fine-tuning cukup standar)
- Harga sampah fluktuatif (estimasi nilai ekonomis mungkin tidak akurat)

**Langkah pertama:**
1. Collect dataset sampah Indonesia (foto 1000+ item sampah dari bank sampah)
2. Fine-tune YOLOv8 untuk klasifikasi sampah Indonesia
3. Bangun prototipe stasiun pemindai (Raspberry Pi + kamera + timbangan)

---

### Rekomendasi 3: GridSense (Skor 33) — PALING DEEP ENGINEERING

**Mengapa #3:**
- **Deep engineering terkuat:** akustik DSP pipeline (proven dari TB Vector) + edge AI
- **Masalah masif:** PDAM kehilangan 30-40% air (Rp 10-15T/tahun)
- **Demo sangat impresif:** mendeteksi kebocoran pipa kecil di depan juri
- **Teknologi proven:** akustik DSP sudah memenangkan Juara 1 Gemastik 2025

**Risiko:**
- Akses ke PDAM untuk validasi mungkin sulit (birokrasi BUMN)
- Data akustik kebocoran pipa tidak tersedia publik (harus collect dari nol)
- Hardware lebih kompleks (sensor clamp-on, GPS, 4G modem)

**Langkah pertama:**
1. Riset literatur: akustik signature kebocoran pipa (frekuensi khas)
2. Collect dataset: rekam suara pipa normal vs bocor (bisa simulasi di lab)
3. Bangun prototipe sensor (Raspberry Pi + piezoelectric mic + pipa PVC kecil)

---

## 6. Pertimbangan Tema Gemastik 2026

Tema 2026 belum diumumkan, tapi berdasarkan pola:
- 2025: "Pengembangan TIK untuk Mendukung Kemandirian Bangsa"
- Sub-tema: swasembada pangan, energi, air, ekonomi kreatif, ekonomi hijau, ekonomi biru

**Pemetaan ide ke kemungkinan tema 2026:**

| Kemungkinan Tema | Ide yang Cocok |
|------------------|----------------|
| Kemandirian Pangan | SajiTrack, NoseGrain, CropPulse |
| Kemandirian Energi | GridSense (jika diperluas ke energi) |
| Kemandirian Air | GridSense (PDAM) |
| Ekonomi Hijau/Biru | WasteVision, AquaPulse |
| Hilirisasi Komoditas | PalmGrade, NoseGrain |
| Kemandirian Ekonomi Digital | SajiTrack (blockchain), WasteVision (marketplace) |

**Kesimpulan:** SajiTrack dan WasteVision paling fleksibel terhadap berbagai kemungkinan tema.

---

## 7. Langkah Berikutnya

1. **Pilih 1 ide** dari top 3 (SajiTrack / WasteVision / GridSense)
2. **Validasi feasibility** dengan dosen pembimbing (siapa yang relevan?)
3. **Mulai collect dataset** (langkah paling kritis dan memakan waktu)
4. **Bangun MVP** (minimum viable product) dalam 4-6 minggu
5. **Cari mitra validasi** (sekolah/bank sampah/PDAM)
6. **Tunggu pengumuman tema 2026** — sesuaikan framing jika perlu
