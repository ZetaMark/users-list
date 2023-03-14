// Коли користувач клікає на чекбокс з id all-items
$('#all-items').click(function() {
    // Отримуємо стан чекбокса
    var isChecked = $(this).prop('checked');
    // Змінюємо стан всіх чекбоксів з класом .custom-control-input на isChecked
    $('.custom-control-input').prop('checked', isChecked);
  });
  
  // Коли будь-який з чекбоксів з класом .custom-control-input змінює свій стан
  $('.custom-control-input').change(function() {
    // Перевіряємо, чи всі чекбокси з класом .custom-control-input вибрані
    var allChecked = $('.custom-control-input').length === $('.custom-control-input:checked').length;
    // Змінюємо стан чекбокса з id all-items на allChecked
    $('#all-items').prop('checked', allChecked);
  });
  