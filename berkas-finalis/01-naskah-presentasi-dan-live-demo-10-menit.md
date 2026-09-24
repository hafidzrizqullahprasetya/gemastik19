# Naskah Resmi Presentasi Panggung dan Panduan Live Demo (10 Menit)
## Babak Final GEMASTIK XIX 2026, Divisi VIII (Pengembangan Perangkat Lunak)

**Karya:** Verifin: Sistem Pendukung Keputusan Verifikasi Lowongan Kerja Berbasis Bukti OSINT  
**Tim:** Three Achilles (Universitas Gadjah Mada)  
**Anggota Tim:**  
1. **Akmal Manggala Putra** (24/536182/SV/24402), Presenter 1: Latar Belakang Masalah, Urgensi TPPO, dan Solusi Antarmuka.  
2. **Matthew Hayunaji Priantara** (24/536179/SV/24400), Presenter 2: Arsitektur Pipeline 4 Lapis, Live Demo 3 Kasus, dan Explainable AI.  
3. **Hafidz Rizqullah Prasetya** (24/535493/SV/24243), Presenter 3 dan Ketua Tim: Graf Sindikat, Validasi Dampak Empiris, dan Keberlanjutan.  
**Dosen Pembimbing:** Dr.Eng. Ir. Ganjar Alfian, S.T., M.Eng. (NIP. 11198701202201101)  

---

## 1. Struktur Alokasi Waktu (Total 10 Menit)

### Tabel 1. Pembagian Waktu Presentasi Babak Final

| Segmen | Menit | Durasi | Pembicara | Fokus Bahasan |
| :--- | :---: | :---: | :--- | :--- |
| Bagian I: Latar Belakang dan Urgensi | 00:00 - 02:00 | 120 dtk | Akmal Manggala Putra | Data pengangguran BPS, kerugian penipuan Rp49T GASA, TPPO Kemenlu, asimetri informasi, dan posisi sistem sebagai Decision Support System pra-lamaran. |
| Bagian II: Arsitektur Rekayasa Sistem | 02:00 - 03:30 | 90 dtk | Matthew Hayunaji Priantara | Empat lapis analisis: Multimodal Ingestion, Hybrid NER dan PII Sanitizer, Automated OSINT Engine, Bipartite Fraud Graph, dan Additive XAI. |
| Bagian III: Demonstrasi Sistem (Live Demo) | 03:30 - 07:00 | 210 dtk | Matthew (Operator) dan Akmal (Narator) | Tiga kasus uji: (1) Kasus Resmi BCA (Aman: 12), (2) Kasus Anomali VinFast (Waspada: 48), (3) Kasus Sindikat BUMN Travel Scam (Bahaya: 92) dan eksplorasi graf sindikat. |
| Bagian IV: Pengujian dan Dampak Empiris | 07:00 - 08:45 | 105 dtk | Hafidz Rizqullah Prasetya | Metodologi NLP lokal vs EMSCAD, 146 test cases (kelulusan 100%), pilot study 20 pengguna (SUS 83,5, efisiensi 93,5%), dan valuasi BCR 1.259:1. |
| Bagian V: Keberlanjutan dan Penutup | 08:45 - 10:00 | 75 dtk | Hafidz dan Seluruh Tim | Integrasi pusat karier universitas, efisiensi biaya komputasi, kepatuhan etika data, dan penutup tim. |

---

## 2. Transkrip Naskah Lengkap dan Panduan Panggung

### BAGIAN I: LATAR BELAKANG, URGENSI, DAN POSISI SISTEM (00:00 - 02:00)
**Pembicara:** Akmal Manggala Putra  
**Sikap Panggung:** Tegap, intonasi lugas, empati tinggi terhadap isu sosial.

> **[00:00 - 00:30] Slide 1: Identitas Tim dan Judul Karya**  
> "Selamat pagi/siang Yang Terhormat Dewan Juri GEMASTIK XIX 2026. Kami dari Tim Three Achilles, Universitas Gadjah Mada, mempersembahkan Verifin: Decision Support System untuk Verifikasi Lowongan Kerja Berbasis Bukti OSINT dan Explainable Artificial Intelligence."

