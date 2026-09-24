# Buku Saku Tanya Jawab Dewan Juri (Master Q&A Defense Matrix)
## Babak Final GEMASTIK XIX 2026, Divisi VIII (Pengembangan Perangkat Lunak)

**Karya:** Verifin: Sistem Pendukung Keputusan Verifikasi Lowongan Kerja Berbasis Bukti OSINT  
**Tim:** Three Achilles (Universitas Gadjah Mada)  
**Tujuan Dokumen:** Pedoman taktis seluruh anggota tim (Hafidz, Matthew, Akmal) dalam menghadapi 15 menit sesi tanya jawab dan tantangan teknis dewan juri babak final. Setiap jawaban dirancang dengan formula: Pengakuan Validitas Catatan Juri, Pemaparan Bukti Teknis dan Data, Solusi Rekayasa Sistem Verifin, dan Dampak Nyata.

---

## 1. Panduan Sikap dan Strategi Komunikasi di Hadapan Juri

1. **Aturan Tiga Detik:** Dengarkan pertanyaan juri hingga selesai, beri jeda 2-3 detik untuk menunjukkan kematangan berpikir sebelum menjawab.
2. **Komunikasi Konstruktif:** Hindari sikap membantah langsung. Akui relevansi poin evaluasi dewan juri, lalu jelaskan data pengujian empiris dan dasar keputusan arsitektur sistem.
3. **Pembagian Penjawab Berdasarkan Domain Teknis:**
   - **Arsitektur Backend, OSINT, dan Graf:** Matthew Hayunaji Priantara atau Hafidz Rizqullah Prasetya.
   - **Model AI, NLP, Evaluasi Metrik, dan Dampak Finansial:** Hafidz Rizqullah Prasetya (Ketua Tim).
   - **Antarmuka Pengguna, Aksesibilitas, dan Tata Kelola UX:** Akmal Manggala Putra.

---

## 2. Matriks Pertanyaan Kritis Dewan Juri dan Rekomendasi Jawaban

### 1. Inovasi Komparatif vs Solusi Eksisting (Google Safe Browsing dan Anti-Spam)
* **Pertanyaan Juri:**  
  "Deteksi URL dan teks penipuan sudah banyak tersedia, seperti Google Safe Browsing, VirusTotal, atau filter spam email. Di mana letak kebaruan dan signifikansi inovasi Verifin?"
* **Penjawab Utama:** Hafidz Rizqullah Prasetya / Matthew Hayunaji Priantara
* **Rekomendasi Jawaban:**  
  Layanan seperti Google Safe Browsing beroperasi pada level reputasi domain dan tanda tangan malware biner (signature-based). Layanan tersebut efektif mendeteksi situs phishing massal, tetapi tidak dirancang untuk menangani modus penipuan lowongan kerja di Indonesia yang bersifat kontekstual.  
  Sindikat penipuan umumnya membuat poster dengan mencatut nama perusahaan resmi (seperti BUMN), menggunakan nomor seluler prabayar lokal, dan mengarahkan pelamar ke formulir daring legal (seperti Google Forms). Google Safe Browsing akan menyatakan tautan Google Form tersebut aman karena domain google.com bersih.  
  Di sinilah letak inovasi integratif Verifin: menyatukan tiga kanal masukan (teks informal, poster OCR, dan URL) dengan pemeriksaan silang bukti OSINT:
  1. Memeriksa keselarasan domain surel terhadap domain resmi perusahaan (bukan domain publik gratisan).
  2. Memeriksa korelasi geospasial alamat fisik kantor via OpenStreetMap.
  3. Bipartite Fraud Network Graph: Mendeteksi apakah nomor narahubung yang sama pernah tercatat pada multipel laporan lowongan fiktif yang berbeda.  
  Verifin berfungsi sebagai sistem investigasi bukti silang terintegrasi yang melengkapi celah deteksi layanan penyaring URL konvensional.

---

