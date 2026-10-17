# Workspace Gemastik 19 — Verifin

Repositori ini adalah workspace utama kompetisi Gemastik XIX (Divisi VIII: Pengembangan Perangkat Lunak) oleh Tim Three Achilles.

## Hubungan Dua Repositori

Workspace ini mengintegrasikan dua repository terpisah:

1. **`gemastik19` (Root / Current Repo):** Berkas dokumen lomba, laporan, makalah ilmiah, proposal, slide presentasi, dan materi finalis.
   - Git Remote: `origin` -> `https://github.com/hafidzrizqullahprasetya/gemastik19.git`
   - Branch aktif: `main`

2. **`verifin-app` (`./verifin-app` via symlink):** Full-stack codebase aplikasi Verifin (FastAPI + Next.js + OSINT/AI pipeline).
   - Lokasi fisik: `/Users/fizualstd/Documents/GitHub/_LOMBA/verifin-app`
   - Git Remote: `origin` -> `https://github.com/matthewpriantara/verifin-app.git`
   - Branch kerja: `hafidz` (tim: Hafidz = core pipeline & OSINT; Akmal = OCR & IG scraper; Matthew = frontend & UI/UX)

---

## Matriks Hubungan Dokumen Lomba ↔ Source Code

Saat menyusun atau memvalidasi konten dokumen/makalah, selalu verifikasi ke implementasi riil di `./verifin-app`:

| Area / Fitur di Dokumen Lomba | Lokasi Implementasi di `verifin-app` |
| :--- | :--- |
| **Pipeline Verifikasi Utama & Orkestrasi** | `backend/app/api/v1/verify/{pipeline,router}.py` (SSE streaming) |
| **Ekstraksi Entitas & Hybrid NER** | `backend/app/services/ner.py` & `llm/entity_extraction.py` |
| **OCR Poster Lowongan Kerja** | `backend/app/services/ocr.py` |
| **OSINT Validator (No HP, Whocalls)** | `backend/app/services/osint/phone_validator.py` |
| **OSINT Legalitas & Reputasi Perusahaan** | `backend/app/services/osint/company_validator.py` |
| **OSINT Domain, Email & WHOIS/DNS** | `backend/app/services/osint/whois_handler.py` |
| **OSINT Google Form Phishing Detector** | `backend/app/services/osint/gform_inspector.py` |
| **LLM Reasoning & Scoring Verdict** | `backend/app/services/llm/verifin_reasoning.py` |
| **Explainable AI (XAI / SHAP)** | `backend/app/services/xai/shap_explainer.py` & `frontend/src/modules/report/ShapChart.tsx` |
| **Graf Jaringan Fraud (Graph Analytics)** | `backend/app/services/graph/fraud_network.py` (Visualisasi bukti di `frontend/src/components/report/EvidencePanel.tsx`) |
| **Frontend UI (Input, Verification, Report)** | `frontend/src/modules/{home,verify,report}/` |
| **Community Report & Admin Moderation** | `backend/app/api/v1/community/` & `frontend/src/modules/admin/` |

---

## Aturan Kerja Git Agent

- **Perubahan Dokumen Lomba:** Gunakan git standar di root (`git add`, `git commit`).
- **Perubahan Kode Aplikasi:** WAJIB isolasi menggunakan flag `-C verifin-app` (contoh: `git -C verifin-app status`, `git -C verifin-app commit`). Cek branch aktif terlebih dahulu (`git -C verifin-app branch --show-current`).
- **Akurasi Data:** Klaim angka metrik (akurasi, latency, arsitektur modul) pada berkas di `siap-submit/` dan `proposal-verifin/` harus konsisten dengan implementasi di `verifin-app`.
