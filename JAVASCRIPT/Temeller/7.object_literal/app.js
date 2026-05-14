// EGITIM-TR: JavaScript dil temelleri — '7.object_literal' konusu örnek JavaScript betiği.

let person;
const programmer = {
    name: "John",
    surname: "Doe",
    age: 30,
    languages: ["JavaScript", "Python", "C++"],
    address: {
        city: "New York",
        country: "USA"
    },
    // Metot: nesne üzerinden çağrıldığında this, o nesneyi işaret eder.
    greet: function() {
        console.log(`Hello, my name is ${this.name} ${this.surname} and I am ${this.age} years old.`);
    }
};

person = programmer;
console.log(person);
console.log(person.name);
console.log(person.languages[0]);
console.log(person.address.city);
person.greet();