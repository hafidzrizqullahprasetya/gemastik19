# Konsultasi: Proposal GEMASTIK vs Kritik Juri Liga Komatik

**Tanggal:** 13 Agustus 2026
**Tujuan:** Memetakan apa yang sudah diperbaiki di proposal GEMASTIK XIX 2026 berdasarkan kritik juri Liga Komatik 2026, serta mengidentifikasi inkonsistensi antara proposal dan kode aktual.

---

## Ringkasan Eksekutif

Proposal GEMASTIK sudah **secara signifikan lebih kuat** dari proposal Liga Komatik. Keempat kritik utama juri telah di-address dengan perubahan substantif, bukan sekadar tambal sulam. Namun ada beberapa **inkonsistensi antara proposal dan kode aktual** yang perlu diselesaikan sebelum submit.

---

## Bagian 1: Yang Sudah Diperbaiki dari Kritik Juri

### 1.1 Model NLP Indonesia (Nilai: 16/20)

**Kritik Juri:**
> "Perkuat model NLP Indonesia sendiri, bukan hanya dataset EMSCAD (berbahasa Inggris)."

**Perbaikan di Proposal GEMASTIK:**

| Aspek | Proposal Lama | Proposal Baru |
|-------|--------------|---------------|
| Pendekatan NLP | TF-IDF + XGBoost (diklaim aktif) | **LLM Reasoning** (bukan klasifikasi terpisah) |
| Justifikasi | Tidak ada | **Penjelasan ilmiah panjang** (Section F.1): dataset Indonesia tidak tersedia, EMSCAD tidak representatif, IndoNLU [9] |
| Classifier | Diklaim aktif | **STUB nonaktif** — diakui jujur di Tabel Struktur Kode |
| Future work | Tidak spesifik | **Fine-tuning IndoBERT** sebagai agenda terukur |
| Referensi | Tidak ada | **IndoNLU [9]** — kelangkaan data berlabel Indonesia |

**Kode aktual (`backend/app/services/nlp/classifier.py`):**
```python
"""NLP Pre-Screening — Layer 1 (STUB, nonaktif).
Dinonaktifkan karena dataset berlabel bahasa Indonesia belum tersedia —
roadmap: fine-tune IndoBERT setelah dataset terkumpul."""
```

**Verdict:** ✅ **Sesuai.** Proposal dan kode aktual sama-sama jujur bahwa classifier adalah STUB.

---

### 1.2 Dampak Kuantitatif (Nilai: 15/20)

**Kritik Juri:**
> "Dampak nyata Verifin sendiri belum diukur (user study baru rencana)."

**Perbaikan di Proposal GEMASTIK — Section B.3 baru:**

| Poin | Isi |
|------|-----|
| (1) Populasi | 7,28 juta pengangguran, 49% terekspos modus loker |
| (2) Estimasi penurunan risiko | Skenario ilustratif: 1000 verifikasi → 60 pengguna terhindar |
| (3) Network effect | Fraud Network Graph memperkuat deteksi kolektif |
| (4) TPPO | Memutus rantai perdagangan orang di tahap awal |
| (5) Sustainability | Biaya marginal rendah, nilai meningkat seiring data |

**Catatan:** Angka 60 pengguna adalah **skenario ilustratif dengan asumsi eksplisit**, bukan hasil pengukuran. Proposal dengan jujur menyatakan ini.

**Verdict:** ✅ **Ditambahkan.** Section B.3 baru yang substantif.

---

### 1.3 Screenshot Community & Riwayat (Nilai: 17/20)

**Kritik Juri:**
> "Lengkapi screenshot untuk halaman Community dan Riwayat."

**Perbaikan di Proposal GEMASTIK — Section G.5 baru:**

| Halaman | Screenshot | Deskripsi |
|---------|-----------|-----------|
| Komunitas | `mockup-community.png` | Form pelaporan entitas mencurigakan, moderasi admin, integrasi Fraud Network Graph |
| Riwayat | `mockup-riwayat.png` | Daftar verifikasi, badge verdict, Skor Risiko, sumber input, waktu pemeriksaan |

**Kode aktual:** Frontend memiliki halaman `/report` (community) dan `/report/[caseId]` (detail). Belum ada halaman riwayat yang dedicated di route list.

**Verdict:** ✅ **Ditambahkan.** Screenshot mockup untuk kedua halaman.

