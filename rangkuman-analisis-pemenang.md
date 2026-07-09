# Rangkuman Komprehensif Analisis Pemenang & Finalis Gemastik Divisi Pengembangan Perangkat Lunak (PPL) 2022-2025

Dokumen ini merupakan hasil riset mendalam yang mensintesis profil inovasi, teknologi, fitur yang ditonjolkan, serta analisis kelemahan dalam skala dampak di Indonesia dari para pemenang (2022–2025) dan seluruh 20 finalis Gemastik XVIII (2025). Dokumen ini ditujukan sebagai referensi utama tim TRPL UGM untuk merumuskan ide karya pemenang pada Gemastik XIX (2026).

---

## 📅 Detail Analisis Pemenang Gemastik PPL (2022-2025)

Berikut adalah dekonstruksi lengkap dari setiap pemenang medali Gemastik PPL, mencakup deskripsi sistem, fitur utama yang ditonjolkan, serta evaluasi kelemahan dampak lokalnya di Indonesia:

### 🏆 GEMASTIK XVIII - 2025 (Host: Telkom University)
*Detail analisis lengkap dapat dibaca di [2025-doalert.md](file:///Users/matthewpriantara/Documents/Code/competition_project/gemastik26/gemastik19/riset/analisis-pemenang/2025-doalert.md), [2025-sayang-anak.md](file:///Users/matthewpriantara/Documents/Code/competition_project/gemastik26/gemastik19/riset/analisis-pemenang/2025-sayang-anak.md), dan [2025-fokal.md](file:///Users/matthewpriantara/Documents/Code/competition_project/gemastik26/gemastik19/riset/analisis-pemenang/2025-fokal.md).*

#### 🥇 Juara 1: Tim DOAlert (ITS) — TB Vector
*   **Penjelasan Aplikasi:** Sistem pemantauan akustik berbasis *Edge Computing* di ruang publik (seperti stasiun kereta api) yang menyaring suara batuk secara pasif, mengklasifikasikan jenis batuk (TBC vs non-TBC), melacak arah fisik datangnya suara, dan otomatis mengarahkan CCTV stasiun untuk melakukan pengenalan objek pelaku batuk.
*   **Fitur yang Ditonjolkan:**
    *   Pengolahan sinyal akustik kustom tingkat lanjut (MFCC, GCC-PHAT, *inverse beamforming* pada *microphone array* mikrokontroler).
    *   Klasifikasi deret waktu gelombang suara menggunakan arsitektur deep learning LSTM/GRU.
    *   Integrasi CCTV visual (*bounding box tracking*) dan dashboard pemantauan medis real-time.
*   **Kelemahan dalam Skala Dampak di Indonesia:**
    *   **Biaya Infrastruktur Tinggi:** Pengadaan *microphone array* fisik dan komputer mikro (Raspberry Pi) untuk dipasang di ribuan stasiun, terminal, dan bandara di Indonesia membutuhkan anggaran yang sangat besar.
    *   **Tingkat Kebisingan Tinggi (Noise):** Ruang publik di Indonesia (stasiun padat, pasar, jalan raya) memiliki tingkat kebisingan latar belakang (*ambient noise*) yang sangat kacau, yang berisiko tinggi memicu alarm palsu (*false positive*) atau kegagalan deteksi.

#### 🥈 Juara 2: Tim Sayang Anak (UNIKOM) — Snailly
*   **Penjelasan Aplikasi:** Platform pengawasan internet ramah anak lintas platform (*mobile* orang tua dan modul *agent* pada gawai anak) untuk menyaring website serta konten media sosial dari unsur pornografi, judi online, kekerasan, dan radikalisme.
*   **Fitur yang Ditonjolkan:**
    *   Klasifikasi teks web dinamis menggunakan model **Support Vector Machine (SVM)** (bukan sekadar daftar hitam/blacklist domain statis).
    *   Analisis konten visual/gambar medsos (TikTok, YouTube) menggunakan Multimodal LLM (GitBase).
    *   Mekanisme **Human-in-the-loop** di mana orang tua bertindak sebagai anotator data untuk melatih ulang AI secara personal.
*   **Kelemahan dalam Skala Dampak di Indonesia:**
    *   **Kesenjangan Literasi Digital Orang Tua:** Keberhasilan aplikasi ini bergantung pada peran aktif orang tua untuk mengelola dasbor dan melakukan anotasi. Di Indonesia, tingkat literasi digital orang tua sangat timpang, terutama di luar area perkotaan besar, sehingga aplikasi ini rawan diabaikan atau salah konfigurasi.
    *   **Bypass Teknis oleh Anak:** Anak-anak zaman sekarang memiliki kemampuan mencari celah teknis (seperti menggunakan VPN gratis atau aplikasi modifikasi) untuk melewati sistem pemblokiran lokal di ponsel.

#### 🥉 Juara 3: Tim Timses 417135 (ITS) — Aira
*   **Penjelasan Aplikasi:** Platform asisten digital UMKM terintegrasi untuk membantu pelaku usaha mikro melakukan pembukuan keuangan, pembuatan konten promosi otomatis, dan riset pasar lokal.
*   **Fitur yang Ditonjolkan:**
    *   *iSIS:* Pencatatan keuangan otomatis berbasis suara (*voice-to-text*) untuk mengatasi malas mencatat.
    *   *iNOV:* Otomasi pembuatan desain & caption promosi medsos tanpa keahlian grafis.
    *   *iDATA:* Dasbor analisis tren digital dan geodemografis calon pelanggan.
*   **Kelemahan dalam Skala Dampak di Indonesia:**
    *   **Biaya API Cloud yang Tinggi:** Fitur pembuatan konten dan analisis tren bergantung pada Gemini API dan scraper pihak ketiga (Apify). Jika diakses secara gratis oleh jutaan UMKM Indonesia, biaya sewa API akan sangat besar dan tidak berkelanjutan secara bisnis.
    *   **Keragaman Dialek Lokal:** Pelaku UMKM di Indonesia sering kali berbicara menggunakan dialek daerah yang kental (Jawa, Sunda, Minang) atau bahasa campur-campur, yang dapat menurunkan akurasi model pengenal suara iSIS secara drastis.

#### 🏆 Penghargaan Khusus: Best Paper (UI) — Fokal
*   **Penjelasan Aplikasi:** Sistem parental control pasif di HP anak yang menyensor konten pornografi visual dan teks (*pornotext*) secara instan dengan metode penutupan layar (*overlay screen buffer parsing*).
*   **Fitur yang Ditonjolkan:**
    *   Penerapan model objek deteksi **YOLOv11** terkompresi secara lokal (*on-device AI* menggunakan kuantisasi INT8) agar pemrosesan layar berjalan dalam hitungan milidetik.
    *   Protokol kriptografi kunci publik-swasta untuk mengirim data log pelanggaran ke orang tua tanpa membocorkan tangkapan layar asli anak.
*   **Kelemahan dalam Skala Dampak di Indonesia:**
    *   **Keterbatasan Spesifikasi Ponsel Anak:** Mayoritas anak sekolah di Indonesia menggunakan ponsel kelas entry-level (*low-end*). Menjalankan pemindaian visual layar (*screen capture buffer*) dan inferensi YOLO secara terus-menerus di latar belakang akan menguras baterai dengan sangat cepat dan membuat performa ponsel menjadi lambat (*lagging*).

---

### 🏆 GEMASTIK XVII - 2024 (Host: Universitas Negeri Semarang)
*Detail analisis lengkap dapat dibaca di [2024-navigo.md](file:///Users/matthewpriantara/Documents/Code/competition_project/gemastik26/gemastik19/riset/analisis-pemenang/2024-navigo.md).*

#### 🥇 Juara 1: Tim NaviGo (UI) — Navigo
*   **Penjelasan Aplikasi:** Aplikasi web terintegrasi AI untuk menganalisis dokumen hukum kontrak kerja sama secara otomatis dan memberikan konsultasi hukum dasar bagi kreator konten dan UMKM unbanked.
*   **Fitur yang Ditonjolkan:**
    *   Model NLP bahasa Indonesia kustom untuk mendeteksi klausul tidak adil (*unfair terms*) dan penilaian risiko kontrak hukum.
    *   Status legalitas produk yang kuat karena sudah mengantongi HKI (Hak Cipta) resmi saat dilombakan.
*   **Kelemahan dalam Skala Dampak di Indonesia:**
    *   **Ambiguitas Bahasa Kontrak Lokal:** Dokumen kontrak di Indonesia sering kali ditulis dengan tata bahasa yang tidak baku, ambigu, atau menggunakan format non-standar yang dapat membingungkan model NLP.
    *   **Tidak Menggantikan Pendampingan Hukum Fisik:** Aplikasi hanya memberikan peringatan risiko di awal, tetapi tidak bisa memberikan pembelaan hukum atau pendampingan pengacara secara langsung jika UMKM mengalami sengketa pidana/perdata di pengadilan riil.

#### 🥈 Juara 2: Tim Wani Debug (Telkom) — Bisabilitas
*   **Penjelasan Aplikasi:** Sistem aksesibilitas digital terpadu berupa aplikasi *mobile* dan ekstensi *browser* (*web extension*) untuk membantu penyandang disabilitas fisik dan sensorik agar dapat bernavigasi dan membaca konten internet.
*   **Fitur yang Ditonjolkan:**
    *   Ekstensi browser yang memformat ulang tata letak web secara dinamis, mengoptimalkan kontras tinggi, dan membuat deskripsi visual gambar otomatis dengan AI.
*   **Kelemahan dalam Skala Dampak di Indonesia:**
    *   **Dominasi Penggunaan Mobile App:** Mayoritas masyarakat Indonesia (termasuk disabilitas) berinteraksi dengan dunia digital melalui aplikasi mobile native (seperti TikTok, Instagram, Tokopedia) bukan melalui browser desktop. Ekstensi browser ini tidak dapat berjalan di dalam aplikasi mobile native tersebut.

#### 🥉 Juara 3: Tim Carbonara (BINUS) — Aura
*   **Penjelasan Aplikasi:** Sistem asisten lemari pakaian pintar berbasis sensor RFID pasif dan kecerdasan buatan untuk memandu penyandang tunanetra memilih baju secara mandiri.
*   **Fitur yang Ditonjolkan:**
    *   Integrasi sensor nirkabel RFID pembaca lemari pakaian dengan aplikasi ponsel.
    *   Panduan suara interaktif (*auditory feedback*) untuk memberikan rekomendasi padu padan warna baju dan mencatat status kebersihan baju.
*   **Kelemahan dalam Skala Dampak di Indonesia:**
    *   **Biaya Tagging RFID:** Menempelkan tag RFID pada setiap potong pakaian yang dimiliki tunanetra membutuhkan biaya tambahan yang lumayan besar.
    *   **Ketahanan Pencucian Tradisional:** Metode pencucian baju di Indonesia yang sering kali menggunakan metode manual (cuci giles/kucek) dapat merusak sensor RFID pasif yang ditempel pada pakaian jika tidak dirancang secara khusus untuk tahan air dan gesekan tinggi.

---

### 🏆 GEMASTIK XVI - 2023 (Host: Universitas Negeri Yogyakarta)
*Detail analisis lengkap dapat dibaca di [pengumuman-juara.md](file:///Users/matthewpriantara/Documents/Code/competition_project/gemastik26/gemastik19/riset/panduan/2023-ub/pengumuman-juara.md).*

#### 🥇 Juara 1: Hawk Team (Undiksha) — Hawk Drone
*   **Penjelasan Aplikasi:** Perangkat lunak navigasi drone pemantau laut Lovina Bali yang menggunakan *computer vision* untuk melacak koordinat GPS kawanan lumba-lumba, lalu mengirimkannya ke kapal wisata agar menjaga jarak aman.
*   **Fitur yang Ditonjolkan:**
    *   Pengolahan citra udara real-time untuk mengenali sirip lumba-lumba dan sistem pengunci koordinat GPS otomatis.
*   **Kelemahan dalam Skala Dampak di Indonesia:**
    *   **Keterbatasan Daya Tahan Terbang:** Baterai drone komersial di Indonesia rata-rata hanya mampu bertahan 20-30 menit terbang di atas laut, menyulitkan patroli lumba-lumba secara kontinu sepanjang hari.
    *   **Biaya Drone Spesifikasi Tinggi:** Harga perangkat drone berspesifikasi kamera mumpuni dan tahan angin laut sangat mahal bagi paguyuban nelayan wisata tradisional Lovina.

#### 🥈 Juara 2: Tim fafife (ITS) — SIPHalal
*   **Penjelasan Aplikasi:** Redesain platform sertifikasi halal UMK Kemenag dengan menerapkan metodologi gamifikasi ilmiah untuk memicu produktivitas relawan verifikator di lapangan.
*   **Fitur yang Ditonjolkan:**
    *   Penerapan kerangka kerja **Octalysis Gamification Framework** (XP, papan peringkat, misi harian) untuk mengatasi kebosanan verifikator.
*   **Kelemahan dalam Skala Dampak di Indonesia:**
    *   **Hambatan Birokrasi Kemenag:** Keberhasilan integrasi platform ini bergantung penuh pada keterbukaan API dari sistem SIHalal milik Badan Penyelenggara Jaminan Produk Halal (BPJPH). Ego sektoral lembaga pemerintahan di Indonesia sering kali menghambat adopsi sistem dari pihak ketiga.

#### 🥉 Juara 3: Tim DEVIN (Poltek Harber Tegal) — Admin Layanan Publik
*   **Penjelasan Aplikasi:** Platform administrasi daerah dan kesehatan terintegrasi multi-platform (web operator dan mobile warga) untuk memotong waktu birokrasi dan melacak status dokumen secara transparan.
*   **Fitur yang Ditonjolkan:**
    *   Sistem antrean cerdas (*Smart Queueing*) dan visualisasi status berkas riil layaknya melacak pengiriman barang ekspedisi kurir.
*   **Kelemahan dalam Skala Dampak di Indonesia:**
    *   **Resistensi Internal Aparatur Daerah:** Penerapan sistem transparansi pelacakan berkas sering kali ditolak secara internal oleh oknum birokrat kelurahan/kecamatan yang terbiasa dengan metode manual karena sistem digital ini menutup celah pungli (uang pelicin).

---

### 🏆 GEMASTIK XV - 2022 (Host: Universitas Brawijaya)
*Detail analisis lengkap dapat dibaca di [pengumuman-juara.md](file:///Users/matthewpriantara/Documents/Code/competition_project/gemastik26/gemastik19/riset/panduan/2022-ub/pengumuman-juara.md).*

#### 🥇 Juara 1: Tim NTS (ITS) — Kiad
*   **Penjelasan Aplikasi:** Aplikasi *crowdsourcing* berbasis Android dan Django untuk mengumpulkan informasi aksesibilitas fasilitas umum bagi penyandang disabilitas di Indonesia.
*   **Fitur yang Ditonjolkan:**
    *   Metodologi Agile dan pemodelan database MongoDB.
    *   Mekanisme moderasi ulasan berlapis (Pencari, Kontributor, Penilik) berdasarkan Permen PUPR No. 14 Tahun 2017 untuk menyaring info palsu.
*   **Kelemahan dalam Skala Dampak di Indonesia:**
    *   **Ketergantungan Komunitas (Crowd Dependency):** Efektivitas aplikasi ini sangat bergantung pada keaktifan masyarakat untuk mengulas tempat umum. Di luar pulau Jawa dan kota-kota besar, partisipasi relawan sangat minim, sehingga pemetaan fasilitas umum di daerah 3T akan kosong.

#### 🥈 Juara 2: Tim Zeto (UNY) — Zeni
*   **Penjelasan Aplikasi:** Platform bimbingan percakapan bahasa Inggris menggunakan agen karakter virtual dengan NLP GPT-3 dan speech recognition.
*   **Fitur yang Ditonjolkan:**
    *   Simulasi latihan bicara bahasa Inggris tanpa canggung menggunakan model AI generatif awal.
*   **Kelemahan dalam Skala Dampak di Indonesia:**
    *   **Biaya Kuota Internet dan API:** Pemrosesan LLM di awan memerlukan koneksi internet stabil dan kuota besar yang menjadi barang mewah bagi siswa di daerah pedesaan Indonesia.
    *   **Aksen Bahasa Inggris Lokal:** Model *speech recognition* standar internasional sering kali gagal mengenali ucapan bahasa Inggris dengan logat/aksen lokal daerah Indonesia yang kental.

#### 🥉 Juara 3: Tim Unexpected (PENS) — Sistem Manajemen Logistik
*   **Penjelasan Aplikasi:** Dashboard terintegrasi rute dinamis untuk pengoptimalan armada logistik dan transportasi barang publik.
*   **Fitur yang Ditonjolkan:**
    *   Kematangan desain antarmuka (UI/UX) dan algoritma pencarian rute terpendek.
*   **Kelemahan dalam Skala Dampak di Indonesia:**
    *   **Faktor Eksternal Jalanan Indonesia yang Dinamis:** Kondisi jalanan di Indonesia yang rentan macet dadakan, banjir musiman, pasar tumpah, atau penutupan jalan sepihak oleh warga untuk pesta pernikahan tidak terdeteksi secara real-time oleh algoritma navigasi standar, membuat prediksi rute tidak akurat di lapangan.

---

## 👥 Detail Analisis 16 Finalis Non-Juara Gemastik XVIII (2025)

Di bawah ini adalah rincian lengkap 16 finalis non-juara Gemastik XVIII 2025, mencakup penjelasan sistem, fitur utama yang ditonjolkan, serta alasan kelemahan dalam skala dampak di Indonesia:

### Kategori A: "Konsep Canggih, Tanpa Validasi Lapangan"

#### 5. Sakuin (BINUS University)
*   **Penjelasan Aplikasi:** E-wallet anti-impulsif yang mendeteksi perilaku belanja gila-gilaan (*compulsive buying*) mahasiswa menggunakan AI dan mewajibkan OTP dari kerabat ("kolateral") untuk melanjutkan transaksi anomali.
*   **Fitur yang Ditonjolkan:**
    *   Model AI Guardrail kustom dengan teknik *Knowledge Distillation* (TFLite di ponsel dan model global di cloud).
    *   Penerapan teori psikologi *hot-cold empathy gap* untuk meredam kecanduan belanja dan pinjol.
*   **Kelemahan dalam Skala Dampak di Indonesia:**
    *   **Mengandalkan Respon Kolateral:** Mengharuskan teman/keluarga selalu responsif mengirim OTP secara instan saat transaksi diblokir. Hal ini memicu friksi sosial dan keterlambatan transaksi darurat yang sesungguhnya.
    *   **Hambatan Regulasi Finansial:** Integrasi ini membutuhkan payung hukum ketat OJK dan kesediaan bank-bank besar Indonesia untuk mengubah sistem pembayaran digital mereka, yang proses birokrasinya memakan waktu tahunan.

#### 6. Garda QRIS (—)
*   **Penjelasan Aplikasi:** Sistem keamanan 3 lapis untuk mendeteksi indikasi stiker QRIS Merchant Presented Mode (MPM) Statis palsu di warung-warung kecil atau kotak amal.
*   **Fitur yang Ditonjolkan:**
    *   Pemeriksaan visual standarisasi tata letak QRIS ASPI berbasis kecerdasan buatan, pencocokan teks vs QR Code metadata, dan validasi lokasi transaksi.
*   **Kelemahan dalam Skala Dampak di Indonesia:**
    *   **Kondisi Fisik Stiker di Lapangan:** Stiker QRIS di warung-warung Indonesia sering kali kotor, basah, robek, atau terlipat di bawah pencahayaan pasar yang redup, yang dapat mengacaukan analisis visual model AI.
    *   **Akurasi GPS Dalam Ruangan:** Akurasi GPS di dalam pasar tradisional/gedung mall sering kali meleset jauh, membuat validasi lokasi menjadi tidak andal.

#### 7. Inkluvia (ITS)
*   **Penjelasan Aplikasi:** Web edukasi ramah tunanetra yang mengubah naskah PDF/materi ajar menjadi teks ramah pembaca layar (AI Converter) serta mengirimkannya ke perangkat keras braille fisik dinamis.
*   **Fitur yang Ditonjolkan:**
    *   *AI PDF Converter* (PyPDF + Gemini AI) untuk deskripsi gambar otomatis, dan integrasi perangkat *Refreshable Braille Display* via protokol MQTT.
*   **Kelemahan dalam Skala Dampak di Indonesia:**
    *   **Harga Perangkat Keras Braille Sangat Mahal:** Alat *Refreshable Braille Display* fisik merupakan barang impor seharga belasan hingga puluhan juta rupiah. Keterbatasan ekonomi membuat alat ini tidak mungkin dibeli oleh mayoritas siswa tunanetra atau sekolah SLB negeri di Indonesia.

#### 8. PrediAI (—)
*   **Penjelasan Aplikasi:** Aplikasi pendeteksi risiko penyakit diabetes mellitus secara mandiri dan non-invasif lewat kamera ponsel dengan cara mengambil foto kuku dan lidah.
*   **Fitur yang Ditonjolkan:**
    *   Model CNN TensorFlow custom untuk menganalisis anomali visual kuku/lidah, dan integrasi peta faskes terdekat via Google Maps API.
*   **Kelemahan dalam Skala Dampak di Indonesia:**
    *   **Bias Visual Kuku & Kulit Lokal:** Adanya tradisi mewarnai kuku menggunakan pacar/henna di Indonesia dapat mengacaukan analisis model AI. 
    *   **Risiko Hukum Diagnosa Palsu:** Tanpa sertifikasi klinis resmi dari Kemenkes RI, aplikasi ini berbahaya karena berisiko memberikan ketenangan palsu (*false negative*) bagi penderita diabetes asli atau sebaliknya memicu kecemasan massal.

---

### Kategori B: "API Wrapper Murni" (Bobot Rekayasa Tipis)

#### 9. Netrai (—)
*   **Penjelasan Aplikasi:** Asisten AI tunanetra multimodal berbasis interaksi suara dan kamera ponsel untuk navigasi sehari-hari dan otomatisasi peramban internet.
*   **Fitur yang Ditonjolkan:**
    *   Integrasi LiveKit dan Gemini API untuk percakapan visual-suara real-time, share screen, dan otomatisasi extension browser.
*   **Kelemahan dalam Skala Dampak di Indonesia:**
    *   **Ketergantungan Internet Cepat:** Sistem ini membutuhkan transfer video dan audio berkecepatan tinggi ke server cloud. Di Indonesia, kualitas sinyal internet di luar kota besar masih sangat lambat dan tidak merata, memicu latensi tinggi yang berbahaya untuk pemandu jalan darurat.

#### 10. Sentra (—)
*   **Penjelasan Aplikasi:** Platform gateway inklusi finansial tunanetra untuk membantu pendaftaran akun perbankan secara mandiri menggunakan panduan navigasi suara interaktif.
*   **Fitur yang Ditonjolkan:**
    *   Arahan suara spasial untuk mengarahkan pengguna melakukan scan KTP/Wajah ("geser kamera ke kiri, dekatkan wajah"), dan deteksi nominal uang kertas gratis.
*   **Kelemahan dalam Skala Dampak di Indonesia:**
    *   **Tembok Regulasi KYC Perbankan:** Pembukaan rekening digital mandiri tanpa tatap muka fisik/video call petugas bank riil di Indonesia sangat dibatasi oleh regulasi ketat BI dan OJK untuk menekan kejahatan finansial, membuat platform ini sulit diadopsi secara resmi oleh industri perbankan nasional.

#### 11. KiddyGoo (Universitas Udayana)
*   **Penjelasan Aplikasi:** Alat pemantauan percakapan media sosial anak untuk menyaring teks toksik dan mendeteksi tanda perundungan siber (*cyberbullying*).
*   **Fitur yang Ditonjolkan:**
    *   Klasifikasi teks menggunakan model ToxicBERT dikombinasikan dengan API Gemini 2.5 Flash.
*   **Kelemahan dalam Skala Dampak di Indonesia:**
    *   **Keterbatasan Bahasa Gaul Indonesia:** Model ToxicBERT dilatih dengan bahasa Inggris formal. Anak-anak Indonesia menulis menggunakan slang, bahasa daerah, singkatan, atau makian lokal yang tidak terdeteksi oleh kamus standar ToxicBERT.

#### 12. Larasena (Universitas Jenderal Soedirman)
*   **Penjelasan Aplikasi:** Website pembuat motif batik instan berbasis teks prompt AI dilengkapi penampil visualisasi kain batik 3D.
*   **Fitur yang Ditonjolkan:**
    *   Pembangkit motif batik otomatis menggunakan Hugging Face API dan visualisasi web interaktif Three.js.
*   **Kelemahan dalam Skala Dampak di Indonesia:**
    *   **Tidak Menyentuh Masalah Fundamental Pengrajin:** Aplikasi ini hanya bersifat visual/dekoratif. Masalah utama industri batik Indonesia adalah mahalnya bahan baku lilin malam, persaingan dengan kain printing impor murah, dan rendahnya upah buruh batik tulis tradisional.

---

### Kategori C: "Teknis/Akurasi Model Terlalu Rendah"

#### 13. Jelasin (PENS)
*   **Penjelasan Aplikasi:** Sistem pemetaan aktor politik dan pelacak orisinalitas berita politik untuk mendeteksi penyebaran hoaks di Indonesia.
*   **Fitur yang Ditonjolkan:**
    *   Kombinasi model klasifikasi IndoBERT dengan pemetaan entitas politik melalui *Knowledge Graph*.
*   **Kelemahan dalam Skala Dampak di Indonesia:**
    *   **Akurasi Model Rendah (71.5%):** Nilai akurasi 71.5% pada 200 data dinilai sangat riskan. Kesalahan klasifikasi berita politik di Indonesia dapat memicu ketegangan sosial dan tuduhan bias politik pihak tertentu pada aplikasi.

#### 14. Jisebi (—)
*   **Penjelasan Aplikasi:** Aplikasi pembantu dosen dan mahasiswa tingkat akhir untuk melakukan validasi awal kesesuaian format manuskrip jurnal sebelum dikirim ke penerbit.
*   **Fitur yang Ditonjolkan:**
    *   Ekstraksi elemen tata letak naskah dan validasi referensi menggunakan NLP dan microservices.
*   **Kelemahan dalam Skala Dampak di Indonesia:**
    *   **Dampak Publik Sangat Sempit:** Solusi ini hanya menyasar kalangan akademisi kecil. Tidak menyelesaikan masalah literasi dasar nasional atau pengangguran di tingkat makro.

#### 15. Manela (—)
*   **Penjelasan Aplikasi:** Dasbor data oseanografi untuk membantu nelayan menentukan koordinat daerah tangkapan ikan yang aman di laut.
*   **Fitur yang Ditonjolkan:**
    *   Penyajian data gelombang dan angin berbasis Python dan aplikasi mobile Flutter.
*   **Kelemahan dalam Skala Dampak di Indonesia:**
    *   **Masalah Blank Spot Sinyal:** Nelayan Indonesia melaut di luar jangkauan BTS seluler. Aplikasi berbasis cloud ini tidak dapat diakses saat nelayan berada di tengah laut lepas tanpa internet satelit yang mahal.

#### 16. Jejak (—)
*   **Penjelasan Aplikasi:** Platform pemetaan kerusakan jalur pejalan kaki dan saran rute aman ramah disabilitas berbasis laporan warga (*crowdsourcing*).
*   **Fitur yang Ditonjolkan:**
    *   Navigasi rute ramah difabel dengan konsep laporan warga tergamifikasi.
*   **Kelemahan dalam Skala Dampak di Indonesia:**
    *   **Birokrasi Pemda yang Lamban:** Laporan kerusakan fasilitas dari warga akan menumpuk sia-sia di aplikasi karena respon perbaikan fisik dari Dinas PU/Pemda setempat di Indonesia terkenal lambat, yang menurunkan retensi penggunaan aplikasi secara drastis.

#### 17. Songlish (—)
*   **Penjelasan Aplikasi:** Game tebak lagu untuk belajar pelafalan bahasa Inggris bagi siswa sekolah dasar.
*   **Fitur yang Ditonjolkan:**
    *   Speech recognition bawaan sistem dipadukan dengan modul gamifikasi interaktif.
*   **Kelemahan dalam Skala Dampak di Indonesia:**
    *   **Bukan Isu Prioritas Nasional:** Pelafalan bahasa Inggris lewat lagu bukan kebutuhan darurat pendidikan Indonesia jika dibandingkan dengan masalah buta aksara dasar atau rendahnya kemampuan matematika.

#### 18. Solarkeun (—)
*   **Penjelasan Aplikasi:** Platform rekomendasi sudut kemiringan pemasangan panel surya rumahan untuk optimalisasi penyerapan energi.
*   **Fitur yang Ditonjolkan:**
    *   Perhitungan radiasi matahari tahunan berdasarkan koordinat lokasi menggunakan NASA Power API.
*   **Kelemahan dalam Skala Dampak di Indonesia:**
    *   **Tidak Menyelesaikan Kendala Modal:** Hambatan utama transisi energi panel surya di Indonesia adalah tingginya biaya modal pembelian panel surya dan baterai penyimpan daya, bukan sekadar ketidaktahuan posisi sudut matahari.

#### 19. Salor (—)
*   **Penjelasan Aplikasi:** Aplikasi pemetaan koordinat laut potensial tangkapan ikan berbasis sebaran plankton.
*   **Fitur yang Ditonjolkan:**
    *   Klasifikasi citra satelit laut menggunakan algoritma klasifikasi Random Forest.
*   **Kelemahan dalam Skala Dampak di Indonesia:**
    *   **Update Delay Citra Satelit Tropis:** Wilayah Indonesia yang tropis sering kali tertutup awan tebal. Penggunaan citra satelit gratisan sering kali memiliki waktu jeda (*delay*) rilis data, membuat prediksi koordinat meleset dari kondisi riil laut.

#### 20. Inkulearn (—)
*   **Penjelasan Aplikasi:** Portal sistem manajemen sekolah (LMS) untuk mengelola materi kelas, tugas, dan nilai siswa.
*   **Teknologi:** Pemrograman CRUD web standar PHP & MySQL.
*   **Kelemahan dalam Skala Dampak di Indonesia:**
    *   **Pasar LMS Sangat Jenuh:** Pasar sistem manajemen sekolah di Indonesia sudah didominasi oleh Google Classroom gratis, Microsoft Teams, dan platform resmi Kemendikbud. Aplikasi CRUD sederhana ini tidak memiliki daya saing dan nilai tambah unik.
