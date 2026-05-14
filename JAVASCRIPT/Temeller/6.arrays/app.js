// EGITIM-TR: JavaScript dil temelleri — '6.arrays' konusu örnek JavaScript betiği.

let value;

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

console.log(numbers[0]); // 1
console.log(numbers[2]); // 3

numbers.push(6); // Diziye yeni bir eleman ekler
console.log(numbers);

numbers.pop(); // Dizinin son elemanını çıkarır
console.log(numbers);

numbers.unshift(0); // Dizinin başına yeni bir eleman ekler
console.log(numbers);

numbers.shift(); // Dizinin ilk elemanını çıkarır
console.log(numbers);

numbers.splice(2, 1); // Dizinin 2. indeksinden başlayarak 1 eleman çıkarır
console.log(numbers);

const numbers2 = new Array(6, 7, 8, 9, 10);
console.log(numbers2);

const langs = ["Python", "JavaScript", "Java", "C++"];
console.log(langs);

const mixed = [1, "Hello", true, null, undefined, { name: "John" }, [1, 2, 3]];
console.log(mixed);