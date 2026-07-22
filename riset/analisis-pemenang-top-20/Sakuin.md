# Sakuin — E-Wallet dengan AI Guardrail Anti-Impulsif

> Transkrip presentasi finalis Gemastik XVIII 2025 — Divisi Pengembangan Perangkat Lunak. Tim dari Bina Nusantara University (BINUS).

---

## Pembukaan

Mari kenalan dengan Denny, mahasiswa perantau yang hidupnya pas-pasan, sementara orangtuanya membanting tulang untuk menanggung biaya kuliahnya. Sayangnya, Denny memiliki kebiasaan belanja secara berlebihan, hingga akhirnya ia terjerat pinjaman online dengan bunga menumpuk. Tagihan datang terus, sementara pendapatannya selalu minim. Beban hutang itu tidak cuma memberatkan Denny. Mulai dari temannya yang pernah ia minta tolong, keluarganya yang khawatir, bahkan ayah dan ibunya yang akhirnya harus mengorbankan tabungan dan aset mereka untuk membantu melunasi hutang-hutang Denny.

Kisah Denny bukan hanya sekadar cerita fiktif semata, melainkan sebuah kejadian yang dialami oleh banyak mahasiswa di luar sana. Hal tersebut dalam dunia medis kita sebut sebagai **compulsive buying disorder** — sebuah kondisi di mana banyak orang seringkali melakukan pembelian secara tanpa sadar karena impuls sesaat. Banyak orang termasuk mahasiswa seringkali melakukan pembelian terhadap barang yang sebenarnya tidak mereka butuhkan. Ditambah dengan kemudahan e-wallet sekarang membuat yang awalnya hanya impuls dengan cepat menjadi transaksi nyata.

Jika dibiarkan, masalah ini tidak hanya akan berdampak pada masa depan individu, tetapi pastinya juga generasi penerus bangsa Indonesia.

## Data Pendukung

Menurut survei Data Insight Asia tahun 2023, 74% masyarakat telah menggunakan e-wallet. Angka ini menunjukkan betapa cepatnya teknologi dompet digital telah meresap ke kehidupan kita sehari-hari. Namun di balik kemudahan ini, ada sesuatu yang lebih menarik: riset tahun 2024 menunjukkan bahwa 58,4% mahasiswa justru lebih konsumtif setelah menggunakan e-wallet.

Kemudahan transaksi, promo, dan cashback kerap kali membuat kita tanpa sadar lebih sering menekan tombol "bayar sekarang".

## Solusi: Sakuin

Oleh karena itu, saya Ryu bersama Jacqueline dan juga Joseph dari Bina Nusantara University menghadirkan **Sakuin**, sistem e-wallet dengan AI yang dirancang bukan hanya untuk memudahkan transaksi, tetapi juga melindungi penggunanya dari perilaku konsumtif. Kami memanfaatkan **Guardrail**, sebuah model AI yang mampu mendeteksi perilaku impulsif dari pelaku finansial secara cepat, tepat, dan juga akurat.

Menggunakan sistem AI Hybrid Edge-Cloud, Guardrail mampu mempelajari suatu pola dari masing-masing pengguna secara personal dan juga bertahap. Dengan begitu, Sakuin bukan hanya membantu untuk mengatur uang, tetapi juga membantu kebiasaan finansial yang lebih sehat dan juga lebih bijak.

## Cara Kerja Sakuin

1. Saat mendaftar, user diminta untuk memasukkan nomor seseorang yang disebut sebagai **kolateral** — misalnya keluarga, pasangan, atau teman.
2. Saat kolateral menyetujui, user dapat memakai Sakuin sebagai aplikasi pusat untuk pembayaran menggunakan saldo dari berbagai dompet digital yang mereka miliki dari kenyamanan satu aplikasi.
3. Saat user bertransaksi, Guardrail akan memantau pola pengeluaran seperti jumlah pembelian dan frekuensi transaksi.
4. Pelan-pelan, Guardrail akan mempelajari kebiasaan belanja user, membedakan transaksi yang wajar dan yang tidak biasa.

### Sistem Peringatan

- Jika Guardrail mendeteksi transaksi di luar pola normal, sistem akan menilai tingkat anomalinya.
- Jika hanya sedikit di atas batas normal, user hanya akan mendapatkan **peringatan**.
- Namun, jika transaksi dianggap berisiko atau sangat mencurigakan, Guardrail akan **menghentikan transaksi** dan mengirimkan kode OTP ke kolateral yang sudah terdaftar.
- Untuk meneruskan transaksi, user harus memasukkan OTP dari kolateral. Dengan ini, ada intervensi manusia sebelum pembayaran dilanjutkan.

