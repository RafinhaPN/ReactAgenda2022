<?php

$host="localhost";
 $user="root";
 $pass="";
 $dbname="contatos";
 $port=3306;

 $conn = new PDO("mysql:host=$host;port=$port;dbname=".$dbname,$user,$pass);
 
 if($conn){
     //echo"conectado com sucesso!";
 }else{
    // echo"Erro ao se conectar!";
 }


//echo "API REST com PHP";

/*
 $response = [
        "erro" => false,
        "cliente"=> $cliente
        // "messagem"=>"Nenhum cliente encontrado!"
   ];

*/

?>