// Teacher Assessment — versi SUPABASE.
// Alamat Web App BACKEND API versi Supabase (berakhiran /exec). BUKAN alamat backend versi Sheets.
// Boleh terlihat publik: yang melindungi data adalah login kode OTP di backend, bukan kerahasiaan alamat ini.
// JANGAN menaruh SECRET, kunci Supabase, kata sandi, atau data pegawai di berkas ini.
window.CFG = {
  BACKEND_URL: 'https://script.google.com/macros/s/AKfycbzlXDqMHlp6MnwSpcb-4qyJzy4uzRhcdUj6MMRbMrc28Dc-Dz6af86sWEEcc7SiQjqx/exec',
  // Awalan penyimpanan browser: membuat sesi login aplikasi ini terpisah dari aplikasi versi Sheets
  // walaupun keduanya berada di domain GitHub yang sama. Jangan dikosongkan.
  STORAGE_PREFIX: 'sb:'
};
