# Pemetaan Masalah Mendesak Indonesia — 8 Domain untuk Gemastik PPL 2026

> Riset mendalam untuk mengidentifikasi masalah berdampak langsung pada rakyat, yang bisa diatasi dengan Software + IoT/Sensor + AI. Setiap domain dinilai berdasarkan: (1) Statistik terbaru, (2) Dampak langsung ke rakyat, (3) Kolektibilitas dataset oleh mahasiswa, (4) Teknologi yang sudah ada, (5) Gap yang belum terisi.

---

## A. Kesehatan Mental (Mental Health)

### 1. Statistik Terbaru (2024-2026)

| Indikator | Angka | Sumber |
|-----------|-------|--------|
| Prevalensi gangguan mental (dewasa) | 1 dari 5 orang (~20%) | Kemenkes RI / WHO 2024 |
| Prevalensi gangguan mental (anak-anak) | 1 dari 7 anak (~14%) | Kemenkes RI 2024 |
| Gangguan mental-emosional (Riskesdas) | 14,3% penduduk | Riskesdas 2018 |
| Depresi | 4,8% penduduk (~13 juta) | Riskesdas 2018 |
| Rasio psikiater | 1 : 300.000-400.000 penduduk | WHO MH Atlas |
| Total psikiater | ~800 orang | Kemenkes |
| Total psikolog klinis | ~451 orang | Kemenkes |
| Angka bunuh diri | 1,20 per 100.000 (2021) | WHO/Macrotrends |
| Tren bunuh diri | Menurun dari 1,60 (2019) → 1,38 (2020) → 1,20 (2021) | Macrotrends |

### 2. Dampak Langsung ke Rakyat

- **Stigma masif:** 60-70% penderita tidak pernah mencari bantuan profesional karena stigma budaya ("kurang iman", "cari perhatian").
- **Akses nihil di pelosok:** Dengan hanya 800 psikiater untuk 270 juta jiwa, sebagian besar kabupaten di Indonesia Timur TIDAK memiliki psikiater sama sekali.
- **Bunuh diri tersembunyi:** Angka bunuh diri resmi sangat rendah (1,20/100k) karena underreporting — keluarga menyembunyikan penyebab kematian karena stigma. Estimasi riil bisa 3-5x lebih tinggi.
- **Generasi muda krisis:** Survei BPS 2024 menunjukkan 1 dari 3 remaja melaporkan perasaan kesepian dan cemas yang persisten.

### 3. Kolektibilitas Dataset oleh Mahasiswa

| Dataset | Metode Koleksi | Tingkat Kesulitan |
|---------|----------------|-------------------|
| Data teks curhatan anonim | Scraping platform konseling online (dengan izin) / survei anonim | Mudah |
| Data suara (analisis emosi) | Rekam percakapan screening PHQ-9/GAD-7 | Sedang |
| Data facial expression | Video call screening dengan consent | Sedang |
| Data wearable (HRV, sleep) | Pinjam smartwatch ke 50-100 responden selama 2 minggu | Sedang |
| Kuesioner standar | PHQ-9, GAD-7, DASS-21 sudah tersedia dalam Bahasa Indonesia | Sangat Mudah |

**Catatan:** Tidak perlu ethical clearance rumah sakit jika menggunakan skrining non-klinis (bukan diagnosis). Cukup informed consent dan anonymisasi.

### 4. Teknologi yang Sudah Ada

- **Halodoc / Alodokter:** Konsultasi telemedicine dengan psikolog, tapi mahal (Rp150-300rb/sesi) dan tidak menjangkau masyarakat bawah.
- **Riley (chatbot CBT):** Chatbot CBT berbahasa Indonesia, tapi berbasis aturan (rule-based), bukan AI generatif.
- **Woebot / Wysa (global):** Chatbot CBT berbasis AI, tapi hanya berbahasa Inggris dan tidak memahami konteks budaya Indonesia.
- **Aplikasi meditasi:** Riliv, Bicarakan — lebih ke wellness, bukan deteksi dini.

### 5. Gap yang Belum Terisi

1. **Deteksi dini berbasis suara/teks dalam Bahasa Indonesia gaul** — belum ada model NLP yang dilatih pada data percakapan mental health berbahasa Indonesia (formal maupun slang).
2. **Skrining pasif via pola penggunaan HP** — analisis pola tidur (screen time), pola ketik (typing speed variability), dan pola komunikasi sebagai proxy deteksi depresi.
3. **Sistem triase otomatis untuk Puskesmas** — alat bantu perawat (bukan psikiater) untuk melakukan skrining awal dan merujuk kasus berat.
4. **Pendekatan kolektif berbasis komunitas** — sistem yang melibatkan kader Posyandu/Karang Taruna sebagai first responder, bukan hanya individu.

