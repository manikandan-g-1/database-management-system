<?php
$servername = "localhost";
$username = "root";  // Default username in XAMPP
$password = "";  // No password by default
$dbname = "hospital_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form data is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capture the data from POST request
    $name = $_POST['name'];
    $age = $_POST['age'];
    $disease = $_POST['disease'];

    // SQL query to insert data
    $sql = "INSERT INTO patients (name, age, disease) VALUES ('$name', $age, '$disease')";

    if ($conn->query($sql) === TRUE) {
        echo "New patient added successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
