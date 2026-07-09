# AGENTS.md

Workspace riset & strategi untuk persiapan kompetisi **GEMASTIK XIX (2026)**, khususnya Divisi **Pengembangan Perangkat Lunak (PPL)**. Tim berasal dari program studi **Teknologi Rekayasa Perangkat Lunak (TRPL) Sekolah Vokasi UGM**.

## Tujuan Workspace

Bukan repo kode aplikasi. Ini adalah **workspace riset & perencanaan**: mengumpulkan aturan lomba, menganalisis pemenang masa lalu, memetakan gap riset & dosen, hingga merumuskan ide karya yang menang. Bahasa utama dokumen: **Bahasa Indonesia**.

## Struktur Direktori

```
riset/
├── panduan/                       Aturan resmi Gemastik per tahun (2022–2026).
│   └── <tahun>/                   Tiap folder: panduan-umum.md + pengumuman-juara.md
│
├── analisis-pemenang/             Bedah kasus juara masa lalu untuk ekstrak pola sukses.
│   ├── <tahun>-<nama>.md          Analisis terkurasi per karya juara.
│   ├── rujukan-paper-*.pdf        Paper ilmiah pendukung analisis.
│   └── transkrip-finalis-2025/    Transkrip (auto) presentasi 20 finalis 2025. CATATAN: banyak
│                                   salah ketik karena auto-transcription. Gunakan sebagai
│                                   referensi alur pitch & teknis, bukan kutipan verbatim.
│
├── strategi/                      Framework berpikir & perencanaan.
│   ├── framework-problem-solver.md  Metodologi inti "CCA + Step 0" (WAJIB dibaca sebelum
│   │                                 merancang solusi apa pun).
│   ├── gap-riset-indonesia.md       Celah inovasi (research gaps) lokal vs global.
│   ├── kolaborasi-dosen-ugm.md      Pemetaan dosen UGM untuk kolaborasi.
│   └── catatan-strach.md            Catatan scratch/riset dospem.
│
├── ide-karya/                     Brainstorm ide karya 2026.
│   ├── ide-disruptif-software-iot-ai.md  Ide radikal (Software+IoT+AI).
│   └── ringkasan-ekonomi-ke-ide.md       Terjemahan analisis ekonomi → ide karya.
│
├── referensi-jurnal/              Database jurnal teknologi sensor/skrining kesehatan.
│   ├── sensor-kesehatan-contactless.md
│   └── kesehatan-terbaru.md
│
└── sumber-ekonomi/                PDF analisis ekonomi (bahan baca Ferry Irwandi 2026).
    ├── cost-effectiveness-mbg.pdf
    ├── makroekonomi-indonesia-2026.pdf
    └── reformasi-subsidi-indonesia.pdf
```

## Konvensi Penamaan

- File markdown & PDF: **lowercase-dash** (mis. `gap-riset-indonesia.md`).
- File analisis pemenang: format `<tahun>-<nama-karya>.md` (mis. `2025-doalert.md`).
- Folder panduan per tahun: `<tahun>-<host>` bila ada host (mis. `2024-unnes`), atau `<tahun>` saja.

## Aturan Kerja untuk Agent AI

1. **Framework wajib.** Sebelum merancang/mengevaluasi solusi apa pun, baca `strategi/framework-problem-solver.md`. Semua ide karya harus bisa dibedah dengan 4 pilar: Step 0 (Challenge the Goal), CERDAS (First-Principles), CERAH (Tactical Reality), ASIK (Integrity).
2. **Pola juara.** Saat menyusun ide, rujuk `analisis-pemenang/`. Pola kemenangan Gemastik PPL: **deep engineering** (bukan CRUD) + **isu nasional mendesak** + **demo fisik di depan juri** + selaras tema tahun berjalan.
3. **Transkrip = raw.** File di `transkrip-finalis-2025/` hasil auto-transcription banyak typo. Jangan kutip verbatim; gunakan untuk memahami alur & teknis pitch.
4. **Jangan commit** kecuali diminta eksplisit oleh user.
5. **Bahasa output**: ikuti bahasa user (biasanya Indonesia).
6. **Jangan buat file kode aplikasi** di repo ini — ini workspace riset. Kode aplikasi karya ada di repo terpisah.
7. **PDF** di `sumber-ekonomi/` dan `analisis-pemenang/` adalah referensi baca; baca dengan tool Read bila perlu konteks, jangan direname ulang.

## Perintah Berguna

- Lint/typecheck: tidak ada (repo non-kode).
- Cek status git: `git status --short`
- Lihat semua file: `find riset -type f | sort`
