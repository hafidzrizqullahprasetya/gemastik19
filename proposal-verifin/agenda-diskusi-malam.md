# Agenda Diskusi Tim — Revisi verifin-app (Malam ini)

## 📌 1. Sinkronisasi Istilah dengan Proposal

Proposal sudah direvisi besar. Semua istilah di app HARUS konsisten:

| Istilah Lama (di codebase) | Istilah Baru (wajib) |
|---|---|
| `trust_score` (DB column, variable) | `risk_score` |
| `TrustScoreGauge.tsx` | `RiskMeter.tsx` (sudah, cek konsistensi) |
| `Trust Score` (display text) | `Skor Risiko` |
| `AI Verifier` | `Explainable AI-powered DSS` |
| `SHAP-inspired` | `Hybrid Explanation` |

⚠️ **Cek semua:**
- Label di UI
- Variable Python/frontend
- JSON response API
- DB column nama

---

## 🔴 2. Privacy — PII Masking (CRITICAL)

Belum ada masking data pribadi sebelum kirim ke LLM. **Tambahkan segera:**

```
Input user (teks lowongan) 
  → Deteksi & mask PII (nohp, email, KTP, alamat) via regex
  → Baru kirim ke LLM
```

File target: `backend/app/services/llm_service.py`

Juga pastikan **no retention policy**: teks lowongan tidak disimpan setelah analisis selesai (kecuali di session cache sementara). File target: `backend/app/routers/analyze.py`

---

## 🚀 3. Latency Optimization (HIGH PRIORITY)

Saat ini pipeline ~86–151 detik. Ini terlalu lambat. Diskusikan:

- **Parallel API calls:** WHOIS, Maps, Kredibel harus async paralel (bukan sequential). Cek `backend/app/services/osint/` — pastikan semua independent call pakai `asyncio.gather`.
- **Async design (non-blocking):** User submit → langsung dapat response `{"job_id": ..., "status": "processing"}` → notifikasi/polling saat selesai. Arsitektur ini penting untuk pengalaman pengguna.
- **Caching:** Jika perusahaan/domain/nomor WA yang sama di-query ulang, ambil dari cache. Cache sederhana: dictionary in-memory atau Redis.
- **Streaming progress:** Tampilkan progress di UI: "Mengecek domain ✅ → Mengecek Kredibel ⏳ → ..."

**Target:** <45 detik per query.

---

## 🧮 4. Redesign Skor Risiko — Double Counting & Correlated Evidence

📌 **Double counting:** Fakta yang sama dihitung 2x (misal: "minta biaya" di Layer 2 NLP dan LLM). Mitigasi:

- Split concern: Layer 2 NLP → deteksi pola linguistik. LLM → sintesis bukti OSINT saja, BUKAN re-analisis teks lowongan.
- Atau: LLM diberi instruksi "jangan hitung ulang faktor yang sudah dideteksi Layer 2."

📌 **Correlated evidence:** Domain tua + Maps + LinkedIn + NIB semuanya berkorelasi (perusahaan resmi punya semua). Jangan jumlahkan mentah-mentah. Opsi:

- **Grouped scoring:** Maps + LinkedIn + NIB → jadi 1 grup "digital presence".
- **Diminishing returns:** Evidence pertama dalam grup = full points, kedua = setengah, ketiga = seperempat.

Diskusikan pendekatan mana yang paling feasible untuk sprint ini.

---

## 🎯 5. Threshold & Verdict

Proposal menetapkan:
- 0–39: AMAN
- 40–74: WASPADA
- 75–100: BAHAYA

Cek implementasi di `backend/app/services/trust_score.py` (atau risk_score.py setelah rename). Pastikan:

- Ambang verdict final sesuai proposal
- Ambang klasifikasi Layer 2 = 45 (F1-optimal, bukan 50 default)
- Jika tidak ada data OSINT sama sekali → verdict "Tidak Dapat Disimpulkan" (fail-close, bukan AMAN)

---

## 🧪 6. Evaluasi & Testing

- Buat test case: 5-10 lowongan (scenario legit vs scam) untuk evaluasi end-to-end pipeline.
- Cek apakah ground truth untuk testing sudah jelas: label "scam" berdasarkan apa? (Lihat definisi di proposal: laporan resmi/blacklist/manual review)
- Jika waktu memungkinkan: rencanakan **user study mini** (5-10 teman) untuk mengukur: berapa % yang benar identifikasi scam dengan vs tanpa Verifin.

---

## 🎨 7. UI/UX

- **Disclaimer eksplisit** di halaman hasil: "Skor Risiko adalah indikator berbasis data publik, bukan jaminan 100%. Keputusan akhir tetap di tangan Anda."
- **Confidence level / evidence quality** di samping verdict: "Berdasarkan 5 sumber" vs "Berdasarkan 2 sumber (terbatas)".
- **Nudging untuk skor BAHAYA:** warning lebih keras, mungkin pop-up confirm "Anda yakin ingin lanjut?" sebelum bisa lihat detail (opsional, diskusikan).

---

## ⚠️ 8. Error Handling & Fallback

- Jika WHOIS/Eksternal API timeout → jangan beri verdict AMAN. Harus tampilkan "Data tidak lengkap" + penjelasan sumber mana yang gagal.
- Jika LLM gagal → fallback: tetap tampilkan hasil OSINT + klasifikasi NLP, tanpa narasi LLM (bukan error total).

---

## 📋 Pembagian Tugas (Saran)

| Anggota | Fokus |
|---|---|
| **Hafidz** | PII masking, redesign scoring, caching, koordinasi proposal |
| **Akmal** | Paralelisasi async, retry logic, error handling, integration test |
| **Matthew** | UI konsistensi istilah, disclaimer, confidence display, progress streaming |

---

## ⏰ Timeline Saran

- Malam ini: sepakat pembagian tugas & pendekatan teknis
- Besok: implementasi paralel
- Lusa: integration test & demo internal
- ~H-2: final push, dokumentasi, latihan presentasi

---

*Catatan: Semua perubahan kode harus konsisten dengan proposal yang sudah direvisi dan di-push ke branch hafidz. File .tex/.md/.pdf sudah update di repo gemastik19. Pull dulu sebelum mulai kerja.*
