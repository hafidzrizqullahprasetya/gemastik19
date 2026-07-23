import re

with open('Proposal_Verifin.tex', 'r') as f:
    content = f.read()

# 1. PREAMBLE
content = content.replace(r'\usepackage[bahasa]{babel}', '')
content = content.replace(r'\usepackage{pgfplots}', '')
content = content.replace(r'\pgfplotsset{compat=1.18}', '')

preamble_add = r'\usepackage{mathptmx}' + '\n' + r'\usepackage{indentfirst}' + '\n' + r'\usepackage{pdfpages}' + '\n' + r'\setlength{\parindent}{1.25cm}'
content = content.replace(r'\usepackage{lmodern}', preamble_add)

# 2. COLORS TO BLACK
content = content.replace(r'\color{verfinblue}', '')
content = content.replace(r'\color{verifindark}', '')
content = content.replace('linkcolor=verfinblue', 'linkcolor=black')
content = content.replace('urlcolor=verfinblue', 'urlcolor=black')
content = content.replace('citecolor=verfinblue', 'citecolor=black')

# 3. FULL PAGE COVER REPLACEMENT + REMOVING SCHOOL INFO
# The old titlepage block will be completely replaced by the PDF page
title_pattern = re.compile(r"\\begin\{titlepage\}.*?\\end\{titlepage\}", re.DOTALL)
content = title_pattern.sub(r"\\includepdf[pages=1,fitpaper]{cover.pdf}", content)

# 4. TOC AND SUBSECTIONS
if r'\renewcommand{\contentsname}' not in content:
    content = content.replace(r'\tableofcontents', r'\renewcommand{\contentsname}{Daftar Isi}' + '\n' + r'\tableofcontents')

def repl_sub(match):
    title = match.group(1)
    return f"\\subsection*{{{title}}}\n\\addcontentsline{{toc}}{{subsection}}{{{title}}}"
content = re.sub(r'\\addcontentsline\{toc\}\{subsection\}\{.*?\}\n', '', content)
content = re.sub(r'\\subsection\*\{(.*?)\}', repl_sub, content)

# 5. NAME REPLACE
content = re.sub(r'GEMASTIK XIX\s*2026', 'Liga Komatik 2026', content, flags=re.IGNORECASE)
content = re.sub(r'GEMASTIK XIX', 'Liga Komatik 2026', content, flags=re.IGNORECASE)
content = re.sub(r'GEMASTIK', 'Liga Komatik 2026', content, flags=re.IGNORECASE)

# 6. RESTRUCTURING G, H -> F.6, G, H
content = content.replace(r"\section*{G.\quad Evaluasi Model (Dataset EMSCAD)}\n\addcontentsline{toc}{section}{G. Evaluasi Model}", r"\subsection*{F.6 Evaluasi Model (Dataset EMSCAD)}\n\addcontentsline{toc}{subsection}{F.6 Evaluasi Model (Dataset EMSCAD)}")
content = content.replace(r"\section*{H.\quad Mockup Antarmuka (Hasil Uji End-to-End)}\n\addcontentsline{toc}{section}{H. Mockup Antarmuka}", r"\section*{G.\quad Screenshot Mockup Antarmuka Perangkat Lunak}\n\addcontentsline{toc}{section}{G. Screenshot Mockup Antarmuka Perangkat Lunak}")

