import re

with open('Proposal_Verifin.tex', 'r') as f:
    content = f.read()

# Locate the specific tabular block and remove it
pattern = r"\\begin\{tabular\}\{ll\}\nSekolah & Sekolah Vokasi\\\\\nProgram Studi & Teknologi Rekayasa Perangkat Lunak \(D4\)\\\\\nUniversitas & Universitas Gadjah Mada\\\\\nKota & Yogyakarta\\\\\nTahun & 2026\\\\\n\\end\{tabular\}\n\\vspace\{2cm\}"

# Also check for variations in spacing just in case
content = re.sub(pattern, '', content, flags=re.MULTILINE)

# Let's do a more robust regex if the first one doesn't match perfectly
robust_pattern = r"\\begin\{tabular\}\{ll\}\s*Sekolah &.*?\\end\{tabular\}\s*\\vspace\{2cm\}"
content = re.sub(robust_pattern, '', content, flags=re.DOTALL)

with open('Proposal_Verifin.tex', 'w') as f:
    f.write(content)
