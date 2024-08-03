<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';
$mail = new PHPMailer();
// $stellar = $_POST['stellar'];
// $vastu = $_POST['vastu'];
$name = $_POST['name'];
$email = $_POST['email'];
$msg = $_POST['msg'];

try {

    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'ashalujain66@gmail.com';
    $mail->Password = 'jwrrgyujougprzal';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
    $mail->setFrom('ashalujain66@gmail.com');
    $mail->addAddress('ashalujain66@gmail.com');
    $mail->isHTML(true);
    $mail->Subject = 'Form Submission';
      $mail->Body = "<h3>Name : $name <br>Email : $email <br>Message : $msg";
    $mail->send();
    echo 'success';
  } catch (Exception $e) {
    echo 'error';
  }