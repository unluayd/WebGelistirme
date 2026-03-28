// EGITIM-TR: JavaScript dil temelleri — '9.kosul_durumlari' konusu örnek JavaScript betiği.

// if / else if / else, tek satır if-else, üçlü operatör ve switch örnekleri.

const number = 120;

if (number === 120) {
    console.log("Sayı 120'e eşittir.");
} else if (number > 120) {
    console.log("Sayı 120'den büyüktür.");
} else {
    console.log("Sayı 120'den küçüktür.");
}

if (number === 120) console.log("Sayı 120'ye eşittir.");
else console.log("Sayı 120'ye eşit değildir.");

console.log(number===120 ? "Sayı 120'ye eşittir." : "Sayı 120'ye eşit değildir.");

const process = 4;

switch (process) {
    case 1:
        console.log("İşlem 1");
        break;
    case 2:
        console.log("İşlem 2");
        break;
    case 3:
        console.log("İşlem 3");
        break;
    default:
        console.log("Geçersiz işlem");
}