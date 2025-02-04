<?php
$host = '127.0.0.1'; // Localhost
$port = 25565; // Target port

$connection = @fsockopen($host, $port, $errno, $errstr, 2);

if ($connection) {
    echo "Port $port is open.";
    fclose($connection);
} else {
    echo "Port $port is closed.";
}
?>
