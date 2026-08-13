// VERIFIN — Slide Deck Engine for GEMASTIK XIX 2026
// Exact Theme Matching verifin-app Design System (Cream & Charcoal)
// Continuous Slider Track Architecture (Ultra-Smooth 1.15s Physics)
// Enriched with Unified Phosphor Icons Family & Universal 1.5 Line-Height Spacing
// Developed by Three Achilles — Universitas Gadjah Mada

const slideData = [

  // ─── SLIDE 1: COVER (DARK INVERTED, CLEAN) ───────────────────────────────
  {
    theme: 'theme-dark',
    speaker: { name: 'Akmal', role: 'Pembuka', class: 'speaker-akmal' },
    content: `
      <div class="a-pop d-0" style="width:88px; height:88px; border-radius:24px; background:#faf8f4; color:#161413; display:flex; align-items:center; justify-content:center; margin-bottom:1.4rem; font-size:46px;">
        <i class="ph-fill ph-shield-check"></i>
      </div>

      <div class="a-up d-1 center">
        <span class="eyebrow"><i class="ph-bold ph-trophy"></i> GEMASTIK XIX 2026 &middot; DIVISI PENGEMBANGAN PERANGKAT LUNAK</span>
      </div>

      <h1 class="a-up d-2 center" style="font-size:4.8rem; margin-top:0.5rem; font-weight:900;">
        Verifin
      </h1>

      <p class="lead a-up d-3 center" style="max-width:880px; margin-top:0.6rem; color:var(--text-dim); font-size:1.24rem; line-height:1.5;">
        <strong>Explainable AI-powered Decision Support System</strong> untuk Verifikasi Awal Tawaran Lowongan Kerja pada Kanal Digital Informal
      </p>

      <div class="a-in d-4" style="display:flex; align-items:center; gap:1.2rem; margin-top:2.2rem; padding:0.65rem 1.8rem; border-radius:999px; background:rgba(250,248,244,0.06); border:1px solid rgba(250,248,244,0.12); font-family:var(--font-mono); font-size:13px; color:var(--text-muted); line-height:1.5;">
        <span style="color:#faf8f4; font-weight:800;"><i class="ph-bold ph-users-three" style="margin-right:4px;"></i> Tim Three Achilles</span>
        <span style="color:rgba(250,248,244,0.3);">&bull;</span>
        <span>Universitas Gadjah Mada</span>
        <span style="color:rgba(250,248,244,0.3);">&bull;</span>
        <span style="color:#faf8f4; font-weight:700;">2026</span>
      </div>
    `
  },

  // ─── SLIDE 2: PROFIL TIM (LIGHT CLEAN) ────────────────────────────────────
  {
    theme: 'theme-light',
    speaker: { name: 'Akmal', role: 'Perkenalan', class: 'speaker-akmal' },
    content: `
      <div class="a-down d-0 center">
        <span class="eyebrow"><i class="ph-bold ph-users-three"></i> TIM PENGEMBANG</span>
        <h2 style="margin-top:0.4rem; font-size:2.7rem;">Tim Three Achilles</h2>
        <p class="muted" style="font-size:1.02rem; margin-top:0.3rem; line-height:1.5;">
          D4 Teknologi Rekayasa Perangkat Lunak &middot; Sekolah Vokasi &middot; Universitas Gadjah Mada
        </p>
      </div>

      <div class="grid-3" style="margin-top:1.5rem;">
        <div class="member-card a-up d-1">
          <div class="member-img-wrap">
            <img src="hafidz.jpeg" alt="Hafidz Rizqullah">
          </div>
          <div class="member-info">
            <div class="member-name">Hafidz Rizqullah P.</div>
            <div class="member-role"><i class="ph-bold ph-cpu"></i> Ketua Tim &middot; Tech Lead & AI Engineer</div>
            <div class="member-nim">NIM 24/535493/SV/24243</div>
            <p style="font-size:12.5px; margin-top:0.5rem; color:var(--text-secondary); line-height:1.5;">
              Arsitektur Sistem, Pipeline NER Hibrida, LLM Reasoning, XAI Explainer Engine.
            </p>
          </div>
        </div>

        <div class="member-card a-up d-2">
          <div class="member-img-wrap">
            <img src="akmal.jpeg" alt="Akmal Manggala">
          </div>
          <div class="member-info">
            <div class="member-name">Akmal Manggala P.</div>
            <div class="member-role"><i class="ph-bold ph-database"></i> Backend & OSINT Engineer</div>
            <div class="member-nim">NIM 24/536182/SV/24402</div>
            <p style="font-size:12.5px; margin-top:0.5rem; color:var(--text-secondary); line-height:1.5;">
              FastAPI Orchestrator, Probe OSINT Paralel, Fraud Network Graph & Database.
            </p>
          </div>
        </div>

        <div class="member-card a-up d-3">
          <div class="member-img-wrap">
            <img src="matthew.jpeg" alt="Matthew Hayunaji">
          </div>
          <div class="member-info">
            <div class="member-name">Matthew Hayunaji P.</div>
            <div class="member-role"><i class="ph-bold ph-browsers"></i> Frontend & Integration</div>
            <div class="member-nim">NIM 24/536179/SV/24400</div>
            <p style="font-size:12.5px; margin-top:0.5rem; color:var(--text-secondary); line-height:1.5;">
              Next.js Web Application, UI/UX Design System, Visualisasi Graf Interaktif.
            </p>
          </div>
        </div>
      </div>

      <div class="a-in d-4 glass-panel" style="padding:0.85rem 1.8rem; margin-top:1.4rem; display:flex; align-items:center; gap:0.9rem; border-radius:999px; line-height:1.5;">
        <i class="ph-bold ph-graduation-cap" style="font-size:18px; color:var(--aman-fg);"></i>
        <span style="font-size:13.5px; font-weight:800; color:var(--text);">Dosen Pembimbing:</span>
        <span style="font-size:13.5px; color:var(--aman-fg); font-weight:800;">Dr.Eng. Ir. Ganjar Alfian, S.T., M.Eng.</span>
        <span class="muted" style="font-size:12px;">(Pakar AI & Rekayasa Sistem Cerdas UGM)</span>
      </div>
    `
  },

  // ─── SLIDE 3: URGENSI MASALAH & FAKTA DATA NASIONAL (DARK INVERTED) ───────
  {
    theme: 'theme-dark',
    speaker: { name: 'Akmal', role: 'Latar Belakang & Data', class: 'speaker-akmal' },
    content: `
      <div class="grid-2" style="max-width:1220px; gap:2.2rem;">
        <div class="col-flex">
          <span class="eyebrow a-left d-0"><i class="ph-bold ph-warning-octagon"></i> URGENSI MASALAH</span>
          <h2 class="a-up d-1" style="font-size:2.35rem;">Krisis Penipuan Lowongan Kerja di Indonesia</h2>
          <p class="a-up d-2" style="color:var(--text-dim); font-size:1rem; line-height:1.5;">
            Tekanan ekonomi dan jutaan angkatan kerja baru memicu lonjakan penipuan ketenagakerjaan digital di kanal informal.
          </p>

          <div class="col-flex a-up d-3" style="margin-top:0.4rem; gap:0.8rem;">
            <div class="stat-highlight-box" style="display:flex; align-items:center; gap:1.3rem;">
              <div class="hero-num-huge" style="color:var(--bahaya-fg); font-size:3.2rem;">7,28 Jt</div>
              <div>
                <div style="font-weight:800; font-size:13.5px; color:#faf8f4; line-height:1.5;"><i class="ph-bold ph-users"></i> Pengangguran Terbuka Indonesia</div>
                <div style="font-size:11.5px; color:var(--text-muted); margin-top:0.2rem; line-height:1.5;">BPS Berita Resmi Statistik No. 39/05 (Februari 2025, TPT 4,76%)</div>
              </div>
            </div>

            <div class="stat-highlight-box" style="display:flex; align-items:center; gap:1.3rem;">
              <div class="hero-num-huge" style="color:var(--waspada-fg); font-size:3.2rem;">49%</div>
              <div>
                <div style="font-weight:800; font-size:13.5px; color:#faf8f4; line-height:1.5;"><i class="ph-bold ph-briefcase"></i> Korban Terpapar Modus Lowongan Kerja</div>
                <div style="font-size:11.5px; color:var(--text-muted); margin-top:0.2rem; line-height:1.5;">GASA & Mastercard (Total Kerugian Finansial Nasional Rp49 Triliun)</div>
              </div>
            </div>

            <div class="stat-highlight-box" style="display:flex; align-items:center; gap:1.3rem;">
              <div class="hero-num-huge" style="color:var(--bahaya-fg); font-size:3.2rem;">3.300+</div>
              <div>
                <div style="font-weight:800; font-size:13.5px; color:#faf8f4; line-height:1.5;"><i class="ph-bold ph-shield-slash"></i> WNI Korban TPPO Online Scam Diselamatkan</div>
                <div style="font-size:11.5px; color:var(--text-muted); margin-top:0.2rem; line-height:1.5;">Kemenlu RI & UNODC (Jebakan Iklan Kerja Palsu Kamboja, Myanmar, Laos)</div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-flex">
          <div class="glass-panel a-right d-2" style="padding:1.5rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.9rem; line-height:1.5;">
              <span style="font-size:12px; font-weight:800; color:#faf8f4; text-transform:uppercase;"><i class="ph-bold ph-chart-line-up"></i> Eskalasi Laporan Penipuan Rekrutmen</span>
              <span class="verdict-badge verdict-bahaya" style="font-size:10.5px;"><i class="ph-bold ph-trend-up"></i> Lonjakan 175%</span>
            </div>

            <div class="bar-chart-container" style="height:150px; background:rgba(0,0,0,0.28);">
              <div class="bar-group">
                <div class="bar-val-txt" style="color:var(--text-muted);">2.140</div>
                <div class="bar-track"><div class="bar-fill-elem" style="height:37%; background:#8a8279;"></div></div>
                <div class="bar-label-txt">2022</div>
              </div>
              <div class="bar-group">
                <div class="bar-val-txt" style="color:var(--waspada-fg);">3.480</div>
                <div class="bar-track"><div class="bar-fill-elem" style="height:60%; background:var(--waspada-fg);"></div></div>
                <div class="bar-label-txt">2023</div>
              </div>
              <div class="bar-group">
                <div class="bar-val-txt" style="color:var(--bahaya-fg);">5.890+</div>
                <div class="bar-track"><div class="bar-fill-elem" style="height:100%; background:var(--bahaya-fg);"></div></div>
                <div class="bar-label-txt">2024-2025</div>
              </div>
            </div>

            <p class="muted" style="font-size:11.5px; margin-top:0.9rem; line-height:1.5;">
              <strong>Temuan Utama UNODC 2023:</strong> Iklan rekrutmen daring palsu merupakan gerbang utama rekrutmen paksa korban TPPO ke <em>cyber scam centers</em> di Asia Tenggara.
            </p>
          </div>
        </div>
      </div>
    `
  },

  // ─── SLIDE 4: TAKSONOMI 4 MODUS & DISTRIBUSI PENIPUAN (LIGHT CLEAN) ───────
  {
    theme: 'theme-light',
    speaker: { name: 'Akmal', role: 'Taksonomi Modus', class: 'speaker-akmal' },
    content: `
      <div class="grid-2" style="max-width:1220px; gap:2rem;">
        <div class="col-flex">
          <span class="eyebrow a-left d-0"><i class="ph-bold ph-chart-polar"></i> DISTRIBUSI & TAKSONOMI KEJAHATAN</span>
          <h2 class="a-up d-1" style="font-size:2.35rem;">Peta Ancaman Rekrutmen Digital</h2>
          
          <div class="glass-panel a-up d-2" style="padding:1.4rem;">
            <div style="font-size:12.5px; font-weight:800; color:var(--text); text-transform:uppercase; margin-bottom:0.9rem; display:flex; align-items:center; gap:0.5rem; line-height:1.5;">
              <i class="ph-bold ph-chart-bar"></i> Distribusi Tipe Penipuan Digital Indonesia (GASA 2024):
            </div>
            
            <div class="col-flex" style="gap:0.7rem;">
              <div class="hbar-item">
                <div class="hbar-header"><span><i class="ph-bold ph-briefcase"></i> 1. Modus Lowongan Kerja (Employment Scam)</span><strong style="color:var(--bahaya-fg);">49%</strong></div>
                <div class="hbar-track"><div class="hbar-fill" style="width:49%; background:var(--bahaya-fg);"></div></div>
              </div>
              <div class="hbar-item">
                <div class="hbar-header"><span><i class="ph-bold ph-currency-dollar"></i> 2. Investasi Bodong / Task Scam</span><strong style="color:var(--waspada-fg);">38%</strong></div>
                <div class="hbar-track"><div class="hbar-fill" style="width:38%; background:var(--waspada-fg);"></div></div>
              </div>
              <div class="hbar-item">
                <div class="hbar-header"><span><i class="ph-bold ph-package"></i> 3. Phishing Paket / Belanja Online</span><strong style="color:var(--text-secondary);">31%</strong></div>
                <div class="hbar-track"><div class="hbar-fill" style="width:31%; background:var(--text-secondary);"></div></div>
              </div>
              <div class="hbar-item">
                <div class="hbar-header"><span><i class="ph-bold ph-gift"></i> 4. Undian & Hadiah Palsu</span><strong style="color:var(--text-muted);">26%</strong></div>
                <div class="hbar-track"><div class="hbar-fill" style="width:26%; background:var(--text-muted);"></div></div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-flex">
          <div class="custom-table-wrap a-right d-2">
            <table class="custom-table">
              <thead>
                <tr>
                  <th style="width:28%;">Kategori Modus</th>
                  <th style="width:34%;">Pola Operasi Pelaku</th>
                  <th>Dampak Bagi Korban</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong style="color:var(--bahaya-fg);"><i class="ph-bold ph-money"></i> Pungutan Biaya Awal</strong></td>
                  <td>Meminta transfer dana tes medis, seragam, atau tiket pesawat.</td>
                  <td>Kerugian uang langsung tanpa pemanggilan kerja.</td>
                </tr>
                <tr>
                  <td><strong style="color:var(--waspada-fg);"><i class="ph-bold ph-identification-card"></i> Pencurian Identitas</strong></td>
                  <td>Meminta foto KTP dan selfie di awal seleksi tanpa wawancara.</td>
                  <td>Data disalahgunakan untuk pinjaman online ilegal.</td>
                </tr>
                <tr>
                  <td><strong style="color:var(--text-primary);"><i class="ph-bold ph-browser"></i> Phishing Google Form</strong></td>
                  <td>Menyebarkan form pendaftaran gratis yang menyalin data kredensial.</td>
                  <td>Pengambilalihan akun perbankan & kontak korban.</td>
                </tr>
                <tr>
                  <td><strong style="color:var(--bahaya-fg);"><i class="ph-bold ph-warning"></i> Jebakan TPPO Siber</strong></td>
                  <td>Tawaran CS bergaji dollar di luar negeri via Telegram/WA.</td>
                  <td>Penyekapan fisik & kerja paksa scammer transnasional.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `
  },

  // ─── SLIDE 5: SKENARIO PERSONA & TITIK KRITIS (DARK INVERTED) ─────────────
  {
    theme: 'theme-dark',
    speaker: { name: 'Akmal', role: 'Skenario Persona', class: 'speaker-akmal' },
    content: `
      <div class="a-down d-0 center">
        <span class="eyebrow"><i class="ph-bold ph-user-focus"></i> SKENARIO PENGGUNA & TITIK KRITIS</span>
        <h2 style="margin-top:0.4rem; font-size:2.5rem;">Kesenjangan Informasi (Information Asymmetry)</h2>
        <p class="muted" style="font-size:1rem; margin-top:0.3rem; line-height:1.5;">
          Dua persona representatif yang menggambarkan kerentanan pencari kerja di kanal informal.
        </p>
      </div>

      <div class="grid-2 a-up d-2" style="margin-top:1.5rem; gap:1.8rem;">
        <div class="glass-panel" style="padding:1.45rem; border-left:4px solid var(--bahaya-fg);">
          <div style="display:flex; justify-content:space-between; align-items:center; line-height:1.5;">
            <div style="font-weight:800; font-size:14.5px; color:#faf8f4;"><i class="ph-bold ph-user"></i> Persona 1 &middot; Andri (22 Tahun)</div>
            <span class="verdict-badge verdict-bahaya" style="font-size:10.5px;">Fresh Graduate Yogya</span>
          </div>
          <div style="margin-top:0.75rem; padding:0.8rem 1.1rem; background:rgba(0,0,0,0.35); border-radius:10px; font-style:italic; font-size:12.5px; color:var(--text-dim); line-height:1.5;">
            "Dibutuhkan Admin Online WFH, gaji 8–15 jt/bln, tanpa pengalaman langsung kerja. Kirim foto KTP & data diri ke nomor WA ini."
          </div>
          <p style="font-size:12px; color:var(--text-muted); margin-top:0.75rem; line-height:1.5;">
            <strong>Titik Rentan:</strong> Terdesak kebutuhan ekonomi, Andri tidak menguasai cara verifikasi legalitas PT dan berisiko menyerahkan KTP (pintu pencurian identitas & pinjol).
          </p>
        </div>

        <div class="glass-panel" style="padding:1.45rem; border-left:4px solid var(--waspada-fg);">
          <div style="display:flex; justify-content:space-between; align-items:center; line-height:1.5;">
            <div style="font-weight:800; font-size:14.5px; color:#faf8f4;"><i class="ph-bold ph-user"></i> Persona 2 &middot; Sari (27 Tahun)</div>
            <span class="verdict-badge verdict-waspada" style="font-size:10.5px;">Pencari Kerja Paruh Waktu</span>
          </div>
          <div style="margin-top:0.75rem; padding:0.8rem 1.1rem; background:rgba(0,0,0,0.35); border-radius:10px; font-style:italic; font-size:12.5px; color:var(--text-dim); line-height:1.5;">
            "Menemukan poster loker menarik di Instagram: Isi formulir Google Form berikut untuk mendaftar & lampirkan dokumen pribadi."
          </div>
          <p style="font-size:12px; color:var(--text-muted); margin-top:0.75rem; line-height:1.5;">
            <strong>Titik Rentan:</strong> Sari tidak tahu domain dan formulir tersebut bukan milik perusahaan resmi karena tidak ada jejak digital yang terverifikasi.
          </p>
        </div>
      </div>

      <div class="glass-panel a-in d-4" style="margin-top:1.4rem; max-width:1000px; padding:0.95rem 1.8rem; background:rgba(250,248,244,0.05); text-align:center; line-height:1.5;">
        <div style="font-size:11.5px; font-weight:800; color:#faf8f4; text-transform:uppercase; letter-spacing:0.08em;"><i class="ph-bold ph-crosshair"></i> PERNYATAAN FOKUS INTERVENSI VERIFIN:</div>
        <div style="font-size:13px; color:var(--text-dim); font-style:italic; margin-top:0.3rem; line-height:1.5;">
          "Pengguna dipaksa mengambil keputusan sebelum memiliki informasi yang cukup, dan tidak ada alat yang melakukan verifikasi terintegrasi atas nama mereka."
        </div>
      </div>
    `
  },

  // ─── SLIDE 6: POSISI SOLUSI VERIFIN VS EKSISTING (LIGHT CLEAN) ────────────
  {
    theme: 'theme-light',
    speaker: { name: 'Akmal', role: 'Solusi & Orisinalitas', class: 'speaker-akmal' },
    content: `
      <div class="a-down d-0 center">
        <span class="eyebrow"><i class="ph-bold ph-scales"></i> POSISI SOLUSI & ORISINALITAS</span>
        <h2 style="margin-top:0.4rem; font-size:2.55rem;">Verifin: Solusi Komplementer Proaktif</h2>
        <p class="muted" style="font-size:1rem; margin-top:0.3rem; line-height:1.5;">
          Mengisi celah verifikasi proaktif pada kanal informal sebelum pengguna merespons tawaran kerja.
        </p>
      </div>

      <div class="custom-table-wrap a-up d-2" style="margin-top:1.5rem; max-width:1180px;">
        <table class="custom-table">
          <thead>
            <tr>
              <th style="width:20%;">Dimensi Analisis</th>
              <th style="width:18%;">Job Board Formal</th>
              <th style="width:18%;">Platform Medsos</th>
              <th style="width:18%;">Cek Kontak Biasa</th>
              <th style="width:26%; background:#2c2825; color:#faf8f4;"><i class="ph-fill ph-shield-check" style="margin-right:4px;"></i> VERIFIN (Solusi Kami)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Kanal Masuk</strong></td>
              <td>Hanya portal resmi</td>
              <td>Hanya feed postingan</td>
              <td>Hanya nomor telepon</td>
              <td><strong style="color:var(--text-primary);"><i class="ph-bold ph-check"></i> Universal (Teks, OCR, URL)</strong></td>
            </tr>
            <tr>
              <td><strong>Titik Intervensi</strong></td>
              <td>Kurasi pra-posting (internal)</td>
              <td>Reaktif pasca-laporan korban</td>
              <td>Pasif saat dicari manual</td>
              <td><strong style="color:var(--aman-fg);"><i class="ph-bold ph-check"></i> Proaktif sebelum merespons</strong></td>
            </tr>
            <tr>
              <td><strong>Cakupan Investigasi</strong></td>
              <td>Legalitas dokumen PT saja</td>
              <td>Nol investigasi OSINT</td>
              <td>Hanya riwayat kontak</td>
              <td><strong style="color:var(--text-primary);"><i class="ph-bold ph-check"></i> OSINT Multi-Sumber (5 Modul)</strong></td>
            </tr>
            <tr>
              <td><strong>Explainable AI (XAI)</strong></td>
              <td>Tidak ada</td>
              <td>Tidak ada</td>
              <td>Hanya tagging label singkat</td>
              <td><strong style="color:var(--aman-fg);"><i class="ph-bold ph-check"></i> Audit Bobot Bukti (0–100)</strong></td>
            </tr>
            <tr>
              <td><strong>Fraud Network Graph</strong></td>
              <td>Tertutup per database</td>
              <td>Tidak ada relasi entitas</td>
              <td>Tidak ada keterkaitan graf</td>
              <td><strong style="color:var(--text-primary);"><i class="ph-bold ph-check"></i> Relasi Fingerprint Lintas Kasus</strong></td>
            </tr>
            <tr>
              <td><strong>Aksesibilitas</strong></td>
              <td>Berbayar untuk perekrut</td>
              <td>Algoritma tertutup</td>
              <td>Model freemium / langganan</td>
              <td><strong style="color:var(--aman-fg);"><i class="ph-bold ph-check"></i> 100% Terbuka & REST API Publik</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="row-flex a-in d-4" style="margin-top:1.3rem; justify-content:center; gap:1.2rem; line-height:1.5;">
        <div class="glass-panel" style="padding:0.65rem 1.25rem; display:flex; align-items:center; gap:0.5rem;">
          <i class="ph-bold ph-check-circle" style="color:var(--aman-fg);"></i>
          <span style="font-size:12.5px; font-weight:700;">Multi-Kanal Input Lengkap</span>
        </div>
        <div class="glass-panel" style="padding:0.65rem 1.25rem; display:flex; align-items:center; gap:0.5rem;">
          <i class="ph-bold ph-check-circle" style="color:var(--aman-fg);"></i>
          <span style="font-size:12.5px; font-weight:700;">Evidence-Constrained Reasoning</span>
        </div>
        <div class="glass-panel" style="padding:0.65rem 1.25rem; display:flex; align-items:center; gap:0.5rem;">
          <i class="ph-bold ph-check-circle" style="color:var(--aman-fg);"></i>
          <span style="font-size:12.5px; font-weight:700;">Dampak Terukur & Berkelanjutan</span>
        </div>
      </div>
    `
  },

  // ─── SLIDE 7: METODOLOGI AGILE SCRUM (DARK INVERTED) ─────────────────────
  {
    theme: 'theme-dark',
    speaker: { name: 'Hafidz', role: 'Metodologi & Sprint', class: 'speaker-hafidz' },
    content: `
      <div class="grid-2" style="max-width:1220px; gap:2.2rem;">
        <div class="col-flex">
          <span class="eyebrow a-left d-0"><i class="ph-bold ph-kanban"></i> METODOLOGI PENGEMBANGAN</span>
          <h2 class="a-up d-1" style="font-size:2.35rem;">Agile Scrum 5 Sprint (10 Minggu)</h2>
          <p class="a-up d-2" style="color:var(--text-dim); font-size:1rem; line-height:1.5;">
            Iterasi terstruktur mencakup 1 sprint persiapan dan 4 sprint utama berdurasi masing-masing dua minggu.
          </p>

          <div class="custom-table-wrap a-up d-3" style="margin-top:0.55rem;">
            <table class="custom-table">
              <thead>
                <tr>
                  <th style="width:20%;">Sprint</th>
                  <th style="width:22%;">Periode</th>
                  <th>Target Deliverable Kunci</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Sprint 0</strong></td>
                  <td class="mono">Minggu 1–2</td>
                  <td>Riset literatur, arsitektur, setup Supabase, scaffolding Next.js & FastAPI.</td>
                </tr>
                <tr>
                  <td><strong>Sprint 1</strong></td>
                  <td class="mono">Minggu 3–4</td>
                  <td>NER Hibrida (regex + LLM), panduan sinyal perilaku teks, form input UI.</td>
                </tr>
                <tr>
                  <td><strong>Sprint 2</strong></td>
                  <td class="mono">Minggu 5–6</td>
                  <td>Probe OSINT paralel (domain/phone/company), Fraud Network Graph, XAI explainer.</td>
                </tr>
                <tr>
                  <td><strong>Sprint 3</strong></td>
                  <td class="mono">Minggu 7–8</td>
                  <td>Risk engine 0–100, Community Monitoring, result dashboard, visualisasi graf.</td>
                </tr>
                <tr>
                  <td><strong>Sprint 4</strong></td>
                  <td class="mono">Minggu 9–10</td>
                  <td>Integration test, deployment Dokploy Home Server + Vercel, evaluasi sistem.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="col-flex">
          <div class="glass-panel a-right d-2" style="padding:1.4rem;">
            <div style="font-size:12.5px; font-weight:800; color:#faf8f4; text-transform:uppercase; letter-spacing:0.06em; margin-bottom:0.85rem; display:flex; align-items:center; gap:0.5rem; line-height:1.5;">
              <i class="ph-bold ph-code"></i> 5 Prinsip Rekayasa Perangkat Lunak:
            </div>

            <div class="col-flex" style="gap:0.65rem;">
              <div class="glass-panel" style="padding:0.7rem 1.05rem; border-left:3px solid var(--aman-fg);">
                <div style="font-weight:800; font-size:12.5px; color:#faf8f4; line-height:1.5;">1. API-First Architecture</div>
                <div style="font-size:11.5px; color:var(--text-muted); line-height:1.5;">Backend dirancang sebagai REST API independen via FastAPI auto-docs.</div>
              </div>
              <div class="glass-panel" style="padding:0.7rem 1.05rem; border-left:3px solid #faf8f4;">
                <div style="font-weight:800; font-size:12.5px; color:#faf8f4; line-height:1.5;">2. Test-Driven Development</div>
                <div style="font-size:11.5px; color:var(--text-muted); line-height:1.5;">Unit test per modul pipeline dengan pytest sebelum integrasi penuh.</div>
              </div>
              <div class="glass-panel" style="padding:0.7rem 1.05rem; border-left:3px solid var(--waspada-fg);">
                <div style="font-weight:800; font-size:12.5px; color:#faf8f4; line-height:1.5;">3. Explainability-First Design</div>
                <div style="font-size:11.5px; color:var(--text-muted); line-height:1.5;">Setiap putusan risiko wajib memiliki breakdown kontribusi bukti terukur.</div>
              </div>
              <div class="glass-panel" style="padding:0.7rem 1.05rem; border-left:3px solid var(--bahaya-fg);">
                <div style="font-weight:800; font-size:12.5px; color:#faf8f4; line-height:1.5;">4. Security by Design</div>
                <div style="font-size:11.5px; color:var(--text-muted); line-height:1.5;">Sanitasi input regex, rate limiting endpoint, dan anonimisasi pelapor.</div>
              </div>
              <div class="glass-panel" style="padding:0.7rem 1.05rem; border-left:3px solid #d6cfc7;">
                <div style="font-weight:800; font-size:12.5px; color:#faf8f4; line-height:1.5;">5. Progressive Enhancement</div>
                <div style="font-size:11.5px; color:var(--text-muted); line-height:1.5;">Setiap akhir sprint menghasilkan working software yang fungsional.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },

  // ─── SLIDE 8: ARSITEKTUR PIPELINE 4-LAYER (LIGHT CLEAN) ───────────────────
  {
    theme: 'theme-light',
    speaker: { name: 'Hafidz', role: 'Arsitektur Teknis', class: 'speaker-hafidz' },
    content: `
      <div class="a-down d-0 center">
        <span class="eyebrow"><i class="ph-bold ph-tree-structure"></i> ARSITEKTUR SISTEM</span>
        <h2 style="margin-top:0.4rem; font-size:2.55rem;">Pipeline Analisis 4-Layer Berbasis Bukti</h2>
        <p class="muted" style="font-size:1rem; margin-top:0.3rem; line-height:1.5;">
          Memadukan OCR, Named Entity Recognition hibrida, probe OSINT paralel, LLM reasoning, dan XAI Explainer.
        </p>
      </div>

      <div class="pipeline-flow a-scale d-2" style="margin-top:1.5rem; max-width:1180px;">
        <div class="pipeline-step-node">
          <div class="pipeline-icon-circle">
            <i class="ph-bold ph-textbox"></i>
          </div>
          <div style="font-weight:800; font-size:12.5px; color:var(--text-primary); line-height:1.5;">INPUT KANAL</div>
          <div style="font-size:11.5px; color:var(--text-muted); line-height:1.5;">Teks Chat / Poster OCR / URL Web</div>
        </div>

        <div class="pipeline-arrow-icon"><i class="ph-bold ph-caret-right"></i></div>

        <div class="pipeline-step-node" style="border-top:3px solid var(--text);">
          <div class="pipeline-icon-circle"><i class="ph-bold ph-magnifying-glass"></i></div>
          <div style="font-weight:800; font-size:12.5px; color:var(--text); line-height:1.5;">LAYER 1: NER</div>
          <div style="font-size:11.5px; color:var(--text-muted); line-height:1.5;">Regex Struktural + Gemini Semantik</div>
        </div>

        <div class="pipeline-arrow-icon"><i class="ph-bold ph-caret-right"></i></div>

        <div class="pipeline-step-node" style="border-top:3px solid var(--waspada-fg);">
          <div class="pipeline-icon-circle" style="color:var(--waspada-fg);"><i class="ph-bold ph-globe"></i></div>
          <div style="font-weight:800; font-size:12.5px; color:var(--text); line-height:1.5;">LAYER 2: OSINT</div>
          <div style="font-size:11.5px; color:var(--text-muted); line-height:1.5;">Whois, Kaspersky, SearXNG (Asyncio)</div>
        </div>

        <div class="pipeline-arrow-icon"><i class="ph-bold ph-caret-right"></i></div>

        <div class="pipeline-step-node" style="border-top:3px solid var(--bahaya-fg);">
          <div class="pipeline-icon-circle" style="color:var(--bahaya-fg);"><i class="ph-bold ph-brain"></i></div>
          <div style="font-weight:800; font-size:12.5px; color:var(--text); line-height:1.5;">LAYER 3: LLM</div>
          <div style="font-size:11.5px; color:var(--text-muted); line-height:1.5;">Evidence Reasoning + Behavioral Signals</div>
        </div>

        <div class="pipeline-arrow-icon"><i class="ph-bold ph-caret-right"></i></div>

        <div class="pipeline-step-node" style="border-top:3px solid var(--aman-fg);">
          <div class="pipeline-icon-circle" style="color:var(--aman-fg);"><i class="ph-bold ph-chart-bar"></i></div>
          <div style="font-weight:800; font-size:12.5px; color:var(--text); line-height:1.5;">LAYER 4: XAI</div>
          <div style="font-size:11.5px; color:var(--text-muted); line-height:1.5;">Additive SHAP Explainer (Skor 0–100)</div>
        </div>
      </div>

      <div class="row-flex a-in d-4" style="margin-top:1.5rem; justify-content:center; gap:0.8rem; flex-wrap:wrap; line-height:1.5;">
        <span class="eyebrow" style="background:#ffffff; color:#2c2825; border-color:var(--border);"><i class="ph-bold ph-terminal-window"></i> FastAPI (Python 3.11)</span>
        <span class="eyebrow" style="background:#ffffff; color:#2c2825; border-color:var(--border);"><i class="ph-bold ph-browsers"></i> Next.js 14 (React)</span>
        <span class="eyebrow" style="background:#ffffff; color:#2c2825; border-color:var(--border);"><i class="ph-bold ph-database"></i> PostgreSQL / Supabase</span>
        <span class="eyebrow" style="background:#ffffff; color:#2c2825; border-color:var(--border);"><i class="ph-bold ph-sparkle"></i> Google Gemini 1.5 Pro</span>
        <span class="eyebrow" style="background:#ffffff; color:#2c2825; border-color:var(--border);"><i class="ph-bold ph-scan"></i> PaddleOCR (CLAHE)</span>
        <span class="eyebrow" style="background:#ffffff; color:#2c2825; border-color:var(--border);"><i class="ph-bold ph-magnifying-glass-plus"></i> SearXNG Multi-Search</span>
      </div>
    `
  },

  // ─── SLIDE 9: BENCHMARK NER HIBRIDA & LATENSI PIPELINE (DARK INVERTED) ────
  {
    theme: 'theme-dark',
    speaker: { name: 'Hafidz', role: 'Benchmark & Evaluasi', class: 'speaker-hafidz' },
    content: `
      <div class="grid-2" style="max-width:1220px; gap:2rem;">
        <div class="col-flex">
          <span class="eyebrow a-left d-0"><i class="ph-bold ph-gauge"></i> EVALUASI & BENCHMARK</span>
          <h2 class="a-up d-1" style="font-size:2.35rem;">Evaluasi NER Hibrida & Latensi</h2>
          
          <div class="custom-table-wrap a-up d-2" style="margin-top:0.5rem;">
            <table class="custom-table">
              <thead>
                <tr>
                  <th>Metode Ekstraksi</th>
                  <th>Presisi Kontak</th>
                  <th>Presisi Entitas PT</th>
                  <th>F1-Score Menyeluruh</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Regex Deterministik</td>
                  <td class="mono" style="color:var(--aman-fg);">99.2%</td>
                  <td class="mono" style="color:var(--bahaya-fg);">12.4% (Gagal)</td>
                  <td class="mono">55.8%</td>
                </tr>
                <tr>
                  <td>LLM Semantik Standalone</td>
                  <td class="mono" style="color:var(--waspada-fg);">88.5%</td>
                  <td class="mono" style="color:var(--aman-fg);">94.1%</td>
                  <td class="mono">91.3%</td>
                </tr>
                <tr style="background:rgba(255,255,255,0.04);">
                  <td><strong style="color:#faf8f4;"><i class="ph-bold ph-star" style="color:var(--waspada-fg);"></i> Hibrida Verifin (Layer 1)</strong></td>
                  <td class="mono" style="color:var(--aman-fg); font-weight:800;">99.4%</td>
                  <td class="mono" style="color:var(--aman-fg); font-weight:800;">95.8%</td>
                  <td class="mono" style="color:var(--aman-fg); font-weight:900; font-size:13.5px;">97.6%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="col-flex">
          <div class="glass-panel a-right d-2" style="padding:1.4rem;">
            <div style="font-size:12px; font-weight:800; color:#faf8f4; text-transform:uppercase; margin-bottom:0.85rem; display:flex; align-items:center; gap:0.5rem; line-height:1.5;">
              <i class="ph-bold ph-timer"></i> Breakdown Latensi Eksekusi Pipeline (~4.5 Detik):
            </div>
            
            <div class="col-flex" style="gap:0.6rem;">
              <div class="hbar-item">
                <div class="hbar-header"><span><i class="ph-bold ph-image"></i> OCR Engine (PaddleOCR + CLAHE)</span><span class="mono">1.1 s</span></div>
                <div class="hbar-track"><div class="hbar-fill" style="width:24%; background:#d6cfc7;"></div></div>
              </div>
              <div class="hbar-item">
                <div class="hbar-header"><span><i class="ph-bold ph-brackets-curly"></i> NER Hibrida (Regex + Gemini)</span><span class="mono">0.8 s</span></div>
                <div class="hbar-track"><div class="hbar-fill" style="width:18%; background:var(--waspada-fg);"></div></div>
              </div>
              <div class="hbar-item">
                <div class="hbar-header"><span><i class="ph-bold ph-globe"></i> OSINT Paralel (Whois, Kaspersky, SearXNG)</span><span class="mono">1.2 s</span></div>
                <div class="hbar-track"><div class="hbar-fill" style="width:27%; background:var(--aman-fg);"></div></div>
              </div>
              <div class="hbar-item">
                <div class="hbar-header"><span><i class="ph-bold ph-brain"></i> LLM Reasoning & XAI Explainer Engine</span><span class="mono">1.4 s</span></div>
                <div class="hbar-track"><div class="hbar-fill" style="width:31%; background:var(--bahaya-fg);"></div></div>
              </div>
            </div>

            <p class="muted" style="font-size:11.5px; margin-top:0.85rem; line-height:1.5;">
              Eksekusi paralel via <code>asyncio.gather</code> memastikan pengguna mendapatkan hasil komprehensif dalam hitungan detik.
            </p>
          </div>
        </div>
      </div>
    `
  },

  // ─── SLIDE 10: DEEP-DIVE OSINT ENGINE MULTI-SUMBER (LIGHT CLEAN) ──────────
  {
    theme: 'theme-light',
    speaker: { name: 'Hafidz', role: 'Investigasi OSINT', class: 'speaker-hafidz' },
    content: `
      <div class="a-down d-0 center">
        <span class="eyebrow"><i class="ph-bold ph-globe-hemisphere-west"></i> DEEP-DIVE LAYER 2: OSINT MULTI-SUMBER</span>
        <h2 style="margin-top:0.4rem; font-size:2.55rem;">Investigasi OSINT Paralel & Anti-Rate Limit</h2>
        <p class="muted" style="font-size:1rem; margin-top:0.3rem; line-height:1.5;">
          Arsitektur satu query terdistribusi ke berbagai validator publik legal secara asinkron (asyncio.gather).
        </p>
      </div>

      <div class="grid-3 a-up d-2" style="margin-top:1.5rem;">
        <div class="glass-panel" style="padding:1.35rem;">
          <div style="font-weight:800; font-size:13.5px; color:var(--text); display:flex; align-items:center; gap:0.5rem; line-height:1.5;"><i class="ph-bold ph-globe"></i> 1. Domain & Web Probe</div>
          <p style="font-size:12px; color:var(--text-dim); margin-top:0.5rem; line-height:1.5;">
            &bull; <strong>Whois Lookup:</strong> Usia domain (&lt;30 hari = penalti tinggi) & keaktifan HTTP.<br>
            &bull; <strong>Wayback Machine CDX:</strong> Fallback riwayat jika Whois diblokir.<br>
            &bull; <strong>Form Inspector:</strong> Deteksi phishing pada Google Forms.
          </p>
        </div>

        <div class="glass-panel" style="padding:1.35rem;">
          <div style="font-weight:800; font-size:13.5px; color:var(--text); display:flex; align-items:center; gap:0.5rem; line-height:1.5;"><i class="ph-bold ph-phone-call"></i> 2. Phone Validator</div>
          <p style="font-size:12px; color:var(--text-dim); margin-top:0.5rem; line-height:1.5;">
            &bull; <strong>Normalisasi Prefix:</strong> Whitelist operator seluler Indonesia.<br>
            &bull; <strong>Kaspersky Who Calls:</strong> Cek basis data nomor penipuan.<br>
            &bull; <strong>SERP Cross-Check:</strong> Cek silang nomor kontak resmi PT.
          </p>
        </div>

        <div class="glass-panel" style="padding:1.35rem;">
          <div style="font-weight:800; font-size:13.5px; color:var(--text); display:flex; align-items:center; gap:0.5rem; line-height:1.5;"><i class="ph-bold ph-buildings"></i> 3. Company & Geocoding</div>
          <p style="font-size:12px; color:var(--text-dim); margin-top:0.5rem; line-height:1.5;">
            &bull; <strong>SearXNG Multi-Engine:</strong> Agregasi DuckDuckGo, Mojeek, Brave.<br>
            &bull; <strong>OpenStreetMap:</strong> Validasi keberadaan alamat fisik kantor.<br>
            &bull; <strong>Fraud Graph:</strong> Fingerprint SHA-256 deteksi sindikat.
          </p>
        </div>
      </div>

      <div class="glass-panel a-in d-4" style="margin-top:1.4rem; padding:0.85rem 1.8rem; display:flex; align-items:center; justify-content:space-between; line-height:1.5;">
        <div style="font-size:12.5px; color:var(--text-dim); display:flex; align-items:center; gap:0.5rem;">
          <i class="ph-bold ph-shield-check" style="color:var(--aman-fg); font-size:16px;"></i>
          <span><strong style="color:var(--text);">Zero Hallucination Guard:</strong> Prompt LLM Layer 3 strictly evidence-based dengan temperature=0 (Dilarang mengarang fakta).</span>
        </div>
        <span class="verdict-badge verdict-aman" style="font-size:11px;">Deterministic Output</span>
      </div>
    `
  },

  // ─── SLIDE 11: FORMULA XAI & 3-TIER VERDICT (DARK INVERTED) ───────────────
  {
    theme: 'theme-dark',
    speaker: { name: 'Hafidz', role: 'OSINT & Scoring', class: 'speaker-hafidz' },
    content: `
      <div class="grid-2" style="max-width:1220px; gap:2.2rem; align-items:flex-start;">
        <div class="col-flex">
          <span class="eyebrow a-left d-0"><i class="ph-bold ph-calculator"></i> EXPLAINABLE AI & SCORING</span>
          <h2 class="a-up d-1" style="font-size:2.35rem;">Formula Aditif & 3-Tingkat Verdict</h2>

          <div class="glass-panel a-up d-2" style="padding:1.35rem; margin-top:0.45rem; background:rgba(250,248,244,0.05); line-height:1.5;">
            <div class="mono" style="font-size:1.45rem; font-weight:800; color:#faf8f4;">
              S_risiko = S_dasar + &sum; &phi;<sub>i</sub>
            </div>
            <p style="font-size:12px; color:var(--text-dim); margin-top:0.55rem; line-height:1.5;">
              &bull; <strong>S_dasar = 12:</strong> Nilai awal netral (ketidakpastian minimum)<br>
              &bull; <strong>&phi;<sub>i</sub>:</strong> Kontribusi Shapley bukti ke-i (+ risiko, - sinyal aman)<br>
              &bull; <strong>Risk Index:</strong> Terkalibrasi pada pola penipuan rekrutmen Indonesia.
            </p>
          </div>

          <div class="col-flex a-up d-3" style="margin-top:0.55rem; gap:0.65rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; padding:0.75rem 1.15rem; border-radius:12px; background:var(--aman-bg); border:1px solid var(--aman-border); line-height:1.5;">
              <div>
                <span class="verdict-badge verdict-aman" style="font-size:11px;"><i class="ph-bold ph-check"></i> AMAN (0 – 39)</span>
                <span style="font-size:12px; color:var(--text); margin-left:0.6rem;">Jejak OSINT valid, domain resmi, tanpa sinyal penipuan.</span>
              </div>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; padding:0.75rem 1.15rem; border-radius:12px; background:var(--waspada-bg); border:1px solid var(--waspada-border); line-height:1.5;">
              <div>
                <span class="verdict-badge verdict-waspada" style="font-size:11px;"><i class="ph-bold ph-warning"></i> WASPADA (40 – 74)</span>
                <span style="font-size:12px; color:var(--text); margin-left:0.6rem;">Bukti tidak konklusif, butuh verifikasi manual tambahan.</span>
              </div>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; padding:0.75rem 1.15rem; border-radius:12px; background:var(--bahaya-bg); border:1px solid var(--bahaya-border); line-height:1.5;">
              <div>
                <span class="verdict-badge verdict-bahaya" style="font-size:11px;"><i class="ph-bold ph-x"></i> BAHAYA (75 – 100)</span>
                <span style="font-size:12px; color:var(--text); margin-left:0.6rem;">Indikator kuat penipuan: nomor terlapor, PT fiktif, biaya transfer.</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-flex">
          <div class="custom-table-wrap a-right d-2">
            <table class="custom-table">
              <thead>
                <tr>
                  <th>Fitur Bukti</th>
                  <th style="width:20%;">Bobot</th>
                  <th>Mekanisme Kasus Missing</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Sinyal Perilaku Teks</strong></td>
                  <td class="mono" style="color:var(--bahaya-fg); font-weight:800;">25%</td>
                  <td>Evaluasi wajib penalaran LLM</td>
                </tr>
                <tr>
                  <td><strong>Fraud Network Match</strong></td>
                  <td class="mono" style="color:var(--bahaya-fg); font-weight:800;">20%</td>
                  <td>0 poin jika entitas belum pernah terlapor</td>
                </tr>
                <tr>
                  <td><strong>Domain Age (&lt;30 hr)</strong></td>
                  <td class="mono" style="color:var(--waspada-fg); font-weight:800;">15%</td>
                  <td rowspan="2" style="vertical-align:middle; background:rgba(255,255,255,0.02);">
                    Penalti tetap <strong>+8 poin</strong> jika tanpa website (ketiadaan jejak)
                  </td>
                </tr>
                <tr>
                  <td><strong>Domain Reputation</strong></td>
                  <td class="mono" style="color:var(--waspada-fg); font-weight:800;">15%</td>
                </tr>
                <tr>
                  <td><strong>Company Found</strong></td>
                  <td class="mono" style="color:var(--waspada-fg); font-weight:800;">15%</td>
                  <td>Penalti penuh jika perusahaan fiktif</td>
                </tr>
                <tr>
                  <td><strong>Phone Reported</strong></td>
                  <td class="mono" style="color:var(--aman-fg); font-weight:800;">10%</td>
                  <td>Penalti tinggi jika terlapor di Kaspersky</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `
  },

  // ─── SLIDE 12: FORM INPUT MULTI-KANAL (LIGHT CLEAN) ───────────────────────
  {
    theme: 'theme-light',
    speaker: { name: 'Matthew', role: 'Demo Antarmuka', class: 'speaker-matthew' },
    content: `
      <div class="a-down d-0 center">
        <span class="eyebrow"><i class="ph-bold ph-devices"></i> DEMO ANTARMUKA</span>
        <h2 style="margin-top:0.4rem; font-size:2.55rem;">Fleksibilitas Input Multi-Kanal & Real-Time UX</h2>
        <p class="muted" style="font-size:1rem; margin-top:0.3rem; line-height:1.5;">
          Mendukung paste teks chat WhatsApp, upload foto pamflet (OCR), maupun URL postingan lowongan kerja.
        </p>
      </div>

      <div class="grid-3 a-up d-2" style="margin-top:1.5rem;">
        <div class="glass-panel" style="padding:1.2rem; overflow:hidden;">
          <div style="font-size:13px; font-weight:800; color:var(--text); margin-bottom:0.6rem; display:flex; align-items:center; gap:0.45rem; line-height:1.5;">
            <i class="ph-bold ph-chat-text"></i> 1. KANAL TEKS PESAN
          </div>
          <div class="mockup-window" style="box-shadow:none;">
            <img src="images/mockup-teks.png" alt="Input Teks" style="width:100%; display:block;">
          </div>
          <p style="font-size:11.5px; color:var(--text-muted); margin-top:0.6rem; line-height:1.5;">
            Min. 50 karakter teks broadcast chat WA, Telegram, atau caption medsos.
          </p>
        </div>

        <div class="glass-panel" style="padding:1.2rem; overflow:hidden;">
          <div style="font-size:13px; font-weight:800; color:var(--text); margin-bottom:0.6rem; display:flex; align-items:center; gap:0.45rem; line-height:1.5;">
            <i class="ph-bold ph-image"></i> 2. KANAL POSTER (OCR)
          </div>
          <div class="mockup-window" style="box-shadow:none;">
            <img src="images/mockup-gambar.png" alt="Input Gambar" style="width:100%; display:block;">
          </div>
          <p style="font-size:11.5px; color:var(--text-muted); margin-top:0.6rem; line-height:1.5;">
            Upload pamflet / screenshot. PaddleOCR + CLAHE mengekstrak teks otomatis.
          </p>
        </div>

        <div class="glass-panel" style="padding:1.2rem; overflow:hidden;">
          <div style="font-size:13px; font-weight:800; color:var(--text); margin-bottom:0.6rem; display:flex; align-items:center; gap:0.45rem; line-height:1.5;">
            <i class="ph-bold ph-link"></i> 3. KANAL TAUTAN URL
          </div>
          <div class="mockup-window" style="box-shadow:none;">
            <img src="images/mockup-link.png" alt="Input Link" style="width:100%; display:block;">
          </div>
          <p style="font-size:11.5px; color:var(--text-muted); margin-top:0.6rem; line-height:1.5;">
            Analisis URL / Google Form dan deteksi pola phishing serta shortlink.
          </p>
        </div>
      </div>

      <div class="glass-panel a-in d-4" style="margin-top:1.4rem; max-width:920px; padding:0.85rem 1.8rem; display:flex; align-items:center; justify-content:space-between; line-height:1.5;">
        <div style="display:flex; align-items:center; gap:0.9rem;">
          <img src="images/mockup-loading.png" alt="Loading Modal" style="height:42px; border-radius:6px; border:1px solid var(--border);">
          <div>
            <div style="font-size:12.5px; font-weight:800; color:var(--text); line-height:1.5;"><i class="ph-bold ph-spinner" style="margin-right:4px;"></i> Modal Progres Real-Time Terintegrasi</div>
            <div style="font-size:11.5px; color:var(--text-muted); line-height:1.5;">Indikator tahapan pipeline (OCR &rarr; OSINT &rarr; Graph &rarr; LLM &rarr; XAI) transparan bagi pengguna.</div>
          </div>
        </div>
        <span class="verdict-badge verdict-aman" style="font-size:10.5px;">Zero Lag UX</span>
      </div>
    `
  },

  // ─── SLIDE 13: HASIL VERIFIKASI KASUS PENIPUAN NYATA (DARK INVERTED) ──────
  {
    theme: 'theme-dark',
    speaker: { name: 'Matthew', role: 'Hasil Verifikasi & XAI', class: 'speaker-matthew' },
    content: `
      <div class="grid-2" style="max-width:1220px; gap:2.2rem; align-items:flex-start;">
        <div class="col-flex">
          <span class="eyebrow a-left d-0"><i class="ph-bold ph-detective"></i> STUDI KASUS PENGUJIAN</span>
          <h2 class="a-up d-1" style="font-size:2.35rem;">Hasil Verifikasi Kasus Penipuan Nyata</h2>
          
          <div class="mockup-window a-up d-2" style="margin-top:0.45rem;">
            <div class="mockup-header">
              <div class="window-dot" style="background:var(--bahaya-fg);"></div>
              <div class="window-dot" style="background:var(--waspada-fg);"></div>
              <div class="window-dot" style="background:var(--aman-fg);"></div>
              <div class="window-url"><i class="ph-bold ph-lock-key"></i> verifin-app.vercel.app/verify/result</div>
            </div>
            <img src="images/hasil test negatif.png" alt="Hasil Test Negatif" style="width:100%; display:block;">
          </div>

          <div class="glass-panel a-up d-3" style="padding:0.95rem 1.25rem; border-left:3.5px solid var(--bahaya-fg); background:var(--bahaya-bg); line-height:1.5;">
            <div style="font-size:11.5px; color:var(--text); font-style:italic; line-height:1.5;">
              "Sintesis LLM Layer 3: Nomor 0812-XXXX terlapor 3x penipuan. Perusahaan PT Sukses Mandiri tidak ditemukan pada jejak publik. Permintaan KTP di awal dan gaji 15 juta WFH tanpa syarat adalah tanda bahaya tinggi."
            </div>
          </div>
        </div>

        <div class="col-flex">
          <div class="glass-panel a-right d-2" style="padding:1.4rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.85rem; line-height:1.5;">
              <span style="font-size:12px; font-weight:800; color:#faf8f4; text-transform:uppercase;"><i class="ph-bold ph-chart-donut"></i> Breakdown XAI Explainer (SHAP)</span>
              <span class="verdict-badge verdict-bahaya"><i class="ph-bold ph-shield-warning"></i> BAHAYA &middot; SKOR 93</span>
            </div>

            <div class="custom-table-wrap">
              <table class="custom-table">
                <thead>
                  <tr>
                    <th>Faktor Bukti</th>
                    <th style="width:22%;">Kontribusi (&phi;)</th>
                    <th>Penjelasan Berbasis Fakta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><em>Nilai Dasar (S_dasar)</em></td>
                    <td class="mono" style="color:var(--text-muted); font-weight:700;">+12 poin</td>
                    <td>Nilai netral awal sebelum evaluasi fitur</td>
                  </tr>
                  <tr>
                    <td><strong>Sinyal Perilaku Teks</strong></td>
                    <td class="mono" style="color:var(--bahaya-fg); font-weight:800;">+24 poin</td>
                    <td>LLM mendeteksi janji gaji fantastis & syarat instan</td>
                  </tr>
                  <tr>
                    <td><strong>Phone Reports (3x)</strong></td>
                    <td class="mono" style="color:var(--bahaya-fg); font-weight:800;">+19 poin</td>
                    <td>Nomor tercatat penipu di database Kaspersky</td>
                  </tr>
                  <tr>
                    <td><strong>Company Not Found</strong></td>
                    <td class="mono" style="color:var(--bahaya-fg); font-weight:800;">+16 poin</td>
                    <td>Nol jejak legalitas digital di mesin pencari</td>
                  </tr>
                  <tr>
                    <td><strong>Sinyal Red Flag Teks</strong></td>
                    <td class="mono" style="color:var(--bahaya-fg); font-weight:800;">+13 poin</td>
                    <td>Permintaan foto KTP di awal seleksi kerja</td>
                  </tr>
                  <tr>
                    <td><strong>No Domain Penalty</strong></td>
                    <td class="mono" style="color:var(--waspada-fg); font-weight:800;">+9 poin</td>
                    <td>Tidak ada website resmi yang dapat diverifikasi</td>
                  </tr>
                  <tr style="background:var(--bahaya-bg);">
                    <td><strong>TOTAL SKOR RISIKO</strong></td>
                    <td class="mono" style="color:var(--bahaya-fg); font-weight:900; font-size:14px;">93 / 100</td>
                    <td><strong style="color:var(--bahaya-fg);">VERDICT: BAHAYA</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style="font-size:11px; color:var(--text-muted); margin-top:0.75rem; text-align:right; line-height:1.5;">
              Formula Audit: <code>12 + 24 + 19 + 16 + 13 + 9 = 93</code> (Transparan & Terukur)
            </div>
          </div>
        </div>
      </div>
    `
  },

  // ─── SLIDE 14: COMMUNITY MONITORING & DAMPAK (LIGHT CLEAN) ────────────────
  {
    theme: 'theme-light',
    speaker: { name: 'Matthew', role: 'Dampak & Komunitas', class: 'speaker-matthew' },
    content: `
      <div class="grid-2" style="max-width:1220px; gap:2.2rem;">
        <div class="col-flex">
          <span class="eyebrow"><i class="ph-bold ph-globe-hemisphere-east"></i> EKOSISTEM BERKELANJUTAN</span>
          <h2 style="font-size:2.45rem;">Community Monitoring & Riwayat</h2>
          <p style="font-size:1rem; color:var(--text-dim); line-height:1.5;">
            Membangun basis pertahanan kolektif melalui deduplikasi entitas penipuan pada Fraud Network Graph.
          </p>

          <div class="row-flex a-up d-3" style="gap:1.1rem; margin-top:0.45rem;">
            <div class="mockup-window" style="flex:1;">
              <img src="images/mockup-community.png" alt="Community Feed" style="width:100%; display:block;">
            </div>
            <div class="mockup-window" style="flex:1;">
              <img src="images/mockup-riwayat.png" alt="Riwayat Analisis" style="width:100%; display:block;">
            </div>
          </div>
        </div>

        <div class="col-flex">
          <div class="glass-panel a-right d-2" style="padding:1.45rem;">
            <div style="font-size:12.5px; font-weight:800; color:var(--text); text-transform:uppercase; margin-bottom:0.9rem; display:flex; align-items:center; gap:0.5rem; line-height:1.5;">
              <i class="ph-bold ph-chart-line-up"></i> Proyeksi Dampak Kuantitatif Nyata:
            </div>

            <div class="col-flex" style="gap:0.8rem;">
              <div class="stat-highlight-box" style="background:#ffffff; border-left:3.5px solid var(--aman-fg);">
                <div style="font-size:13px; font-weight:800; color:var(--text); line-height:1.5;"><i class="ph-bold ph-shield-check" style="color:var(--aman-fg);"></i> 1. Mitigasi Risiko & Penghindaran Kerugian Finansial</div>
                <div style="font-size:11.5px; color:var(--text-muted); margin-top:0.3rem; line-height:1.5;">
                  Mengintervensi sebelum calon korban mentransfer uang atau menyerahkan KTP (berdasarkan estimasi rata-rata kerugian GASA).
                </div>
              </div>

              <div class="stat-highlight-box" style="background:#ffffff; border-left:3.5px solid var(--text);">
                <div style="font-size:13px; font-weight:800; color:var(--text); line-height:1.5;"><i class="ph-bold ph-share-network"></i> 2. Network Effect Melalui Fraud Network Graph</div>
                <div style="font-size:11.5px; color:var(--text-muted); margin-top:0.3rem; line-height:1.5;">
                  Setiap 1 laporan penipuan yang terverifikasi langsung melindungi ribuan pengguna lain yang menerima kontak nomor/PT yang sama.
                </div>
              </div>

              <div class="stat-highlight-box" style="background:#ffffff; border-left:3.5px solid var(--waspada-fg);">
                <div style="font-size:13px; font-weight:800; color:var(--text); line-height:1.5;"><i class="ph-bold ph-translate"></i> 3. Kontribusi Korpus NLP Bahasa Indonesia</div>
                <div style="font-size:11.5px; color:var(--text-muted); margin-top:0.3rem; line-height:1.5;">
                  Menyediakan dataset berlabel lowongan penipuan berbahasa Indonesia pertama untuk kemajuan riset NLP nasional (mengatasi isu IndoNLU).
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },

  // ─── SLIDE 15: KESIMPULAN & PENUTUP (DARK INVERTED) ───────────────────────
  {
    theme: 'theme-dark',
    speaker: { name: 'Matthew', role: 'Penutup', class: 'speaker-matthew' },
    content: `
      <div class="a-pop d-0" style="width:78px; height:78px; border-radius:22px; background:#faf8f4; color:#161413; display:flex; align-items:center; justify-content:center; margin-bottom:1.2rem; font-size:42px;">
        <i class="ph-fill ph-shield-check"></i>
      </div>

      <div class="a-up d-1 center">
        <span class="eyebrow"><i class="ph-bold ph-flag"></i> REKAYASA PERANGKAT LUNAK UNTUK INDONESIA</span>
      </div>

      <h1 class="a-up d-2 center" style="font-size:4.4rem; margin-top:0.5rem; font-weight:900;">
        Verifin
      </h1>

      <p class="lead a-up d-3 center" style="max-width:860px; margin-top:0.5rem; color:var(--text-dim); font-size:1.24rem; line-height:1.5;">
        <em>"Berdampak, Inklusif, dan Berkelanjutan Menuju Masyarakat Cerdas"</em>
      </p>

      <div class="row-flex a-up d-4" style="margin-top:1.6rem; justify-content:center; gap:1rem; line-height:1.5;">
        <span class="verdict-badge verdict-aman" style="font-size:12px;"><i class="ph-bold ph-check-circle"></i> AMAN (0–39)</span>
        <span class="verdict-badge verdict-waspada" style="font-size:12px;"><i class="ph-bold ph-warning-circle"></i> WASPADA (40–74)</span>
        <span class="verdict-badge verdict-bahaya" style="font-size:12px;"><i class="ph-bold ph-x-circle"></i> BAHAYA (75–100)</span>
      </div>

      <div class="a-in d-5 center" style="margin-top:1.9rem; line-height:1.5;">
        <div style="font-family:var(--font-mono); font-size:13.5px; font-weight:800; color:#faf8f4; line-height:1.5;">
          Tim Three Achilles &middot; Universitas Gadjah Mada
        </div>
        <div style="font-size:12px; color:var(--text-muted); margin-top:0.4rem; line-height:1.5;">
          Hafidz Rizqullah P. &middot; Akmal Manggala P. &middot; Matthew Hayunaji P.
        </div>
        <div class="mono" style="font-size:12.5px; color:#faf8f4; margin-top:1.1rem; letter-spacing:0.1em; font-weight:700; line-height:1.5;">
          TERIMA KASIH &middot; GEMASTIK XIX 2026
        </div>
      </div>
    `
  }

];

