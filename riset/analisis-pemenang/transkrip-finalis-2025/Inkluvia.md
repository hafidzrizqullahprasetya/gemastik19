# Inkluvia — Platform Edukasi Inklusif untuk Tunanetra

> Transkrip presentasi finalis Gemastik XVIII 2025 — Divisi Pengembangan Perangkat Lunak. Tim Tomodachi, Institut Teknologi Sepuluh Nopember (ITS) Surabaya.

---

## Pembukaan

Assalamu'alaikum warahmatullahi wabarakatuh, dan salam sejahtera untuk kita semua. Bapak Ibu Dewan Juri yang terhormat.

Setiap hari ribuan pelajar tunanetra berhadapan dengan file yang tidak bisa mereka baca. Buku digital, website belajar, semuanya tertutup oleh desain yang tak berpihak pada mereka. Masalahnya sederhana, tapi dampaknya besar. Mereka memiliki kemampuan, tapi sayangnya mereka tak memiliki akses.

Padahal penelitian terbaru WebAIM, organisasi yang berfokus pada aksesibilitas web bagi penyandang tunanetra, ditemukan bahwa sekitar 94,8% homepage memiliki detected Web Content Accessibility Guideline failures. Artinya, lebih dari 90% web di seluruh dunia nyaris tidak aksesibel bagi tunanetra. Hanya sekitar 7 dari 100 kitab yang diterbitkan setiap tahun tersedia dalam format seperti braille, audio, dan large print yang dapat diakses oleh orang dengan disabilitas cetak.

Terlebih lagi, banyak guru yang belum tahu cara untuk menyiapkan materi ramah tunanetra. Hal ini disebabkan karena belum adanya perangkat lunak yang dapat mengubah konten pengajaran seperti matematika kompleks. Artinya, akses ilmu yang ada masih sangat terbatas. Dan ketika dunia berlari menuju AI dan digitalisasi, mereka tertinggal. Bukan karena tak mampu, tapi karena tak diikutsertakan.

## Solusi: Inkluvia

Dan dari sinilah kami memulai. Perkenalkan kami dari tim Tomodachi, Institut Teknologi Sepuluh Nopember Surabaya, mempersembahkan **Inkluvia**, sebuah platform edukasi berbasis web yang dirancang untuk meningkatkan akses pendidikan untuk teman-teman tunanetra.

Melalui kombinasi teknologi dan desain yang inklusif, Inkluvia hadir sebagai solusi nyata untuk menjawab dua tantangan utama, yaitu aksesibilitas platform pembelajaran yang belum sepenuhnya ramah tunanetra, serta konten pembelajaran yang masih sulit dibaca oleh screen reader.

### Accessibility First

Antarmuka Inkluvia dirancang dengan prinsip Accessibility First, artinya setiap tampilan dan interaksi disusun dengan mempertimbangkan kebutuhan pengguna tunanetra sejak tahap awal pengembangan. Kami melakukan kolaborasi langsung bersama SLB-A YPAP Gebang Putih dan Komunitas Kawan Netra melalui sesi co-design dan user testing agar sistem kami benar-benar sesuai dengan pengalaman pengguna.

Hasilnya, navigasi Inkluvia sepenuhnya dapat diakses menggunakan screen reader, yaitu perangkat lunak pembaca layar seperti NVDA dan Narrator yang berfungsi membacakan teks di layar komputer untuk pengguna tunanetra. Selain itu, tampilan visual Inkluvia juga mengikuti standar WCAG, yaitu sebuah pedoman internasional yang memastikan sebuah website mudah dibaca oleh semua pengguna, termasuk mereka dengan disabilitas penglihatan.

### AI Converter

Setelah memastikan antarmuka Inkluvia bisa diakses sepenuhnya oleh pengguna tunanetra, kami kemudian fokus pada satu masalah besar lainnya, yaitu materi pembelajaran yang tidak bisa dibaca oleh screen reader. Perhatikan gambar berikut. Dari gambar tersebut, berapakah nilai pecahannya? Materi ini tampak sederhana bagi kita yang bisa melihat. Tapi bagi pengguna tunanetra, dua lingkaran itu hanyalah gambar tanpa makna karena screen reader seperti NVDA atau Narrator tidak bisa membacanya.

Nah, di sinilah fitur AI Converter kami berperan. Dengan satu klik, sistem ini akan mengubah file PDF menjadi versi yang sepenuhnya bisa dibaca oleh screen reader. Sistem kami akan membaca dan mengekstrak teks dari file PDF menggunakan library Python PyPDF lalu memisahkan antara teks dan gambar. Gambar kemudian diproses menggunakan Gemini AI untuk menghasilkan deskripsi visual otomatis. Selanjutnya, kami juga menggunakan AI untuk membantu membersihkan isi dokumen dari elemen-elemen yang tidak perlu seperti header, footer, atau nomor halaman, serta mengubah simbol matematika menjadi bentuk yang mudah dibaca.

