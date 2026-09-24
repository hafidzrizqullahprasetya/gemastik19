import { marked } from 'marked';
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync, unlinkSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIR = import.meta.dirname || join(process.cwd(), 'berkas-finalis');
const REPO_ROOT = join(DIR, '..');
const CHROME_BIN = process.env.CHROME_BIN || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PDFLATEX_BIN = process.env.PDFLATEX_BIN || '/Library/TeX/texbin/pdflatex';

// High-resolution logos
const UGM_LOGO_PATH = join(REPO_ROOT, 'logo/optimized/ugm.png');
const GEMASTIK_LOGO_PATH = join(REPO_ROOT, 'logo/optimized/gemastik.png');
const VERIFIN_LOGO_PATH = join(REPO_ROOT, 'logo/optimized/verifin.png');

function getBase64Image(filePath) {
  if (existsSync(filePath)) {
    const ext = filePath.endsWith('.png') ? 'png' : 'jpeg';
    const data = readFileSync(filePath).toString('base64');
    return `data:image/${ext};base64,${data}`;
  }
  return '';
}

const ugmLogoBase64 = getBase64Image(UGM_LOGO_PATH);
const gemastikLogoBase64 = getBase64Image(GEMASTIK_LOGO_PATH);
const verifinLogoBase64 = getBase64Image(VERIFIN_LOGO_PATH);

const docs = [
  {
    src: '00-evaluasi-dewan-juri-dan-action-plan-finalis.md',
    pdf: '00-evaluasi-dewan-juri-dan-action-plan-finalis.pdf',
    title: 'Evaluasi Dewan Juri & Rencana Tindak Lanjut',
    shortTitle: 'Evaluasi Juri & Tindak Lanjut',
    subtitle: 'Rekapitulasi Penilaian Penyisihan dan Realisasi Penyempurnaan Babak Final'
  },
  {
    src: '06-executive-summary-one-pager.md',
    pdf: '06-executive-summary-one-pager.pdf',
    title: 'Executive Summary & Factsheet',
    shortTitle: 'Executive Summary',
    subtitle: 'Ringkasan Eksekutif & Lembar Fakta Verifin Finalis Gemastik XIX',
    isFactsheet: true
  },
  {
    src: '05-dokumen-pendaftaran-hki-deskripsi-ciptaan.md',
    pdf: '05-dokumen-pendaftaran-hki-deskripsi-ciptaan.pdf',
    title: 'Deskripsi Program Komputer untuk HKI DJKI',
    shortTitle: 'Deskripsi Ciptaan HKI',
    subtitle: 'Dokumen Resmi Permohonan Hak Cipta Perangkat Lunak DJKI Kemenkumham'
  },
  {
    src: '01-naskah-presentasi-dan-live-demo-10-menit.md',
    pdf: '01-naskah-presentasi-dan-live-demo-10-menit.pdf',
    title: 'Naskah Presentasi Panggung & Live Demo',
    shortTitle: 'Naskah Presentasi 10 Menit',
    subtitle: 'Pedoman Eksekusi 10 Menit Finalis Gemastik XIX (Divisi VIII PPL)'
  },
  {
    src: '02-buku-saku-tanya-jawab-juri-defense-matrix.md',
    pdf: '02-buku-saku-tanya-jawab-juri-defense-matrix.pdf',
    title: 'Buku Saku Tanya Jawab Dewan Juri',
    shortTitle: 'Q&A Defense Matrix',
    subtitle: 'Master Q&A Defense Matrix & Strategi Pertahanan Teknis'
  },
  {
    src: '03-panduan-eksekusi-live-demo-dan-mitigasi-offline.md',
    pdf: '03-panduan-eksekusi-live-demo-dan-mitigasi-offline.pdf',
    title: 'SOP Live Demo & Protokol Offline',
    shortTitle: 'SOP Live Demo & Offline',
    subtitle: 'Panduan Eksekusi Teknis Panggung & Tanggap Darurat Air-Gapped'
  },
  {
    src: 'README.md',
    pdf: '00-katalog-panduan-berkas-finalis.pdf',
    title: 'Katalog & Panduan Berkas Finalis',
    shortTitle: 'Katalog Berkas Finalis',
    subtitle: 'Master Index & Checklist Kesiapan Babak Final Gemastik XIX'
  }
];

