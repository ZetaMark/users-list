<?php
require_once '../Database/database.php';

$id = $_POST['id'];
$active = $_POST['active'];
$sql = "UPDATE `user_list` SET `status` = $active WHERE `user_list`.`id` = $id";
if (mysqli_query($conn, $sql)) {
    $sql = "SELECT * FROM user_list WHERE id = '$id'";
    $result = mysqli_query($conn, $sql);
    $user = mysqli_fetch_assoc($result);
    if($user == NULL){
        $response = array(
            'status' => false,
            'error' => array(
                'code' => 404,
                'message' => "User not found."
             ),
             'user' => array(
                'id' => $id
            )
        );

        echo json_encode($response,JSON_UNESCAPED_UNICODE);
        die();
    }
    $response = array(
        'status' => true,
        'error' => null,
        'user' => array(
            'id' => $user['id'],
            'name_first' => $user['first_name'],
            'name_last' => $user['last_name'],
            'role' => $user['role'],
            'status' => $user['status'],
        ),
    );          
    echo json_encode($response);
} else {
    $response = array(
        'status' => false,
        'error' => mysqli_error($conn),
        'user' => array(
            'id' => $id
        )
    );
    echo json_encode($response);
}           