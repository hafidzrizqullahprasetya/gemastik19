# KiddyGoo — Sistem Peringatan Dini Monitoring Cyberbullying

> Transkrip presentasi finalis Gemastik XVIII 2025 — Divisi Pengembangan Perangkat Lunak. Tim Trio Lejen, Universitas Udayana.

---

## Pembukaan

Assalamu'alaikum warahmatullahi wabarakatuh. Nama budaya, salam sejahtera bagi kita semua. Sebelum kami memulai presentasi kami, kami ingin memberikan bela sungkawa terdalam terhadap Almarhum Saudara Timothy Anugrah Saputra. Almarhum adalah mahasiswa FISIP Universitas Udayana Angkatan 2022 yang melakukan aksi bunuh diri. Perundungan yang diberikan kepadanya setelah keluarnya berita berpulangnya saudara adalah hal yang tidak patut untuk dicontoh. Berbagai pihak telah mendesak adanya investigasi yang menyeluruh terhadap korban karena adanya indikasi perundungan sebelum dinyatakan berpulang.

Perundungan adalah racun yang sampai saat ini merusak sistem pendidikan di Indonesia. Kalau kita lihat datanya, dari JPPI, sejak 2020 hingga 2024, trennya terus menaik, terus meningkat. Kasus makin banyak. KPAI data 2022 menyatakan bahwa lebih dari 36% siswa di Indonesia menjadi potensi untuk dilakukannya perundungan. Dan selain itu, kita bisa melihat dari Kementerian Pemberdayaan Perempuan dan Anak bahwa laki-laki lebih dari 40% dan perempuan sebanyak 51% pernah menjadi korban kekerasan dalam hidupnya.

## Solusi: KiddyGoo

Ini menjadi alasan yang sangat kuat yang melatarbelakangi usulan karya kita, yaitu **KiddyGoo**, suatu sistem peringatan dini untuk monitoring cyberbullying pada kalangan anak remaja. Kami dengan bangga dari tim Trio Lejen Universitas Udayana mempersembahkan karya kami kepada para Dewan Juri.

## Fitur Utama

1. **Deteksi Proaktif** — Orang tua dapat memantau sang anak secara real-time. Jika sang anak tersebut ditemukan pola yang mencurigakan, maka orang tua akan mendapatkan notifikasi.
2. **Zona Aman** — Orang tua dapat menentukan zona yang aman menurut mereka. Jika anak berada di luar dari zona aman yang sudah ditentukan, maka orang tua akan mendapatkan notifikasi.
3. **Assistance (Chatbot)** — Orang tua dapat berkomunikasi dengan chatbot yang telah kami kembangkan modelnya. Orang tua dapat mempertanyakan hal apa pun yang akan dijawab oleh chatbot.
4. **Jadwal Aktivitas** — Orang tua dapat membuat jadwal yang akan diberikan kepada anak. Anak akan menerima jadwal yang telah dibuat oleh orang tuanya, yang akan dilihat dari aplikasi mobile mereka.

## Analisis Kompetitor

KiddyGoo memiliki beberapa kompetitor global:

| Fitur | KiddyGoo | Google Family Link | Bark | Qustodio |
|---|---|---|---|---|
| Deteksi Proaktif | AI-based, real-time | Belum ada | Ada, non-realtime | Belum ada |
| Zona Aman | Real-time | Ada, non-realtime | Ada, non-realtime | Ada, non-realtime |
| Jadwal Aktivitas | Ada | Belum ada | Belum ada | Belum ada |
| AI Assistant/Chatbot | Gemini 2.5 Flash | Belum ada | Belum ada | Belum ada |
| Pengingatan Dini | Email & push notification | Belum ada | Belum ada | Belum ada |

## Tech Stack

KiddyGoo dirancang dengan menggunakan arsitektur hybrid monolith dengan microservices:

- **Next.js** sebagai platform full-stack.
- **Supabase** sebagai BaaS (Back-end as a Service) untuk database dan server function.
- **Unitary Toxic BERT** sebagai model fine-tune yang menghasilkan model **ToxicBERT v1** (model KiddyGoo pertama).
- **Vercel** untuk deploy front-end.
- **Flutter** untuk aplikasi mobile.
- **Gemini 2.5 Flash** sebagai AI Assistant Chatbot.
- **Flask** untuk arsitektur REST API pada parent app.

## Roadmap

- **Q3 2025:** Peluncuran dan stabilisasi aplikasi Android, kampanye pemasaran digital awal.
- **Q1 2026:** Pengembangan fitur AI Assistant dan implementasi fitur gamifikasi.
- **Q2 2026:** Pengembangan aplikasi iOS dan peluncuran model berlangganan premium.
- **Q3 2026:** Kampanye konten dan influencer marketing.
- **Q4 2026:** Peluncuran beta aplikasi iOS.
- **Q1 2027:** Pengembangan dashboard website.
- **Q2 2027:** Inisialisasi kerjasama dengan institusi pendidikan tinggi dan mitra pemerintahan.

## Penutup

Kami memiliki visi bahwa perundungan di Indonesia harus dihapuskan. Tidak ada yang bisa menerima adanya perundungan baik di sekolah maupun di perguruan tinggi. Dan kami harapkan bahwa KiddyGoo ini bisa menjadi antidote terhadap racun yang telah merusak sistem pendidikan di Indonesia.

Sekian presentasi dari kami. Wassalamu'alaikum warahmatullahi wabarakatuh. Om Santi Santi Santi Om. Shalom. Nama budaya. Salam kebajikan. Dan terima kasih.