---

## B. Keselamatan Kerja (Occupational Safety)

### 1. Statistik Terbaru (2024-2026)

| Indikator | Angka | Sumber |
|-----------|-------|--------|
| Kecelakaan kerja (2022) | 234.320 kasus | BPJS Ketenagakerjaan |
| Kecelakaan fatal (2022) | 8.227 kasus | BPJS Ketenagakerjaan |
| Kematian per hari | ~22 orang/hari | Kalkulasi |
| Rasio kecelakaan | 1 dari 1.000 pekerja | ILO |
| Sektor paling berbahaya | Manufaktur, konstruksi, pertanian | ILO/BPS |
| Penyakit akibat kerja | 24.712 kasus (2022) | BPJS Ketenagakerjaan |
| Kerugian ekonomi | Rp14,5 triliun/tahun | Estimasi ILO |
| Peringkat global (non-fatal injury) | #6 dunia | ILO 2023 |

### 2. Dampak Langsung ke Rakyat

- **22 pekerja meninggal setiap hari** — sebagian besar di sektor konstruksi (jatuh), manufaktur (mesin), dan pertanian (pestisida).
- **UMKM tidak terlindungi:** 65 juta UMKM di Indonesia hampir seluruhnya tidak memiliki sistem K3 (Keselamatan dan Kesehatan Kerja). Tidak ada inspeksi, tidak ada APD, tidak ada pelatihan.
- **Pekerja informal:** 74 juta pekerja informal (ojek, pedagang, buruh harian) tidak tercakup BPJS Ketenagakerjaan. Jika kecelakaan, mereka menanggung biaya sendiri.
- **Konstruksi liar:** Proyek konstruksi kecil (rumah, renovasi) hampir tidak pernah mengikuti standar K3. Tukang bangunan bekerja tanpa helm, harness, atau sepatu safety.

### 3. Kolektibilitas Dataset oleh Mahasiswa

| Dataset | Metode Koleksi | Tingkat Kesulitan |
|---------|----------------|-------------------|
| Foto APD/tidak APD di lokasi konstruksi | Foto langsung di 20-50 lokasi konstruksi DIY | Mudah |
| Data kecelakaan UMKM | Wawancara langsung pemilik UMKM + catatan kecelakaan | Sedang |
| Video postur kerja (ergonomi) | Rekam pekerja UMKM saat bekerja | Sedang |
| Data lingkungan kerja (kebisingan, debu) | Sensor murah (Arduino + sensor suara/debu) di 10-20 lokasi | Sedang |
| Kuesioner K3 | Survei pengetahuan K3 pekerja | Sangat Mudah |

### 4. Teknologi yang Sudah Ada

- **Sistem pelaporan BPJS Ketenagakerjaan:** Online, tapi hanya pencatatan setelah kejadian (reaktif, bukan preventif).
- **SafetyCam (startup lokal):** Deteksi APD via CCTV, tapi mahal dan hanya untuk perusahaan besar.
- **Aplikasi pelaporan K3:** Beberapa startup membuat app pelaporan, tapi tidak ada yang menggunakan AI untuk prediksi risiko.
- **Wearable industri (global):** Smart helmet, smart vest — tapi harga $500+ per unit, tidak terjangkau UMKM.

### 5. Gap yang Belum Terisi

1. **Sistem K3 terjangkau untuk UMKM** — IoT sensor murah (<Rp500rb) + AI yang bisa mendeteksi risiko kecelakaan SEBELUM terjadi (bukan setelah).
2. **Deteksi postur kerja berbahaya** — Computer vision via HP untuk menganalisis ergonomi pekerja dan memperingatkan risiko cedera punggung/RSI.
3. **Prediksi risiko berdasarkan pola kerja** — Analisis jam kerja, kelelahan, dan kondisi lingkungan untuk memprediksi kapan kecelakaan paling mungkin terjadi.
4. **Gamifikasi pelatihan K3** — AR/VR murah untuk melatih pekerja UMKM tentang prosedur keselamatan tanpa menghentikan produksi.

---

## C. Lansia & Penuaan (Elderly/Aging)

### 1. Statistik Terbaru (2024-2026)

| Indikator | Angka | Sumber |
|-----------|-------|--------|
| Jumlah lansia (60+) | 29,3 juta (10,48% populasi) | BPS 2023 |
| Proyeksi 2030 | 37,2 juta (13%) | BPS |
| Proyeksi 2045 | ~55 juta (19,9%) | BPS |
| Harapan hidup | 71 tahun (2023) | BPS |
| Lansia dengan disabilitas | ~40% dari total lansia | Riskesdas |
| Demensia | ~4 juta orang | Estimasi Alzheimer Indonesia |
| Rasio geriatri | 3 per 1 juta penduduk | IDI |
| Lansia tinggal sendiri | 14,2% | BPS SUPAS 2015 |
| Lansia di pedesaan | 55% dari total lansia | BPS |

