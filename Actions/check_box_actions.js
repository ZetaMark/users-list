// Коли користувач клікає на чекбокс з id all-items
$('#all-items').click(function() {
    // Отримуємо стан чекбокса
    var isChecked = $(this).prop('checked');
    // Змінюємо стан всіх чекбоксів з класом .custom-control-input на isChecked
    $('.checkbox-item').prop('checked', isChecked);
  });
  
  // Коли будь-який з чекбоксів з класом .custom-control-input змінює свій стан
  $('.checkbox-item').change(function() {
    // Перевіряємо, чи всі чекбокси з класом .custom-control-input вибрані
    var allChecked = $('.checkbox-item').length === $('.checkbox-item:checked').length;
    // Змінюємо стан чекбокса з id all-items на allChecked
    $('#all-items').prop('checked', allChecked);
  });
  