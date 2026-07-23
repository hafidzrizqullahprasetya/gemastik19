import re

with open('Proposal_Verifin.tex', 'r') as f:
    content = f.read()

# 1. Font to Times New Roman
content = content.replace(r'\usepackage{lmodern}', r'\usepackage{mathptmx}')

# 2. Text to black (remove color in titleformat, title page, and hypersetup)
content = content.replace(r'\color{verfinblue}', '')
content = content.replace(r'\color{verifindark}', '')
content = content.replace('linkcolor=verfinblue', 'linkcolor=black')
content = content.replace('urlcolor=verfinblue', 'urlcolor=black')
content = content.replace('citecolor=verfinblue', 'citecolor=black')

# 3. Contents to Daftar Isi
if r'\renewcommand{\contentsname}' not in content:
    content = content.replace(r'\tableofcontents', r'\renewcommand{\contentsname}{Daftar Isi}' + '\n' + r'\tableofcontents')

# 4. Gemastik XIX to Liga Komatik 2026
content = re.sub(r'GEMASTIK XIX\s*2026', 'Liga Komatik 2026', content, flags=re.IGNORECASE)
content = re.sub(r'GEMASTIK XIX', 'Liga Komatik 2026', content, flags=re.IGNORECASE)
content = re.sub(r'GEMASTIK', 'Liga Komatik 2026', content, flags=re.IGNORECASE)

# 5. Add subsections to TOC
def repl_sub(match):
    title = match.group(1)
    full_match = match.group(0)
    addition = f"\\addcontentsline{{toc}}{{subsection}}{{{title}}}"
    return f"{full_match}\n{addition}"

# Remove existing addcontentsline for subsection to avoid duplicates if run multiple times
content = re.sub(r'\\addcontentsline\{toc\}\{subsection\}\{.*?\}\n', '', content)
# Add them back for every \subsection*{...}
content = re.sub(r'\\subsection\*\{(.*?)\}', repl_sub, content)

with open('Proposal_Verifin.tex', 'w') as f:
    f.write(content)
