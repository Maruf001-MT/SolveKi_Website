<?php
//get data from form  
$name = $_POST['Contact-Sales-Name'];
$email= $_POST['Contact-Sales-Email'];
$message= $_POST['Contact-Sales-Message'];
$to = "solveki@prozukty.com";
$subject = "Mail from contact sales page -Solveki";
$txt ="Name = ". $name . "\r\n Email = " . $email . "\r\n Message =" . $message;
$headers = "From: noreply@solveki.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thank.html");
?>