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
    //Якщо додаємо новий рядок, то отримуємо id з бд
    if($id == NULL){
    $sqlLastInsertId = "SELECT LAST_INSERT_ID() as id;";
    $LastInsertIdResult = mysqli_query($conn, $sqlLastInsertId);
    $id = (int)mysqli_fetch_assoc($LastInsertIdResult)['id'];
    }

    $sql= "SELECT * FROM user_list WHERE id = '$id'";
    $result = mysqli_query($conn, $sql);
    $user = mysqli_fetch_assoc($result);
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
        'error' => mysqli_error($conn),
        'user' => null
    );
    echo json_encode($response);
}
?>