# Gemastik XIX — Dokumen Pendamping Verifin (Divisi PPL)

> Repo ini berisi **dokumen, proposal, riset, dan analisis kesiapan** untuk proyek **Verifin**
> (anti-penipuan lowongan kerja). Kode aplikasi ada di folder [`verifin-app/`](verifin-app/)
> (frontend + backend, masing-masing punya README sendiri).

**Status:** proposal & kode sudah **disinkronkan** — klaim teknis diverifikasi silang
terhadap implementasi nyata (lihat catatan integritas di bawah).
Ringkasan penilaian: [`kritik-juri/status-kesiapan-tahap-awal.md`](kritik-juri/status-kesiapan-tahap-awal.md)

---

## 1. Isi Repo (peta untuk teman)

| Folder / File | Isi |
|---------------|-----|
| **`proposal-verifin/`** | Proposal resmi: `Proposal_Verifin.tex` (sumber LaTeX) + **`.pdf` (hasil compile, 29 hal)** |
| **`verifin-app/`** | Aplikasi: `backend/` (FastAPI) + `frontend/` (Next.js 16) |
| **`kritik-juri/`** | Analisis kesiapan oleh "juri" — status, verifikasi OSINT, daftar perbaikan |
| **`panduan-dan-pemenang-sebelumnya/`** | Panduan resmi lomba + naskah pemenang terdahulu |

---

## 2. Proposal (yang dikumpulkan)

- **Sumber:** `proposal-verifin/Proposal_Verifin.tex`
- **PDF siap cetak:** `proposal-verifin/Proposal_Verifin.pdf` (**29 halaman**)

### Cara compile ulang PDF
```bash
cd proposal-verifin
pdflatex -interaction=nonstopmode Proposal_Verifin.tex
pdflatex -interaction=nonstopmode Proposal_Verifin.tex   # 2x agar TOC & referensi rapi
```
File build (`.aux .log .toc`) tidak perlu di-commit.

### Arsitektur (sesuai kode nyata)
Verifin adalah **Decision Support System berbasis bukti** dengan pipeline 4 layer:
1. **NER Hibrida** — regex struktural + ekstraksi LLM (paralel, fallback regex)
2. **OSINT Engine** — Whois (fallback Wayback CDX), Kaspersky Who Calls + SERP publik,
   Nominatim (OSM), SearXNG (Bing+Brave), Google Form inspector, media sosial
3. **LLM Reasoning** — verdict AMAN/WASPADA/BAHAYA, deterministik (temperature=0, seed=42)
4. **XAI Explainer** — *SHAP-inspired* additive scoring (custom rule-based, bukan library `shap`)

> ⚠️ **Integritas:** proposal kini **jujur** soal batasan. Tidak ada klaim PII masking /
> no-retention (data disimpan, dikirim ke LLM eksternal apa adanya); tidak ada Alembic /
> Supabase Auth; tidak ada tabel `fraud_fingerprints`. Detail lengkap di README backend.
> Jika mengubah kode/stack, **selalu sinkronkan** `.tex`, lalu compile ulang PDF.

---

## 3. Hasil Uji End-to-End

| Kanal | Input | Verdict |
|-------|-------|---------|
| Teks | Lowongan legitimate | AMAN |
| Gambar (OCR) | Poster lowongan | AMAN |
| Tautan | Postingan lowongan | AMAN |
| Negatif | Kasus penipuan jelas | BAHAYA |

Deterministik (temperature=0, seed=42): input sama → hasil identik.
Dokumentasi screenshot ada di Bagian G proposal.

---

## 4. Yang Masih Jadi PR Tim (di luar kode)

- [ ] **Cover proposal:** ganti placeholder `Dosen Pembimbing: [Nama Dosen + NIP]` dengan data asli.
- [ ] **Format administratif panduan** — anonimitas naskah, batas halaman, Pakta Integritas.
- [ ] Cek ulang ketentuan unggah portal Gemastik (format file, ukuran maks).

---

## 5. Untuk Teman Tim

- Branch utama: **`main`**.
- Aplikasi ada di `verifin-app/` — baca `verifin-app/backend/README.md` dan
  `verifin-app/frontend/README.md` untuk cara menjalankan.
- Bila ragu "apakah klaim X di proposal benar?", cek `kritik-juri/status-kesiapan-tahap-awal.md`
  dan bagian *Catatan Integritas* di README backend.
