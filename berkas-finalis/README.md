# Katalog dan Panduan Berkas Finalis GEMASTIK XIX 2026
## Divisi VIII: Pengembangan Perangkat Lunak (PPL)

**Karya:** Verifin: Sistem Pendukung Keputusan Verifikasi Lowongan Kerja Berbasis Bukti OSINT  
**Tim Pengembang:** Three Achilles (Universitas Gadjah Mada)  
**Status Capaian:** Finalis Top 20 Nasional GEMASTIK XIX 2026  

---

## 1. Struktur Dokumen Persiapan Finalis

Direktori `berkas-finalis/` memuat instrumen teknis, naskah ilmiah, panduan operasional panggung, dan evaluasi dewan juri untuk persiapan babak final:

### Tabel 1. Daftar Berkas Finalis dan Peruntukannya

| Berkas Dokumen | Format | Deskripsi dan Cakupan | Peruntukan Dokumen |
| :--- | :---: | :--- | :--- |
| `00-evaluasi-dewan-juri-dan-action-plan-finalis.pdf` | PDF / MD | Rekapitulasi penilaian dewan juri babak penyisihan (skor 32/42) dan rencana aksi komprehensif menjawab seluruh catatan evaluasi. | Konsultasi Dosen Pembimbing dan Evaluasi Tim |
| `06-executive-summary-one-pager.pdf` | PDF / MD | Ringkasan eksekutif 2 halaman memuat intisari masalah, inovasi integratif, tabel komparatif, dan metrik empiris. | Konsultasi Pembimbing dan Handout Dewan Juri |
| `04-draf-makalah-ilmiah-gemastik.pdf` | PDF / TEX | Naskah publikasi ilmiah standar IEEE 2-kolom memuat formulasi matematis, tabel evaluasi 146 kasus uji, dan referensi mutakhir. | Persyaratan Wajib Daftar Ulang dan Uji Turnitin |
| `05-dokumen-pendaftaran-hki-deskripsi-ciptaan.pdf` | PDF / MD | Dokumen resmi deskripsi program komputer untuk pengajuan Hak Cipta ke DJKI Kemenkumham (uraian, inovasi, lisensi, kode sumber). | Persyaratan Hak Cipta Karya Finalis |
| `01-naskah-presentasi-dan-live-demo-10-menit.pdf` | PDF / MD | Naskah presentasi panggung 10 menit terkalibrasi per detik, pembagian peran, dan transkrip interaksi demo. | Panduan Internal Presenter dan Rekaman Video |
| `02-buku-saku-tanya-jawab-juri-defense-matrix.pdf` | PDF / MD | Matriks 12 jawaban taktis menghadapi pertanyaan kritis dewan juri (inovasi vs Safe Browsing, EMSCAD, biaya LLM, UU ITE, PII). | Buku Saku Internal Tim untuk Sesi Tanya Jawab |
| `03-panduan-eksekusi-live-demo-dan-mitigasi-offline.pdf` | PDF / MD | SOP teknis operator demo panggung, konfigurasi resolusi, alur 3 skenario emas, dan protokol darurat jaringan mandiri. | Panduan Teknis Operator Komputer Jinjing Demo |
| `00-katalog-panduan-berkas-finalis.pdf` | PDF / MD | Master index dan daftar periksa kesiapan administrasi serta teknis babak final. | Panduan Internal Tim dan Pembimbing |

---

## 2. Kompilasi dan Regenerasi Dokumen PDF

Seluruh dokumen PDF dikompilasi secara otomatis menggunakan skrip generator `generate-pdfs.js` dengan standar tata letak akademik hitam-putih formal:
* **Makalah Ilmiah (`04`):** Dikompilasi menggunakan mesin `pdflatex` dengan kelas dokumen `IEEEtran`.
* **Dokumen Teknis dan Strategis:** Dikompilasi menggunakan mesin cetak headless Chrome dengan tipografi serif formal, tabel standar booktabs, penomoran halaman otomatis, dan tanpa elemen visual peramban default.

Perintah kompilasi ulang seluruh dokumen:
```bash
bun berkas-finalis/generate-pdfs.js
# atau
node berkas-finalis/generate-pdfs.js
```

---

## 3. Keterkaitan dengan Modul Workspace Lainnya

Seluruh berkas terintegrasi dengan modul-modul lain di repositori:
1. **Slide Presentasi:** Berada pada direktori `video-presentasi/` (dapat dijalankan di peramban via `video-presentasi/index.html` atau dikompilasi via `build.sh`).
2. **Naskah Proposal:** Berada pada direktori `proposal-verifin/` (LaTeX 30 halaman, dokumen resmi penyisihan).
3. **Kode Sumber Aplikasi:** Berada pada direktori `verifin-app/` (Next.js 16/React 19 dan FastAPI backend dengan 51 automated test cases).
4. **Catatan Evaluasi Juri:** Tersimpan pada direktori `kritik-juri/`.
5. **Surat Pernyataan Administrasi:** Tersimpan pada direktori `surat-pernyataan/`.

---

## 4. Daftar Periksa Kesiapan Babak Final

- [x] Evaluasi catatan dewan juri penyisihan dan rencana tindak lanjut telah didokumentasikan secara lengkap.
- [x] Ringkasan eksekutif dua halaman telah diselaraskan dengan metrik dampak terbaru.
- [x] Naskah makalah ilmiah format IEEE telah siap untuk uji similaritas Turnitin.
- [x] Dokumen deskripsi program komputer untuk pengajuan Hak Cipta DJKI telah disusun.
- [x] Frontend telah disempurnakan dengan Fraud Network Graph dan mekanisme fallback demo lokal.
- [x] Backend telah diaudit dengan Circuit Breaker 3,0 detik dan harmonisasi ambang batas 0-39 (Aman), 40-74 (Waspada), 75-100 (Bahaya).
- [x] Seluruh dokumen telah ditata ulang dalam format hitam-putih elegan tanpa elemen hiasan yang tidak esensial.
