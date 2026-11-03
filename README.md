# Teacher Assessment — Frontend versi Supabase (GitHub Pages)

Salinan antarmuka Teacher Assessment yang terhubung ke **backend Apps Script versi Supabase**.
Aplikasi versi Sheets tetap berjalan terpisah di repositorinya sendiri.

## Struktur

    index.html      <- halaman utama, WAJIB di root repositori
    css/style.css
    js/config.js    <- satu-satunya berkas yang perlu diedit (BACKEND_URL)
    js/app.js
    .nojekyll

## Pemasangan singkat

1. Edit `js/config.js`, isi `BACKEND_URL` dengan URL Web App backend **versi Supabase** (berakhiran `/exec`).
2. Unggah seluruh isi folder ini ke repositori GitHub BARU (folder ini = root repositori).
3. Settings -> Pages -> Deploy from a branch -> `main` -> `/ (root)` -> Save.

Panduan lengkap ada di README utama paket.
