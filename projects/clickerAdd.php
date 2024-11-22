<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "localhost";
$username = "clickUser";
$password = "4096";
$dbname = "clicker";

function incrementClickCount() {
    global $servername, $username, $password, $dbname;
    
    $conn = new mysqli($servername, $username, $password, $dbname);

    $sql = "UPDATE clicks SET count = count + 1 WHERE id = 1";

    $conn->query($sql);

    $conn->close();

}

incrementClickCount();
?>
