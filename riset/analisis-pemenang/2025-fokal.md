# Analisis Penghargaan Best Paper: Tim Little Vietnam (Gemastik XVIII 2025 - PPL)

Dokumen ini membedah inovasi **Fokal** dari Universitas Indonesia yang berhasil meraih penghargaan bergengsi **Best Paper** pada Divisi Pengembangan Perangkat Lunak Gemastik 2025.

---

## 1. Profil Inovasi "Fokal" (UI)
*   **Nama Aplikasi:** **Fokal** *(Parental Control Berbasis AI Vision & Screen Overlay)*.
*   **Masalah Nyata:** 
    Aplikasi pemblokir internet tradisional (*parental control*) hanya bekerja memblokir alamat web (URL) statis. Namun, di era sekarang, konten negatif (pornografi, kekerasan, judi) justru paling banyak menyebar di dalam aplikasi tertutup seperti media sosial (TikTok, Instagram, Telegram) di mana alamat URL-nya tidak bisa diblokir oleh sistem filter biasa karena menggunakan enkripsi HTTPS aplikasi induk.
*   **Solusi Teknologi:** 
    Aplikasi *background service* yang berjalan secara pasif pada HP anak dengan memindai tangkapan layar perangkat secara berkala menggunakan teknologi kecerdasan buatan visual.
*   **Fitur Utama Fokal:**
    1.  **AI Vision Screen Buffer Analysis:** Secara berkala membaca *screen buffer* (pixel visual di layar HP anak) tanpa memedulikan aplikasi apa yang sedang dibuka.
    2.  **YOLOv11 Object Localization:** Menggunakan model objek deteksi **YOLOv11** yang dioptimalkan secara lokal di perangkat ponsel (*on-device AI*) untuk mendeteksi area gambar bermuatan pornografi/vulgar, serta mendeteksi teks vulgar (*pornotext*).
    3.  **Real-time Sensor Overlay:** Mengaburkan (*blurring*) atau menyensor bagian layar yang bermuatan pornografi secara instan sebelum mata anak melihatnya.
    4.  **Privacy Preservation (End-to-End Encryption):** Enkripsi kunci publik-swasta untuk mengirim notifikasi log ke orang tua tanpa membocorkan gambar tangkapan layar mentah anak ke server.

---

## 2. Mengapa "Fokal" Meraih Penghargaan *Best Paper*?

Dokumentasi penulisan ilmiah (*paper*) tim Fasilkom UI ini dinilai juri PPL sebagai yang terbaik karena memenuhi standar publikasi jurnal internasional bereputasi:

### A. Evaluasi Latensi yang Ketat (Performance Trade-off)
Melakukan penangkapan layar dan deteksi AI setiap detik di HP anak berpotensi menghabiskan baterai dan membuat HP lemot. Paper mereka mengkaji secara mendalam:
*   Optimalisasi ukuran model YOLOv11 (kompresi model menggunakan teknik *quantization* dari FP32 ke INT8).
*   Pengukuran latensi proses inferensi AI di HP (dalam milidetik) untuk memastikan aplikasi tidak mengganggu kenyamanan performa HP anak saat bermain game atau belajar.

### B. Evaluasi Akurasi Dataset (Confusion Matrix & ROC-AUC)
Mereka memaparkan metrik akurasi deteksi AI secara ilmiah menggunakan kurva *Precision-Recall* dan nilai *Area Under Curve* (AUC) untuk meminimalisasi kesalahan sensor (*false positive*) agar aplikasi tidak salah memblokir gambar biasa (seperti warna kulit biasa atau kartun).

### C. Pemodelan Keamanan Data & Kriptografi
Menyajikan diagram arsitektur keamanan data yang membuktikan secara matematis bahwa tangkapan layar anak aman secara privasi dari peretasan karena dienkripsi langsung di *edge device* (ponsel anak) sebelum dikirim ke dasbor orang tua.
