// For in döngüsü, bir nesnenin özelliklerini dolaşmak için kullanılır.

const person = {
  name: "Ali",
  age: 30,
  city: "Istanbul",
};

for (let key in person) {
  console.log(key); // name, age, city
  console.log(person[key]); // Ali, 30, Istanbul
}

// For of döngüsü, bir iterable nesnenin elemanlarını dolaşmak için kullanılır.

const numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
  console.log(number); // 1, 2, 3, 4, 5
}

const str = "Hello";

for (let char of str) {
  console.log(char); // H, e, l, l, o
}

// For of döngüsü, Map ve Set gibi iterable nesnelerde de kullanılabilir.

const myMap = new Map();
myMap.set("a", 1);
myMap.set("b", 2);
myMap.set("c", 3);

for (let [key, value] of myMap) {
  console.log(key, value); // a 1, b 2, c 3
}

const mySet = new Set([1, 2, 3]);

for (let value of mySet) {
  console.log(value); // 1, 2, 3
}

// For in döngüsü, dizilerde de kullanılabilir ancak dizinin indekslerini döndürür.

const arr = ["a", "b", "c"];

for (let index in arr) {
  console.log(index); // 0, 1, 2
  console.log(arr[index]); // a, b, c
}

// For of döngüsü ise dizinin elemanlarını döndürür.

for (let element of arr) {
  console.log(element); // a, b, c
}
