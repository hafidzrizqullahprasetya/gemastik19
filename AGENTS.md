# AGENTS.md

Workspace riset & strategi untuk persiapan kompetisi **GEMASTIK XIX (2026)**, khususnya Divisi **Pengembangan Perangkat Lunak (PPL)**. Tim berasal dari program studi **Teknologi Rekayasa Perangkat Lunak (TRPL) Sekolah Vokasi UGM**.

## Tujuan Workspace

Bukan repo kode aplikasi. Ini adalah **workspace riset & perencanaan**: mengumpulkan aturan lomba, menganalisis pemenang masa lalu, memetakan gap riset & dosen, hingga merumuskan ide karya yang menang. Bahasa utama dokumen: **Bahasa Indonesia**.

## Struktur Direktori

```text
gemastik19/
├── 📄 [Template] Makalah Gemastik ieee.docx  Template IEEE resmi
├── 📄 Pakta Integritas.docx                 Dokumen legalitas submit
├── 📄 Pernyataan Orisinalitas Karya.docx     Dokumen legalitas submit
├── 📄 Pernyataan Pengembangan Karya.docx    Dokumen legalitas submit
├── 🔗 verifin-app (Ignored)                 Symlink lokal ke repo aplikasi
│
├── 📂 proposal-utama/                       Dokumen Proposal & Tim Utama (Verifin)
│   ├── Proposal_Verifin_CheckIN.md         Draft Proposal Karya Verifin
│   ├── analisis-celah-verifin.md           Analisis Verifin vs 20 Finalis Gemastik 2025
│   ├── job-checker-plan.md                 Arsitektur sistem & OSINT plan
│   ├── akmal.md / matthew.md               Data diri anggota & ketua tim
│   └── skill-propo.md                      Prompt acuan penulisan ilmiah
│
├── 📂 opsi-ide-alternatif/                  Arsip Ide Cadangan (Jika Pivot)
│   ├── 📂 mbg-dan-subsidi/                  PDF Riset Makroekonomi, MBG, & Subsidi
│   ├── 📂 waspada-ai/                       Riset Ide Deteksi Fraud Transaksi/QRIS Real-Time
│   └── 📂 ideation-lama/                    Draft ideation awal (Jagaku, Damkar, Segar)
│
└── 📂 riset/                                Database Knowledge Base
    ├── 📂 panduan/                          Aturan resmi Gemastik per tahun (2022–2026 BINUS).
    ├── 📂 analisis-pemenang/                Bedah kasus juara masa lalu (DOAlert, NaviGo, dsb).
    ├── 📂 strategi/                         Framework "CCA + Step 0" & gap riset.
    └── 📂 sumber-ekonomi/                   Referensi analisis pendukung.
```

## Konvensi Penamaan

- File markdown & PDF: **lowercase-dash** (mis. `gap-riset-indonesia.md`).
- File analisis pemenang: format `<tahun>-<nama-karya>.md` (mis. `2025-doalert.md`).
- Folder panduan per tahun: `<tahun>-<host>` bila ada host (mis. `2024-unnes`, `2026-binus`), atau `<tahun>` saja.

## Aturan Kerja untuk Agent AI

1. **Framework wajib.** Sebelum merancang/mengevaluasi solusi apa pun, baca `strategi/framework-problem-solver.md`. Semua ide karya harus bisa dibedah dengan 4 pilar: Step 0 (Challenge the Goal), CERDAS (First-Principles), CERAH (Tactical Reality), ASIK (Integrity).
2. **Pola juara.** Saat menyusun ide, rujuk `analisis-pemenang/`. Pola kemenangan Gemastik PPL: **deep engineering** (bukan CRUD) + **isu nasional mendesak** + **demo fisik di depan juri** + selaras tema tahun berjalan.
3. **Transkrip = raw.** File di `transkrip-finalis-2025/` hasil auto-transcription banyak typo. Jangan kutip verbatim; gunakan untuk memahami alur & teknis pitch.
4. **Jangan commit** kecuali diminta eksplisit oleh user.
5. **Bahasa output**: ikuti bahasa user (biasanya Indonesia).
6. **Jangan buat file kode aplikasi** di repo ini — ini workspace riset. Kode aplikasi karya ada di repo terpisah (`verifin-app`).