dokumentasi_content = r"""\end{figure}

\section*{H.\quad Dokumentasi Cara Penggunaan Perangkat Lunak}
\addcontentsline{toc}{section}{H. Dokumentasi Cara Penggunaan Perangkat Lunak}

Verifin dapat diakses melalui antarmuka web tanpa memerlukan instalasi perangkat lunak apapun di sisi pengguna. Berikut panduan lengkap penggunaan sistem dari awal hingga interpretasi hasil.

\subsection*{H.1 Persyaratan Akses}
\addcontentsline{toc}{subsection}{H.1 Persyaratan Akses}

\begin{itemize}[leftmargin=*]
  \item Perangkat dengan browser modern (Chrome, Firefox, Edge, Safari versi terkini)
  \item Koneksi internet untuk menjalankan pipeline OSINT dan LLM
  \item Tidak diperlukan akun atau registrasi untuk verifikasi dasar
\end{itemize}

\subsection*{H.2 Langkah Penggunaan}
\addcontentsline{toc}{subsection}{H.2 Langkah Penggunaan}

\subsubsection*{Langkah 1 — Akses Aplikasi}
Buka browser dan navigasikan ke URL aplikasi Verifin. Halaman utama menampilkan kolom input analisis dan navigasi ke riwayat verifikasi serta halaman komunitas pelaporan.

\subsubsection*{Langkah 2 — Masukkan Data Lowongan}

Verifin mendukung tiga kanal input:

\begin{enumerate}[leftmargin=*]
  \item \textbf{Input Teks} --- Salin dan tempel seluruh teks iklan lowongan kerja (dari WhatsApp, media sosial, atau platform lainnya) ke dalam kotak teks yang tersedia. Semakin lengkap teks yang disertakan (nama perusahaan, nomor kontak, alamat, deskripsi pekerjaan), semakin akurat hasil verifikasi.
  \item \textbf{Input Gambar/Foto} --- Unggah gambar poster lowongan (format JPG, PNG, atau WebP). Sistem secara otomatis menjalankan OCR menggunakan PaddleOCR untuk mengekstrak teks dari gambar sebelum dianalisis. Cocok untuk lowongan yang tersebar dalam format pamflet atau screenshot.
  \item \textbf{Input Tautan (URL)} --- Masukkan URL halaman lowongan (misalnya tautan dari Instagram, Jobstreet, atau situs perusahaan). Sistem akan mengambil dan menganalisis konten halaman tersebut, termasuk inspeksi domain dan keamanan infrastruktur web.
\end{enumerate}

\subsubsection*{Langkah 3 — Mulai Analisis}
Klik tombol \textbf{``Verifikasi Sekarang''} (atau tombol submit yang tersedia). Sebuah modal progres akan muncul menampilkan tahapan pipeline yang sedang berjalan secara real-time: OCR/Ekstraksi Entitas $\to$ Investigasi OSINT $\to$ Analisis Graf Jaringan $\to$ Sintesis LLM \& XAI. Proses berlangsung rata-rata 15--45 detik tergantung jumlah entitas yang perlu diinvestigasi.

\subsubsection*{Langkah 4 — Baca Hasil Verifikasi}

Halaman hasil menampilkan komponen berikut secara berurutan:

\begin{enumerate}[leftmargin=*]
  \item \textbf{Verdict dan Skor Risiko} --- Badge berwarna menampilkan putusan final (\texttt{AMAN} / \texttt{WASPADA} / \texttt{BAHAYA}) disertai Skor Risiko (0--100). Skor ini bukan probabilitas, melainkan indeks risiko berbasis agregasi bukti.
  \item \textbf{Ringkasan Naratif LLM} --- Penjelasan singkat berbahasa Indonesia yang merangkum temuan utama OSINT dan alasan di balik verdict yang diberikan.
  \item \textbf{Breakdown XAI} --- Daftar faktor yang berkontribusi terhadap skor risiko (positif = meningkatkan risiko, negatif = menurunkan risiko), beserta penjelasan per-faktor yang dapat dipahami pengguna awam.
  \item \textbf{Detail OSINT} --- Ringkasan temuan dari setiap modul investigasi: status domain/website, reputasi nomor telepon, jejak digital perusahaan, dan validasi alamat fisik.
  \item \textbf{Graf Jaringan Penipuan} --- Visualisasi interaktif menampilkan apakah entitas (nomor HP, email, nama perusahaan) dalam lowongan ini pernah muncul di kasus penipuan lain yang tersimpan dalam database.
\end{enumerate}

\subsubsection*{Langkah 5 — Tindak Lanjut}

\begin{itemize}[leftmargin=*]
  \item Jika verdict \texttt{AMAN}: lowongan memiliki indikator kepercayaan yang terverifikasi. Pengguna tetap dianjurkan untuk memverifikasi secara mandiri sebelum memberikan data pribadi.
  \item Jika verdict \texttt{WASPADA}: terdapat beberapa sinyal yang belum dapat dikonfirmasi. Pengguna disarankan melakukan verifikasi lanjutan sebelum merespons lowongan.
  \item Jika verdict \texttt{BAHAYA}: sistem mendeteksi pola penipuan yang kuat. Pengguna disarankan untuk tidak merespons dan dapat melaporkan ke fitur komunitas Verifin atau ke pihak berwenang.
\end{itemize}

\subsection*{H.3 Fitur Pelaporan Komunitas}
\addcontentsline{toc}{subsection}{H.3 Fitur Pelaporan Komunitas}

Pengguna yang telah menemukan atau menjadi korban lowongan penipuan dapat melaporkan entitas (nomor HP, email, URL, atau nama perusahaan) melalui halaman \textbf{Komunitas}. Laporan ini diverifikasi dan diintegrasikan ke dalam graf jaringan penipuan untuk memperkuat deteksi bagi pengguna lain di masa depan. Formulir pelaporan tersedia di menu navigasi utama dengan mengisi: (1) nama/identitas entitas terlapor, (2) jenis penipuan, dan (3) deskripsi singkat kronologi.

\subsection*{H.4 Riwayat Verifikasi}
\addcontentsline{toc}{subsection}{H.4 Riwayat Verifikasi}

Seluruh verifikasi yang pernah dilakukan dapat diakses kembali melalui halaman \textbf{Riwayat} yang menampilkan daftar verifikasi beserta verdict, skor risiko, dan waktu pemeriksaan. Fitur ini memungkinkan pengguna membandingkan lowongan yang berbeda atau merujuk kembali hasil analisis sebelumnya.

\section*{Daftar Pustaka}
\addcontentsline{toc}{section}{Daftar Pustaka}"""
content = content.replace(r"\end{figure}" + "\n\n" + r"\section*{Daftar Pustaka}" + "\n" + r"\addcontentsline{toc}{section}{Daftar Pustaka}", dokumentasi_content)


