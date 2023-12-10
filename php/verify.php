<?php

$email = $_REQUEST['inputEmail'];
$pass = $_REQUEST['inputPssw'];

if ($email != null && $pass != null) {
    # code...
    print ("Correo: $email");
    header('Location: ../home.html');
    exit();
}

else {
    # code...
    header('Location: ../index.html');
    print ('');
    exit();
}