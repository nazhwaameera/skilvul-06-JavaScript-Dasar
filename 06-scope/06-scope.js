/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript? 
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
// /// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript!


/// WRITE YOUR ANALYSIS HERE
/// Ada 3 variable scope pada Javascript, yakni block scope (untuk keywords let dan const) - variable hanya bisa diakses di dalam curly bracket ({}); function scope - variable hanya bisa diakses di dalam fungsi; dan global scope - variable bisa diakses di mana saja. Berikut adalah contohnya.
///1. Block scope
// {
//   let x = 2;
// }
// x tidak bisa digunakan di sini , di luar bracket
///2. Function scope
// function testFunc(test){
// 	let test1 = "test"
// }
//console.log(test1) //-> tidak bisa dilakukan
//variable test tidak bisa diakses di luar fungsi.
///3. Global scope
// let abc = 'abc'

// function print()
// {
// 	console.log(abc)
// }

// print()

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ? 
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name? 

/// WRITE YOUR ANALYSIS HERE
///Mariah. Karena yang dipass sebagai argumen adalah nama "Mariah Carey" dan variable name tidak diakses oleh fungsi - nama parameter hanya sama dengan nama variable.

const name = "John Watson";

function printFirstName(name) {
    return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));