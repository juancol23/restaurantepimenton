<?php
 
$para      = 'valdcolra@gmail.com';  
//
$telefono   = $_POST['telefono'];

$cabeceras = 'From: RestaurantePimenton@riva.com' . "\r\n" .
    'Reply-To: RestaurantePimenton@riva.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
 
    // ."Content-type: text/html; charset=utf-8"
  mail($para, 'Reserva de cita para el restaurante pimenton ',$telefono."\r\n", $cabeceras); 
  
 header("Location: http://juanvaldemar.github.io/restaurantepimenton");
 
?>
