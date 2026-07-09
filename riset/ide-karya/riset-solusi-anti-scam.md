# Riset Solusi Anti-Scam/Spam/Phishing — Landscape Global & Indonesia

> Riset dilakukan 9 Juli 2026. Tujuan: memetakan solusi yang sudah ada, mengidentifikasi gap, dan mengevaluasi potensi sebagai ide karya Gemastik PPL 2026.

---

## 1. Solusi Global (Internasional)

### 1.1 Truecaller

| Aspek | Detail |
|-------|--------|
| **Developer** | Truecaller AB (Swedia) |
| **User base** | 450+ juta pengguna global |
| **Pendekatan teknis** | Crowdsourced database + AI pattern recognition |
| **Fitur utama** | Caller ID, spam blocking, SMS fraud detection, identifikasi akun WhatsApp/Telegram palsu |
| **NLP/Bahasa** | Multi-bahasa, tapi NLP utama berbasis Inggris |
| **On-device vs Cloud** | Cloud-based (butuh internet) |
| **Model harga** | Freemium — Premium ~Rp 50.000-80.000/bulan |
| **Kelemahan** | Bergantung pada crowdsourcing (data bisa outdated), butuh koneksi internet, privasi data kontroversial (upload kontak), tidak ada NLP khusus Bahasa Indonesia untuk deteksi penipuan teks |
| **Riwayat kompetisi** | N/A (produk komersial) |

### 1.2 Nomorobo

| Aspek | Detail |
|-------|--------|
| **Developer** | Nomorobo (AS) |
| **User base** | Jutaan pengguna (AS & Kanada) |
| **Pendekatan teknis** | Network-level protection (VoIP), blacklist database |
| **Fitur utama** | Spam call blocking, robocall blocking, spam text filtering |
| **NLP/Bahasa** | Tidak ada NLP — berbasis blacklist/pattern matching |
| **On-device vs Cloud** | Network-level (operator-side) |
| **Model harga** | $1.99/bulan (personal), enterprise pricing tersedia |
| **Kelemahan** | Hanya AS/Kanada, tidak mendukung nomor Indonesia, tidak ada analisis konten pesan, bergantung VoIP |
| **Riwayat kompetisi** | N/A |

### 1.3 Hiya

| Aspek | Detail |
|-------|--------|
| **Developer** | Hiya Inc. (AS) |
| **User base** | 550+ juta orang terlindungi |
| **Pendekatan teknis** | AI-native voice security, network-level (bekerja sama dengan operator seluler) |
| **Fitur utama** | Call protection, spam/fraud detection real-time, analytics dashboard untuk operator |
| **NLP/Bahasa** | AI pattern recognition (bukan NLP teks), multilingual |
| **On-device vs Cloud** | Network-level + cloud AI |
| **Model harga** | B2B (operator partnership), consumer app gratis |
| **Analisis volume** | 28+ miliar panggilan dianalisis per bulan |
| **Kelemahan** | B2B-focused (konsumen bergantung pada operator), tidak ada analisis konten SMS/chat, tidak tersedia spesifik untuk Indonesia |
| **Riwayat kompetisi** | N/A |

### 1.4 ScamShield (Singapura)

| Aspek | Detail |
|-------|--------|
| **Developer** | CSA Singapore (Cyber Security Agency) + Open Government Products |
| **User base** | Warga Singapura |
| **Pendekatan teknis** | AI classifier (ML model) + crowdsourced reports + government database |
| **Fitur utama** | Deteksi panggilan scam, filter SMS scam, channel WhatsApp 1799 untuk laporan, integrasi dengan polisi Singapura |
| **NLP/Bahasa** | AI classifier untuk teks SMS (Inggris, Mandarin, Melayu) |
| **On-device vs Cloud** | Hybrid (on-device filtering + cloud reporting) |
| **Model harga** | Gratis (pemerintah) |
| **Kelemahan** | Hanya untuk Singapura, tidak bisa digunakan di Indonesia, terbatas 3 bahasa resmi Singapura |
| **Riwayat kompetisi** | N/A (inisiatif pemerintah) |
| **Catatan penting** | **Model terbaik untuk ditiru** — government-backed, free, hybrid on-device/cloud, integrasi dengan lembaga penegak hukum |

