

<?php
// Include the database connection file
include('db.php');
error_reporting(0); // Disable error reporting (useful for production)

// Check if the form is submitted via POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get the form data
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Sanitize user input (important for security)
    $email = mysqli_real_escape_string($con, $email);
    $username = mysqli_real_escape_string($con, $username);
    $password = mysqli_real_escape_string($con, $password);

    // You should hash the password for security
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Prepare the SQL query to insert the data into the database
    $query = "INSERT INTO register (email, username, password) VALUES ('$email', '$username', '$hashedPassword')";

    // Execute the query
    $data = mysqli_query($con, $query);

    // Check if the data was inserted successfully
    if ($data) {
        echo "<script type='text/javascript'> alert('Data inserted into database successfully'); </script>";
    } else {
        echo "<script type='text/javascript'> alert('Failed to insert data'); </script>";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register - INVENTORY MANAGEMENT SYSTEM</title>
    <link rel="stylesheet" type="text/css" href="register.css">
</head>
<body>
    <div class="container">
        <div class="registerHeader">
            <h1>IMS</h1>
            <h3>INVENTORY MANAGEMENT SYSTEM</h3>
        </div>

        <div class="registerBody">
            <!-- Registration Form -->
            <form id="registerForm" method="POST" action="register.php">
                
                <div class="registerInputContainer">
                    <label for="email">Email</label>
                    <input type="email" name="email" placeholder="Enter your email" required>
                </div>

                <div class="registerInputContainer">
                    <label for="username">Username</label>
                    <input type="text" name="username" placeholder="Enter your username" required>
                </div>

                <div class="registerInputContainer">
                    <label for="password">Password</label>
                    <input type="password" name="password" placeholder="Enter your password" required>
                </div>

                <div class="registerButtonContainer">
                    <button type="submit" name="registerButton">Register</button>
                </div>

                <div class="googleSignInButton">
                    <div class="g-signin2" data-onsuccess="onSignIn"></div>
                </div>

                <div class="remember-forgot">
                    <label><input type="checkbox">Remember me</label>
                    <br>
                    <a href="#">Forgot password?</a>
                </div>

                <div class="login-link">
                    <p>Already have an account? <a href="login.html">Login</a></p>
                </div>
            </form>
        </div>
    </div>

    <script src="register.js"></script>
</body>
</html>
