#!/usr/bin/env bash
# =============================================================================
# Verifin Test Suite Runner — Gemastik XIX (Divisi PPL)
# Mengeksekusi 3 skenario pengujian & mencatat RAW JSON + latency (ms)
# =============================================================================
set -u
BASE="http://localhost:8000/api/v1"
OUT="/Users/fizualstd/Documents/GitHub/_LOMBA/gemastik19/test/hasil-test-raw"
TESTDIR="/Users/fizualstd/Documents/GitHub/_LOMBA/gemastik19/test"
mkdir -p "$OUT"

PASS="${1:-fresh}"   # fresh | repeat
STAMP="$(date '+%Y-%m-%d %H:%M:%S')"
echo "=== PASS: $PASS — $STAMP ===" | tee -a "$OUT/runner.log"

run() {
  local name="$1"; shift
  local outfile="$OUT/${name}.${PASS}.json"
  local metafile="$OUT/${name}.${PASS}.meta.txt"
  echo "--- [$name] pass=$PASS ---" | tee -a "$OUT/runner.log"
  # -w menulis timing (detik); kita konversi ke ms di meta
  curl -s -o "$outfile" -w "http_code=%{http_code}\ntime_total_s=%{time_total}\ntime_starttransfer_s=%{time_starttransfer}\nsize_download_bytes=%{size_download}\n" "$@" > "$metafile"
  local tt
  tt=$(grep time_total_s "$metafile" | cut -d= -f2)
  awk -v n="$name" -v p="$PASS" -v t="$tt" 'BEGIN{printf "%s pass=%s latency_ms=%.0f\n", n,p,t*1000}' | tee -a "$OUT/runner.log"
}

# --- METHOD 1: Teks langsung (PT VIS Desk Collection) ---
PAYLOAD_M1=$(python3 -c "import json,sys;print(json.dumps({'text':open('$TESTDIR/method 1.md').read(),'include_raw_text':True}))")
run "raw-test-method1" -X POST "$BASE/verify/text" -H "Content-Type: application/json" -d "$PAYLOAD_M1"

# --- METHOD 2: Poster gambar via OCR (Sushi Yay) ---
run "raw-test-method2" -X POST "$BASE/verify/image" -F "file=@$TESTDIR/method 2.webp;type=image/webp"

# --- METHOD 3: Link Instagram (Indonesia College) ---
PAYLOAD_M3=$(python3 -c "import json;print(json.dumps({'url':'https://www.instagram.com/p/DbCm1OLzZTq/','additional_text':open('$TESTDIR/method 2 link.md').read()}))")
run "raw-test-method3" -X POST "$BASE/verify/url" -H "Content-Type: application/json" -d "$PAYLOAD_M3"

echo "=== SELESAI PASS: $PASS ===" | tee -a "$OUT/runner.log"