# 7. SHRINK TIKZ E.3 (NO RESIZEBOX!)
old_tikz = r"""\begin{tikzpicture}[
  node distance=0.6cm,
  box/.style={rectangle, rounded corners=4pt, minimum width=2.2cm, minimum height=1.1cm,
              text centered, font=\small\bfseries, text width=2.1cm},"""
new_tikz = r"""\begin{tikzpicture}[
  node distance=0.4cm,
  box/.style={rectangle, rounded corners=4pt, minimum width=2.0cm, minimum height=0.9cm,
              text centered, font=\footnotesize\bfseries, text width=1.9cm},"""
content = content.replace(old_tikz, new_tikz)


# 8. POIN D FIXES (XAI)
old_xai_table = r"""\begin{longtable}{@{}p{5cm}p{3cm}p{6.5cm}@{}}
\toprule
\textbf{Fitur} & \textbf{Bobot Dasar} & \textbf{Deskripsi} \\
\midrule
\endfirsthead
\toprule
\textbf{Fitur} & \textbf{Bobot Dasar} & \textbf{Deskripsi} \\
\midrule
\endhead
Klasifikasi Perilaku Teks & 25\% & Skor pre-screening hybrid TF-IDF+LogReg dan aturan perilaku \\
Domain Age & 15\% & Usia domain: makin tua makin tinggi skor \\
Domain Reputation & 15\% & Keaktifan website \& umur domain: aktif \& tua = bonus, mati/baru = penalti \\
Phone Reported & 10\% & Nomor pernah dilaporkan = penalti besar \\
Company Found & 15\% & Perusahaan terverifikasi di sumber publik \\
Fraud Network Match & 20\% & Entitas cocok dengan fingerprint penipuan sebelumnya \\
\bottomrule
\caption{Fitur dan bobot dasar XAI Explainer Verifin}
\end{longtable}"""

