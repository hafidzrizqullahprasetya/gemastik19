# Verifin Full Pipeline Test Report
**Tanggal:** 22 Juli 2026  
**Backend:** FastAPI + Python 3.11 — `http://localhost:8000`  
**AI Model:** claude-sonnet-4.6 via OpenAgentic  

---

## Ringkasan Eksekutif

| # | Test Case | Method | Input | Verdict | Risk Score | Status |
|---|-----------|--------|-------|---------|------------|--------|
| 1 | PT. Visionary Internasional Solution | Teks langsung | `method 1.md` | **WASPADA** | 52/100 | ✅ Pipeline OK |
| 2 | Sushi Yay! | Image upload (OCR) | `method 2.webp` | **AMAN** | 18/100 | ✅ Pipeline OK |
| 3 | Indonesia College | URL Instagram | `https://instagram.com/p/DbCm1OLzZTq/` | **WASPADA** | 42/100 | ✅ Pipeline OK |

---

## Test 1 — Method Teks Langsung (PT. Visionary Internasional Solution)

### Input
```
PT. Visionary Internasional Solution (PT. VIS)
membuka lowongan Desk Collection Operator
Email: ptvismajubersama@gmail.com
No. Telepon: +628976927852
Gaji: 2,8 - 9 Juta | Lokasi: Bebas/Remote Work
```

### Hasil Pipeline

| Layer | Output |
|-------|--------|
| NER — companies | `PT. Visionary Internasional Solution` ✅ |
| NER — contacts | `+628976927852` ✅ |
| NER — emails | `ptvismajubersama@gmail.com` ✅ |
| NER — addresses | ❌ tidak terdeteksi (lokasi "Remote Work" tidak ada jalan/kota) |
| NER — salaries | `8 - 9 Juta`, `Gaji: 2` ⚠️ parsing gaji terpecah |
| NLP Classifier | AMAN, confidence 0.9, has_company 1.0, has_salary 1.0, has_contact 1.0 |
| OSINT — domain | gmail.com → skip (free email) |
| OSINT — phone | Kredibel: found, tidak reported fraud, sinyal publik minim |
| OSINT — company | PT. VIS tidak ditemukan di web publik, AHU/OSS tidak terverifikasi |
| OSINT — address | Kosong (tidak ada alamat fisik) |
| LLM Verdict | **WASPADA** |
| LLM Risk Score | **52/100** |
| SHAP | feature_contributions tersedia |

### Risk Factors (LLM)
- Tidak ada alamat fisik yang disebutkan (lokasi hanya "Remote Work")
- Email domain gratisan (gmail.com) untuk perusahaan yang mengklaim formal
- Nomor HP tidak memiliki sinyal reputasi kuat di Kredibel
- Gaji sangat lebar (2,8–9 juta) tanpa detail struktur kompensasi jelas
- Tidak ditemukan jejak digital perusahaan di web publik

### Safe Factors (LLM)
- Posisi dan deskripsi kerja wajar (Desk Collection Operator)
- Tidak ada permintaan biaya/deposit
- Nomor tidak berstatus fraud di Kredibel
- Persyaratan kerja tidak mencurigakan

### Observasi & Bug
- ⚠️ Salary parsing terpecah: `"8 - 9 Juta"` dan `"Gaji: 2"` — regex salary perlu diperbaiki untuk format `X,X - Y Juta`
- ⚠️ Alamat "Bebas/Remote Work" tidak bisa divalidasi OSM (wajar, ini bukan bug)
- ✅ `has_company`, `has_contact`, `has_salary` semua benar

---

## Test 2 — Method Image Upload OCR (Sushi Yay!)

### Input
File: `method 2.webp` — poster lowongan Sushi Yay!, Outlet Crew, Godean & Seturan Yogyakarta

### Validasi OCR

**Ground truth** (dari `method 2 isi webp Untuk VALIDASI.md`):
```
Sushi Yay! | Outlet Crew
Lokasi: Godean, Yogyakarta & Seturan, Yogyakarta
Kontak: 0851-7415-6091 (Kayla)
URL: bit.ly/FormLamaranKerjayaygroup
Posisi: Kitchen (Spv, Lead, Cook Crew, Cook Helper, Steward)
        Service (Manager Store, Leader, Cashier, Crew of Service)
```

