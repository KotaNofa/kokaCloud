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

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $user = $_POST['username'];
    $message = $_POST['message'];
    $image_url = $_POST['image_url'];
    
    // Sanitize input to prevent SQL injection
    $user = mysqli_real_escape_string($conn, $user);
    $message = mysqli_real_escape_string($conn, $message);
    $image_url = mysqli_real_escape_string($conn, $image_url);

    // Insert the data into the database
    $sql = "INSERT INTO messages (username, message, image_url) VALUES ('$user', '$message', '$image_url')";
    
    if ($conn->query($sql) === TRUE) {
        // If the insert was successful, redirect or show a confirmation
        echo "New message created successfully.";
        // You could also redirect back to the form page
        // header("Location: /your-form-page.php");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
    // Close the connection
    $conn->close();
}
?>
