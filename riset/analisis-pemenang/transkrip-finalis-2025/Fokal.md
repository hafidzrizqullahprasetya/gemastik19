# Fokal — Tim Little Vietnam (Universitas Indonesia)

> Transkrip presentasi finalis Gemastik XVIII 2025 — Divisi Pengembangan Perangkat Lunak (Best Paper).

---

## Pembukaan

1, 2, 3! Selamat pagi para juri yang terhormat. Kami dari tim Little Vietnam, Universitas Indonesia, mempersembahkan **Fokal**, aplikasi parental control berbasis AI Vision overlay, untuk menjaga paparan konten pornografi dan porno text pada anak. Dengan saya Amar, serta rekan saya Gari dan Fidel.

Bayangkan, sosok Bu Siti, seorang pedagang kantin dengan dua anak SD. Ia memberikan gadget kepada anak-anaknya agar tetap bisa berkomunikasi, meski sibuk berjualan. Namun, di balik kerja kerasnya, muncul keresahan. Bagaimana jika anak-anaknya terpapar konten berbahaya di internet?

Keresahan ini bukan milik Bu Siti seorang. Tujuh dari sepuluh orang tua yang memiliki anak merasa resah terhadap paparan konten digital yang tidak terkendali. Data Komdigi 2024 menunjukkan lebih dari 5,5 juta anak Indonesia terpapar konten pornografi dalam 4 tahun terakhir. Sementara, Kominfo telah menindak lebih dari 4,5 juta konten negatif sejak 2017. Di sisi lain, penetrasi internet Indonesia kini mencapai 79,5 persen, meningkat dari tahun ke tahun.

Internet memang membuka peluang besar bagi pembelajaran dan inovasi, namun juga memperbesar risiko paparan konten berbahaya bagi anak. Dalam konteks Indonesia Emas 2045, generasi muda adalah kunci penerus bangsa. Maka orang tua menjadi garda terdepan dalam melindungi mereka dari konten pornografi yang merusak karakter sejak dini. Paparan pornografi bukan sekadar isu moral, tapi masalah serius yang berdampak pada mental, perilaku seksual, dan keamanan anak. Penelitian menunjukkan remaja yang terpapar pornografi 2–3 kali lebih berisiko melakukan kekerasan seksual. Dan di Indonesia, 34,9% remaja terpapar melakukan perilaku seksual berisiko. Seperti yang ditegaskan oleh Bu Indri Hapsari, akses dini terhadap konten yang negatif meningkatkan risiko kekerasan seksual di masa depan.

## Solusi: Fokal

Dewan Juri yang terhormat, karena itu saya persembahkan kepada Anda **Fokal**. Fokal adalah aplikasi parental control berbasis overlay AI Vision yang dirancang khusus untuk melindungi anak-anak dan remaja dari paparan konten pornografi. Fokal terdiri dari tiga fitur utama, yaitu AI Vision Overlay, Text Detection, dan Cross Platform.

## Demo Produk

Dewan Juri yang terhormat, sekarang mari kita saksikan video demo produk dari Fokal.

Selamat datang di Fokal, aplikasi yang berfokus kepada prevensi konten pornografi dan porno text dengan tiga fitur utama, yaitu deteksi konten pornografi dan porno text, notifikasi instan kepada akun orang tua, serta activity log untuk menunjukkan kembali aktivitas aplikasi yang sudah dilakukan pada ponsel anak.

Di sini kita akan langsung masuk menggunakan akun demo, yaitu demo@gmail.com. Dapat kita lihat bahwa kita sudah berhasil sign in dan ini merupakan tampilan pertama dari aplikasi Fokal, yaitu Dashboard. Dapat kita lihat bahwa aplikasi Fokal memiliki empat menu: Home, Notification, Devices, dan Account.

Kita akan mulai membahas dari Account terlebih dahulu. Di sini terdapat berbagai macam setting yang bisa dipilih oleh orang tua. Dan kita akan masuk ke dalam Pairing Child Device, ketika orang tua akan mengkoneksikan akun mereka dengan akun anak mereka. Di sini kita menggunakan Pairing Code dan kita akan menggenerate code. Kode ini yang nanti akan dimasukkan ke dalam aplikasi Fokal yang sudah di-install di dalam ponsel anak. Dan ketika kita sudah memasukkan kode ini, akun anak dan akun orang tua akan saling terkoneksi.

