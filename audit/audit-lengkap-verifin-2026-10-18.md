# Audit Lengkap Verifin · 18 Oktober 2026

Cakupan: Laporan Akhir (`proposal-verifin/...Laporan Akhir.tex`), kode `verifin-app` di `main` (`21955f0`), probe OSINT, OCR, keamanan admin, aksesibilitas, dan daftar pustaka.

Semua temuan di bawah bisa dicek ulang. Kolom **Bukti** menunjuk baris file, perintah, atau URL yang dibuka langsung. Tidak ada temuan yang hanya berdasar cuplikan mesin pencari.

## Cara membaca

| Prioritas | Arti |
|---|---|
| **KRITIS** | Bisa membuat juri menilai laporan tidak jujur, atau celah keamanan yang bisa disalahgunakan siapa saja. Bereskan sebelum unggah 26–30 Okt. |
| **TINGGI** | Bug yang mengubah hasil, atau klaim laporan yang tidak sesuai kode. |
| **SEDANG** | Ketidakkonsistenan yang terlihat juri, tapi tidak mengubah hasil. |
| **RENDAH** | Kerapian. |

Kategori: **K** = klaim Laporan Akhir, **B** = bug kode, **S** = keamanan/privasi, **U** = UI/UX, **A** = aksesibilitas, **P** = sumber/pustaka.

## Ringkasan

| Prioritas | Jumlah |
|---|---|
| KRITIS | 9 |
| TINGGI | 13 |
| SEDANG | 13 |
| RENDAH | 7 |
| **Total** | **42** |

Yang sudah **sesuai** dan aman diklaim ada di Lampiran A (kolom status "Sesuai").

---

## Daftar temuan

### KRITIS

**1. [K] Angka pengujian di Bab VI-E tidak ada datanya.**
Laporan baris 1384–1430: 146 kasus uji, coverage rata-rata 88,4%, tabel coverage per modul (94,2%, 91,5%, dst.), "pass rate 100%".
Bukti: `venv/bin/python -m pytest -q --cov=app` → **43 tes, semua lulus, coverage total 18%** (NER 14%, router 0%, OSINT 8–32%, XAI 88%, graf 95%).
Saran: ganti tabel dengan angka riil, dan jelaskan modul mana yang sudah dan belum dites. Juri sudah mengkritik kualitas pengujian.

**2. [K] Latensi 68,4 detik beserta rincian per tahap tidak berdasar data.**
Laporan baris 1394: OCR 8,2 s, OSINT 14,5 s, LLM 41,2 s, XAI 4,5 s.
Bukti: uji 17 Okt (`video-profil-60-detik/demo/laporan-uji-17-okt-2026.md`) mencatat **40–54 detik** per kasus. OCR poster P1 hari ini **13,6 s**, VinFast **4,8 s**. Tidak ada log yang menghasilkan angka 68,4.
Saran: ukur ulang 10–20 kasus dari `test/okt-2026/` dan laporkan median beserta rentangnya.

**3. [K] Klaim "hasil uji coba terbatas (pilot study) bersama pengguna riil".**
Laporan baris 553. Bagian C.3 sendiri menyebutnya "rancangan protokol yang disiapkan untuk dieksekusi"; pilotnya belum pernah dijalankan.
Saran: hapus frasa "hasil uji coba", atau jalankan uji pengguna 10–15 orang sebelum unggah.

**4. [K] Klaim CI/CD GitHub Actions dengan threshold coverage 85%.**
Laporan baris 1438. Bukti: `.github/workflows/deploy.yml` hanya build Docker, dipicu manual (`workflow_dispatch`), dan tidak menjalankan tes.
Saran: tambah workflow `pytest` sederhana (mudah, sekitar 15 menit kerja), atau ubah klaimnya menjadi rencana.

**5. [S] Endpoint moderasi laporan komunitas tanpa autentikasi.**
Bukti: `backend/app/api/v1/community/router.py:207` `PATCH /community/reports/{id}` tidak punya pengecekan admin. Login admin hanya menjaga halaman frontend (`frontend/src/app/api/admin/*`), sementara backend tetap bisa dipanggil langsung.
Dampak: siapa saja bisa menyetujui laporan palsu. Laporan yang disetujui ikut memengaruhi penilaian, jadi celah ini bisa dipakai mencemarkan nama perusahaan, risiko yang disorot juri.
Saran: token admin di header yang dicek backend (misalnya `X-Admin-Token` dari env).

**6. [S] IP pelapor terbuka ke publik.**
Bukti: `GET /community/reports` (`router.py:167`) mengembalikan `reporter_ip` tanpa autentikasi.
Bertentangan dengan Laporan baris ~759: "identitas pelapor tidak diekspos ke antarmuka publik".
Saran: lindungi endpoint dengan token admin dan jangan kirim `reporter_ip` ke frontend.

**7. [S] `GET /api/v1/cases` membuka seluruh riwayat analisis.**
Bukti: `backend/app/api/v1/verify/router.py` `list_cases` mengembalikan `raw_text_preview`, `phones`, `emails` tanpa autentikasi. Endpoint ini dipakai dashboard admin.
Dampak: perlindungan privasi di fitur publik `/cari` (yang sengaja hanya mengirim ringkasan) jadi percuma, karena data mentah tetap bisa diambil lewat endpoint ini.
Saran: jadikan khusus admin, memakai token yang sama dengan nomor 5.