Hasilnya, materi yang sebelumnya tidak bisa diakses, kini dapat dibaca dengan bersih, jelas, dan ramah akses.

### Integrasi Refreshable Braille Display

Dalam pengembangannya, kami menemukan salah satu tantangan terbesar lainnya. Bukan hanya soal akses, tapi soal ejaan yang benar. Karena murid tunanetra lebih sering menggunakan ponsel dan pembaca layar, mereka terbiasa mendengar kata-kata bukan membacanya secara taktil. Akibatnya, banyak dari mereka tidak tahu bagaimana ejaan yang tepat.

Untuk menjawab ini, kami mengembangkan konektivitas dengan refreshable braille display, yaitu perangkat yang menampilkan huruf braille secara dinamis agar mereka bisa merasakan ejaan kata demi kata melalui sentuhan. Kami mengintegrasikan ini dengan website Inkluvia menggunakan protokol MQTT agar responsif dan ringan. Dengan pendekatan ini, kami berharap bisa membantu tunanetra mengakses konten digital sekaligus memahami strukturnya dari ejaan, tata bahasa, hingga maknanya.

## Metodologi Pengembangan

Kami mengembangkan Inkluvia dengan metodologi Agile berfokus pada iterasi cepat dan umpan balik nyata. Melalui sprint planning, kami menyusun backlog berdasarkan kebutuhan pengguna tunanetra. Setiap fitur dikembangkan secara bertahap yang kemudian diujikan langsung bersama pengguna menggunakan screen reader seperti NVDA dan Narrator. Setiap sprint, kami lakukan review dan evaluasi untuk menyempurnakan sistem secara berkelanjutan. Dengan metode ini, Inkluvia bukan hanya dibuat untuk teman-teman tunanetra, tapi dibentuk, diuji, dan disempurnakan bersama mereka.

## Penggunaan Platform

Untuk mengakses Inkluvia, pertama, pengguna dapat membuka halaman utama melalui browser. Di sini tersedia menu registrasi dan login bagi pengguna baru maupun yang sudah terdaftar. Jika belum memiliki akun, pengguna harus membuat akun baru dengan mengisi data diri seperti nama, email, tanggal lahir, dan jenis kelamin pada halaman registrasi. Jika pengguna berasal dari lembaga atau sekolah tertentu, mereka dapat memasukkan kunci lembaga yang dikirim melalui email saat pendaftaran lembaga dilakukan.

Setelah registrasi berhasil, pengguna akan diarahkan ke halaman dashboard utama untuk mulai menjelajahi fitur-fitur yang tersedia.

- **Menu Perpustakaan:** Pengguna dapat menjelajahi berbagai materi pembelajaran yang telah disediakan. Fitur filter pencarian memudahkan pengguna untuk menemukan materi sesuai topik dan kebutuhan belajar.
- **Menu Materi Saya:** Jika materi yang dicari belum tersedia, pengguna bisa menambahkan file PDF. Setelah file diunggah, sistem akan secara otomatis memproses dokumen tersebut melalui AI Converter. Hasil akhirnya adalah versi teks pembelajaran yang bersih, deskriptif, dan mudah diakses.
- **Integrasi Braille Display:** Melalui protokol MQTT, pengguna dapat mengirimkan hasil materi ke perangkat fisik agar dapat diakses dalam bentuk braille secara real-time.
- **Jadwal Belajar:** Pengguna dapat membuat sesi pembelajaran dengan memilih hari, jam, serta materi yang akan digunakan. Dengan fitur ini, kegiatan belajar dapat diatur secara terstruktur dan konsisten.

## Roadmap

Perjalanan kami tidak berhenti di sini. Di tahun 2025 ini kami telah menyelesaikan semua fitur Inkluvia serta melakukan uji coba internal di sekolah dan komunitas tunanetra untuk memastikan bahwa setiap elemen benar-benar dapat digunakan. Selanjutnya, pada tahun 2026, kami menargetkan rilis publik secara nasional dan memperluas konten pembelajaran agar lebih banyak pelajar tunanetra dapat belajar mandiri tanpa batasan teknis. Lalu, pada tahun 2027, harapan kami, Inkluvia telah menjadi bagian dari ekosistem pendidikan inklusif nasional dengan dukungan dari pemerintah dan NGO.

## Penutup

Di dunia yang semakin digital, akses terhadap ilmu bukan lagi soal siapa yang mampu, tapi siapa yang diberi kesempatan. Inkluvia adalah jembatan untuk kesempatan itu. Sebuah sistem yang membuktikan bahwa teknologi bisa berpihak pada kemanusiaan. Kami percaya, ketika pendidikan menjadi inklusif, bangsa ini tidak hanya menjadi lebih pintar, tapi menjadi lebih adil.

Bersama Inkluvia, kami buka akses untuk semua.
