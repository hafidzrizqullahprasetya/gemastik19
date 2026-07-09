# Manela (Teman Nelayan) — Prediksi Zona Ikan berbasis Data Spasial

> Transkrip presentasi finalis Gemastik XVIII 2025 — Divisi Pengembangan Perangkat Lunak.

---

## Pembukaan

Tantangannya ketidakpastian, di mana ikan berkumpul hari ini. Apakah cuacanya akan aman? Seringkali perkiraan ini meleset. Hasil tangkapan tidak menentu, sementara risiko kehabisan solar atau terjebak cuaca buruk sangatlah nyata. Kalau di nasibnya bagus, sekali doang. Paling satu tangkapan itu, ya lumayan lah.

Kenalkan, ini Pak Ton. Pak Ton bilang, setiap hari dia pergi melayar hanya bermodalkan insting dan penglihatan dia. Dia cuma melihat ke arah langit, melihat cuacanya bagus atau enggak. Dia juga memprediksikan solar yang dia bawa, jadi gak tahu tuh cukup atau enggak solarnya, atau dia juga gak tahu bakal pulih atau enggak nantinya. Tapi bapak ada kepikiran kalau misalkan punya kapal lebih gede, lebih jauh.

Ternyata kekurangan informasi, kekurangan fasilitas, kekurangan alat-alat yang memadai merupakan hambatan yang paling berpengaruh terhadap penghasilan para nelayan. Ketertidaktersediaan layanan di sana membuat kita kekurangan informasi. Namun dengan sekadar ngobrol tanpa wawancara formal, kita juga bisa dapat informasi yaitu mereka sudah improve atau menggunakan kapal yang cukup besar namun masih tidak ada fasilitas memadai seperti sonar atau GPS. Maka dari itu, mereka masih menggunakan peta untuk mengetahui lokasi mereka, bahkan beberapa menggunakan patokan seperti pulau untuk mengetahui posisinya.

Laut adalah wilayah yang penuh tantangan dan penuh misteri. Namun, apabila kita bisa mengatasi itu semua, kita dapat hasil yang melimpah. Tantangannya adalah apakah kita bisa memanfaatkan data-data yang ada sehingga kita bisa menciptakan sesuatu yang mungkin bisa mengurangi risiko atau memprediksi sesuatu sehingga apa yang kita mau tercapai. Kita juga bisa menjawab misi presiden kita, yaitu Asta Cita, dimana salah satunya adalah mendorong kemandirian bangsa melalui ekonomi biru. Ini bukan tentang sumber daya alam, tapi bagaimana sumber daya manusia yang memanfaatkannya.

## Solusi: Manela (Teman Nelayan)

Teman Nelayan hadir untuk menjawab tantangan tersebut, menggunakan data spasial untuk memberikan prediksi lokasi ikan yang lebih akurat dan mudah dipahami. Aplikasi ini bertujuan membantu nelayan kecil dalam menentukan zona potensial ikan atau ZPI, memperkirakan kebutuhan bahan bakar, dan menganalisis risiko cuaca agar aktivitas melaut menjadi lebih efisien dan aman.

## Cara Kerja Aplikasi

Pada proses awal, splash screen akan melakukan loading. Loading ini berusaha menahan aplikasi untuk lanjut ke page selanjutnya karena ada proses pemasukan data, yaitu data ZPI (Zona Prediksi Ikan) secara global dan data ikan-ikan, di mana data tersebut akan dimasukkan ke lokal database sehingga aplikasi bisa menampilkan data secara offline tanpa menggunakan koneksi internet.

### Pemrosesan Data Oceanografi

