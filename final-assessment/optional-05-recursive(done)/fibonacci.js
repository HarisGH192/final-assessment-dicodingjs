function fibonacci(n) {
  // Validasi sederhana: jika n kurang dari 0 kembalikan array kosong
  if (n < 0) return [];

  // Basis rekursi
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  // Rekurens: ambil deret hingga n-1 lalu tambahkan elemen ke-n
  const seq = fibonacci(n - 1);
  const next = seq[seq.length - 1] + seq[seq.length - 2];
  seq.push(next);
  return seq;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
