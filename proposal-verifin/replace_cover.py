import re

with open('Proposal_Verifin.tex', 'r') as f:
    content = f.read()

pattern = re.compile(r"\\begin\{titlepage\}.*?\\end\{titlepage\}", re.DOTALL)

replacement = """\\begin{titlepage}
\\thispagestyle{empty}
\\begin{tikzpicture}[remember picture, overlay]
  \\node[anchor=center, inner sep=0pt] at (current page.center) {
    \\includegraphics[width=\\paperwidth,height=\\paperheight,keepaspectratio=false]{cover.jpeg}
  };
\\end{tikzpicture}
\\end{titlepage}"""

# Use a function to return the raw string to avoid escape interpretation by re.sub
content = pattern.sub(lambda m: replacement, content)

with open('Proposal_Verifin.tex', 'w') as f:
    f.write(content)