**8. [P] Statistik GASA salah tahun, sebagian tidak ditemukan, sebagian bertentangan dengan sumber.**
Laporan baris 270–276, 568, 1107, 1275; pustaka [2] "State of Scams in Indonesia **2024**".
Bukti (siaran pers Mastercard, 31 Okt 2025, dibuka langsung):
- 66% orang dewasa menemui penipuan dan kerugian Rp49 triliun: **benar**, tapi dari laporan **edisi 2025**. Edisi 2024 untuk Indonesia tidak ditemukan.
- Kerugian rata-rata **Rp1,7 juta per orang**. Laporan memakai Rp4,2–18,5 juta dan menjadikan Rp4,2 juta dasar model dampak, sehingga estimasi Rp5,5–41,3 miliar ikut tergelembung sekitar 2,5 kali.
- "49% korban terekspos modus lowongan kerja": **tidak ditemukan** di siaran pers maupun ringkasan GASA.
- "12–18% lowongan di kanal tak terverifikasi berpotensi penipuan" (dasar nilai 12): **tidak ditemukan**.
Saran: perbaiki tahun pustaka, ganti L̄ menjadi Rp1,7 juta dan hitung ulang tabel dampak, hapus angka 49% dan 12–18%. Nilai dasar 12 cukup dijelaskan sebagai *expert judgement* (sudah disebut di baris 1241).

**9. [P] Dasar hukum yang dikutip sudah dicabut.**
Laporan baris 1103 dan 1276: "larangan pungutan biaya Pasal 38 Permenaker No. 39/2016".
Bukti: JDIH BPK (`peraturan.bpk.go.id/Details/146213`) menyatakan Permenaker 39/2016 **tidak berlaku, dicabut dengan Permenaker No. 18 Tahun 2024** tentang Penempatan Tenaga Kerja Dalam Negeri. Pemberitaan 2017 juga menyebut larangan pungutan ada di **Pasal 54 ayat (3)**, bukan Pasal 38.
Saran: kutip Permenaker 18/2024 (cek dulu pasal larangan pungutannya di teks resmi) atau UU 13/2003.

### TINGGI

**10. [B] Deadlock OCR saat model belum dimuat.**
Bukti: `backend/app/services/ocr.py:89` mengambil `ocr_lock` (`threading.Lock`, tidak reentrant), lalu `get_ocr_model()` (baris 18–20) mencoba mengambil lock yang sama. Saat diuji dengan model dingin, proses macet tanpa batas (CPU 0%, stack trace menunjukkan `_pthread_cond_wait`).
Kenapa tidak terlihat: server memanaskan model saat startup (`main.py:62`). Tapi kalau warmup gagal, yang hanya dicatat sebagai warning, request OCR pertama macet selamanya dan mengunci semua request OCR berikutnya.
Saran: ganti menjadi `threading.RLock()`, atau panggil `get_ocr_model()` sebelum mengambil lock.

**11. [B] Kontribusi aman "Hasil Web Relevan" hilang untuk perusahaan asli.**
Bukti: `shap_explainer.py:254–266` hanya memberi −10 jika `companies[].stats.public_mentions > 0`. Untuk Qhomemart (loker asli), `companies.stats.public_mentions = 0` ("Tidak ada hasil relevan"), padahal pada run yang sama `web.evidence_counts.relevant_results = 7`, termasuk situs resmi `qhomemart.com`. Prompt LLM juga menerima dua fakta yang bertentangan (`prompt_builder.py:108` vs `:196`).
Dampak: skor loker asli lebih tinggi dari seharusnya, dan berisiko jadi false positive.
Saran: pakai satu sumber kebenaran (`web.evidence_counts`) untuk kontribusi ini, atau samakan filter relevansi di `company_validator`.

**12. [B] Merge hybrid NER tanpa validasi grounding.**
Bukti: `pipeline.py:141–225`. Nama perusahaan dari LLM langsung menggantikan regex tanpa dicek keberadaannya di teks; penanda `validation_applied` selalu `False`.
Bertentangan dengan klaim "anti-halusinasi" di Laporan Bab VI-A.4.
Saran: entitas dari LLM hanya diterima kalau muncul (fuzzy) di teks sumber.

**13. [B] Lokasi dan gaji berisi sampah karena hasil regex dan LLM hanya ditumpuk.**
Bukti (uji ke loker The Biker Shop): lokasi `['Kerja', 'perusahaan']` dari label "Lokasi Kerja:" dan kata "cabang perusahaan"; gaji `['Kompetitif']` dari LLM. Regex juga tidak mengenali `Rp120rb`, `/hari`, dan `UMR`.
Saran: validator setelah merge (gaji harus berisi angka/UMR, daftar kata sampah). Jangan menambah pola regex per format.

