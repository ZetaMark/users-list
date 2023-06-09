<?php
require_once '../Database/database.php';
// Отримання змінних
$id = NULL;
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
    INSERT INTO user_list (id, first_name, last_name, status, role) 
    VALUES ('$id', '$firstName', '$lastName', '$status', '$role')
";

if (mysqli_query($conn, $sql)) {
    // отримуємо Autoincement id з бд

    $sqlLastInsertId = "SELECT LAST_INSERT_ID() as id;";
    $LastInsertIdResult = mysqli_query($conn, $sqlLastInsertId);
    $id = (int) mysqli_fetch_assoc($LastInsertIdResult)['id'];

    $sql = "SELECT * FROM user_list WHERE id = '$id'";
    $result = mysqli_query($conn, $sql);
    $user = mysqli_fetch_assoc($result);

    if($user['id'] == !NULL){
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
    }
    else if ($user['id'] == NULL){
        $response = array(
            'status' => false,
            'error' => array(
                'code' => 404,
                'message' => "Не вдалося створити користувача не знайдено."
            )
        );
        echo json_encode($response,JSON_UNESCAPED_UNICODE);
        die();
    }

    echo json_encode($response);
} else {
    $response = array(
        'status' => false,
        'error' => mysqli_error($conn),
        'user' => null
    );
    echo json_encode($response);
}
// ALL DONE! CONGRATULATIONS!!!
?>