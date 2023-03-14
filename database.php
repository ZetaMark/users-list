<?php
$servername = "localhost";
$username = "users-list";
$password = "password";
$dbname = "users_list";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Перевірка підключення
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>