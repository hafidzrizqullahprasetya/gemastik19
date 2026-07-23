import re

with open('Proposal_Verifin.tex', 'r') as f:
    content = f.read()

# 1. Add indentfirst and parindent length
if r'\usepackage{indentfirst}' not in content:
    content = content.replace(
        r'\usepackage{mathptmx}', 
        r'\usepackage{mathptmx}' + '\n' + r'\usepackage{indentfirst}' + '\n' + r'\setlength{\parindent}{1.25cm}'
    )

# 2. Fix TikZ picture scaling for E.3
# We wrap the \begin{tikzpicture} ... \end{tikzpicture} with \resizebox{\textwidth}{!}{ ... }

def repl_tikz(match):
    full_tikz = match.group(0)
    # Wrap with resizebox
    return r'\resizebox{\textwidth}{!}{' + '\n' + full_tikz + '\n}'

tikz_pattern = re.compile(r'\\begin\{tikzpicture\}.*?\\end\{tikzpicture\}', re.DOTALL)
content = tikz_pattern.sub(repl_tikz, content)

with open('Proposal_Verifin.tex', 'w') as f:
    f.write(content)
