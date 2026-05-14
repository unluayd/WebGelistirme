// EGITIM-TR: Dom Manipilasyonu — '8.dinamik_element_deg' konusu örnek JavaScript betiği.

// Eski bir alt düğümü yeni oluşturulan düğümle değiştirme (replaceChild).

const cardbady = document.querySelectorAll(".card-body")[1];

const newElement = document.createElement("h3");
newElement.className = "card-title";
newElement.id = "task-title";
newElement.textContent = "Yeni Başlık";

// Eski element
const oldElement = document.querySelector("#tasks-title");

// Yeni element ile eski elementi değiştir
cardbady.replaceChild(newElement, oldElement);
console.log(newElement);