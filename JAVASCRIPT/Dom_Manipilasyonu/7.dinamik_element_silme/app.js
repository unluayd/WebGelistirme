// EGITIM-TR: Dom Manipilasyonu — '7.dinamik_element_silme' konusu örnek JavaScript betiği.

// Dinamik Element Silme

const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");

console.log(todoList);
console.log(todos);

// todos[0].remove(); // İlk elemanı siler.
todoList.removeChild(todoList.children[3]); // Son elemanı siler.
// todoList.remove(); // Tüm listeyi siler.
// todoList.childNodes[1].remove(); // İlk elemanı siler.
// todoList.children[0].remove(); // İlk elemanı siler.
