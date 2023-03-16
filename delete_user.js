
// Додати обробник подій натискання на кнопку
$(document).on('click', '.call-modal-delete-user' , function(event) {
    // Отримати значення id 
    const clickedDeleteButton = $(event.target);
    let id = [clickedDeleteButton.attr('data-id')];
    console.log(id);

    $("#delete-id").val(JSON.stringify(id));

    // Надіслати дані на сервер

});

// Додати обробник подій натискання на кнопку

$(document).on('click', '.confirm-delete-user' , function() {
    // Отримати значення id     
    var id = JSON.parse($('#delete-id').val());
    // Надіслати дані на сервер
    for(i = 0; i < id.length; i++){  
    
        $.ajax({
            type: "POST", // Використати метод POST для надсилання даних
            url: "deleteUser.php", // Вказати шлях до файлу PHP, який оброблятиме дані
            data: { // Надіслати дані у форматі JSON
                id: id[i]
            },
            success: function(response) { // Обробник успішної відповіді від сервера
                response = JSON.parse(response);
                $('#row-' + response['id']).remove();
            },
        });
    }
$('#confirm-delete-modal').modal('hide');
});







