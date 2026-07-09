# Rekomendasi Riset Dosen TRPL SV UGM untuk Proyek Gemastik PPL 2026

Dokumen ini memetakan penelitian dari dosen program studi **Teknologi Rekayasa Perangkat Lunak (TRPL) Sekolah Vokasi UGM** yang berpotensi besar untuk dikolaborasikan dan dikemas menjadi produk juara di Divisi PPL Gemastik 2026.

---

## 1. Golden Ticket Dosen Internal: Muhammad Fakhrurrifqi, S.Kom., M.Cs.
Sebagai mahasiswa TRPL SV UGM, Anda memiliki akses langsung ke dosen internal prodi Anda sendiri yang memiliki riset kesehatan AI terkemuka: **Muhammad Fakhrurrifqi, S.Kom., M.Cs.**

*   **Nama Riset:** **Denteksi** (Platform Skrining Kesehatan Gigi berbasis AI).
*   **Deskripsi Riset:** Platform teledentistry yang memungkinkan pengguna melakukan deteksi dini kesehatan gigi (seperti mendeteksi gigi sehat, berlubang/karies, atau gigi tanggal) secara mandiri hanya dengan mengunggah foto citra mulut/gigi dari kamera ponsel.
*   **Metodologi & Akurasi:** Menggunakan algoritma *Computer Vision* (Deep Learning/CNN) dengan tingkat akurasi mencapai **90% untuk deteksi gigi sehat** dan **di atas 80% untuk karies gigi**.
*   **Kolaborasi Lanjutan:** Riset ini juga melibatkan pembuatan **Odontogram digital** (pemetaan gigi standar medis) otomatis berdasarkan hasil foto AI.

---

## 2. Penerapan Sistem CCA + Step 0 untuk Pengembangan "Denteksi" di Gemastik 2026

Jika Anda berkolaborasi dengan Mr. Fakhrurrifqi untuk membawa proyek ini ke Gemastik 2026, berikut adalah pembingkaian (*framing*) masalah menggunakan kerangka **Advanced Problem Solver**:

### A. STEP 0: Challenge the Goal (Dekonstruksi Tujuan)
*   **Tujuan Tradisional:** Membuat aplikasi chat teledentistry agar pasien bisa berkonsultasi secara online dengan dokter gigi.
*   **Dekonstruksi (Challenge):** Jumlah dokter gigi di puskesmas/daerah terpencil sangat terbatas, dan mereka tidak memiliki waktu untuk membalas chat ratusan pasien satu per satu. Konsultasi manual tidak bisa diskalakan (*not scalable*).
*   **Tujuan Akhir Sebenarnya (End-Game):** Mendemokratisasikan skrining gigi primer secara mandiri di rumah secara instan tanpa perlu kehadiran dokter gigi fisik, serta mengotomatisasi pembuatan rekam medis digital (Odontogram) untuk memotong waktu antrean di Puskesmas.
*   **Solusi Radikal:** Pasien cukup memotret gigi mereka. Sistem AI langsung memetakan kondisi gigi ke dalam **Odontogram Digital secara otomatis**, mendeteksi lubang (karies), memberikan skor kesehatan mulut, dan hanya merujuk ke dokter gigi jika kondisi diklasifikasikan sebagai "Tindakan Medis Mendesak".

### B. CERDAS (First-Principles Thinking)
*   *Variabel Input:* Foto citra intraoral (gigi bagian dalam) dari kamera ponsel biasa.
*   *Pemrosesan Citra:* Model deteksi objek (*Object Detection*) mengenali nomor gigi (berdasarkan standar internasional FDI World Dental Federation) dan mengklasifikasikan kondisi setiap gigi.
*   *Logika Bisnis:* Output klasifikasi langsung diterjemahkan menjadi pemetaan grafis Odontogram interaktif (misal: Gigi 36 terdeteksi karies media $\rightarrow$ diwarnai merah di odontogram digital).

### C. CERAH (Peta Realitas Taktis)
*   *Aksi Lapangan (PPL Scope):* 
    *   Kembangkan aplikasi mobile berbasis Flutter/React Native yang memiliki fitur pemandu kamera pintar (memastikan sudut foto gigi fokus dan terang).
    *   Integrasikan model deteksi gigi (bisa berjalan secara lokal menggunakan TensorFlow Lite di perangkat mobile untuk menjamin kecepatan akses).
    *   Buat dasbor administrasi untuk Puskesmas/Dinkes guna melihat agregasi kesehatan gigi anak-anak sekolah di wilayah tersebut.

### D. ASIK (Integritas & User-Centric)
*   **Edukasi Interaktif:** Mengubah pemeriksaan gigi yang menakutkan bagi anak-anak menjadi aktivitas interaktif (seperti yang telah diujicobakan tim Denteksi di sekolah mitra).
*   **Privasi Data:** Rekam medis odontogram pasien dilindungi dengan enkripsi standar industri kesehatan.

---

## 3. Langkah Aksi yang Harus Anda Lakukan:

1.  **Hubungi Mr. Fakhrurrifqi:** Jadwalkan pertemuan pendek/konsultasi dengan beliau. Katakan bahwa sebagai mahasiswa TRPL, Anda berdua ingin berkolaborasi membawa riset **Denteksi** ke Gemastik PPL 2026.
2.  **Tawarkan Nilai Tambah (Value Proposition):** Sampaikan bahwa Anda akan fokus mengembangkan **arsitektur perangkat lunak yang scalable**, integrasi mobile app yang ramah pengguna, sistem odontogram interaktif, dan visualisasi dasbor puskesmas (sehingga dosen tidak perlu pusing memikirkan pengembangan software-nya dari awal).
3.  **Persiapkan Draf Proposal:** Jika beliau setuju, kita bisa mulai menyusun draf proposal teknis PPL di workspace ini.
