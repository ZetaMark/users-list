<?php
require_once 'database.php';

$id = $_POST['id'];

foreach ($id as $idValue){
    $sql = "DELETE FROM user_list WHERE `user_list`.`id` = $idValue";
    if (mysqli_query($conn, $sql)) {

        $sql= "SELECT * FROM user_list WHERE id = '$idValue'";
        $result = mysqli_query($conn, $sql);
        $user = mysqli_fetch_assoc($result);
        $response = array(
            'status' => true,
            'error' => null,
            'id' => $idValue
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
}
?>
