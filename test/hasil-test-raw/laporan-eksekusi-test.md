# LAPORAN EKSEKUSI TEST SUITE — VERIFIN
## Pengujian Gemastik XIX (Divisi PPL) — TAHAP 1

> **Dieksekusi oleh:** Juri/Penguji (roleplay: Dosen Pembimbing Senior & Juri Kritis)
> **Tanggal eksekusi:** 23 Juli 2026, 09:19–09:35 WIB
> **Target:** Backend FastAPI `http://localhost:8000` (PID 78906/78908) · Frontend Next.js `http://localhost:3000`
> **Status server saat uji:** Backend `ok` · DB Postgres `healthy` · LLM `openagentic / kimi-k3-high` `reachable: true` · OSINT (OSM, Kredibel, Scrapling, Threads) `online`

---

## 1. RINGKASAN EKSEKUTIF

| Metode | Input | Endpoint | HTTP | Verdict | Risk | Latency FRESH (cold) | Latency REPEAT | Cache Hit? |
|--------|-------|----------|:----:|:-------:|:----:|:--------------------:|:--------------:|:----------:|
| **1 — Teks langsung** | PT. VIS (Desk Collection Operator) | `POST /api/v1/verify/text` | 200 | AMAN | 30/100 | **117.897 ms** (117,9 s) | **414 ms** | ✅ **YA** (`DB Cache Hit`) |
| **2 — Poster (OCR)** | `method 2.webp` (Sushi Yay!, 102,6 KB) | `POST /api/v1/verify/image` | 200 | AMAN | 7/100 (fresh) → **12/100** (repeat) | **139.831 ms** (139,8 s) | 127.558 ms (127,6 s) | ❌ **TIDAK** |
| **3 — Link/URL** | Instagram Indonesia College | `POST /api/v1/verify/url` | 200 | AMAN | 20/100 (fresh) → **16/100** (repeat) | **181.881 ms** (181,9 s) | 157.604 ms (157,6 s) | ❌ **TIDAK** |

> **Catatan satuan:** nilai latency di atas dalam **milidetik (ms)**; angka dalam kurung adalah konversi detik. 117.897 ms = 117,9 detik.

### Temuan paling penting (ringkas)
1. **Ketiga metode fungsional berhasil (HTTP 200)** dan menghasilkan verdict **AMAN** dengan risk score rendah (7–30). Pipeline 5-layer berjalan.
2. **Latency pipeline penuh sangat tinggi: 118–182 detik** (≈2–3 menit per verifikasi). Ini jauh di atas ambang toleransi UX umumnya.
3. **Caching tidak konsisten:** Metode 1 ter-cache (repeat 414 ms), tetapi Metode 2 & 3 **tidak ter-cache** dan tetap lambat (127 s & 157 s).
4. **Hasil TIDAK deterministik:** Metode 2 risk berubah 7→12, Metode 3 risk berubah 20→16, dan entitas kontak Metode 3 berubah (muncul `+62882003754421` pada repeat). Untuk sistem "forensik/audit", inkonsistensi ini masalah serius.
5. **Ditemukan field XAI yang HARDCODED** di `shap_explanation` (lihat §6).

---

## 2. METODOLOGI EKSEKUSI

### 2.1 Kondisi awal
- DB dicek kosong terlebih dahulu: `GET /api/v1/cases` → `[]`. Ini memastikan **pass pertama (FRESH) adalah pipeline penuh (cache-miss) yang jujur**, bukan hasil cache.
- Setiap metode dieksekusi **2 pass**: `fresh` (cache-miss) dan `repeat` (untuk mendeteksi mekanisme DB cache & menguji determinisme).

### 2.2 Perintah eksekusi (reproducible)
Runner: `test/hasil-test-raw/_run_tests.sh`. Latency diukur via `curl -w '%{time_total}'` (detik) lalu dikonversi ke ms.