---

### 1.4 Detail Unit Testing & Evaluasi E2E (Nilai: 18/20)

**Kritik Juri:**
> "Tambahkan detail hasil unit testing (coverage, jumlah test case) dan evaluasi end-to-end."

**Perbaikan di Proposal GEMASTIK — Section F.6 baru:**

| Layer Pengujian | Isi |
|----------------|-----|
| (1) Unit testing | Per komponen: NER, penilaian LLM, validasi telepon, XAI explainer |
| (2) Integration testing | Orchestrator OSINT paralel, arsitektur satu query, failure handling |
| (3) E2E testing | Tiga kanal input (teks/gambar/URL) + kasus negatif, determinisme |
| (4) API testing | Endpoint `/verify`, `/community`, `/health` |

**Status jujur di proposal:**
> "Cakupan pengujian otomatis masih terpusat pada komponen inti pipeline; perluasan cakupan unit test menyeluruh dengan pengukuran coverage terdokumentasi serta otomasi dalam CI/CD merupakan bagian dari rencana penguatan kualitas pada agenda pengembangan lanjutan."

**Verdict:** ✅ **Ditambahkan.** Section F.6 baru yang jujur tentang keterbatasan.

---

## Bagian 2: Inkonsistensi Proposal vs Kode Aktual

### 2.1 LLM Model

| Aspek | Proposal | Kode Aktual |
|-------|----------|-------------|
| Model | `kimi-k3` (Tech Stack table) | `ag/gemini-3.6-flash-high` (`.env`) |
| Provider | Tidak disebut spesifik | Google Gemini API via OpenRouter |

**Dampak:** Proposal menyebut model yang tidak dipakai di kode. Juri bisa memverifikasi dengan membuka repo.

**Rekomendasi:** Update Tech Stack table di proposal untuk mencerminkan model aktual.

---

### 2.2 Ambang Verdict (Threshold)

| Verdict | Proposal Lama | Proposal Baru | Kode Aktual |
|---------|--------------|---------------|-------------|
| AMAN | 0-30 | **0-39** | **0-39** (`verifin_reasoning.py` line 188) |
| WASPADA | 31-70 | **40-74** | **40-74** |
| BAHAYA | 71-100 | **75-100** | **75-100** |

**Kode aktual (`verifin_reasoning.py` line 188):**
```python
verdict_limits = {"AMAN": (0, 39), "WASPADA": (40, 74), "BAHAYA": (75, 100)}
```

**Namun ada inkonsistensi di kode lain:**

| Lokasi | Threshold | Keterangan |
|--------|-----------|------------|
| `verifin_reasoning.py:188` | 0-39/40-74/75-100 | **Validation function** — yang benar |
| `verifin_reasoning.py:435` | AMAN <30, WASPADA <60, BAHAYA >=60 | **Fallback** — berbeda! |
| `router.py:489-492` | AMAN <40, WASPADA 40-74, BAHAYA >=75 | **Domain check** — berbeda! |

**Dampak:** Proposal baru sesuai dengan validation function, tapi fallback dan domain check menggunakan threshold berbeda.

**Rekomendasi:** Sinkronkan semua threshold di kode, lalu pastikan proposal sesuai.

---

### 2.3 S_dasar (Nilai Dasar)

| Aspek | Proposal | Kode Aktual |
|-------|----------|-------------|
| Nilai | **12 poin** | **12.0** (`shap_explainer.py:92`) |
| Deskripsi | "Konstanta kalibrasi heuristik" | "Baseline netral — UMKM valid sering 5-15" |
| Formula | `S_risiko = S_dasar + sum(phi_i)` | `f(x) = base_value + sum(phi_i)` |

**Verdict:** ✅ **Sesuai.** Proposal dan kode sama-sama menggunakan 12 sebagai nilai dasar.

---

### 2.4 Penalti Domain Tidak Ada (8 Poin)

| Aspek | Proposal | Kode Aktual |
|-------|----------|-------------|
| Penalti | **8 poin** jika tidak ada domain | **Tidak ditemukan** di kode |

**Pencarian di kode:** Tidak ada implementasi "8 poin penalti" untuk domain missing. Yang ada adalah bobot individual per fitur (mis. `domain_unreachable: 28.0`, `domain_new: 15.0`).

