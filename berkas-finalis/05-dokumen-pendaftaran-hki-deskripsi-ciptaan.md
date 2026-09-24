# Dokumen Pendaftaran Hak Cipta (HKI): Deskripsi Program Komputer
## Persyaratan Babak Final GEMASTIK XIX 2026, Direktorat Jenderal Kekayaan Intelektual (DJKI)

**Kategori Ciptaan:** Program Komputer (Software)  
**Judul Ciptaan:**  
**VERIFIN: SISTEM PENDUKUNG KEPUTUSAN VERIFIKASI KEABSAHAN LOWONGAN KERJA BERBASIS MULTIMODAL OSINT DAN EXPLAINABLE ARTIFICIAL INTELLIGENCE**

---

## 1. Identitas Para Pencipta dan Pemegang Hak Cipta

### A. Para Pencipta (Authors)
1. **Hafidz Rizqullah Prasetya**  
   - Nomor Pokok Mahasiswa: 24/535493/SV/24243  
   - Kewarganegaraan: Indonesia  
   - Alamat: D.I. Yogyakarta, Indonesia  
   - Peran Teknis: Perancangan Arsitektur Machine Learning, OSINT Engine, dan Logika XAI Monotonik.
2. **Matthew Hayunaji Priantara**  
   - Nomor Pokok Mahasiswa: 24/536179/SV/24400  
   - Kewarganegaraan: Indonesia  
   - Alamat: D.I. Yogyakarta, Indonesia  
   - Peran Teknis: Perancangan Arsitektur Backend Asinkron FastAPI, Fraud Network Graph, dan Status Contract Engine.
3. **Akmal Manggala Putra**  
   - Nomor Pokok Mahasiswa: 24/536182/SV/24402  
   - Kewarganegaraan: Indonesia  
   - Alamat: D.I. Yogyakarta, Indonesia  
   - Peran Teknis: Perancangan Sistem Antarmuka Pengguna Next.js, Visualisasi Graf SVG, Aksesibilitas WCAG, dan Integrasi Klien.
4. **Dr.Eng. Ir. Ganjar Alfian, S.T., M.Eng.**  
   - Nomor Induk Pegawai: 11198701202201101  
   - Kewarganegaraan: Indonesia  
   - Afiliasi: Departemen Teknik Elektro dan Informatika, Sekolah Vokasi, Universitas Gadjah Mada  
   - Peran: Dosen Pembimbing dan Supervisor Metodologi Rekayasa Perangkat Lunak.

### B. Pemegang Hak Cipta (Copyright Holder)
- **Nama Lembaga:** Universitas Gadjah Mada (UGM)  
- **Alamat Lembaga:** Bulaksumur, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281  

---

## 2. Uraian Singkat Ciptaan

Program komputer Verifin adalah sistem perangkat lunak terintegrasi yang berfungsi sebagai Decision Support System (Sistem Pendukung Keputusan) untuk menguji dan memverifikasi keabsahan tawaran lowongan pekerjaan daring secara waktu nyata (real-time). 

Sistem ini diciptakan untuk memitigasi kejahatan penipuan ketenagakerjaan daring (online recruitment fraud) dan Tindak Pidana Perdagangan Orang (TPPO) yang merugikan masyarakat pencari kerja di Indonesia.

### Fitur Kunci dan Kebaruan Teknologi Program Komputer:
1. **Multimodal Data Ingestion:**  
   Program mampu menerima tiga variasi format masukan secara simultan: teks percakapan digital mentah, berkas citra poster lowongan kerja melalui integrasi modul PaddleOCR dengan prapemrosesan OpenCV CLAHE, serta alamat tautan situs web (URL).
2. **Active PII Sanitization Gateway:**  
   Program menyaring dan menyamarkan data identitas pribadi pengguna (Personally Identifiable Information / PII) seperti NIK, nomor rekening bank, dan nama individu menggunakan ekspresi reguler deterministik sebelum data diolah lebih lanjut, mematuhi standar UU Pelindungan Data Pribadi No. 27/2022.
3. **Automated Multi-Source OSINT Orchestration:**  
   Program mengorkestrasi penelusuran bukti digital berbasis intelijen sumber terbuka (Open-Source Intelligence) secara paralel dan asinkron, meliputi audit registrasi domain WHOIS/RDAP, verifikasi rekaman DNS mail server (SPF/DKIM/DMARC), penelusuran jejak digital via SearXNG, dan validasi fisik geospasial OpenStreetMap Nominatim.
4. **Bipartite Fraud Network Graph Engine:**  
   Program memodelkan entitas kontak (telepon, surel, rekening) dan data historis laporan penipuan menggunakan struktur graf bipartit heterogen berbasis NetworkX untuk mengidentifikasi pola kejahatan sindikat terorganisasi yang menggunakan identitas berulang (sybil entities) lintas perusahaan fiktif.
5. **Calibrated Additive Explainable AI (XAI) Scoring:**  
   Program menghitung skor risiko komposit skala 0 hingga 100 yang transparan melalui formulasi aditif terkalibrasi ke dalam tiga zona ambang batas baku: Aman (0 hingga 39), Waspada (40 hingga 74), dan Bahaya (75 hingga 100), dilengkapi rincian kontribusi pembobotan faktor pendukung atau peringatan anomali.

---

## 3. Spesifikasi Teknis dan Lingkungan Operasional

* **Bahasa Pemrograman:** Python 3.11+ (Backend Service), TypeScript / JavaScript ES2024 (Frontend Web).
* **Kerangka Kerja Utama:**  
  - Backend: FastAPI 0.115+, Pydantic V2, SQLAlchemy, NetworkX, PaddleOCR, Uvicorn.  
  - Frontend: Next.js 16 (App Router), React 19, Tailwind CSS v4, Motion, Phosphor Icons.