new_xai_table = r"""\begin{longtable}{@{}p{4.5cm}p{2.5cm}p{7.5cm}@{}}
\toprule
\textbf{Fitur} & \textbf{Bobot Dasar} & \textbf{Deskripsi} \\
\midrule
\endfirsthead
\toprule
\textbf{Fitur} & \textbf{Bobot Dasar} & \textbf{Deskripsi} \\
\midrule
\endhead
Klasifikasi Perilaku Teks & 25\% & Skor pre-screening hybrid TF-IDF+LogReg dan aturan perilaku (mencakup deteksi kata kunci penipuan umum) \\
\quad\textit{--- sub-komponen:} & & \\
\quad Sinyal Red Flag Teks & \textit{(bagian dari 25\%)} & Deteksi frasa spesifik bermodus tinggi: permintaan dokumen sensitif (KTP/foto) di awal rekrutmen, janji langsung kerja tanpa seleksi formal, atau instruksi mendesak yang memanipulasi calon pelamar \\
Domain Age & 15\% & Usia domain: makin tua makin dipercaya; domain $<$90 hari mendapat penalti penuh \\
Domain Reputation & 15\% & Keaktifan website \& reputasi domain: aktif \& tidak terindikasi phishing = sinyal aman; tidak dapat diakses = penalti. \textbf{Penanganan fitur tidak tersedia (\textit{missing})}: jika lowongan tidak mencantumkan domain/website sama sekali, bobot gabungan Domain Age + Domain Reputation (30\%) didistribusikan sebagai penalti tetap sebesar \textbf{8 poin} untuk mencerminkan ketiadaan transparansi digital perekrut \\
Phone Reported & 10\% & Nomor pernah dilaporkan di Kredibel.id = penalti besar; tidak dicantumkan = kontribusi 0 \\
Company Found & 15\% & Perusahaan terverifikasi di sumber publik (web/SERP); tidak ditemukan = penalti \\
Fraud Network Match & 20\% & Entitas (nomor HP/email/nama PT) cocok dengan fingerprint penipuan yang tersimpan di graf jaringan fraud \\
\midrule
\textit{Nilai Dasar ($S_{\text{dasar}}$)} & \textit{12 poin} & \textit{Nilai awal netral yang diterapkan pada setiap lowongan sebelum fitur apapun dievaluasi, mencerminkan ketidakpastian minimal inheren} \\
\bottomrule
\caption{Fitur, bobot dasar, dan mekanisme penanganan fitur tidak tersedia pada XAI Explainer Verifin}
\end{longtable}"""
content = content.replace(old_xai_table, new_xai_table)

old_xai_para = r"""Output XAI berupa daftar fitur beserta nilai kontribusinya (positif/negatif) dan penjelasan
dalam bahasa Indonesia yang dapat dipahami pengguna awam. Skor akhir merupakan agregasi
penjumlahan terbobot (\textit{weighted additive}) dari seluruh kontribusi fitur, yang dipetakan
ke rentang 0--100."""

new_xai_para = r"""Output XAI berupa daftar fitur beserta nilai kontribusinya (positif/negatif) dan penjelasan
dalam bahasa Indonesia yang dapat dipahami pengguna awam. Skor akhir dihitung menggunakan
formula penjumlahan aditif berbasis bukti sebagai berikut:

\begin{equation}
S_{\text{risiko}} = S_{\text{dasar}} + \sum_{i} \phi_i
\end{equation}

\noindent di mana $S_{\text{dasar}} = 12$ adalah nilai awal netral yang mencerminkan tingkat
ketidakpastian minimal pada setiap lowongan yang belum terverifikasi (berdasarkan distribusi
rata-rata populasi lowongan valid), dan $\phi_i$ adalah kontribusi Shapley dari fitur ke-$i$
(bernilai positif untuk sinyal risiko, negatif untuk sinyal aman). Nilai $\phi_i$ dihitung
secara proporsional: jika total bobot sinyal risiko yang terdeteksi adalah $R_{\text{raw}}$,
maka setiap $\phi_i$ diskalakan agar $S_{\text{dasar}} + \sum \phi_i$ tepat sama dengan
Skor Risiko final yang dihasilkan sistem."""
content = content.replace(old_xai_para, new_xai_para)

