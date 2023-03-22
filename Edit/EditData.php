<?php
require_once '../Database/database.php';
// Отримання змінних
$id = $_POST['id'];
$action = $_POST['action'];
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$status = $_POST['status'] == "true" ? 1 : 0;
$role = $_POST['role'] == "Admin" ? "Admin" : "User";

// Валідація даних
if(empty($firstName)){
    $response = array(
        'status' => false,
        'error' => array(
            'code' => 400,
            'message' => "Недопустиме значення 'First Name'. Поле 'First Name' не може бути пустим.",
        )
    );
    echo json_encode($response,JSON_UNESCAPED_UNICODE);
    die();
}
if(empty($lastName)){
    $response = array(
        'status' => false,
        'error' => array(
            'code' => 400,
            'message' => "Недопустиме значення 'Last Name'. Поле 'Last Name' не може бути пустим.",
        )
    );
    echo json_encode($response,JSON_UNESCAPED_UNICODE);
    die();
}
// Кінець валідації

// Нормалізация
// if (preg_match('/^\p{L}+$/u', $_POST['firstName'])) {
//     // переменная содержит только буквы всех языков
//     $firstName = $_POST['firstName'];

// } else {
//     // переменная содержит что-то еще, помимо букв
//     // оставляем только буквы
//     $firstName = preg_replace('/[^[:alpha:]]+/u', '', $_POST['firstName']);

// }
// // $lastName = $_POST['lastName'];
// if (preg_match('/^\p{L}+$/u', $_POST['lastName'])) {
//     // переменная содержит только буквы всех языков
//     $lastName = $_POST['lastName'];
// } else {
//     // переменная содержит что-то еще, помимо букв
//     // оставляем только буквы
//     $lastName = preg_replace('/[^[:alpha:]]+/u', '', $_POST['lastName']);
//     ;
// }

// Перед редагуванням перевіряємо чи існує користувач у бд.


$sql = "
     UPDATE user_list
     SET first_name = '$firstName',
     last_name = '$lastName',
     status = '$status',
     role = '$role'
     WHERE id = '$id';
";

if (mysqli_query($conn, $sql)) {
    $result = mysqli_query($conn, "SELECT * FROM `user_list` WHERE id = $id ");
    $user = mysqli_fetch_assoc($result);

    if($user == NULL){
        $response = array(
            'status' => false,
            'error' => array(
                'code' => 404,
                'message' => "User not found."
             ),
            'user' => NULL
        );

        echo json_encode($response,JSON_UNESCAPED_UNICODE);
        die();
    }

    $response = array(
     'status' => true,
     'error' => null,
     'user' => array(
         'id' => $user['id'],
         'first_name' => $user['first_name'],
         'last_name' => $user['last_name'],
         'role' => $user['role'],
         'status' => $user['status']
     )
 );

    echo json_encode($response);
} else {
    $response = array(
        'status' => false,
        'error' => mysqli_error($conn,JSON_UNESCAPED_UNICODE),
        'user' => null
    );
    echo json_encode($response);
}
// ALL DONE! CONGRATULATIONS!!!
?>