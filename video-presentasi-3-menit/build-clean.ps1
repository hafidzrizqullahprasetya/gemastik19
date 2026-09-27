# Build index.html from slide partials
# Run this script after editing any file in slides/
$dir = Split-Path -Parent $MyInvocation.MyCommand.Path
$slideFiles = Get-ChildItem "$dir\slides\*.html" | Sort-Object Name

$(Get-ChildItem slides/*.html | ForEach-Object { (Get-Content # Build index.html from slide partials
# Run this script after editing any file in slides/
$dir = Split-Path -Parent $MyInvocation.MyCommand.Path
$slideFiles = Get-ChildItem "$dir\slides\*.html" | Sort-Object Name

$slidesHtml = ($slideFiles | ForEach-Object { [IO.File]::ReadAllText($_.FullName, [Text.Encoding]::UTF8).Trim() }) -join "`r`n`r`n"

$template = @'
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verifin - Video Presentasi GEMASTIK XIX 2026</title>

  <link rel="stylesheet" href="css/deck.css">
</head>
<body>

  <!-- Navigation Dots -->
  <nav class="nav-dots">
    <div class="nav-dot active" data-slide="0"></div>
    <div class="nav-dot" data-slide="1"></div>
    <div class="nav-dot" data-slide="2"></div>
    <div class="nav-dot" data-slide="3"></div>
    <div class="nav-dot" data-slide="4"></div>
    <div class="nav-dot" data-slide="5"></div>
    <div class="nav-dot" data-slide="6"></div>
    <div class="nav-dot" data-slide="7"></div>
    <div class="nav-dot" data-slide="8"></div>
    <div class="nav-dot" data-slide="9"></div>
    <div class="nav-dot" data-slide="10"></div>
    <div class="nav-dot" data-slide="11"></div>
  </nav>

  <!-- Slide Counter -->
  <div class="slide-counter">1 / 12</div>

  <!-- Slides Container -->
  <main id="deck">
{{SLIDES}}
  </main>

  <script src="js/main.js"></script>
</body>
</html>
'@

$output = $template.Replace('{{SLIDES}}', $slidesHtml)
[IO.File]::WriteAllText("$dir\index.html", $output, [Text.Encoding]::UTF8)
Write-Host "Built index.html with $($slideFiles.Count) slides ($($output.Length) chars)"
.FullName -Raw) -replace "<div class=\"slide-content\">", "<!-- CONTENT START -->" -replace "</div>", "<!-- CONTENT END -->" }) = ($slideFiles | ForEach-Object { [IO.File]::ReadAllText($_.FullName, [Text.Encoding]::UTF8).Trim() }) -join "`r`n`r`n"

$template = @'
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verifin - Video Presentasi GEMASTIK XIX 2026</title>

  <link rel="stylesheet" href="css/deck.css">
</head>
<body>

  <!-- Navigation Dots -->
  <nav class="nav-dots">
    <div class="nav-dot active" data-slide="0"></div>
    <div class="nav-dot" data-slide="1"></div>
    <div class="nav-dot" data-slide="2"></div>
    <div class="nav-dot" data-slide="3"></div>
    <div class="nav-dot" data-slide="4"></div>
    <div class="nav-dot" data-slide="5"></div>
    <div class="nav-dot" data-slide="6"></div>
    <div class="nav-dot" data-slide="7"></div>
    <div class="nav-dot" data-slide="8"></div>
    <div class="nav-dot" data-slide="9"></div>
    <div class="nav-dot" data-slide="10"></div>
    <div class="nav-dot" data-slide="11"></div>
  </nav>

  <!-- Slide Counter -->
  <div class="slide-counter">1 / 12</div>

  <!-- Slides Container -->
  <main id="deck">
{{SLIDES}}
  </main>

  <script src="js/main.js"></script>
</body>
</html>
'@

$output = $template.Replace('{{SLIDES}}', $(Get-ChildItem slides/*.html | ForEach-Object { (Get-Content # Build index.html from slide partials
# Run this script after editing any file in slides/
$dir = Split-Path -Parent $MyInvocation.MyCommand.Path
$slideFiles = Get-ChildItem "$dir\slides\*.html" | Sort-Object Name

$slidesHtml = ($slideFiles | ForEach-Object { [IO.File]::ReadAllText($_.FullName, [Text.Encoding]::UTF8).Trim() }) -join "`r`n`r`n"

$template = @'
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verifin - Video Presentasi GEMASTIK XIX 2026</title>

  <link rel="stylesheet" href="css/deck.css">
</head>
<body>

  <!-- Navigation Dots -->
  <nav class="nav-dots">
    <div class="nav-dot active" data-slide="0"></div>
    <div class="nav-dot" data-slide="1"></div>
    <div class="nav-dot" data-slide="2"></div>
    <div class="nav-dot" data-slide="3"></div>
    <div class="nav-dot" data-slide="4"></div>
    <div class="nav-dot" data-slide="5"></div>
    <div class="nav-dot" data-slide="6"></div>
    <div class="nav-dot" data-slide="7"></div>
    <div class="nav-dot" data-slide="8"></div>
    <div class="nav-dot" data-slide="9"></div>
    <div class="nav-dot" data-slide="10"></div>
    <div class="nav-dot" data-slide="11"></div>
  </nav>

  <!-- Slide Counter -->
  <div class="slide-counter">1 / 12</div>

  <!-- Slides Container -->
  <main id="deck">
{{SLIDES}}
  </main>

  <script src="js/main.js"></script>
</body>
</html>
'@

$output = $template.Replace('{{SLIDES}}', $slidesHtml)
[IO.File]::WriteAllText("$dir\index.html", $output, [Text.Encoding]::UTF8)
Write-Host "Built index.html with $($slideFiles.Count) slides ($($output.Length) chars)"
.FullName -Raw) -replace "<div class=\"slide-content\">", "<!-- CONTENT START -->" -replace "</div>", "<!-- CONTENT END -->" }))
[IO.File]::WriteAllText("$dir\index.html", $output, [Text.Encoding]::UTF8)
Write-Host "Built index.html with $($slideFiles.Count) slides ($($output.Length) chars)"