```bash
# METHOD 1 — teks langsung
curl -X POST http://localhost:8000/api/v1/verify/text \
  -H "Content-Type: application/json" \
  -d '{"text": "<isi method 1.md>", "include_raw_text": true}'

# METHOD 2 — poster via OCR (MIME harus eksplisit image/webp)
curl -X POST http://localhost:8000/api/v1/verify/image \
  -F "file=@method 2.webp;type=image/webp"

# METHOD 3 — link postingan
curl -X POST http://localhost:8000/api/v1/verify/url \
  -H "Content-Type: application/json" \
  -d '{"url":"https://www.instagram.com/p/DbCm1OLzZTq/","additional_text":"<isi method 2 link.md>"}'
```

### 2.3 Kendala teknis saat uji (milik penguji, BUKAN bug sistem)
- **Percobaan pertama Metode 2 gagal HTTP 400** (`Tipe file tidak didukung: application/octet-stream`) karena `curl -F` tidak mengirim MIME `image/webp` untuk berkas `.webp`. Diperbaiki dengan menambahkan `;type=image/webp`. Sistem **benar** menolak tipe tak dikenal — perilaku validasi berfungsi.

### 2.4 Daftar artefak yang dihasilkan
Tersimpan di `test/hasil-test-raw/`:

| Berkas | Isi |
|--------|-----|
| `raw-test-method1.json` | Raw payload JSON Metode 1 (fresh, 200) — nama sesuai permintaan |
| `raw-test-method2.json` | Raw payload JSON Metode 2 (fresh, 200) — nama sesuai permintaan |
| `raw-test-method3.json` | Raw payload JSON Metode 3 (fresh, 200) |
| `raw-test-method{1,2,3}.fresh.json` / `.repeat.json` | Salinan per-pass (fresh & repeat) untuk perbandingan determinisme |
| `raw-test-method{1,2,3}.{fresh,repeat}.meta.txt` | `http_code`, `time_total_s`, `size_download_bytes` per request |
| `runner.log` | Log eksekusi + latency per pass |
| `laporan-eksekusi-test.md` | Berkas ini |

---

## 3. HASIL DETAIL PER METODE

### 3.1 METODE 1 — Teks Langsung (PT. VIS)
- **Endpoint:** `POST /verify/text` · **HTTP 200** · **Latency 117,9 s (fresh) / 0,414 s (repeat)**
- **Verdict:** `AMAN` · **Risk score:** `30/100`
- **Entitas terekstrak:** perusahaan `PT. Visionary Internasional Solution (PT. VIS)`; kontak `+628976927852`; email `ptvismajubersama@gmail.com`
- **OSINT:** `osint_parallel_sec = 4,472 s` (probe paralelnya sendiri cepat; mayoritas waktu dihabiskan di **LLM reasoning**, bukan OSINT).
- **Risk factors (5):** alamat fisik tidak tercantum/tervalidasi OSM; legalitas formal (AHU/OSS) belum terkonfirmasi; tidak ada website resmi; rentang gaji lebar (2,8–9 jt) mengindikasikan skema komisi; email Gmail gratisan.
- **Safe factors (6):** no HP tidak dilaporkan fraud di Kredibel; tidak ada permintaan biaya/transfer/data sensitif; 0 indikasi penipuan di SERP; 15 jejak digital publik (termasuk direktori companieshouse.id no. registrasi 1515957); lowongan konsisten di portal loker Instagram sejak 2025; deskripsi pekerjaan wajar & terperinci.
- **SHAP:** `final_risk_score=30`, `base_value=12.0`, `evidence_coverage=83,3%`, `evidence_confidence=88,5`.
- **Cache:** pass repeat mengembalikan `model_used = "… (DB Cache Hit)"` → **mekanisme cache berfungsi untuk input teks**.

