# Checklist Riset Manual: WaspadaAI (Anti-Scam Detector)

**Tujuan:** Mengumpulkan informasi kunci untuk mematangkan ide WaspadaAI sebelum draft proposal.  
**Tanggal:** 9 Juli 2026  
**Status:** Selesai (Hasil riset di [hasil-riset-waspadaai.md](file:///Users/fizualstd/Documents/GitHub/gemastik19/riset/ide-karya/hasil-riset-waspadaai.md))

---

## 1. Akses Teknis ke Isi Pesan (PALING KRITIS)

**Masalah:** WhatsApp & Telegram tidak punya open API untuk baca isi pesan user. Kita butuh cara teknis untuk membaca pesan secara real-time di perangkat user.

**Pertanyaan yang perlu dijawab:**
- Apakah Android Accessibility Service bisa dipakai untuk baca isi pesan WhatsApp/Telegram/SMS secara real-time?
- Apakah ada riset/produk yang sudah pakai pendekatan ini untuk deteksi penipuan?
- Apakah ada batasan dari Google Play Store untuk app yang pakai Accessibility Service?
- Bagaimana Snailly (juara 2 GEMASTIK 2025) membaca konten layar anak? Mereka pakai "screen buffer parsing" — apakah pendekatan yang sama bisa dipakai?

**Kata kunci pencarian:**
```
Google:
- "Android accessibility service read WhatsApp messages"
- "Android accessibility service scam detection"
- "screen overlay fraud detection Android"
- "real-time message monitoring Android app"
- "Android NotificationListenerService read messages"
- "parental control app read messages technique"

YouTube:
- "Android accessibility service tutorial read notifications"
- "how parental control apps read messages"

Reddit/Stack Overflow:
- "read WhatsApp messages programmatically Android"
- "accessibility service vs notification listener"
```

**Sumber prioritas:**
- Stack Overflow (jawaban teknis)
- Medium/Dev.to (tutorial implementasi)
- GitHub (repo open source yang pakai pendekatan ini)
- Dokumentasi resmi Android Developer (Accessibility Service, NotificationListenerService)

---

## 2. Dataset Scam Bahasa Indonesia

**Masalah:** Butuh dataset pesan scam real dalam Bahasa Indonesia untuk training model NLP. Tanpa dataset, tidak bisa bangun model.

**Pertanyaan yang perlu dijawab:**
- Apakah ada dataset publik pesan scam Bahasa Indonesia?
- Apakah CekRekening.id, Patrolisiber.id, atau aduankonten.id menyediakan data yang bisa diakses?
- Apakah ada paper akademis Indonesia yang sudah publish dataset scam?
- Berapa banyak data yang dibutuhkan untuk training model NLP yang decent?

**Kata kunci pencarian:**
```
Google:
- "dataset penipuan online Indonesia"
- "Indonesian scam text dataset"
- "dataset phishing Bahasa Indonesia"
- "NLP deteksi penipuan Bahasa Indonesia dataset"
- "Indonesian fraud detection dataset kaggle"
- "dataset spam SMS Indonesia"
- "dataset judi online Indonesia"
- "pinjol ilegal dataset"

Google Scholar:
- "Indonesian scam text classification"
- "phishing detection Indonesian language"
- "SMS spam detection Bahasa Indonesia"
- "fraud detection NLP Indonesia"

Kaggle/HuggingFace:
- "Indonesian scam"
- "Indonesian spam"
- "Indonesian fraud"
- "Bahasa Indonesia phishing"
```

**Sumber prioritas:**
- Kaggle (dataset publik)
- HuggingFace Datasets
- GitHub (repo dengan dataset)
- Portal data pemerintah (data.go.id, cekrekening.id)
- Paper akademis (biasanya lampirkan dataset)

---

## 3. Paper Akademis NLP Anti-Scam (Konteks Indonesia)

**Masalah:** Perlu landasan ilmiah yang kuat untuk menunjukkan bahwa pendekatan NLP untuk deteksi penipuan Bahasa Indonesia feasible dan sudah diteliti.

**Pertanyaan yang perlu dijawab:**
- Apakah ada paper tentang deteksi penipuan/phishing/scam menggunakan NLP dalam Bahasa Indonesia?
- Model NLP apa yang paling efektif untuk deteksi scam teks Bahasa Indonesia? (BERT Indo, RoBERTa, LSTM, dll)
- Berapa akurasi yang dicapai paper-paper tersebut?
- Apakah ada paper yang membahas deteksi scam di WhatsApp/Telegram spesifik?

**Kata kunci pencarian:**
```
Google Scholar:
- "deteksi penipuan NLP Bahasa Indonesia"
- "Indonesian phishing detection deep learning"
- "SMS spam classification Indonesian"
- "fraud detection text mining Indonesia"
- "scam detection WhatsApp"
- "Indonesian BERT fraud detection"
- "IndoBERT spam classification"
- "cyberbullying detection Indonesian" (related task, bisa jadi referensi arsitektur)
- "hoax detection Indonesian NLP"

Semantic Scholar:
- "Indonesian text classification fraud"
- "phishing detection Southeast Asian languages"

IEEE Xplore / ACM Digital Library:
- "Indonesian scam detection"
- "fraud detection Indonesian language processing"
```

**Sumber prioritas:**
- Google Scholar (paling luas)
- IEEE Xplore (paper engineering)
- ACM Digital Library
- Portal Garuda (jurnal Indonesia)
- SINTA (jurnal terakreditasi Indonesia)

---

## 4. Regulasi & Hukum Intersepsi Pesan di Indonesia

**Masalah:** Membaca pesan user (meskipun dengan consent) bisa bermasalah secara hukum. Perlu pastikan ide ini legal di Indonesia.

**Pertanyaan yang perlu dijawab:**
- Apakah legal membuat aplikasi yang membaca isi pesan user untuk deteksi penipuan?
- Apakah UU ITE atau UU PDP (Pelindungan Data Pribadi) melarang hal ini?
- Apakah ada preseden hukum untuk aplikasi sejenis di Indonesia?
- Bagaimana Truecaller/Getcontact beroperasi di Indonesia tanpa masalah hukum?
- Apakah consent user cukup sebagai dasar hukum?

**Kata kunci pencarian:**
```
Google:
- "UU ITE intersepsi pesan"
- "UU Pelindungan Data Pribadi Indonesia aplikasi"
- "legalitas aplikasi baca pesan Android Indonesia"
- "regulasi aplikasi anti penipuan Indonesia"
- "data privacy law Indonesia app development"
- "UU PDP consent pengolahan data"
- "hukum aplikasi monitoring pesan Indonesia"

Berita:
- "Truecaller regulasi Indonesia"
- "Getcontact masalah hukum Indonesia"
- "Kominfo aplikasi anti penipuan"
```

**Sumber prioritas:**
- Portal hukum Indonesia (peraturan.go.id)
- Berita hukum/teknologi
- Kominfo (regulasi resmi)
- Konsultan hukum IT (artikel/blog)

---

## 5. Kompetitor Spesifik Indonesia

**Masalah:** Perlu tahu apakah sudah ada startup/produk Indonesia yang fokus anti-scam, agar tidak duplikasi dan bisa identifikasi gap.

**Pertanyaan yang perlu dijawab:**
- Apakah ada startup Indonesia yang bikin aplikasi anti-scam/anti-penipuan?
- Apakah ada fitur anti-scam dari provider telekomunikasi Indonesia (Telkomsel, Indosat, dll)?
- Apakah pemerintah Indonesia (Kominfo, Polri) punya aplikasi anti-scam?
- Apa kelemahan solusi-solusi yang sudah ada?

**Kata kunci pencarian:**
```
Google:
- "aplikasi anti penipuan Indonesia"
- "startup anti scam Indonesia"
- "aplikasi deteksi penipuan WhatsApp Indonesia"
- "Kominfo aplikasi anti penipuan"
- "Polri aplikasi anti scam"
- "Telkomsel anti spam scam"
- "Indosat anti penipuan"
- "anti judi online aplikasi"
- "anti pinjol ilegal aplikasi"
- "Patrolisiber.id fitur"
- "CekRekening.id fitur"
- "aduankonten.id fitur"

Product Hunt / Tech in Asia / DailySocial:
- "Indonesian anti fraud startup"
- "Indonesia scam detection app"
```

**Sumber prioritas:**
- Tech in Asia Indonesia
- DailySocial.id
- Product Hunt (filter Indonesia)
- Play Store (cari "anti penipuan Indonesia")
- Website Kominfo, Polri

---

## 6. Studi Kasus & Berita Scam Indonesia (Untuk Urgensi)

**Masalah:** Butuh data kuantitatif dan cerita nyata untuk memperkuat urgensi masalah di proposal.

**Pertanyaan yang perlu dijawab:**
- Berapa kerugian total scam/penipuan online di Indonesia per tahun? (angka terbaru)
- Berapa banyak korban pinjol ilegal?
- Berapa banyak korban judi online?
- Apa jenis penipuan yang paling umum di Indonesia?
- Apakah ada berita viral tentang korban scam yang bisa jadi studi kasus?

**Kata kunci pencarian:**
```
Google:
- "kerugian penipuan online Indonesia 2025 2026"
- "statistik judi online Indonesia 2025"
- "korban pinjol ilegal 2025 2026"
- "OJK statistik penipuan finansial"
- "Kominfo statistik penipuan online"
- "Polri data penipuan online"
- "kerugian scam WhatsApp Indonesia"
- "love scam Indonesia statistik"
- "penipuan online modus terbaru 2026"

Berita:
- "korban penipuan online viral"
- "pinjol ilegal korban meninggal"
- "judi online keluarga hancur"
```

**Sumber prioritas:**
- OJK (ojk.go.id) — statistik resmi
- Kominfo — data resmi
- Polri — data kriminal
- BPS — statistik nasional
- Berita mainstream (Kompas, Detik, Tempo)

---

## 7. Pendekatan Teknis NLP untuk Scam Detection

**Masalah:** Perlu tahu state-of-the-art teknik NLP untuk deteksi penipuan teks, agar bisa pilih arsitektur yang tepat.

**Pertanyaan yang perlu dijawab:**
- Model apa yang paling efektif untuk deteksi scam teks? (BERT, RoBERTa, LSTM, Transformer ringan untuk on-device?)
- Apakah ada model NLP ringan yang bisa jalan on-device (di HP) dengan akurasi tinggi?
- Bagaimana cara deteksi "intent" penipuan dari percakapan (bukan hanya keyword matching)?
- Apakah ada teknik untuk deteksi scam multimodal (teks + gambar + link)?

**Kata kunci pencarian:**
```
Google Scholar:
- "on-device NLP fraud detection"
- "lightweight BERT text classification"
- "mobile NLP inference scam detection"
- "TinyBERT text classification"
- "on-device transformer inference mobile"
- "intent detection scam conversation"
- "conversational fraud detection NLP"

GitHub:
- "on-device NLP scam detection"
- "mobile fraud detection model"
- "lightweight text classification Android"
- "TensorFlow Lite text classification"
```

**Sumber prioritas:**
- Google Scholar
- GitHub (implementasi open source)
- TensorFlow Lite documentation
- HuggingFace (model ringan)
- Papers with Code (benchmark)

---

## Prioritas Pencarian

Urutan yang disarankan (dari paling kritis):

1. **Akses Teknis** (#1) — Kalau tidak feasible secara teknis, ide ini mati
2. **Dataset** (#2) — Tanpa dataset, tidak bisa bangun model
3. **Paper Akademis** (#3) — Untuk landasan ilmiah proposal
4. **Kompetitor Indonesia** (#5) — Untuk identifikasi gap
5. **Studi Kasus** (#6) — Untuk memperkuat urgensi
6. **Regulasi** (#4) — Penting tapi biasanya bisa diatasi dengan consent
7. **Pendekatan Teknis** (#7) — Bisa dipelajari sambil jalan

---

## Template Pelaporan Hasil

Untuk setiap topik, catat hasilnya dengan format ini:

```
### Topik: [Nama Topik]

**Sumber:** [URL]
**Tanggal akses:** [Tanggal]
**Temuan utama:**
- [Poin 1]
- [Poin 2]
- [Poin 3]

**Relevansi untuk WaspadaAI:**
- [Bagaimana temuan ini mempengaruhi ide kita]

**Catatan:**
- [Hal lain yang perlu ditindaklanjuti]
```

---

**Catatan:** File ini akan diupdate setelah hasil riset manual terkumpul.

---

## 8. Riset Keperluan AEGIS-OS (Fase 2)

**Status:** Selesai (Hasil riset di [hasil-riset-waspadaai.md](file:///Users/fizualstd/Documents/GitHub/gemastik19/riset/ide-karya/hasil-riset-waspadaai.md#L164))  
**Tujuan:** Memperdalam aspek teknis dan strategis untuk proposal AEGIS-OS

### 8.1. Android API Deep Dive (KRITIS)

**Masalah:** Perlu pemahaman mendalam tentang API Android yang akan dipakai AEGIS-OS untuk memastikan feasibility dan limitasi.

**Pertanyaan yang perlu dijawab:**
- **NotificationListenerService:**
  - Apa saja data yang bisa dibaca dari notifikasi? (judul, isi, app pengirim, timestamp?)
  - Apakah bisa baca notifikasi dari semua app (WA, Telegram, SMS, Line, dll)?
  - Apakah ada limitasi jumlah notifikasi yang bisa diproses per detik?
  - Apakah user bisa grant permission tanpa perlu restart app?
  - Apakah ada cara user revoke permission dengan mudah?

- **Clipboard Monitor (ClipboardManager):**
  - Apakah bisa detect kapan user copy sesuatu secara real-time?
  - Apakah bisa baca isi clipboard tanpa user interaction?
  - Apakah ada limitasi di Android 10+ (clipboard access restriction)?
  - Apakah perlu app dalam foreground untuk akses clipboard?

- **UsageStatsManager:**
  - Apakah bisa detect app apa yang sedang dibuka user secara real-time?
  - Apakah bisa detect kapan user buka app banking spesifik (BCA Mobile, Livin, BRI Mobile)?
  - Apakah perlu permission khusus? Seberapa sulit user grant permission ini?
  - Apakah ada delay antara user buka app dan kita detect?

- **System Overlay (WindowManager):**
  - Apakah bisa bikin overlay yang menutupi seluruh layar?
  - Apakah bisa bikin overlay yang interaktif (ada tombol "Lanjut" / "Batal")?
  - Apakah ada limitasi di Android 10+ (overlay permission)?
  - Apakah overlay kita bisa muncul di atas app banking?

**Kata kunci pencarian:**
```
Google/Stack Overflow:
- "NotificationListenerService get notification text Android"
- "NotificationListenerService limitations Android 13"
- "ClipboardManager real-time monitoring Android"
- "Android 10 clipboard access restrictions"
- "UsageStatsManager detect foreground app"
- "UsageStatsManager permission grant programmatically"
- "System overlay permission Android 10+"
- "Draw over other apps permission Android"
- "WindowManager overlay interactive buttons"

YouTube:
- "NotificationListenerService tutorial Android"
- "Clipboard monitoring Android app"
- "System overlay Android tutorial"

GitHub:
- Cari repo open source yang pakai NotificationListenerService
- Cari repo yang pakai clipboard monitoring
- Cari repo yang bikin system overlay
```

**Sumber prioritas:**
- Android Developer Documentation (developer.android.com)
- Stack Overflow (jawaban teknis)
- GitHub (contoh implementasi)
- Medium/Dev.to (tutorial)

---

### 8.2. TinyBERT/MobileBERT untuk On-Device NLP

**Masalah:** Perlu model NLP ringan yang bisa jalan di HP dengan akurasi tinggi untuk deteksi scam Bahasa Indonesia.

**Pertanyaan yang perlu dijawab:**
- Apakah ada model TinyBERT/MobileBERT yang sudah di-fine-tune untuk Bahasa Indonesia?
- Berapa ukuran model setelah quantization (TFLite)? Bisa muat di HP dengan RAM terbatas?
- Berapa latency inference di HP mid-range (RAM 4GB)?
- Apakah ada paper yang benchmark TinyBERT untuk text classification di mobile?
- Bagaimana cara fine-tune TinyBERT untuk deteksi scam? Butuh berapa data?
- Apakah bisa pakai model IndoBERT lalu compress ke TinyBERT?

**Kata kunci pencarian:**
```
Google Scholar:
- "TinyBERT Indonesian text classification"
- "MobileBERT Bahasa Indonesia"
- "IndoBERT quantization TFLite"
- "on-device NLP Indonesian language"
- "lightweight transformer Indonesian"
- "mobile NLP inference latency benchmark"
- "TinyBERT fine-tuning text classification"

GitHub:
- "TinyBERT Indonesian"
- "MobileBERT Indonesian"
- "IndoBERT TFLite"
- "on-device text classification Android"

HuggingFace:
- Cari model "tinybert" atau "mobilebert" dengan tag "indonesian"
- Cek ukuran model dan requirement

Papers with Code:
- "TinyBERT text classification benchmark"
- "mobile NLP inference speed"
```

**Sumber prioritas:**
- HuggingFace Model Hub (model yang sudah ada)
- Google Scholar (paper benchmark)
- GitHub (implementasi)
- TensorFlow Lite documentation (cara quantization)

---

### 8.3. Dataset Rekening Penipu & Domain Phishing

**Masalah:** Butuh database blacklist rekening penipu dan domain phishing untuk fitur clipboard shield dan link analyzer.

**Pertanyaan yang perlu dijawab:**
- Apakah CekRekening.id menyediakan API atau bulk download data?
- Apakah Patrolisiber.id menyediakan data rekening penipu?
- Apakah ada komunitas/telegram group yang share daftar rekening penipu?
- Apakah ada dataset publik domain phishing Indonesia?
- Bagaimana cara crowdsourcing data dari user (user lapor rekening penipu)?
- Apakah perlu verifikasi manual untuk data crowdsourced?

**Kata kunci pencarian:**
```
Google:
- "CekRekening.id API documentation"
- "CekRekening.id bulk download data"
- "Patrolisiber.id database rekening penipu"
- "dataset rekening penipu Indonesia"
- "komunitas anti penipuan Indonesia telegram"
- "forum korban penipuan online Indonesia"
- "dataset phishing domain Indonesia"
- "phishing URL dataset Indonesian"

GitHub:
- "Indonesian scam database"
- "phishing URL dataset"
- "fraud database Indonesia"

Telegram/Twitter:
- Cari group "anti penipuan Indonesia"
- Cari akun yang share info penipu
```

**Sumber prioritas:**
- CekRekening.id (website resmi)
- Patrolisiber.id (website resmi)
- GitHub (dataset publik)
- Komunitas online (Telegram, Twitter, Facebook group)

---

### 8.4. Arsitektur Android App & Best Practices

**Masalah:** Perlu rancang arsitektur app yang scalable, maintainable, dan performant untuk AEGIS-OS.

**Pertanyaan yang perlu dijawab:**
- Arsitektur apa yang cocok? (MVVM, Clean Architecture, MVI?)
- Bagaimana cara manage background service yang efisien (NotificationListenerService + Clipboard Monitor)?
- Bagaimana cara sync database blacklist rekening dari server ke local (SQLite/Room)?
- Apakah perlu pakai WorkManager untuk periodic sync?
- Bagaimana cara handle permission request yang banyak (NotificationListener, UsageStats, Overlay)?
- Apakah perlu pakai Foreground Service agar app nggak di-kill sistem?

**Kata kunci pencarian:**
```
Google/Medium:
- "Android Clean Architecture MVVM 2026"
- "NotificationListenerService background service best practice"
- "Android background service battery optimization"
- "Room database sync from server"
- "WorkManager periodic sync Android"
- "Android permission request flow multiple permissions"
- "Foreground service Android keep alive"

GitHub:
- Cari repo Android app dengan arsitektur Clean/MVVM
- Cari repo yang pakai NotificationListenerService
- Cari repo yang pakai Room + sync

Android Developer Blog:
- "Background service optimization"
- "Battery optimization best practices"
- "Permission request UX guidelines"
```

**Sumber prioritas:**
- Android Developer Blog (developer.android.com)
- Medium (artikel arsitektur)
- GitHub (contoh project)
- YouTube (tutorial arsitektur)

---

### 8.5. UI/UX untuk Overlay Peringatan

**Masalah:** Perlu desain UI overlay yang efektif, tidak mengganggu, dan mudah dipahami user.

**Pertanyaan yang perlu dijawab:**
- Bagaimana desain overlay peringatan yang efektif (warna, teks, tombol)?
- Apakah ada best practice untuk "interruptive UI" di Android?
- Bagaimana cara bikin overlay yang accessible (untuk user dengan disabilitas)?
- Apakah perlu animasi untuk menarik perhatian user?
- Bagaimana cara user dismiss overlay dengan mudah?

**Kata kunci pencarian:**
```
Google/Dribbble/Behance:
- "Android overlay UI design best practice"
- "interruptive UI design pattern"
- "warning dialog design Android"
- "system overlay UX design"
- "accessible overlay Android"

Figma/Material Design:
- "Material Design dialog guidelines"
- "Material Design snackbar vs dialog"
- "alert dialog best practice"
```

**Sumber prioritas:**
- Material Design Guidelines (m3.material.io)
- Dribbble/Behance (inspirasi desain)
- UX Collective (artikel UX)

---

### 8.6. Strategi Monetisasi & Sustainability

**Masalah:** Perlu rencana agar AEGIS-OS bisa sustain setelah kompetisi (tidak hanya jadi project lomba).

**Pertanyaan yang perlu dijawab:**
- Apakah app anti-scam bisa dimonetisasi? (freemium, premium, donation?)
- Apakah ada model bisnis yang cocok untuk app keamanan?
- Apakah bisa kerja sama dengan pemerintah (Kominfo, OJK) atau bank?
- Apakah ada grant/funding untuk project keamanan siber di Indonesia?

**Kata kunci pencarian:**
```
Google:
- "anti scam app business model"
- "cybersecurity app monetization"
- "freemium model security app"
- "government partnership cybersecurity Indonesia"
- "grant keamanan siber Indonesia"
- "funding startup cybersecurity Indonesia"

Tech in Asia/DailySocial:
- "startup cybersecurity Indonesia funding"
- "model bisnis aplikasi keamanan"
```

**Sumber prioritas:**
- Tech in Asia Indonesia
- DailySocial.id
- Website pemerintah (Kominfo, OJK)
- Website grant/funding (LPDP, BRIN)

---

### 8.7. Benchmark dengan Fokal (Best Paper 2025)

**Masalah:** Perlu analisis mendalam tentang Fokal (Best Paper GEMASTIK 2025) untuk memastikan diferensiasi yang jelas.

**Pertanyaan yang perlu dijawab:**
- Apakah ada paper publikasi Fokal yang bisa diakses?
- Apa saja metrik yang mereka laporkan di paper? (latency, accuracy, battery usage?)
- Bagaimana mereka handle privasi anak? (enkripsi, consent?)
- Apakah mereka open source? Bisa lihat code-nya?
- Apa kelemahan teknis Fokal yang bisa kita exploit sebagai diferensiasi?

**Kata kunci pencarian:**
```
Google Scholar:
- "Fokal GEMASTIK 2025 paper"
- "Snailly parental control paper"
- "screen buffer parsing Android parental control"
- "YOLOv11 mobile performance benchmark"

Google:
- "Fokal UNIKOM GEMASTIK"
- "Snailly UNIKOM source code"
- "Fokal parental control GitHub"
```

**Sumber prioritas:**
- Google Scholar (paper)
- Repository kampus UNIKOM
- LinkedIn author (bisa kontak langsung)

---

### 8.8. Feasibility di iOS (Cross-Platform Potential)

**Masalah:** Perlu tahu apakah AEGIS-OS bisa diimplementasikan di iOS atau hanya terbatas di Android. Ini penting untuk menentukan scope dan strategi deployment.

**Pertanyaan yang perlu dijawab:**
- **Notification Monitoring di iOS:**
  - Apakah iOS punya API setara NotificationListenerService?
  - Apakah app pihak ketiga bisa baca notifikasi dari app lain (WA, Telegram, SMS)?
  - Apakah ada limitasi sandbox iOS untuk akses notifikasi?

- **Clipboard Access di iOS:**
  - Apakah app bisa monitor clipboard secara real-time di iOS?
  - Apakah ada restriction di iOS 14+ untuk clipboard access?
  - Apakah user dikasih notifikasi "App X pasted from clipboard"?

- **App Usage Detection di iOS:**
  - Apakah bisa detect app apa yang sedang dibuka user di iOS?
  - Apakah ada API setara UsageStatsManager di iOS?
  - Apakah sandbox iOS mencegah app melihat aktivitas app lain?

- **System Overlay di iOS:**
  - Apakah bisa bikin overlay/popup di atas app lain di iOS?
  - Apakah iOS mengizinkan "draw over other apps"?
  - Apakah ada workaround untuk interupsi user di iOS?

- **On-Device ML di iOS:**
  - Apakah Core ML bisa jalan model TinyBERT/MobileBERT?
  - Berapa limitasi ukuran model di iOS?
  - Apakah ada framework NLP on-device alternatif di iOS?

- **App Store Policy:**
  - Apakah Apple App Store mengizinkan app yang monitor aktivitas user?
  - Apakah ada rejection case untuk app security/anti-fraud di iOS?
  - Bagaimana perbandingan kebijakan Google Play vs Apple App Store untuk app monitoring?

**Kata kunci pencarian:**
```
Google/Stack Overflow:
- "iOS notification monitoring third party app"
- "iOS read other app notifications API"
- "iOS clipboard monitoring real-time"
- "iOS 14 clipboard access restriction"
- "iOS detect foreground app"
- "iOS UsageStats equivalent API"
- "iOS system overlay popup"
- "iOS draw over other apps"
- "iOS sandbox limitations security app"
- "Apple App Store policy monitoring app"
- "iOS anti fraud app rejection"

Apple Developer Documentation:
- "UserNotifications framework limitations"
- "UIPasteboard access restrictions"
- "Background modes iOS"
- "App sandbox iOS"

Reddit/Forums:
- "iOS security app development limitations"
- "Apple App Store rejection monitoring app"
- "iOS vs Android app permissions comparison"

GitHub:
- Cari repo iOS app yang coba monitor notifikasi/clipboard
- Cari workaround untuk iOS sandbox limitations
```

**Sumber prioritas:**
- Apple Developer Documentation (developer.apple.com)
- Stack Overflow (iOS development)
- Reddit r/iOSProgramming
- Medium (artikel iOS security app)
- App Store Review Guidelines

---

### 8.9. Cross-Platform Strategy (Flutter/React Native vs Native)

**Masalah:** Jika iOS feasible (meski terbatas), perlu tentukan strategi development: native terpisah atau cross-platform.

**Pertanyaan yang perlu dijawab:**
- Apakah Flutter/React Native bisa akses API system-level (NotificationListener, Clipboard, UsageStats)?
- Apakah perlu custom native module (platform channel) untuk fitur-fitur kritis?
- Apakah lebih baik bikin 2 app terpisah (Android native + iOS native) atau 1 codebase cross-platform?
- Bagaimana perbandingan effort development native vs cross-platform untuk case ini?
- Apakah ada limitasi performa on-device ML di cross-platform framework?

**Kata kunci pencarian:**
```
Google:
- "Flutter NotificationListenerService Android"
- "Flutter clipboard monitoring"
- "Flutter system overlay"
- "React Native notification listener"
- "Flutter platform channel Android API"
- "React Native native module iOS"
- "Flutter vs React Native system-level API"
- "TensorFlow Lite Flutter integration"
- "Core ML React Native"

GitHub:
- "Flutter notification listener plugin"
- "React Native clipboard monitor"
- "Flutter TFLite example"

Medium/Dev.to:
- "Flutter system-level API tutorial"
- "React Native native module tutorial"
- "Cross-platform security app development"
```

**Sumber prioritas:**
- Flutter documentation (flutter.dev)
- React Native documentation (reactnative.dev)
- Medium (tutorial cross-platform)
- GitHub (plugin/package yang sudah ada)

---

### Prioritas Riset AEGIS-OS

Urutan yang disarankan:

1. **Android API Deep Dive** (8.1) — Validasi feasibility teknis
2. **Dataset Rekening Penipu** (8.3) — Bahan bakar fitur utama
3. **TinyBERT/MobileBERT** (8.2) — Otak AI on-device
4. **Benchmark Fokal** (8.7) — Diferensiasi dari juara sebelumnya
5. **Arsitektur App** (8.4) — Fondasi teknis
6. **UI/UX Overlay** (8.5) — User experience
7. **Monetisasi** (8.6) — Sustainability jangka panjang

---

**Catatan:** Hasil riset fase 2 ini akan digunakan untuk menyusun draft proposal lengkap AEGIS-OS.
