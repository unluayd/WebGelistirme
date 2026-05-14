// EGITIM-TR: Dom Eventleri — '5.Event_bubbling' konusu örnek JavaScript betiği.

// Bu örnek, aynı sayfada filter alanı üzerinden çeşitli giriş olaylarını dinler.
// Kabarcıklanmayı göstermek için üst kapsayıcılara ayrıca click dinleyicisi eklenebilir.

const filter = document.getElementById("filter");

filter.addEventListener("focus", run);
filter.addEventListener("blur", run);
filter.addEventListener("cut", run);
filter.addEventListener("copy", run);
filter.addEventListener("paste", run);
filter.addEventListener("select", run);
filter.addEventListener("input", run);

function run(e) {
  // Tetiklenen olayın adını (ör. "input", "focus") konsola yazar.
  console.log(e.type);
}
