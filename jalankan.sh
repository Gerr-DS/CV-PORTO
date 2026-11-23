#!/usr/bin/env bash
# Jalankan portfolio CVA di browser lewat server lokal.
# Pakai server (bukan double-klik index.html) supaya gambar potret ikut terbaca.
set -e
cd "$(dirname "$0")"
PORT=8126
echo "Situs berjalan di: http://127.0.0.1:${PORT}/"
echo "Tekan Ctrl+C untuk berhenti."
exec python3 -m http.server "${PORT}" --bind 127.0.0.1
