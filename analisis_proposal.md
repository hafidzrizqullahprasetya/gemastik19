# Analisis Proposal Verifin - GEMASTIK XIX 2026

Dokumen ini berisi analisis mendalam terhadap file proposal `Proposal_Verifin.tex` yang mencakup analisis bahasa/ejaan, validasi sumber referensi, analisis ambiguitas & inkonsistensi internal, serta penilaian kelayakan untuk kompetisi tingkat nasional.

---

## 1. Analisis Penggunaan Bahasa & Ejaan

### A. Hal yang Sudah Baik
* **Konsistensi Istilah Inti:** Penggunaan istilah "Skor Risiko" sudah konsisten di seluruh bagian proposal teks. Istilah SQL/database `trust_score` tetap dibiarkan pada bagian skema karena merupakan ranah kode pemrograman, sehingga pemisahan ini logis.
* **Penggunaan Gaya Bahasa Ilmiah:** Kalimat aktif dan pasif digunakan pada konteks yang tepat. Pembagian paragraf cukup proporsional dan tidak bertele-tele.
* **Formatting LaTeX:** Penggunaan en-dash (`--`) untuk rentang angka pada LaTeX (seperti `0--39`) sebagian besar ditulis dengan benar.

### B. Temuan Masalah & Rekomendasi
* **Inkonsistensi Makna Metrik:**
  * Pada **Baris 809 (F.1)** tertulis: *"...untuk memprioritaskan recall tinggi (98,4%)"*
  * Pada **Baris 1152–1153 (Bagian G)** tertulis: *"...dikalibrasi pada 45 untuk memaksimalkan F1."*
  * *Rekomendasi:* Ini adalah kontradiksi teknis (dibahas lebih detail di Bagian 3). Ubah kalimat di Bagian G menjadi konsisten dengan prioritas recall.
* **Penggunaan Istilah Asing yang Menggantung:**
  * Pada **Baris 847**: *"...rekomendasi tindak lanjut yang **actionable**."*
  * *Rekomendasi:* Terjemahkan atau gunakan padanan bahasa Indonesia dengan format italic yang tepat, misalnya: *"...rekomendasi tindak lanjut yang dapat langsung diterapkan (\textit{actionable})."*
* **Kesalahan Tanda Baca Minor:**
  * Pada **FR-09 deskripsi (Baris 484)**, kalimat terakhir di dalam sel tabel menggantung tanpa tanda titik di akhir. Hal ini perlu dirapikan untuk menjaga estetika dokumen ilmiah.

---

## 2. Validasi Sumber Referensi

### A. Keabsahan Referensi Utama
* **[1] BPS (Februari 2025):** Data statistik pengangguran terbuka sebesar 7,28 juta (TPT 4,76%) yang dirilis Mei 2025 secara temporal sangat masuk akal dan faktual.
* **[6] EMSCAD (Vidros et al., 2017):** Spesifikasi dataset "17.880 lowongan dengan 866 penipuan" sudah tepat dan sesuai dengan rilis resmi dataset EMSCAD yang umum digunakan dalam riset deteksi lowongan palsu.
* **[8] Pastor-Galindo et al. (2020) & [9] IndoNLU (Wilie et al., 2020):** Format penulisan sitasi, volume, halaman, serta DOI sudah akurat.

### B. Temuan Masalah & Rekomendasi
* **Inkonsistensi Penulisan Sumber [2] (GASA):**
  * Di daftar pustaka tertulis: *"[2] Global Anti-Scam Alliance (GASA) & Mastercard..."*
  * Namun di caption **Gambar 1** tertulis: *"...berdasarkan survei GS Lab & GASA 2024 [2]"*
  * *Rekomendasi:* Seragamkan penyebutan nama institusi/penulis agar konsisten di seluruh bagian proposal.
* **Validitas Referensi [7] (Varsha & Thomas, Nov 2025):**
  * Konferensi IEEE RAICS edisi November 2025 secara temporal bisa diterima karena proposal dibuat tahun 2026. Namun, tim harus memastikan paper tersebut memang sudah terindeks di IEEE Xplore dan dapat ditemukan oleh juri jika mereka melakukan penelusuran mandiri.
