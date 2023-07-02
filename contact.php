<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = 'your-email@example.com'; // Replace with your desired email address
  $subject = 'New Contact Form Submission';
  $body = "Name: $name\nEmail: $email\nMessage: $message";

  if (mail($to, $subject, $body)) {
    echo "Thank you for contacting us. We will get back to you soon.";
  } else {
    echo "Sorry, there was an error sending your message. Please try again later.";
  }
}
?>