### 2. Dampak Langsung ke Rakyat

- **Tsunami perak silently happening:** Indonesia sedang mengalami aging population yang sangat cepat, tapi infrastruktur sosial dan kesehatan belum siap.
- **Sandwich generation crisis:** 45% pekerja usia produktif harus menanggung biaya kesehatan orang tua sekaligus anak — mengurangi produktivitas ekonomi.
- **Jatuh = pembunuh #1 lansia:** 30% lansia mengalami jatuh minimal 1x/tahun. Jatuh pada lansia menyebabkan fraktur panggul yang mortalitasnya 20-30% dalam 1 tahun.
- **Isolasi sosial:** 14,2% lansia tinggal sendiri, banyak di pedesaan tanpa akses ke layanan kesehatan. Depresi pada lansia sangat underdiagnosed.
- **Polifarmasi:** Lansia rata-rata mengonsumsi 5+ obat/hari tanpa monitoring interaksi obat yang memadai.

### 3. Kolektibilitas Dataset oleh Mahasiswa

| Dataset | Metode Koleksi | Tingkat Kesulitan |
|---------|----------------|-------------------|
| Data pola jalan (gait analysis) | Video lansia berjalan + IMU sensor murah | Sedang |
| Data aktivitas harian | Sensor gerak (PIR) di rumah 10-20 lansia | Sedang |
| Data jatuh/near-fall | Wawancara + accelerometer wearable | Sedang |
| Data interaksi sosial | Log frekuensi komunikasi (HP/telepon) | Mudah |
| Data kognitif | Mini-Mental State Exam (MMSE) Bahasa Indonesia | Mudah |

### 4. Teknologi yang Sudah Ada

- **Panic button/pendant (global):** Life Alert, dll — tapi mahal ($30-50/bulan) dan butuh infrastruktur call center.
- **Smart home untuk lansia (global):** Amazon Alexa, Google Home — tidak berbahasa Indonesia, tidak memahami konteks budaya.
- **Aplikasi pengingat obat:** Banyak tersedia, tapi tidak memonitor kepatuhan secara otomatis.
- **Telemedicine lansia:** Halodoc dll, tapi UI/UX tidak ramah lansia (teks kecil, navigasi rumit).

### 5. Gap yang Belum Terisi

1. **Deteksi jatuh berbasis Wi-Fi CSI** — menggunakan perubahan sinyal Wi-Fi untuk mendeteksi jatuh TANPA kamera atau wearable (privasi terjaga, biaya rendah).
2. **Monitoring kognitif pasif** — analisis pola penggunaan HP (kecepatan mengetik, frekuensi lupa) sebagai early warning demensia.
3. **Sistem "check-in" otomatis berbasis suara** — AI yang menelepon lansia secara otomatis, mengobrol dalam bahasa daerah, dan mendeteksi anomali (tidak menjawab, suara lemah, dll).
4. **Prediksi risiko jatuh berbasis gait** — analisis cara jalan via kamera HP untuk memprediksi risiko jatuh 6 bulan ke depan.

---

## D. Disabilitas (Disability)

### 1. Statistik Terbaru (2024-2026)

| Indikator | Angka | Sumber |
|-----------|-------|--------|
| Prevalensi disabilitas (sensitif) | 4,29% (Sensus 2010) | BPS |
| Prevalensi disabilitas (fungsional) | 11,05% (Riskesdas 2007) | Riskesdas |
| Estimasi jumlah penyandang disabilitas | 22,5 juta (estimasi 8% x 280 juta) | Kalkulasi |
| Tingkat partisipasi kerja disabilitas | ~30% | BPS Sakernas |
| Akses pendidikan (disabilitas anak) | <50% bersekolah | UNICEF |
| Rasio disabilitas naik seiring usia | Signifikan di atas 60 tahun | BPS |
| Ratifikasi UN CRPD | 30 November 2011 | PBB |

### 2. Dampak Langsung ke Rakyat

- **22,5 juta orang** hidup dengan disabilitas — setara populasi seluruh Australia — tapi hampir tidak terlihat di ruang publik karena infrastruktur yang tidak aksesibel.
- **Pengangguran masif:** 70% penyandang disabilitas usia produktif tidak bekerja, bukan karena tidak mampu, tapi karena lingkungan kerja tidak aksesibel.
- **Pendidikan terputus:** Lebih dari separuh anak disabilitas tidak bersekolah atau putus sekolah karena sekolah tidak memiliki fasilitas atau guru yang inklusif.
- **Stigma ganda:** Disabilitas mental/intelektual masih dianggap "aib keluarga" di banyak daerah. Pasung (mengurung ODGJ) masih terjadi — diperkirakan 18.800 orang dipasung (2018).

