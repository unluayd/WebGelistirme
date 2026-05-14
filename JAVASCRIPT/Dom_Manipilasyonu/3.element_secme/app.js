// EGITIM-TR: Dom Manipilasyonu — '3.element_secme' konusu örnek JavaScript betiği.

// Elementi Id ye göre seçme
let element;
element = document.getElementById("todo-form");
console.log(element);

element = document.getElementById("tasks-title");
console.log(element);

// Elementi Class a göre seçme
element = document.getElementsByClassName("list-group-item");
console.log(element);
console.log(element[0]);
console.log(element[1]);
console.log(element[2]);
console.log(element[3]);

// Elementi Tag e göre seçme
element = document.getElementsByTagName("li");
console.log(element);
console.log(element[0]);
console.log(element[1]);
console.log(element[2]);
console.log(element[3]);

// querySelector: CSS seçicisi ile eşleşen ilk tek elementi döndürür.
element = document.querySelector("#todo-form");
console.log(element);

element = document.querySelector(".list-group-item");
console.log(element);

element = document.querySelector("li");
console.log(element);

// querySelectorAll: eşleşen tüm elementleri statik NodeList olarak döndürür.
element = document.querySelectorAll(".list-group-item");
console.log(element);
console.log(element[0]);
console.log(element[1]);
console.log(element[2]);
console.log(element[3]);
