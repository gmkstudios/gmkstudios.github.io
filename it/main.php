<?php

    $myemail="tiktokemail505@gmail.com";

    if(isset($_POST['nome'],$_POST['email'], $_POST['message'])){

        $nome=$_POST['nome'];
        $email=$_POST['email'];
        $message=$_POST['message'];
        $oggetto="Email inviata da: ".$nome."\nIl contenuto della E-mail è: ".$message;
        
        if(mail($myemail, "Oggetto E-mail", $oggetto)){
            header("location:../index.html");
        }else{
            echo "Errore nella mail";
        }
    }
?>