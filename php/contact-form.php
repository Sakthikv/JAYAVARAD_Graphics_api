<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST["name"]);
  $email = htmlspecialchars($_POST["email"]);
  $msg = htmlspecialchars($_POST["message"]);

  $to = "you@example.com";
  $subject = "Contact Form Message from $name";
  $body = "From: $name\nEmail: $email\n\nMessage:\n$msg";

  if (mail($to, $subject, $body)) {
    echo "Message sent!";
  } else {
    echo "Failed to send.";
  }
}
?>