**14. [B] Fallback regex gagal membaca nama perusahaan.**
Bukti: `ner.py:122` hanya mengenali `Nama Perusahaan:`, bukan `Nama Perusahaan/Usaha:` (format umum akun loker). Nama tanpa awalan PT/CV juga tidak terbaca. Kalau LLM timeout, nama perusahaan kosong dan probe perusahaan tidak jalan.
Saran: regex label yang lebih longgar, khusus untuk jalur cadangan.

**15. [B] Nomor admin akun penyebar ikut diperiksa sebagai kontak loker.**
Bukti: loker Qhomemart dari @jogjalowker_official menghasilkan dua nomor: kontak HR dan `085117775180` (baris "ADMIN" promosi).
Dampak: kalau nomor admin pernah dilaporkan, semua loker yang mereka repost bisa ikut dinilai BAHAYA.
Saran: abaikan nomor di baris berlabel admin/promosi/pasang iklan, atau tandai sebagai "kontak penyebar".

**16. [K] Fitur yang diklaim tapi tidak ada di kode.**
- Upvote/downvote laporan komunitas (FR-12, baris 905, 1620): tidak ada.
- Halaman Komunitas berisi feed laporan, pencarian entitas, dan voting (baris 1584–1620): tidak ada route-nya. Yang ada hanya `/report-job` (form lapor). Pencarian entitas sekarang tersedia di `/cari` (ditambahkan 18 Okt).
- Visualisasi graf interaktif (FR-11, baris 904; Sprint 3): `get_network_graph_data` tidak pernah dipanggil dan frontend tidak punya komponen graf.
- Riwayat "berdasarkan sesi/akun" (FR-13): riwayat hanya di localStorage browser.
Saran: ubah klaim menjadi kondisi sebenarnya, atau implementasikan yang paling murah (feed laporan yang sudah disetujui).

**17. [K] Infrastruktur yang diklaim tapi tidak dipakai.**
Upstash Redis (baris 613, termasuk "hit rate 55%"), pgvector (611), Supabase Pro dan backup harian (611). Tidak ada Redis atau vektor di kode maupun requirements. Cache yang ada adalah cache DB per hash teks/URL.
Saran: tabel biaya disusun ulang dari infrastruktur nyata (Supabase, LLM API, server Dokploy, SearXNG self-hosted).

**18. [K] Rate limiting diklaim tiga kali, tapi tidak ada.**
Baris 842 (Security by Design), 929 (NFR-03), 1428 ("proteksi rate-limit 100% sukses"). Tidak ada middleware rate limit.
Dampak tambahan: endpoint `/verify` bisa disalahgunakan sehingga biaya LLM membengkak.
Saran: `slowapi` per IP di endpoint `/verify/*` dan login admin.

**19. [K] PII "disanitasi" diklaim, tapi belum ada.**
Baris 1618: "seluruh PII disanitasi". Baris 762 jujur menyebut masking sebagai rencana, tapi baris 1618 bertentangan. Juri sudah menyorot ini.
Saran: samakan dengan kondisi sebenarnya, atau terapkan masking nomor/email sebelum teks dikirim ke LLM reasoning.

**20. [K] Formula XAI di laporan berbeda dengan kode.**
- Bobot dalam persen (25/15/15/10/15/20%, baris 1253–1262) vs kode memakai poin absolut (biaya +40, nomor terlapor +35, form +30, jaringan penipuan +30, dst.).
- "φ diskalakan proporsional agar total sama dengan skor final" (baris 1278) vs kode menambahkan kontribusi selisih bernama "Penyesuaian Penalaran AI" (contoh kasus uji: +37).
- "Domain < 30 hari" (baris 1181) vs tabel "< 90 hari" (1255); kode memakai 90 hari.
Saran: tulis ulang tabel dari `_FEATURE_WEIGHTS` dan jelaskan kontribusi penyesuaian AI secara terbuka. Ini pertanyaan juri yang paling mungkin muncul.

**21. [K] Definisi BAHAYA tidak dijamin oleh formula.**
Baris 1103: "terdeteksi minimal satu pelanggaran hukum mutlak". Secara aditif, satu permintaan biaya (+40) ditambah nilai dasar 12 = 52, masih WASPADA. Skor baru mencapai BAHAYA karena kontribusi penyesuaian LLM.
Saran: tambah aturan lantai di kode (permintaan biaya atau nomor terlapor → skor minimal 75), atau ubah kalimat di laporan.

**22. [U] Belum ada disclaimer "AMAN bukan jaminan legalitas" di halaman hasil.**
Komentar juri nomor 4 menyebut ini secara eksplisit. Yang ada hanya disclaimer umum di footer.
Saran: satu kalimat di bawah verdict AMAN dan WASPADA.

### SEDANG

**23. [K] Klaim sumber OSINT yang tidak ada.**
- "Identifikasi operator berdasarkan prefix (Telkomsel, Indosat, XL)" (baris 1189): tidak ada di `phone_validator.py`. Teks seperti itu hanya muncul di file debug lama (yang tidak di-commit).
- "Legalitas ... ditemukan di direktori publik" (baris 1259): kode secara jujur menulis "Legalitas formal PT (AHU/OSS) tidak diotomasi; hanya jejak web publik".
- "Deteksi inkonsistensi klaim jabatan" (baris 1199): tidak ditemukan.
- Media sosial (baris 683) disebut Instagram, Facebook, LinkedIn; kode memeriksa Instagram, Threads, TikTok, Facebook, X, dan Linktree.

