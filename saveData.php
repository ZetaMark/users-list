<?php
require_once 'database.php';
$id = isset($_POST['id']) ? $_POST['id'] : NULL;
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$status = $_POST['status'] == "true" ? 1 : 0;
$role = $_POST['role'];
$sql = "
    INSERT INTO user_list (id, first_name, last_name, status, role) 
    VALUES ('$id', '$firstName', '$lastName', '$status', '$role')
    ON DUPLICATE KEY UPDATE
    first_name = '$firstName',
    last_name = '$lastName',
    status = '$status',
    role = '$role';
";
if (mysqli_query($conn, $sql)) {
    echo "Данные успешно добавлены/обновлены в базе данных.";
} else {
    echo "Ошибка: " . mysqli_error($conn);
}
?>
