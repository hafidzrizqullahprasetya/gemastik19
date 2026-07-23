# Snailly — Parental Control Lintas Platform (Juara 2 Gemastik 2025)

> Transkrip presentasi finalis Gemastik XVIII 2025 — Divisi Pengembangan Perangkat Lunak. Tim Sayang Anak, Universitas Komputer Indonesia (UNIKOM).

---

## Pembukaan

Internet menawarkan dunia umum bagi anak-anak. Namun, konten negatif yang tersebar di internet sangat berbahaya bagi anak. Berdasarkan wawancara dengan orang tua, hal tersebut menjadi tantangan terbesar karena anak sering kali tidak terpantau saat menggunakan internet.

Perkenalkan kami tim Sayang Anak dari Universitas Komputer Indonesia. Saya Regia Kobu bersama rekan saya Ari Khikari dan Fabian Jiwani. Berdasarkan hasil riset yang kami lakukan, lebih dari 60 juta anak yang berusia 5 hingga 14 tahun di Indonesia aktif dalam menggunakan internet. Dan terdapat lebih dari 6 juta konten negatif tersebar di internet serta mudah diakses oleh siapa saja.

## Masalah

Anak-anak biasanya mengakses internet untuk hiburan, bermain game, dan keperluan belajar. Namun, aktivitas mereka di internet sering kali tidak diawasi secara optimal oleh orang tua. Kondisi ini membuat anak mudah menemukan konten negatif, ditambah dengan minimnya pengawasan serta kesulitan orang tua dalam melacak jejak aktivitas anak, yang pada akhirnya membuka peluang bagi anak untuk mengakses konten negatif baik secara sengaja maupun tidak. Sehingga hal ini dapat memberikan dampak negatif seperti isu berikut: ada beberapa anak di bawah umur yang melakukan tindakan tidak senonoh, atau remaja yang tega memperkosa temannya setelah menonton video porno.

Di sisi lain, internet pada dasarnya bersifat inklusif dan terbuka bagi semua orang, termasuk anak-anak yang ingin belajar mengembangkan pengetahuan mereka. Kondisi ini menunjukkan bahwa pengawasan digital melalui web maupun media sosial menjadi hal yang krusial agar anak dapat memakai internet secara positif tanpa terpapar konten berbahaya.

Saat ini memang sudah tersedia berbagai aplikasi parental control yang dirancang untuk membantu orang tua dalam mengawasi aktivitas online anak, seperti Norton Family dan Google Family Link. Namun, kedua aplikasi tersebut masih memiliki keterbatasan karena hanya mampu memblokir konten pornografi, tapi tidak dengan konten lainnya seperti judi, kekerasan, maupun isu LGBT.

## Solusi: Snailly

Oleh karena itu, dengan bangga kami perkenalkan **Snailly — Explore the Internet Safely**. Snailly adalah aplikasi berbasis mobile dan desktop yang dapat membantu orang tua untuk memantau dan menyaring website dan konten di aplikasi media sosial, sehingga anak dapat mengakses internet dengan lebih aman. Snailly hadir sebagai solusi efektif untuk mengatasi tiga masalah yang telah disebutkan sebelumnya.

## Pengembangan

Saat ini, Snailly sudah melakukan dua tahap pengembangan untuk memastikan pengalaman aman dan ramah bagi anak saat menjelajahi internet. Pada pengembangan sebelumnya, Snailly hanya berfokus pada deteksi konten negatif di website dan belum mampu mendeteksi konten negatif di media sosial. Deteksi konten negatif dilakukan menggunakan algoritma **SVM** yang diterapkan melalui TensorFlow dan Scikit-Learn.

Pada tahap pengembangan saat ini, Snailly telah mampu mendeteksi konten negatif berupa gambar dan teks, tidak hanya di website, namun juga di media sosial dengan menggunakan **Multimodal LLM GitBase** untuk analisis multimodal. Jenis konten yang dapat dikenali tidak hanya pornografi, tapi juga kekerasan, LGBT, dan perjudian.

## Fitur Utama

Snailly memiliki tiga fitur yang dapat digunakan oleh orang tua dan anak-anak:

1. **Surfior (Filtering)** — dapat menganalisis dan memblokir teks serta gambar yang mengandung konten negatif di internet. Dengan dukungan algoritma SVM untuk klasifikasi teks dan LLM image captioning, Surfior dapat mengenali konten seperti pornografi, kekerasan, LGBT, dan perjudian, serta mencegah anak melihatnya secara real-time.
2. **Notifior (Alerting)** — ketika anak mengakses konten negatif, orang tua akan mendapatkan notifikasi secara real-time. Orang tua juga dapat langsung memilih untuk memblokir website dan media sosial tersebut jika diperlukan.
3. **Reportior (Reporting)** — dapat digunakan oleh orang tua untuk melihat riwayat internet anak. Dengan Reportior, orang tua juga dapat memilih riwayat akses internet anak yang ingin diblokir atau tidak.

Selain menjaga anak dari konten negatif, Snailly juga mengedukasi anak melalui fitur chatbot yang bisa anak gunakan untuk bertanya berdasarkan website yang sedang diakses.

## Demo Aplikasi

Kami akan melakukan demo Snailly pada platform mobile yang terdiri dari 3 skenario.

### Skenario 1: Website Filtering

Anak akan mencoba menjelajahi website. Namun sebelum itu, orang tua perlu login terlebih dahulu dengan akun yang sudah dibuat. Jika data yang diisi benar, maka orang tua akan dialihkan ke halaman pilih pengguna, dan orang tua akan memilih pengguna anak. Kemudian mengatur perizinan yang diperlukan oleh Snailly. Setelah semua izin diberikan, orang tua dapat mengaktifkan fitur Surfior, dan anak dapat menjelajahi website.

Di sini kami akan mencoba mengakses website judi online. Karena judi termasuk konten negatif, maka Snailly akan memblokir website tersebut. Setelah Snailly berhasil memblokir, akan memberikan notifikasi ke orang tua. Di sisi lain, orang tua akan bertindak sebagai human annotator untuk menentukan apakah website tersebut diblokir atau tidak. Pada tampilan Reportior, orang tua dapat melihat konten yang sudah diakses oleh anak, baik itu harian maupun bulanan.

### Skenario 2: Deteksi Gambar & Video

Snailly dapat mendeteksi konten negatif berupa gambar dan video pada browser maupun sosial media. Contohnya, ketika anak mencari konten porno pada Google Images, maka Snailly akan memblokir konten tersebut. Contoh berikutnya, ketika anak membuka video yang mengandung konten LGBT pada YouTube, Snailly dapat memblokir konten tersebut.

Snailly tidak hanya mencegah, tapi juga mengedukasi. Setiap anak mengakses browser, Snailly Chatbot akan selalu menemani browsing anak, dan anak dapat menanyakan terkait website tersebut. Tidak hanya browser, ketika anak membuka aplikasi sosial media, misalnya TikTok, dan mengandung konten berbahaya, Snailly dapat memblokir konten tersebut. Ketika konten berhasil diblokir, Snailly akan mengirimkan notifikasi ke orang tua.

Snailly telah menangani agar services tidak bisa dimatikan oleh anak dan di-uninstall.

## Cara Kerja

Kami melakukan scraping menggunakan Selenium untuk mendapatkan data teks dan gambar. Content yang telah diekstraksi akan di-captioning menggunakan GitBase dan diprediksi menggunakan algoritma SVM untuk identifikasi konten yang aman dan negatif. Apabila anak berusaha mengakses konten yang negatif, maka Firebase Notification akan mengirimkan notifikasi ke orang tua.

Snailly menerapkan mekanisme dalam data mining yaitu **Human-in-the-loop** yang melibatkan orang tua sebagai anotator yang berperan dalam membantu pelatihan model secara periodik berdasarkan personalisasi orang tua.

## Pengujian Lapangan

Kami telah melakukan pengujian lapangan di SD Negeri 213 Babakan Ciparay dan SMP Negeri 24 Bandung. Di sana, kami melakukan pengujian dengan siswa dan orang tua untuk menguji efektivitas aplikasi Snailly. Berikut adalah testimoni dari salah satu orang tua yang melakukan uji coba pada Snailly: beliau merasa lebih mudah untuk memantau aktivitas internet anak setelah memakai Snailly.

## Roadmap

Melihat dari potensi besar yang dimiliki oleh Snailly, kami telah merencanakan untuk pengembangan selanjutnya. Kami akan menambahkan fitur baru yaitu pemblokiran audio dan pengkategorian konten yang telah diakses oleh anak.

## Penutup

Di internet, anak-anak bisa menemukan dan belajar mengenai hal-hal baru setiap harinya. Namun, ibarat dalam perjalanan, anak pun memerlukan aturan keselamatan agar tetap aman.