function processMarkdown(content) {
  // Replace verdicts with clean bracketed text
  content = content.replace(/\[AMAN\]/g, '<span class="verdict-tag">[AMAN]</span>');
  content = content.replace(/\[WASPADA\]/g, '<span class="verdict-tag">[WASPADA]</span>');
  content = content.replace(/\[BAHAYA\]/g, '<span class="verdict-tag">[BAHAYA]</span>');
  content = content.replace(/\[PASSED\]/g, '<span class="verdict-tag">[PASSED]</span>');
  content = content.replace(/\[COMPLETED\]/g, '<span class="verdict-tag">[COMPLETED]</span>');
  content = content.replace(/\[NOT_PROVIDED\]/g, '<span class="verdict-tag">[NOT_PROVIDED]</span>');
  content = content.replace(/\[UNAVAILABLE\]/g, '<span class="verdict-tag">[UNAVAILABLE]</span>');

  // Replace checkmarks with clean academic markers
  content = content.replace(/- \[x\]/g, '<span class="check-box">[X]</span>');
  content = content.replace(/- \[ \]/g, '<span class="check-box">[ ]</span>');

  // Clean raw LaTeX artifacts in plain markdown if any
  content = content.replace(/\$\\to\$/g, '->');

  let html = marked.parse(content);
  return html;
}