**24. [K] "NER regex dan LLM berjalan paralel".**
Baris 1148. Kode menjalankannya berurutan (`pipeline.py:144–146`: regex selesai dulu, baru LLM).
Saran: jalankan dengan `asyncio.gather`, atau ubah kalimatnya.

**25. [K] Skema dan enum di laporan berbeda dengan kode.**
Baris 1334: `report_type` (penipuan/biaya_ilegal/tppo) dan `status` (pending/verified/rejected). Kode: `status` pending/**approved**/rejected; frontend memakai jenis biaya_travel, perusahaan_fiktif, tppo_eksploitasi, pencurian_data_scam.

**26. [K] Angka kecil yang tidak cocok.**
- FR-01 "min. 50 karakter" vs schema `min_length=10`.
- "12 endpoint" vs **16** endpoint di `/openapi.json` (termasuk `/cases/search` baru).
- Bab I-B dan II-A.1 menyebut input "teks atau URL", padahal gambar/poster juga didukung.
- "Fraud Network Graph diinisialisasi dengan dataset awal terkurasi" (baris 690): tidak ada data awal, dan sejak 18 Okt tabel `job_cases` dikosongkan.

**27. [K] "Test-Driven: setiap modul dilengkapi unit test sebelum integrasi" (baris 841).**
Bertentangan dengan coverage 18% (nomor 1). Ubah kalimatnya.

**28. [P] Data Kemenlu dikutip keliru.**
Laporan baris 277–280: "lebih dari 3.300 WNI diselamatkan ... 2020–2024, yang **keseluruhannya** berangkat akibat iklan lowongan palsu".
Bukti (Suara Surabaya, mengutip Direktur PWNI Kemlu): **3.428 kasus, periode 2020–2023, sekitar 40% terindikasi TPPO**. Tidak ada pernyataan "keseluruhannya akibat iklan lowongan".
Saran: "Kemenlu mencatat 3.428 kasus WNI terkait online scam pada 2020–2023, sekitar 40% terindikasi TPPO."

**29. [P] Halaman pustaka [11] GAR-HGNN salah.**
Laporan: hlm. 297–302. Crossref (DOI 10.1145/3760269.3760321): **321–325**.

**30. [U] Halaman lapor: pill "COMMUNITY WATCH" dan badge "LAPORAN KOMUNITAS".**
Bukti: `ReportJobPage.tsx:265–276`. Label berbahasa Inggris dengan titik merah dekoratif yang tidak menandai status apa pun, plus badge kanan atas yang hanya mengulang judul.
Saran: hapus keduanya, cukup judul "Laporkan Lowongan Mencurigakan".

**31. [U] Teks halaman lapor bertentangan dengan framing verdict.**
`ReportJobPage.tsx:281`: laporan "mempengaruhi skor risiko perusahaan". Halaman `/cari` menegaskan verdict menilai lowongan, bukan perusahaan. Juri menyinggung risiko pencemaran nama baik.
Saran: "...sebelum dipakai sebagai bukti tambahan saat lowongan dengan kontak yang sama diperiksa."

**32. [U] Beranda: label kecil berbahasa Inggris dan statistik tanpa dasar.**
`HomePage.tsx:130, 220`: "Job Risk Platform", "Job Risk Infrastructure" (mono, huruf kapital berjarak lebar). Statistik "100% Transparan — Evidence Attribution" tidak terukur.
Saran: hapus kedua label, dan ganti statistik dengan fakta yang bisa diverifikasi (misalnya "6 pemeriksaan berjalan bersamaan").

**33. [A] Kontras teks redup di bawah standar WCAG AA.**
Bukti (dihitung dari token `globals.css`): `--text-muted` #8a8279 di atas `--bg` = **3,57:1**, di atas `--bg-subtle` = **3,25:1**. Minimal untuk teks kecil adalah 4,5:1. Token ini dipakai di **66 tempat** dengan ukuran 9–11 px. Badge lokasi `amber-500` di atas putih = **2,15:1**.
Saran: gelapkan `--text-muted` menjadi sekitar #6f675e (kurang lebih 5:1) dan pakai token verdict untuk badge lokasi.

**34. [A] Tombol ikon tanpa label dan elemen klik yang tidak bisa diakses keyboard.**
Bukti: 44 `<button>` di frontend, sebagian besar tombol ikon tanpa `aria-label`. Kartu riwayat (`SearchHistory.tsx:166`) berupa `<div onClick>`, sehingga tidak bisa dibuka dengan keyboard. Hanya 3 penggunaan `focus-visible`.
Saran: `aria-label` di tombol ikon, ubah kartu riwayat menjadi `<button>` atau `<Link>`, dan tambahkan gaya fokus global.

**35. [U] Warna di luar token desain.**
`ReportPage.tsx:491, 496` (badge lokasi `amber-500`/`blue-500`) dan `VerifyBox.tsx` (titik `emerald-500` berkedip). Saran: pakai token `waspada`/`aman` atau warna netral.

