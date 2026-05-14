// EGITIM-TR: Dom Manipilasyonu — '6.dinamik_element_ekleme' konusu örnek JavaScript betiği.

// Yeni bir köprü (a) elementi oluşturup kart gövdesine ekleme örneği.

const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com.tr";
newLink.target = "_blank";

// Metin düğümü oluşturup bağlantının içine yerleştirme.
newLink.appendChild(document.createTextNode("Farklı bir sayfaya git."));
// Hazırlanan elementi sayfa ağacına ekleme.
cardbody.appendChild(newLink);

console.log(newLink);