**Dampak:** Proposal mengklaim mekanisme yang belum diimplementasi di kode.

**Rekomendasi:** Implementasikan di kode, atau hapus dari proposal.

---

### 2.5 Frontend URL

| Aspek | Proposal | Deploy Aktual |
|-------|----------|---------------|
| URL | `frontend-kohl-one-32.vercel.app` | `verifin-app.vercel.app` |

**Dampak:** Proposal menyebut URL lama. Deploy terbaru menghasilkan URL berbeda.

**Rekomendasi:** Update proposal dengan URL deploy terbaru.

---

### 2.6 Backend URL

| Aspek | Proposal | Kode Aktual |
|-------|----------|-------------|
| URL | `verifin.pempekasliwongkito.my.id` | Sama |

**Verdict:** ✅ **Sesuai.**

---

## Bagian 3: Perubahan Signifikan Lainnya

### 3.1 Penambahan Baru di Proposal GEMASTIK

| Fitur | Deskripsi |
|-------|-----------|
| **Persona** | 2 persona (Andri 22, Sari 27) dengan skenario konkret |
| **Perbandingan solusi** | Tabel 5 solusi eksisting vs Verifin |
| **Estimasi dampak** | Section B.3 — 5 poin kuantitatif |
| **Penjelasan S_dasar** | Konstanta 12 poin, kalibrasi heuristik |
| **Mekanisme domain missing** | 8 poin penalti (belum di kode) |
| **Screenshot Community+Riwayat** | Section G.5 |
| **Pengujian 4 lapis** | Section F.6 |
| **Validasi 3 tingkat** | Section F.5 — komponen, E2E, manual |

### 3.2 Yang Dihilangkan dari Proposal Lama

| Fitur | Alasan |
|-------|--------|
| ROC-AUC 0,996 | Model EMSCAD tidak dipakai lagi |
| TF-IDF + XGBoost | Diganti LLM reasoning |
| Klaim classifier aktif | Jujur diakui sebagai STUB |

---

## Bagian 4: Checklist Sebelum Submit

### Harus Diperbaiki

- [ ] **LLM Model** — Update Tech Stack: `kimi-k3` → model aktual
- [ ] **Frontend URL** — Update ke `verifin-app.vercel.app`
- [ ] **Threshold fallback** — Sinkronkan `verifin_reasoning.py:435` dengan validation function
- [ ] **Domain missing penalty** — Implementasikan 8 poin di kode, atau hapus dari proposal

### Bisa Ditunda (Post-Submit)

- [ ] Test coverage measurement — sudah diakui sebagai future work
- [ ] Fine-tuning IndoBERT — future work
- [ ] User study — future work
- [ ] PII masking — future work (C8)

### Sudah Sesuai

- [x] S_dasar = 12 — konsisten proposal dan kode
- [x] Threshold validation (0-39/40-74/75-100) — konsisten
- [x] STUB classifier — jujur di proposal dan kode
- [x] Backend URL — konsisten
- [x] Formula XAI — `f(x) = base_value + sum(phi_i)` konsisten

---

## Bagian 5: Pertanyaan untuk Tim (Teknis)

### 5.1 Model LLM
> Proposal menyebut `kimi-k3`, tapi `.env` pakai `ag/gemini-3.6-flash-high`. Apakah ada rencana ganti model, atau proposal yang perlu di-update?

### 5.2 Threshold Fallback
> `verifin_reasoning.py:435` menggunakan threshold berbeda (AMAN <30, WASPADA <60, BAHAYA >=60) dari validation function (0-39/40-74/75-100). Apakah ini disengaja sebagai fallback, atau bug yang perlu diperbaiki?

### 5.3 Domain Missing Penalty
> Proposal mengklaim "8 poin penalti jika tidak ada domain", tapi kode tidak mengimplementasikan ini. Apakah akan diimplementasi sebelum submit, atau dihapus dari proposal?

### 5.4 Frontend URL
> Deploy terbaru menghasilkan `verifin-app.vercel.app`, tapi proposal masih menyebut `frontend-kohl-one-32.vercel.app`. URL mana yang akan disubmit?

### 5.5 Cover.png
> File cover.png di-regenerate (6.4MB → 7.1MB). Apakah sudah ada nama Pak Ganjar sebagai dospem?

