//Constructor, nesne oluşturmak için kullanılan bir fonksiyondur. Constructor fonksiyonları, genellikle büyük harfle başlar ve new anahtar kelimesi ile çağrılır. 
// Constructor fonksiyonları, nesne oluştururken kullanılacak özellikleri ve metodları tanımlamak için kullanılır.

function Person(name, age) {
  this.name = name; // this, oluşturulan nesneyi referans alır ve name özelliğini tanımlar.
  this.age = age; // this, oluşturulan nesneyi referans alır ve age özelliğini tanımlar.
  this.greet = function () {
    console.log(`Merhaba, benim adım ${this.name} ve ben ${this.age} yaşındayım.`);
  }; // this, oluşturulan nesneyi referans alır ve greet metodunu tanımlar.
}

const person1 = new Person("Ali", 30); // new anahtar kelimesi ile Person constructor'ını çağırarak person1 nesnesini oluşturur.
const person2 = new Person("Veli", 25); // new anahtar kelimesi ile Person constructor'ını çağırarak person2 nesnesini oluşturur.

console.log(person1.name); // Ali
console.log(person1.age); // 30
person1.greet(); // Merhaba, benim adım Ali ve ben 30 yaşındayım.

console.log(person2.name); // Veli
console.log(person2.age); // 25
person2.greet(); // Merhaba, benim adım Veli ve ben 25 yaşındayım.

// Constructor fonksiyonları, nesne oluşturmak için kullanılırken, aynı zamanda prototip tabanlı kalıtım için de kullanılabilir. 
// Constructor fonksiyonlarının prototipine metodlar ekleyerek, tüm nesnelerin bu metodlara erişmesini sağlayabiliriz.

Person.prototype.sayHello = function () {
  console.log(`Merhaba, ben ${this.name}`);
}; // Person constructor'ının prototipine sayHello metodunu ekler.

person1.sayHello(); // Merhaba, ben Ali
person2.sayHello(); // Merhaba, ben Veli

// Constructor fonksiyonları, nesne oluşturmak için kullanılırken, aynı zamanda kalıtım için de kullanılabilir. 
// Bir constructor fonksiyonunu başka bir constructor fonksiyonunun prototipine atayarak, kalıtım ilişkisi oluşturabiliriz.

function Employee(name, age, salary) {
  Person.call(this, name, age); // Person constructor'ını Employee constructor'ının içinde çağırarak, name ve age özelliklerini tanımlar.
  this.salary = salary; // this, oluşturulan nesneyi referans alır ve salary özelliğini tanımlar.
}

Employee.prototype = Object.create(Person.prototype); // Employee constructor'ının prototipini Person constructor'ının prototipine atar.
Employee.prototype.constructor = Employee; // Employee constructor'ının prototipinin constructor özelliğini Employee olarak ayarlar.

const employee1 = new Employee("Ahmet", 35, 5000); // new anahtar kelimesi ile Employee constructor