function getCss(isFactsheet, shortTitle) {
  return `
  @page {
    size: A4 portrait;
    margin-top: ${isFactsheet ? '20mm' : '25mm'};
    margin-bottom: ${isFactsheet ? '18mm' : '22mm'};
    margin-left: ${isFactsheet ? '16mm' : '20mm'};
    margin-right: ${isFactsheet ? '16mm' : '20mm'};

    @top-left {
      content: "UNIVERSITAS GADJAH MADA · GEMASTIK XIX 2026";
      font-family: "Times New Roman", Times, "Liberation Serif", serif;
      font-size: 8pt;
      border-bottom: 0.5pt solid #000000;
      padding-bottom: 2pt;
      color: #111111;
    }

    @top-right {
      content: "${shortTitle}";
      font-family: "Times New Roman", Times, "Liberation Serif", serif;
      font-size: 8pt;
      border-bottom: 0.5pt solid #000000;
      padding-bottom: 2pt;
      color: #111111;
    }

    @bottom-left {
      content: "Verifin: Sistem Pendukung Keputusan Verifikasi Lowongan Kerja";
      font-family: "Times New Roman", Times, "Liberation Serif", serif;
      font-size: 8pt;
      border-top: 0.5pt solid #000000;
      padding-top: 2pt;
      color: #333333;
    }

    @bottom-right {
      content: "Halaman " counter(page) " dari " counter(pages);
      font-family: "Times New Roman", Times, "Liberation Serif", serif;
      font-size: 8pt;
      border-top: 0.5pt solid #000000;
      padding-top: 2pt;
      color: #333333;
    }
  }

  * {
    box-sizing: border-box;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  body {
    font-family: "Times New Roman", Times, "Liberation Serif", serif;
    color: #111111;
    background: #ffffff;
    font-size: ${isFactsheet ? '8.5pt' : '10pt'};
    line-height: ${isFactsheet ? '1.4' : '1.5'};
    margin: 0;
    padding: 0;
  }

  /* Academic Document Header (Letterhead style) */
  .doc-header {
    border-bottom: 1.5pt solid #000000;
    padding-bottom: 8pt;
    margin-bottom: ${isFactsheet ? '10pt' : '16pt'};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .doc-header-logos {
    display: flex;
    align-items: center;
    gap: 10pt;
  }

  .doc-header-logos img {
    height: ${isFactsheet ? '34px' : '40px'};
    object-fit: contain;
  }

  .doc-header-meta {
    text-align: right;
  }

  .doc-header-meta .institution {
    font-size: 8pt;
    font-weight: bold;
    color: #000000;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .doc-header-meta .event {
    font-size: 7.5pt;
    color: #333333;
  }

  .doc-header-meta .team {
    font-size: 7.5pt;
    color: #333333;
  }

  /* Headings - Academic & Formal */
  h1 {
    color: #000000;
    font-size: ${isFactsheet ? '12.5pt' : '14.5pt'};
    font-weight: bold;
    line-height: 1.25;
    margin-top: 0;
    margin-bottom: 6pt;
    text-align: left;
    letter-spacing: -0.01em;
  }

  h2 {
    color: #000000;
    font-size: ${isFactsheet ? '10pt' : '11.5pt'};
    font-weight: bold;
    line-height: 1.3;
    border-bottom: 0.75pt solid #000000;
    padding-bottom: 2pt;
    margin-top: ${isFactsheet ? '10pt' : '14pt'};
    margin-bottom: ${isFactsheet ? '5pt' : '8pt'};
    page-break-after: avoid;
  }

  h3 {
    color: #000000;
    font-size: ${isFactsheet ? '9pt' : '10.5pt'};
    font-weight: bold;
    margin-top: ${isFactsheet ? '8pt' : '11pt'};
    margin-bottom: 4pt;
    page-break-after: avoid;
  }

  h4 {
    color: #000000;
    font-size: 9.5pt;
    font-weight: bold;
    margin-top: 6pt;
    margin-bottom: 2pt;
    page-break-after: avoid;
  }

  p {
    margin-top: 0;
    margin-bottom: ${isFactsheet ? '5pt' : '7pt'};
    text-align: justify;
  }

  strong {
    font-weight: bold;
    color: #000000;
  }

  hr {
    border: 0;
    height: 0.75pt;
    background: #000000;
    margin: ${isFactsheet ? '8pt 0' : '12pt 0'};
  }

  ul, ol {
    margin-top: 0;
    margin-bottom: ${isFactsheet ? '5pt' : '8pt'};
    padding-left: 18pt;
  }

  li {
    margin-bottom: ${isFactsheet ? '2pt' : '3pt'};
  }

  /* Academic Standard Tables (Booktabs style) */
  table {
    width: 100%;
    border-collapse: collapse;
    border-top: 1.5pt solid #000000;
    border-bottom: 1.5pt solid #000000;
    margin: ${isFactsheet ? '6pt 0 8pt 0' : '10pt 0 14pt 0'};
    font-size: ${isFactsheet ? '7.5pt' : '8.5pt'};
    page-break-inside: avoid;
  }

  th {
    border-top: none;
    border-bottom: 1pt solid #000000;
    border-left: none;
    border-right: none;
    color: #000000;
    font-weight: bold;
    text-align: left;
    padding: ${isFactsheet ? '4pt 6pt' : '6pt 8pt'};
    background: none;
  }

  td {
    border-top: 0.5pt solid #e5e7eb;
    border-bottom: none;
    border-left: none;
    border-right: none;
    padding: ${isFactsheet ? '3.5pt 6pt' : '5pt 8pt'};
    vertical-align: top;
    color: #111111;
  }

  tr:first-child td {
    border-top: none;
  }

  /* Blockquotes / Callouts */
  blockquote {
    margin: ${isFactsheet ? '5pt 0 7pt 8pt' : '8pt 0 10pt 12pt'};
    padding: ${isFactsheet ? '3pt 0 3pt 8pt' : '4pt 0 4pt 10pt'};
    border-left: 2pt solid #000000;
    background: none;
    color: #222222;
    font-style: italic;
    page-break-inside: avoid;
  }

  blockquote p {
    margin-bottom: 2pt;
  }

  blockquote p:last-child {
    margin-bottom: 0;
  }

  /* Code / Pre / ASCII Diagrams */
  pre {
    background-color: #fafafa;
    border: 0.75pt solid #999999;
    padding: ${isFactsheet ? '5pt 7pt' : '7pt 9pt'};
    font-family: "Courier New", Courier, monospace;
    font-size: ${isFactsheet ? '6.8pt' : '7.5pt'};
    line-height: 1.35;
    color: #000000;
    overflow-x: auto;
    margin: ${isFactsheet ? '5pt 0 7pt 0' : '8pt 0 10pt 0'};
    page-break-inside: avoid;
    white-space: pre-wrap;
  }

  code {
    font-family: "Courier New", Courier, monospace;
    font-size: 8.5pt;
    background-color: #f3f3f3;
    color: #000000;
    padding: 0.5pt 2.5pt;
    border: 0.5pt solid #cccccc;
  }

  pre code {
    background-color: transparent;
    padding: 0;
    border: none;
    font-size: inherit;
    color: inherit;
  }

  /* Verdict labels */
  .verdict-tag {
    font-weight: bold;
    font-family: "Times New Roman", Times, serif;
    color: #000000;
    letter-spacing: 0.02em;
  }

  .check-box {
    font-family: "Courier New", Courier, monospace;
    font-weight: bold;
    margin-right: 3pt;
  }
`;
}