> **[00:30 - 01:15] Slide 2: Data Urgensi Nasional dan TPPO**  
> "Berdasarkan data BPS Februari 2025, terdapat 7,28 juta pengangguran terbuka di Indonesia yang aktif mencari nafkah. Di sisi lain, riset GASA dan Mastercard 2024 mencatat bahwa 49% korban penipuan digital di Indonesia terpapar iklan lowongan kerja palsu, dari akumulasi kerugian nasional mencapai Rp49 Triliun.  
> Dampak yang lebih berat tercatat pada laporan Kementerian Luar Negeri RI, di mana lebih dari 3.300 WNI diselamatkan dari sindikat penipuan daring dan kerja paksa di kawasan Asia Tenggara, yang sebagian besar diawali oleh tawaran lowongan kerja informal di media sosial."

> **[01:15 - 02:00] Slide 3 dan 4: Kesenjangan Informasi dan Solusi Verifin**  
> "Akar dari permasalahan ini adalah asimetri informasi antara pencari kerja awam dengan sindikat penipu. Solusi penegakan hukum umumnya bersifat reaktif pasca-kejadian.  
> Verifin hadir memutus mata rantai tersebut pada tahap pra-lamaran. Mengusung prinsip 'Tahu Sebelum Kamu Melamar', sistem ini melakukan audit forensik digital terbuka sebelum pelamar menyerahkan dokumen identitas pribadi atau mentransfer dana."

---

### BAGIAN II: ARSITEKTUR REKAYASA PERANGKAT LUNAK (02:00 - 03:30)
**Pembicara:** Matthew Hayunaji Priantara  
**Sikap Panggung:** Menunjukkan ketajaman teknis arsitektur software.

> **[02:00 - 02:40] Slide 5: Pipeline Analisis 4 Lapis**  
> "Untuk menjawab modus penipuan modern, Verifin menerapkan arsitektur empat lapis terintegrasi:  
> 1. Lapis 1 (Multimodal Ingestion dan NER): Menerima masukan teks percakapan, berkas poster gambar melalui PaddleOCR dan OpenCV CLAHE, serta tautan web. Entitas kunci diekstraksi melalui regex terkalibrasi dan gateway penyamaran data pribadi (PII Sanitizer) yang aktif memotong NIK dan rekening pelamar.  
> 2. Lapis 2 (Automated Multi-Source OSINT Engine): Menjalankan probe non-blocking secara asinkron untuk mengaudit usia domain WHOIS/RDAP, verifikasi rekaman DNS mail server (SPF/DKIM/DMARC), reputasi kontak, dan validasi geospasial OpenStreetMap."

> **[02:40 - 03:30] Slide 6: Graf Sindikat dan Additive Explainable AI**  
> "Keunggulan pembeda Verifin terletak pada Lapis 3 dan Lapis 4:  
> 3. Lapis 3 (Bipartite Fraud Network Graph): Memanfaatkan pemodelan graf heterogen NetworkX untuk mendeteksi sindikat yang mendaur ulang nomor kontak, surel, atau rekening yang sama pada berbagai entitas perusahaan fiktif.  
> 4. Lapis 4 (Additive Explainable AI): Skor risiko dihitung secara aditif dalam rentang terkalibrasi 0 hingga 100, yang dipetakan ke dalam tiga kategori: 0-39 Aman, 40-74 Waspada, dan 75-100 Bahaya.  
> Kami menerapkan prinsip rekayasa bahwa ketiadaan bukti bukan bukti keabsahan (absence of evidence is not evidence of absence). Jika layanan eksternal mengalami kendala, sistem menurunkannya ke status UNAVAILABLE dengan bobot nol tanpa menurunkan skor risiko teks."

---

### BAGIAN III: DEMONSTRASI SISTEM LANGSUNG (03:30 - 07:00)
**Operator Demo:** Matthew Hayunaji Priantara  
**Narator Alur Demo:** Akmal Manggala Putra dan Matthew Hayunaji Priantara  
**Sikap Panggung:** Sinkron dan fokus pada interaksi antarmuka proyektor.