### 1.5 CallApp

| Aspek | Detail |
|-------|--------|
| **Developer** | CallApp (Israel) |
| **User base** | 100+ juta unduhan |
| **Pendekatan teknis** | Crowdsourced + AI, cloud-based |
| **Fitur utama** | Caller ID, spam blocking, call recording, call analytics |
| **NLP/Bahasa** | Multi-bahasa dasar |
| **On-device vs Cloud** | Cloud-based |
| **Model harga** | Freemium — Premium ~$3-5/bulan |
| **Kelemahan** | Call recording bermasalah secara hukum di beberapa negara, butuh internet, tidak ada NLP untuk analisis penipuan teks Bahasa Indonesia |

### 1.6 Getcontact

| Aspek | Detail |
|-------|--------|
| **Developer** | Getcontact (Turki) |
| **User base** | 100+ juta unduhan |
| **Pendekatan teknis** | Crowdsourced caller ID database |
| **Fitur utama** | Caller ID, spam blocking, "bagaimana nama saya disimpan" feature |
| **NLP/Bahasa** | Mendukung Bahasa Indonesia (UI), tapi tidak ada NLP analisis konten penipuan |
| **On-device vs Cloud** | Cloud-based |
| **Model harga** | Freemium — Premium tersedia |
| **Kelemahan** | Fokus pada caller ID (bukan deteksi penipuan), privasi kontroversial (upload kontak), tidak ada analisis konten pesan |

### 1.7 Should I Answer

| Aspek | Detail |
|-------|--------|
| **Developer** | Should I Answer (Ceko) |
| **User base** | 50+ juta unduhan |
| **Pendekatan teknis** | Community-based reporting (crowdsourced) |
| **Fitur utama** | Caller ID, spam detection berbasis rating komunitas, per-number rating |
| **NLP/Bahasa** | Tidak ada NLP — berbasis rating/voting komunitas |
| **On-device vs Cloud** | Cloud-based |
| **Model harga** | Gratis (ad-supported) + Premium |
| **Kelemahan** | Bergantung pada partisipasi komunitas (efek cold-start), lambat update untuk scam baru, tidak ada analisis konten |
| **Versi Indonesia** | id.shouldianswer.net tersedia |

---

## 2. Solusi Indonesia

### 2.1 CekRekening.id (Kemenkominfo)

| Aspek | Detail |
|-------|--------|
| **Developer** | Kementerian Kominfo RI |
| **Pendekatan teknis** | Database rekening bank yang dilaporkan sebagai penipuan |
| **Fitur utama** | Pencarian rekening bank berdasarkan laporan penipuan, pelaporan rekening mencurigakan |
| **Status** | Website aktif (cekrekening.id), namun akses terbatas saat riset (403 error) |
| **Kelemahan** | Hanya rekening bank (tidak mencakup e-wallet, crypto), reaktif (setelah korban melapor), tidak ada deteksi proaktif, tidak ada AI/NLP |

### 2.2 Aduan Kominfo

| Aspek | Detail |
|-------|--------|
| **Developer** | Kementerian Kominfo RI |
| **Pendekatan teknis** | Portal pelaporan konten negatif (termasuk penipuan online) |
| **Fitur utama** | Pelaporan website/phishing, pemblokiran situs |
| **Kelemahan** | Reaktif, proses lambat, tidak ada deteksi real-time, tidak ada AI |

### 2.3 Aplikasi yang Sudah Ada (Startup Lokal)

| Nama | Status | Catatan |
|------|--------|---------|
| Whisly | Tidak dapat diakses saat riset (transport error) | Startup lokal anti-scam |
| Kredivo/Akulaku fraud detection | Internal (bukan produk standalone) | Fintech punya deteksi internal |

