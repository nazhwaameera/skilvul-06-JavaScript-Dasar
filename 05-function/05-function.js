/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Spesifikasi
/// - 0% pajak apabila $SALARY < Rp 5.000.000
/// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% pajak apabila Rp 20.000.000 <= $SALARY 

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan

/// EDIT HERE
function taxCalc(salary) {
    if (salary < 5000000) {
        return 0;
    } else if (salary >= 5000000 && salary < 10000000) {
        return (5 / 100 * salary);
    } else if (salary >= 10000000 && salary < 20000000) {
        return (10 / 100 * salary);
    } else if (salary >= 20000000) {
        return (20 / 100 * salary);
    } else {
        console.log("Input tidak dapat digolongkan. Masukkan input yang lain.")
        return 0;
    }
}

let tax = taxCalc(20000000)
console.log(tax)


/// Soal - 02
/// BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah fungsi untuk menghitung BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.

/// Spesifikasi BMI
/// - "under weight" apabila $BMI < 18.5
/// - "normal" apabila 18.5 < $BMI < 24.9
/// - "over weight" apabila 25 < $BMI < 29.9
/// - "obese" apabila 30 < $BMI < 34.9
/// - "extremely obese" apabila 35 < BMI

/// Parameter
/// - (Number) `height` ⇒ tinggi seseorang (cm)
/// - (Number) `weight` ⇒ berat badan seseorang (kg) 

/// Return Value
/// - (String) Indikasi BMI yang didapatkan melalui formula dibawah
///   

/// EDIT HERE
function returnBMI(weight, height) {
    return (weight / (height ** 2)) * 10000
}

function checkBMI(weight, height) {
    let test = returnBMI(weight, height)

    if (test < 18.5) {
        console.log('under weight')
    } else if (test > 18.5 && test < 24.9) {
        console.log('normal')
    } else if (test > 25 && test < 29.9) {
        console.log('over weight')
    } else if (test > 30 && test < 34.9) {
        console.log('obese')
    } else if (test > 35) {
        console.log('extremely obese')
    } else {
        console.log('Unknown input. Please re-input')
    }
}

checkBMI(44, 150)


/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

/// EDIT HERE
function convToUpperCase(str) {
    let separateWord = str.split(' ');

    for (let i = 0; i < separateWord.length; i++) {
        separateWord[i] = separateWord[i].replace(separateWord[i].charAt(0), separateWord[i].charAt(0).toUpperCase());
    }

    console.log(separateWord.join(' '));
}

convToUpperCase('hello bandung')

/// Soal - 04
/// Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR

/// Spesifikasi
/// - apabila inputan berupa kata yang dipisah, maka kembalikan "kata tidak boleh dipisah"
/// - apabila inputan tidak memiliki karakter yang tidak kembar, maka kembalikan string kosong ""
/// - apabila ditemukan lebih dari 0 karakter yang tidak sama, maka kembalikan karakter pertama yang tidak sama

/// Parameter
/// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)

/// Result Value
/// (String) huruf yang pertama kali tidak ada kembarannya

/// EDIT HERE
let flag = 0;

function firstNonRepeatedChar(str) {
    let lengthString = str.split(' ');

    if (lengthString.length > 1) {
        console.log("Kata tidak boleh dipisah.")
    } else {
        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
                console.log(char);
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            console.log('" "')
        }

    }

}

firstNonRepeatedChar('ammann');