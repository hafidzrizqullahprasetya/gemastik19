# PrediAI — Deteksi Dini Risiko Diabetes berbasis AI (Citra Kuku & Lidah)

> Transkrip presentasi finalis Gemastik XVIII 2025 — Divisi Pengembangan Perangkat Lunak.

---

## Pembukaan

Kuku kita selalu memberi tanda, hanya saja kita memilih untuk mengabaikannya. Kuku yang berubah warna, lidah yang tampak aneh — hal-hal kecil yang seolah sepele, padahal bisa jadi sinyal bahaya dari dalam diri. Sayangnya, sebagian besar dari kita baru sadar saat semuanya sudah terlambat.

Assalamualaikum warahmatullahi wabarakatuh. Tahukah Dewan Juri, Indonesia tengah menghadapi ancaman senyap bernama diabetes. Bukan hanya menyerang orang tua, kini anak-anak pun ikut terancam. Penyakit ini tumbuh perlahan, tanpa gejala yang jelas, dan seringkali baru disadari saat sudah terlambat.

## Masalah

Berdasarkan data International Diabetes Federation, pada tahun 2021 terdapat 19,4 juta penduduk Indonesia yang hidup dengan diabetes. Jumlah ini diprediksi meningkat menjadi 28,6 juta jiwa pada tahun 2045, menempatkan Indonesia di jajaran negara dengan penderita tertinggi di dunia.

Rendahnya kesadaran deteksi dini, biaya pemeriksaan yang tinggi, serta akses kesehatan yang terbatas di daerah terpencil membuat banyak orang baru mengetahui penyakitnya di tahap komplikasi. Padahal, di era teknologi saat ini, deteksi dini seharusnya bisa dilakukan dengan cara yang mudah, cepat, dan tidak menakutkan sebagai langkah sederhana menyelamatkan masa depan bangsa.

## Solusi: PrediAI

Di sinilah **PrediAI** hadir, asisten cerdas berbasis AI untuk deteksi dini risiko diabetes secara cepat, mudah, dan non-invasif. Dengan menganalisis citra kuku dan lidah, PrediAI membantu mengenali tanda-tanda awal yang sering terabaikan dan memberikan rekomendasi penjagaan yang awal. Solusi ini mendukung SDG Point 3, yaitu kehidupan sehat dan sejahtera, mewujudkan masyarakat yang lebih sadar dan peduli dengan kesehatannya.

## Fitur Utama

1. **Screening Diabetes** — Fitur ini memungkinkan pengguna melakukan deteksi diabetes hanya dengan mengambil foto kuku dan lidah. Sistem akan menganalisis ciri visual yang berkaitan dengan risiko diabetes dan menampilkannya kepada pengguna.
2. **Riwayat Pemeriksaan** — Semua hasil screening tersimpan otomatis dan disajikan dalam grafik perkembangan risiko. Pengguna dapat memantau perubahan kondisi kesehatannya dari waktu ke waktu.
3. **Cari Dokter & Fasilitas Kesehatan Terdekat** — Melalui integrasi Google Maps API, pengguna dapat menemukan fasilitas kesehatan di sekitar lokasi, serta akses langsung ke Alodokter untuk reservasi atau konsultasi.
4. **Asisten Kesehatan AI** — Untuk edukasi interaktif dan analisis hasil laboratorium bagi pengguna yang ingin memahami data medisnya secara terpadu.
5. **Pengingat & Jadwal Mandiri** — Untuk membantu pengguna lebih konsisten menjaga pola hidup sehat.

## Demo Aplikasi

Aplikasi dibuka dengan tampilan friendly, soft, dan intuitive. Dari homepage, pengguna memilih menu Screening Diabetes pada navigation bar. Muncul panduan singkat dengan dua opsi: lanjutkan screening atau ubah kuesioner. Kuesioner ini berisi pertanyaan terkait gejala, riwayat, dan gaya hidup yang dapat diperbarui kapan saja.

Selanjutnya, pengguna mengunggah foto kuku dan lidah, dan AI langsung menganalisis citra tersebut. Hasilnya muncul dalam tiga tab:

- **Overview** — menampilkan tingkat risiko.
- **Detail** — berisi faktor penyebab dan saran gaya hidup.
- **Advice** — menyediakan tombol hubungi dokter melalui Alodokter serta daftar fasilitas kesehatan terdekat.

Setelah itu, dari navbar, pengguna membuka riwayat pemeriksaan untuk melihat grafik perkembangan risiko dari waktu ke waktu. PrediAI menghadirkan pengalaman digital yang cepat, aman, dan menyeluruh dari deteksi awal hingga tindak lanjut, langsung dalam satu genggaman.

## Tech Stack