* **Kurangnya Detil Sumber [3] (Kemenlu RI):**
  * Angka "lebih dari 3.300 WNI" adalah fakta kuat yang sering dikutip media, tetapi sitasi [3] tidak menyertakan URL, tanggal rilis, atau nomor dokumen resmi dari Kemenlu RI.
  * *Rekomendasi:* Tambahkan tautan siaran pers resmi atau dokumen laporan publik dari Kemenlu RI agar klaim krusial ini memiliki basis pembuktian yang kuat.

---

## 3. Analisis Ambiguitas & Inkonsistensi Internal

### A. Ambiguitas Ambang Klasifikasi ML (Layer 2) vs Verdict DSS (Skor Risiko)
* **Kondisi Saat Ini:**
  * Ambang batas biner model Machine Learning di Layer 2 dikalibrasi pada nilai **45**.
  * Ambang batas verdict Decision Support System (DSS) dibagi menjadi tiga kategori: AMAN (0–39), WASPADA (40–74), dan BAHAYA ($\ge$ 75).
* **Temuan Masalah:**
  * Penulisan angka 45 (ML) berdampingan dengan angka 40 dan 75 (DSS) di Baris 809 dapat membingungkan pembaca linear. Juri mungkin menyangka bahwa ambang batas ML (45) bertabrakan dengan batas bawah kategori WASPADA (40).
  * Tidak dijelaskan secara gamblang kapan Skor Risiko (yang awalnya bisa berupa nilai desimal dari kalkulasi model) dikonversi (*casting/rounding*) menjadi integer sebelum verdict ditentukan.
* **Rekomendasi Perbaikan:**
  * Tambahkan penjelasan eksplisit bahwa nilai 45 adalah ambang biner internal model NLP Layer 2 untuk menentukan label sementara (*gray zone*), sedangkan Skor Risiko 0–100 adalah agregasi multi-layer di level DSS.
  * Tegaskan bahwa sistem menerapkan fungsi pembulatan (*rounding*) integer sebelum penetapan kategori verdict akhir.

### B. Kontradiksi Istilah Optimasi Metrik: Maximizing F1-Score vs High Recall Priority
* **Kondisi Saat Ini:**
  * Proposal mengklaim mengoptimalkan metrik model untuk memperoleh **Recall tinggi (98,4%)** dengan konsekuensi nilai **Precision turun menjadi 56,6%** (F1-score 0,718).
  * Di Bagian G (Baris 1152), tertulis: *"Ambang klasifikasi dikalibrasi pada 45 untuk memaksimalkan F1."*
* **Temuan Masalah:**
  * Secara statistik, menggeser threshold dari default (0.50) ke 0.45 demi menaikkan Recall (menjadi 98,4%) akan menurunkan Precision secara signifikan. Tindakan ini **menurunkan** nilai F1-score puncak dari nilai optimalnya. 
  * Pernyataan "memaksimalkan F1" sangat bertolak belakang dengan fakta bahwa tim sengaja melakukan *trade-off* menurunkan F1 demi mendapatkan Recall mendekati sempurna (98,4%).
* **Rekomendasi Perbaikan:**
  * Ganti frasa *"untuk memaksimalkan F1"* menjadi *"untuk memprioritaskan Recall tinggi (\textit{high-recall thresholding})"* guna menghindari kritik juri yang memahami statistik machine learning.

### C. Ambiguitas Tech Stack LLM Provider
* **Kondisi Saat Ini:**
  * Bagian Batasan C.6 (Baris 333) dan Tabel Tech Stack (Baris 724) menggunakan istilah umum *"Multi-provider LLM Orchestration"* atau *"arsitektur multi-provider yang fleksibel"*.
  * Namun, di Bagian B.1.2 (Baris 251–252) dan Sprint 2 (Baris 392) masih tertulis secara spesifik *"via OpenAgentic"*.
* **Temuan Masalah:**
  * Terjadi kebocoran penyebutan provider spesifik (OpenAgentic) di beberapa bagian proposal, padahal bagian batasan dan tech stack berusaha mengabstraksikannya menjadi multi-provider.
