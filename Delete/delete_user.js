
// Додати обробник подій натискання на кнопку
$(document).on('click', '.call-modal-delete-user', function (event) {
    // Отримати значення id 
    const clickedDeleteButton = $(event.target);
    let id = [clickedDeleteButton.attr('data-id')];
    console.log(id);

    var firstName = $('#name-'+ id).attr('data-first-name');
    var lastName = $('#name-'+ id).attr( 'data-last-name');
    var status = $('#status-'+id).attr('data-status') == 1 ? true : false;
    var role = $('#role-'+id).text();
    console.log(firstName, lastName, status, role)
    const rowToDelete = `[Name: ${firstName} ${lastName}, Role: '${role}', Status: ${status}]`;
    $('#confirm-delete-label').text(`Do you want to delete row: ${rowToDelete}?`);
    
    $("#delete-id").val(JSON.stringify(id));
});

// Додати обробник подій натискання на кнопку

$(document).on('click', '.confirm-delete-user', function () {
    // Отримати значення id     
    var id = JSON.parse($('#delete-id').val());
    // Надіслати дані на сервер
    for (i = 0; i < id.length; i++) {

        $.ajax({
            type: "POST", // Використати метод POST для надсилання даних
            url: "Delete/deleteUser.php", // Вказати шлях до файлу PHP, який оброблятиме дані
            data: { // Надіслати дані у форматі JSON
                id: id[i]
            },
            success: function (response) { // Обробник успішної відповіді від сервера
                response = JSON.parse(response);
                $('#row-' + response['id']).remove();
                $('#select-box').val('-Please Select-');
                console.log(response);
                if ($('.checkbox-item:checked').length === 0) {
                    $('#all-items').prop('checked', false);
                }
            },
        });
    }
    $('#confirm-delete-modal').modal('hide');
});







