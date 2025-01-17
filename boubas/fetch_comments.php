<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "localhost";
$username = "commentUser";
$password = "8192";
$dbname = "commentStream";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, username, message, image_url, DATE_FORMAT(date, '%Y-%m-%d %H:%i') AS date 
        FROM messages 
        ORDER BY date DESC 
        LIMIT 3";

$result = $conn->query($sql);

$comments = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $comments[] = $row;
    }
}

header('Content-Type: application/json');
echo json_encode($comments);

$conn->close();
?>
