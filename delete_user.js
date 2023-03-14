
// Додати обробник подій натискання на кнопку
$('.delete-user').on('click', function(event) {
    // Отримати значення id 
    const clickedDeleteButton = $(event.target);
    let id = clickedDeleteButton.attr('data-id');
    // Надіслати дані на сервер
$.ajax({
    type: "POST", // Використати метод POST для надсилання даних
    url: "deleteUser.php", // Вказати шлях до файлу PHP, який оброблятиме дані
    data: { // Надіслати дані у форматі JSON
        id: id
    },
    success: function(response) { // Обробник успішної відповіді від сервера
        console.log(response); // Вивести відповідь сервера в консоль
    },
});
});