* **Basis Data:** PostgreSQL (Supabase) dengan fallback lokal SQLite3.
* **Kebutuhan Sistem Minimum Peladen (Server):**  
  - CPU: 2 Core (x86_64 atau ARM64)  
  - Memori (RAM): 2.0 GB RAM  
  - Media Penyimpanan: 10 GB SSD  
  - Konektivitas Jaringan: Akses HTTP/HTTPS (Port 80/443).
* **Kebutuhan Klien (Pengguna):**  
  - Peramban web modern (Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge) pada perangkat seluler maupun komputer desktop.

---

## 4. Matriks Kepatuhan Lisensi Pihak Ketiga

Seluruh pustaka dan komponen pihak ketiga yang diadopsi dalam pengembangan program komputer Verifin merupakan perangkat lunak bersumber terbuka (open source) yang berlisensi permisif dan mematuhi kaidah Hak Kekayaan Intelektual internasional:

### Tabel 1. Daftar Pustaka Pihak Ketiga dan Lisensi Terkait

| Nama Komponen / Library | Pengembang / Organisasi | Jenis Lisensi | Penggunaan dalam Verifin |
| :--- | :--- | :---: | :--- |
| FastAPI | Sebastián Ramírez | MIT License | Kerangka kerja inti penyedia layanan REST API asinkron. |
| Next.js | Vercel, Inc. | MIT License | Kerangka kerja aplikasi antarmuka web interaktif. |
| PaddleOCR | PaddlePaddle Authors (Baidu) | Apache License 2.0 | Ekstraksi teks dari citra poster lowongan kerja. |
| NetworkX | NetworkX Developers | BSD 3-Clause | Analisis graf dan pemodelan relasi sindikat kejahatan. |
| Pydantic | Samuel Colvin | MIT License | Validasi skema data dan integritas muatan kontrak API. |
| Tailwind CSS | Tailwind Labs | MIT License | Tata letak dan desain visual antarmuka pengguna. |
| OpenCV (Python) | OpenCV Team | Apache License 2.0 | Pra-pemrosesan citra (CLAHE) sebelum deteksi OCR. |
| python-whois | Richard Penman | MIT License | Kueri data registrasi nama domain dan server DNS. |

---

## 5. Cuplikan Kode Sumber Representatif

### A. Bagian Awal: Ingestion dan PII Sanitizer Gateway
```python
# File: verifin-app/backend/app/services/ner.py
import re
from typing import Dict, Any, List

def sanitize_pii(text: str) -> str:
    """
    Menyamarkan informasi identitas pribadi (PII) sebelum diproses ke modul NLP
    Sesuai standar kepatuhan UU Pelindungan Data Pribadi No. 27/2022.
    """
    # Masking Nomor Induk Kependudukan (NIK 16 Digit)
    text = re.sub(r'\b\d{16}\b', '[NIK_TERLINDUNGI_VERIFIN]', text)
    # Masking Rekening Bank & Kartu Kredit
    text = re.sub(r'\b\d{10,16}\b', '[NOMOR_REKENING_TERLINDUNGI]', text)
    # Masking Nomor Telepon Pelamar Pribadi
    text = re.sub(r'(\+62|08)[0-9]{8,12}', '[NOMOR_KONTAK_DISAMARKAN]', text)
    return text
```

### B. Bagian Tengah: Multi-Source OSINT Probe Orchestrator
```python
# File: verifin-app/backend/app/services/osint/pipeline.py
import asyncio
from typing import Dict, Any, List
from app.services.osint.status_contract import ProbeResult, ProbeStatus

async def execute_osint_orchestration(entities: Dict[str, Any]) -> List[ProbeResult]:
    """
    Eksekusi probe OSINT multi-sumber secara paralel dengan batas waktu 3.0 detik
    """
    tasks = [
        asyncio.wait_for(probe_domain_whois(entities.get("domain")), timeout=3.0),
        asyncio.wait_for(probe_mail_records(entities.get("domain")), timeout=3.0),
        asyncio.wait_for(probe_geospatial_osm(entities.get("address")), timeout=3.0),
        asyncio.wait_for(probe_fraud_graph(entities.get("contact")), timeout=3.0)
    ]
    results = await asyncio.gather(*tasks, return_exceptions=True)
    return [normalize_probe_status(res) for res in results]
```

### C. Bagian Akhir: Explainable AI Additive Risk Calculation
```python
# File: verifin-app/backend/app/services/xai/explainer.py
from typing import Dict, Any, List

def calculate_calibrated_risk(base_score: float, probe_evidences: List[Dict[str, Any]]) -> Dict[str, Any]:
    """
    Kalkulasi skor risiko aditif terkalibrasi monotonik dalam rentang [0, 100]
    Ambang Batas Baku: 0-39 (AMAN), 40-74 (WASPADA), 75-100 (BAHAYA)
    """
    total_score = base_score
    for evidence in probe_evidences:
        if evidence.get("status") == "COMPLETED":
            total_score += evidence.get("weight", 0.0) * evidence.get("severity", 1.0)
            
    clamped_score = max(0.0, min(100.0, total_score))
    
    if clamped_score < 40.0:
        verdict = "AMAN"
    elif clamped_score < 75.0:
        verdict = "WASPADA"
    else:
        verdict = "BAHAYA"
        
    return {
        "risk_score": round(clamped_score, 1),
        "verdict": verdict,
        "evidence_breakdown": probe_evidences
    }
```
