<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Process form data here
    $name = $_POST["name"];
    $email = $_POST["email"];
    // e.g., save to database, send email, etc.

    // Redirect to the thank-you page
    header("Location: https://namochetana.com/success.html");
    exit();
} else {
    // If not a POST request, show an error or redirect
    header("HTTP/1.1 405 Method Not Allowed");
    exit("405 - Method Not Allowed");
}
?>