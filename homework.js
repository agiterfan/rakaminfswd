// Buat array dengan jumlah index 100

const randomNumber = [];
for (let i = 0; i < 100; i++){
    randomNumber.push(Math.floor(Math.random() * 50) + 1);
}

console.log(randomNumber)
console.log("\nPanjang dari array bilangan adalah " + randomNumber.length + "\n")

// Pecah menjadi 2 array berdasarkan index ganjil ataupun index genap

const indexEven = [];
const indexOdd = [];
for (let i = 0; i < randomNumber.length; i++){
    if ((i+2)%2==0) {
        indexEven.push(randomNumber[i]);
    } else {
        indexOdd.push(randomNumber[i]);
    }
}

console.log(indexEven)
console.log(indexOdd)

// Mencari perhitungan min, max, total, dan rata-rata
// Array index genap

// Nilai minimum dan maksimum dari array index genap
let maxEven = indexEven[0], minEven = indexEven[0];

for (let i = 0; i < indexEven.length; i++){
    if (indexEven[i] > maxEven){
        maxEven = indexEven[i];
    } else if (indexEven[i] < minEven) {
        minEven = indexEven[i];
    }
}

console.log("\nNilai maksimal dari array index genap adalah = "+maxEven)
console.log("\nNilai minimal dari array index genap adalah = "+minEven)

// Total array index genap
let totalEven = 0;

for (let i = 0; i < indexEven.length; i++){
    const totEven = indexEven[i];
    totalEven += totEven;
}

console.log("\nJumlah dari perhitungan total array index genap adalah = " + totalEven + "\n")

// Rata-rata dari array index genap
let averageEven = 0;

for (let i = 0; i < indexEven.length; i++) {
    averageEven = totalEven / indexEven.length
}

console.log("Rata-rata dari array index genap adalah = " +averageEven+ "\n")

// Mencari perhitungan min, max, total, dan rata-rata
// Array index ganjil

// Nilai minimum dan maksimum dari array index ganjil
let maxOdd = indexOdd[0], minOdd = indexOdd[0];

for (let i = 0; i < indexOdd.length; i++){
    if (indexOdd[i] > maxOdd){
        maxOdd = indexOdd[i];
    } else if (indexOdd[i] < minOdd) {
        minOdd = indexOdd[i];
    }
}

console.log("\nNilai maksimal dari array index ganjil adalah = "+maxOdd)
console.log("\nNilai minimal dari array index ganjil adalah = "+minOdd)

// Total array index ganjil
let totalOdd = 0;

for (let i = 0; i < indexOdd.length; i++){
    const totOdd = indexOdd[i];
    totalOdd += totOdd;
}

console.log("\nJumlah dari perhitungan total array index ganjil adalah = " + totalOdd + "\n")

// Rata-rata dari array index ganjil
let averageOdd = 0;

for (let i = 0; i < indexOdd.length; i++) {
    averageOdd = totalOdd / indexOdd.length
}

console.log("Rata-rata dari array index ganjil adalah = " +averageOdd+ "\n")

// Membandingkan hasil kedua array
// Min lebih besar dari array genap
