// EGITIM-TR: Depolama Alanlari — '2.local_storage' konusu örnek JavaScript betiği.

// // Local Storage, tarayıcıda veri depolamak için kullanılan bir web API'sidir. Veriler, anahtar-değer çiftleri şeklinde saklanır ve tarayıcı kapatılsa bile kalıcı olarak saklanır. Local Storage, genellikle kullanıcı tercihlerini, oturum bilgilerini veya diğer küçük veri parçalarını depolamak için kullanılır.

// localStorage.setItem('username', 'JohnDoe'); // Veriyi kaydetme
// localStorage.setItem('age', '30'); // Veriyi kaydetme

// localStorage.getItem('username'); // Veriyi alma, sonuç: 'JohnDoe'
// localStorage.getItem('age'); // Veriyi alma, sonuç: '30'
// localStorage.removeItem('age'); // Veriyi silme
// localStorage.clear(); // Tüm verileri temizleme

// if (localStorage.getItem('username') === null) {
//     console.log('Kullanıcı adı bulunamadı.');
// } else {
//     console.log('Kullanıcı adı: ' + localStorage.getItem('username'));
// }

// const todos = ["Todo 1", "Todo 2", "Todo 3"];
// localStorage.setItem('todos', JSON.stringify(todos)); // Diziyi JSON formatında kaydetme
// console.log('Todos: ' + JSON.parse(localStorage.getItem('todos'))); // Diziyi alma ve ekrana yazdırma


const form = document.getElementById('todo-form');
const todoInput = document.getElementById('todo');

form.addEventListener('submit', addTodo);

function addTodo(e) {
    const value = todoInput.value;
    let todos;
    // Daha önce kayıtlı dizi yoksa boş dizi ile başlat.
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(value);
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log('Todo eklendi: ' + value);

    e.preventDefault(); // Sayfanın yeniden yüklenmesini engeller.
}