function buildFullHtml(doc, bodyHtml) {
  const isFactsheet = doc.isFactsheet || false;
  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <title>${doc.title} — Verifin GEMASTIK XIX 2026</title>
  <style>${getCss(isFactsheet, doc.shortTitle)}</style>
</head>
<body>
  <div class="doc-header">
    <div class="doc-header-logos">
      ${ugmLogoBase64 ? `<img src="${ugmLogoBase64}" alt="UGM Logo" />` : ''}
      ${gemastikLogoBase64 ? `<img src="${gemastikLogoBase64}" alt="Gemastik Logo" />` : ''}
      ${verifinLogoBase64 ? `<img src="${verifinLogoBase64}" alt="Verifin Logo" />` : ''}
    </div>
    <div class="doc-header-meta">
      <div class="institution">Universitas Gadjah Mada</div>
      <div class="event">Finalis GEMASTIK XIX 2026 · Divisi Pengembangan Perangkat Lunak</div>
      <div class="team">Tim Three Achilles · Karya: Verifin</div>
    </div>
  </div>
  ${bodyHtml}
</body>
</html>`;
}

console.log('Memulai Kompilasi Dokumen Finalis ke Format PDF Resmi Standar Akademik...\n');

// 1. Compile 04-draf-makalah-ilmiah-gemastik.tex via pdflatex (IEEEtran)
console.log('[1/8] Mengompilasi 04-draf-makalah-ilmiah-gemastik.tex (IEEEtran Camera-Ready)...');
try {
  execSync(`"${PDFLATEX_BIN}" -interaction=nonstopmode -output-directory="${DIR}" "${join(DIR, '04-draf-makalah-ilmiah-gemastik.tex')}" >/dev/null 2>&1`);
  execSync(`"${PDFLATEX_BIN}" -interaction=nonstopmode -output-directory="${DIR}" "${join(DIR, '04-draf-makalah-ilmiah-gemastik.tex')}" >/dev/null 2>&1`);
  // Clean aux
  for (const ext of ['.aux', '.log', '.out']) {
    const auxFile = join(DIR, `04-draf-makalah-ilmiah-gemastik${ext}`);
    if (existsSync(auxFile)) unlinkSync(auxFile);
  }
  const stats = readFileSync(join(DIR, '04-draf-makalah-ilmiah-gemastik.pdf'));
  console.log(`  Berhasil: 04-draf-makalah-ilmiah-gemastik.pdf (${(stats.length / 1024).toFixed(1)} KB)`);
} catch (err) {
  console.error('  Gagal mengompilasi LaTeX paper:', err.message);
}

// 2. Compile Surat Pernyataan HKI Bermeterai
const hkiDir = join(DIR, 'syarat-resmi-finalis');
const hkiTex = join(hkiDir, '05-surat-pernyataan-hki-bermeterai.tex');
if (existsSync(hkiTex)) {
  console.log('[2/8] Mengompilasi Surat Pernyataan HKI Bermeterai (LaTeX)...');
  try {
    execSync(`"${PDFLATEX_BIN}" -interaction=nonstopmode -output-directory="${hkiDir}" "${hkiTex}" >/dev/null 2>&1`);
    for (const ext of ['.aux', '.log']) {
      const auxFile = join(hkiDir, `05-surat-pernyataan-hki-bermeterai${ext}`);
      if (existsSync(auxFile)) unlinkSync(auxFile);
    }
    const stats = readFileSync(join(hkiDir, '05-surat-pernyataan-hki-bermeterai.pdf'));
    console.log(`  Berhasil: 05-surat-pernyataan-hki-bermeterai.pdf (${(stats.length / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.error('  Gagal mengompilasi surat pernyataan HKI:', err.message);
  }
}

// 3. Compile Markdown files via Chrome Headless with @page margin boxes
let idx = 3;
for (const doc of docs) {
  const mdPath = join(DIR, doc.src);
  const pdfPath = join(DIR, doc.pdf);
  const tempHtmlPath = join('/tmp', `${doc.src}.html`);

  if (!existsSync(mdPath)) {
    console.warn(`Peringatan: Berkas ${doc.src} tidak ditemukan, dilewati.`);
    continue;
  }

  console.log(`[${idx}/8] Memproses ${doc.src} -> ${doc.pdf}...`);
  idx++;

  const rawMd = readFileSync(mdPath, 'utf8');
  const processedHtml = processMarkdown(rawMd);
  const fullHtml = buildFullHtml(doc, processedHtml);

  writeFileSync(tempHtmlPath, fullHtml, 'utf8');

  // Running Chrome Headless with --no-pdf-header-footer to suppress default Chrome headers/footers
  const cmd = `"${CHROME_BIN}" --headless=new --disable-gpu --no-pdf-header-footer ` +
    `--print-to-pdf="${pdfPath}" "${tempHtmlPath}" 2>/dev/null`;

  try {
    execSync(cmd);
    const stats = readFileSync(pdfPath);
    console.log(`  Berhasil: ${doc.pdf} (${(stats.length / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.error(`  Gagal mengompilasi ${doc.src}:`, err.message);
  } finally {
    if (existsSync(tempHtmlPath)) {
      unlinkSync(tempHtmlPath);
    }
  }
}

console.log('\nSeluruh dokumen finalis resmi berhasil dikompilasi ke format PDF standar akademik.');
