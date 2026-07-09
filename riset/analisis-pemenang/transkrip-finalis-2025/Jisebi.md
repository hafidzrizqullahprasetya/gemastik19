# Jisebi (JCEB Checker) — Pre-Screening Naskah Ilmiah Otomatis

> Transkrip presentasi finalis Gemastik XVIII 2025 — Divisi Pengembangan Perangkat Lunak.

---

## Pembukaan

Setiap tahun, dunia akademik dibanjiri jutaan artikel baru. Jumlah publikasi meningkat tajam dari waktu ke waktu. Tapi kualitasnya belum tentu terjaga. Di balik kemajuan ini, dunia riset menghadapi tantangan serius. Mulai dari menjamurnya jurnal tidak kredibel, lemahnya proses editorial awal, hingga meningkatnya angka penolakan naskah karena kesalahan teknis sederhana.

Faktanya, masih banyak naskah ilmiah yang belum memenuhi standar struktur IMRaD, penggunaan format belum konsisten, bahkan ditemukan penyebutan institusi atau lokasi yang seharusnya disembunyikan dalam proses blind review. Ada juga penulis yang terpaksa merevisi karena preferensi subjektif reviewer dan sebagian merasa isi naskah mereka berubah dari makna aslinya.

Proses initial screening yang masih dilakukan secara manual menjadikan beban kerja editor meningkat. Akibatnya, waktu publikasi melambat, kualitas publikasi sulit dijaga, dan kepercayaan terhadap sistem ilmiah pun menurun. Inilah masalah nyata yang ingin kami jawab melalui inovasi.

## Solusi: JCEB Checker

Dari permasalahan ini, lahirlah **JCEB Checker**, sebuah sistem berbasis web yang melakukan pre-screening naskah ilmiah secara otomatis. Dengan Natural Language Processing dan analisis berbasis aturan, JCEB Checker mendeteksi masalah struktur, format, dan semantik sejak awal. Tujuannya sederhana: memastikan naskah sudah layak sehingga proses editorial lebih cepat, objektif, dan transparan.

## Cara Kerja

Pengguna terlebih dahulu login menggunakan username, lalu mengunggah naskah dengan format docx. Setelah itu, sistem menampilkan jendela konfirmasi untuk memastikan file yang terunggah sudah benar. Jika sudah sesuai, pengguna menekan tombol proses, dan notifikasi akan muncul menandakan bahwa dokumen sedang diproses.

Setelahnya, pengguna dapat membuka halaman riwayat upload. Untuk melihat hasil analisis yang telah selesai, file laporan berupa PDF dapat diunduh ketika statusnya sudah berubah menjadi selesai diproses.

### Hasil Laporan

Pada hasil laporan, JCEB Checker telah melakukan pemeriksaan menyeluruh terhadap struktur dan format naskah, mulai dari urutan IMRaD, konsistensi heading, hingga gaya penulisan daftar pustaka. Setiap bagian yang terdeteksi bermasalah akan ditandai otomatis dalam laporan, membantu pengguna mengenali area yang perlu diperbaiki kembali.

### Analisis Semantik

Selain itu, sistem juga menjalankan analisis semantik melalui beberapa modul utama:

1. **NLT Checker** — untuk menilai kebaruan topik, dengan membandingkan abstrak dengan jurnal serupa dari Scopus.
2. **Named Entity Recognition** — untuk mendeteksi kemungkinan penyebutan institusi atau lokasi yang dapat mengganggu proses blind review.
3. **Discussion and Conclusion Analyzer** — yang memastikan kesimpulan konsisten dengan hasil pembahasan.

## Arsitektur Sistem

JCEB Checker dirancang menggunakan arsitektur microservice agar setiap komponen sistem dapat berjalan secara independen.

1. **Front-end Service** — dibangun menggunakan Next.js dan dideploy melalui Cloud Run. Layanan ini menjadi jembatan antara pengguna dan sistem di belakangnya.
2. **Authentication Service** — dikembangkan menggunakan Express.js. Bertanggung jawab untuk login, manajemen akun, dan validasi token pengguna dengan data tersimpan di Firestore user database.
3. **Document Processing Service** — dijalankan menggunakan FastAPI. Dokumen disimpan di Manuscripts & Reports bucket melalui Cloud Storage, sementara metadata-nya tercatat di Documents Database.

Naskah dimasukkan ke dalam Document Processing Queue melalui Cloud Tasks agar sistem tetap responsif. Dengan cara ini, pengguna lain tetap bisa mengakses layanan tanpa terganggu. Begitu antrian aktif, dokumen akan diproses oleh 2 kelompok modul utama: modul pemrosesan dokumen (analisis struktural dan analisis format), serta modul analisis semantik dan kebaruan yang dijalankan oleh Semantic Checking Service. Jika salah satu layanan sedang tidak aktif, layanan lain tetap bisa berfungsi normal. Prinsip isolasi inilah yang membuat sistem lebih tangguh dan mudah dikembangkan di masa depan.

## Testimoni Editor

> "Sebagai editor, saya merasa JCEB Checker ini benar-benar membantu, karena biasanya sebelum masuk ke proses review ini, kami harus memeriksa banyak hal-hal teknis, mulai dari format, struktur, sama hal-hal teknis lainnya. Sekarang setelah menggunakan JCEB Checker, semua itu bisa langsung terlihat dari hasil evaluasi sistem. Kemudian dari anotasinya juga jelas, saya bisa tahu bagian mana yang perlu diperbaiki tanpa harus membuka dokumen satu per satu."

> "JCEB Checker sangat membantu bagi para editor maupun bagi para asisten editor, karena dalam sebulan itu kami bisa menerima banyak naskah dari penulis juga, sekitar 30 sampai 40 dalam satu bulan saja. Sehingga di sini kalau saya bisa memproses naskah untuk initial screening menggunakan JCEB Checker, jadi lebih cepat. Karena di situ dia bisa membantu pada bagian pemformatan, struktur abstrak, format penulisan, dan juga bahkan bisa mengecek referensi. Harus di sebut itu yang paling membutuhkan waktu yang paling banyak. Jadi dengan menggunakan JCEB Checker sih orang-orang lebih cepat ya. Jadi harapannya mungkin di depannya bisa dikembangkan untuk fitur-fitur yang lain yang bisa menyangkut konten dan topik dan sebagainya. Terima kasih."

## Roadmap

Sebagai bentuk keseriusan, JCEB Checker telah kami daftarkan dalam Hak Kekayaan Intelektual (HKI). HKI menjadi pijaran penting bagi keberlanjutan pengembangan sistem ini.

- **19 Oktober 2025:** Pengembangan JCEB Checker telah selesai, kami sedang berfokus untuk memperkenalkan aplikasi ini ke lebih banyak pengguna.
- **April 2026:** Evaluasi menyeluruh terhadap sistem, menambahkan fitur baru, dan memperbaiki hasil uji coba berdasarkan masukan pengguna.
- **November 2026:** Menargetkan JCEB Checker dapat didistribusikan secara nasional, mendekati lebih banyak lembaga dan jurnal ilmiah di seluruh Indonesia.

Dan yang lebih jauh, kami melihat potensi JCEB Checker untuk menjadi standar nasional pre-screening naskah ilmiah, membantu menciptakan proses publikasi yang lebih efisien dan kredibel di masa depan.