---

## 3. Fitur Gojek/Tokopedia/E-commerce (Anti-Scam Internal)

| Platform | Fitur Anti-Scam | Catatan |
|----------|-----------------|---------|
| **Gojek** | Verifikasi driver, in-app chat (no external links), fraud detection AI | Internal, bukan produk standalone |
| **Tokopedia** | Rekening bersama, buyer protection, AI fraud detection | Internal, fokus transaksi |
| **Shopee** | Shopee Guarantee, chat monitoring | Internal |
| **Bank Jago/BCA** | Deteksi transaksi mencurigakan, limit transfer | Internal banking |

**Gap:** Semua solusi e-commerce/fintech hanya melindungi transaksi DI DALAM platform mereka. Tidak ada yang melindungi pengguna dari penipuan lintas-platform (WhatsApp, Telegram, SMS, telepon).

---

## 4. Riset Akademis & Kompetisi Mahasiswa

### 4.1 Riset Akademis (Global)

| Paper/Riset | Tahun | Pendekatan | Bahasa |
|-------------|-------|------------|--------|
| Phishing detection via NLP (BERT-based) | 2023-2024 | Transformer/NLP untuk klasifikasi email phishing | Inggris |
| SMS spam detection (CNN/LSTM) | 2022-2024 | Deep learning untuk klasifikasi SMS spam | Inggris |
| Voice scam detection (audio analysis) | 2023-2024 | Audio features + ML untuk deteksi scam call | Inggris |
| Multi-modal fraud detection | 2024 | Teks + metadata + behavioral signals | Inggris |

### 4.2 Riset Akademis (Indonesia)

| Riset | Institusi | Pendekatan | Status |
|-------|-----------|------------|--------|
| Deteksi phishing URL Bahasa Indonesia | UI/ITB/UGM | ML klasifikasi URL | Paper tersedia |
| NLP hoax detection Bahasa Indonesia | Beberapa universitas | BERT/IndoBERT untuk klasifikasi teks | Paper tersedia |
| Spam SMS detection Bahasa Indonesia | Beberapa universitas | Naive Bayes, SVM, LSTM | Paper tersedia |

### 4.3 Kompetisi Mahasiswa

Belum ditemukan entri kompetisi mahasiswa Indonesia yang spesifik tentang anti-scam/phishing detection. Mayoritas karya mahasiswa di bidang keamanan siber fokus pada:
- Network intrusion detection
- Malware analysis
- Web application security

---

## 5. Gap Analysis — Apa yang Belum Ada?

### 5.1 Gap Teknis

| Gap | Deskripsi | Peluang |
|-----|-----------|---------|
| **NLP Bahasa Indonesia untuk scam** | Tidak ada solusi yang menggunakan NLP khusus Bahasa Indonesia untuk mendeteksi penipuan di SMS/WhatsApp/Telegram | Model NLP (IndoBERT/fine-tuned LLM) yang trained pada corpus scam Indonesia |
| **On-device processing** | Semua solusi utama butuh internet (cloud-based) | Edge AI yang berjalan offline di HP Android |
| **Cross-platform protection** | Tidak ada yang melindungi semua channel (telepon, SMS, WhatsApp, Telegram, email) sekaligus | Unified scam detection layer |
| **Real-time voice scam detection** | Belum ada yang menganalisis percakapan telepon secara real-time untuk deteksi scam | On-device ASR + NLP untuk analisis percakapan |
| **Contextual scam detection** | Solusi saat ini hanya pattern matching, tidak memahami konteks percakapan | AI yang memahami alur percakapan (misal: "transfer sekarang atau akun diblokir" = scam pattern) |

### 5.2 Gap Pasar Indonesia

