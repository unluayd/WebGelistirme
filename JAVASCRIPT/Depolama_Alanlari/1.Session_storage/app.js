// EGITIM-TR: Depolama Alanlari — '1.Session_storage' konusu örnek JavaScript betiği.

// Session Storage, tarayıcı sekmesi kapatıldığında verilerin silindiği bir depolama alanıdır. Veriler, kullanıcı tarafından manuel olarak temizlenmediği sürece tarayıcı sekmesi açık kaldığı sürece saklanır.

const add = document.getElementById("add");
const del = document.getElementById("delete");
const clear = document.getElementById("clear");

// Verileri ekleme
const addKey = document.getElementById("addkey");
const addValue = document.getElementById("addvalue");
const deleteKey = document.getElementById("deletekey");

add.addEventListener("click", addItem);
del.addEventListener("click", deleteItem);
clear.addEventListener("click", clearItems);

function addItem() {
  // Anahtar ve değer çiftini oturum deposuna yazar.
  sessionStorage.setItem(addKey.value, addValue.value);
}

function deleteItem() {
  // Belirtilen anahtarı oturum deposundan siler.
  sessionStorage.removeItem(deleteKey.value);
}

function clearItems() {
  // Oturum deposundaki tüm anahtarları temizler.
  sessionStorage.clear();
}

// function getItems() {
//   const keys = Object.keys(sessionStorage);
//   const list = document.getElementById("list");
//   list.innerHTML = "";
//   keys.forEach((key) => {
//     const value = sessionStorage.getItem(key);
//     const li = document.createElement("li");
//     li.textContent = `${key}: ${value}`;
//     list.appendChild(li);
//   });
// }

// getItems();