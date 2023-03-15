
// Додати обробник подій натискання на кнопку
$('.call-modal-delete-user').on('click', function(event) {
    // Отримати значення id 
    const clickedDeleteButton = $(event.target);
    let id = [clickedDeleteButton.attr('data-id')];
    console.log(id);

    $("#delete-id").val(JSON.stringify(id));

    // Надіслати дані на сервер

});

// Додати обробник подій натискання на кнопку
$('.confirm-delete-user').on('click', function() {
    // Отримати значення id     
    var id = JSON.parse($('#delete-id').val());
    console.log("Всё окей")
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

$('#confirm-delete-modal').modal('hide');
});







