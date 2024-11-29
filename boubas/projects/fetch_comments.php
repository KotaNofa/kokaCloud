<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database connection code here...
$servername = "localhost";
$username = "commentUser";
$password = "8192";
$dbname = "commentStream";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the page number from the query string (default to 1 if not set)
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;

// Ensure page is a valid number
if ($page < 1) {
    $page = 1;
}

// Define the number of comments per page
$commentsPerPage = 10;

// Calculate the offset for the query
$offset = ($page - 1) * $commentsPerPage;

// SQL query to fetch the comments with pagination
$sql = "SELECT id, username, message, image_url, DATE_FORMAT(date, '%Y-%m-%d %H:%i') AS date FROM messages ORDER BY date DESC LIMIT ? OFFSET ?";

// Prepare the statement
$stmt = $conn->prepare($sql);

// Check if the statement was prepared correctly
if ($stmt === false) {
    die('MySQL error: ' . $conn->error);
}

$stmt->bind_param("ii", $commentsPerPage, $offset); // Bind the parameters

// Execute the query
$stmt->execute();

// Get the result
$result = $stmt->get_result();

// Fetch the results and store them in an array
$comments = [];
while ($row = $result->fetch_assoc()) {
    $comments[] = $row;
}

// If no comments were returned, return an empty array or a custom message
if (empty($comments)) {
    echo json_encode([]);
} else {
    // Return the comments as a JSON response
    echo json_encode($comments);
}

// Close the connection
$stmt->close();
$conn->close();
?>
