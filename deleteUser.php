<?php
require_once 'database.php';

$id = $_POST['id'];
    $sql = "DELETE FROM `user_list` WHERE `user_list`.`id` = $id";
    if ($result = mysqli_query($conn, $sql)) {

        // $result = mysqli_query($conn, $sql);
        $response = array(
            'status' => true,
            'error' => null,
            'id' => $id
        );
        echo json_encode($response);
    } else {
        $response = array(
            'status' => false,
            'error' => mysqli_error($conn),
            'id' => null
        );
        echo json_encode($response);
    }

?>
