# Garda — Deteksi Pemalsuan QRIS

> Transkrip presentasi finalis Gemastik XVIII 2025 — Divisi Pengembangan Perangkat Lunak.

---

## Pembukaan: Konteks QRIS

Pada saat ini, transaksi digital di Indonesia semakin sering digunakan karena kemudahan yang ditawarkan. QRIS merupakan media transaksi digital yang paling umum dan banyak digunakan di Indonesia. QRIS atau Quick Response Code Indonesian Standard adalah standar nasional yang bertujuan menyatukan berbagai platform pembayaran digital dalam satu QR Code untuk mempermudah transaksi, meningkatkan inklusi keuangan, dan mempercepat digitalisasi ekonomi.

Ada 2 jenis QRIS, yaitu CPM (Customer Presented Mode) dan MPM (Merchant Presented Mode). QRIS MPM ada 2, yaitu dinamis, dimana QR Code berubah-ubah setiap transaksi, dan statis, dimana QR Code tetap. Jenis QRIS statis inilah yang paling banyak digunakan oleh UMKM dan biasanya akan ditampilkan dalam bentuk printout atau stiker.

## Masalah: Penipuan QRIS

Seiring dengan peningkatan pemakaian QRIS sebagai alat transaksi, muncullah berbagai tantangan keamanan. Ini merupakan salah satu penipuan pada QRIS. Terdapat oknum yang melakukan penggantian QRIS warung menggunakan QRIS yang sudah ia modifikasi.

### Simulasi Kasus

Mari kita lihat apa dampak dari kasus ini.

> "Ya, Lala? Ya, saya mau beli minyak goreng satu, mie goreng dua sama sabun dua. Untuk pembayarannya boleh pakai QRIS kan, Bu? Bisa. Terima kasih ya, Bu."
>
> "Belum masuk, Kak."  
> "Belum masuk?"  
> "Belum. Tapi di sini saja udah dipotong saldunya."  
> "Ini belum masuk, Kak."

Itu dia akibat yang muncul. Pembayaran yang dilakukan oleh pembeli pada akhirnya tidak masuk ke pedagang. Tentu hal ini sangat merugikan, baik dari sisi pembeli maupun pedagang.

### Kasus Lainnya

Selain contoh penipuan ini, ada juga beberapa kasus penipuan lainnya:

1. **Kasus penempelan QRIS palsu pada kotak amal** di beberapa masjid pada tahun 2023.
2. **Kasus karyawan yang mengganti QRIS tiket** dengan QRIS pribadi miliknya.

Hingga saat ini, solusi yang tersedia umumnya masih berfokus pada edukasi kepada masyarakat, baik kepada pelaku usaha maupun konsumen melalui berbagai platform digital.

### Riset Pendahulu

Dilihat dari perkembangan ilmu pengetahuan, ada penelitian yang mengangkat permasalahan ini, yaitu penelitian yang dilakukan oleh Achyar pada tahun 2024. Penelitian ini mengungkap celah keamanan QRIS terkait serangan quizzing, yaitu manipulasi code QR, dan mengusulkan mitigasi melalui verifikasi lokasi dan edukasi keamanan digital, yang terbukti efektif. Namun, pendekatan ini belum mempertimbangkan standar visual QRIS MPM sesuai Buletin ASPI Nomor 3 Tahun 2021. Buletin ASPI ini merupakan standar tampilan QRIS MPM yang bertujuan menciptakan tampilan seragam dan mudah dikenali untuk mendukung konsep "1 QRIS untuk semua".

## Solusi: Garda QRIS

Dengan berlandaskan standarisasi ASPI, dibangunlah aplikasi **Garda QRIS**. Garda QRIS merupakan aplikasi yang dirancang untuk dapat mendeteksi adanya indikasi pemalsuan QRIS Merchant Presented Mode Statis. Garda QRIS hadir dengan 3 lapisan keamanan:

1. **Pengecekan tampilan visual QRIS** yang sesuai dengan standar ASPI, dibantu dengan AI.
2. **Validasi silang** dengan cara mencocokkan antara atribut visual dengan atribut yang ada pada QR Code.
3. **Validasi lokasi** — di mana lokasi transaksi akan dibandingkan dengan lokasi merchant.

## Arsitektur Teknologi

Garda QRIS dibangun dengan menggunakan teknologi terkini yang dapat menunjang performa aplikasi agar dapat berjalan dengan baik.

1. User akan mengirimkan foto QRIS dan diupload pada aplikasi.
2. Gambar akan dikirimkan ke server melalui API.
3. API akan menyimpan gambar ke penyimpanan S3.
4. Setelah itu menuliskan request ke database dan membuat tiket pekerjaan yang akan disimpan pada queue.
5. Di belakang layar, ada worker yang sudah terintegrasi dengan AI. Ia akan mengambil tiket dari queue tersebut lalu memulai proses 3 lapisan validasi.
6. Selama proses ini, user akan terus mendapatkan feedback progress analisis secara real-time.
7. Setelah selesai, hasil analisis akan langsung ditampilkan kepada aplikasi.

## Demo Penggunaan

Jadi, bagaimana Garda QRIS dapat digunakan secara nyata? Untuk memitigasi masalah yang ada di awal video, mari kita saksikan bersama.

> "Reus, lagi belanja apa?"  
> "Lagi beli kebutuhan sehari-hari, biasa."  
> "Gimana nih, Kak, QRIS-nya belum masuk nih?"  
> "Aduh gimana ya, Bu? Ada kenapa nih, Bu?"  
> "Tadi kan saya bayar pakai QRIS. Terus uangnya nggak masuk ke ibunya. Tapi saldunya udah kepotong di sini."  
> "Kalau dilihat dari QRIS-nya sih, bisa aja nih ada indikasi pemalsuan."

> "Kemarin bisa, ada yang belanja bayar pakai QRIS bisa masuk."  
> "Oh gitu ya, Bu? Nah, coba pakai aplikasi ini aja, Bu. Namanya Garda QRIS. Nah ini, Garda QRIS ini aplikasi untuk ngecek nih QRIS-nya ada indikasi pemalsuannya atau enggak gitu."

> "Bisa nih, mulai dulu onboarding, terus bisa bikin akun. Biasanya pake email ya. Nah, ini bisa sekarang tes. Kita coba. Apakah ada penipuannya atau enggak? Oke, lagi processing."

> "Nah, iya nih, Bu. Ini terindikasi pemalsuan. Katanya Terminal ID sama logo-nya itu enggak ada. Terus NMID-nya juga enggak cocok. Gitu."  
> "Hmm. Oh, berarti ada penipuannya ya, Kak?"  
> "Oh, oh. Nah, gimana kalau gini aja deh, kita bayar aja dulu deh pakai cash. Nanti coba dicek lagi dah nih QRIS-nya."  
> "Oke oke, Kak."

> "Wah, Kak, ternyata bagus ya aplikasi Garda QRIS ini. Jadi kita bisa deteksi penipuan ataupun anomali yang ada di QRIS. Bener tuh, jadi transaksi kita aman nih. Garda QRIS ya. Kalau gitu balik duluan ya. Oh ya, untuk uangnya nanti saya transfer aja ya, Kak."
