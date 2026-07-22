# Netrai — Asisten AI Multimodal untuk Penyandang Tunanetra

> Transkrip presentasi finalis Gemastik XVIII 2025 — Divisi Pengembangan Perangkat Lunak.

---

## Pembukaan

Bayangkan setiap pagi Anda ingin membuat sarapan sederhana, tapi tidak tahu di mana letak piring atau apakah makanan di depan Anda sudah matang atau belum. Bagi penyandang tunanetra, hal-hal kecil seperti ini bukan sekadar tantangan, tetapi perjuangan setiap hari untuk mandiri. Di sinilah kami hadir dengan **Netrai**, asisten AI yang membuka dunia digital dan dunia nyata bagi tunanetra, melalui interaksi suara dan visual secara real-time.

Menurut BPS 2022, ada 8,39 juta penduduk Indonesia atau 3,3 persen dari populasi yang mengalami kesulitan melihat dari tingkat ringan hingga total. Dampaknya sangat besar. Banyak penyandang tunanetra yang belum bisa menjalankan activity of daily living secara mandiri. Jadi, masalah utamanya bukan hanya keterbatasan visual tetapi keterbatasan dalam akses dan kemandirian hidup.

## User Persona

Untuk memahami tantangan nyata, kami mengenal Atar, siswa tunanetra 16 tahun yang aktif menggunakan smartphone. Ia kesulitan bernavigasi di tempat baru, menyiapkan makanan, dan sering harus meminta bantuan orang lain. Namun, ia punya harapan besar: bisa mandiri hanya dengan panduan suara dan deskripsi visual.

Harapan inilah yang mendorong kami meninjau apakah teknologi saat ini benar-benar menjawab kebutuhan mereka. Saat ini sudah ada teknologi bantu seperti screen reader, smart cane, dan aplikasi seperti Be My Eyes. Tapi semuanya punya keterbatasan. Screen reader hanya membaca teks dan aplikasi visual belum real-time maupun kontekstual. Akibatnya, pengalaman pengguna masih terfragmentasi dan belum alami.

Dari semua temuan ini, kami menemukan satu celah besar: belum ada sistem yang benar-benar mampu menghubungkan visual, suara, dan konteks percakapan secara terpadu dan adaptif. AI bisa mengenali objek tapi tidak bisa berdialog, asisten suara bisa menjawab tapi tak memahami konteks visual di sekitar. Celah inilah yang menjadi titik awal lahirnya Netrai.

## Solusi: Netrai

Netrai, asisten AI multimodal yang menghubungkan suara, visual, dan konteks secara real-time. Cara kerjanya sederhana: kamera dan mikrofon menangkap lingkungan sekitar serta perintah pengguna, lalu sistem AI memahami konteks dan memberikan respons berupa suara. Netrai mampu memberikan deskripsi langsung dari kamera, berdialog secara natural, dan bekerja tanpa perangkat tambahan. Hasilnya, penyandang tunanetra dapat menjalankan aktivitas harianya dengan lebih cepat, mandiri, dan percaya diri.

## Fitur Utama

### 1. AI Visual & Voice Assistant

Kami menemukan banyak pengguna kesulitan mengenali objek di sekitar, terutama saat beraktivitas mandiri. Dengan fitur ini, mereka cukup bertanya, "Apa yang ada di depan?" dan Netrai akan menjawab berdasarkan tampilan kamera secara real-time. Fitur ini membantu pengguna memahami lingkungan tanpa harus selalu bergantung pada orang lain.

### 2. Chat Screen (Share Screen)

Selama ini, teknologi asistif hanya bisa membaca teks, bukan gambar atau tangkapan layar. Melalui fitur chat screen, Netrai dapat mendeskripsikan tampilan layar secara real-time. Misalnya, saat pengguna membuka Instagram, sistem menjelaskan isi foto yang terlihat. Dengan ini, aktivitas digital seperti media sosial dan belajar online menjadi lebih inklusif dan bermakna.

### 3. Caregiver

Setelah pengguna dapat berinteraksi dengan lingkungan, kami juga memikirkan hal yang penting lain: rasa aman bagi keluarga. Banyak orang tua khawatir saat anggota keluarganya yang tunanetra beraktivitas sendiri. Untuk itu, kami menghadirkan fitur Caregiver yang memungkinkan keluarga memantau lokasi pengguna secara real-time. Dengan begitu, pengguna tetap mandiri dan keluarga merasa tenang. Karena kemandirian sejati bukan berarti sendiri, tapi berjalan dengan dukungan orang terdekat.

### 4. Browser Automation Extension

Selama ini, pembaca layar hanya bisa membaca teks, tapi sulit menavigasi elemen visual seperti tombol ataupun form. Dengan extension ini, pengguna cukup memberi perintah suara seperti "buka YouTube" atau "scroll ke bawah", dan sistem akan mengeksekusinya secara otomatis. Fitur ini membuka akses internet yang lebih mudah, mandiri, dan inklusif bagi penyandang tunanetra.

## Arsitektur Sistem

Untuk memastikan Netrai berjalan cepat dan real-time, kami merancang sistem dengan arsitektur modular dan scalable:

- **Front-end:** Flutter untuk menghadirkan antarmuka yang responsif dan mudah digunakan di perangkat Android.
- **Back-end:** Firebase menangani autentikasi dan sinkronisasi data, sementara Python API memproses perintah pengguna dan menghubungkannya ke sistem AI.
- **Inti:** LiveKit dan Gemini AI menghadirkan komunikasi multimodal, menggabungkan suara, konteks, dan visual secara bersamaan.

### Alur Kerja

Dari aplikasi berbasis Flutter, pengguna berbicara atau mengarahkan kamera. Data suara dan gambar dikirim langsung ke Gemini melalui LiveKit untuk diproses secara multimodal. Model ini menangani speech-to-text, memahami konteks percakapan, dan mengenali visual secara bersamaan. Hasilnya dikirim sebagai respons suara alami di aplikasi. Semua terjadi dalam hitungan detik, membuat Netrai terasa interaktif, responsif, dan real-time.

## Metodologi Pengembangan

Dalam pengembangan Netrai, kami menggabungkan dua pendekatan: Agile dan prototyping. Pendekatan Agile memungkinkan kami beradaptasi cepat terhadap kebutuhan pengguna yang beragam dengan siklus pengembangan yang terus diperbarui di setiap tahap. Sementara prototyping, kami gunakan untuk membuat versi awal aplikasi dan langsung mengujinya bersama penyandang tunanetra di SLB Yaketunis. Dari masukan mereka, kami melakukan review, update, hingga tes berulang, memastikan setiap iterasi semakin relevan dan mudah diakses. Dengan cara ini, Netrai benar-benar diramu bersama penggunanya, bukan sekadar dibuat untuk mereka.

### Desain

Fokus kami adalah aksesibilitas dan kemudahan interaksi. Kami ingin penyandang tunanetra dapat menggunakan Netrai secara mandiri dengan umpan balik audio yang jelas dan tata letak yang mudah dipahami. Tampilan dibuat berkontras tinggi dan sederhana agar mudah dikenali oleh pengguna low-vision maupun tunanetra total.

## Pengujian & Dampak

Setelah aplikasi dikembangkan, kami melakukan uji coba langsung bersama penyandang tunanetra di SLB Yaketunis. Sebagian besar pengguna merasa terbantu dengan deskripsi visual real-time dan respons suara yang alami, meski masih ada masukan terkait kecepatan respons, intonasi, dan pemahaman konteks percakapan. Masukan tersebut kami tindaklanjuti melalui review dan evaluasi, menjadi dasar untuk mengoptimalkan model AI dan antarmuka pengguna.

Salah satunya Atar, siswa tunanetra yang mengatakan Netrai jauh lebih mudah digunakan dibanding aplikasi lain. Kalau sebelumnya ia harus memotret dulu untuk mendapatkan deskripsi, kini cukup membuka Netrai dan langsung mendapatkan penjelasan real-time.

### Dampak Nyata

1. **Meningkatkan kemandirian** — Pengguna dapat beraktivitas tanpa selalu bergantung pada orang lain.
2. **Memperluas akses informasi** — Dengan deskripsi visual dan pemahaman konteks yang real-time.
3. **Menghadirkan solusi yang inklusif dan terjangkau** — Cukup lewat smartphone yang mereka miliki.
4. **Mendorong partisipasi sosial** — Membuka kesempatan bagi penyandang disabilitas untuk belajar, bekerja, dan berkontribusi secara setara.

## Demo Aplikasi

Pertama, pengguna dapat membuka aplikasi menggunakan perintah suara melalui Google Assistant: "Oke Google, buka aplikasi Netrai." Dengan integrasi ini, penyandang tunanetra tidak perlu mencari icon atau menekan tombol apa pun. Mereka cukup berbicara dan aplikasi ini siap digunakan.

Setelah aplikasi terbuka, pengguna dapat langsung menggunakan fitur AI Assistant. Fitur ini membantu mereka memahami objek dan situasi di sekitar secara real-time, bekerja dengan secara multimodal menggabungkan pengetahuan visual dan pemahaman bahasa alami berbasis LLM.

> "Saya melihat ada tanaman dengan daun lebar berwarna hijau dan kuning serta pot berwarna hitam yang terlihat kosong. Keduanya berada di atas permukaan bertekstur seperti batu bata atau paving block. Apakah ada hal lain yang ingin Anda ketahui tentang benda-benda ini?"

Selanjutnya ada fitur share screen yang membantu pengguna memahami tampilan pada layar ponsel:

> "Saya melihat ada Scottish Fold, British Shorthair, Maine Coon, dan kucing Persia. Apakah ada jenis kucing lain yang ingin saya ketahui?"

Fitur berikutnya adalah fitur Caregiver yang dirancang untuk pendamping atau pengawas. Caregiver dapat memantau posisi pengguna tunanetra dengan aman sehingga aktivitas harian mereka tetap bisa diawasi tanpa membatasi kemandirian.

Dan yang terakhir, fitur Browser Automation Extension yang kami buat agar tunanetra bisa menjelajahi internet hanya dengan suara. Pengguna bisa menjelajahi, mencari informasi, bahkan membuka situs favorit tanpa harus menggunakan keyboard maupun mouse.