- **Jetpack Compose** sebagai antarmuka interaktif bagi pengguna.
- **Firebase Cloud Function** menangani logika serverless dan integrasi layanan pihak ketiga.
- **Fast API** menjadi jembatan komunikasi antara aplikasi dan sistem analisis citra.
- **TensorFlow** — model deep learning yang menganalisis foto kuku dan lidah untuk menilai risiko diabetes.
- **Gemini** sebagai LLM untuk memberikan rekomendasi kesehatan adaptif.
- **YouTube API** menyediakan konten edukasi kesehatan.
- **Google Maps API** menampilkan fasilitas kesehatan terdekat secara interaktif.

## Metodologi Pengembangan

1. **Analisis Kebutuhan** — menelaah data dari IDF dan Kementerian Kesehatan untuk memahami urgensi deteksi dini diabetes di Indonesia.
2. **Desain Konseptual** — perancangan tampilan yang sederhana dan mudah dipahami masyarakat, serta menyiapkan arsitektur AI berbasis deep learning untuk analisis citra kuku dan lidah.
3. **Pengembangan Perangkat Lunak** — membangun model CNN untuk deteksi pola risiko diabetes, mengintegrasikannya dengan backend dan aplikasi mobile melalui Firebase dan Fast API.
4. **Pengujian & Debugging** — memastikan semua fitur berjalan optimal.
5. **Deployment** — aplikasi disempurnakan dan siap digunakan masyarakat luas.

## Analisis Pasar (TAM-SAM-SOM)

- **TAM:** Seluruh masyarakat Indonesia yang berisiko atau peduli terhadap diabetes.
- **SAM:** Pengguna aktif aplikasi kesehatan digital di wilayah urban.
- **SOM:** Target awal realistis, yaitu pengguna yang aktif melakukan screening mandiri dan edukasi kesehatan digital.

### Segmentasi

PrediAI menargetkan pria dan wanita usia 25–55 tahun yang memiliki riwayat keluarga diabetes, peduli pada penjagaan dini, dan terbiasa menggunakan aplikasi digital untuk memantau kondisi tubuh serta mencari informasi kesehatan secara mandiri.

### Kompetitor

Berbeda dari aplikasi kesehatan seperti Alodokter, Halodoc, dan Maxim yang berfokus pada telekonsultasi dan manajemen umum, PrediAI unggul dengan screening diabetes non-invasif berbasis foto serta analisis otomatis hasil laboratorium. Kombinasi ini menjadikan PrediAI sebagai solusi end-to-end yang tak hanya membantu berkonsultasi, tapi juga mengenali potensi risiko sejak dini dengan cara yang mudah dan terjangkau.

### Analisis SWOT

- **Kekuatan:** Screening non-invasif berbasis AI dan integrasi fitur yang lengkap dari deteksi hingga edukasi.
- **Tantangan:** Batas kualitas foto dan akurasi model AI yang perlu terus ditingkatkan melalui data lokal.
- **Peluang:** Meningkatnya kesadaran masyarakat dan dukungan pemerintah terhadap digitalisasi kesehatan membuka jalan kolaborasi yang luas.
- **Ancaman:** Kompetisi dengan platform besar, tapi sekaligus motivasi untuk menjadikan PrediAI lebih fokus, akurat, dan relevan.

## Roadmap

- **Tahun 2025:** Perencanaan, pengembangan, dan peluncuran penuh aplikasi dengan seluruh fitur utama.
- **Tahun 2026:** Peningkatan akurasi AI, pengalaman pengguna, dan kolaborasi ekosistem, termasuk kerjasama dengan klinik dan rumah sakit.
- **Tahun 2027:** Ekspansi nasional dan keberlanjutan sistem melalui integrasi data kesehatan publik dan versi PrediAI for Clinic bagi tenaga medis.

## Penutup

Meski saya dan tim bukan seorang penderita diabetes, kami memahami bahwa di balik angka-angka statistik ada kehidupan yang sedang berjuang. Banyak orang yang seringkali tidak menyadari kondisinya hingga terlambat karena deteksi dini masih sulit diakses. PrediAI hadir bukan sekadar aplikasi, tapi sahabat yang membantu menjaga kesehatan melalui teknologi yang cerdas, non-invasif, dan mudah dijangkau.

Setiap orang berhak untuk tahu lebih cepat, agar bisa bertindak lebih tepat. Karena kesehatan bukan sekadar hidup lebih lama, tapi bagaimana membuat hidup lebih bermakna. PrediAI — deteksi dini, melangkah dengan pasti.

Saya Mokhtyab Disyukur bersama saya Aden Nugroho dan saya Zikri Burtadlo. Kami adalah The Mind & Soul Behind PrediAI. Terima kasih. Wassalamualaikum warahmatullahi wabarakatuh.