### RENDAH

**36. [U] Label tidak konsisten.** Tombol kembali punya tiga versi ("Kembali ke Beranda", "Kembali", "Verifikasi baru"). "Lapor komunitas" (navbar) vs "Lapor Komunitas" (footer). "Waktu Submit" di tabel admin.

**37. [U] Footer publik memuat jargon dan link admin.** "Heterogeneous Graph", "Evidence Attribution", dan link "Dashboard Admin".

**38. [U] Duplikasi dan dekorasi.** Fungsi ikon platform sosmed ditulis dua kali (`ReportPage.tsx` dan `EvidencePanel.tsx`); gradient dekoratif di kartu bukti.

**39. [B] Variabel mati sisa refactor.** `shap_explainer.py:228` (`has_area_address`), `:404` (`osint_ms`), `:485` (`public_footprint`); `web_evidence.py:398` (`target_words`); argumen `reason` di `verifin_reasoning.py:131`. Tidak mengubah skor. Nomor 11 menunjukkan logika serupa yang belum tersambung.

**40. [S] Login admin tanpa pembatasan percobaan.** `app/api/admin/login/route.ts` membandingkan password secara aman (`timingSafeEqual`), tapi tidak membatasi jumlah percobaan. Token sesi juga deterministik (hash password + secret), jadi tidak bisa dicabut tanpa mengganti password.

**41. [B] Spasi hilang di hasil OCR.** "GLOBALSINERGI", "SALESCOUNTER", "Usiamaksimal". Entitas masih tertangkap lewat LLM, tapi pencocokan nama perusahaan lewat web bisa meleset.

**42. [U] Emoji di data probe.** `gform_inspector` mengirim `safe_flags` berawalan "ℹ️". Kalau ditampilkan apa adanya di UI, emoji ini tidak konsisten dengan gaya antarmuka.

---

## Lampiran A · Matriks klaim Laporan Akhir vs kode/data

Status: **Sesuai** · **Sebagian** · **Tidak sesuai** · **Tak terverifikasi**.

