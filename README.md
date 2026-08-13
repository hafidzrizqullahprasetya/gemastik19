# GEMASTIK XIX 2026 — Tim Three Achilles (Divisi PPL)

> Repo ini berisi **dokumen administrasi, proposal, riset, dan analisis kesiapan** untuk proyek **Verifin**
> (deteksi lowongan kerja palsu berbasis AI). Kode aplikasi ada di folder [`verifin-app/`](verifin-app/)
> (frontend + backend, masing-masing punya README sendiri).

| | |
|---|---|
| **Tim** | Three Achilles |
| **Anggota** | Hafidz Rizqullah Prasetya (ketua), Akmal, Matthew |
| **Prodi** | TRPL angkatan 2024, Universitas Gadjah Mada |
| **Divisi** | VIII — Pengembangan Perangkat Lunak |
| **Judul Karya** | Verifin: Deteksi Lowongan Kerja Palsu berbasis AI |
| **Dosen Pembimbing** | Dr.Eng. Ir. Ganjar Alfian, S.T., M.Eng. (NIP 111198701202201101) |
| **Status** | Proposal & dokumen administrasi sedang finalisasi |

---

## 1. Isi Repo

| Folder / File | Isi |
|---------------|-----|
| **`proposal-verifin/`** | Proposal resmi: `Proposal_Verifin.tex` (sumber LaTeX) + `.pdf` (30 halaman) |
| **`surat-pernyataan/`** | 3 surat pernyataan (Penggunaan AI, Orisinalitas, Pengembangan Karya) dalam `.tex` + `.pdf` + `.md` |
| **`verifin-app/`** | Aplikasi: `backend/` (FastAPI) + `frontend/` (Next.js 16) — punya repo `.git` sendiri |
| **`kritik-juri/`** | Analisis kesiapan oleh "juri" — status, verifikasi OSINT, daftar perbaikan |
| **`panduan-dan-pemenang-sebelumnya/`** | Panduan resmi lomba (2022-2026) + analisis pemenang top 20 tahun 2025 |
| **`logo/`** | Logo UGM, Kemdikbud, Belmawa, GEMASTIK, dll |

---

## 2. Proposal

- **Sumber:** `proposal-verifin/Proposal_Verifin.tex`
- **PDF siap unggah:** `proposal-verifin/Proposal_Verifin.pdf` (30 halaman)
- **Batas panduan:** maksimal 30 halaman termasuk lampiran

### Cara compile ulang PDF
```bash
cd proposal-verifin
xelatex -interaction=nonstopmode Proposal_Verifin.tex
xelatex -interaction=nonstopmode Proposal_Verifin.tex   # 2x agar TOC & referensi rapi
```

### Arsitektur (sesuai kode nyata)
Verifin adalah **Decision Support System berbasis bukti** dengan pipeline 4 layer:
1. **NER Hibrida** — regex struktural + ekstraksi LLM (paralel, fallback regex)
2. **OSINT Engine** — Whois (fallback Wayback CDX), Kaspersky Who Calls + SERP publik,
   Nominatim (OSM), SearXNG (Bing+Brave), Google Form inspector, media sosial
3. **LLM Reasoning** — verdict AMAN/WASPADA/BAHAYA, deterministik (temperature=0, seed=42)
4. **XAI Explainer** — *SHAP-inspired* additive scoring (custom rule-based, bukan library `shap`)

> ⚠️ **Integritas:** proposal jujur soal batasan. Tidak ada klaim PII masking /
> no-retention (data disimpan, dikirim ke LLM eksternal apa adanya); tidak ada Alembic /
> Supabase Auth; tidak ada tabel `fraud_fingerprints`. Detail lengkap di README backend.
> Jika mengubah kode/stack, **selalu sinkronkan** `.tex`, lalu compile ulang PDF.

---

## 3. Surat Pernyataan

Tiga surat pernyataan di folder `surat-pernyataan/`, masing-masing tersedia dalam format LaTeX (`.tex`), PDF, dan Markdown (`.md`):

