// Spread Operator
// Spread operatoru, bir diziyi veya nesneyi genişletmek için kullanılır.

// Array Spread Operator

const langs = ["JavaScript", "Python", "Java"];

console.log(langs[0], langs[1], langs[2]); // JavaScript Python Java

console.log(...langs); // JavaScript Python Java

const newLangs = ["C#", "C++", ...langs];

console.log(newLangs); // [ 'C#', 'C++', 'JavaScript', 'Python', 'Java' ]

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log(newNumbers); // [1, 2, 3, 4, 5]

// Object Spread Operator

const person = {
  name: "Ali",
  age: 30,
};

const newPerson = { ...person, city: "Istanbul" };

console.log(newPerson); // { name: 'Ali', age: 30, city: 'Istanbul' }

// Spread operatoru ile dizilerin birleştirilmesi

const arr1 = [1, 2];
const arr2 = [3, 4];
const combinedArr = [...arr1, ...arr2];

console.log(combinedArr); // [1, 2, 3, 4]

// Spread operatoru ile nesnelerin birleştirilmesi

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = { ...obj1, ...obj2 };

console.log(combinedObj); // { a: 1, b: 2, c: 3, d: 4 }

// Spread operatoru ile fonksiyonlara argüman geçirme

function sum(x, y, z) {
  return x + y + z;
}

const numbersToSum = [1, 2, 3];
const result = sum(...numbersToSum);

console.log(result); // 6

// Spread operatoru ile dizilerin kopyalanması

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); // [1, 2, 3]

// Spread operatoru ile nesnelerin kopyalanması

const originalObject = { name: "Ali", age: 30 };
const copiedObject = { ...originalObject };

console.log(copiedObject); // { name: 'Ali', age: 30 }

// Spread operatoru ile dizilerin ve nesnelerin birleştirilmesi

const arr3 = [4, 5];
const obj3 = { city: "Istanbul" };

const combinedArrObj = [...arr1, ...arr3, ...obj3];

console.log(combinedArrObj); // [1, 2, 4, 5, city: 'Istanbul']
