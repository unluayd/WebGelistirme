// EGITIM-TR: JavaScript dil temelleri — '8.date_object' konusu örnek JavaScript betiği.

let value;

const now = new Date(); // Şu anki tarihi ve saati temsil eder
console.log(now);

const specificDate = new Date("2024-01-01 06:15.00"); // Belirli bir tarihi temsil eder
console.log(specificDate);

const year = now.getFullYear(); // Yılı alır
const month = now.getMonth() + 1; // Ayı alır (0-11 arası, bu yüzden 1 eklenir)
const day = now.getDate(); // Günü alır
const hours = now.getHours(); // Saatleri alır
const minutes = now.getMinutes(); // Dakikaları alır
const seconds = now.getSeconds(); // Saniyeleri alır
console.log(`Yıl: ${year}, Ay: ${month}, Gün: ${day}, Saat: ${hours}, Dakika: ${minutes}, Saniye: ${seconds}`);

const timestamp = now.getTime(); // 1 Ocak 1970'ten itibaren geçen milisaniye cinsinden zamanı alır
console.log(timestamp);

const dateString = now.toDateString(); // Tarihi okunabilir bir formata dönüştürür
console.log(dateString);
const timeString = now.toTimeString(); // Saati okunabilir bir formata dönüştürür
console.log(timeString);
const isoString = now.toISOString(); // ISO formatında tarihi ve saati döndürür
console.log(isoString);

specificDate.setFullYear(2025); // Yılı 2025 olarak değiştirir
console.log(specificDate);
specificDate.setMonth(11); // Ayı Aralık olarak değiştirir (0-11 arası, bu yüzden 11)
console.log(specificDate);
specificDate.setDate(25); // Günü 25 olarak değiştirir
console.log(specificDate);
specificDate.setHours(12); // Saatleri 12 olarak değiştirir
console.log(specificDate);
specificDate.setMinutes(30); // Dakikaları 30 olarak değiştirir
console.log(specificDate);
specificDate.setSeconds(45); // Saniyeleri 45 olarak değiştirir
console.log(specificDate);