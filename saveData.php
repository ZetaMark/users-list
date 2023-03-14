<?php
require_once 'database.php';

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$status = $_POST['status'] == "true" ? 1 : 0;
$role = $_POST['role'];
var_dump($status);
$sql = "INSERT INTO user_list (id, first_name, last_name, status, role) VALUES (NULL, '$firstName', '$lastName', '$status', '$role')";
mysqli_query($conn, $sql);
?>
