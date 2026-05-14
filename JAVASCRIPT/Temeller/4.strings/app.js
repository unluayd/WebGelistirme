// EGITIM-TR: JavaScript dil temelleri — '4.strings' konusu örnek JavaScript betiği.

// Dizgeler: birleştirme, şablon dizge, concat, karakter erişimi ve yardımcı metotlar.

let value;
const firstName = "John";
const lastName = "Doe";
const fullName = firstName + " " + lastName;
console.log(fullName);

// Şablon dizge (backtick): ${} ile ifade gömme.
const message = `Hello, ${firstName} ${lastName}!`;
console.log(message);

const multiLineString = `This is a multi-line 
string example.`;
console.log(multiLineString);

value = firstName.concat(" ", lastName);
console.log(value);

value = firstName[2];
console.log(value);

value = firstName.length;
console.log(value);

value = firstName.toUpperCase();
console.log(value);

value = firstName.indexOf("o");
console.log(value);