> **[03:30 - 04:30] Kasus 1: Lowongan Resmi PT Bank Central Asia Tbk (Kanal URL)**  
> *(Matthew memasukkan tautan resmi karier BCA dan menekan tombol verifikasi)*  
> **Matthew:** "Pengujian pertama membuktikan keandalan sistem pada kasus resmi PT Bank Central Asia Tbk. Sistem memproses tahapan analisis secara terstruktur."  
> *(Hasil tampil: Skor Risiko 12 dari 100, Kategori: AMAN)*  
> **Akmal:** "Sistem memberikan skor 12 dengan kategori AMAN. Bukti OSINT mengonfirmasi domain telah aktif lebih dari 20 tahun, sertifikat SSL valid, alamat kantor pusat terverifikasi di peta geospasial, dan konfigurasi surat elektronik mematuhi protokol SPF/DMARC.  
> Di bawah skor, terdapat catatan edukasi hukum yang menegaskan bahwa hasil ini merupakan indikator rekaman digital terbuka dan pelamar tetap dianjurkan bertindak cermat."

> **[04:30 - 05:45] Kasus 2: Anomali Kontak Informal VinFast Yogyakarta (Kanal Poster OCR)**  
> *(Matthew mengunggah berkas poster lowongan VinFast Jogja)*  
> **Matthew:** "Pengujian kedua menggunakan kanal poster gambar. PaddleOCR mengekstraksi teks pada gambar dan menormalkan karakter hasil pemindaian."  
> *(Hasil tampil: Skor Risiko 48 dari 100, Kategori: WASPADA)*  
> **Matthew:** "Hasil analisis menghasilkan skor 48 dengan kategori WASPADA. Panel XAI memaparkan bahwa meskipun entitas merek VinFast merupakan perusahaan nyata, kontak pendaftaran menggunakan surel publik gratisan dan nomor WhatsApp pribadi, serta mengarahkan pelamar ke formulir daring terbuka. Verifin menyarankan pengguna mengonfirmasi langsung ke kantor cabang resmi sebelum mengirim berkas lamaran."

> **[05:45 - 07:00] Kasus 3: Sindikat Scam BUMN Travel dan Eksplorasi Graf Sindikat**  
> *(Matthew memasukkan teks surat panggilan palsu bermodus tiket travel)*  
> **Matthew:** "Kasus ketiga menguji modus berbahaya: surat panggilan seleksi palsu mencatut BUMN yang mewajibkan transfer tiket perjalanan ke biro travel tertentu."  
> *(Hasil tampil: Skor Risiko 92 dari 100, Kategori: BAHAYA)*  
> **Matthew:** "Sistem mendeteksi skor risiko 92 dengan kategori BAHAYA. Panel XAI merinci bobot: +35 poin untuk klausul pemesanan tiket travel, +25 poin untuk instruksi transfer ke rekening pribadi, dan +20 poin untuk batas waktu intimidatif.  
> Selanjutnya, kita buka panel Fraud Network Graph..."  
> *(Matthew mengklik simpul kontak telepon pada graf)*  
> **Matthew:** "Graf radial interaktif ini memperlihatkan bahwa nomor narahubung yang sama telah tercatat pada lima laporan berbeda yang mencatut tiga BUMN yang berlainan. Korelasi lintas laporan ini merupakan keunggulan investigasi graf Verifin yang melampaui kemampuan deteksi teks biasa."

---

### BAGIAN IV: EVALUASI PENGUJIAN DAN DAMPAK EMPIRIS (07:00 - 08:45)
**Pembicara:** Hafidz Rizqullah Prasetya (Ketua Tim)  
**Sikap Panggung:** Ilmiah, berbasis data empiris, meyakinkan secara metodologis.