old_xai_calc = r"""\begin{longtable}{@{}p{5cm}p{2.5cm}p{7cm}@{}}
\toprule
\textbf{Fitur} & \textbf{Kontribusi} & \textbf{Penjelasan} \\
\midrule
\endfirsthead
\toprule
\textbf{Fitur} & \textbf{Kontribusi} & \textbf{Penjelasan} \\
\midrule
\endhead
Klasifikasi Perilaku Teks & \textcolor{verfinred}{$+$22 poin} & Model hybrid ML mendeteksi pola penipuan (skor 93) \\
Phone Reports & \textcolor{verfinred}{$+$18 poin} & Nomor dilaporkan 3x sebagai penipuan \\
Company Not Found & \textcolor{verfinred}{$+$15 poin} & Perusahaan tidak ditemukan di sumber publik \\
No Domain & \textcolor{verfinred}{$+$8 poin} & Tidak ada domain/website yang bisa diverifikasi \\
Red Flag Text & \textcolor{verfinred}{$+$12 poin} & Permintaan KTP/foto awal + janji langsung kerja \\
Base Score & $+$0 & Skor dasar (0 = sangat aman) \\
\midrule
\textbf{Skor Risiko Final} & \textbf{\textcolor{verfinred}{93}} & \textbf{\textcolor{verfinred}{BAHAYA}} \\
\bottomrule
\caption{Breakdown XAI untuk contoh lowongan penipuan (Skor Risiko: 0=sangat aman, 100=sangat berbahaya)}
\end{longtable}"""

new_xai_calc = r"""\begin{longtable}{@{}p{5cm}p{2.5cm}p{7cm}@{}}
\toprule
\textbf{Fitur} & \textbf{Kontribusi ($\phi_i$)} & \textbf{Penjelasan} \\
\midrule
\endfirsthead
\toprule
\textbf{Fitur} & \textbf{Kontribusi ($\phi_i$)} & \textbf{Penjelasan} \\
\midrule
\endhead
Nilai Dasar ($S_{\text{dasar}}$) & $+$12 poin & Nilai awal netral sebelum fitur dievaluasi \\
Klasifikasi Perilaku Teks & $+$24 poin & Model hybrid ML mendeteksi pola penipuan (skor 93) \\
Phone Reports & $+$19 poin & Nomor dilaporkan 3x sebagai penipuan \\
Company Not Found & $+$16 poin & Perusahaan tidak ditemukan di sumber publik \\
Sinyal Red Flag Teks & $+$13 poin & Permintaan KTP/foto awal + janji langsung kerja (sub-komponen Klasifikasi Perilaku Teks) \\
No Domain & $+$9 poin & Tidak ada domain/website yang bisa diverifikasi; penalti tetap redistribusi bobot Domain Age + Domain Reputation \\
\midrule
\textbf{Total: $S_{\text{dasar}} + \sum\phi_i$} & \textbf{$12 + 81$} & \textbf{Verifikasi: $12 + 24 + 19 + 16 + 13 + 9 = 93$} \\
\midrule
\textbf{Skor Risiko Final} & \textbf{93} & \textbf{BAHAYA} \\
\bottomrule
\caption{Breakdown XAI untuk contoh lowongan penipuan. Formula: $S_{\text{risiko}} = S_{\text{dasar}} + \sum_i \phi_i = 12 + 81 = 93$. Skala: 0=sangat aman, 100=sangat berbahaya.}
\end{longtable}"""
content = content.replace(old_xai_calc, new_xai_calc)

with open('Proposal_Verifin.tex', 'w') as f:
    f.write(content)
