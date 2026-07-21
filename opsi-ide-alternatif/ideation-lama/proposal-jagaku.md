# PROPOSAL PENGEMBANGAN PERANGKAT LUNAK

## GEMASTIK XIX 2026 - Divisi VIII Pengembangan Perangkat Lunak

---

**Judul Karya:** JagaKu - Sistem Perisai Digital On-Device untuk Pencegahan Kejahatan Siber Finansial

**Tagline:** Jaga Kamu dari Penipu

**Tim:** [Nama Tim]

**Perguruan Tinggi:** Sekolah Vokasi, Universitas Gadjah Mada

**Program Studi:** Teknologi Rekayasa Perangkat Lunak (TRPL)

**Anggota Tim:**
1. [Nama Ketua Tim] - Ketua Tim
2. [Nama Anggota 1] - Anggota
3. [Nama Anggota 2] - Anggota

**Dosen Pembimbing:** [Nama Dosen Pembimbing]

---

## DAFTAR ISI

1. [Latar Belakang Ide Perangkat Lunak](#1-latar-belakang-ide-perangkat-lunak)
2. [Tujuan dan Manfaat](#2-tujuan-dan-manfaat)
3. [Batasan Perangkat Lunak](#3-batasan-perangkat-lunak)
4. [Metodologi Pengembangan](#4-metodologi-pengembangan)
5. [Analisis Kebutuhan dan Desain Solusi](#5-analisis-kebutuhan-dan-desain-solusi)
6. [Implementasi Perangkat Lunak](#6-implementasi-perangkat-lunak)
7. [Screenshot Mockup Interface](#7-screenshot-mockup-interface)
8. [Dokumentasi Cara Penggunaan](#8-dokumentasi-cara-penggunaan)
9. [Keunggulan Kompetitif & Analisis Pasar](#9-keunggulan-kompetitif--analisis-pasar)
10. [Dampak & Sustainability](#10-dampak--sustainability)
11. [Lampiran](#11-lampiran)

---

## 1. LATAR BELAKANG IDE PERANGKAT LUNAK

### 1.1. Urgensi Masalah: Krisis Kejahatan Siber Finansial di Indonesia

Indonesia sedang menghadapi epidemi kejahatan siber finansial yang mengancam keamanan ekonomi masyarakat. Berdasarkan data yang kami kumpulkan:

**Statistik Krisis:**
- **Kredibel.co.id** mencatat **281,971+ kasus penipuan** dengan total kerugian **Rp423 Miliar+** sejak 2018
- **176,883+ rekening bank** telah di-blacklist, namun penipu terus membuat rekening baru
- **APK fraud** (undangan pernikahan.apk, paket tertahan.apk) menjadi vektor serangan baru yang masif sejak 2023
- **Social engineering** via WhatsApp/Telegram semakin sophisticated dengan teknik manipulasi psikologis

**Realita di Lapangan:**
1. **Nenek-nenek** terima WA "paket tertahan, bayar Rp50.000" → tidak curiga → transfer → **tertipu**
2. **Bapak-bapak** dapat SMS "menang undian Rp100 juta" → tidak curiga → kirim data KTP → **tertipu**
3. **Anak muda** dapat "undangan pernikahan.apk" → tidak curiga → install → **OTP m-banking dicuri**

**Masalah Fundamental:**
Platform anti-scam existing (Kredibel, CekRekening.id, Scamwise, Scamadviser) adalah **"passive lookup tools"** yang membutuhkan kesadaran pengguna untuk secara manual memverifikasi kecurigaan. Ini menciptakan **"Awareness Gap"** - celah di mana pengguna yang tidak sadar ada bahaya tidak akan pernah terlindungi.

### 1.2. Analisis Kompetitor & Gap Analysis

**Kompetitor Existing:**

| Platform | Pendekatan | Kelemahan Fatal |
|----------|-----------|-----------------|
| **Kredibel** | Manual cek rekening via web | Butuh user curiga dulu, tidak ada proteksi otomatis |
| **CekRekening.id** | Database rekening penipu | Sama, passive lookup only |
| **Truecaller** | Caller ID & spam detection | Fokus telepon, tidak proteksi chat/APK |
| **Getcontact** | Contact tagging | Sama, tidak intervensi transaksi |
| **Scamwise (UK)** | Web-based scam checker | UK-centric, tidak ada database Indonesia |
| **Scamadviser** | Website trust score | Website-focused only, tidak cek chat/APK |
| **Ask Silver** | AI-powered scam detector | Cloud-based (privacy risk), English-focused |

**Gap yang Tidak Terpenuhi:**
1. ❌ Tidak ada yang **proaktif** melindungi user sebelum mereka sadar ada bahaya
2. ❌ Tidak ada yang **otomatis** intervensi transaksi finansial
3. ❌ Tidak ada yang **on-device** (semua cloud-based, privacy concern)
4. ❌ Tidak ada yang **konteks Indonesia** (judol, pinjol ilegal, APK fraud lokal)
5. ❌ Tidak ada yang **deep OS integration** (clipboard, notification, APK analysis)

### 1.3. Solusi: JagaKu - Your Digital Guardian

**JagaKu** adalah **sistem pertahanan perilaku proaktif** berbasis AI on-device yang melindungi pengguna Android dari kejahatan siber finansial dan APK fraud secara **otomatis**, bahkan ketika pengguna **tidak menyadari** adanya ancaman.

**Value Proposition:**
> "JagaKu tidak menunggu kamu curiga. JagaKu otomatis melindungi kamu 24/7, bahkan saat kamu tidak sadar ada bahaya."

**Cara Kerja:**
1. **Clipboard Shield:** Otomatis cek setiap nomor rekening yang di-copy → bandingkan dengan database hash penipu → tampilkan peringatan jika berbahaya
2. **APK Fraud Auditor:** Deteksi APK yang meminta Accessibility Service → analisis permission berbahaya → blokir instalasi APK mencurigakan
3. **Notification Scanner:** Analisis pesan masuk (WA/Telegram) dengan TinyBERT on-device → deteksi pola scam → tampilkan warning
4. **Real-Time Protection:** Semua proses 100% lokal di HP, data tidak pernah keluar (UU PDP compliant)

---

## 2. TUJUAN DAN MANFAAT

### 2.1. Tujuan

**Tujuan Utama:**
Mengembangkan sistem perisai digital proaktif yang mampu mencegah kerugian finansial akibat kejahatan siber secara otomatis dan real-time.

**Tujuan Spesifik:**
1. **Mencegah penipuan finansial** melalui deteksi otomatis rekening penipu di clipboard
2. **Memblokir APK fraud** yang mencoba mencuri data sensitif (OTP, password m-banking)
3. **Mendeteksi social engineering** dalam pesan chat menggunakan NLP on-device
4. **Menjaga privasi pengguna** dengan pemrosesan 100% lokal (tidak ada data yang dikirim ke server)
5. **Meningkatkan literasi digital** masyarakat Indonesia tentang bahaya kejahatan siber

### 2.2. Manfaat

**Bagi Pengguna (End-User):**
- ✅ **Perlindungan otomatis 24/7** tanpa perlu sadar ada bahaya
- ✅ **Pencegahan kerugian finansial** sebelum transfer terjadi
- ✅ **Privasi terjaga** (data chat/clipboard tidak keluar dari HP)
- ✅ **Mudah digunakan** (install sekali, jalan otomatis di background)
- ✅ **Gratis** untuk penggunaan dasar

**Bagi Masyarakat Indonesia:**
- ✅ **Mengurangi angka penipuan online** (target: cegah 10.000+ kasus/tahun)
- ✅ **Meningkatkan kepercayaan** dalam transaksi digital
- ✅ **Edukasi digital** melalui warning & tips yang ditampilkan
- ✅ **Database crowdsourcing** rekening penipu (user bisa lapor)

**Bagi Institusi Keuangan (Bank/E-Wallet):**
- ✅ **Mengurangi fraud loss** (bank tidak perlu ganti rugi nasabah yang tertipu)
- ✅ **Meningkatkan trust** nasabah terhadap mobile banking
- ✅ **Partnership opportunity** (integrasi API dengan JagaKu)

**Bagi Pemerintah (Kominfo/OJK):**
- ✅ **Mendukung program literasi digital** nasional
- ✅ **Mengurangi beban** penanganan laporan penipuan
- ✅ **Data analytics** tentang tren kejahatan siber (anonymized)

**Bagi Akademisi & Riset:**
- ✅ **Kontribusi ilmiah** dalam bidang on-device NLP untuk Bahasa Indonesia
- ✅ **Dataset scam Indonesia** untuk riset selanjutnya
- ✅ **Arsitektur referensi** untuk privacy-preserving AI

---

## 3. BATASAN PERANGKAT LUNAK

### 3.1. Batasan Platform

**Platform yang Didukung:**
- ✅ **Android 8.0 (API 26) ke atas** - target utama
- ✅ **Android 10+ (API 29+)** - optimal (workaround clipboard tersedia)

**Platform yang TIDAK Didukung:**
- ❌ **iOS** - tidak feasible karena sandbox limitations (tidak bisa baca clipboard app lain, tidak bisa intercept notifikasi)
- ❌ **Android < 8.0** - API terlalu lama, security model berbeda
- ❌ **Web/Desktop** - fokus pada mobile (90% penipuan terjadi via HP)

### 3.2. Batasan Fungsional

**Fitur yang Diimplementasikan:**
1. ✅ Clipboard Shield (deteksi rekening penipu)
2. ✅ APK Fraud Auditor (deteksi APK berbahaya)
3. ✅ Notification Scanner (deteksi scam di WA/Telegram)
4. ✅ Local hash database (offline, sync dengan server untuk update)
5. ✅ User reporting (lapor rekening penipu ke database crowdsourcing)
6. ✅ Educational warnings & tips

**Fitur yang TIDAK Diimplementasikan:**
- ❌ Membaca isi chat secara langsung (Accessibility Service ditolak Play Store)
- ❌ Screen recording/capture (battery drain, privacy concern)
- ❌ Intercept SMS/telepon (bukan fokus, sudah ada Truecaller)
- ❌ Cloud-based NLP processing (privacy risk)
- ❌ Real-time monitoring semua app (battery drain)

### 3.3. Batasan Teknis

**Keterbatasan Android:**
1. **Clipboard access (Android 10+):** Hanya bisa dibaca saat app di foreground
   - **Workaround:** Gunakan transparent overlay yang dapat fokus window saat user buka M-Banking
2. **NotificationListenerService:** Hanya bisa baca notifikasi, tidak bisa baca chat yang sedang dibuka
   - **Solusi:** Fokus pada deteksi awal via notifikasi, bukan real-time chat monitoring
3. **Google Play Store policy:** Accessibility Service untuk baca chat akan ditolak
   - **Solusi:** Untuk demo Gemastik, gunakan sideloading APK (tidak lewat Play Store)

**Keterbatasan AI:**
1. **TinyBERT accuracy:** ~85-90% untuk deteksi scam (bukan 100%)
   - **Mitigasi:** Tampilkan confidence score, user tetap punya keputusan final
2. **False positive:** Bisa salah deteksi pesan legitimate sebagai scam
   - **Mitigasi:** Threshold confidence 80%, user bisa dismiss warning
3. **Dataset terbatas:** Dataset scam Indonesia masih kecil (~1.143 sampel)
   - **Mitigasi:** Crowdsourcing dari user reporting, continuous learning

### 3.4. Batasan Privasi & Keamanan

**Data yang DISIMPAN di Device:**
- ✅ Hash rekening penipu (bukan nomor rekening asli)
- ✅ Log warning yang ditampilkan (lokal, bisa dihapus user)
- ✅ User preferences & settings

**Data yang TIDAK PERNAH dikirim ke Server:**
- ❌ Isi chat/pesan
- ❌ Isi clipboard
- ❌ Daftar aplikasi yang terinstall
- ❌ Data pribadi pengguna

**Data yang DI-SYNC dengan Server (Encrypted):**
- ✅ Hash rekening baru dari crowdsourcing (user reporting)
- ✅ Update database hash penipu (periodic, daily)
- ✅ Anonymized statistics (jumlah warning, bukan isi)

---

## 4. METODOLOGI PENGEMBANGAN

### 4.1. Metodologi: Agile Development dengan Iterasi Cepat

Kami menggunakan **Agile methodology** dengan sprint 2-minggu, memungkinkan iterasi cepat berdasarkan feedback dan penyesuaian terhadap kendala teknis.

**Fase Pengembangan:**

**Fase 1: Research & Prototyping (Minggu 1-4)**
- Riset Android APIs (NotificationListenerService, ClipboardManager, UsageStatsManager)
- Prototyping TinyBERT on-device NLP
- Validasi workaround clipboard (transparent overlay)
- Setup project structure (Kotlin, MVVM, Room Database)

**Fase 2: Core Features Development (Minggu 5-10)**
- Implementasi Clipboard Shield
- Implementasi APK Fraud Auditor
- Implementasi Notification Scanner
- Integrasi local hash database
- Testing & debugging

**Fase 3: UI/UX & Polish (Minggu 11-12)**
- Design UI (Material Design 3)
- Implementasi dashboard & settings
- Educational warnings & tips
- User reporting feature

**Fase 4: Testing & Optimization (Minggu 13-14)**
- Unit testing (JUnit, Mockito)
- Integration testing
- Performance optimization (battery, memory)
- Security audit (code review, penetration testing)

**Fase 5: Deployment & Documentation (Minggu 15-16)**
- Build APK untuk demo
- Dokumentasi teknis & user manual
- Video demo (3 menit untuk penyisihan, 10 menit untuk final)
- Persiapan presentasi

### 4.2. Tech Stack

**Mobile App (Android):**
- **Kotlin 2.4.0** - bahasa utama (native Android, performance optimal)
- **Android Jetpack** (Room 2.6.x, Lifecycle 2.8.x, WorkManager 2.9.x) - komponen modern
- **Material Design 3** - UI/UX guidelines

**AI/ML:**
- **TinyBERT/MobileBERT** - model NLP on-device (~15-20MB)
- **TensorFlow Lite 2.16.x** - runtime untuk inference (sub-30ms latency)
- **Hugging Face Transformers** - training & fine-tuning model

**Web Dashboard:**
- **Next.js 16.2.10** - React framework (App Router, TypeScript)
- **shadcn/ui** - komponen UI (Base UI, accessible, customizable)
- **Tailwind CSS v4.3** - utility-first CSS framework
- **TypeScript 5.5.x** - type safety

**Backend API:**
- **FastAPI 0.139.0** - Python web framework (async, high performance)
- **Pydantic v2.13.4** - data validation
- **SQLAlchemy 2.0.x** - ORM database
- **PostgreSQL 18.4** - database (latest stable)

**Database:**
- **Room Database** - local storage Android (SQLite wrapper)
- **PostgreSQL 18.4** - cloud database untuk sync
- **SHA-256 Hash** - untuk menyimpan hash rekening (privacy-preserving)

**Networking:**
- **Retrofit 2.11.x** - HTTP client untuk sync dengan server
- **OkHttp 4.12.x** - network layer
- **Encrypted communication** (TLS 1.3)

**Testing:**
- **JUnit 5** - unit testing
- **Mockito 5.x** - mocking dependencies
- **Espresso 3.6.x** - UI testing
- **Android Profiler** - performance testing

**Development Tools:**
- **Android Studio** - IDE utama
- **Git** - version control
- **GitHub** - repository hosting
- **Figma** - UI/UX design

### 4.3. Arsitektur Sistem

**Pattern:** MVVM (Model-View-ViewModel) dengan Clean Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Presentation Layer                    │
│  (Activities, Fragments, Composables, ViewModels)       │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│                      Domain Layer                        │
│  (Use Cases, Business Logic, Domain Models)             │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│                       Data Layer                         │
│  (Repositories, Data Sources, Room DB, Network)         │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│                   Android Services                       │
│  (NotificationListener, ClipboardMonitor, OverlayService)│
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│                     AI/ML Engine                         │
│  (TinyBERT TFLite, APK Analyzer, Hash Matcher)          │
└─────────────────────────────────────────────────────────┘
```

**Komponen Utama:**

1. **ClipboardMonitorService**
   - Foreground service yang monitor clipboard changes
   - Trigger transparent overlay saat user buka M-Banking
   - Hash rekening yang di-copy → compare dengan database

2. **NotificationListenerService**
   - Listen notifikasi masuk dari WA/Telegram
   - Extract text → analyze dengan TinyBERT
   - Tampilkan warning jika terdeteksi scam

3. **APKAuditorService**
   - Monitor instalasi APK baru (via PackageManager)
   - Analisis permission yang diminta
   - Deteksi Accessibility Service request (red flag)
   - Blokir/warning APK mencurigakan

4. **OverlayService**
   - Transparent overlay yang muncul saat user buka M-Banking
   - Intercept clipboard paste event
   - Tampilkan warning jika rekening berbahaya

5. **TinyBERTInferenceEngine**
   - Load model TFLite (~15-20MB)
   - Tokenize input text
   - Run inference (sub-30ms latency)
   - Return confidence score

6. **HashDatabaseRepository**
   - Local Room database (hash rekening penipu)
   - Periodic sync dengan server (daily)
   - User reporting (kirim hash baru ke server)

---

## 5. ANALISIS KEBUTUHAN DAN DESAIN SOLUSI

### 5.1. Analisis Kebutuhan

**Functional Requirements:**

**FR-1: Clipboard Shield**
- Sistem harus mampu mendeteksi perubahan clipboard secara real-time
- Sistem harus mampu extract nomor rekening dari teks yang di-copy
- Sistem harus mampu hash nomor rekening (SHA-256) dan compare dengan database
- Sistem harus menampilkan warning overlay jika rekening terdeteksi sebagai penipu
- Sistem harus menampilkan confidence score dan sumber laporan

**FR-2: APK Fraud Auditor**
- Sistem harus mampu mendeteksi instalasi APK baru (dari Play Store atau sideload)
- Sistem harus mampu analisis permission yang diminta APK
- Sistem harus mampu deteksi jika APK meminta Accessibility Service
- Sistem harus menampilkan warning jika APK mencurigakan
- Sistem harus memberikan opsi untuk uninstall APK berbahaya

**FR-3: Notification Scanner**
- Sistem harus mampu listen notifikasi dari WhatsApp, Telegram, SMS
- Sistem harus mampu extract text dari notifikasi
- Sistem harus mampu analyze text dengan TinyBERT untuk deteksi scam
- Sistem harus menampilkan warning jika pesan terdeteksi sebagai scam
- Sistem harus memberikan tips edukasi tentang jenis scam yang terdeteksi

**FR-4: User Reporting**
- Sistem harus memungkinkan user melaporkan rekening penipu
- Sistem harus hash nomor rekening sebelum dikirim ke server
- Sistem harus menyimpan laporan di database crowdsourcing
- Sistem harus memberikan feedback ke user setelah laporan berhasil

**FR-5: Dashboard & Settings**
- Sistem harus menampilkan statistik perlindungan (jumlah warning, jenis scam terdeteksi)
- Sistem harus memungkinkan user mengatur sensitivity level
- Sistem harus memungkinkan user whitelist/blacklist nomor rekening
- Sistem harus menampilkan log warning yang pernah ditampilkan

**Non-Functional Requirements:**

**NFR-1: Performance**
- Latency inference TinyBERT: < 30ms
- Battery drain: < 5% per hari
- Memory usage: < 100MB
- Startup time: < 2 detik

**NFR-2: Privacy & Security**
- Data chat/clipboard TIDAK PERNAH dikirim ke server
- Hanya hash yang di-sync (bukan data asli)
- Komunikasi dengan server menggunakan TLS 1.3
- Database lokal di-encrypt (SQLCipher)

**NFR-3: Usability**
- UI sederhana, mudah dipahami user awam
- Warning jelas, tidak membingungkan
- Educational tips actionable
- Bahasa Indonesia (target user lokal)

**NFR-4: Reliability**
- Uptime: 99.9% (service tidak crash)
- False positive rate: < 10%
- False negative rate: < 15%
- Graceful degradation jika AI model gagal load

### 5.2. Desain Solusi

**User Journey:**

**Scenario 1: User Terima WA Penipuan**
```
1. Penipu kirim WA: "Paket Anda tertahan, bayar Rp50.000 ke rekening 1234567890"
2. Notifikasi WA muncul di HP user
3. JagaKu NotificationListenerService detect notifikasi
4. Extract text → analyze dengan TinyBERT
5. TinyBERT detect pola scam (confidence 92%)
6. JagaKu tampilkan warning: "⚠️ Pesan ini terdeteksi sebagai penipuan"
7. User baca warning → tidak jadi transfer → terhindar dari penipuan
```

**Scenario 2: User Copy Rekening Penipu**
```
1. User copy nomor rekening dari chat penipu
2. User buka app M-Banking (BCA/Mandiri/dll)
3. JagaKu OverlayService detect M-Banking dibuka
4. Transparent overlay muncul, intercept clipboard paste
5. User paste nomor rekening
6. JagaKu extract nomor rekening → hash (SHA-256)
7. Compare hash dengan database → MATCH (rekening penipu)
8. JagaKu tampilkan warning dramatis: "🚨 REKENING INI TERDAFTAR SEBAGAI PENIPU!"
9. User kaget → tidak jadi transfer → terhindar dari kerugian
```

**Scenario 3: User Install APK Fraud**
```
1. User dapat WA: "Undangan pernikahan saya, buka file ini ya" + file .apk
2. User download & install APK
3. JagaKu APKAuditorService detect instalasi APK baru
4. Analisis permission → detect Accessibility Service request
5. JagaKu tampilkan warning: "⚠️ APK ini meminta akses penuh ke HP Anda"
6. User baca warning → tidak jadi install → OTP m-banking aman
```

**Wireframe UI:**

**Dashboard:**
```
┌─────────────────────────────────────┐
│  JagaKu - Your Digital Guardian     │
├─────────────────────────────────────┤
│  🛡️ Status: AKTIF MELINDUNGI        │
│                                     │
│  Statistik Hari Ini:                │
│  • 3 pesan scam terdeteksi          │
│  • 1 rekening penipu diblokir       │
│  • 0 APK berbahaya                  │
│                                     │
│  [Lihat Detail]                     │
├─────────────────────────────────────┤
│  Quick Actions:                     │
│  [Lapor Penipuan] [Cek Rekening]    │
└─────────────────────────────────────┘
```

**Warning Overlay (saat user paste rekening penipu):**
```
┌─────────────────────────────────────┐
│  🚨 PERINGATAN KEAMANAN 🚨          │
├─────────────────────────────────────┤
│                                     │
│  REKENING INI TERDAFTAR SEBAGAI     │
│  PENIPU!                            │
│                                     │
│  Nomor: 1234567890                  │
│  Dilaporkan: 47 kali                │
│  Total kerugian: Rp23.500.000       │
│                                     │
│  JANGAN TRANSFER KE REKENING INI!   │
│                                     │
│  [Batalkan Transfer] [Lihat Detail] │
└─────────────────────────────────────┘
```

**Notification Warning:**
```
┌─────────────────────────────────────┐
│  ⚠️ JagaKu: Pesan Mencurigakan      │
├─────────────────────────────────────┤
│                                     │
│  Pesan dari +6281234567890          │
│  terdeteksi sebagai PENIPUAN        │
│                                     │
│  "Paket Anda tertahan, bayar        │
│  Rp50.000 ke rekening..."           │
│                                     │
│  Confidence: 92%                    │
│  Jenis: Fake Delivery Scam          │
│                                     │
│  Tips:                              │
│  • Jangan transfer uang             │
│  • Jangan klik link                 │
│  • Blokir nomor ini                 │
│                                     │
│  [Abaikan] [Blokir Nomor]           │
└─────────────────────────────────────┘
```

---

## 6. IMPLEMENTASI PERANGKAT LUNAK

### 6.1. Progress Pengembangan (Saat Ini: 50%)

**Yang Sudah Selesai:**
- ✅ Riset mendalam Android APIs (NotificationListenerService, ClipboardManager, dll)
- ✅ Validasi workaround clipboard (transparent overlay)
- ✅ Setup project structure (Kotlin, MVVM, Room)
- ✅ Prototyping TinyBERT on-device NLP
- ✅ Design UI/UX wireframe
- ✅ Analisis kompetitor & gap analysis

**Yang Sedang Dikerjakan:**
- 🔄 Implementasi ClipboardMonitorService
- 🔄 Implementasi NotificationListenerService
- 🔄 Training TinyBERT model dengan dataset scam Indonesia
- 🔄 Integrasi local hash database

**Yang Belum Dikerjakan:**
- ⏳ Implementasi APKAuditorService
- ⏳ Implementasi OverlayService
- ⏳ Implementasi Dashboard UI
- ⏳ User reporting feature
- ⏳ Testing & optimization
- ⏳ Dokumentasi & video demo

### 6.2. Code Structure

```
app/
├── src/main/
│   ├── java/com/jagaku/app/
│   │   ├── data/
│   │   │   ├── local/
│   │   │   │   ├── AppDatabase.kt
│   │   │   │   ├── HashDao.kt
│   │   │   │   └── WarningLogDao.kt
│   │   │   ├── remote/
│   │   │   │   └── ApiService.kt
│   │   │   └── repository/
│   │   │       ├── HashRepository.kt
│   │   │       └── WarningRepository.kt
│   │   ├── domain/
│   │   │   ├── model/
│   │   │   │   ├── HashEntry.kt
│   │   │   │   ├── WarningLog.kt
│   │   │   │   └── ScamReport.kt
│   │   │   └── usecase/
│   │   │       ├── CheckHashUseCase.kt
│   │   │       ├── AnalyzeTextUseCase.kt
│   │   │       └── ReportScamUseCase.kt
│   │   ├── service/
│   │   │   ├── ClipboardMonitorService.kt
│   │   │   ├── NotificationListenerService.kt
│   │   │   ├── APKAuditorService.kt
│   │   │   └── OverlayService.kt
│   │   ├── ml/
│   │   │   ├── TinyBERTInferenceEngine.kt
│   │   │   ├── TextTokenizer.kt
│   │   │   └── APKAnalyzer.kt
│   │   ├── ui/
│   │   │   ├── dashboard/
│   │   │   │   ├── DashboardActivity.kt
│   │   │   │   └── DashboardViewModel.kt
│   │   │   ├── settings/
│   │   │   │   ├── SettingsActivity.kt
│   │   │   │   └── SettingsViewModel.kt
│   │   │   └── report/
│   │   │       ├── ReportActivity.kt
│   │   │       └── ReportViewModel.kt
│   │   └── util/
│   │       ├── HashUtils.kt
│   │       ├── NotificationUtils.kt
│   │       └── Constants.kt
│   ├── res/
│   │   ├── layout/
│   │   ├── drawable/
│   │   ├── values/
│   │   └── raw/
│   │       └── tinybert_model.tflite
│   └── AndroidManifest.xml
├── build.gradle.kts
└── proguard-rules.pro
```

### 6.3. Key Implementation Details

**ClipboardMonitorService (Kotlin):**
```kotlin
class ClipboardMonitorService : Service() {
    private lateinit var clipboardManager: ClipboardManager
    private lateinit var hashRepository: HashRepository
    
    override fun onCreate() {
        super.onCreate()
        clipboardManager = getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager
        clipboardManager.addPrimaryClipChangedListener {
            val clip = clipboardManager.primaryClip
            if (clip != null && clip.itemCount > 0) {
                val text = clip.getItemAt(0).text.toString()
                processClipboardText(text)
            }
        }
    }
    
    private suspend fun processClipboardText(text: String) {
        val accountNumber = extractAccountNumber(text)
        if (accountNumber != null) {
            val hash = HashUtils.sha256(accountNumber)
            val isScammer = hashRepository.checkHash(hash)
            if (isScammer) {
                showWarningOverlay(accountNumber)
            }
        }
    }
}
```

**TinyBERTInferenceEngine (Kotlin):**
```kotlin
class TinyBERTInferenceEngine(context: Context) {
    private val interpreter: Interpreter
    
    init {
        val model = FileUtil.loadMappedFile(context, "tinybert_model.tflite")
        val options = Interpreter.Options().apply {
            setNumThreads(4)
        }
        interpreter = Interpreter(model, options)
    }
    
    fun analyzeText(text: String): Float {
        val tokens = TextTokenizer.tokenize(text)
        val inputArray = tokens.toIntArray()
        val outputArray = Array(1) { FloatArray(2) }
        
        interpreter.run(inputArray, outputArray)
        
        return outputArray[0][1] // Confidence score untuk class "scam"
    }
}
```

---

## 7. SCREENSHOT MOCKUP INTERFACE

*(Bagian ini akan diisi screenshot/mockup setelah UI diimplementasi)*

**Mockup yang Akan Dibuat:**
1. Dashboard utama (status perlindungan, statistik)
2. Warning overlay (saat user paste rekening penipu)
3. Notification warning (saat pesan scam terdeteksi)
4. APK warning (saat APK berbahaya terdeteksi)
5. Settings page (sensitivity, whitelist/blacklist)
6. Report page (lapor rekening penipu)
7. Log page (riwayat warning yang pernah ditampilkan)

---

## 8. DOKUMENTASI CARA PENGGUNAAN

### 8.1. Instalasi

**Untuk User:**
1. Download APK JagaKu dari website resmi atau Play Store (jika tersedia)
2. Install APK (izinkan "Install from unknown sources" jika sideload)
3. Buka app JagaKu
4. Grant permissions yang diminta:
   - Notification access (untuk baca notifikasi WA/Telegram)
   - Display over other apps (untuk tampilkan warning overlay)
   - Usage access (untuk deteksi app M-Banking yang dibuka)
5. JagaKu otomatis jalan di background

**Untuk Demo Gemastik:**
1. Siapkan HP Android (Android 10+ recommended)
2. Install APK JagaKu via sideloading
3. Install M-Banking app (BCA/Mandiri/dll) untuk demo
4. Siapkan skenario demo (lihat section 8.3)

### 8.2. Penggunaan Sehari-hari

**Passive Protection (Otomatis):**
- JagaKu jalan di background 24/7
- Tidak perlu dibuka manual
- Warning muncul otomatis saat ada ancaman

**Active Actions (Manual):**
- **Lapor Penipuan:** Buka app → tap "Lapor Penipuan" → input nomor rekening penipu → submit
- **Cek Rekening:** Buka app → tap "Cek Rekening" → input nomor rekening → lihat hasil
- **Lihat Log:** Buka app → tap "Log" → lihat riwayat warning

### 8.3. Skenario Demo untuk Gemastik

**Demo 1: Clipboard Shield (Dramatis)**
```
1. Siapkan 2 HP: HP penipu & HP korban (dengan JagaKu terinstall)
2. HP penipu: Kirim WA "Paket tertahan, bayar ke rekening 1234567890"
3. HP korban: Buka WA, copy nomor rekening
4. HP korban: Buka app M-Banking
5. HP korban: Paste nomor rekening
6. JagaKu: Overlay muncul dramatis "🚨 REKENING INI PENIPU!"
7. Juri: Wow, impressed
```

**Demo 2: Notification Scanner**
```
1. HP penipu: Kirim WA "Anda menang undian Rp100 juta, klik link ini"
2. HP korban: Notifikasi WA muncul
3. JagaKu: Warning muncul "⚠️ Pesan ini terdeteksi scam"
4. Juri: Lihat real-time detection
```

**Demo 3: APK Fraud Auditor**
```
1. Siapkan APK fraud dummy (minta Accessibility Service)
2. Install APK di HP dengan JagaKu
3. JagaKu: Warning muncul "⚠️ APK ini berbahaya"
4. Juri: Lihat APK analysis
```

---

## 9. KEUNGGULAN KOMPETITIF & ANALISIS PASAR

### 9.1. Keunggulan Kompetitif

**vs Kredibel/CekRekening.id:**
- ✅ Proactive vs Reactive (otomatis vs manual)
- ✅ Real-time protection vs Lookup only
- ✅ Mobile app vs Web only
- ✅ Deep OS integration vs Surface-level

**vs Scamwise/Scamadviser:**
- ✅ Indonesian context (database scam lokal)
- ✅ On-device AI (privacy-preserving)
- ✅ Clipboard/APK protection (mereka tidak punya)
- ✅ Proactive defense (mereka passive checker)

**vs Ask Silver:**
- ✅ On-device processing (mereka cloud-based)
- ✅ Bahasa Indonesia optimized (mereka English-focused)
- ✅ Real-time protection (mereka manual analysis)
- ✅ Free (mereka subscription)

**vs Fokal (Juara Gemastik 2025):**
- ✅ Domain berbeda: financial scam vs parental control
- ✅ AI berbeda: on-device NLP vs cloud-based computer vision
- ✅ Privacy: fully local vs kirim screenshot ke server
- ✅ Battery: event-driven vs screen recording terus-menerus

### 9.2. Analisis Pasar

**Target Market:**
- **Primary:** Pengguna Android Indonesia (170+ juta user)
- **Secondary:** Institusi keuangan (bank, e-wallet) untuk partnership
- **Tertiary:** Pemerintah (Kominfo, OJK) untuk kolaborasi

**Market Size:**
- Total Addressable Market (TAM): 170 juta user Android Indonesia
- Serviceable Available Market (SAM): 50 juta user yang aktif transaksi digital
- Serviceable Obtainable Market (SOM): 1 juta user di tahun pertama

**Monetization Strategy:**
1. **Freemium Model:**
   - Free: Basic protection (clipboard, notification, APK)
   - Premium (Rp10.000/bulan): Advanced features (real-time chat analysis, priority support)

2. **B2B Partnership:**
   - API licensing untuk bank/e-wallet (integrasi JagaKu ke mobile banking mereka)
   - White-label solution untuk institusi keuangan

3. **Data Analytics (Anonymized):**
   - Jual insights tentang tren kejahatan siber ke pemerintah/researcher
   - Tetap privacy-preserving (tidak ada data pribadi)

---

## 10. DAMPAK & SUSTAINABILITY

### 10.1. Dampak yang Diharapkan

**Dampak Sosial:**
- **Mengurangi kerugian finansial** masyarakat akibat penipuan online
  - Target: Cegah 10.000+ kasus/tahun (estimasi Rp50 Miliar+ kerugian yang dicegah)
- **Meningkatkan literasi digital** tentang bahaya kejahatan siber
  - Target: 1 juta+ user teredukasi melalui warning & tips
- **Membangun kepercayaan** dalam transaksi digital
  - Target: User lebih confident saat belanja online/transfer

**Dampak Ekonomi:**
- **Mengurangi beban** bank/e-wallet dalam menangani fraud
  - Estimasi: Bank hemat Rp10 Miliar+/tahun dari pengurangan fraud loss
- **Menciptakan lapangan kerja** (developer, data scientist, customer support)
  - Target: 10+ karyawan di tahun ke-2
- **Mendorong inovasi** di bidang cybersecurity Indonesia
  - Target: Jadi referensi untuk startup anti-scam lain

**Dampak Teknologi:**
- **Memajukan on-device AI** untuk Bahasa Indonesia
  - Kontribusi: TinyBERT model untuk scam detection (open-source)
- **Membangun dataset** scam Indonesia untuk riset
  - Kontribusi: Dataset crowdsourcing (anonymized) untuk akademisi
- **Arsitektur referensi** untuk privacy-preserving AI
  - Kontribusi: Paper ilmiah tentang on-device NLP

### 10.2. Sustainability Plan

**Jangka Pendek (Tahun 1):**
- Fokus: User acquisition & product-market fit
- Target: 100.000 user aktif
- Revenue: Freemium + pilot project dengan 1-2 bank
- Funding: Bootstrap + grant dari Kominfo/OJK

**Jangka Menengah (Tahun 2-3):**
- Fokus: Scale & monetization
- Target: 1 juta user aktif
- Revenue: B2B partnership dengan 5-10 bank/e-wallet
- Funding: Series A (venture capital)
- Expansion: Tambah fitur (real-time chat analysis, call scam detection)

**Jangka Panjang (Tahun 4-5):**
- Fokus: Market leader & international expansion
- Target: 10 juta user aktif (Indonesia) + ekspansi ke Asia Tenggara
- Revenue: Multi-million dollar ARR dari B2B + premium
- Exit: Acquisition oleh bank besar atau IPO

### 10.3. Risk Mitigation

**Risk 1: Google Play Store Rejection**
- **Risk:** App ditolak karena pakai Accessibility Service/overlay
- **Mitigation:** 
  - Untuk retail: Submit ke Play Store dengan justifikasi kuat (security app)
  - Untuk enterprise: Distribusi via MDM (Mobile Device Management)
  - Untuk demo Gemastik: Sideloading APK (tidak lewat Play Store)

**Risk 2: Low User Adoption**
- **Risk:** User tidak mau install karena privacy concern
- **Mitigation:**
  - Transparency: Jelaskan data tidak keluar dari HP
  - Education: Campaign tentang bahaya scam
  - Social proof: Testimonial dari user yang terhindar dari penipuan

**Risk 3: False Positive**
- **Risk:** JagaKu salah deteksi pesan legitimate sebagai scam
- **Mitigation:**
  - Threshold confidence 80% (tidak terlalu sensitif)
  - User bisa dismiss warning
  - Whitelist feature (user bisa whitelist kontak terpercaya)
  - Continuous learning dari user feedback

**Risk 4: Competitor Response**
- **Risk:** Kredibel/Truecaller tambah fitur serupa
- **Mitigation:**
  - First-mover advantage (kita duluan di proactive defense)
  - Deep OS integration (sulit ditiru)
  - Network effect (database crowdsourcing makin besar)
  - Patent arsitektur on-device AI

---

## 11. LAMPIRAN

### 11.1. Referensi

1. **Dataset Scam Indonesia:**
   - kmkurn/id-nlp-resource (GitHub) - SMS Spam Indonesia dataset
   - Kaggle datasets - Indonesian scam messages

2. **Android APIs:**
   - NotificationListenerService: https://developer.android.com/reference/android/service/notification/NotificationListenerService
   - ClipboardManager: https://developer.android.com/reference/android/content/ClipboardManager
   - UsageStatsManager: https://developer.android.com/reference/android/app/usage/UsageStatsManager

3. **AI/ML:**
   - TinyBERT: https://arxiv.org/abs/1909.10351
   - TensorFlow Lite: https://www.tensorflow.org/lite
   - MobileBERT: https://arxiv.org/abs/2004.02984

4. **Kompetitor:**
   - Kredibel.co.id: https://kredibel.co.id
   - CekRekening.id: https://cekrekening.id
   - Scamwise: https://scamwise.co.uk
   - Scamadviser: https://www.scamadviser.com
   - Ask Silver: https://asksilver.com

5. **Regulasi:**
   - UU PDP (Perlindungan Data Pribadi): UU No. 27 Tahun 2022
   - POJK tentang Perlindungan Konsumen: POJK No. 6/POJK.07/2022

### 11.2. Daftar Komponen & Lisensi

| Komponen | Lisensi | Keterangan |
|----------|---------|------------|
| Kotlin | Apache 2.0 | Bahasa pemrograman utama |
| Android Jetpack | Apache 2.0 | Komponen modern Android |
| TensorFlow Lite | Apache 2.0 | Runtime untuk on-device AI |
| Room Database | Apache 2.0 | Local storage (SQLite wrapper) |
| Retrofit | Apache 2.0 | HTTP client |
| OkHttp | Apache 2.0 | Network layer |
| Material Design 3 | Apache 2.0 | UI/UX guidelines |
| TinyBERT Model | MIT | Model NLP on-device |
| JUnit | EPL 1.0 | Unit testing framework |
| Mockito | MIT | Mocking framework |
| Espresso | Apache 2.0 | UI testing framework |

### 11.3. Timeline Pengembangan

| Minggu | Fase | Deliverable |
|--------|------|-------------|
| 1-4 | Research & Prototyping | Prototype TinyBERT, validasi workaround clipboard |
| 5-6 | Core: Clipboard Shield | ClipboardMonitorService, OverlayService |
| 7-8 | Core: Notification Scanner | NotificationListenerService, TinyBERT integration |
| 9-10 | Core: APK Auditor | APKAuditorService, permission analysis |
| 11-12 | UI/UX & Polish | Dashboard, settings, warnings, reporting |
| 13-14 | Testing & Optimization | Unit test, integration test, performance optimization |
| 15-16 | Deployment & Documentation | Build APK, dokumentasi, video demo, presentasi |

### 11.4. Anggaran (Estimasi)

| Item | Biaya | Keterangan |
|------|-------|------------|
| Server (cloud) | Rp500.000/bulan | Untuk sync database & API |
| Domain & SSL | Rp200.000/tahun | Website resmi |
| Google Play Developer | $25 (sekali bayar) | Publish ke Play Store |
| Testing devices | Rp5.000.000 | 2-3 HP Android untuk testing |
| Marketing | Rp2.000.000/bulan | Social media ads, campaign |
| **Total (6 bulan)** | **~Rp15.000.000** | Bootstrap dari tim |

### 11.5. Tim & Peran

| Nama | Peran | Keahlian |
|------|-------|----------|
| [Ketua Tim] | Project Manager & Backend Developer | Kotlin, Android, API design |
| [Anggota 1] | AI/ML Engineer | TensorFlow Lite, NLP, TinyBERT |
| [Anggota 2] | UI/UX Designer & Frontend Developer | Material Design, Figma, Kotlin |

**Dosen Pembimbing:**
- [Nama Dosen] - Expertise: Cybersecurity, Mobile Development

---

## PENUTUP

**JagaKu** adalah solusi inovatif untuk mengatasi krisis kejahatan siber finansial di Indonesia. Dengan pendekatan **proactive defense** berbasis **on-device AI**, JagaKu mampu melindungi pengguna secara otomatis bahkan ketika mereka tidak menyadari adanya ancaman.

**Keunggulan Utama:**
1. ✅ **First-of-its-kind** di Indonesia (tidak ada kompetitor langsung)
2. ✅ **Deep engineering** (bukan CRUD app biasa)
3. ✅ **Direct people impact** (melindungi masyarakat dari kerugian finansial)
4. ✅ **Privacy-preserving** (100% on-device, UU PDP compliant)
5. ✅ **Demo-able** (bisa didemokan secara dramatis di depan juri)

**Kesesuaian dengan Pola Juara Gemastik:**
- ✅ **Deep engineering** (on-device AI, OS-level integration) - seperti TB Vector
- ✅ **Isu nasional mendesak** (kejahatan siber finansial) - seperti TB Vector
- ✅ **Direct people impact** (melindungi masyarakat) - seperti Snailly, Aira
- ✅ **Demo fisik dramatis** (overlay muncul saat user mau transfer) - seperti semua juara

**Call to Action:**
Mari bersama-sama membangun Indonesia yang lebih aman dari kejahatan siber. JagaKu - Jaga Kamu dari Penipu.

---

**Dokumen ini disusun untuk kompetisi GEMASTIK XIX 2026 Divisi VIII Pengembangan Perangkat Lunak.**

**Terakhir diupdate:** 9 Juli 2026

**Versi:** 1.1 (Draft Proposal dengan Versi Spesifik)
