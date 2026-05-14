// EGITIM-TR: Dom Eventleri — '1.Event_Objesi' konusu örnek JavaScript betiği.

// Event Listener
// const filterInput = document.getElementById("filter");

// filterInput.addEventListener("focus", function (e) {
//   console.log(e);
//   console.log(e.type); // focus eventinin türünü verir.
//   console.log(e.target); // focus eventinin hedefini verir.
//   console.log(e.target.placeholder); // focus eventinin hedefinin placeholder attribute'ünün değerini verir.
//   console.log(this); // focus eventinin hedefini verir. (this ile de erişebiliriz.)
//   // console.log("Inputa tıklandı.");
// });

const filterInput = document.getElementById("filter");
const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit", submitForm);

function submitForm(e) {
  console.log("Form gönderimi tetiklendi.");
  // Tarayıcının sayfayı yenileyerek klasik form gönderimini yapmasını engeller.
  e.preventDefault();
}