### 3. Kolektibilitas Dataset oleh Mahasiswa

| Dataset | Metode Koleksi | Tingkat Kesulitan |
|---------|----------------|-------------------|
| Data aksesibilitas infrastruktur | Foto + GPS trotoar/ramp/elevator di 50+ lokasi | Mudah |
| Data navigasi tunanetra | Rekam perjalanan tunanetra + obstacle logging | Sedang |
| Data bahasa isyarat (video) | Rekam 100+ kosakata BISINDO dari komunitas tuli | Sedang |
| Data interaksi disabilitas dengan layanan publik | Mystery shopping + wawancara | Sedang |
| Data pola mobilitas disabilitas fisik | GPS tracking + wawancara | Mudah |

### 4. Teknologi yang Sudah Ada

- **Google Live Transcribe:** Speech-to-text real-time, tapi tidak mendukung Bahasa Indonesia dengan baik dan tidak mengenali bahasa isyarat.
- **Be My Eyes (global):** Volunteer membantu tunanetra via video call, tapi tidak ada versi lokal dan bergantung pada ketersediaan volunteer.
- **Kursi roda elektrik:** Ada, tapi mahal (Rp15-50 juta) dan tidak cocok untuk jalan rusak Indonesia.
- **Aplikasi penerjemah BISINDO:** Beberapa prototipe akademik, tapi tidak ada yang production-ready.

### 5. Gap yang Belum Terisi

1. **Navigasi indoor untuk tunanetra berbasis audio AI** — sistem yang mengenali lingkungan (tangga, pintu, halangan) via kamera HP dan memberikan instruksi suara dalam Bahasa Indonesia.
2. **Penerjemah BISINDO ↔ Bahasa Indonesia real-time** — computer vision yang menerjemahkan bahasa isyarat ke teks/suara dan sebaliknya, untuk komunikasi di layanan publik.
3. **Audit aksesibilitas otomatis** — AI yang memfoto trotoar/bangunan dan memberikan skor aksesibilitas + rekomendasi perbaikan.
4. **Platform matching kerja inklusif** — sistem yang mencocokkan kemampuan penyandang disabilitas dengan pekerjaan yang bisa mereka lakukan, bukan berdasarkan "kekurangan" tapi berdasarkan "kemampuan".

---

## E. Kekerasan & Kejahatan (Violence/Crime)

### 1. Statistik Terbaru (2024-2026)

| Indikator | Angka | Sumber |
|-----------|-------|--------|
| Angka pembunuhan | 0,4 per 100.000 (salah satu terendah di dunia) | Knoema 2017 |
| KDRT (laporan) | 4.555 kasus (2022) | Komnas Perempuan |
| KDRT (estimasi aktual) | 10-20x lebih tinggi dari laporan | Estimasi UNICEF |
| Kekerasan terhadap anak | 21.000+ kasus/tahun (laporan) | KPAI |
| Tawuran pelajar | Ratusan insiden/tahun di Jabodetabek | Kepolisian |
| Human trafficking | 5.000+ kasus (2015-2022) | IOM |
| Penipuan online | Meningkat 300% sejak 2020 | Polri |
| Cyberbullying | 43% remaja pernah mengalami | UNICEF 2023 |

### 2. Dampak Langsung ke Rakyat

- **KDRT adalah gunung es:** Untuk setiap 1 kasus yang dilaporkan, 10-20 kasus tidak dilaporkan karena korban takut, malu, atau bergantung secara ekonomi pada pelaku.
- **Anak-anak paling rentan:** 21.000+ kasus kekerasan anak dilaporkan per tahun — sebagian besar oleh orang terdekat (keluarga, guru, tetangga).
- **Penipuan digital merajalela:** Judi online, pinjol ilegal, dan penipuan investasi menghancurkan ekonomi keluarga miskin. Korban bunuh diri karena terjerat pinjol ilegal semakin sering diberitakan.
- **Tawuran = budaya kekerasan:** Tawuran pelajar di Jabodetabek terjadi hampir setiap minggu, sering mengakibatkan kematian. Akar masalah: tidak ada saluran ekspresi positif untuk remaja marginal.

### 3. Kolektibilitas Dataset oleh Mahasiswa

| Dataset | Metode Koleksi | Tingkat Kesulitan |
|---------|----------------|-------------------|
| Data teks ancaman/kekerasan online | Scraping media sosial (dengan etika) | Mudah |
| Data lokasi rawan kejahatan | Open data kepolisian + crowdsourcing | Mudah |
| Data pola penipuan online | Screenshot + analisis pola pesan penipuan | Sedang |
| Data kekerasan verbal (audio) | Rekam dengan consent di setting tertentu | Sulit (etis) |
| Data cyberbullying | Survei anonim remaja | Mudah |