Pada proses ini, kita akan membagi laut Indonesia menjadi beberapa ukuran, yaitu grid 25 km x 25 km. Setelah itu, kita mulai dengan mengumpulkan data oceanografi seperti SST (Sea Surface Temperature), chlorophyll-a, dan batimetri. Setelah datanya dikumpulkan, data tersebut akan digabungkan dalam satu program menggunakan Python, di mana program tersebut akan mengimplementasikan data-data yang sudah ada ke dalam rumus yang kita cari dari jurnal-jurnal pendukung. Setelah siap, program akan memberikan respon berupa JSON yang nantinya akan dijadikan suatu pattern di endpoint atau API yang nantinya akan digunakan di aplikasi frontend di aplikasi Flutter.

### Fitur Utama

Pada halaman utama, aplikasi akan menampilkan report cuaca terkini berdasarkan lokasi dan waktu secara real-time. Untuk rekomendasi spot di bawahnya itu sudah offline karena data yang awal kita masukkan di splash screen sudah terintegrasi dengan lokal database kita.

Jika diklik, maka akan muncul detail trip dimana detail trip itu bisa langsung kita bergerak ke sana tanpa harus menambah trip dulu. Pada proses ini kita sudah masuk ke gate utama untuk melihat zona prediksi ikan secara global satu Indonesia. Kalau misalkan kita mau lihat-lihat, kita bisa swipe, drag, pinch, zoom in, zoom out di sini. Jika ZPI diklik, maka akan muncul bottom sheet di mana itu bakal ngasih lihat detail hotspot. Pada tampilan ini, selain detail-detail ZPI, kita bakalan menampilkan potensi jenis tangkapan.

### Estimasi Bahan Bakar Solar

Kita juga ada proses untuk penghitungan bahan bakar solar, di mana rumus ini kita adopsi dari Jurnal Maritim, yang tidak hanya memperhitungkan jarak, kecepatan, dan waktu, tapi ada faktor lainnya. Parameter yang kita ambil:

1. Kekuatan mesin (HP)
2. Kecepatan kapal
3. Beban muatan kapal
4. Pengaruh cuaca dari arah dan kecepatan angin

Hasil dari itu semua adalah estimasi biaya solar yang lebih akurat.

### Saran AI

Pada bagian ini adalah fitur saran AI, dimana kita menggunakan salah satu LLM yang dikembangkan oleh Google (Gemini). Di situ kita memberikan data-data ZPI yang sudah kita punya, nanti bakal dikelola oleh model tersebut dan menghasilkan suatu rumusan yang berguna bagi nelayan, seperti hal-hal apa saja yang perlu disiapkan atau alat pancing apa yang akan digunakan dan cocok untuk menangkap ikan di sana.

### Library Ikan

Pada bagian ini kita memberikan tampilan suatu library ikan, yang berisikan ikan-ikan dengan jenis dan kategori tertentu. Misalkan kategori demersal, kategori pelagis, atau kategori ikan karang. Di situ kita sudah sesuaikan UI-nya. Kita kasih info panjang, berat maksimum, atau makanannya apa. Sehingga informasi ini mungkin bisa membantu para nelayan untuk menangkap ikan.

### Tracking Trip

Pada aplikasi kami, kami sudah menambahkan satu fitur di mana user bisa menambahkan trip perjalanan, lalu ketika dibuka trip perjalanan tersebut, user bisa secara real-time bergerak dan menuju ke tempat tujuannya. Kami mengatur refresh posisi user apabila user telah bergerak sejauh 5 meter. Kita juga sudah menambahkan trigger di app bar-nya dimana ada latitude dan longitude berdasarkan posisi user saat ini, dan pastinya secara offline karena kita sudah menerapkan filter map di mana filter map itu bisa mendeteksi berdasarkan keberadaan device itu saja.

Kekurangan kami di sini adalah aplikasi ini perlu merender map-nya dulu, dimana merender map itu perlunya data, jadi tidak sepenuhnya aplikasi ini offline. Maka dari itu, kita namakan aplikasi ini semi-offline.

## Penutup

Jangan lagi tebak-tebak, ubah intuisi jadi data. Hemat solar, maksimalkan tangkapan.
