// EGITIM-TR: Dom Manipilasyonu — '9.dinamik_element_man' konusu örnek JavaScript betiği.

// Event Bubbling (Olay Kabarcıklanması)

// document.querySelector(".container").addEventListener("click", function (e) {
//   console.log("Container");
// });

// document.querySelector(".card-row").addEventListener("click", function (e) {
//   console.log("Card Row");
// });

// document.querySelectorAll(".card-body")[1].addEventListener("click", function (e) {
//   console.log("Card Body");
// });

// Olay yakalama (capture) fazı: üçüncü parametre true iken olay önce üst dinleyicide işlenir.
document.querySelectorAll(".card-body")[1].addEventListener(
  "click",
  function (e) {
    if (e.target.className === "fa fa-remove") {
      console.log("Silme simgesine tıklandı.");
    }
    else {
      console.log("Kart gövdesi alanına tıklandı.");
    }
    // Olayın doğrudan tetiklendiği DOM düğümü.
    console.log(e.target);
  },
  true
);