// ─── Particle Canvas System ────────────────────────────────────────────────
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function initParticles() {
  particles = [];
  const count = Math.floor(window.innerWidth / 30);
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      r: Math.random() * 1.1 + 0.3,
      opacity: Math.random() * 0.2 + 0.04
    });
  }
}
initParticles();

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(232, 226, 217, ${p.opacity})`;
    ctx.fill();
  });
  requestAnimationFrame(drawParticles);
}
drawParticles();

// ─── Silky Smooth Continuous Slider Track Engine (1.15s Ease) ──────────────
const sliderTrack = document.getElementById('sliderTrack');
const slideCounter = document.getElementById('slideCounter');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const btnFullscreen = document.getElementById('btnFullscreen');
const topProgressBar = document.getElementById('topProgressBar');
const kbdOverlay = document.getElementById('kbdOverlay');

let currentSlide = 0;
const totalSlides = slideData.length;

// Set slider track width
sliderTrack.style.width = `${totalSlides * 100}vw`;

// Render slides into Slider Track
slideData.forEach((s, idx) => {
  const slideSec = document.createElement('section');
  slideSec.className = `slide ${s.theme} ${idx === 0 ? 'active' : ''}`;
  
  const speakerTagHtml = s.speaker ? `
    <div class="speaker-tag a-in d-1">
      <span class="speaker-dot ${s.speaker.class}"></span>
      <span>${s.speaker.name} &middot; <span style="font-weight:500; opacity:0.85;">${s.speaker.role}</span></span>
    </div>
  ` : '';

  slideSec.innerHTML = `${speakerTagHtml} ${s.content}`;
  sliderTrack.appendChild(slideSec);
});

function updateSliderPosition() {
  // Ultra smooth hardware accelerated translation
  sliderTrack.style.transform = `translate3d(-${currentSlide * 100}vw, 0, 0)`;

  // Update active classes for animation triggers
  const allSlides = document.querySelectorAll('.slide');
  allSlides.forEach((slide, idx) => {
    if (idx === currentSlide) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });

  slideCounter.textContent = `${String(currentSlide + 1).padStart(2, '0')} / ${String(totalSlides).padStart(2, '0')}`;
  topProgressBar.style.width = `${((currentSlide + 1) / totalSlides) * 100}%`;

  btnPrev.disabled = currentSlide === 0;
  btnNext.disabled = currentSlide === totalSlides - 1;

  if (currentSlide > 0 && kbdOverlay) {
    kbdOverlay.style.opacity = '0';
  }
}

function goToNext() {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateSliderPosition();
  }
}

function goToPrev() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSliderPosition();
  }
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => console.log(err));
  } else {
    document.exitFullscreen().catch(err => console.log(err));
  }
}

// Event Listeners
btnNext.addEventListener('click', goToNext);
btnPrev.addEventListener('click', goToPrev);
btnFullscreen.addEventListener('click', toggleFullscreen);

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
    e.preventDefault();
    goToNext();
  } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
    e.preventDefault();
    goToPrev();
  } else if (e.key === 'Home') {
    e.preventDefault();
    currentSlide = 0;
    updateSliderPosition();
  } else if (e.key === 'End') {
    e.preventDefault();
    currentSlide = totalSlides - 1;
    updateSliderPosition();
  } else if (e.key === 'f' || e.key === 'F') {
    toggleFullscreen();
  }
});

// Click navigation on left/right screen halves
document.addEventListener('click', (e) => {
  if (e.target.closest('.bottom-nav') || e.target.closest('.speaker-tag') || e.target.closest('button')) {
    return;
  }
  if (e.clientX > window.innerWidth / 2) {
    goToNext();
  } else {
    goToPrev();
  }
});

updateSliderPosition();
