<?php
require_once 'database.php';

$id = $_POST['id'];

$sql = "DELETE FROM user_list WHERE `user_list`.`id` = $id";
mysqli_query($conn, $sql);
?>
