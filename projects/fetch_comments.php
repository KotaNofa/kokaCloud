<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database connection code here...
?>


<?php
// Database connection
$servername = "localhost";
$username = "commentUser";
$password = "8192";
$dbname = "commentStream";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to fetch the comments
$sql = "SELECT id, username, message, image_url, DATE_FORMAT(date, '%Y-%m-%d %H:%i') AS date FROM messages ORDER BY date DESC";
$result = $conn->query($sql);

if ($result === false) {
    die("Error fetching comments: " . $conn->error); // Show an error if the query fails
}

// Fetch the results and store them in an array
$comments = [];
while ($row = $result->fetch_assoc()) {
    $comments[] = $row;
}

// Return the comments as a JSON response
echo json_encode($comments);

// Close the connection
$conn->close();
?>