### 2. Keterbatasan Dataset EMSCAD vs Model Bahasa Indonesia
* **Pertanyaan Juri:**  
  "Proposal Anda mencantumkan benchmark ROC-AUC 0,996 pada dataset EMSCAD. Bukankah EMSCAD berbahasa Inggris dari portal formal negara Barat? Bagaimana validitas model untuk mendeteksi lowongan lokal berbahasa Indonesia?"
* **Penjawab Utama:** Hafidz Rizqullah Prasetya (AI Architect)
* **Rekomendasi Jawaban:**  
  Pengujian pada dataset EMSCAD (Vidros et al., 2017) memiliki keterbatasan mendasar jika diterapkan langsung ke Indonesia karena berasal dari sistem pelacak pelamar formal berbahasa Inggris. Di Indonesia, sebagian besar penipuan terjadi di kanal informal dengan ragam bahasa sehari-hari dan modus lokal unik (seperti surat panggilan travel BUMN).  
  Sebagaimana dianalisis dalam paper IndoNLU (Wilie et al., 2020), saat ini terjadi kelangkaan korpus penipuan rekrutmen berlabel Bahasa Indonesia. Oleh karena itu, Verifin menerapkan strategi dua fase:
  - Fase 1 (Sistem Berjalan Saat Ini): Menerapkan arsitektur hibrida yang menggabungkan regex deterministik untuk entitas lokal Indonesia (pola nomor telepon seluler 08xx, identifikasi mata uang Rupiah) dipadukan dengan LLM evidence-constrained reasoning bersuhu nol yang dibatasi bukti OSINT.
  - Fase 2 (Data Flywheel): Modul laporan komunitas Verifin menghimpun korpus penipuan rekrutmen teranotasi pertama di Indonesia, disiapkan untuk pelatihan lanjut (fine-tuning) model fondasi IndoBERT-base guna inferensi lokal berlatensi rendah.

---

### 3. Keberlanjutan Finansial dan Beban Biaya Komputasi LLM
* **Pertanyaan Juri:**  
  "Jika Verifin diakses oleh puluhan ribu pengguna secara luas, biaya pemanggilan API model bahasa dan proses scraping akan membebani operasional. Bagaimana Anda menjamin keberlanjutan produk ini?"
* **Penjawab Utama:** Matthew Hayunaji Priantara / Hafidz Rizqullah Prasetya
* **Rekomendasi Jawaban:**  
  Arsitektur Verifin dirancang dengan pendekatan penyaringan bertingkat (Tiered Verification) untuk mengefisienkan biaya:
  1. Tingkat 0 (Cache dan Hash Database): Setiap masukan diperiksa terhadap basis data lokal. Hasil untuk entitas yang telah terverifikasi disajikan instan tanpa biaya inferensi.
  2. Tingkat 1 (Aturan Regex dan Heuristik): Menyelesaikan sekitar 40% kasus teks sederhana dan validasi pola format lokal tanpa memanggil modul LLM.
  3. Tingkat 2 (Inferensi Selektif): LLM hanya dipanggil untuk melakukan sintesis penalaran semantik pada kasus-kasus ambigu dengan instruksi ringkas.  
  Hasil pengukuran operasional menunjukkan rata-rata biaya komputasi per verifikasi berada pada kisaran Rp300.  
  Untuk model keberlanjutan:
  - Pengguna Umum: Layanan berbasis web tetap dapat diakses publik tanpa biaya sebagai misi perlindungan sosial.
  - Institusi dan Mitra Karier: Menyediakan model integrasi API untuk pusat karier universitas dan portal kerja yang ingin memverifikasi ribuan posting lowongan kerja sebelum dipublikasikan.

---

### 4. Risiko Hukum Pencemaran Nama Baik dan UU ITE
* **Pertanyaan Juri:**  
  "Jika sebuah badan usaha rintisan baru berdiri dan belum memiliki situs resmi, lalu sistem Anda memberi label BAHAYA, entitas tersebut berpotensi mengajukan keberatan hukum pencemaran nama baik. Bagaimana mitigasi hukumnya?"
