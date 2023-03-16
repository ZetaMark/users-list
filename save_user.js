// Додати обробник подій натискання на кнопку
$('.save-user').click(function() {
    // Получить значения из формы
    var id = $('#modal-id').val();
    var firstName = $('#first-name').val();
    var lastName = $('#last-name').val();
    var status = $('#switch').prop('checked');
    var role = $('#select-role').val();

    // Надіслати дані на сервер
$.ajax({
    type: "POST", // Використати метод POST для надсилання даних
    url: "saveData.php", // Вказати шлях до файлу PHP, який оброблятиме дані
    data: { // Надіслати дані у форматі JSON
        id: id,
        firstName: firstName,
        lastName: lastName,
        status: status,
        role: role
    },
    success: function(response) { // Обробник успішної відповіді від сервера
        console.log("add_user.js success: " + response); // Вивести відповідь сервера в консоль

        // Очистити поля форми
        $('#modal-id').val('');
        $('#first-name').val('');
        $('#last-name').val('');
        $('#switch').prop('checked', false);
        $('#select-role').val('Admin');
    },
});
    $("#user-form-modal").modal("hide");
});



