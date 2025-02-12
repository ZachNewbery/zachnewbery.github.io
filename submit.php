<?php
$to      = 'zachariah.newbery@gmail.com';
$subject = 'Website Query - ' . $_POST["full-name"];
$message = $_POST["message"];
$headers = 'From: ' . $_POST["email"] . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?> 