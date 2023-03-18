// Коли користувач клікає на чекбокс з id all-items
$(document).on('click', '#all-items', function(event) {  

    // Отримуємо стан чекбокса
    var isChecked = $(this).prop('checked');
    // Змінюємо стан всіх чекбоксів з класом .checkbox-item на isChecked
    $('.checkbox-item').prop('checked', isChecked);
  });
  
  // Коли будь-який з чекбоксів з класом .checkbox-item змінює свій стан
  $(document).on('change', '.checkbox-item', function() {
    // Перевіряємо, чи всі чекбокси з класом .checkbox-item вибрані
    var allChecked = $('.checkbox-item').length === $('.checkbox-item:checked').length;
    // Змінюємо стан чекбокса з id all-items на allChecked
    $('#all-items').prop('checked', allChecked);
  });