### 5.6 Test Coverage
> Juri Liga Komatik minta "detail hasil unit testing (coverage, jumlah test case)". Proposal bilang ini "agenda pengembangan lanjutan". Apakah ada rencana menambah sebelum submit, atau tetap sebagai future work?

---

## Bagian 6: Yang Masih Kurang dari Proposal (Berdasarkan Kritik Juri)

Berdasarkan lembar penilaian juri, ada beberapa aspek yang **belum sepenuhnya terjawab** di proposal GEMASTIK meskipun sudah ada perbaikan:

### 6.1 Test Coverage — Belum Ada Angka Konkret

**Kritik juri:** "Tambahkan detail hasil unit testing (coverage, jumlah test case) dan evaluasi end-to-end."

**Yang sudah ada di proposal:** Section F.6 menjelaskan 4 lapis pengujian secara kualitatif.

**Yang masih kurang:**
- **Tidak ada angka coverage** (mis. "coverage 75%")
- **Tidak ada jumlah test case** (mis. "24 unit test, 8 integration test")
- **Tidak ada hasil E2E terdokumentasi** (mis. tabel hasil uji per kanal input)

**Yang bisa ditambahkan:**
```
Contoh yang bisa ditambahkan ke Section F.6:

"Saat ini terdapat X unit test untuk backend (pytest) yang mencakup:
- NER: Y test case (ekstraksi entitas dari Z layout berbeda)
- OSINT: Y test case (domain, telepon, perusahaan)
- XAI: Y test case (agregasi kontribusi, konsistensi skor)
- API: Y test case (endpoint /verify, /community, /health)

Coverage backend saat ini: Z% (dengan target peningkatan ke 80%+
pada agenda pengembangan lanjutan)."
```

**Pertanyaan untuk tim:**
> Apakah ada data aktual jumlah test dan coverage yang bisa dimasukkan ke proposal? Atau tetap kualitatif saja dengan penjelasan bahwa ini adalah future work?

---

### 6.2 Halaman Riwayat — Belum Ada di Frontend

**Kritik juri:** "Lengkapi screenshot untuk halaman Community dan Riwayat."

**Yang sudah ada di proposal:** Section G.5 menampilkan mockup Community dan Riwayat.

**Yang masih kurang:**
- **Halaman Riwayat belum ada di frontend** — route list Vercel hanya menunjukkan `/`, `/verify`, `/report`, `/report-job`, `/report/[caseId]`, `/admin`
- Mockup Riwayat adalah **desain, bukan screenshot nyata** dari aplikasi yang berjalan

**Kode aktual:** Frontend tidak memiliki halaman `/history` atau `/riwayat` yang dedicated. Riwayat hanya bisa diakses via API `/verify/history`.

**Pertanyaan untuk tim:**
> Apakah halaman Riwayat akan diimplementasi sebelum submit? Atau mockup sudah cukup untuk proposal?

---

### 6.3 User Study — Masih Sebatas Rencana

**Kritik juri:** "Dampak nyata Verifin sendiri belum diukur (user study baru rencana)."

**Yang sudah ada di proposal:** Section B.3 estimasi dampak kuantitatif dengan skenario ilustratif.

**Yang masih kurang:**
- **Tidak ada data pengguna nyata** — semua angka adalah proyeksi/ilustrasi
- **Tidak ada hasil uji terbatas** — meskipun hanya 5-10 pengguna
- **Tidak ada testimoni atau feedback awal**

**Yang bisa ditambahkan (jika ada waktu):**
```
"Uji coba terbatas telah dilakukan terhadap N pengguna
(mahasiswa/pencari kerja) dengan hasil:
- X% pengguna merasa lebih percaya diri menilai lowongan
- Y% pengguna berhasil mengidentifikasi lowongan penipuan
  yang sebelumnya tidak mereka sadari
- Z% pengguna menyatakan akan menggunakan Verifin secara rutin"
```

**Pertanyaan untuk tim:**
> Apakah ada rencana melakukan uji terbatas (meskipun kecil, 5-10 orang) sebelum submit untuk mendapatkan data nyata? Atau tetap mengandalkan estimasi ilustratif?

---

### 6.4 Evaluasi Model — Tidak Ada Angka Kinerja

**Kritik juri:** "Evaluasi model transparan (ROC-AUC 0,996)" — ini dipuji di proposal lama.

