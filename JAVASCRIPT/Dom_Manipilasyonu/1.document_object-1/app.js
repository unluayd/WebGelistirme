// EGITIM-TR: Dom Manipilasyonu — '1.document_object-1' konusu örnek JavaScript betiği.

// document: tarayıcıda yüklü HTML belgesinin kök arayüzü (DOM giriş noktası).
let value;
value = document;
value = document.all;
value = document.all.length;
value = document.all[0];
value = document.head;
value = document.body;
value = document.URL;
value = document.characterSet;
value = document.contentType;
value = document.location;
value = document.location.hostname;
value = document.location.port;
value = document.location.href;
value = document.location.search;
value = document.location.hash;

// Yukarıdaki atamalardan sonuncusunun değeri konsolda görüntülenir.
console.log(value);

// document.all koleksiyonunu diziye çevirip her düğümü tek tek yazdırma.
const collection = Array.from(document.all);
collection.forEach(function (item) {
  console.log(item);
});
