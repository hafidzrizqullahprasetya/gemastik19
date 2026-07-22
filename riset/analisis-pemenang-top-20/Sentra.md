# Sentra — Platform Gateway Finansial Inklusi untuk Penyandang Tunanetra

> Transkrip presentasi finalis Gemastik XVIII 2025 — Divisi Pengembangan Perangkat Lunak.

---

## Pembukaan

Bayangkan, Anda tidak bisa membuka rekening sama sekali. Tidak bisa transfer sama sekali dan juga tidak bisa berinvestasi sama sekali karena kesulitan yang ada. Inilah yang dirasakan oleh 4 juta orang tunanetra di Indonesia yang belum memiliki akses ke sana karena kesulitan yang mereka alami.

Mari kita lihat Indonesia. Menempati peringkat ketiga dengan jumlah penduduk penyandang gangguan penglihatan terbanyak di dunia. Dan mirisnya, 80% dari mereka tidak memiliki akses ke layanan keuangan digital. Salah satunya adalah tunanetra dan juga low vision.

## Masalah

Dari itu kami langsung saja ngobrol, dengarkan kami yaitu Pak Wiguna selaku tunanetra total. Dia merupakan CEO juga dari perusahaan yang dia bangun. Dia bercerita bahwasanya verifikasi data secara mandiri itu sangat sulit. Foto KTP, scan wajah itu sangat mustahil. Lalu juga sulitnya manajemen keuangan digital sendiri, dan memang ada aplikasi cash reader, tapi ini mahal dan juga mereka terpaksa harus langganan 200 ribu per bulan, hanya untuk tahu nominal uang kertas yang mereka miliki di dompet mereka.

Dan tunanetra dan low vision yang kami temui juga mengalami hal yang serupa. Selama ini, kalau misalnya mereka mau curious, itu sangat sulit untuk mandiri. Dan mereka masih minta bantuan orang lain. Dan mau belajar finansial pun itu masih ketergantungan banyak visual, sehingga menyulitkan mereka untuk memahami materi yang ada. Kami memiliki berita yang unik, yaitu tunanetra sampai saat ini ditolak menjadi nasabah bank. Itulah yang membuat mereka terpaksa melalui online banking saja sampai saat ini.

## Solusi: Sentra

Inilah yang membuat kita bertanya-tanya: bagaimana cara kita membantu tunanetra dan juga low vision mengakses layanan keuangan secara mandiri dari awal sampai akhir? Dan inilah yang membuat kita berinovasi dan dengan bangga memperkenalkan **Sentra**, platform gateway finansial inklusi pertama di Indonesia untuk penyandang gangguan penglihatan, terintegrasi Text-to-Speech dan juga Artificial Intelligence. Kami merancangnya dengan ramah gangguan penglihatan, model bisnis yang fleksibel, dan ini bisa mendukung SDGs.

## Tech Stack

Kami menggunakan teknologi modern. Untuk meningkatkan akses keuangan inklusif, kami menggunakan **Golang** untuk memastikan integrasi yang mulus antara sistem, pengguna, dan juga model AI kami. Kami menggunakan empat model AI. Kami menggunakan OpenAI dan juga ElevenLabs untuk memastikan perintah suara bisa menjadi aksi yang membantu pengguna. Salah satunya adalah navigasi antar halaman otomatis dan catat pemasukan dan pengeluaran dengan instan dan juga cepat.

## Demo Fitur

### Scan KTP

> "Foto proses KTP. Posisi sudah tepat. Posisi sudah tepat. Posisi sudah tepat. Kamera geser ke kiri. Posisi sudah tepat."

Dan di sini dia berhasil. Akhirnya bisa scan. Mari kita tunggu, dan di sini akan diekstraksi data-data KTP-nya menjadi data-data yang dibutuhkan untuk membuka rekening. Dan berhasil.

### Scan Wajah

Mari kita lanjut ke fitur wajah. Di sini sama saja, yaitu mengikuti arahan suara, tapi ini untuk wajah yang lebih spesifik.

> "Wajah tidak terdeteksi. Mohon posisi, arahkan kepala Anda ke kiri. Arahkan kepala Anda mundur sedikit. Posisi wajah sudah tepat."

Dan berhasil.

### Catat Pengeluaran via Suara

> "Tolong, catat pengeluaran saya sebesar 200 ribu untuk kategori makanan di Starbucks."

Di sini mereka bisa mencatat pemasukan dan pengeluaran hanya dari suara saja.

> "Dicatat, pengeluaran 200 ribu rupiah untuk kategori makanan di Starbucks, kategori lainnya. Dan berhasil."

### Deteksi Nominal Uang Kertas