**Yang terjadi di proposal baru:** ROC-AUC 0,996 **dihilangkan** karena model EMSCAD tidak dipakai lagi.

**Yang masih kurang:**
- **Tidak ada angka kinerja pengganti** — proposal hanya bilang "evidence-based, bukan satu model terlatih"
- Juri yang sama bisa bertanya: "Kalau tidak ada ROC-AUC, bagaimana kami tahu sistem ini akurat?"
- **Tidak ada metrik evaluasi alternatif** — mis. presisi/recall deteksi entitas, akurasi verdict pada kasus uji

**Yang bisa ditambahkan:**
```
"Evaluasi sistem dilakukan pada N kasus uji nyata:
- K kasus lowongan legitimate: verdict AMAN = X/K (akurasi Y%)
- K kasus lowongan penipuan: verdict BAHAYA = X/K (akurasi Y%)
- K kasus borderline: verdict WASPADA = X/K (akurasi Y%)

Konsistensi deterministik: 100% (temperature=0, seed tetap)"
```

**Pertanyaan untuk tim:**
> Apakah ada data hasil uji E2E yang bisa dijadikan angka evaluasi? Berapa kasus yang sudah diuji dan berapa yang menghasilkan verdict benar?

---

### 6.5 Perbandingan dengan Solusi AI Lain

**Kritik juri:** Tidak ada kritik spesifik, tapi aspek inovasi hanya 16/20.

**Yang sudah ada di proposal:** Tabel perbandingan dengan job board, fitur lapor, Kredibel, imbauan pemerintah.

**Yang masih kurang:**
- **Tidak ada perbandingan dengan solusi AI/ML lain** — mis. model klasifikasi berbasis BERT, sistem deteksi phishing berbasis ML
- **Tidak ada penjelasan kenapa LLM reasoning > model terlatih** untuk domain ini (selain "dataset tidak tersedia")
- **Tidak ada diskusi tentang trade-off** — LLM lebih lambat dan mahal dari model klasik

**Pertanyaan untuk tim:**
> Apakah perlu ditambahkan perbandingan dengan pendekatan AI lain (mis. "Kenapa tidak pakai BERT? Kenapa tidak pakai rule-based murni?") untuk memperkuat aspek inovasi?

---

## Bagian 7: Pertanyaan Strategis — NLP STUB

### Konteks

Classifier NLP (`backend/app/services/nlp/classifier.py`) saat ini adalah **STUB nonaktif**:

```python
def classify_text(text: str) -> dict[str, Any]:
    """Stub — NLP Layer 1 nonaktif. Metadata jujur, pipeline tidak terpengaruh."""
    return {
        "enabled": False,
        "status": "STUB",
        "reason": "No labeled Indonesian dataset — roadmap: fine-tune IndoBERT",
        "behavioral_features": {},
    }
```

Pipeline saat ini:
```
Input → NER (regex + LLM) → OSINT → LLM Reasoning → XAI → Output
         (aktif)              (aktif)   (aktif)         (aktif)   (aktif)
         NLP Classifier: STUB (tidak dipakai)
```

### Pertanyaan untuk Tim

#### 7.1 Apakah STUB akan diaktifkan sebelum submit?

**Opsi A: Aktifkan rule-based sederhana**
- Buat classifier rule-based sederhana (keyword matching) untuk deteksi sinyal perilaku
- Contoh: deteksi "transfer", "deposit", "KTP", "gaji fantastis" via regex
- **Kelebihan:** Ada angka kinerja yang bisa dilaporkan, tidak sepenuhnya "kosong"
- **Kekurangan:** Rule-based rapuh, bisa false positive/negative tinggi, juri bisa kritik "ini bukan AI"

**Opsi B: Tetap STUB, perkuat justifikasi**
- Pertahankan STUB, tapi tambahkan penjelasan lebih detail di proposal
- Jelaskan bahwa LLM reasoning sudah mencakup fungsi classifier
- **Kelebihan:** Jujur, tidak over-claim, sesuai kode aktual
- **Kekurangan:** Juri bisa bertanya "kenapa tidak ada model NLP?"

**Opsi C: Hapus STUB dari arsitektur**
- Hapus `classifier.py` dari pipeline, jadikan murni 3-layer (NER → OSINT → LLM → XAI)
- Update proposal: tidak ada "Layer 1 NLP" lagi
- **Kelebihan:** Arsitektur lebih sederhana dan jujur
- **Kekurangan:** Kehilangan "NER+OSINT+Fraud Graph+XAI hybrid" yang dipuji juri

