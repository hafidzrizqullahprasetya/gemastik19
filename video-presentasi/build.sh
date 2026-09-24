#!/usr/bin/env bash
# Build index.html from slide partials
# Run this script after editing any file in slides/
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

python3 -c "
import glob, os

d = '$DIR'
slide_files = sorted(glob.glob(os.path.join(d, 'slides', '*.html')))
slides_html = '\n\n'.join(open(f, 'r', encoding='utf-8').read().strip() for f in slide_files)

template = '''<!DOCTYPE html>
<html lang=\"id\">
<head>
  <meta charset=\"UTF-8\">
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
  <title>Verifin - Video Presentasi GEMASTIK XIX 2026</title>

  <link rel=\"stylesheet\" href=\"css/deck.css\">
</head>
<body>

  <!-- Navigation Dots -->
  <nav class=\"nav-dots\">
    <div class=\"nav-dot active\" data-slide=\"0\"></div>
    <div class=\"nav-dot\" data-slide=\"1\"></div>
    <div class=\"nav-dot\" data-slide=\"2\"></div>
    <div class=\"nav-dot\" data-slide=\"3\"></div>
    <div class=\"nav-dot\" data-slide=\"4\"></div>
    <div class=\"nav-dot\" data-slide=\"5\"></div>
    <div class=\"nav-dot\" data-slide=\"6\"></div>
    <div class=\"nav-dot\" data-slide=\"7\"></div>
    <div class=\"nav-dot\" data-slide=\"8\"></div>
    <div class=\"nav-dot\" data-slide=\"9\"></div>
    <div class=\"nav-dot\" data-slide=\"10\"></div>
    <div class=\"nav-dot\" data-slide=\"11\"></div>
  </nav>

  <!-- Slide Counter -->
  <div class=\"slide-counter\">1 / 12</div>

  <!-- Slides Container -->
  <main id=\"deck\">
{{SLIDES}}
  </main>

  <script src=\"js/main.js\"></script>
</body>
</html>'''

output = template.replace('{{SLIDES}}', slides_html)
with open(os.path.join(d, 'index.html'), 'w', encoding='utf-8') as out:
    out.write(output)

print(f'Built index.html with {len(slide_files)} slides ({len(output)} chars)')
"