| Surat | File | Status |
|-------|------|--------|
| Penggunaan AI | `Surat_Penggunaan_AI.tex` / `.pdf` | ⚠️ Kolom % deteksi AI belum diisi |
| Orisinalitas Karya | `Surat_Orisinalitas.tex` / `.pdf` | ✅ Selesai (TTD Hafidz) |
| Pengembangan Karya | `Surat_Pengembangan_Karya.tex` / `.pdf` | ✅ Selesai (karya baru, tabel tidak diisi) |

### Cara compile ulang surat
```bash
cd surat-pernyataan
xelatex -interaction=nonstopmode Surat_Penggunaan_AI.tex
xelatex -interaction=nonstopmode Surat_Orisinalitas.tex
xelatex -interaction=nonstopmode Surat_Pengembangan_Karya.tex
```

---

## 4. Hasil Uji End-to-End

| Kanal | Input | Verdict |
|-------|-------|---------|
| Teks | Lowongan legitimate | AMAN |
| Gambar (OCR) | Poster lowongan | AMAN |
| Tautan | Postingan lowongan | AMAN |
| Negatif | Kasus penipuan jelas | BAHAYA |

Deterministik (temperature=0, seed=42): input sama → hasil identik.
Dokumentasi screenshot ada di Bagian G proposal.

---

## 5. Checklist Babak Penyisihan (Deadline: 14 Agustus 2026)

Berdasarkan panduan divisi VIII Pengembangan Perangkat Lunak:

- [x] Proposal (PDF, 30 halaman)
- [ ] Surat Pernyataan (1 surat gabungan, di atas materai, maks 2 MB) — *lihat catatan di bawah*
- [ ] Video Rancangan Perangkat Lunak (YouTube, maks 3 menit, kemajuan min 50%)
- [ ] Dokumen Teknis (panduan instalasi & penggunaan, maks 30 halaman)
- [ ] Executable / URL aplikasi
- [ ] URL video demo (dalam file TXT/DOCX)
- [ ] Daftar komponen/library + lisensi
- [ ] Adopsi lisensi
- [ ] Deliverables (ZIP/RAR dengan format nama: `GEMASTIK XIX Perangkat Lunak - <ID-Tim> - Three Achilles - Verifin`)

> **Catatan surat pernyataan:** Panduan divisi VIII menyebut "Surat Pernyataan" tunggal
> (orisinal + tidak plagiat + belum pernah dilombakan, di atas materai). Saat ini ada 3 surat
> terpisah yang mungkin perlu digabung jadi 1 sesuai format panduan.

---

## 6. Yang Masih Jadi PR Tim

- [ ] **Konfirmasi dosen pembimbing** — Pak Ganjar sudah dihubungi, menunggu jawaban final
- [ ] **Cover proposal** — ganti placeholder Dosen Pembimbing dengan nama Pak Ganjar
- [ ] **Gabungkan 3 surat jadi 1** + tambah kolom TTD di atas materai
- [ ] **Isi % hasil AI detector** di Surat Penggunaan AI (cek proposal via GPTZero/ZeroGPT)
- [ ] **Buat Dokumen Teknis** (struktur: Latar Belakang, Tujuan, Nilai inovasi & dampak, Deskripsi fungsional & fitur, Screenshot)
- [ ] **Rekam video rancangan** 3 menit (demo aplikasi, kemajuan min 50%)
- [ ] **Daftar library + lisensi** (semua dependency backend/frontend)
- [ ] **Adopsi lisensi** (MIT/Apache/dll)
- [ ] **Pastikan aplikasi bisa diakses** (URL publik atau executable)

---

## 7. Untuk Teman Tim

- Branch utama: **`main`**
- Aplikasi ada di `verifin-app/` — baca `verifin-app/backend/README.md` dan
  `verifin-app/frontend/README.md` untuk cara menjalankan
- Bila ragu "apakah klaim X di proposal benar?", cek `kritik-juri/hasil-penilaian-juri.md`
  dan bagian *Catatan Integritas* di README backend
- File `chat-pak-ganjar.md` bersifat **local-only** (ada di `.gitignore`, tidak di-push ke GitHub)