**Pertanyaan:**
> Opsi mana yang dipilih? Apakah ada waktu untuk implementasi rule-based sederhana, atau lebih baik perkuat justifikasi LLM reasoning?

---

#### 7.2 Bagaimana menjawab juri yang bertanya "Mana model NLP-nya?"

Skenario: Juri GEMASTIK membaca proposal, melihat arsitektur 4-layer, lalu bertanya:
> "Layer 1 NER — mana model NLP-nya? Apakah ini hanya regex?"

**Jawaban yang bisa disiapkan:**

**Versi A (jujur, defensive):**
> "Layer 1 menggunakan NER hibrida: regex untuk entitas struktural (telepon, email, URL) dan LLM untuk entitas semantik (nama perusahaan, lokasi, gaji). Kami tidak menggunakan model klasifikasi terpisah karena dataset berlabel lowongan penipuan berbahasa Indonesia belum tersedia secara publik. Keputusan ini didukung temuan IndoNLU [9] bahwa kelangkaan data berlabel adalah hambatan utama riset NLP Indonesia."

**Versi B (proaktif, highlight LLM):**
> "Penilaian sinyal perilaku teks dilakukan oleh LLM reasoning pada Layer 3, bukan model klasifikasi terpisah. LLM lebih unggul untuk domain ini karena: (1) agnostik-bahasa — memahami konteks Indonesia tanpa korpus khusus; (2) evidence-constrained — setiap klaim harus merujuk bukti OSINT; (3) explainable — kontribusi setiap faktor dapat diaudit via XAI."

**Versi C (akui keterbatasan, tawarkan roadmap):**
> "Saat ini classifier adalah STUB karena kami memprioritaskan bukti objektif OSINT daripada model yang dilatih pada korpus tidak representatif. Roadmap kami: (1) kumpulkan data laporan komunitas, (2) fine-tune IndoBERT, (3) integrasikan sebagai Layer 1 aktif."

**Pertanyaan:**
> Versi jawaban mana yang paling sesuai dengan strategi tim? Apakah ada skenario lain yang perlu disiapkan?

---

#### 7.3 Apakah perlu menambahkan "Layer 1" di proposal jika kenyataannya STUB?

**Dilema:** Proposal menyebut "4-layer architecture" (NER → OSINT → LLM → XAI), tapi Layer 1 NER sebagian adalah STUB.

**Opsi penanganan:**

| Opsi | Tindakan | Risiko |
|------|----------|--------|
| A | Pertahankan "4-layer", jelaskan STUB dengan jujur | Juri bisa kritik "tidak ada model NLP" |
| B | Ubah jadi "3-layer + fallback", hilangkan STUB dari diagram | Kehilangan kesan "hybrid" yang dipuji |
| C | Aktifkan rule-based sederhana, jadikan Layer 1 nyata | Over-claim, bisa dikritik "rule-based bukan AI" |

**Pertanyaan:**
> Opsi mana yang paling aman untuk GEMASTIK? Apakah juri lebih menghargai kejujuran atau kelengkapan arsitektur?

---

#### 7.4 Bagaimana strategi menjawab kritik "ROC-AUC hilang"?

**Konteks:** Proposal lama dipuji karena "evaluasi model transparan (ROC-AUC 0,996)". Proposal baru menghilangkan angka ini.

**Skenario juri bertanya:**
> "Di proposal sebelumnya ada ROC-AUC 0,996. Sekarang tidak ada. Apakah modelnya jadi lebih buruk?"

**Jawaban yang bisa disiapkan:**

**Versi A (jelaskan konteks):**
> "ROC-AUC 0,996 berasal dari evaluasi pada dataset EMSCAD (17.880 lowongan berbahasa Inggris). Kami tidak melaporkan angka ini karena korpus tersebut tidak representatif terhadap ragam bahasa Indonesia. Sebagai gantinya, kami melakukan validasi 3 tingkat: komponen OSINT, E2E tiga kanal input, dan perbandingan dengan pencarian manual."

