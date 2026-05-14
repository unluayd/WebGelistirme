// Destructing

let number1, number2, number3;

// Eski yöntem
number1 = 10;
number2 = 20;
number3 = 30;

console.log(number1, number2, number3);

// Destructing yöntemi
let [num1, num2, num3] = [10, 20, 30];
console.log(num1, num2, num3);

// Destructing ile değişkenlerin yer değiştirmesi
let a = 5;
let b = 10;

console.log("Değiştirilmeden önce: ", a, b);

// Eski yöntem
let temp = a;
a = b;
b = temp;

console.log("Eski yöntemle değiştirdikten sonra: ", a, b);

// Destructing yöntemi
[a, b] = [b, a];

console.log("Destructing yöntemiyle değiştirdikten sonra: ", a, b);

// Array Destructing

const numbers = [1, 2, 3, 4, 5];

// Eski yöntem
const first = numbers[0];
const second = numbers[1];
const third = numbers[2];

console.log(first, second, third);

// Destructing yöntemi
const [firstNum, secondNum, thirdNum] = numbers;
console.log(firstNum, secondNum, thirdNum);

// Object Destructing

const person = {
  name: "Ali",
  age: 30,
  city: "Istanbul",
};

// Eski yöntem
const name1 = person.name;
const age1 = person.age;
const city1 = person.city;

console.log(name1, age1, city1);

// Destructing yöntemi
const { name, age } = person;
console.log(name, age);

// Destructing ile değişken isimlerini değiştirme
const { name: personName, age: personAge, city: personCity } = person;
console.log(personName, personAge, personCity);

// Destructing ile varsayılan değerler
const { name: name2, age: age2 } = person;
console.log(name2, age2);

// Destructing ile fonksiyon parametreleri
function greet({ name, age }) {
  console.log(`Merhaba ${name}, yaşınız ${age}`);
}

greet(person);

// Destructing ile nested object
const user = {
  name: "Veli",
  address: {
    city: "Ankara",
    country: "Turkey",
  },
};

const {
  name: userName,
  address: { city, country },
} = user;

console.log(userName, city, country);

// Function Destructing

const getLangs = () => ["JavaScript", "Python", "Java"];

const [lang1, lang2, lang3] = getLangs();
console.log(lang1, lang2, lang3);

function getUser() {
  return {
    name: "Ayşe",
    age: 25,
  };
}

const { name: userName1, age: userAge1 } = getUser();
console.log(userName1, userAge1);

const { name: userName2, age: userAge2 } = getUser();
console.log(userName2, userAge2);

// Destructing ile fonksiyon parametreleri

function printUser({ name, age }) {
  console.log(`Kullanıcı adı: ${name}, Yaş: ${age}`);
}

printUser(getUser());

// Destructing ile array elemanlarına erişim

const colors = ["red", "green", "blue"];

const [color1, color2] = colors;
console.log(color1, color2);

// Destructing ile nested array

const nestedArray = [1, [2, 3], 4];

const [numA, [numB, numC], numD] = nestedArray;
console.log(numA, numB, numC, numD);

// Destructing ile fonksiyon dönüş değerlerini alma

function getCoordinates() {
  return [10, 20];
}

const [x, y] = getCoordinates();
console.log(x, y);

// Destructing ile obje parametrelerine varsayılan değerler verme

function printUserInfo({ name = "Bilinmiyor", age = 0 }) {
  console.log(`Kullanıcı adı: ${name}, Yaş: ${age}`);
}

printUserInfo({ name: "Mehmet" }); // Kullanıcı adı: Mehmet, Yaş: 0
printUserInfo({ age: 40 }); // Kullanıcı adı: Bilinmiyor, Yaş: 40
printUserInfo({}); // Kullanıcı adı: Bilinmiyor, Yaş: 0

// Destructing ile array elemanlarına varsayılan değerler verme

const [colorA = "red", colorB = "green", colorC = "blue"] = ["yellow"];
console.log(colorA, colorB, colorC); // yellow green blue
