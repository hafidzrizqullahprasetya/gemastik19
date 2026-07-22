# TB Vector — Deteksi Dini Tuberkulosis berbasis AI Acoustic Sensing (Juara 1 Gemastik 2025)

> Transkrip presentasi finalis Gemastik XVIII 2025 — Divisi Pengembangan Perangkat Lunak. Tim DoAlert, Institut Teknologi Sepuluh Nopember (ITS).

---

## Pembukaan

Untuk bisa diterapkan, tidak hanya di rumah sakit, tapi yang pastinya adalah karena harapan kita bisa untuk men-screening di awal untuk populasi umum, sehingga bisa diharapkan justru bisa ditempatkan di tempat-tempat publik, seperti di stasiun atau bandara seperti ini. Akan sangat-sangat potensial, sangat membantu Indonesia untuk mewujudkan Indonesia Bebas TB di 2030.

Indonesia menempati peringkat kedua kasus tuberkulosis tertinggi di dunia dengan 14 kematian per jam. Masalah utamanya adalah mobilitas pasien. Pasien TB masih bebas berkeliaran di ruang publik dan menyebabkan rantai penularan terus berlanjut.

## Solusi: TB Vector

Untuk mengatasi permasalahan tersebut, kami menghadirkan **TB Vector**. Software cerdas berbasis AI Acoustic Sensing dan Computer Vision untuk deteksi dini tuberkulosis di ruang publik.

## Analisis Fisiologis Batuk

Secara fisiologis, batuk terdiri atas tiga fase utama: inspirasi, kompresi, dan eksplosi. Batuk normal umumnya berdurasi singkat dengan energi rendah. Sedangkan batuk tuberkulosis cenderung memiliki distribusi broadband, tekstur akustik kasar, dan durasi yang panjang akibat turbulensi udara. Ciri tersebut menjadi pola khas yang diidentifikasi oleh model deep learning kami sebagai indikasi obstruksi respiratori.

Perbedaan ini tidak dapat diidentifikasi melalui gelombang suara biasa. Oleh karena itu, model kami menggunakan **MFCC** yang lebih merepresentasikan suara batuk berdasarkan pola pendengaran manusia.

## Ekstraksi Fitur MFCC

Bagaimana cara kita mendapatkan fitur-fitur MFCC tersebut?

1. **Segmentasi** — Membagi data batuk menjadi 1 second.
2. **Resampling** — Resample menjadi 16 kHz.
3. **STFT (Short-Time Fourier Transform)** — Membagi data yang sudah disegmentasi menjadi beberapa window, yang mana per window tersebut akan dikalikan dengan fungsi window, dinamakan fungsi Hann. Fungsi tersebut digunakan untuk mencegah spectral leakage.
4. **FFT** — Konversi ke dalam domain frekuensi melalui FFT menggunakan algoritma Cooley-Tukey.
5. **Log Amplitude Spectrum** — Apply logaritma ke dalam amplitudo pada domain frekuensi untuk mendapatkan visualisasi dari log amplitude spectrum.
6. **Mel Scaling** — Mengambil log spectrum dari tahap sebelumnya lalu apply menggunakan mel filter bank.
7. **DCT (Discrete Cosine Transform)** — Mengekstraksi koefisien MFCC sebagai representasi fitur utama suara batuk.

Kami juga mengambil delta dan delta-delta untuk melihat kecepatan perubahan fitur dan akselerasi dari kecepatan perubahan fitur tersebut.

## Model LSTM

Tahap berikutnya adalah kami akan memproses fitur-fitur MFCC ke dalam model kami yang menggunakan algoritma **LSTM**. Model kami menerima input berupa batch size, sequence length, dan input size 39 fitur MFCC (yaitu 13 MFCC, 13 delta, dan 13 delta-delta).

Arsitektur model:
- **Batch Normalization** (2 layer) — menormalkan skala nilai agar fitur seragam.
- **LSTM** (2 layer) — mempelajari pola temporal yang kompleks dari fitur MFCC.
- **Dropout** (1 layer) — mencegah overfitting dan membuat model lebih robust.
- **Fully Connected Layer** (1 layer) — mengeluarkan 2 kelas output: batuk TB atau non-TB, dengan fungsi softmax untuk menghitung probabilitas per kelasnya.

Melalui integrasi fitur MFCC, model kami bisa mendapatkan recall sebesar **90%**.

## Implementasi di Stasiun Gubeng

Berikut ini merupakan initial implementation test TB Vector di lingkungan Stasiun Gubeng. Dalam implementasi kali ini, TB Vector diintegrasikan dengan penangkap input suara untuk mensimulasikan penerapan sistem di ruang publik. Kami menempatkan device di area ruang tunggu stasiun.