Ketika akun anak dan akun orang tua sudah saling terkoneksi, maka akan muncul di list devices yang ada di sini. Sebagai contoh, kita bisa lihat untuk salah satu contoh anaknya. Di sini kita bisa ekspor berbagai aktivitas yang sudah dilakukan di ponsel anak, seperti aktivitas terbaru, live report, serta ringkasan mingguan.

Selanjutnya, pada Notification. Notification berfungsi sebagai alerts ketika ada jenis pelanggaran konten pornografi maupun porno text yang sudah dilakukan pada list devices yang ada di koneksi orang tua. Sebagai contoh, kita akan lihat misal di sini. Pornografi detected, jenisnya adalah Implicit. Di sini ada detail: pada device siapa, ada security label-nya, ada detection time-nya, dan ada confidence score dari AI kita untuk menyatakan seberapa yakin AI kita terhadap deteksi yang saat ini. Di sini kita menyimpan tangkapan layar sebagai bukti, kemudian kita bisa close lagi. Atau bisa kita lihat di sini, ada berbagai macam jenis notifikasi di sini yang bisa kita ekspor.

Kemudian kita akan kembali ke Home. Di Home disajikan summary dari seluruh list device yang sudah terkoneksi dari akun orang tua, seperti jenis-jenis pelanggaran, safe activity, screen time, serta banyak device yang terhubung. Di sini disajikan juga sebagian yang tadi sudah disajikan di notifikasi. Ini recent alerts. Kurang lebih sekian untuk demo kali ini. Terima kasih.

## Alur Kerja Sistem Deteksi

Dewan Juri yang terhormat, tadi kita sudah saksikan sendiri bagaimana video demo produk dari Fokal. Kemudian kita akan berbicara tentang alur kerja dari sistem deteksi pornografi. Di sini terdapat 5 tahap:

1. **Pengguna normal** — anak menggunakan perangkat seperti biasanya.
2. **Paparan konten yang tidak pantas** — anak mengakses konten yang tidak sesuai.
3. **Perekaman otomatis** — sistem secara otomatis menangkap tampilan layar.
4. **Deteksi konten** — sistem melakukan deteksi terhadap konten pornografi.
5. **Peringatan dikirim** — sistem mengirimkan notifikasi kepada pihak terkait, yang mana di sini adalah orang tua.

Kemudian pada gambar ini disajikan hasil inference AI Vision dari AI model yang kami miliki. Kemudian di sini adalah menu aplikasinya. Yang pertama ini adalah landing page, kemudian ada notifications, ada alert saat terjadi pornografi. Kemudian di sini pair child device dan ini merupakan family.

## Arsitektur Sistem

Berbicara tentang arsitektur sistem, sebuah mobile app yang berdiri di atas Flutter dan Fokal memiliki screen capture engine yang sudah diatur intervalnya sehingga akan menangkap tampilan layar sesuai dengan interval waktu tertentu. Hasil dari tangkapan layar tersebut kemudian dikirimkan kepada server untuk diproses dan dibagi ke dalam dua tugas:

- **Tugas pertama: deteksi pornografi** — dilakukan oleh model Ultralytics YOLO versi 8. Apabila terbukti melakukan pelanggaran konten pornografi, gambar akan disimpan ke dalam database, kemudian akan dilakukan push notifikasi kepada orang tua sebagai peringatan.
- **Tugas kedua: deteksi porno text** — apabila terbukti melakukan pelanggaran porno text, akan disimpan ke dalam database kemudian dipush notifikasi ke orang tua.

## Penutup

Dampak sosial per tahun, serta kontribusi langsung pada RPJPN dan tujuan Sustainable Development Goals, khususnya pada perlindungan anak dan perlindungan berkualitas. Kami percaya untuk mewujudkan Indonesia Emas 2045, generasi mudanya harus tumbuh cerdas, beretika, dan terlindungi dari dampak gelap pornografi sejak dini.

Terlindungi anak hari ini, jaga masyarakat bangsa esok hari. Kami tim Little Vietnam, pembawa Fokal, AI Vision for a Safer Digital Generation. Terima kasih.