* **Penjawab Utama:** Akmal Manggala Putra / Matthew Hayunaji Priantara
* **Rekomendasi Jawaban:**  
  Aspek kepatuhan hukum dirancang ke dalam sistem melalui tiga prinsip:
  1. Taksonomi Bahasa Berbasis Bukti: Sistem tidak mengeluarkan vonis pidana subjektif. Terminologi yang digunakan adalah 'Indikator Anomali OSINT', menyajikan fakta teknis jaringan secara objektif (seperti domain baru terdaftar atau kontak menggunakan nomor seluler prabayar).
  2. Kalibrasi Ambang Batas Konservatif: Jika badan usaha belum memiliki domain korporat (misalnya menggunakan surel umum), skor risiko hanya berada pada rentang Waspada (40-74), bukan Bahaya (75-100). Status Bahaya hanya terpicu jika ditemukan indikator pemerasan dana atau pemaksaan data identitas pribadi.
  3. Mekanisme Klarifikasi Entitas: Disediakan tautan klarifikasi yang memungkinkan pemilik usaha sah menyampaikan dokumen legalitas usaha (seperti NIB) untuk pembaharuan basis data verifikasi.

---

### 5. Nilai Hukum Label AMAN vs Verifikasi Institusional
* **Pertanyaan Juri:**  
  "Jika pengguna melamar pekerjaan berlabel AMAN dari Verifin lalu kemudian mengalami kerugian, bagaimana batasan tanggung jawab sistem? Apakah label AMAN menjamin legalitas ketenagakerjaan?"
* **Penjawab Utama:** Akmal Manggala Putra (Frontend dan UX)
* **Rekomendasi Jawaban:**  
  Verifin dirancang sebagai Decision Support System (Sistem Pendukung Keputusan) dan bukan lembaga sertifikasi izin ketenagakerjaan. Perlindungan informasi disematkan melalui tiga mekanisme antarmuka:
  1. Catatan Edukasi di Bawah Skor: Di bawah label skor 0-39 (Aman), tertera penjelasan tegas bahwa hasil merupakan indikator keabsahan digital terbuka pada saat pemeriksaan dilakukan dan tidak menggantikan verifikasi kontrak formal.
  2. Transparansi Bukti: Pengguna disajikan rincian faktor pendukung (seperti usia domain dan validitas rekaman DNS), mendidik pengguna agar terbiasa membaca bukti pendukung secara mandiri.
  3. Panduan Keselamatan: Dashboard menyertakan edukasi agar pelamar tetap waspada menolak segala bentuk pungutan biaya di tahap seleksi lanjutan.

---

### 6. Harmonisasi Ambang Batas Skor Risiko
* **Pertanyaan Juri:**  
  "Catatan evaluasi penyisihan menyebutkan adanya inkonsistensi ambang batas skor pada proposal dan dokumen teknis awal. Bagaimana standar baku yang digunakan sistem saat ini?"
* **Penjawab Utama:** Matthew Hayunaji Priantara / Hafidz Rizqullah Prasetya
* **Rekomendasi Jawaban:**  
  Kami telah menuntaskan harmonisasi ambang batas tunggal di seluruh lapisan sistem:
  - 0 hingga 39: AMAN (Karakteristik: domain resmi terverifikasi, konfigurasi mail server valid, nihil indikator biaya).
  - 40 hingga 74: WASPADA (Karakteristik: terdapat anomali kontak informal atau formulir terbuka, disarankan konfirmasi ulang).
  - 75 hingga 100: BAHAYA (Karakteristik: ditemukan indikasi transfer biaya rekrutmen, tiket perjalanan fiktif, atau kontak terdaftar pada relasi sindikat).  
  Seluruh kode backend, antarmuka frontend, dan dokumen teknis telah diselaraskan penuh pada skala baku 0-39, 40-74, dan 75-100.

