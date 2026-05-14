const merhaba = function (name) {
  return `Merhaba ${name}`;
};

console.log(merhaba("Ahmet"));

// Arrow Function

const merhaba2 = (name) => {
  return `Merhaba ${name}`;
};

console.log(merhaba2("Mehmet"));

// Arrow Function tek parametre ve tek satır ise süslü parantez ve return ifadesi kullanılmaz.

const merhaba3 = (name) => `Merhaba ${name}`;

console.log(merhaba3("Ayşe"));

// Arrow Function tek parametre ise parantezler kullanılmaz.

const merhaba4 = (name) => `Merhaba ${name}`;

console.log(merhaba4("Fatma"));

// Arrow Function ile cube hesaplama

const cube = (x) => x * x * x;

console.log(cube(3)); // 27

// Arrow Function ile this kullanımı

const person = {
  name: "Ali",
  greet: function () {
    console.log(`Merhaba, benim adım ${this.name}`);
  },
};

person.greet(); // Merhaba, benim adım Ali

const person2 = {
  name: "Veli",
  greet: () => {
    console.log(`Merhaba, benim adım ${this.name}`);
  },
};

person2.greet(); // Merhaba, benim adım undefined

// Arrow function, kendi this bağlamına sahip olmadığından, this ifadesi global nesneyi (window) referans alır ve bu nedenle name özelliği undefined olur.