### 3.2 METODE 2 — Poster Gambar via OCR (Sushi Yay!)
- **Endpoint:** `POST /verify/image` · **HTTP 200** · **Latency 139,8 s (fresh) / 127,6 s (repeat)**
- **Verdict:** `AMAN` · **Risk score:** `7/100` (fresh) → **`12/100` (repeat)** ⚠ berubah
- **OCR:** PaddleOCR + OpenCV (CLAHE, border, auto-scale) — berhasil membaca poster; entitas `Sushi Yay! (Yay Group)`, kontak `+6285174156091` (dari 0851-7415-6091).
- **OSINT:** `osint_parallel_sec = 3,597 s`.
- **Safe factors (9):** kedua alamat outlet (Seturan & Godean, Yogyakarta) tervalidasi di OpenStreetMap; akun Instagram resmi konsisten; dsb.
- **Risk factors (2):** (antara lain) "Kata Kunci Penipuan (1 match)" pada `top_risk_features`.
- **SHAP:** `final_risk_score=7`, `evidence_confidence=94,2`.
- **Masalah:** pass repeat **tidak cache hit** dan risk berubah → **tidak deterministik** (lihat §5).

### 3.3 METODE 3 — Link/URL (Indonesia College via Instagram)
- **Endpoint:** `POST /verify/url` · **HTTP 200** · **Latency 181,9 s (fresh) / 157,6 s (repeat)**
- **Verdict:** `AMAN` · **Risk score:** `20/100` (fresh) → **`16/100` (repeat)** ⚠ berubah
- **Entitas:** `Indonesia College (Lembaga Konsultasi dan Bimbingan Belajar)`; email `hrd.indonesiacollege@gmail.com`; kontak berubah antar pass (`[]` → `+62882003754421`).
- **OSINT:** `osint_parallel_sec = 5,514 s`. Website resmi `indonesiacollege.co.id` aktif & konsisten; akun Instagram valid.
- **Risk factors (4)**, **safe factors (7)**.
- **Masalah:** tidak cache hit + risk/entitas berubah antar run.

---

## 4. ANALISIS PERFORMA (LATENCY)

| Komponen | Estimasi waktu | Catatan |
|----------|---------------:|---------|
| OSINT paralel (WHOIS, OSM, Kredibel, SERP, Threads) | **3,6–5,5 s** | Cepat; `asyncio.gather` bekerja |
| OCR (Metode 2) | ± beberapa detik | Model di-warmup saat startup |
| **LLM Reasoning (kimi-k3-high)** | **≈ 110–175 s** | **BOTTLENECK DOMINAN** — mayoritas total latency |
| Cache lookup (jika hit) | < 0,5 s | Hanya efektif untuk input yang hash-nya cocok |

**Kesimpulan performa:** Waktu total didominasi **inferensi LLM** (bukan OSINT/OCR). Latency 2–3 menit **tidak layak untuk UX interaktif** tanpa mekanisme async/streaming/progress yang jelas. Frontend tampak menunggu respons sinkron — berisiko timeout & persepsi "hang".

---

## 5. UJI DETERMINISME & CACHING (temuan kritis)

| Aspek | Metode 1 | Metode 2 | Metode 3 |
|-------|:--------:|:--------:|:--------:|
| Cache hit pada repeat | ✅ Ya | ❌ Tidak | ❌ Tidak |
| Risk score stabil | ✅ (30→30) | ❌ (7→12) | ❌ (20→16) |
| Entitas stabil | ✅ | ⚠ (`Sushi Yay! (Yay Group)` → `Sushi Yay`) | ❌ (kontak berubah) |

**Implikasi:**
1. **Hash cache tidak konsisten lintas sumber.** Untuk `/verify/text` cache bekerja; untuk `/verify/image` & `/verify/url` tidak (kemungkinan hash dihitung dari konten yang berbeda antar pemanggilan, atau path cache berbeda).
2. **Non-determinisme LLM.** Tanpa `temperature=0` + seed tetap, verdict numerik berfluktuasi. Untuk produk yang mengklaim "Decision Path Audit" dan "Forensik", hasil yang berubah-ubah pada input identik **merusak kredibilitas audit**.
3. DB menyimpan kasus duplikat (Metode 3 tersimpan 2× dengan risk 20 & 16; Metode 2 tersimpan sebagai "Manager Store") — deduplikasi belum efektif untuk non-teks.

