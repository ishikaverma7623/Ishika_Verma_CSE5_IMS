
<?php
// Correct connection to MySQL database
$con = mysqli_connect("localhost", "root", "", "rl");

// Check if the connection is successful
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($con) {
    echo "Connection successful!";
} else {
    echo "Connection failed!";
}
?>
