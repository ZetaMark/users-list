// Создаем новый AJAX-запрос
var xhr = new XMLHttpRequest();

// Указываем адрес серверного скрипта, который вернет данные в формате JSON
xhr.open('GET', 'users.php');

// Указываем тип ответа сервера
xhr.responseType = 'json';

// Обработчик успешного завершения запроса
xhr.onload = function() {
  // Получаем данные из ответа сервера
  var data = xhr.response;
  
  // Вызываем функцию для отрисовки таблицы на основе полученных данных
  renderTable(data);
};

// Обработчик ошибки запроса
xhr.onerror = function() {
  console.log("Ошибка запроса");
};

// Отправляем запрос на сервер
xhr.send();


function renderTable(data) {
    // Get the element in which the table will be displayed
    }