# Jelasin — Deteksi Hoax Berita Politik Indonesia berbasis AI & Knowledge Graph

> Transkrip presentasi finalis Gemastik XVIII 2025 — Divisi Pengembangan Perangkat Lunak. Tim Tukot, Politeknik Elektronika Negeri Surabaya (PENS).

---

## Pembukaan

Di era digital yang penuh kebisingan ini, informasi datang tanpa henti. Tetapi di antara banyaknya berita itu, tidak semua membawa kebenaran. Di balik kata-kata yang tampak meyakinkan terselip kepentingan, manipulasi, dan kebohongan. Dan inilah aral kita. Berita hoax atau informasi bohong adalah berita yang tampak meyakinkan tetapi tidak memiliki dasar kebenaran. Berita hoax bisa dibuat oleh siapa pun, disebar ke mana saja, dan diterima oleh siapa pun.

### Suara Masyarakat

Apa kata mereka terkait berita hoax? Apakah memang seberbahaya itu?

> "Memang bagi saya berita hoax itu tidak meyakinkan ya. Harus kita telusuri lagi, dari mana berita itu, dan yang bertanggung jawab dari segi mana, maksudnya dari sisi mana. Sebaran ke masyarakat, kebenarannya bagaimana itu enggak, kita belum tahu. Kita perlu cari sumber yang lain, barangkali banyak-banyak ke teman atau ke tetangga dan semuanya."

> "Cerita pokoknya tentang apa gitu ya, kalau kita penasaran tentang kayak yang mengancam gitu, yang kita takut juga pas-pas gitu. Misal pun belum tahu itu bener atau enggak, itu belum terjadi bahaya maupun rawanan masyarakat. Bagi saya sendiri juga memang itu berbahaya juga, kalau memang dari orang yang tidak tahu, langsung diterima begitu saja. Ikut-ikut menindaklanjuti berita yang waktu itu mungkin disebarkan ke grup-grup lainnya."

## Masalah: Hoax Politik

Berita politik adalah informasi atau berita yang membahas terkait kekuasaan, kebijakan politik, dan juga pemilihan umum. Seharusnya berita-berita tersebut membangun kesadaran masyarakat. Tetapi sebaliknya, data dari Mafindo menemukan bahwa lebih dari 55% kategori berita hoax merupakan berita politik. Berita hoax dapat mengguncang pemerintahan, menurunkan kepercayaan masyarakat, dan juga memecah belah persatuan di Indonesia.

## Solusi: Jelasin

Saya Serifai. Saya Laili Marianti Purnamasari. Kami Tim Tukot dari Politeknik Elektronika Negeri Surabaya mempersembahkan **Jelasin**, aplikasi deteksi hoax untuk berita politik Indonesia berbasis AI dan Knowledge Graph.

### Cara Penggunaan

Pengguna cukup masuk menggunakan akun yang telah terdaftar ataupun melakukan pendaftaran akun pada halaman register. Di halaman beranda terdapat tiga pilihan untuk menganalisis berita:

1. **Melalui tautan berita politik** — Cukup tampilkan link berita, dan dalam hitungan detik, sistem berbasis AI dan Knowledge Graph akan bekerja. Hasil analisis pun langsung ditampilkan dengan tampilan yang sederhana dan mudah dipahami.
2. **Mengunggah gambar atau foto berita** — Berkat teknologi OCR, sistem mampu membaca teks yang ada di dalam gambar dan menampilkannya dengan hasil yang sama.
3. **Mengetik berita secara manual** — Baik hanya judul, narasi, maupun keduanya.

Jika berita yang dimasukkan bukan termasuk kategori politik, sistem akan menampilkan notifikasi bahwa berita tersebut bukanlah berita politik. Selain itu, pengguna juga dapat melihat kembali riwayat analisis yang pernah dilakukan sebelumnya.

### Hasil Analisis

Hasilnya akan menghasilkan klasifikasi — hoax atau fakta — dan nilai kepercayaan.

## Tech Stack

Lima teknologi utama:

1. **Flutter** sebagai aplikasi mobile.
2. **FastAPI** sebagai backend.
3. **IndoBERT** dan **Knowledge Graph** sebagai model AI.
4. **Firebase** sebagai penyimpanan.

## Metodologi & Pengujian

Dalam pengembangan aplikasi ini, kami menggunakan pendekatan Design Thinking dan Lean UX agar solusi yang kami hasilkan benar-benar berpusat pada pengguna. Tahap pengembangan kami dibagi menjadi 3:

1. **Tahap Ideate** — meliputi studi literatur, pembuatan prototipe, dan perancangan sistem.
2. **Tahap Build** — pembuatan dan pengujian aplikasi serta server.
3. **Tahap Feedback** — berfokus pada analisis hasil, pembuatan laporan, dan publikasi karya.

Kami juga melakukan pengujian sistem menggunakan 200 berita politik yang terdiri dari 100 berita hoax dan 100 berita valid. Dari hasil pengujian tersebut, Jelasin berhasil mencapai akurasi sebesar 71,5% dengan waktu analisis kurang dari 20 detik untuk setiap berita.

## Target Pengguna & Keunggulan

Aplikasi ini dirancang untuk masyarakat umum, terutama mereka yang berusia di atas 40 tahun, karena kelompok ini merupakan kelompok yang paling rentan terpapar hoax politik di media sosial. Dengan desain yang sederhana dan hasil analisis yang jelas, siapa pun bisa memahami aplikasi ini dengan mudah.

Situs website yang ada saat ini seperti TurnBackHoax dan juga Google Search, Jelasin jauh lebih lengkap karena Jelasin menerima tiga input yaitu dari link, gambar, dan juga ketikan berita. Jelasin juga dilengkapi dengan OCR, nilai kepercayaan, dan juga riwayat deteksi yang belum dimiliki oleh aplikasi lain.

### Testimoni

> "Ternyata bisa untuk mendeteksi kebenaran dari berita hoax. Berita hoax itu berita yang tidak benar. Terima kasih. Yang berkepentingan untuk menyeleksi adanya persyaratan-persyaratan itu supaya lebih jelas-jelas lagi. Itu ada keuntungannya."

## Roadmap

- Tugas ini dimulai sejak April 2025 dengan brainstorming ide.
- Juli hingga Oktober 2025, kami fokus pada pembuatan dan pengujian aplikasi.
- Di akhir tahun 2025, kami berkolaborasi dengan Komunitas Literasi Digital untuk validasi sistem.
- Pada tahun 2026, aplikasi Jelasin resmi diluncurkan dan diperkenalkan ke masyarakat luas.
- Di tahun 2027, kami berencana menjalin kerjasama dengan Dinas Kominfo untuk memperluas dampak dan integrasi aplikasi ini di tingkat nasional.