**Versi B (alihkan ke metrik baru):**
> "Sistem kami evidence-based, bukan satu model terlatih, sehingga ROC-AUC tidak applicable. Sebagai gantinya, kami mengukur: (1) konsistensi deterministik 100%, (2) akurasi verdict pada kasus uji nyata, (3) coverage bukti OSINT per analisis."

**Versi C (akui trade-off):**
> "Kami mengorbankan angka ROC-AUC demi kejujuran ilmiah. Model EMSCAD tidak dipakai karena tidak representatif. Sebagai gantinya, kami menawarkan transparansi penuh: setiap verdict dapat diaudit via XAI, dan setiap klaim LLM harus merujuk bukti OSINT."

**Pertanyaan:**
> Versi mana yang paling kuat? Apakah ada data evaluasi alternatif yang bisa ditambahkan?

---

#### 7.5 Apakah perlu menambahkan "Layer 1 aktif" sebagai stretch goal?

**Ide:** Tambahkan di proposal bahwa Layer 1 akan diaktifkan dengan rule-based sederhana sebagai "stretch goal" sebelum final.

**Contoh teks:**
```
"Sebagai stretch goal sebelum final GEMASTIK, Layer 1 akan
diaktifkan dengan classifier rule-based sederhana yang mendeteksi
sinyal perilaku teks (permintaan biaya, dokumen sensitif, gaji
fantastis) menggunakan keyword matching dan pola regex. Ini bukan
model ML terlatih, melainkan pre-screening cepat yang melengkapi
penalaran LLM pada Layer 3."
```

**Kelebihan:** Ada "model NLP" yang bisa ditunjukkan, meskipun sederhana.
**Kekurangan:** Juri bisa kritik "rule-based bukan AI" atau "ini hanya keyword matching".

**Pertanyaan:**
> Apakah stretch goal ini worth it? Atau lebih baik fokus pada kekuatan yang sudah ada (OSINT + LLM + XAI)?

---

## Bagian 8: Ringkasan Pertanyaan untuk Tim

| # | Pertanyaan | Prioritas |
|---|-----------|-----------|
| 1 | LLM model: update proposal atau ganti model? | **Tinggi** |
| 2 | Threshold fallback: sinkronkan atau biarkan? | **Tinggi** |
| 3 | Domain missing penalty: implementasi atau hapus? | **Tinggi** |
| 4 | Frontend URL: update ke `verifin-app.vercel.app`? | **Tinggi** |
| 5 | Cover.png: sudah ada nama Pak Ganjar? | **Tinggi** |
| 6 | Test coverage: ada data aktual yang bisa dimasukkan? | Sedang |
| 7 | Halaman Riwayat: implementasi atau mockup cukup? | Sedang |
| 8 | User study: ada rencana uji terbatas sebelum submit? | Sedang |
| 9 | Evaluasi model: ada data E2E yang bisa dijadikan angka? | Sedang |
| 10 | Perbandingan AI: perlu tambah vs BERT/rule-based? | Rendah |
| 11 | **NLP STUB: aktifkan, perkuat justifikasi, atau hapus?** | **Tinggi** |
| 12 | **Jawaban juri "mana model NLP-nya": versi A/B/C?** | **Tinggi** |
| 13 | **4-layer vs 3-layer: pertahankan atau sederhanakan?** | **Tinggi** |
| 14 | **ROC-AUC hilang: strategi jawaban A/B/C?** | **Tinggi** |
| 15 | **Stretch goal Layer 1: worth it atau tidak?** | Rendah |

---

## Kesimpulan

Proposal GEMASTIK **secara substansial lebih kuat** dari proposal Liga Komatik. Keempat kritik juri telah di-address dengan perubahan yang jujur dan berlandasan ilmiah.

**Yang masih perlu diselesaikan sebelum submit:**

1. **Sinkronisasi proposal dengan kode** — LLM model, frontend URL, threshold fallback, domain missing penalty
2. **Strategi NLP STUB** — pilih antara aktifkan rule-based, perkuat justifikasi LLM, atau sederhanakan arsitektur
3. **Siapkan jawaban untuk pertanyaan juri** — terutama "mana model NLP-nya?" dan "mana ROC-AUC-nya?"
4. **Tambahkan data konkret jika ada** — test coverage, hasil E2E, uji terbatas

**Prioritas tertinggi:** Pastikan proposal dan kode aktual **100% konsisten** sebelum submit. Juri GEMASTIK bisa memverifikasi dengan membuka repo.