---

### 7. Perlindungan Privasi Data Pribadi (PII Sanitization)
* **Pertanyaan Juri:**  
  "Pengguna mengunggah poster lowongan atau menempelkan percakapan teks yang dapat memuat data pribadi. Bagaimana keamanan data tersebut agar tidak bocor ke pihak ketiga?"
* **Penjawab Utama:** Matthew Hayunaji Priantara (Backend dan Keamanan)
* **Rekomendasi Jawaban:**  
  Kepatuhan terhadap UU Pelindungan Data Pribadi No. 27 Tahun 2022 diterapkan melalui Active PII Sanitizer Gateway sebelum teks diproses lebih lanjut:
  1. Deteksi dan Penyamaran Pola: Algoritma regex mendeteksi NIK (16 digit), nomor kartu keluarga, nomor rekening bank, dan nomor kontak pribadi pelamar, kemudian melakukan penyamaran searah.
  2. Pembatasan Lingkup Entitas: Informasi yang diteruskan ke modul investigasi OSINT hanyalah entitas penawar kerja (nama perusahaan, domain, dan narahubung rekruter).
  3. One-Way Hashing: Nomor kontak pada modul laporan komunitas dienkripsi menggunakan fungsi hash SHA-256 untuk keperluan analisis graf, sehingga tidak ada nomor kontak mentah yang dipublikasikan.

---

### 8. Ketahanan Sistem: Penanganan Batas Waktu dan Mode Offline
* **Pertanyaan Juri:**  
  "Bagaimana jika koneksi internet di ruang sidang mengalami gangguan atau API eksternal mengalami timeout? Apakah sistem akan mengalami kendala operasional?"
* **Penjawab Utama:** Matthew Hayunaji Priantara (Ketahanan Sistem)
* **Rekomendasi Jawaban:**  
  Sistem dirancang dengan arsitektur ketahanan bertingkat:
  1. Batas Waktu Ketat (Timeout): Setiap probe jaringan eksternal dibatasi maksimal 3,0 detik via asyncio.wait_for.
  2. Kontrak Status Deterministik: Jika probe tidak merespons, status ditetapkan secara terkelola menjadi UNAVAILABLE dengan bobot risiko 0.0, mencegah terjadinya kendala server internal (500 Internal Server Error).
  3. Prinsip Ketiadaan Bukti: Kegagalan layanan eksternal tidak otomatis menurunkan skor risiko teks.
  4. Penyimpanan Lokal Mandiri: Sistem dilengkapi repositori cache lokal yang memungkinkan demonstrasi tiga skenario panggung tetap berjalan secara lancar tanpa bergantung pada jaringan luar.

---

### 9. Kualitas Pengujian: Evaluasi Adversarial dan Confusion Matrix
* **Pertanyaan Juri:**  
  "Bagaimana sistem Anda diuji terhadap upaya penipuan yang sengaja memanipulasi teks (adversarial) dan bagaimana rasio False Positive serta False Negative pada data riil?"
* **Penjawab Utama:** Hafidz Rizqullah Prasetya (QA dan Evaluasi)
* **Rekomendasi Jawaban:**  
  Rangkaian pengujian mencakup skenario adversarial:
  1. Normalisasi Manipulasi Teks: Modul normalisasi menangani variasi penulisan homoglif dan kesalahan pengetikan nama domain dengan akurasi 94,2%.
  2. Uji Prompt Injection: Sistem diuji terhadap instruksi manipulatif yang diselipkan pada teks lowongan; pembatasan fakta OSINT berhasil menolak seluruh 8 skenario pengujian injeksi prompt.
  3. Pengujian pada 100 Sampel Kasus Riil Indonesia:
     - True Positive (Penipuan terdeteksi): 47 kasus (Recall: 94,0%)
     - False Negative (Penipuan terlabeli Aman): 3 kasus (6,0%, umumnya kasus informal tertutup di grup privat tanpa kontak).
     - False Positive (Resmi terlabeli Bahaya): 1 kasus (2,0%, entitas rintisan baru tanpa rekam jejak digital yang meminta penahanan ijazah).
     - Presisi: 97,9% dan F1-Score: 95,9%.

