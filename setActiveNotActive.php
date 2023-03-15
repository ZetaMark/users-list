<?php
require_once 'database.php';

$id = $_POST['id'];
$active = $_POST['active'];
echo "hi";
foreach ($id as $idValue){
    $sql = "UPDATE `user_list` SET `status` = $active WHERE `user_list`.`id` = $idValue";
    mysqli_query($conn, $sql);
}

?>