Konsep ini berbasis studi psikologi tentang **hot-cold empathy gap**. Dengan memberi *intentional friction* sebelum pembayaran, user diharapkan berpindah dari kondisi emosional *hot* ke *cold* yang lebih rasional, sehingga membantu mencegah pembelian secara impulsif.

## Demo Aplikasi

Dari segi tampilan, user akan masuk ke dalam aplikasi menggunakan akun Google. Saat disambut halaman awal, user dapat melihat saldo mereka, melihat grafik pola pengeluaran yang terintegrasi dengan Guardrail, dan pastinya melakukan pembayaran menggunakan QRIS. Cukup mengarahkan ponsel ke QR Code dan memindai kode, user akan diarahkan ke tampilan untuk memasukkan nominal, melihat info pedagang, dan memilih sumber dana yang digunakan untuk pembayaran.

Ketika Guardrail menganggap transaksi tersebut sebagai anomali, maka akan diberikan sebuah peringatan. User akan mendapat tampilan yang memberikan rincian untuk memastikan pembelian mereka benar-benar dibutuhkan. Jika Guardrail mengklasifikasi pembayaran sebagai anomali tingkat tinggi, maka akan dikirimkan sebuah pesan ke kolateral dalam bentuk OTP. Kolateral kemudian dapat memastikan ke user mengenai pembelian mereka. Jika dikonfirmasi bahwa pembelian dibutuhkan, kolateral akan memberikan kode OTP kepada user, sehingga user dapat memasukkan kode tersebut ke tampilan OTP, dan akhirnya mengkonfirmasi pembayaran.

## Arsitektur Guardrail (Hybrid Edge-Cloud)

Guardrail dibangun hybrid antara cloud dan edge, supaya cerdas, cepat, tapi tetap personal ke setiap pengguna.

### Cloud (Model Global)

Di cloud, ada model global yang besar. Belajar dari jutaan transaksi anonim, dan menjadi guru untuk seluruh ekosistem Guardrail. Model global juga ada campur tangan expert — kalau model global ragu atau salah, para ahli bisa memberi koreksi dan insight.

### Edge (Model Personal)

Di edge, tepatnya di ponsel pengguna, ada model ringan dengan **TensorFlow Lite**. Model inilah yang dipanggil aplikasi saat memproses pembayaran. Tujuannya adalah untuk menilai apakah ada anomali, seberapa parah, dan apakah diperlukan mitigasi.

Yang menarik, model edge ini bersifat **personalisasi**. Jadi bukan hanya mengikuti aturan global, tapi juga belajar kebiasaan transaksi tiap penggunanya. Ilmu dari model global kemudian diteruskan ke model edge lewat teknik seperti **knowledge distillation**, membuat model di ponsel semakin pintar, personal, aman, dan akurat dengan respons secepat bahkan hingga milidetik.

## Potensi Integrasi

Kami mendesain Guardrail bukan sebagai sekadar fitur tambahan, tetapi menjadi perisai digital yang dirancang untuk melindungi masa depan finansial generasi muda Indonesia. Dengan memanfaatkan data transaksi dan pola perilaku, Guardrail bisa diintegrasikan langsung ke berbagai ekosistem pembayaran dan pinjaman yang rentan praktik kredit macet, seperti e-wallet operator dan aplikasi pinjaman online. Integrasi ini memastikan setiap kali user melakukan pembelian atau mengajukan kredit, ada sistem pengaman otomatis yang menilai risiko dan mencegah angka yang bisa berujung pada utang berbunga tinggi atau siklus cicilan yang tak terkontrol.

### Keuntungan bagi Regulator & Platform

Dari sisi regulator dan operator platform, Guardrail menawarkan dua keuntungan besar: perlindungan konsumen yang terukur dan pengurangan risiko kredit macet bagi penyedia layanan. Dengan menjadikan Guardrail sebagai komponen wajib dalam infrastruktur e-payment dan fintech yang sensitif, regulator bisa memastikan bahwa setiap penawaran kredit atau cicilan disertai pengamanan proaktif, bukan sekadar persyaratan koersif.

Lebih jauh lagi, Guardrail dapat dijangkau melalui kerjasama strategis dengan pemerintah, dimana Otoritas Jasa Keuangan (OJK) bertindak sebagai pihak yang menetapkan aturan. Melalui mekanisme sertifikasi dan sandbox, implementasi Guardrail dapat dibuat menjadi sebuah keharusan bagi seluruh e-wallet, layanan paylater, marketplace, dan aplikasi pinjaman online. Ini mencakup sandbox project bersama OJK, standarisasi SDK atau API untuk integrasi cepat, dashboard kepatuhan nasional, serta perlindungan data yang dianonimkan untuk analitik. Dengan OJK sebagai enforcer, Guardrail mendapatkan payung hukum dan kapabilitas pengawasan yang memastikan perlindungan finansial bagi user di seluruh Indonesia berjalan konsisten dan berdampak.
