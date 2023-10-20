<?php
//get data from form  
$name = $_POST['Name'];
$email= $_POST['Email'];
$message= $_POST['Message'];
$to = "info@prozukty.com";
$subject = "Mail from contact page -Educatech";
$txt ="Name = ". $name . "\r\n Email = " . $email . "\r\n Message =" . $message;
$headers = "From: noreply@educatech.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>