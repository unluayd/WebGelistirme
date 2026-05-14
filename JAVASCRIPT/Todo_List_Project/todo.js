// EGITIM-TR: Todo listesi projesi — uygulama mantığı bu dosyada toplanır.
// Henüz kod eklenmediyse index.html içindeki betik bağlantısını ve konsolu kontrol edin.
// Tüm elementleri seçme
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners(); // Tüm event listener'lar bu fonksiyon içinde tanımlanır.

function eventListeners() {
  // Tüm event listener'lar burada tanımlanır.
  form.addEventListener("submit", addTodo);
  document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
  secondCardBody.addEventListener("click", deleteTodo);
  filter.addEventListener("keyup", filterTodos);
  clearButton.addEventListener("click", clearAllTodos);
}

function clearAllTodos() {
  if (confirm("Tümünü silmek istediğinize emin misiniz?")) {
    // Kullanıcıya tüm todo'ları silmek istediğine dair bir onay mesajı gösterir.
    // todoList.innerHTML = ""; // Bu yöntem yavaş olabilir, bu yüzden alternatif bir yöntem kullanılır.

    while (todoList.firstElementChild != null) {
      // Todo listesinin ilk çocuğu null olmadığı sürece döner.
      todoList.removeChild(todoList.firstElementChild); // Todo listesinin ilk çocuğunu DOM'dan kaldırır.
    }
    localStorage.removeItem("todos"); // Local storage'daki tüm todo'ları kaldırır.
  }
}

function filterTodos(e) {
  const filterValue = e.target.value.toLowerCase(); // Kullanıcının girdiği filtre değerini küçük harfe çevirir.
  const listItems = document.querySelectorAll(".list-group-item"); // Tüm liste öğelerini seçer.

  listItems.forEach(function (listItem) {
    // Her bir liste öğesi üzerinde döner.
    const text = listItem.textContent.toLowerCase();
    if (text.indexOf(filterValue) === -1) {
      // Eğer liste öğesinin metni filtre değerini içermiyorsa, o öğeyi gizler.
      listItem.setAttribute("style", "display : none !important"); // Öğeyi görünür yapar.
    } else {
      listItem.setAttribute("style", "display : block"); // Öğeyi gizler.
    }
  });
}

function deleteTodo(e) {
  if (e.target.className === "fa fa-remove") {
    // Eğer tıklanan element silme ikonuna sahipse, todo'yu siler.
    e.target.parentElement.parentElement.remove(); // Silme ikonunun iki üst elementini (liste öğesi) DOM'dan kaldırır.
    deleteTodoFromStorage(e.target.parentElement.parentElement.textContent); // Silinen todo'yu local storage'dan da kaldırır.
    showAlert("success", "Todo başarıyla silindi!"); // Başarılı uyarı mesajını gösterir.
  }
}

function deleteTodoFromStorage(deletedTodo) {
  let todos = getTodosFromStorage(); // Local storage'dan mevcut todo'ları alır.
  todos.forEach(function (todo, index) {
    if (todo === deletedTodo) {
      // Eğer todo silinen todo ile eşleşiyorsa, o todo'yu listeden kaldırır.
      todos.splice(index, 1); // Eşleşen todo'yu diziden kaldırır.
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos)); // Güncellenmiş todo listesini local storage'a kaydeder.
}

function loadAllTodosToUI() {
  // Local storage'daki tüm todo'ları kullanıcı arayüzüne yükler.
  let todos = getTodosFromStorage(); // Local storage'dan mevcut todo'ları alır.
  todos.forEach(function (todo) {
    addTodoToUI(todo); // Her bir todo'yu kullanıcı arayüzüne ekler.
  });
}

function addTodo(e) {
  const newTodo = todoInput.value.trim(); // Kullanıcının girdiği değeri alır ve baştaki/sondaki boşlukları temizler.
  if (newTodo === "") {
    // Eğer kullanıcı boş bir değer girdiyse, uyarı verir ve fonksiyonu sonlandırır.

    /* <div class="alert alert-danger" role="alert">
            This is a danger alert—check it out!
          </div>*/

    showAlert("danger", "Lütfen bir todo girin!"); // Uyarı mesajını gösterir.
  } else {
    addTodoToUI(newTodo); // Yeni todo'yu kullanıcı arayüzüne ekler.
    addTodoToStorage(newTodo); // Yeni todo'yu local storage'a ekler.
    showAlert("success", "Todo başarıyla eklendi!"); // Başarılı uyarı mesajını gösterir.
  }

  console.log(newTodo); // Konsola yeni todo'yu yazdırır.
  e.preventDefault(); // Formun submit işlemi sırasında sayfanın yenilenmesini engeller.
}

function addTodoToStorage(newTodo) {
  let todos = getTodosFromStorage(); // Local storage'dan mevcut todo'ları alır.
  todos.push(newTodo); // Yeni todo'yu mevcut todo'ların listesine ekler.
  localStorage.setItem("todos", JSON.stringify(todos)); // Güncellenmiş todo listesini local storage'a kaydeder.
}

function getTodosFromStorage() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    // Eğer local storage'da "todos" anahtarı yoksa, boş bir dizi döndürür.
    todos = [];
  } else {
    // Eğer "todos" anahtarı varsa, içeriği JSON formatından JavaScript dizisine dönüştürerek döndürür.
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos; // Todo listesini döndürür.
}

function showAlert(type, message) {
  // Uyarı mesajını gösterir.
  const alertDiv = document.createElement("div"); // Yeni bir div elementi oluşturur.
  alertDiv.className = `alert alert-${type}`; // Div elementine uygun sınıfları ekler (örneğin, "alert alert-danger").
  alertDiv.role = "alert"; // Div elementinin rolünü "alert" olarak ayarlar.
  alertDiv.textContent = message; // Div elementinin içeriğini uyarı mesajıyla doldurur.

  firstCardBody.appendChild(alertDiv); // Uyarı mesajını ilk card body'nin içine ekler.

  setTimeout(function () {
    // Belirli bir süre sonra uyarı mesajını kaldırır.
    alertDiv.remove(); // Uyarı mesajını DOM'dan kaldırır.
  }, 2000); // Uyarı mesajının görünme süresi (2000 milisaniye = 2 saniye).
}

function addTodoToUI(newTodo) {
  // Yeni todo'yu kullanıcı arayüzüne ekler.
  /*<!-- <li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>

                        </li>-->*/
  const listItem = document.createElement("li"); // Yeni bir liste öğesi oluşturur.
  const link = document.createElement("a"); // Yeni bir bağlantı öğesi oluşturur.
  link.href = "#"; // Bağlantının hedefini "#" olarak ayarlar.
  link.className = "delete-item";
  link.innerHTML = "<i class = 'fa fa-remove'></i>"; // Bağlantının içeriğini silme ikonuyla doldurur.

  listItem.className = "list-group-item d-flex justify-content-between"; // Liste öğesine gerekli sınıfları ekler.
  listItem.appendChild(document.createTextNode(newTodo)); // Liste öğesine yeni todo'yu metin olarak ekler.
  listItem.appendChild(link); // Liste öğesine silme bağlantısını ekler.

  todoList.appendChild(listItem); // Yeni liste öğesini todo listesinin içine ekler.
  todoInput.value = ""; // Todo input alanını temizler.
}
