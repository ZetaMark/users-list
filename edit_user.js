// Додати обробник подій натискання на кнопку
$(document).on('click', '.edit-user', function(event) {
    // Отримати значення id 
    const clickedEditButton = $(event.target);
    let id = clickedEditButton.attr('data-id');
    var firstName = $("#name-" + id).attr("data-first-name");
    var lastName = $("#name-" + id).attr("data-last-name");
    var role = $("#role-" + id).html();
    var status = $("#status-" + id).attr("data-status");
    console.log(id,firstName,lastName,role,status)

    // Устанавливаем значения полей в модальном окне
    $("#modal-id").val(id);
    $("#first-name").val(firstName);
    $("#last-name").val(lastName);
    $("#switch").prop("checked", status == 1 ? true : false);
    $("#select-role").val(role);
  
    // Відкриваємо модальне вікно
    $("#user-form-modal").modal("show");
    
    // Очищаємо поля модального вікна після закриття
    $('#user-form-modal').on('hidden.bs.modal', function () {
        $(this).find('input, select').val('').prop('checked', false);
    });
    

});



