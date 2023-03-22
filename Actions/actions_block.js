function actionsBlockClick(event) {
  // Отримати елемент, на якому була викликана подія (в даному випадку, кнопка "ОК")
  const button = event.target;
  // Отримати батьківський елемент кнопки (div)
  const parent = button.parentElement;
  // Отримати елемент select, який є батьківським для кнопки (div)
  const select = parent.querySelector('select');
  // Отримати вибране значення у селекті
  const selectedValue = select.value;

  var errorRows = "";

  // console.log(selectedValue); // Виводить обране значення селект боксу в консоль

  var activeCheckboxes = [];
  $('.checkbox-item:checked').each(function () {
    activeCheckboxes.push($(this).attr('data-id'));
  });
  console.dir(activeCheckboxes);

  if (activeCheckboxes.length == 0) {
    $('#actions-block-warning-modal').modal('show');
    $('#actions_block_warning_message').prev('label').text('No users selected');
  }
  else if (selectedValue == "-Please Select-") {
    $('#actions-block-warning-modal').modal('show');
    $('#actions_block_warning_message').prev('label').text('Please choose action');
  }
  else if (selectedValue == "Delete") {
    $("#delete-id").val(JSON.stringify(activeCheckboxes));
    $('#confirm-delete-label').text(`Do you want to delete selected rows?`);
    $('#confirm-delete-modal').modal('show');
  }
  else if (selectedValue == "Set active") {
    for (i = 0; i < activeCheckboxes.length; i++) {
      $.ajax({
        type: "POST", // Використати метод POST для надсилання даних
        url: "Actions/setActiveNotActive.php", // Вказати шлях до файлу PHP, який оброблятиме дані
        dataType: 'json',
        data: { // Надіслати дані у форматі JSON
          id: activeCheckboxes[i],
          active: 1
        },
        success: function (response) { // Обробник успішної відповіді від сервера
          //response = JSON.parse(response); // Вивести відповідь сервера в консоль
          if (response['status'] == true) {
            $('#status-circle-' + response['user']['id']).removeClass('not-active-circle').addClass('active-circle');
            $('.custom-control-input').prop('checked', false);
            $('#select-box').val('-Please Select-');
          }
          else {
            console.log(response);
            errorMessage = response['error']['message']
            $('#actions_block_error_message').text(errorMessage).css({
                "color": "red",
                "font-weight": "bold"
            })
            errorUserId = response['user']['id']
              firstName = $('#name-'+errorUserId).attr('data-first-name'),
              lastName = $('#name-'+errorUserId).attr('data-last-name'),
              userRole = $('#role-'+errorUserId).text(),
              userStatus = $('#status-'+errorUserId).attr('data-status')
              errorRow = `[Name: ${firstName} ${lastName}, Role: ${userRole}, Status: ${userStatus} ];`
              errorRows += errorRow;
              $('#actions_block_error_content').text(errorRows).css({
                "color": "red",
                "font-weight": "bold"
              })
              $('#actions-block-error-modal').modal('show');
          }
        },
      });
    }

  }
  else if (selectedValue == "Set not active") {
    for (i = 0; i < activeCheckboxes.length; i++) {
      $.ajax({
        type: "POST", // Використати метод POST для надсилання даних
        url: "Actions/setActiveNotActive.php", // Вказати шлях до файлу PHP, який оброблятиме дані
        dataType: 'json',
        data: { // Надіслати дані у форматі JSON
          id: activeCheckboxes[i],
          active: 0
        },
        success: function (response) { // Обробник успішної відповіді від сервера
          //response = JSON.parse(response); // Вивести відповідь сервера в консоль
          if (response['status'] == true) {
          $('#status-circle-' + response['user']['id']).removeClass('active-circle').addClass('not-active-circle');
          $('.custom-control-input').prop('checked', false);
          $('#select-box').val('-Please Select-');
          }
          else {
            console.log(response);
            errorMessage = response['error']['message']
            $('#actions_block_error_message').text(errorMessage).css({
                "color": "red",
                "font-weight": "bold"
            })
            errorUserId = response['user']['id']
              firstName = $('#name-'+errorUserId).attr('data-first-name'),
              lastName = $('#name-'+errorUserId).attr('data-last-name'),
              userRole = $('#role-'+errorUserId).text(),
              userStatus = $('#status-'+errorUserId).attr('data-status')
              errorRow = `[Name: ${firstName} ${lastName}, Role: ${userRole}, Status: ${userStatus} ];`
              errorRows += errorRow;
              $('#actions_block_error_content').text(errorRows).css({
                "color": "red",
                "font-weight": "bold"
              })
              $('#actions-block-error-modal').modal('show');
          }
        },
      });
    }

  }
// Перевіряємо, чи всі чекбокси з класом .checkbox-item вибрані
var allChecked = $('.checkbox-item').length === $('.checkbox-item:checked').length;
// Змінюємо стан чекбокса з id all-items на allChecked
$('#all-items').prop('checked', allChecked);
}