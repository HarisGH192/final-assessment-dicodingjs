function factorial(n) {
  // Validasi sederhana: jika n kurang dari 0 kembalikan undefined
  if (n < 0) return undefined;

  // Basis rekursi: 0! = 1
  if (n === 0) return 1;

  // Rekurens: n! = n * (n-1)!
  return n * factorial(n - 1);
}

// Jangan hapus kode di bawah ini!
export default factorial;