**Hasil OCR Verifin:**
```json
{
  "companies": ["Sushi Yay"],
  "contacts": ["+6285174156091"],
  "emails": [],
  "urls": [],
  "addresses": []
}
```

**Validasi OCR:**

| Field | Ground Truth | OCR Result | Status |
|-------|-------------|------------|--------|
| Nama perusahaan | Sushi Yay! | `Sushi Yay` | ✅ Benar (tanda ! hilang, wajar) |
| Nomor telepon | 0851-7415-6091 | `+6285174156091` | ✅ Benar + normalisasi +62 |
| Alamat Godean/Seturan | Ada | Tidak terdeteksi | ⚠️ Terlewat |
| URL bit.ly | Ada | Tidak terdeteksi | ⚠️ URL tidak diekstrak |
| Posisi Kitchen/Service | Ada | Tidak diekstrak | ℹ️ Normal (bukan entitas NER) |

### Hasil Pipeline

| Layer | Output |
|-------|--------|
| OCR | Berhasil ekstrak nama + kontak ✅ |
| NER — companies | `Sushi Yay` ✅ |
| NER — contacts | `+6285174156091` ✅ |
| NER — addresses | ❌ Godean/Seturan tidak terdeteksi |
| NLP Classifier | AMAN |
| OSINT — phone | Kredibel: tidak reported fraud |
| OSINT — company | Sushi Yay ditemukan di web, tidak ada fraud signal |
| LLM Verdict | **AMAN** |
| LLM Risk Score | **18/100** |

### Observasi & Bug
- ✅ OCR akurat untuk entitas utama (nama perusahaan + nomor telepon)
- ⚠️ Alamat "Godean, Yogyakarta" dan "Seturan, Yogyakarta" tidak diekstrak NER — pola kota tanpa "Jl./Jalan" terlewat. Perlu tambah pattern: `\b(Godean|Seturan|Mlati|Depok|Bantul|dll)\b.*Yogyakarta`
- ⚠️ URL `bit.ly/...` tidak diekstrak — regex URL perlu tangkap shortlink tanpa `http://`
- ℹ️ LLM sempat 503 pada attempt pertama (kuota OpenAgentic), berhasil pada retry kedua

---

## Test 3 — Method URL Instagram (Indonesia College)

### Input
URL: `https://www.instagram.com/p/DbCm1OLzZTq/`

### Validasi Konten URL

**Ground truth** (dari `method 2 link.md`):
```
LEMBAGA KONSULTASI DAN BIMBINGAN BELAJAR INDONESIA COLLEGE
AKTA PENDIRIAN: No.5 TGL. 24 NOVEMBER 1993
Email: hrd.indonesiacollege@gmail.com
Website: indonesiacollege.co.id
Penempatan: Yogyakarta
Posisi: Videographer, Video Editor, Graphic Designer, Content Writer, Copywriter, Academic, Admin, Leader
```

**Hasil ekstraksi dari URL:**
```json
{
  "companies": ["Indonesia College"],
  "contacts": ["+62882003754421"],
  "emails": ["hrd.indonesiacollege@gmail.com"]
}
```

**Validasi konten URL:**

| Field | Ground Truth | Hasil Ekstraksi | Status |
|-------|-------------|-----------------|--------|
| Nama lembaga | Indonesia College | `Indonesia College` | ✅ Benar |
| Email | hrd.indonesiacollege@gmail.com | `hrd.indonesiacollege@gmail.com` | ✅ Benar |
| Website | indonesiacollege.co.id | Tidak terdeteksi | ⚠️ Terlewat |
| Nomor kontak | Tidak ada di ground truth | `+62882003754421` | ℹ️ Diekstrak dari caption/komentar IG |
| Alamat Yogyakarta | Ada | Tidak terdeteksi | ⚠️ Terlewat |
| Akta Pendirian | Ada | Tidak diekstrak | ℹ️ Normal (bukan entitas NER standar) |

### Hasil Pipeline