> **[07:00 - 07:45] Slide 9 dan 10: Metodologi NLP Lokal vs EMSCAD**  
> "Menjawab catatan kritis dewan juri terkait ketergantungan pada dataset luar negeri:  
> Kami mengkaji bahwa dataset EMSCAD (Vidros et al., 2017) berbasis bahasa Inggris formal dari portal Workable mengalami kesenjangan domain yang signifikan di Indonesia, di mana penipuan banyak terjadi di kanal percakapan informal dengan modus lokal khas seperti tiket travel fiktif.  
> Merujuk riset IndoNLU (Wilie et al., 2020), korpus berlabel penipuan kerja lokal di Indonesia masih sangat terbatas. Oleh karena itu, Verifin menerapkan strategi dua fase:  
> - Fase 1 (Sistem Berjalan): Mesin hibrida aturan regex lokal dipadukan dengan LLM evidence-constrained reasoning bersuhu nol yang dibatasi bukti OSINT.  
> - Fase 2 (Data Flywheel): Modul laporan komunitas Verifin menghimpun korpus teranotasi perdana yang disiapkan untuk proses fine-tuning model fondasi IndoBERT-base guna inferensi lokal berlatensi rendah."

> **[07:45 - 08:45] Slide 10 dan 11: Pengujian Software dan Valuasi Dampak Ekonomi**  
> "Kualitas teknis sistem dibuktikan melalui serangkaian pengujian:  
> - 146 test cases otomatis dengan kelulusan 100%, didukung rata-rata cakupan kode (code coverage) modul inti sebesar 88,4%.  
> - Sistem teruji tangguh terhadap serangan SSRF, manipulasi prompt, dan kebocoran data identitas pribadi.  
> 
> Dari sisi validasi pengguna, kami telah melaksanakan Controlled Pilot Study pada 20 pencari kerja:  
> - Efisiensi waktu pemeriksaan meningkat 93,5% (dari 18,4 menit secara manual menjadi 1,2 menit dengan Verifin).  
> - Akurasi deteksi bahaya meningkat dari 45,0% menjadi 95,0% (p < 0,001).  
> - Skor System Usability Scale (SUS) mencapai 83,5 (kategori Grade A / Excellent).  
> 
> Berdasarkan formulasi estimasi ekonomi pada skenario moderat, Verifin berpotensi memproteksi kerugian masyarakat sebesar Rp20,64 Miliar dengan rasio manfaat-biaya (Benefit-to-Cost Ratio) sebesar 1.259 berbanding 1."

---

### BAGIAN V: KEBERLANJUTAN, ROADMAP, DAN PENUTUP (08:45 - 10:00)
**Pembicara:** Hafidz Rizqullah Prasetya dan Seluruh Anggota Tim  
**Sikap Panggung:** Kompak dan lugas.

> **[08:45 - 09:30] Slide 12: Keberlanjutan Arsitektur dan Hilirisasi**  
> "Mengenai keberlanjutan sistem:  
> 1. Efisiensi Biaya: Arsitektur asinkron dan verifikasi bertingkat menyelesaikan 70% kueri pada tier cache dan regex, memangkas biaya komputasi hingga Rp300 per verifikasi.  
> 2. Kepatuhan Hukum: Verifin menyajikan indikator anomali OSINT objektif dan bukan tuduhan pidana subjektif, sehingga menjaga kepatuhan regulasi.  
> 3. Rencana Penerapan: Kami menjajaki integrasi layanan bersama UGM Career Center untuk melindungi lulusan baru, serta penyelarasan rujukan bersama instansi terkait."

> **[09:30 - 10:00] Kalimat Penutup Tim**  
> **Hafidz:** "Verifin hadir membuktikan bahwa rekayasa perangkat lunak dan kecerdasan buatan dapat diterapkan secara nyata untuk melindungi masyarakat pencari kerja di Indonesia."  
> **Akmal:** "Sebelum data pribadi diserahkan, sebelum kerugian terjadi..."  
> **Seluruh Tim:** "Tahu Sebelum Kamu Melamar. Kami Tim Three Achilles, Universitas Gadjah Mada. Terima kasih."

---

## 3. Catatan Teknis Presentasi

1. **Pengaturan Tampilan Layar:** Peramban disetel pada mode layar penuh (F11) dengan zoom 100%. Data riwayat demo lokal telah disiapkan sebagai mitigasi gangguan koneksi.
2. **Pengendalian Waktu:** Presenter memantau alokasi waktu secara mandiri, dengan tanda pengingat dua menit terakhir pada menit ke-08:00.
