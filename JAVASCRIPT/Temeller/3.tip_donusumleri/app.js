// EGITIM-TR: JavaScript dil temelleri — '3.tip_donusumleri' konusu örnek JavaScript betiği.

// typeof ile birlikte konsola yazdırarak değerin türünü gözlemleyebilirsiniz.

let value;
// Sayıyı dizgeye çevirme (String yapıcısı).
value = String(123);
console.log(value, typeof value);

value = String(3.14);
console.log(value, typeof value);

value = (456).toString();
console.log(value, typeof value);

value = String(true);
console.log(value, typeof value);

value = String(false);
console.log(value, typeof value);

value = String(null);
console.log(value, typeof value);

value = String(undefined);
console.log(value, typeof value);

// Dizgeyi sayıya çevirme (Number, parseInt, parseFloat).
value = Number("123");
console.log(value, typeof value);

value = Number("3.14");
console.log(value, typeof value);

value = parseFloat("3.14");
console.log(value, typeof value);

value = parseInt("123");
console.log(value, typeof value);

value = Number("abc");
console.log(value, typeof value);
// Geçersiz sayısal dizgeler NaN üretir.

value = Boolean(0);
console.log(value, typeof value);

value = Boolean(1);
console.log(value, typeof value);

value = Boolean("");
console.log(value, typeof value);

value = String(function() {console.log("Hello"); });
console.log(value, typeof value);