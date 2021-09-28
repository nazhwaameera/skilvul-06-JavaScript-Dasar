/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
for (let i = 0; i < 100; i++) {
    let flag = 0;

    // menandai bilangan genap
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // jika bilangan lebih dari satu dan tidak bisa dibagi oleh bilangan lain selain dirinya
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = [];
let fiftiethPrime;
let z;

/// EDIT HERE
while (primeCounter.length <= 50) {
    for (z = 0; z <= 1000; z++) {
        let flag1 = 0;

        // menandai bilangan genap
        for (let j = 2; j < z; j++) {
            if (z % j == 0) {
                flag1 = 1;
                break;
            }
        }

        // jika bilangan lebih dari satu dan tidak bisa dibagi oleh bilangan lain selain dirinya
        if (z > 1 && flag1 == 0) {
            primeCounter.push(z);
        }
    }
}
fiftiethPrime = primeCounter[50 - 1];
console.log(fiftiethPrime);

/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = [];
let fiftiethOdd;
let i;
/// EDIT HERE
do {
    for (i = 0; i < 100; i++) {
        if (i % 2) {
            oddCounter.push(i);
        }
    }
} while (oddCounter <= 50)
fiftiethOdd = oddCounter[50 - 1];
console.log(fiftiethOdd)