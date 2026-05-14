// EGITIM-TR: JavaScript dil temelleri — '10.functions' konusu örnek JavaScript betiği.

// --- Fonksiyon bildirimi (function declaration) ---
function merhaba(name,age){
    console.log(`Merhaba ${name} yaşınız ${age}`);
}
merhaba("Ahmet", 30);

// return: fonksiyondan değer döndürür; return sonrası satırlar çalışmaz.
function square(number){
    return number * number;
    console.log("Bu kod çalışmaz çünkü return'den sonra gelir.");
}

function cube(number){
    return number * number * number;
}

console.log(square(5));
console.log(cube(square(3)));

// --- Fonksiyon ifadesi (function expression): değişkene atanmış anonim fonksiyon ---
const merhabele = function(isim){
    console.log(`Merhaba ${isim}`);
}
merhabele("Aydın");

// --- Anında çağrılan fonksiyon ifadesi (IIFE): tanımlandığı yerde bir kez çalışır ---
(function(a,b){
    console.log(a+b);
})(5,10);

// Nesne içinde metot olarak tanımlanmış fonksiyonlar.
database = {
    host: "localhost",
    add: function(){
        console.log("Eklendi");
    },
    get: function(){
        console.log("Elde edildi");
    },
    update: function(id){
        console.log(`Güncellendi ID: ${id}`);
    },
    delete: function(){
        console.log("Silindi");
    }
}

console.log(database.host);
database.add();
database.get();
database.update(123);
database.delete();