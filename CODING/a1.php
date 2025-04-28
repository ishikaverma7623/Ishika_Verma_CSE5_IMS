

<?php
// Start the session for storing session variables
session_start();

// Define hardcoded username and password (Replace this with a real database query in production)
$valid_username = 'admin';
$valid_password = 'password123';

// Check if the form was submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Capture the input values from the form
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Check if the entered username and password are correct
    if ($username == $valid_username && $password == $valid_password) {
        // Store the username in a session variable
        $_SESSION['username'] = $username;
        header("Location: dashboard.php"); // Redirect to dashboard page
        exit();
    } else {
        $error_message = 'Invalid username or password.';
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - INVENTORY MANAGEMENT SYSTEM</title>
    <link rel="stylesheet" type="text/css" href="login.css">
</head>
<body>
    <div class="container">
        <div class="loginHeader">
            <h1>IMS</h1>
            <h3>INVENTORY MANAGEMENT SYSTEM</h3>
        </div>
        
        <div class="loginBody">
            <form method="POST" action="login.php">
                <div class="loginInputContainer">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Enter your username" required>
                </div>

                <div class="loginInputContainer">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required>
                </div>

                <div class="loginButtonContainer">
                    <button type="submit">Login</button>
                </div>
                <br>
                <div class="remember-forgot">
                    <label><input type="checkbox" name="remember">Remember me</label>
                    <br>
                    <a href="#">Forgot password?</a>
                </div>
               <br>
                <div class="register-link">
                    <p>Don't have an account?<a href="register.html">Register</a></p>
                </div>

                <?php
                if (isset($error_message)) {
                    echo '<p style="color: red;">' . $error_message . '</p>';
                }
                ?>
            </form>
        </div>
    </div>
    <script src="a1.js"></script>
</body>
</html>