| Gap | Deskripsi |
|-----|-----------|
| **Tidak ada ScamShield Indonesia** | Singapura punya ScamShield (government-backed, free, AI-powered). Indonesia belum punya equivalent |
| **CekRekening.id reaktif** | Hanya database rekening yang sudah dilaporkan — tidak proaktif mendeteksi |
| **Tidak ada integrasi e-wallet** | Penipuan via QRIS, GoPay, OVO, DANA belum terdeteksi oleh tools pemerintah |
| **Literasi digital rendah** | 60%+ penduduk Indonesia memiliki literasi digital rendah (Kominfo 2023) — butuh proteksi otomatis |

### 5.3 Gap yang Bisa Diisi untuk Gemastik PPL 2026

1. **On-device NLP scam detector Bahasa Indonesia** — model ringan (TFLite/ONNX) yang berjalan di HP tanpa internet
2. **Cross-platform scam shield** — melindungi SMS, WhatsApp, Telegram, dan telepon sekaligus
3. **Real-time conversation analysis** — AI yang mendengarkan percakapan telepon dan memberi peringatan jika terdeteksi pola scam
4. **Integrasi dengan ekosistem Indonesia** — rekening bank + e-wallet + QRIS, lapor ke Cekrekening.id otomatis
5. **Community-powered + AI hybrid** — kombinasi crowdsourcing (seperti ScamShield) dengan AI detection

---

## 6. Matriks Perbandingan Solusi

| Solusi | NLP ID | On-Device | Cross-Platform | Real-Time | Gratis | Indonesia |
|--------|--------|-----------|----------------|-----------|--------|-----------|
| Truecaller | ❌ | ❌ | Sebagian | ❌ | ❌ | ❌ |
| Nomorobo | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Hiya | ❌ | ❌ | ❌ | ✅ (call) | ✅ | ❌ |
| ScamShield SG | ❌ (Melayu) | Hybrid | Sebagian | ❌ | ✅ | ❌ (SG) |
| Getcontact | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| CallApp | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Should I Answer | ❌ | ❌ | ❌ | ❌ | ✅ | ⚠️ |
| CekRekening.id | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| **GAP (peluang kita)** | **✅** | **✅** | **✅** | **✅** | **✅** | **✅** |

---

## 7. Kesimpulan & Rekomendasi Arah

### Potensi sebagai Ide Karya Gemastik PPL 2026

**Kekuatan ide anti-scam:**
- Isu nasional sangat mendesak (kerugian penipuan online Indonesia triliunan rupiah/tahun)
- Gap teknis yang jelas (tidak ada NLP Bahasa Indonesia + on-device)
- Model acuan jelas (ScamShield Singapura)
- Bisa demo langsung di depan juri (simulasi SMS/WhatsApp scam → AI deteksi real-time)
- Dataset bisa dikumpulkan sendiri (scraping laporan penipuan online, crowdsourcing)

**Kelemahan/risiko:**
- Kompetisi dengan Truecaller/Getcontact yang sudah punya user base besar
- Akses ke API WhatsApp/Telegram terbatas (bukan open API)
- Perlu dataset scam Bahasa Indonesia yang cukup besar untuk training
- Tidak ada komponen hardware/IoT (lemah di pilar "Hardware" Gemastik)
- Dosen pembimbing yang relevan (NLP/cybersecurity) perlu diidentifikasi

**Rekomendasi:** Ide ini kuat sebagai **software-only** entry, tapi perlu diferensiasi yang sangat jelas dari Truecaller/Getcontact. Kunci diferensiasi: **on-device NLP Bahasa Indonesia** + **real-time conversation analysis** + **integrasi ekosistem Indonesia**.

### Catatan untuk Diskusi Tim
- Bandingkan dengan ide Denteksi Edge yang sudah dipilih (skor 38 di evaluasi)
- Pertimbangkan apakah "anti-scam" bisa dikombinasikan dengan IoT/hardware untuk memperkuat pilar hardware
- Cek ketersediaan dosen NLP/cybersecurity di TRPL SV UGM
