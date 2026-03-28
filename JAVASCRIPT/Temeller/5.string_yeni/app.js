// EGITIM-TR: JavaScript dil temelleri — '5.string_yeni' konusu örnek JavaScript betiği.

const name = "Ahmet";
const surname = "Yılmaz";
const age = 30;

const message = "Merhaba, benim adım " + name + " " + surname + " ve ben " + age + " yaşındayım.";
console.log(message);

// Template Literals (Şablon Dizeleri)
const message2 = `Merhaba, benim adım ${name} ${surname} ve ben ${age} yaşındayım.`;
console.log(message2);

/* const html = "<ul>" +
             "<li>" + name + "</li>" +
             "<li>" + surname + "</li>" +
             "<li>" + age + "</li>" +
             "</ul>";

document.body.innerHTML = html; */

const html = `<ul>
                <li>${name}</li>
                <li>${surname}</li>
                <li>${age}</li>
              </ul>`;
// Üretilen HTML'i sayfa gövdesine yazar (eğitim ortamında; kullanıcı girdisiyle birleştirmek XSS riski doğurur).
document.body.innerHTML = html;