### Proses Kerja Sistem

1. Suara batuk teridentifikasi.
2. Software secara otomatis melakukan estimasi **Direction of Arrival** menggunakan pendekatan inverse beamforming untuk menentukan arah datangnya sumber suara.
3. Model LSTM akan melakukan klasifikasi untuk menentukan apakah suara tersebut termasuk TB atau non-TB.
4. Modul **Object Detection** akan aktif untuk melakukan pelacakan individu yang batuk berdasarkan timestamp dari data akustik.

### Antarmuka Web

Admin dapat melakukan pemantauan melalui antarmuka web TB Vector:

1. Login menggunakan akun Gmail dan password.
2. Pilih Device List untuk menampilkan daftar perangkat aktif.
3. Klik View Detail pada perangkat yang ingin diamati.
4. Lakukan pencarian data di bagian Device Data.
5. Untuk melihat detail hasil deteksi, pilih Lihat Detail.

Pada tampilan ini, admin dapat meninjau data batuk, hasil klasifikasi, estimasi arah datangnya suara, serta hasil pelacakan melalui Object Detection. Selain itu, hasil rekaman suara batuk juga disimpan oleh sistem untuk kebutuhan continuous learning, guna meningkatkan adaptivitas dan akurasi sistem seiring waktu.

## Direction of Arrival & Inverse Beamforming

TB Vector berhasil dikembangkan dengan keunggulan Direction of Arrival dan Inverse Beamforming yang digunakan untuk mendeteksi arah suara batuk dengan presisi.

Komponen Direction of Arrival bekerja dengan mendapatkan perbedaan waktu antar mikrofon dan memanfaatkan variasi fase gelombang triangulasi untuk menentukan vektor arah suara. Melalui **Generalized Cross-Correlation Phase Transform**, TB Vector mengekstraksi selisih waktu antar sinyal dengan menekankan informasi fase. Pendekatan ini meminimalkan bias amplitudo dan meningkatkan keandalan sistem saat diimplementasikan di lingkungan dengan akustik yang kompleks.

Untuk kondisi dengan SNR yang rendah, diterapkan **inverse beamforming**, teknik yang secara adaptif membalik pola tangkapan mikrofon, menekan interferensi arah lain, dan memperkuat sumber suara utama. Integrasi ketiga metode ini menghasilkan sistem estimasi arah yang stabil, akurat, dan tahan terhadap variasi kondisi akustik.

## Tech Stack

Output klasifikasi TB Vector disajikan melalui web berbasis arsitektur JavaScript untuk mendukung efisiensi dan skalabilitas sistem:

- **Node.js** dan **Express.js** sebagai inti back-end, mengatur alur data dan komunikasi antar komponen.
- **EJS** untuk merender tampilan interaktif berbasis HTML, CSS, dan JavaScript.
- **WaveSurfer.js** untuk visualisasi dan analisis data audio.
- **Docker** untuk keseragaman di setiap environment.
- **MongoDB** dengan **Mongoose** untuk menjaga konsistensi struktur dan validasi data.

## Dampak & Estimasi Penghematan

TB Vector menyajikan output klasifikasi dari artificial intelligence dilengkapi Direction of Arrival dan inverse beamforming sekaligus object detection. Web kami juga memfasilitasi tracking pasien tuberkulosis dari awal terdaftar hingga fase kesembuhan untuk meningkatkan akurasi pendataan tuberkulosis di Indonesia.

Dalam implementasi TB Vector, dokter berperan sebagai pengambil keputusan klinis. Perawat berperan sebagai operator dan pengelola sistem, sedangkan petugas IT bertugas untuk memastikan integritas dan kelancaran operasional sistem.

### Estimasi Penghematan

- **Low estimate:** Penghematan sebesar 7,3 miliar rupiah per tahun dan memangkas pasien TB 365 populasi.
- **High estimate:** Penghematan dapat mencapai 21,9 miliar per tahun dengan pengurangan rantai penularan mencapai 1.095 pasien.

## Model Bisnis

Untuk mencapai sustainability TB Vector, kami menerapkan 3 mode bisnis:

1. **Business to Government** — untuk penerapan di fasilitas publik.
2. **Business to Business** — untuk penerapan di fasilitas kesehatan swasta.
3. **Software as a Service** — untuk akses dashboard dan integrasi dengan EMR atau Hospital Information System.

Dalam rancangan kerjasama implementasi sistem dan pengumpulan data primer, kami bekerjasama dengan Rumah Sakit Khusus Infeksi Universitas Airlangga.

## Penutup

TB Vector siap memberikan dampak nyata, scalable, dan mendukung eradikasi TB 2030. TB Vector, when AI listens, sees, and looks.
