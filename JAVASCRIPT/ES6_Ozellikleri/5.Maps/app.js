// Maps
const myMap = new Map();
myMap.set("a", 1);
myMap.set("b", 2);
myMap.set("c", 3);

console.log(myMap.get("a")); // 1
console.log(myMap.get("b")); // 2
console.log(myMap.get("c")); // 3
console.log(myMap.has("a")); // true
console.log(myMap.has("d")); // false

myMap.delete("b");
console.log(myMap.has("b")); // false

console.log(myMap.size); // 2

myMap.clear();
console.log(myMap.size); // 0

//For each ile Map üzerinde dolaşma

const myMap2 = new Map();
myMap2.set("x", 10);
myMap2.set("y", 20);
myMap2.set("z", 30);

myMap2.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// Map üzerinde for of döngüsü ile dolaşma

for (let [key, value] of myMap2) {
  console.log(`${key}: ${value}`);
}

// Map üzerinde keys, values ve entries ile dolaşma

for (let key of myMap2.keys()) {
  console.log(`Key: ${key}`);
}

for (let value of myMap2.values()) {
  console.log(`Value: ${value}`);
}

for (let [key, value] of myMap2.entries()) {
  console.log(`Key: ${key}, Value: ${value}`);
}

//Array ve Object ile Map oluşturma

const myMap3 = new Map([
  ["name", "Ali"],
  ["age", 30],
  ["city", "Istanbul"],
]);

console.log(myMap3.get("name")); // Ali
console.log(myMap3.get("age")); // 30
console.log(myMap3.get("city")); // Istanbul

const obj = { name: "Veli", age: 25, city: "Ankara" };
const myMap4 = new Map(Object.entries(obj));

console.log(myMap4.get("name")); // Veli
console.log(myMap4.get("age")); // 25
console.log(myMap4.get("city")); // Ankara

//Maplerden Array ve Object oluşturma

const myMap5 = new Map([
  ["name", "Ayşe"],
  ["age", 28],
  ["city", "Izmir"],
]);

const obj2 = Object.fromEntries(myMap5);
console.log(obj2); // { name: 'Ayşe', age: 28, city: 'Izmir' }

const arr = Array.from(myMap5);
console.log(arr); // [ ['name', 'Ayşe'], ['age', 28], ['city', 'Izmir'] ]
