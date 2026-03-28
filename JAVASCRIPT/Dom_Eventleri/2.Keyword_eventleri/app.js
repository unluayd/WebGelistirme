// EGITIM-TR: Dom Eventleri — '2.Keyword_eventleri' konusu örnek JavaScript betiği.

// Klavye olayları (klasör adı "Keyword" olarak geçer): tuşa basma, bırakma vb.
// Örnek: formda Enter ile gönderim veya başlık alanında anlık önizleme.

const header =document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

// todoInput.addEventListener("keypress", chanceText);

// function chanceText(e) {
//   header.textContent = `Keypress Event: ${e.key}`;
//   console.log(e.key); // basılan tuşun değerini verir.
// }

// todoInput.addEventListener("keydown", chanceText);

// function chanceText(e) {
//   header.textContent = `Keydown Event: ${e.key}`;
// }

todoInput.addEventListener("keyup", chanceText);

function chanceText(e) {
  header.textContent = `Keyup Event: ${e.key}`;
}


// Keypress
// document.addEventListener("keypress", run);

// function run(e) {
//   console.log("Keypress event tetiklendi.");
//   console.log(e.key); // basılan tuşun değerini verir.
//   console.log(e.code); // basılan tuşun kodunu verir.
//   console.log(e.which); // basılan tuşun ASCII değerini verir. (deprecated)
// }


// Keydown

// document.addEventListener("keydown", run);

// function run(e) {
//   console.log("Keydown event tetiklendi.");
//   console.log(e.key); // basılan tuşun değerini verir.
//   console.log(e.code); // basılan tuşun kodunu verir.
//   console.log(e.which); // basılan tuşun ASCII değerini verir. (deprecated)
// }

// Keyup

// document.addEventListener("keyup", run);

// function run(e) {
//   console.log("Keyup event tetiklendi.");
//   console.log(e.key); // basılan tuşun değerini verir.
//   console.log(e.code); // basılan tuşun kodunu verir.
//   console.log(e.which); // basılan tuşun ASCII değerini verir. (deprecated)
// }


