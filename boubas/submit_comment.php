<?php
$servername = "localhost";
$username = "commentUser";
$password = "8192";
$dbname = "commentStream";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $_POST['username'];
    $message = $_POST['message'];
    $image_url = $_POST['image_url'];
    
    $user = mysqli_real_escape_string($conn, $user);
    $message = mysqli_real_escape_string($conn, $message);
    $image_url = mysqli_real_escape_string($conn, $image_url);


    $sql = "INSERT INTO messages (username, message, image_url) VALUES ('$user', '$message', '$image_url')";
    
    if ($conn->query($sql) === TRUE) {

        echo "New message created successfully.";

    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
    $conn->close();
}
?>
