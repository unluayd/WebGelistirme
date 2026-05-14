// EGITIM-TR: Dom Manipilasyonu — '5.dom_elem_gezinme' konusu örnek JavaScript betiği.

let value;

// CSS seçicisi ile liste kapsayıcısını seçme.
const todolist = document.querySelector(".list-group");
console.log(todolist);

// İlk liste öğesini seçme.
const todo = document.querySelector(".list-group-item");
console.log(todo);

// nth-child ile belirli sıradaki öğeyi seçme.
const todo2 = document.querySelector(".list-group-item:nth-child(2)");
console.log(todo2);

const cardrow = document.querySelector(".card.row");
console.log(cardrow);

const card = document.querySelector(".card");
console.log(card);

const cardbody = document.querySelector(".card-body");
console.log(cardbody);

// childNodes: metin düğümleri ve yorumlar dahil tüm çocuk düğümler.
value = todolist.childNodes;
console.log(value);

// children: yalnızca element tipindeki çocuklar.
value = todolist.children;
console.log(value);

value = todolist.children[0];
console.log(value);

value = todolist.children[1];
console.log(value);

// parentElement: bir üstteki HTML elementi.
value = todo.parentElement;
console.log(value);

// previousElementSibling / nextElementSibling: önceki ve sonraki kardeş element.
value = todo2.previousElementSibling;
console.log(value);

value = todo2.nextElementSibling;
console.log(value);
