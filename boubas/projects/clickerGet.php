<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database connection code here...
?>


<?php
// Database connection
$servername = "localhost";
$username = "clickUser";
$password = "4096";
$dbname = "clicker";

$conn = new mysqli($servername, $username, $password, $dbname);

$sql = "SELECT count FROM clicks WHERE id = 1";
$result = $conn->query($sql);

if ($result && $row = $result->fetch_assoc()) {
    echo $row['count'];
} else {
    echo 0;
}
$conn->close();
?>
