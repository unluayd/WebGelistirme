// EGITIM-TR: JavaScript dil temelleri — '2.var-let-const' konusu örnek JavaScript betiği.

// var aynı isimle yeniden tanımlanabilir; son atama geçerlidir.
var a = 10;
console.log(a);
var a = 20;
console.log(a);

// let ile aynı blokta ikinci kez let a = ... yazılamaz (yorum satırındaki örnek hata verirdi).
let b = 30;
// let b=40; // Hata verir, let ile tanımlanan değişken yeniden tanımlanamaz.
console.log(b);

// const ile bağlanan değere yeniden atama yapılamaz (nesne içi özellikler ayrı konudur).
const c = 50;
console.log(c);
// c=60; // Hata verir, const ile tanımlanan değişkenin değeri değiştirilemez.