### 4. Teknologi yang Sudah Ada

- **Panic button app (Polri):** Ada, tapi tidak banyak diketahui dan respons lambat.
- **CCTV + AI (Jakarta):** Smart city Jakarta menggunakan AI untuk deteksi kemacetan, BUKAN untuk deteksi kekerasan.
- **Sistem pelaporan KDRT:** Komnas Perempuan punya hotline, tapi tidak ada sistem digital yang memudahkan pelaporan anonim.
- **Deteksi penipuan (bank):** Bank besar punya fraud detection, tapi tidak melindungi masyarakat dari penipuan di luar sistem perbankan (pinjol ilegal, judi online).

### 5. Gap yang Belum Terisi

1. **Deteksi dini KDRT berbasis pola komunikasi** — AI yang menganalisis pola pesan (WhatsApp, SMS) untuk mendeteksi tanda-tanda kekerasan psikologis dan memberikan alert + resource ke korban.
2. **Prediksi lokasi rawan kejahatan** — Analisis data historis + cuaca + event + media sosial untuk memprediksi hotspot kejahatan per jam.
3. **Deteksi penipuan digital real-time** — Browser extension/app yang menganalisis pesan/website dan memperingatkan pengguna tentang penipuan, pinjol ilegal, atau judi online.
4. **Sistem pelaporan kekerasan anak anonim** — Platform yang memungkinkan guru/tetangga melaporkan kecurigaan kekerasan anak secara anonim, dengan AI yang memprioritaskan kasus berdasarkan tingkat keparahan.

---

## F. Bencana Alam (Natural Disasters)

### 1. Statistik Terbaru (2024-2026)

| Indikator | Angka | Sumber |
|-----------|-------|--------|
| Negara paling aktif seismik | #1 di dunia | USGS |
| Gempa M>7 (1901-2019) | 150+ kejadian | USGS |
| Gempa M>8 | Rata-rata 1x per 5-7 tahun | USGS |
| Gempa M>9 | ~1x per 100 tahun | USGS |
| Gempa Cianjur 2022 | M5.6, 335-635 tewas, 7.729 luka | Wikipedia |
| Gempa+Tsunami Palu 2018 | M7.5, 4.340 tewas, tsunami 11m | Wikipedia |
| Gempa Jogja 2006 | M6.4, 5.749 tewas, 38.568 luka | Wikipedia |
| Tsunami Aceh 2004 | M9.2-9.3, 167.540 tewas di Indonesia | Wikipedia |
| Gempa 2026 (sudah terjadi) | Sulawesi Tengah M6.7 (3 tewas), Mindanao M7.8, Maluku Utara M7.4, Pacitan M5.8 | Wikipedia |
| Gunung api aktif | 127 gunung | PVMBG |
| Banjir per tahun | 1.000+ kejadian | BNPB |

### 2. Dampak Langsung ke Rakyat

- **Setiap tahun, ribuan orang kehilangan rumah dan nyawa** karena bencana alam. Sistem peringatan dini ada tapi TIDAK menjangkau masyarakat di tingkat desa/kelurahan.
- **Evakuasi kacau:** Saat bencana terjadi, informasi simpang siur, jalur evakuasi tidak jelas, dan posko pengungsian tidak terkoordinasi.
- **Post-disaster:** Korban bencana sering terlantar berbulan-bulan tanpa kepastian bantuan. Data korban dan kebutuhan logistik tidak terkelola dengan baik.
- **Urban risk:** Kota-kota besar di pesisir (Jakarta, Semarang, Surabaya) menghadapi ancaman kombinasi: gempa + banjir rob + penurunan tanah.

### 3. Kolektibilitas Dataset oleh Mahasiswa

| Dataset | Metode Koleksi | Tingkat Kesulitan |
|---------|----------------|-------------------|
| Data gempa historis | USGS API (gratis, terbuka) | Sangat Mudah |
| Data banjir | BNPB open data + crowdsourcing | Mudah |
| Data infrastruktur evakuasi | Survey lapangan + GPS mapping | Sedang |
| Data respons warga saat bencana | Survei + analisis media sosial | Sedang |
| Data sensor getaran (low-cost) | Arduino + accelerometer (MPU6050) | Sedang |

### 4. Teknologi yang Sudah Ada

