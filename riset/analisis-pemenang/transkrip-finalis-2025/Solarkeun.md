# Solarkeun — Kalkulasi Efisiensi Panel Surya berbasis GPS & AI

> Transkrip presentasi finalis Gemastik XVIII 2025 — Divisi Pengembangan Perangkat Lunak.

---

## Pembukaan

Matahari memberi cahaya tanpa henti secara cuma-cuma. Akan tetapi, bagaimana cara kita memanfaatkannya? Salah satu cara adalah dengan menggunakan panel surya. Panel surya adalah alat yang dapat menyerap energi matahari secara efisien dan juga termasuk alat yang low maintenance. Akan tetapi pada pemasangannya, panel surya harus direncanakan secara matang-matang.

Matahari memberi cahaya tanpa henti, tapi manusia belum tahu sepenuhnya cara memanfaatkannya dengan bijak. Ditemukan meningkatnya kebutuhan listrik dan pembangunan yang terus bertambah. Energi yang seharusnya bisa dihemat justru banyak terbuang. Panel surya yang dipasang tanpa perhitungan arah dan sudut sering kali tidak bekerja secara efisien. Energi tak terserap maksimal, listrik yang dihasilkan tak sebanding, dan biaya yang mestinya bisa dihemat justru menumpuk.

## Masalah

Kita berbicara tentang masa depan yang ramah lingkungan, tapi kenyataannya masih banyak bergantung pada energi fosil. Padahal sinar matahari di Indonesia melimpah setiap hari, hanya saja belum dimanfaatkan dengan cara yang tepat. Di sinilah muncul permasalahan: bagaimana menghasilkan energi yang benar-benar hemat dan bersih?

Menurut Kementerian ESDM, rata-rata iradiasi matahari di Indonesia mencapai 4,8 kWh meter persegi per harinya, sebuah angka yang cocok untuk menghasilkan energi yang besar. Maksudnya, dalam setiap meter persegi permukaan bumi di Indonesia, tersimpan cadangan energi yang cukup untuk memenuhi kehidupan dengan cara yang bersih.

Dulu, panel surya hanya bisa dimiliki kalangan tertentu karena harganya tinggi. Kini, situasinya berubah. Menurut International Renewable Energy Agency, pada tahun 2023 biaya listrik dari tenaga surya turun drastis dari sekitar 7.000 per kWh pada 2010 menjadi 700 rupiah per kWh pada tahun 2023. Penelitian juga menunjukkan bahwa setiap kali kapasitas global meningkat 2x lipat, harga panel turun sekitar 20%. Bahkan di Indonesia, biaya instalasi panel surya turun hingga 80% dalam beberapa tahun terakhir.

Namun, di balik langit yang cerah, masih ada hal yang tetap diabaikan. Polusi udara terus membayangi kota-kota besar Indonesia. Menurut data ESDM dan Greenpeace, lebih dari 11 juta warga Jabodetabek menghirup udara tidak sehat hampir sepanjang tahun. Angka ini bukan sekadar statistik, tapi menandakan polusi sangat buruk. Sumber energi fosil masih mendominasi, maka dari itu sudah waktunya dunia untuk menunjukkan transisi bersih.

## Solusi yang Ada

- **PVsyst** — mengurangi pengerjaan manual, memiliki toolset yang banyak, tetapi tidak kompatibel di berbagai perangkat, dan lebih cocok untuk pengguna profesional.
- **ATW Solar App** — menyediakan simulasi dan memberi akses ter langsung ke panel, tetapi membutuhkan perangkat dengan spesifikasi cukup tinggi.

## Solusi: Solarkeun

Solusi yang kami kembangkan adalah **Solarkeun**, aplikasi perancangan kalkulasi efisiensi panel surya pada rumah berdasarkan lokasi GPS, arah hadap, dan tilt, serta integrasi dengan AI.

### Fitur Utama

- Lokasi sekarang
- Pencarian titik
- Penentuan jalur lokasi
- Azimuth dan tilt slider
- Opsi panel
- 3D panel preview
- Status efisiensi
- Detail kalkulasi
- Grafik estimasi
- Rekomendasi AI

## Cara Kerja

Solarkeun mendapat data dari NASA Power yang meliputi direct horizontal irradiance, direct normal irradiance, global horizontal irradiance, solar panel tilt angle, dan lainnya. Sistem memberikan inputan berupa letak lokasi pengguna, mengambil data dari NASA Power, dan melakukan perhitungan berdasarkan data yang sudah ada, lalu dikirim ke AI dan memberi proses generate yang menghasilkan rekomendasi sudut optimal dan akan disimpan di dalam database.

## Testimoni Ahli

Kami menemui dua ahli pemasangan profesional teknis panel surya, yaitu Mas Gatot dan Mas Abdullah. Mas Gatot seorang teknisi Panel Surya dan ahli di bidang IoT. Mas Gatot setelah menggunakan Solarkeun memberikan ulasan:

> "Menariknya dari aplikasi ini adalah tidak perlu ribet menghitung angka pemasangan panel. Pointnya sudah terintegrasi dengan AI."

Mas Abdullah sendiri berkata:

> "Aplikasi berbasis AI ini menarik untuk dipergunakan kalayak ramai, karena bisa memperhitungkan pemasangan dari panel surya, sehingga mempermudah penggunaan dalam mendapatkan panel surya."

## Demo Aplikasi

Pengguna bisa login menggunakan akun Google yang sudah terdaftar. Setelah berhasil login, maka akan diarahkan ke halaman home. Untuk memulai perhitungan, pengguna dapat berinteraksi dengan map yang menunjukkan lokasi pengguna saat ini yang didapat secara otomatis. Pengguna juga bisa mencari lokasi yang diinginkan.

Pengguna juga mendapat nilai roof orientation dan roof tilt secara otomatis sesuai lokasi. Tetapi, pengguna dapat menggeser slider secara manual dan akan menampilkan 3D panel preview. Pengguna dapat memasukkan data pada panel option: ukuran panel (biasanya sekitar 1,7 hingga 3 meter persegi untuk rumah tangga), panel efficiency (sekitar 20-25%), serta fitur cuaca dan kecepatan angin (opsional — jika diaktifkan, sistem akan menghitung berdasarkan cuaca saat ini).

Setelah semuanya terisi, lakukan perhitungan dengan menekan tombol kalkulasi. Sistem akan menampilkan hasil seberapa efisien lokasi pengguna, detail perhitungan, dan grafik estimasi energi selama 6 hari. Untuk mendapat rekomendasi AI, pengguna dapat menekan AI Recommendation. AI akan menganalisis data dan memberikan rekomendasi penyesuaian sudut optimal. Pengguna dapat melihat lokasi pemasangan panel yang efisien melalui Google Earth.

Semua data perhitungan disimpan di dalam database dan bisa diakses melalui Panel History.

## Penutup

Mari kita bangun bangunan yang hijau dan bebas dari polusi dengan menggunakan panel surya dan energi terbarukan sebagai sumber energi yang kita gunakan.