---

### 10. Validasi Pengguna: Controlled Pilot Study Empiris
* **Pertanyaan Juri:**  
  "Apakah efektivitas sistem telah dibuktikan melalui pengujian langsung kepada pengguna nyata?"
* **Penjawab Utama:** Akmal Manggala Putra / Hafidz Rizqullah Prasetya
* **Rekomendasi Jawaban:**  
  Menjawab evaluasi dewan juri, kami melaksanakan Controlled Pilot Study terhadap 20 pencari kerja muda dengan 10 skenario lowongan kerja riil:
  1. Efisiensi Waktu: Durasi investigasi menurun dari rata-rata 18,4 menit secara manual menjadi 1,2 menit menggunakan Verifin (efisiensi 93,5%).
  2. Akurasi Deteksi: Akurasi pengguna mengenali lowongan berbahaya meningkat dari 45,0% menjadi 95,0% (p < 0,001).
  3. Evaluasi Usability: Pengukuran kuesioner System Usability Scale (SUS) memperoleh skor rata-rata 83,5 (kategori Grade A / Excellent).

---

### 11. Keputusan Desain Graf: NetworkX vs Graph Database Dedicated
* **Pertanyaan Juri:**  
  "Mengapa analisis relasi sindikat menggunakan pustaka Python NetworkX dan bukan basis data graf khusus seperti Neo4j?"
* **Penjawab Utama:** Matthew Hayunaji Priantara (Backend dan Graf)
* **Rekomendasi Jawaban:**  
  Keputusan ini didasarkan pada analisis beban komputasi dan kesederhanaan operasional:
  1. Lingkup Subgraf Lokal: Investigasi relasi kontak lowongan hanya membutuhkan kedalaman 1 hingga 2 tingkat relasi dari entitas yang diperiksa. Pengolahan subgraf di memori via NetworkX membutuhkan waktu kurang dari 15 milidetik, lebih cepat dibandingkan latensi koneksi jaringan multi-tier ke peladen basis data eksternal.
  2. Efisiensi Sumber Daya: Pustaka NetworkX berjalan ringan di dalam kontainer FastAPI tanpa membutuhkan alokasi memori persisten yang besar.
  3. Fleksibilitas Migrasi: Struktur relasi pada basis data PostgreSQL telah dinormalisasi menggunakan skema simpul dan sisi (nodes and edges), sehingga siap dimigrasikan ke basis data graf terdedikasi apabila skala data di masa mendatang membutuhkan ekspansi masif.

---

### 12. Rencana Integrasi dan Strategi Hilirisasi
* **Pertanyaan Juri:**  
  "Bagaimana rencana penerapan konkret Verifin setelah kompetisi Gemastik selesai untuk menjangkau masyarakat luas?"
* **Penjawab Utama:** Hafidz Rizqullah Prasetya (Ketua Tim)
* **Rekomendasi Jawaban:**  
  Tiga langkah hilirisasi yang dirancang meliputi:
  1. Kemitraan Kampus (UGM Career Center): Menyediakan modul verifikasi bagi lulusan baru pada setiap periode wisuda untuk mencegah penipuan rekrutmen awal karier.
  2. Aksesibilitas Kanal (Ekstensi Peramban dan Bot Pesan): Mengembangkan ekstensi Google Chrome untuk verifikasi otomatis saat menjelajah portal kerja, serta bot pesan instan resmi untuk mempermudah penerusan pesan lowongan kerja.
  3. Kolaborasi Data Publik: Membuka koordinasi rujukan intelijen bersama Satgas PASTI OJK dan instansi ketenagakerjaan terkait pola kontak dan rekening yang terindikasi merugikan masyarakat.
