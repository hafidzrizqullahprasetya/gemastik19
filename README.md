# Gemastik XIX — Dokumen Pendamping Verifin (Divisi PPL)

> Repo ini berisi **dokumen, proposal, riset, dan analisis kesiapan** untuk proyek **Verifin**
> (anti-penipuan lowongan kerja). Kode aplikasi ada di repo terpisah: [`verifin-app`](../verifin-app).

**Status:** ✅ **SIAP dikumpulkan tahap awal** — skor kesiapan internal **~92/100**.
Ringkasan penilaian lengkap: [`kritik-juri/status-kesiapan-tahap-awal.md`](kritik-juri/status-kesiapan-tahap-awal.md)

---

## 1. Isi Repo (peta untuk teman)

| Folder / File | Isi |
|---------------|-----|
| **`proposal-verifin/`** | Proposal resmi: `Proposal_Verifin.tex` (sumber LaTeX), `.md` (versi Markdown), **`.pdf` (hasil compile, 27 hal)**, `images/` (mockup E2E) |
| **`kritik-juri/`** | Analisis kesiapan oleh "juri" — status, verifikasi OSINT, daftar perbaikan, skor akhir |
| **`test/`** | Input uji (`method 1.md`, `method 2.webp`, `method 2 link.md`) + `hasil-test-raw/` (JSON mentah, `evaluasi-emscad.json`, `e2e-results.json`) |
| **`riset/`** | Analisis 20 pemenang Gemastik sebelumnya (referensi framing & gaya) |
| **`panduan-dan-pemenang-sebelumnya/`** | Panduan resmi lomba + naskah pemenang terdahulu |

---

## 2. Proposal (yang dikumpulkan)

- **Sumber:** `proposal-verifin/Proposal_Verifin.tex`
- **PDF siap cetak:** `proposal-verifin/Proposal_Verifin.pdf` (27 halaman)

### Cara compile ulang PDF
```bash
cd proposal-verifin
pdflatex -interaction=nonstopmode Proposal_Verifin.tex
pdflatex -interaction=nonstopmode Proposal_Verifin.tex   # 2x agar TOC & referensi rapi
```
`pdflatex` tersedia via MacTeX/TeX Live (`/Library/TeX/texbin`). File build (`.aux .log .toc`) tidak perlu di-commit.

### Sinkronisasi proposal ↔ kode
Proposal kini **100% sinkron** dengan implementasi nyata:
- Model LLM: **kimi-k3-high** via OpenAgentic (bukan Grok/VirusTotal/Google CSE — klaim itu sudah dihapus).
- Layer 2: **TF-IDF + Logistic Regression hybrid** (bukan rule-based murni).
- OCR: **PaddleOCR**; pencarian web: **multi-engine DuckDuckGo/Yahoo/Bing + relevance filter**.
- Bagian **G. Evaluasi Model** berisi metrik EMSCAD nyata (ROC-AUC 0,996, Recall 98,4%, F1 0,718).
- Bagian **H. Mockup Antarmuka** berisi screenshot E2E asli (3 kanal + modal loading).

> ⚠️ Jika mengubah kode/stack, **selalu sinkronkan** `.tex` DAN `.md`, lalu compile ulang PDF.

---

## 3. Hasil Uji (bukti integritas)

| Kanal | Input | Verdict | Skor Risiko |
|-------|-------|---------|:---:|
| Teks | PT. VIS (`test/method 1.md`) | AMAN | 30 |
| Gambar (OCR) | Poster Sushi Yay (`test/method 2.webp`) | AMAN | 12 |
| Tautan | IG Indonesia College (`test/method 2 link.md`) | AMAN | 15 |
| Negatif ×2 | kasus penipuan jelas | BAHAYA | 95 |

- Deterministik (temperature=0): input sama → hasil identik.
- SERP relevance filter aktif → tidak ada lagi URL noise (krafton/ezpassnh) tercatat.

---

## 4. Yang Masih Jadi PR Tim (di luar kode)

- [ ] **Format administratif panduan** — font Times New Roman, batas halaman, **anonimitas** (tanpa nama/identitas tim di naskah), dan **Pakta Integritas**.
- [ ] Cek ulang ketentuan unggah portal Gemastik (format file, ukuran maks).

> Semua yang berbau kode & data sudah beres; sisa pekerjaan bersifat administratif naskah.

---

## 5. Untuk Teman Tim

- Branch kerja: **`hafidz`** · branch utama: **`main`**.
- Repo ini = **dokumen**. Jangan taruh kode aplikasi di sini (itu di `verifin-app`).
- Folder `verifin-app/` di-ignore di repo ini (lihat `.gitignore`) supaya tidak tercampur.
- Bila ragu "apakah klaim X di proposal benar?", cek dulu `kritik-juri/status-kesiapan-tahap-awal.md` — semua klaim sudah diverifikasi di sana.
