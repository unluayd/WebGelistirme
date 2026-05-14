// EGITIM-TR: Dom Eventleri — '4.Input_eventleri' konusu örnek JavaScript betiği.

// Input Eventleri

const filter = document.getElementById("filter");

// document.addEventListener("DOMContentLoaded", load);

// function load(e) {
//   console.log("Sayfa yüklendi.");
// }

filter.addEventListener("focus", run);
filter.addEventListener("blur", run);
filter.addEventListener("cut", run);
filter.addEventListener("copy", run);
filter.addEventListener("paste", run);
filter.addEventListener("select", run);
filter.addEventListener("input", run);

function run(e) {
  // Olay nesnesinden tetiklenen olayın adını konsola yazar.
  console.log(e.type);
}