* **Rekomendasi Perbaikan:**
  * Ubah penyebutan *"via OpenAgentic"* pada Bagian B.1.2 dan Sprint 2 menjadi *"via orkestrasi multi-provider LLM"* agar selaras dengan klaim fleksibilitas arsitektur di bagian lainnya.

### D. Mekanisme Bobot XAI untuk Fitur Opsional/Missing
* **Kondisi Saat Ini:**
  * Tabel 863–879 mendefinisikan total bobot dasar XAI sebesar **100%** (25% + 15% + 15% + 10% + 15% + 20%).
  * Pada contoh alur (Tabel 1082–1101), total kontribusi fitur yang dijumlahkan adalah **75 poin**, tetapi Skor Risiko Final yang tertulis adalah **93**.
* **Temuan Masalah:**
  * **Gap Matematika:** Ada selisih sebesar 18 poin (93 - 75) yang tidak dijelaskan asal-usulnya. Bagi juri penilai, ketidaksinkronan angka ini sangat mencolok.
  * **Fitur Tidak Terdefinisi:** Fitur *"Red Flag Text"* berkontribusi +12 poin pada contoh alur, tetapi fitur ini tidak ada di tabel bobot dasar XAI.
  * **Fitur Opsional:** Fitur *"No Domain"* berkontribusi +8 poin. Tidak dijelaskan bagaimana bobot "Domain Age" (15%) dan "Domain Reputation" (15%) ditransformasikan menjadi +8 poin ketika domain sama sekali tidak dicantumkan dalam lowongan.
* **Rekomendasi Perbaikan:**
  * Koreksi perhitungan matematis pada contoh alur (Tabel 1082–1101) agar total penjumlahan kontribusi fitur benar-benar sama dengan Skor Risiko Final yang ditampilkan.
  * Masukkan fitur *"Red Flag Text"* ke dalam tabel bobot dasar atau jelaskan bahwa fitur tersebut merupakan sub-komponen dari *"Klasifikasi Perilaku Teks"*.
  * Tambahkan penjelasan singkat mengenai penanganan fitur yang hilang (*missing feature handling*), misalnya jika nomor telepon atau domain tidak dicantumkan, bagaimana bobot fitur tersebut diredistribusikan dalam formula akhir Skor Risiko.

---

## 4. Penilaian Kelayakan Keseluruhan Proposal

### A. Kekuatan Utama Proposal
1. **Urgensi Sosial Tinggi:** Mengangkat masalah TPPO (Tindak Pidana Perdagangan Orang) dan kerugian finansial akibat lowongan palsu dengan menyajikan data statistik yang valid dari berbagai lembaga resmi.
2. **Arsitektur Pipeline 5-Layer Terstruktur:** Desain dari ekstraksi entitas hingga penjelasan kausal XAI sangat runtut dan memiliki dasar akademis yang baik.
3. **Analisis Batasan yang Dewasa:** Bagian batasan menunjukkan bahwa tim memahami batasan perangkat lunak secara realistis (misalnya tidak mengklaim bisa menghapus faktor psikologis korban).
4. **Mockup Hasil Uji Nyata:** Kehadiran screenshot pengujian end-to-end yang konsisten membuktikan bahwa aplikasi bukan sekadar wacana teoritis.

### B. Kelemahan Teknis yang Berisiko Diserang Juri
1. **Ketidakakuratan Terminologi ML:** Kontradiksi antara optimasi F1-score dan optimasi Recall.
2. **Inkalkulasi Matematika XAI:** Ketidakcocokan penjumlahan kontribusi fitur (75 poin) dengan skor akhir (93) pada contoh kasus.
3. **Ketidaksinkronan Nama LLM Provider:** Penyebutan OpenAgentic yang tidak konsisten dengan klaim arsitektur multi-provider.

**Kesimpulan:** Proposal ini memiliki potensi sangat besar untuk lolos ke tahap final GEMASTIK Divisi Software Development, dengan catatan tim segera memperbaiki inkonsistensi matematis pada XAI dan merapikan kontradiksi terminologi ML sebelum dokumen final dikirimkan.
