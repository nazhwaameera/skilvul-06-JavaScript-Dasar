/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/// Type Error adalah tipe error yang digunakan untuk mengindikasikan operasi yang gagal dilakukan apabila tipe NativeError yang lain tidak tepat digunakan untuk mengindikasikan penyebab terjadinya error tersebut - muncul ketika operasi dilakukan terhadap tipe data yang salah (penggunaan method untuk string terhadap data dengan tipe number, vice versa).
/// Reference Error adalah error yang muncul ketika reference yang kita buat terhadap suatu variabel atau item rusak - yang dapat terjadi karena variabel atau item tersebut tidak eksis (belum dideklarasikan).
/// Range Error adalah error yang muncul ketika sebuah angka atau number berada di luar range nilai yang diizinkan. Misalkan kita berusaha mengalikan ukuran length suatu array dengan angka yang besar. Range error akan muncul apabila ukuran length array yang hendak diberikan melebihi batas maksimal ukuran array yang dapat dimiliki suatu array di JavaScript.
/// Syntax Error adalah jenis error yang paling sering ditemui. Error ini muncul ketika syntaks atau source code kita tidak sesuai dnegan aturan syntaks di JavaScript yang kemudian menyebabkan stages gagal (tokenization dan parsing).

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
///Reference error, karena kita berusaha mengakses sebuah variabel yang belum dideklarasikan. Karena urutan pengeksekusian kode dimulai dari atas ke bawah, ketika command console.log dilakukan kedua variabel belum dibuat dalam sistem.
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;