| # | Klaim (baris tex) | Status | Bukti | Temuan |
|---|---|---|---|---|
| A1 | BPS Feb 2025: 7,28 juta penganggur, TPT 4,76% (265) | Sesuai | detik.com mengutip Kepala BPS | — |
| A2 | GASA: 66% terekspos, Rp49 triliun (270) | Sebagian | Benar, tapi edisi 2025 | 8 |
| A3 | GASA: 49% terekspos modus lowongan (273, 568) | Tak terverifikasi | Tidak ada di siaran pers maupun ringkasan GASA | 8 |
| A4 | Kerugian rata-rata Rp4,2–18,5 juta (568) | Tidak sesuai | Sumber: Rp1,7 juta/orang | 8 |
| A5 | Kemenlu 3.300+ WNI 2020–2024, seluruhnya dari iklan lowongan (277) | Tidak sesuai | 3.428 kasus 2020–2023, 40% TPPO | 28 |
| A6 | Prevalensi 18% "berdasarkan observasi awal" (569) | Tak terverifikasi | Tidak ada data observasi | 8 |
| A7 | Biaya Rp250–350/verifikasi, BCR 1.259:1 (594–596) | Tak terverifikasi | Bergantung pada Redis/pgvector yang tidak dipakai, dan L̄ yang keliru | 8, 17 |
| A8 | "Hasil uji coba terbatas (pilot)" (553) | Tidak sesuai | Pilot belum dijalankan | 3 |
| A9 | Fraud Network Graph dari PostgreSQL (506) | Sesuai | `fraud_network.py` membangun NetworkX dari `job_cases` | — |
| A10 | Graf diinisialisasi dengan dataset awal (690) | Tidak sesuai | Tidak ada data awal | 26 |
| A11 | REST API terdokumentasi FastAPI (FR-14) | Sesuai | `/docs`, `/openapi.json` | — |
| A12 | 12 endpoint (1397, 1428) | Tidak sesuai | 16 endpoint | 26 |
| A13 | FR-01 minimal 50 karakter (889) | Tidak sesuai | `min_length=10` | 26 |
| A14 | FR-03 NER hibrida regex + LLM (1132–1153) | Sebagian | Ada, tapi berurutan, tanpa grounding, hasil ditumpuk | 12–14, 24 |
| A15 | Whois + fallback Wayback CDX (1180) | Sesuai | `whois_handler.py:28` (plus RDAP). Uji: qhomemart.co.id 9,4 tahun (RDAP), newsaphirhotel.com 13,5 tahun | — |
| A16 | SPF/DMARC email (673) | Sesuai | `check_email_security`; uji qhomemart: MX Google, SPF/DMARC tidak aktif | — |
| A17 | Kaspersky Who Calls + SERP (FR-06) | Sesuai | `phone_validator.py:57, 84`; uji: nomor Qhomemart CLEAN | — |
| A18 | Identifikasi operator prefix (1189) | Tidak sesuai | Tidak ada di kode | 23 |
| A19 | SearXNG multi-engine + filter relevansi (677, FR-07) | Sesuai | `search.hafidzprasetya.web.id` aktif (sertifikat berlaku s.d. 19 Nov 2026); uji: 7 hasil relevan untuk Qhomemart | 11 |
| A20 | Nominatim/OSM (675) | Sesuai | Uji: alamat Qhomemart cocok di level wilayah (Janti, Depok, Sleman) | — |
| A21 | Inspeksi Google Form (FR-05) | Sesuai | Uji: form Biker Shop → "login diperlukan, isi tidak bisa diverifikasi" (jujur, tidak diklaim aman) | — |
| A22 | Media sosial Instagram/Facebook/LinkedIn (683) | Sebagian | Platform yang diperiksa berbeda | 23 |
| A23 | Legalitas perusahaan di direktori publik (1259) | Tidak sesuai | AHU/OSS tidak diotomasi | 23 |
| A24 | LLM temperature 0, seed 42 (1222) | Sesuai | `client.py:149–169`, `verifin_reasoning.py:377–379` | — |
| A25 | Output LLM berskema JSON, dilarang mengarang (1218) | Sesuai | `prompt_builder.py` aturan evidence-only, `evidence_policy` | — |
| A26 | Ambang 0–39/40–74/75–100 (1100–1103) | Sesuai | `app/services/constants.py` 40/75 | — |
| A27 | BAHAYA = minimal satu pelanggaran hukum (1103) | Tidak sesuai | Tidak dijamin formula | 21 |
| A28 | Bobot XAI dalam persen (1253–1262) | Tidak sesuai | Kode memakai poin absolut | 20 |
| A29 | Nilai dasar 12 (1263, 1273) | Sesuai (angka) | `shap_explainer.py` base 12; justifikasi GASA 12–18% tidak berdasar | 8 |
| A30 | φ diskalakan proporsional (1278) | Tidak sesuai | Kode memakai kontribusi selisih "Penyesuaian Penalaran AI" | 20 |
| A31 | Permenaker 39/2016 Pasal 38 (1103, 1276) | Tidak sesuai | Dicabut oleh Permenaker 18/2024; pasal larangan = 54(3) | 9 |
| A32 | SHA-256 dedup `raw_text_hash` (1321, 1333) | Sesuai | `hasher.py` `compute_content_sha256` | — |
| A33 | Skema `community_reports` (1334) | Sebagian | Enum status/jenis berbeda | 25 |
| A34 | PaddleOCR (1316, 1393) | Sesuai | `ocr.py`; uji poster P1 63 baris, nama PT dan nomor WA terbaca | 10, 41 |
| A35 | Upstash Redis, pgvector (611–613) | Tidak sesuai | Tidak dipakai | 17 |
| A36 | Rate limiting (842, 929, 1428) | Tidak sesuai | Tidak ada | 18 |
| A37 | PII disanitasi (1618) | Tidak sesuai | Belum ada | 19 |
| A38 | Identitas pelapor tidak diekspos (759) | Tidak sesuai | `reporter_ip` terbuka di API publik | 6 |
| A39 | Upvote/downvote (905, 1620) | Tidak sesuai | Tidak ada | 16 |
| A40 | Halaman Komunitas (feed, cari, vote) (1584–1620) | Tidak sesuai | Tidak ada route | 16 |
| A41 | Graf interaktif (FR-11, 904) | Tidak sesuai | Tidak ada komponen; fungsi data graf tidak dipanggil | 16 |
| A42 | Riwayat per sesi/akun (FR-13, 907) | Sebagian | localStorage saja (laporan baris 1622 sudah jujur) | 16 |
| A43 | Gauge animasi skor (1467) | Sesuai | `ReportPage.tsx` memakai `strokeDasharray` | — |
| A44 | Panel detail collapsible (1457) | Sesuai | "Detail Teknis & Atribusi Bukti" | — |
| A45 | Responsif mobile (1471) | Sebagian | `/cari` sudah dicek 375 px; halaman lain belum diaudit | — |
| A46 | Coverage 88,4%, 146 kasus (1384–1430) | Tidak sesuai | 18%, 43 tes | 1 |
| A47 | Latensi 68,4 detik (1394) | Tidak sesuai | 40–54 detik | 2 |
| A48 | CI/CD GitHub Actions (1438) | Tidak sesuai | Hanya build Docker manual | 4 |
| A49 | Test-Driven (841) | Tidak sesuai | Coverage 18% | 27 |
| A50 | NER paralel (1148) | Tidak sesuai | Berurutan | 24 |
| A51 | Deployment Vercel + Dokploy (Sprint 4) | Tak terverifikasi | Ada `deploy.yml` (GHCR) dan URL Cloudflare Tunnel di `.env.example`; Vercel tidak terlihat | — |
| A52 | EMSCAD tidak cocok untuk konteks Indonesia (709–722) | Sesuai (argumen) | Argumen literatur valid; file `evaluasi-emscad.json` sebenarnya berisi 24 sampel internal, bukan EMSCAD | — |

## Lampiran B · Verifikasi daftar pustaka