Fitur selanjutnya, kami ada Sentra Detector dimana mereka di sini bisa deteksi nominal uang kertas dengan cepat, mudah, dan juga pastinya gratis. Kini mereka tidak perlu khawatir lagi akan langganan cash reader yang mahal, dan mereka bisa menggunakan ini dengan gratis untuk mengetahui nominal yang mereka punya.

> "Total uang yang terdeteksi adalah 5.000 rupiah dengan rincian 5.000 rupiah uang kertas seperti berikut."

### Navigasi via Suara

> "Tolong pindah ke halaman literasi."
>
> "Baik, membuka halaman literasi. Dan berhasil."

### Fitur Lainnya

- **Fast QRIS** — scan QRIS dengan mengikuti arahan suara yang sama dan lebih dekat lagi tanpa melihat.
- **Sentra Blog** — belajar mengenai finansial dengan mudah tanpa tergantung visualisasi apa pun lagi.
- **Sentra PING** — visualisasi e-money ataupun saldo yang dimiliki jika Sentra diintegrasikan oleh bank-bank ataupun dompet digital Indonesia.

### Demo Transaksi

> "Perintah, catat. Total uang yang terdeteksi adalah 5.000 rupiah. Beli pulsa seharga 150.000, nomor Indosat. Klik lagi, Kak. Dua kali lagi. Loading, Kak, sebentar. Dicatat pengeluaran 150.000 rupiah untuk beli pulsa nomor Indosat, kategori lainnya."

## Keunikan Sentra

Sentra adalah **all-in-one solution**, inklusi finansial yang lengkap dan tersedia dalam satu platform. Ini juga dioptimalkan penuh untuk gangguan penglihatan dari awal onboarding sampai Sentra Blog.

Model bisnis Sentra juga tidak kalah unik. Fitur Sentra siap untuk di-white label, di-hit API atau diintegrasikan oleh Bank dan FinTech di Indonesia. Kami memiliki website yang dapat mereka gunakan dashboard untuk melihat dan juga hit API-nya dari sana.

### Arahan Suara Khusus

Kami juga memiliki arahan suara khusus, spesifik, dan juga detail untuk pengguna kami. Mari kita ambil contoh yaitu saat scan KTP. Pada saat itu akan terdengar suara seperti: "KTP Anda terdeteksi, lebih dekat lagi, lebih jauh, kanan, kiri", sehingga mereka akhirnya berhasil untuk scan KTP secara mandiri. Keunikan Sentra tidak dimiliki oleh solusi yang sudah ada dan menjadi yang pertama di Indonesia.

## Target Pasar

Target kami pastinya adalah penyandang tunanetra dan juga low vision yang memiliki penghasilan dan perusahaan bertransaksi digital. Dengan target kedua kami adalah bank dan juga dompet digital yang menunjukkan aksi nyata untuk inklusi disabilitas. Salah satunya adalah Bank BNI yang telah menyediakan mesin ATM Tunanetra. Lalu, kenapa tidak? Bank juga menggunakan API Sentra sehingga mereka memiliki aksesibilitas tinggi akhirnya untuk tunanetra di Indonesia.

## Desain Aksesibilitas

Kami telah menyesuaikannya dengan standar WCAG 2.1 dengan warna biru tua yang aksesibel dan teruji ramah low vision, serta font **Atkinson Hyperlegible** yang sudah sangat biasa dan sering dipakai oleh penyandang low vision. Kami telah diuji oleh dua tunanetra dan juga satu penyandang low vision dengan mendapatkan beberapa feedback yang berharga dan mengimplementasikannya. Seperti di Sentra Manager, ada beberapa elemen yang kata mereka terlalu kecil — kita sesuaikan lebih besar lagi. Kami memiliki Sentra Blog juga yang disesuaikan dari yang sebelumnya sangat kompleks, kami sederhanakan sehingga mereka akhirnya bisa memahami dengan mudah materi yang disampaikan.

## Penutup

Pada akhir tahun 2025, kami berkomitmen untuk menjadi gateway literasi inklusi pertama di Indonesia untuk penyandang gangguan penglihatan, sehingga 4 juta tunanetra bisa mengakses dengan mandiri, membuka nasabah baru bagi FinTech, dan juga mendukung Indonesia Emas 2045.

Sentra, hadir dari kolaborasi para inovator yang percaya inklusi adalah kebutuhan, dan saya Rica sebagai CEO dan rekan-rekan saya yang berpengalaman mengembangkan Sentra menjadi yang terbaik. Mari bergabung bersama kami untuk mewujudkan kemandirian bangsa melalui tunanetra dan juga low vision di Indonesia yang akhirnya bisa mengakses layanan keuangan digital secara mandiri.

Sentra — best solution for financial inclusivity. Sentra, meraba finansial meraih impian. Sekian dari kami dan terima kasih.
