//Sets

const myset = new Set();

myset.add(1);
myset.add(2);
myset.add(3);
myset.add(2); // Setler benzersiz değerler içerir, bu nedenle 2 eklenmez.

console.log(myset); // Set { 1, 2, 3 }

console.log(myset.has(2)); // true
console.log(myset.has(4)); // false

myset.delete(2);
console.log(myset); // Set { 1, 3 }

myset.clear();
console.log(myset); // Set {}

// Setler üzerinde for of döngüsü ile dolaşma

const myset2 = new Set([1, 2, 3]);

for (let value of myset2) {
  console.log(value); // 1, 2, 3
}

// Setler üzerinde forEach ile dolaşma

myset2.forEach((value) => {
  console.log(value); // 1, 2, 3
});

// Setler üzerinde Array.from ile dolaşma

const myset3 = new Set([4, 5, 6]);
const myArray = Array.from(myset3);

console.log(myArray); // [4, 5, 6]

// Setler üzerinde spread operatoru ile dolaşma

const myset4 = new Set([7, 8, 9]);
const newArray = [...myset4];

console.log(newArray); // [7, 8, 9]

// Setler, dizilerdeki gibi indekslere sahip olmadıkları için, elemanlara doğrudan erişim mümkün değildir. Ancak, Setler benzersiz değerler içerdiği için, belirli bir değerin var olup olmadığını kontrol etmek için has() metodunu kullanabilirsiniz.

const myset5 = new Set([10, 11, 12]);

console.log(myset5.has(11)); // true
console.log(myset5.has(13)); // false

// Setler, dizilerdeki gibi sıralı olmadıkları için, elemanların sırasını garanti etmezler. Ancak, eklenen elemanların sırasını korurlar.

const myset6 = new Set();
myset6.add("a");
myset6.add("b");
myset6.add("c");

console.log(myset6); // Set { 'a', 'b', 'c' }

//Setlerden array oluşturma

const myset7 = new Set([13, 14, 15]);
const arrayFromSet = Array.from(myset7);

console.log(arrayFromSet); // [13, 14, 15]

//Setlerden array oluşturma spread operatoru ile

const myset8 = new Set([16, 17, 18]);
const arrayFromSet2 = [...myset8];

console.log(arrayFromSet2); // [16, 17, 18]
