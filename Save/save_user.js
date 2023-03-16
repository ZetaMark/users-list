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
    url: "Save/saveData.php", // Вказати шлях до файлу PHP, який оброблятиме дані
    data: { // Надіслати дані у форматі JSON
        id: id,
        firstName: firstName,
        lastName: lastName,
        status: status,
        role: role
    },
    success: function(response) { // Обробник успішної відповіді від сервера
         // Вивести відповідь сервера в консоль
        // Очистити поля форми
        $('#modal-id').val('');
        $('#first-name').val('');
        $('#last-name').val('');
        $('#switch').prop('checked', false);
        $('#select-role').val('Admin');
        
        response = JSON.parse(response)
        id = response['user']['id'];
        first_name = response['user']['first_name'];
        last_name = response['user']['last_name'];
        role = response['user']['role'];
        status = response['user']['status'];
        // console.log(response);
    

             // Создаем новую строку таблицы с данными из текущей строки
             var $tr = $("<tr>", { id: "row-" + id });

             // Создаем ячейки таблицы для каждого столбца
             var $td1 = $("<td>", { class: "align-middle" }).append(
                 $("<div>", { class: "custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top" }).append(
                     $("<input>", { id: "checkbox-" + id, type: "checkbox", class: "custom-control-input row-checkbox", "data-id": id }),
                     $("<label>", { class: "custom-control-label", for: "checkbox-" + id })
                 )
             );
             var $td2 = $("<td>", { class: "text-nowrap align-middle", "data-first-name": first_name, "data-last-name": last_name, id: "name-" + id }).text(first_name + " " + last_name);
             var $td3 = $("<td>", { class: "text-nowrap align-middle" }).append($("<span>", { id: "role-" + id }).text(role));
             var $td4 = $("<td>", { class: "text-center align-middle", "data-status": status, id: "status-" + id }).append(
                 $("<i>", { id: "status-circle-" + id, class: "fa fa-circle " + (status == 1 ? "active" : "not-active") + "-circle" })
             );
             var $td5 = $("<td>", { class: "text-center align-middle" }).append(
                 $("<div>", { class: "btn-group align-top" }).append(
                     $("<button>", { "data-id": id, class: "btn btn-sm btn-outline-secondary badge edit-user", type: "button", "data-toggle": "modal", "data-target": "#user-form-modal" }).text("Edit"),
                     $("<button>", { "data-id": id, class: "btn btn-sm btn-outline-secondary badge call-modal-delete-user", type: "button", "data-toggle": "modal", "data-target": "#confirm-delete-modal" }).append(
                         $("<i>", { "data-id": id, 'data-toggle': 'modal', 'data-target': '#confirm-delete-modal', class: "fa fa-trash" })
                     )
                 )
             );
 
             // Добавляем ячейки в строку таблицы и добавляем строку в таблицу
             $tr.append($td1, $td2, $td3, $td4, $td5);
             //Якщо рядок інсує замінюємо, інакше додаємо в кінець 
             if($("#row-"+id).length){
             $("#row-"+id).replaceWith($tr);
             } else {
             $("#table-body").append($tr);
             }

    },
});
    $("#user-form-modal").modal("hide");
});


