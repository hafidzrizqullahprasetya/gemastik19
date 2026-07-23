# Jejak — Sistem Pelaporan & Rute Aman untuk Pejalan Kaki

> Transkrip presentasi finalis Gemastik XVIII 2025 — Divisi Pengembangan Perangkat Lunak.

---

## Pembukaan

Pernahkah kalian merasakan hal yang sama? Meskipun sepele, tetapi nyatanya bikin bete. Ternyata, ini bukan hanya masalah sepele. Pada tanggal 22 Januari 2012, telah terjadi tragedi kelam di mana sembilan pejalan kaki tewas ditabrak oleh sebuah mobil. Tragedi kelam tersebut diperingati sebagai Hari Pejalan Kaki Nasional sebagai pengingat akan risiko yang dihadapi oleh pejalan kaki setiap harinya.

Dan ini bukan hanya terjadi di Indonesia. Berdasarkan data dari World Health Organization atau WHO, sekitar 22% dari total kematian akibat kecelakaan lalu lintas di seluruh dunia adalah pejalan kaki. Itu artinya sekitar 270 ribu nyawa melayang setiap tahunnya, hanya karena mereka berjalan kaki. Di Indonesia sendiri, berdasarkan data dari Badan Pusat Statistik, angka korban jiwa kecelakaan lalu lintas mencapai angka 28.131 orang pada tahun 2022. Angka ini mengindikasikan bahwa lingkungan di Indonesia berisiko bagi para pejalan kaki.

## Masalah Infrastruktur

Lalu, bagaimana dengan infrastruktur pejalan kaki kita? Di Jakarta sendiri sebagai ibu kota, fakta mengejutkannya adalah berdasarkan data pada tahun 2023, dari seluruh total jalan yaitu 7.000 km, hanya sekitar 8,71% atau sekitar 610 km jalan yang bertrotoar. Dan yang lebih parahnya lagi, 84% jalan di negara berkembang termasuk di Indonesia tidak mempunyai trotoar sama sekali. Sekalipun ada pun kondisinya sangat memprihatinkan.

Trotoar yang seharusnya jalur aman bagi para pejalan kaki, malah dialihfungsikan sebagai tempat parkir liar, lahan jualan bagi para pedagang kaki lima, atau bahkan dibiarkan rusak dengan lubang atau permukaan yang tidak rata. Ironisnya, fasilitas yang dirancang untuk inklusivitas seperti guiding blocks bagi para tunanetra justru jadi sumber bahaya ketika rusak atau tidak terawat.

## Masalah Pelaporan

Nah, di sinilah letak masalahnya. Tidak ada sistem pelaporan yang efektif sehingga mereka tidak bisa menyuarakan keresahan mereka sebagai pejalan kaki. Kalaupun ada, sistem pelaporan tidak terstruktur, tidak terpusat, dan tidak terdokumentasi secara digital. Akibatnya, pemerintah sulit untuk memverifikasi dan menentukan prioritas mana yang harus diselesaikan terlebih dahulu.

Berdasarkan studi dari Jepang, pelaporan melalui digital, yaitu menggunakan website ataupun aplikasi, justru memiliki unsolved issue rate lebih rendah, sebesar 3,7% dibandingkan dengan pelaporan konvensional.

## Solusi: Jejak

Jadi, pertanyaannya sekarang, bagaimana kita menyelesaikan permasalahan ini dengan efektif? AI dapat menentukan tingkat kerusakan, apakah ringan, sedang, atau berat. AI juga bisa menambahkan deskripsi dampak dan catatan tambahan secara otomatis. Setelah selesai, kamu bisa edit deskripsi laporan dan tinggal kirim atau simpan sebagai draft untuk dilengkapi nanti. Dengan ini, laporan akan menjadi lebih cepat dan juga akurat.

Tidak hanya itu saja. Teknologi klasifikasi AI juga pasti membantu pemerintah untuk memprioritaskan perbaikan berdasarkan risiko dan urgensi tertinggi, sehingga perbaikan akan menjadi lebih tepat sasaran.

### Fitur Rute Aman

Mau jalan kaki tapi khawatir, rutenya enggak aman? Santai saja. Dengan Jejak, kamu tinggal masukin titik awal dan titik tujuan kamu, lalu Jejak akan memberikan rute optimal berdasarkan keamanan, jarak, dan waktu.

Tapi bukan cuma itu saja, aplikasi Jejak juga akan menganalisis kondisi sepanjang jalur, mulai dari aksesibilitas penyandang disabilitas, keberadaan lampu jalan, sampai penghalang yang tentu saja akan menghalangi perjalanan kamu, seperti ada kaki lima, parkir liar, dan banyak penghalang lainnya. Dengan ini, pejalan kaki dapat memilih jalan yang aman dan nyaman. Tentunya bagi kelompok orang yang rentan seperti anak-anak, lansia, dan penyandang disabilitas. Fitur ini juga dapat mewujudkan kota yang inklusif dan nyaman.

### Gamifikasi

Nah, biar makin seru, Jejak juga menyediakan fitur gamifikasi, yaitu sistem poin dan leaderboard:

- Dari laporan yang kamu kirimkan, kamu akan mendapatkan **5 poin**.
- Jika laporan yang kamu kirimkan sudah diverifikasi oleh admin, kamu akan mendapatkan **10 poin**.
- Dan yang terakhir, jika laporan yang sudah kamu laporkan sudah diperbaiki oleh pemerintah, kamu akan mendapatkan **20 poin**.

Kamu juga dapat memantau semua laporan yang pernah kamu kirimkan, beserta statusnya secara real-time, mulai dari dikonfirmasi, sedang ditindaklanjuti, dan yang terakhir sampai selesai diperbaiki. Dengan adanya fitur ini, Jejak juga menciptakan transparansi dan akuntabilitas pemerintah melalui jejak audit yang jelas, sekaligus memotivasi masyarakat untuk proaktif dalam menjaga fasilitas publik.

## Metodologi & Tech Stack

Kami menggunakan metode pengembangan Agile dengan metodologi Scrum. Dalam metode ini, proses pengembangan aplikasi dipecah menjadi bagian-bagian kecil dengan total 5 sprint, dimana dalam 1 sprint di sini yaitu berdurasi 1 minggu.

Tech stack yang kami gunakan dalam pengembangan aplikasi Jejak:

- **React Native** untuk mengembangkan aplikasi mobile.
- **Bun** dan **Hono.js** sebagai backend yang cepat dan efisien.
- **PostgreSQL** (Supabase) untuk database.

## Penutup

Dengan fitur pindai, pengguna bisa memastikan jalur yang aman, nyaman, dan inklusif. Dengan fitur pelaporan, setiap orang dapat menjadi bagian dari solusi, mengirimkan laporan hanya dalam hitungan detik, dan membantu pemerintah atau komunitas bergerak cepat memperbaiki masalah. Kombinasi teknologi AI, gamifikasi, dan kolaborasi masyarakat menjadikan Jejak bukan sekadar aplikasi, tapi gerakan bersama untuk kota yang lebih ramah pejalan kaki.

Jejak — setiap langkah Anda adalah langkah menuju kota yang aman, inklusif, dan layak huni bagi semua.
