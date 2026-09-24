# Panduan Penyusunan Laporan Akhir Ber-Highlight Perubahan
## Syarat Resmi Babak Final GEMASTIK XIX 2026, Divisi VIII (Pengembangan Perangkat Lunak)
### Tim Three Achilles, Universitas Gadjah Mada

---

## 1. Ketentuan Resmi Panitia

* **Dasar Aturan:** Babak Final Butir 4 dan 5.
* **Definisi Dokumen:** Laporan akhir merupakan bagian lanjutan atau perbaikan dari proposal babak penyisihan.
* **Ketentuan Penandaan:**
  Bagian yang sudah ada di proposal dapat ditulis kembali di laporan akhir dan wajib diberi penandaan (highlight) pada perubahan atau perbaikan yang dilakukan. Laporan akhir dikumpulkan dalam format PDF.
* **Batas Similaritas Turnitin:** Maksimal 25% (dikumpulkan terpisah sebagai berkas hasil uji similaritas).
* **Format Penamaan Berkas:**
  ```text
  GEMASTIK XIX Perangkat Lunak - 260010011960176 - Three Achilles - Verifin Deteksi Lowongan Kerja Palsu berbasis AI - Laporan Akhir.pdf
  ```

---

## 2. Matriks Bagian yang Diberi Penandaan (Highlight)

Tabel 1 merangkum enam bagian utama yang mengalami penyempurnaan dari proposal babak penyisihan:

### Tabel 1. Pemetaan Bagian Laporan Akhir yang Mengalami Perubahan

| Bab pada Proposal | Sub-Bab / Bagian | Konten Perubahan yang Diberi Highlight | Respon atas Catatan Dewan Juri |
| :--- | :--- | :--- | :--- |
| Bab I: Pendahuluan | 1.3 Dampak dan Urgensi | Formulasi Valuasi Ekonomi Nasional (potensi proteksi Rp20,64 Miliar), rasio Benefit-to-Cost (BCR) 1.259 banding 1, serta data TPPO Kemenlu RI. | Menjawab evaluasi terkait pembuktian dampak kuantitatif dan keberlanjutan ekonomi. |
| Bab II: Tinjauan Pustaka | 2.2 Komparasi Model NLP | Justifikasi ilmiah kelemahan dataset EMSCAD pada modus lokal Indonesia dan strategi transisi model NLP lokal ke IndoBERT-base. | Menjawab catatan juri penyisihan terkait relevansi model bahasa. |
| Bab III: Metode dan Arsitektur | 3.2 Bipartite Fraud Graph | Arsitektur Lapis 3 berupa graf relasi sindikat berbasis NetworkX untuk mendeteksi korelasi daur ulang kontak lintas perusahaan fiktif. | Menjawab evaluasi aspek kebaruan dan diferensiasi terhadap detektor URL tunggal. |
| Bab III: Metode dan Arsitektur | 3.4 Ketahanan Sistem | Penerapan batas waktu probe 3,0 detik, isolasi kegagalan, dan kontrak status terdegradasi UNAVAILABLE untuk mencegah False Negative. | Menjawab evaluasi ketahanan sistem perangkat lunak saat pengujian riil. |
| Bab IV: Hasil dan Pembahasan | 4.2 Hasil Pengujian Empiris | Matriks 146 kasus uji otomatis (kelulusan 100%), cakupan kode modul inti 88,4%, dan hasil blind test pada 100 sampel kasus riil. | Menjawab evaluasi rubrik proses rekayasa perangkat lunak. |
| Bab IV: Hasil dan Pembahasan | 4.3 Controlled Pilot Study | Uji coba empiris pada 20 pengguna dengan 10 skenario: efisiensi waktu 93,5%, lonjakan akurasi deteksi dari 45% ke 95%, dan skor SUS 83,5 (Grade A). | Membuktikan kematangan aspek antarmuka, usability, dan nilai guna nyata. |

---

## 3. Implementasi Penandaan pada Naskah LaTeX

Penerapan penandaan pada naskah LaTeX dapat menggunakan paket `xcolor` dan `soul`:
```latex
\usepackage{xcolor}
\usepackage{soul}
\definecolor{highlightcolor}{RGB}{255, 250, 205}
\sethlcolor{highlightcolor}

% Penggunaan pada teks baru:
\hl{Bagian teks baru yang ditambahkan berdasarkan evaluasi babak final...}
```

Atau menggunakan lingkungan kotak formal (formal callout box) pada awal sub-bab yang disempurnakan:
```latex
\usepackage{tcolorbox}
\newtcolorbox{perbaikanfinal}{
    colback=gray!5!white,
    colframe=black,
    title=\textbf{Penyempurnaan Babak Final (Progres 100\%)},
    fonttitle=\small\sffamily,
    boxrule=0.8pt,
    arc=0mm
}
```

---

## 4. Prosedur Uji Similaritas Turnitin

1. Setelah naskah Laporan Akhir selesai dikompilasi, dokumen diajukan ke uji similaritas Turnitin melalui Dosen Pembimbing atau layanan perpustakaan kampus.
2. Pengaturan filter standar:
   - Exclude Bibliography: Aktif
   - Exclude Quotes: Aktif
   - Exclude Matches: 5 hingga 10 kata
3. Berkas digital receipt dan laporan persentase similaritas diunduh dalam format PDF resmi.
