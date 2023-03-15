function actionsBlockClick(event) {
// Отримати елемент, на якому була викликана подія (в даному випадку, кнопка "ОК")
const button = event.target;
// Отримати батьківський елемент кнопки (div)
const parent = button.parentElement;
// Отримати елемент select, який є батьківським для кнопки (div)
const select = parent.querySelector('select');
// Отримати вибране значення у селекті
const selectedValue = select.value;

console.log(selectedValue); // Виводить обране значення селект боксу в консоль


var activeCheckboxes = [];
$('.row-checkbox:checked').each(function() {
  activeCheckboxes.push($(this).attr('data-id'));
});
console.dir(activeCheckboxes);

  if(activeCheckboxes.length == 0){
    $('#actions-block-warning-modal').modal('show');
    $('#actions_block_warning_message').prev('label').text('No users selected');

    

  } else if(selectedValue == "Delete"){

    $("#delete-id").val(JSON.stringify(activeCheckboxes));
    $('#confirm-delete-modal').modal('show');

    // $.ajax({
    //   type: "POST", // Використати метод POST для надсилання даних
    //   url: "deleteUser.php", // Вказати шлях до файлу PHP, який оброблятиме дані
    //   data: { // Надіслати дані у форматі JSON
    //       id: activeCheckboxes
    //   },
    //   success: function(response) { // Обробник успішної відповіді від сервера
    //       console.log(response); // Вивести відповідь сервера в консоль
    //   },
    // });
  } else if(selectedValue == "Set active") {
    $.ajax({
      type: "POST", // Використати метод POST для надсилання даних
      url: "setActiveNotActive.php", // Вказати шлях до файлу PHP, який оброблятиме дані
      data: { // Надіслати дані у форматі JSON
          id: activeCheckboxes,
          active: 1
      },
      success: function(response) { // Обробник успішної відповіді від сервера
          console.log(response); // Вивести відповідь сервера в консоль
      },
    });
  }
  else if(selectedValue == "Set not active") {
    $.ajax({
      type: "POST", // Використати метод POST для надсилання даних
      url: "setActiveNotActive.php", // Вказати шлях до файлу PHP, який оброблятиме дані
      data: { // Надіслати дані у форматі JSON
          id: activeCheckboxes,
          active: 0
      },
      success: function(response) { // Обробник успішної відповіді від сервера
          console.log(response); // Вивести відповідь сервера в консоль
      },
    });
  } else if(selectedValue == "-Please Select-") {
    console.log(selectedValue + " PLEASE SELECT OMG" );
    $('#actions-block-warning-modal').modal('show');
    $('#actions_block_warning_message').prev('label').text('Please choose action');
  }
}