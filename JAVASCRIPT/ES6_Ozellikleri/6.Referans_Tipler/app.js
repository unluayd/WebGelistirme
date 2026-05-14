//Referanstipler: Array, Object, Function, Date, RegExp, String, Number, Boolean

//Primitif tipler: String, Number, Boolean, Null, Undefined, Symbol
//Primitif tipler, bellekte doğrudan değeri saklayan veri tipleridir.
//Bu veri tiplerine erişim, değerin kendisi üzerinden sağlanır.
//Primitif tipler, kopyalandıklarında yeni bir bellek alanı oluştururlar, bu nedenle her değişken kendi değerini saklar ve birbirlerini etkilemezler.

let str1 = "Hello";
let str2 = str1; // str2, str1'in değerini kopyalar

str2 = "World"; // str2'ye yeni bir değer atanır

console.log(str1); // Hello - str1 etkilenmez
console.log(str2); // World - str2 yeni değere sahiptir

//Primitif tiplerde karşılaştırma yaparken, değerlerin kendisi karşılaştırılır.
// Bu nedenle, iki farklı primitif tip değişkeni, aynı içeriğe sahip olsalar bile, farklı değişkenler oldukları için eşit olarak değerlendirilmezler.

let num1 = 10;
let num2 = 10;

console.log(num1 === num2); // true - num1 ve num2 aynı değere sahiptir

//Primitif tiplerde, bir değişkene yeni bir değer atandığında, o değişkenin değeri yeni bir bellek alanına kopyalanır.
// Eski değer hala eski bellek alanında saklanır, ancak artık o değişken tarafından erişilemez hale gelir.

let bool1 = true;
bool1 = false; // bool1'e yeni bir değer atanır

console.log(bool1); // false - bool1 artık yeni değere sahiptir

// Referans tipler, bellekte bir adrese sahip olan veri tipleridir.
// Bu veri tiplerine erişim, bellek adresi üzerinden sağlanır.
// Referans tipler, değer tiplerinden farklı olarak, kopyalandıklarında yeni bir bellek alanı oluşturmazlar, sadece referansları kopyalanır.
// Bu nedenle, referans tiplerde yapılan değişiklikler, aynı referansı paylaşan tüm değişkenleri etkiler.

const arr1 = [1, 2, 3];
const arr2 = arr1; // arr2, arr1'in referansını alır

arr2.push(4); // arr2'ye 4 eklenir

console.log(arr1); // [1, 2, 3, 4] - arr1 de etkilenir
console.log(arr2); // [1, 2, 3, 4]

// Referans tiplerde karşılaştırma yaparken, değerlerin kendisi değil, referansları karşılaştırılır.
// Bu nedenle, iki farklı referans tip değişkeni, aynı içeriğe sahip olsalar bile, farklı referanslara sahip oldukları için eşit olarak değerlendirilmezler.

const obj1 = { name: "Ali" };
const obj2 = { name: "Ali" };

console.log(obj1 === obj2); // false - obj1 ve obj2 farklı referanslara sahiptir

// Referans tiplerde, bir değişkene yeni bir değer atandığında, o değişkenin referansı yeni bir bellek alanına yönlendirilir.
// Eski referans hala eski değere işaret eder, ancak artık o değişken tarafından erişilemez hale gelir.

let obj3 = { name: "Veli" };
obj3 = { name: "Ahmet" }; // obj3'ün referansı yeni bir nesneye yönlendirilir

console.log(obj3); // { name: "Ahmet" } - obj3 artık yeni nesneye işaret eder
