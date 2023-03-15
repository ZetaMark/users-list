<?php
require_once 'database.php';

$id = $_POST['id'];

foreach ($id as $idValue){
    $sql = "DELETE FROM user_list WHERE `user_list`.`id` = $idValue";
    mysqli_query($conn, $sql);
}
?>