- **BMKG InaTEWS:** Sistem peringatan dini tsunami nasional, tapi berbasis SMS dan website — tidak real-time push notification ke level desa.
- **InfoBMKG app:** Ada, tapi rating rendah dan sering terlambat.
- **PetaBencana.id:** Crowdsourcing banjir, tapi hanya untuk Jakarta dan tidak real-time.
- **Early warning system (EWS) gempa:** ShakeAlert (AS), Earthquake Early Warning (Jepang) — Indonesia BELUM memiliki EWS gempa berbasis smartphone.
- **Drone untuk assessment:** BNPB menggunakan drone, tapi hanya setelah bencana terjadi (reaktif).

### 5. Gap yang Belum Terisi

1. **Android Earthquake Alert (seperti Google's Android Earthquake Alerts)** — menggunakan accelerometer di jutaan HP Android sebagai jaringan seismometer masif. Indonesia BELUM mengadopsi ini secara nasional.
2. **Sistem evakuasi cerdas berbasis AI** — menggunakan data real-time (lokasi gempa, ketinggian tsunami, kepadatan penduduk) untuk menghitung dan menampilkan jalur evakuasi optimal di HP warga.
3. **Chatbot koordinasi pengungsi** — AI yang membantu pengungsi menemukan keluarga, mengakses bantuan, dan melaporkan kebutuhan logistik.
4. **Prediksi dampak bangunan** — AI yang menganalisis foto bangunan + data gempa untuk memprediksi apakah bangunan aman dihuni setelah gempa (rapid structural assessment).

---

## G. Kesehatan Ibu & Anak (Maternal/Child Health)

### 1. Statistik Terbaru (2024-2026)

| Indikator | Angka | Sumber |
|-----------|-------|--------|
| Angka Kematian Ibu (AKI) | 183 per 100.000 kelahiran hidup | SUPAS 2023 |
| Target SDGs 2030 | 70 per 100.000 | SDGs |
| Kematian ibu per hari | ~25 orang/hari | Kalkulasi |
| Penyebab kematian ibu #1 | Pendarahan pasca persalinan | Kemenkes |
| Stunting balita | 21,5% (2023) | SSGI 2023 |
| Target stunting 2024 | 14% | Pemerintah |
| Pneumonia (kematian balita #1) | ~19.000 kematian/tahun | UNICEF |
| Kematian bayi | 18,6 per 1.000 kelahiran hidup | BPS 2023 |
| Kematian neonatal | 11 per 1.000 kelahiran hidup | BPS 2023 |
| Persalinan oleh tenaga kesehatan | 96% | BPS 2023 |
| Cakupan imunisasi dasar | ~80% (turun pasca pandemi) | Kemenkes |

### 2. Dampak Langsung ke Rakyat

- **25 ibu meninggal setiap hari** — sebagian besar karena pendarahan yang sebenarnya bisa dicegah jika ditangani dalam golden hour (<1 jam).
- **Stunting = bom waktu generasi:** 21,5% balita Indonesia stunting (tubuh pendek karena malnutrisi kronis). Anak stunting memiliki IQ 10-15 poin lebih rendah, mengurangi produktivitas ekonomi seumur hidup.
- **Pneumonia = pembunuh balita #1:** 19.000 balita meninggal per tahun karena pneumonia. Diagnosis membutuhkan stetoskop dan dokter — kedua hal yang langka di Puskesmas pelosok.
- **MBG (Makan Bergizi Gratis):** Program unggulan pemerintah baru — 82,9 juta penerima, anggaran Rp171 triliun. Implementasi masih banyak masalah: distribusi, monitoring gizi, waste.

### 3. Kolektibilitas Dataset oleh Mahasiswa

| Dataset | Metode Koleksi | Tingkat Kesulitan |
|---------|----------------|-------------------|
| Data suara batuk anak | Rekam di ruang tunggu Puskesmas (dengan izin) | Sedang |
| Data antropometri (tinggi/berat) | Posyandu sudah rutin mengukur | Mudah (kerjasama) |
| Data foto makanan | Foto piring makan anak + analisis gizi AI | Sedang |
| Data kehamilan (risiko tinggi) | Buku KIA + wawancara bidan | Sedang |
| Data imunisasi | Catatan Posyandu | Mudah |

**Catatan:** Data kesehatan anak memerlukan ethical clearance. Namun, data yang dikumpulkan di setting Posyandu (bukan RS) dengan informed consent orang tua biasanya lebih mudah diproses.

### 4. Teknologi yang Sudah Ada

- **ePPGBM (Kemenkes):** Aplikasi pencatatan pertumbuhan balita, tapi hanya digitalisasi formulir kertas — tidak ada analisis prediktif.
- **PrimaKu (IDAI):** Aplikasi pemantauan tumbuh kembang anak oleh dokter, tapi tidak digunakan oleh bidan/kader di lapangan.
- **mNutrition (UNICEF):** SMS-based nutrition education, tapi satu arah dan tidak personal.
- **Deteksi stunting via foto:** Beberapa riset akademik, tapi belum ada yang production-ready untuk konteks Indonesia.

### 5. Gap yang Belum Terisi

1. **Deteksi pneumonia balita via akustik batuk** — AI yang mendengarkan suara batuk anak di ruang tunggu Puskesmas dan mendeteksi pneumonia tanpa stetoskop. Dataset batuk anak Indonesia BELUM ada (semua dataset global berbasis dewasa).
2. **Prediksi stunting 6 bulan sebelum terjadi** — analisis pola makan + pertumbuhan + data keluarga untuk memprediksi stunting SEBELUM terjadi (preventif, bukan kuratif).
3. **Monitoring MBG real-time** — IoT sensor + computer vision untuk memverifikasi bahwa makanan yang dikirim ke sekolah sesuai standar gizi dan benar-benar sampai ke anak.
4. **Deteksi risiko pendarahan pasca persalinan** — AI yang menganalisis data kehamilan (tensi, riwayat, faktor risiko) untuk memprediksi ibu mana yang berisiko pendarahan, sehingga bidan bisa bersiap.

---

## H. Transportasi & Keselamatan Jalan (Transportation/Road Safety)

### 1. Statistik Terbaru (2024-2026)

| Indikator | Angka | Sumber |
|-----------|-------|--------|
| Panjang jalan total | 548.366 km (2020) | BPS/Wikipedia |
| Kematian lalu lintas per tahun | ~25.000-30.000 | Korlantas Polri |
| Kematian per hari | ~70-80 orang/hari | Kalkulasi |
| Kecelakaan bus (contoh 2024-2025) | Putera Fajar (11 tewas, 2024), ALS (12 tewas, 2025) | Wikipedia |
| Kecelakaan kapal ferry (2025) | KMP Tunu Pratama Jaya (19 tewas, 16 hilang) | Wikipedia |
| Kecelakaan kapal (historis) | KM Sinar Bangun Danau Toba (164+ hilang, 2018) | Wikipedia |
| Kemacetan Jakarta | Terburuk di dunia (berulang) | TomTom Index |
| Kendaraan terdaftar | 130+ juta unit | Korlantas |
| Sepeda motor | ~85% dari total kendaraan | BPS |

### 2. Dampak Langsung ke Rakyat

- **70-80 orang meninggal di jalan setiap hari** — lebih dari 2x lipat kematian akibat bencana alam per tahun. Ini adalah "bencana diam-diam" yang terjadi setiap hari.
- **Sepeda motor = mesin pembunuh:** 85% kendaraan adalah motor. Mayoritas kecelakaan fatal melibatkan motor. Helm tidak standar, melawan arus, dan mengangkut 3-4 orang adalah norma, bukan pengecualian.
- **Bus maut:** Kecelakaan bus pariwisata dan bus antar-kota terjadi berulang dengan pola yang sama: rem blong di tanjakan, sopir mengantuk, overloading. Regulasi tidak ditegakkan.
- **Transportasi laut tidak aman:** Ferry tenggelam terjadi hampir setiap tahun. Overloading, kapal tua, dan cuaca buruk adalah kombinasi mematikan.

### 3. Kolektibilitas Dataset oleh Mahasiswa

| Dataset | Metode Koleksi | Tingkat Kesulitan |
|---------|----------------|-------------------|
| Data kecelakaan (open data) | Korlantas Polri + NTMC | Mudah |
| Video perilaku berkendara | Dashcam / HP di 50+ perjalanan | Sedang |
| Data kondisi jalan (lubang, marka) | Foto + GPS mapping di rute tertentu | Mudah |
| Data perilaku helm | Observasi visual di 10+ persimpangan | Sangat Mudah |
| Data kecepatan kendaraan | GPS logging via HP saat berkendara | Mudah |
| Data overloading bus | Observasi + wawancara | Sedang |

### 4. Teknologi yang Sudah Ada

- **Google Maps / Waze:** Navigasi + laporan kemacetan, tapi tidak mendeteksi perilaku berkendara berbahaya.
- **ATCS (Area Traffic Control System):** CCTV lalu lintas di kota besar, tapi hanya untuk manajemen sinyal, bukan deteksi kecelakaan real-time.
- **Dashcam:** Semakin umum, tapi footage tidak dianalisis secara otomatis.
- **e-Tilang (ETLE):** Tilang elektronik, tapi hanya untuk pelanggaran tertentu (lampu merah, kecepatan) di kota besar.
- **Jasaraharja:** Asuransi kecelakaan lalu lintas, tapi klaim sulit dan tidak preventif.

### 5. Gap yang Belum Terisi

1. **Deteksi kantuk sopir bus/truk berbasis AI murah** — kamera HP + AI yang mendeteksi microsleep dan memberikan alarm SEBELUM sopir tertidur. Harga solusi komersial: $500+. Dibutuhkan solusi <Rp2 juta.
2. **Prediksi titik rawan kecelakaan** — AI yang menganalisis data historis kecelakaan + kondisi jalan + cuaca + waktu untuk memprediksi lokasi dan waktu paling berbahaya.
3. **Sistem audit keselamatan bus otomatis** — IoT sensor (getaran, suhu rem, tekanan ban) yang memonitor kondisi bus secara real-time dan melarang bus berangkat jika tidak layak.
4. **Verifikasi helm standar via computer vision** — CCTV/app yang mendeteksi helm non-SNI dan memberikan edukasi (bukan hanya tilang).
5. **Sistem keselamatan ferry** — IoT sensor overloading + weather alert + automated passenger count untuk mencegah ferry tenggelam.

---

## Rangkuman Perbandingan 8 Domain

| Domain | Urgensi (kematian/hari) | Dataset Mudah? | IoT/Sensor? | AI? | Deep Engineering? | Rekomendasi |
|--------|------------------------|----------------|-------------|-----|-------------------|-------------|
| A. Mental Health | ~3 (bunuh diri, underreported) | Mudah | Wearable (HRV) | NLP, Speech | Sedang | Potensial |
| B. Keselamatan Kerja | ~22 | Sedang | Sensor lingkungan | CV (APD, postur) | Tinggi | **Sangat Potensial** |
| C. Lansia | Tidak langsung (jatuh, isolasi) | Sedang | Wi-Fi CSI, PIR | Gait analysis, NLP | Tinggi | **Sangat Potensial** |
| D. Disabilitas | Tidak langsung (akses) | Sedang | Navigasi sensor | CV (sign language) | Tinggi | Potensial |
| E. Kekerasan/Kejahatan | Bervariasi | Mudah | Tidak banyak | NLP, prediksi | Sedang | Potensial |
| F. Bencana Alam | Bervariasi (puncak tinggi) | Mudah (open data) | Seismometer murah | Prediksi, routing | Tinggi | **Sangat Potensial** |
| G. Kesehatan Ibu & Anak | ~25 (ibu) + ~50 (balita) | Sedang (ethical) | Akustik, antropometri | Audio AI, prediksi | Sangat Tinggi | **Paling Potensial** |
| H. Transportasi | ~70-80 | Mudah | Dashcam, GPS | CV (kantuk, helm) | Tinggi | **Sangat Potensial** |

---

## Top 3 Domain untuk Dieksplorasi Lebih Lanjut

### 1. G. Kesehatan Ibu & Anak — "PneumoSound 2.0" atau "StuntGuard"
- **Alasan:** Kematian tertinggi (75/hari gabungan ibu+balita), deep engineering tertinggi (akustik batuk anak = dataset yang BELUM ADA di dunia), selaras dengan program nasional (MBG, penurunan stunting, penguatan Puskesmas).
- **Risiko:** Ethical clearance (tapi bisa diatasi dengan setting Posyandu, bukan RS).

### 2. H. Transportasi — "JagaJalan" atau "SopirSafe"
- **Alasan:** Kematian tertinggi per hari (70-80), dataset paling mudah dikumpulkan (dashcam, GPS, observasi), demo paling visual (simulasi kantuk sopir), dan masalah yang dirasakan SETIAP orang.
- **Risiko:** Kompetisi dengan solusi komersial (tapi belum ada yang terjangkau untuk Indonesia).

### 3. F. Bencana Alam — "SiagaQuake" atau "EvakuAI"
- **Alasan:** Indonesia #1 dunia dalam aktivitas seismik, open data melimpah (USGS API), potensi demo spektakuler (simulasi gempa + routing evakuasi), dan sangat relevan untuk Yogyakarta (gempa 2006 masih diingat).
- **Risiko:** Sulit validasi lapangan (bencana tidak bisa dijadwalkan), tapi bisa divalidasi via simulasi dan data historis.

---

## Catatan Metodologi

- Data statistik dikumpulkan dari: WHO, World Bank, Macrotrends, Wikipedia, BPS, BPJS Ketenagakerjaan, Kemenkes, UNICEF, ILO, USGS, Korlantas Polri, Komnas Perempuan, dan BNPB.
- Beberapa data point menggunakan estimasi berdasarkan tren karena data 2024-2026 belum sepenuhnya tersedia (terutama BPS dan Riskesdas yang survei periodik).
- Kolektibilitas dataset dinilai berdasarkan pengalaman riset sebelumnya dan feasibilitas untuk tim mahasiswa 3-5 orang dalam 3-6 bulan.
