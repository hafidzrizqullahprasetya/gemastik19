# Pengumuman Resmi Juara GEMASTIK XVIII (2025) - Divisi VIII: Pengembangan Perangkat Lunak (PPL)

Dokumen ini berisi daftar pemenang riil dan dekonstruksi karya sesungguhnya pada Divisi Pengembangan Perangkat Lunak Gemastik XVIII tahun 2025 yang diselenggarakan di Telkom University.

---

## 🥇 Juara 1: Tim DOAlert — Institut Teknologi Sepuluh Nopember (ITS)

*   **Nama Aplikasi/Sistem:** **TB Vector** *(Sistem Pemantauan Akustik dan Pelacakan Kasus TBC Real-Time di Ruang Publik)*
*   **Anggota Tim:** Ahmad Naufal Farras, Mochammad Henry Alifian, Luna Arafatul Nikmah
*   **Dosen Pembimbing:** Dr. Eng. Dhany Arifianto, S.T., M.Eng.
*   **Inovasi & Cara Kerja:** 
    Sistem berbasis *Edge-Computing* (Raspberry Pi & I2S Microphones) yang diletakkan di ruang publik (seperti stasiun kereta) untuk memantau kesehatan pernapasan masyarakat secara pasif.
    *   **Klasifikasi Akustik:** Mengisolasi suara batuk longitudinal (alami), mengekstrak fiturnya (MFCC, Spectral, Chroma), lalu mengklasifikasikannya menggunakan Deep Learning (**LSTM/GRU**) untuk membedakan batuk TBC dan non-TBC.
    *   **Pelacakan Lokasi (DoA):** Menggunakan algoritma *Direction of Arrival* (DoA) dan *beamforming* pada *microphone array* untuk melacak koordinat orang yang batuk.
    *   **Integrasi Kamera:** Otomatis mengarahkan kamera pengawas (CCTV) terdekat untuk menyorot wajah orang tersebut dengan *bounding box* di dasbor petugas medis/stasiun.
*   **Dampak:** Memungkinkan triase dan pencegahan penularan epidemi TBC di area keramaian secara pasif tanpa memerlukan instalasi aplikasi dari sisi masyarakat.

---

## 🥈 Juara 2: Tim Sayang Anak — Universitas Komputer Indonesia (UNIKOM)

*   **Nama Aplikasi/Sistem:** **Snailly** *(Aplikasi Lintas Platform Pengawasan Aktivitas Internet Anak)*
*   **Dosen Pembimbing:** Dr. Adam Mukharil Bachtiar, S.Kom., M.T. & Dian Dharmayanti, S.T., M.Kom.
*   **Inovasi & Cara Kerja:** 
    Aplikasi *cross-platform* (mobile untuk orang tua dan modul monitoring untuk gawai anak) untuk melindungi anak dari konten negatif internet (pornografi, judi online, radikalisme).
    *   **Surfior:** Melakukan pemfilteran web secara cerdas. Menggunakan algoritma **Support Vector Machine (SVM)** untuk mengklasifikasikan kategori situs web secara real-time berdasarkan teks halaman, bukan hanya memblokir *blacklist* statis.
    *   **Notifior:** Memberikan notifikasi instan kepada orang tua jika anak mencoba mengakses situs terlarang.
    *   **Reportior:** Menyajikan laporan analitik durasi dan riwayat aktivitas berselancar anak.
*   **Dampak:** Memberikan alat kontrol digital yang higienis, ramah anak, dan mendalam secara teknologi bagi orang tua di era digitalisasi pendidikan.

---

## 🥉 Juara 3: Tim Timses 417135 — Institut Teknologi Sepuluh Nopember (ITS)

*   **Nama Aplikasi/Sistem:** **Aira** *(Platform Assistive Intelligence Terintegrasi: Smart Business Management, Pemasaran Cerdas Otomatis & Riset Pasar Geodemografis untuk UMKM)*
*   **Anggota Tim:** Muhammad Rayyaan Fatikhahur Rakhim, Hilmi Fawwaz Sa'ad, Dian Kusumawati
*   **Dosen Pembimbing:** Hadziq Fabroyir, S.Kom., Ph.D.
*   **Inovasi & Cara Kerja:**
    Platform asistif berbasis AI untuk membantu transformasi digital UMKM dengan tiga fitur inti:
    *   **iSIS:** Pencatatan keuangan berbasis *voice recognition* — pelaku UMKM mencatat transaksi via suara, sistem otomatis mengkategorikan dan menyusun laporan keuangan.
    *   **iNOV:** Otomasi pemasaran digital — menghasilkan konten promosi (caption, desain, hashtag) sesuai profil target pasar tanpa perlu *skill* desain/teknis.
    *   **iDATA:** Platform analitik terintegrasi — menyajikan data geodemografis (profil konsumen per radius lokasi) dan *digital trend* (konten viral, geotrending) sebagai *decision support system*.
*   **Dampak:** Mengatasi stagnansi 85% UMKM Indonesia yang belum terdigitalisasi dengan antarmuka berbasis suara yang mudah digunakan, tervalidasi dengan skor ASTUTE 6,9/7 (kategori excellent).

---

## 🏆 Penghargaan Khusus: Best Paper

*   **Pemenang:** **Tim Little Vietnam** — Universitas Indonesia (UI)
*   **Nama Aplikasi/Sistem:** **Fokal** *(Parental Control Berbasis AI Vision & Screen Overlay)*
*   **Anggota Tim:** Muhammad Hamiz Ghani Ayusha (Lead), Ammar Muhammad Rafif (AI Eng), Fidel Akilah (Product Designer).
*   **Inovasi & Cara Kerja:**
    Fokal memecahkan kelemahan aplikasi *parental control* konvensional yang hanya memblokir URL situs web statis (karena konten pornografi/kekerasan saat ini sering muncul di dalam aplikasi media sosial seperti Instagram, TikTok, atau Telegram yang tidak terblokir URL-nya).
    *   **Real-time Screen Buffer Parsing:** Aplikasi berjalan secara pasif di latar belakang perangkat anak, menangkap *buffer* tampilan layar secara berkala.
    *   **AI Vision Object Localization:** Menjalankan model objek deteksi **YOLOv11/YOLOv8** secara lokal untuk mendeteksi dan melakukan *overlay* penyensoran instan terhadap konten gambar eksplisit maupun teks vulgar (*pornotext*) langsung pada tampilan layar HP anak.
    *   **End-to-End Cryptography:** Menggunakan protokol enkripsi data tingkat tinggi untuk menjamin tangkapan layar anak tidak bocor atau dikirim dalam bentuk mentah ke server, demi menjaga kerahasiaan privasi anak.
*   **Kenapa Meraih *Best Paper*?**
    Paper ilmiah mereka mengupas evaluasi akademis yang sangat ketat mengenai pengukuran latensi pemrosesan *screen capture* (milidetik), metrik performa model YOLOv11 (precision/recall) dalam mendeteksi objek pornografi pada layout antarmuka ponsel, serta dokumentasi model matematis enkripsi data yang sangat solid.
