<?php
	header('Content-type: application/json');
	$status = array(
		'type'=>'success',
		'message'=>'Email sent!'
	);

    $text = @trim(stripslashes($_POST['name'])); 
    $text = @trim(stripslashes($_POST['email'])); 
    $text = @trim(stripslashes($_POST['subject'])); 
    $text = @trim(stripslashes($_POST['message'])); 

    $email_from = $email;
    $email_to = 'lucianobritis@hotmail.com';

    $body = 'Name: ' . $name . "\n\n" . 'Email: ' . $email . "\n\n" . 'Subject: ' . $subject . "\n\n" . 'Message: ' . $message;

    $success = @mail($email_to, $subject, $body, 'From: <'.$email_from.'>');

    echo json_encode($status);
    die;