<?php

include './conexao/conexao.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 //$id=123;
// pra fica dinaminco              //força que seja inteiro
$id = filter_input(INPUT_GET,'id',FILTER_SANITIZE_NUMBER_INT);
//http://localhost/API/visualizar.php?id=124

$response="";
 $sql = "SELECT id,nome,sobrenome,cpf,email,telefone FROM agenda WHERE id=:id LIMIT 1";
 $query_cliente = $conn->prepare($sql);
 $query_cliente->bindParam(':id',$id,PDO::PARAM_INT);
 $query_cliente->execute();
 
 if(($query_cliente) AND ($query_cliente->rowCount() != 0)){
   $row_cliente =$query_cliente->fetch(PDO::FETCH_ASSOC);
   extract($row_cliente);

  // echo var_dump($row_cliente);
   $contato =[
       'id'=>$id,
       'nome'=> $nome,
       'sobrenome' => $sobrenome,
       'cpf' =>$cpf,
       'email'=>$email,
       'telefone'=>$telefone
   ];
    $response = [
        "erro" => false,
        "agenda"=> $contato
        // "messagem"=>"Nenhum cliente encontrado!"
   ];

 }else{
   $response = [
        "erro" => true,
        "messagem"=>"Nenhum cliente encontrado!"
   ];
 }




http_response_code(200);
echo json_encode($response);

?>
