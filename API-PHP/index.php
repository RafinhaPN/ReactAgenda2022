<?php

include './conexao/conexao.php';
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Acess-Controll-Allow-Methods: GET,PUT,POST,DELETE");

$response ="";

$sql = "SELECT * FROM agenda";
 $res = $conn->prepare($sql);
 $res->execute();

 if(($res) AND ($res->rowCount()!= 0)){
    while($row_contato = $res->fetch(PDO::FETCH_ASSOC)){
       //echo"<pre>";
       //var_dump($row_contato);
       extract($row_contato);
       $lista_contato["results"][$id]=[
        
         'id'=> $id,
         'nome'=>$nome,
         'sobrenome'=>$sobrenome,
         'cpf'=>$cpf,
         'email'=>$email,
         'telefone'=>$telefone,    
        
        
             
        //  'id' => $id,
        //  'nome'=> $nome,
       //   'email'=>$email
       ];
   
   }

 }
$response=[
    "error" => false,
    "mensagem"=> "Contatos encontrado! "
];
http_response_code(200);

//echo json_encode($response);

echo json_encode($lista_contato);
?>