| No | Rujukan | Status | Catatan |
|---|---|---|---|
| [1] | BPS, Keadaan Ketenagakerjaan Feb 2025 | Angka terverifikasi | Nomor BRS belum dicek langsung di bps.go.id |
| [2] | GASA & Mastercard, "State of Scams in Indonesia 2024" | **Tahun salah** | Edisi yang ada: 2025 (rilis 31 Okt 2025). Lihat nomor 8 |
| [3] | Kemenlu, Penanganan WNI Korban Online Scamming, 2024 | Dokumen spesifik tidak ditemukan | Angka yang ada: 3.428 kasus 2020–2023 (pemberitaan). Lihat nomor 28 |
| [4] | UNODC, Casinos, Cyber Fraud, and Trafficking..., 2023 | Belum dicek | — |
| [5] | Amaar et al., Neural Processing Letters 54(3):2219–2247, 2022 | **Valid** | Crossref cocok |
| [6] | Taneja et al., Fraud-BERT, Discover Computing 28, 2025 | **Valid** | Crossref cocok |
| [7] | Varsha & Thomas, XAI Phishing Detection, IEEE RAICS 2025 | **Valid** | Crossref hlm. 64–68 (laporan tidak mencantumkan halaman) |
| [8] | Pastor-Galindo et al., IEEE Access 8:10282–10304, 2020 | **Valid** | Crossref cocok |
| [9] | Wilie et al., IndoNLU, AACL 2020, 843–857 | **Valid** | Crossref cocok (DOI 10.18653/v1/2020.aacl-main.85) |
| [10] | Vidros et al., Future Internet 9(1):6, 2017 (EMSCAD) | **Valid** | Crossref cocok |
| [11] | Shi, GAR-HGNN, ACAIB 2025 | **Halaman salah** | Crossref: 321–325, laporan: 297–302 |

## Lampiran C · Catatan uji 18 Okt 2026

- **NER hybrid** (5 loker nyata, `test/okt-2026/` + The Biker Shop): LLM berhasil mengisi nama perusahaan di semua kasus dan alamat Qhomemart. Regex sendirian gagal menemukan perusahaan di semua kasus. Detail: nomor 12–15.
- **OSINT** (entitas Qhomemart): WHOIS/RDAP, MX/SPF/DMARC, Kaspersky, SearXNG, OSM, dan Facebook berjalan. Satu error SSL berasal dari sertifikat situs `qhomemart.co.id` sendiri yang kedaluwarsa (milik pihak luar, ditangani dengan aman). Error socket "nodename nor servname" berasal dari probe sekunder, bukan dari SearXNG; sumber pastinya belum dilacak.
- **OCR**: P1 1086×1448, 63 baris, 13,6 s; VinFast 790×1040, 18 baris, 4,8 s (model sudah dipanaskan). Uji dengan model dingin memicu deadlock (nomor 10).
- **Belum diaudit**: pipeline URL/SSE end-to-end, tampilan mobile halaman selain `/cari`, mode gelap, error state saat backend mati, dan dokumen lain di `siap-submit/`.

## Sumber web yang dibuka langsung

- Siaran pers GASA Indonesia 2025, Mastercard Newsroom: https://www.mastercard.com/news/ap/en/newsroom/press-releases/en/2025/gasa-launches-state-of-scams-in-indonesia-2025-report-to-combat-digital-scams-and-strengthen-digital-resilience/
- Ringkasan laporan GASA: https://gasa.org/knowledge-base/reports/state-of-scams-in-indonesia-2025
- Status Permenaker 39/2016, JDIH BPK: https://peraturan.bpk.go.id/Details/146213/permenaker-no-39-tahun-2016
- BPS Feb 2025 via detik: https://finance.detik.com/berita-ekonomi-bisnis/d-7900275/pengangguran-di-ri-tembus-7-28-juta-orang
- Kemlu 3.428 kasus, Suara Surabaya: https://www.suarasurabaya.net/kelanakota/2024/kemlu-catat-3-428-wni-terkait-kasus-online-scam-selama-2020-2023/
- Crossref API untuk tujuh DOI di Lampiran B.
- Pasal 54 ayat (3), pemberitaan Bisnis.com 2017 (hanya terlihat di hasil pencarian; halaman menolak dibuka dengan 403, jadi **belum terverifikasi langsung**).

---

## Laporan perbaikan · 18 Oktober 2026

Kode: `verifin-app` `main` dan `hafidz` di `9c39104` (perbaikan utama `747d85b`…`3216fd2`). Laporan Akhir: `.tex` dan `.pdf` di `proposal-verifin/`. Setiap revisi di laporan diberi latar kuning, sesuai panduan.

