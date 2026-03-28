// EGITIM-TR: Dom Manipilasyonu — '4.element_ozellik_deg' konusu örnek JavaScript betiği.

// Seçilen düğümün mevcut özellik ve içeriklerini okuma.
const element = document.querySelector("#clear-todos");
console.log(element);
console.log(element.id);
console.log(element.className);
console.log(element.classList);
console.log(element.classList[0]);
console.log(element.classList[1]);
console.log(element.classList[2]);
console.log(element.classList.length);
console.log(element.innerHTML);
console.log(element.textContent);
console.log(element.innerText);

// --- Element özelliklerini ve satır içi stili değiştirme ---
element.className = "btn btn-primary";
element.id = "clear-todos-2";
element.textContent = "Clear Todos 2";
element.innerHTML = "<span style='color:yellow'>Clear Todos 2</span>";
element.style.marginTop = "50px";
element.style.color = "red";
element.style.fontSize = "30px";
element.style.display = "block";
element.style.width = "200px";
element.style.height = "50px";
element.style.lineHeight = "50px";
element.style.textAlign = "center";
element.style.borderRadius = "5px";
element.style.textDecoration = "none";
element.style.fontWeight = "bold";
element.style.transition = "all 0.3s ease";
element.style.cursor = "pointer";
element.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
element.style.backgroundColor = "#007bff";
element.style.border = "none";
element.style.outline = "none";
element.style.userSelect = "none";
element.style.transform = "scale(1)";
// Fare üzerine gelince hafif büyütme (hover efekti).
element.addEventListener("mouseover", function () {
  element.style.transform = "scale(1.1)";
});
element.addEventListener("mouseout", function () {
  element.style.transform = "scale(1)";
});

// Liste öğelerine toplu stil uygulama.
const elements = document.querySelectorAll(".list-group-item");
elements.forEach(function (item) {
  item.style.color = "blue";
  item.style.fontSize = "20px";
  item.style.fontWeight = "bold";
  item.style.textDecoration = "underline";
});

const element2 = document.querySelector("li:first-child");
element2.style.color = "green";
element2.style.fontSize = "25px";
element2.style.fontWeight = "bold";
element2.style.textDecoration = "line-through";

const element3 = document.querySelector("li:last-child");
element3.style.color = "red";
element3.style.fontSize = "25px";
element3.style.fontWeight = "bold";
element3.style.textDecoration = "line-through";

const element4 = document.querySelector("li:nth-child(2)");
element4.style.color = "orange";
element4.style.fontSize = "25px";
element4.style.fontWeight = "bold";
element4.style.textDecoration = "line-through";