| Layer | Output |
|-------|--------|
| URL Fetch | Scrapling + Instagram embed berhasil ✅ |
| NER — companies | `Indonesia College` ✅ |
| NER — contacts | `+62882003754421` ✅ |
| NER — emails | `hrd.indonesiacollege@gmail.com` ✅ |
| OSINT — phone | Kredibel: sinyal publik minim |
| OSINT — domain | gmail.com → skip (free email) |
| OSINT — web | 10 jejak digital publik ditemukan |
| LLM Verdict | **WASPADA** |
| LLM Risk Score | **42/100** |

### Risk Factors (LLM)
- Tidak ada alamat fisik terverifikasi OSM
- Email domain gratisan (gmail.com) padahal lembaga mengklaim berdiri sejak 1993
- Nomor HP minim sinyal publik di Kredibel
- Tidak ada jejak aktif di Threads/medsos terverifikasi
- Gaji/tunjangan tidak spesifik (hanya "Gaji, Tunjangan, Insentif")

### Safe Factors (LLM)
- Menyebut akta pendirian resmi (No. 5, 24 November 1993)
- Posisi yang ditawarkan wajar untuk lembaga pendidikan
- Tidak ada permintaan biaya/deposit
- Nomor tidak berstatus fraud di Kredibel
- 10 jejak digital publik ditemukan (portal lowongan/direktori)

### Observasi
- ✅ URL Instagram fetch via Scrapling embed berhasil — konten poster terbaca dengan baik
- ⚠️ Website `indonesiacollege.co.id` tidak diekstrak NER (disebutkan tanpa `http://`)
- ℹ️ Nomor `+62882003754421` muncul di data — kemungkinan dari caption/komentar IG, bukan dari poster ground truth

---

## Ringkasan Bug & Rekomendasi Perbaikan

| ID | Komponen | Bug | Severity | Fix |
|----|----------|-----|----------|-----|
| B1 | NER `ner.py` | Salary regex terpecah untuk format `2,8 - 9 Juta` | Medium | Perbaiki regex gaji: `\d+[,.]?\d*\s*[-–]\s*\d+[,.]?\d*\s*(Juta\|juta\|ribu)` |
| B2 | NER `ner.py` | Alamat nama kota tanpa prefix Jl./Jalan tidak terdeteksi | Medium | Tambah pattern kota: `(Godean\|Seturan\|Mlati\|dll).*Yogyakarta` |
| B3 | NER `ner.py` | URL shortlink tanpa `http://` tidak diekstrak | Low | Tambah regex: `\b(bit\.ly\|s\.id\|rb\.gy)/\S+` |
| B4 | NER `ner.py` | Website tanpa protokol tidak diekstrak | Low | Tambah pattern domain: `\b\w+\.(co\.id\|com\|id)\b` |
| B5 | LLM API | 503 timeout pada first attempt — tidak ada retry logic | High | Tambah retry dengan exponential backoff (max 3x) di `verifin_reasoning.py` |
| B6 | SHAP | `feature_contributions` kosong pada beberapa kasus | Medium | Investigasi kondisi yang menyebabkan empty contributions |

---

## File Raw JSON

| File | Deskripsi | Ukuran |
|------|-----------|--------|
| `method1-teks-pt-vis-raw.json` | Full response Method 1 — PT. VIS | 11.6 KB |
| `method2-image-sushi-yay-raw.json` | Full response Method 2 — Image OCR Sushi Yay | 16.8 KB |
| `method2-url-instagram-indonesia-college-raw.json` | Full response Method 3 — URL Instagram Indonesia College | 7.7 KB |

---

## Kesimpulan

Pipeline Verifin berjalan dengan baik pada ketiga method input:
- **Teks langsung** — NER akurat, OSINT paralel berjalan, LLM reasoning tepat
- **Image OCR** — PaddleOCR berhasil ekstrak nama perusahaan dan nomor kontak dari poster webp
- **URL Instagram** — Scrapling embed berhasil fetch konten poster dari URL Instagram publik

Trust scoring konsisten: lowongan dengan minimal informasi verifikasi (no address, free email, no corporate domain) mendapat WASPADA 40-52, sementara lowongan dengan jejak digital kuat mendapat AMAN 18.

Priority fix: **B5** (LLM retry) dan **B1** (salary regex) untuk meningkatkan akurasi dan reliabilitas pipeline.