State DB setelah pengujian (`GET /api/v1/cases`):
```
url   | LEMBAGA KONSULTASI DAN BIMBINGAN BELAJAR | AMAN 16
image | Manager Store                              | AMAN 12
url   | LEMBAGA KONSULTASI DAN BIMBINGAN BELAJAR | AMAN 20   <- duplikat
text  | PT. Visionary Internasional Solution       | AMAN 30
```

---

## 6. TEMUAN KRITIS — FIELD XAI HARDCODED (diverifikasi ke source code)

Saat membandingkan `shap_explanation` pada ketiga metode, ditemukan nilai yang **identik byte-per-byte** padahal inputnya sama sekali berbeda:

| Field `shap_explanation` | Nilai (sama di ke-3 metode) | Status |
|--------------------------|------------------------------|--------|
| `checked_at` | `2026-07-22T18:02:06Z` | **HARDCODED** (bukan waktu uji 23 Jul) |
| `deduplication_engine.perceptual_hash_phash` | `pHash_a8f4c2b901e6` | **HARDCODED** |
| `networkx_graph_analytics.subgraph_id` | `Connected Component #14` | **HARDCODED** |
| `decision_path` | menyebut "**Esthy Group, Sleman**", "**Mapped to Prambanan**", "**Risk score: 12**" | **HARDCODED dari kasus lain** |
| `probe_weights[].execution_time_ms` | 1072 / 962 / 1250 / … (statik) | **HARDCODED** (bukan pengukuran aktual) |

**Verifikasi source:** `backend/app/services/xai/shap_explainer.py` baris ~334–385 mengembalikan string literal statis (menyebut "Esthy Group", "Prambanan", "pHash_a8f4c2b901e6", "Connected Component #14") yang **tidak berubah antar input**.

**MITIGASI (adil):**
- `shap_explanation.feature_contributions` **dihitung dinamis** dari sinyal nyata (ini yang benar).
- **Frontend (`app/report/page.tsx`, `ShapChart.tsx`) hanya merender `feature_contributions`** (yang valid) dan **TIDAK** menampilkan field hardcoded di atas. Jadi data palsu ini **tidak terlihat user di UI saat ini**, tetapi **ada di raw JSON/API** dan akan terlihat jika juri menembak API langsung atau membaca `decision_path`.

**Penilaian:** Ini adalah **bukti placeholder/debug yang belum dibersihkan** dan berpotensi dianggap **fabrikasi tampilan "audit forensik"**. Wajib diperbaiki sebelum demo — juri teknis dapat mendeteksinya dalam hitungan detik via raw JSON.

---

## 7. KESIMPULAN TAHAP 1

- ✅ **Fungsionalitas inti berjalan:** ketiga kanal input (teks, gambar-OCR, URL) menghasilkan verdict & bukti OSINT kaya.
- ✅ **Arsitektur OSINT paralel efisien** (3,6–5,5 s).
- ⚠ **Latency LLM sangat tinggi** (2–3 menit) — bottleneck utama.
- ⚠ **Caching tidak konsisten** antar kanal; **hasil tidak deterministik**.
- ❌ **Field XAI `decision_path`/`probe_weights`/`phash`/`checked_at` HARDCODED** — risiko integritas jika diklaim sebagai hasil nyata.

**Rekomendasi teknis prioritas (dirujuk di TAHAP 3):**
1. Hapus/ganti semua field hardcoded di `shap_explainer.py` dengan komputasi nyata atau hilangkan dari respons.
2. Terapkan **determinisme**: `temperature=0` + `seed` tetap pada LLM; uji regresi snapshot.
3. Perbaiki **kunci cache** agar konsisten untuk teks/gambar/URL (deduplikasi lintas kanal).
4. Tambahkan **async job + progress/streaming** untuk menyembunyikan latency LLM dari user.

---

*Laporan ini disusun dari raw payload aktual di folder ini dan verifikasi silang ke source code. Semua angka latency berasal dari `curl -w` pada saat eksekusi.*