| No | Status | Yang dilakukan |
|---|---|---|
| 1 | Beres | Bab VI-E ditulis ulang: 60 tes, coverage 27%, tabel per area dari `pytest --cov` |
| 2 | Beres | Latensi diganti data terukur (40–54 dtk; OCR 4,8/13,6 dtk) |
| 3 | Beres | "Hasil uji coba terbatas" → "rancangan uji coba yang belum dijalankan" |
| 4 | Beres | Workflow `test.yml` (pytest+coverage, tsc, lint, build) dan teks laporan disesuaikan |
| 5 | Beres | `require_admin` (X-Admin-Token) + proxy admin Next.js server-side |
| 6 | Beres | `reporter_ip` hanya untuk admin; `/community/recent` hanya laporan approved |
| 7 | Beres | `GET /cases` khusus admin |
| 8 | Beres | GASA → edisi 2025, Rp1,7 jt/orang; 49% dan 12–18% dihapus; tabel dampak dan BCR dihitung ulang (Rp2,23/8,35/16,71 M; BCR ~570:1) |
| 9 | Beres | Permenaker 39/2016 → disebut sudah dicabut Permenaker 18/2024 (tanpa nomor pasal yang tidak terverifikasi) |
| 10 | Beres | `ocr_lock` → `RLock` + tes |
| 11 | Beres | Statistik perusahaan mengikuti `web.evidence_counts` + tes |
| 12–14 | Beres | Merge hybrid divalidasi (grounding, saringan sampah, validasi gaji), regex label/gaji/lokasi diperbaiki, paralel; 9 tes |
| 15 | Beres | `promoter_phones` dipisah dari `phones` |
| 16 | Beres (laporan) | Vote, community feed, graf interaktif, riwayat per akun dihapus/diubah di FR-11/12/13; FR-15 Cari Loker ditambahkan; gambar Bab VII-F diganti |
| 17 | Beres (laporan) | Redis/pgvector dihapus dari tabel biaya |
| 18 | Beres | Rate limit 10/menit per IP `/verify/*`, 5/menit lapor komunitas, 5 gagal login/15 menit |
| 19 | Beres (laporan) | "Seluruh PII disanitasi" dihapus; masking tetap rencana |
| 20 | Beres (laporan) | Tabel bobot diganti poin dari kode; penjelasan kontribusi "Penyesuaian Penalaran AI" |
| 21 | Beres (laporan) | Definisi BAHAYA ditulis ulang sesuai cara skor dihitung; kode tidak diubah (lantai skor berisiko false positive) |
| 22 | Beres | Disclaimer di bawah setiap verdict |
| 23 | Beres (laporan) | Operator prefix & deteksi inkonsistensi dihapus; legalitas AHU dinyatakan belum diotomasi; daftar media sosial disesuaikan |
| 24 | Beres | NER kini benar-benar paralel (`asyncio.gather`) |
| 25 | Beres (laporan) | Enum `report_type`/`status` disesuaikan |
| 26 | Beres (laporan) | min. 10 karakter; input "teks, gambar poster, atau URL"; graf tidak diisi data awal |
| 27 | Beres (laporan) | "Test-Driven" → "Test-Supported" |
| 28 | Beres (laporan) | Kemenlu → 3.428 kasus 2020–2023, ~40% TPPO; pustaka [3] diganti sumber yang bisa diakses |
| 29 | Beres (laporan) | Halaman [11] → 321–325 |
| 30–32 | Beres | Pill/badge halaman lapor, eyebrow beranda, statistik 100% dihapus; copy diperbaiki |
| 33 | Beres | `--text-muted` #6b635a (≥4,5:1); badge lokasi pakai token |
| 34 | Beres | aria-label, kartu riwayat bisa dibuka keyboard, `focus-visible` global, reduced motion |
| 35–38 | Beres | Warna token, label konsisten, footer tanpa jargon dan link admin, `SocialPlatformIcon` bersama |
| 39 | Beres | Variabel mati dihapus |
| 40 | Beres | Batas percobaan login admin |
| 41 | Belum | Spasi hilang hasil OCR; ditangani sebagian oleh grounding NER yang toleran spasi |
| 42 | Beres | Emoji dihapus dari flag Google Form |

**Tambahan dari pemeriksaan gambar dan tabel laporan:**
- Tabel perbandingan (gambar) diganti tabel LaTeX dari pengecekan langsung 18 Okt 2026. CekLoker AI (domain tidak ada) dan JobVerify MCP (GitHub 404) dikeluarkan. Klaim Verifin "IndoBERT", "Ditjen AHU, PSE Kominfo", "SHAP" dihapus.
- Tabel tools (gambar) diganti: "deploy otomatis" dan "Jest/Vitest" dihapus.
- Tech stack (gambar) diganti tabel: React Flow/D3.js (tidak dipakai) dihapus.
- Kotak "Kontribusi Inovatif": "pertama" dan "dikalibrasi" diganti.
- Cover: `cover-laporan-akhir.png` ("LAPORAN AKHIR GEMASTIK XIX 2026", "Tim Three Achilles").

**Masih terbuka:**
- Screenshot Bab VII (form input, progres, hasil teks/poster/link, kasus negatif) masih UI Agustus. Kasus negatif memakai data rekaan "PT Sukses Mandiri". Perlu diganti hasil 5 loker nyata `test/okt-2026/` dari aplikasi sekarang.
- Screenshot `/cari` (Gambar 7.7a) masih kosong karena DB baru dikosongkan; ambil ulang setelah 5 loker dijalankan.
- Produksi (Dokploy): set `ADMIN_API_TOKEN` yang sama di backend dan frontend, plus `API_URL` di frontend. Tanpa itu dashboard admin menolak akses (fail closed).
- Template IEEE dan makalah, uji similaritas, HKI: belum dikerjakan di sesi ini.
