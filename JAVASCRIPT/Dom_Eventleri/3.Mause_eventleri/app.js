// EGITIM-TR: Dom Eventleri — '3.Mause_eventleri' konusu örnek JavaScript betiği.

// Fare (mouse) olayları — klasör adında "Mause" yazımı kullanılmıştır.

const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

// Click Evevnt

// title.addEventListener("click", run);

// function run(e) {
//   console.log("Click event tetiklendi.");
//   console.log(e.type); // tetiklenen olayın türünü verir.
// }

// Double Click Event

// title.addEventListener("dblclick", run);

// function run(e) {
//   console.log("Double Click event tetiklendi.");
//   console.log(e.type); // tetiklenen olayın türünü verir.
// }

// Mouse Down Event

// title.addEventListener("mousedown", run);

// function run(e) {
//   console.log("Mouse Down event tetiklendi.");
//   console.log(e.type); // tetiklenen olayın türünü verir.
// }

// Mouse Up Event

// title.addEventListener("mouseup", run);

// function run(e) {
//   console.log("Mouse Up event tetiklendi.");
//   console.log(e.type); // tetiklenen olayın türünü verir.
// }

// Mouse Over Event

// cardBody.addEventListener("mouseover", run);

// function run(e) {
//   console.log("Mouse Over event tetiklendi.");
//   console.log(e.type); // tetiklenen olayın türünü verir.
// }

// Mouse Out Event

cardBody.addEventListener("mouseout", run);

function run(e) {
  console.log("Mouse Out event tetiklendi.");
  console.log(e.type); // tetiklenen olayın türünü verir.
}