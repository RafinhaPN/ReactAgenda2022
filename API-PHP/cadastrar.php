<?php
include './conexao/conexao.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");
header("Acess-Controll-Allow-Methods: GET,PUT,POST,DELETE");

$response_json = file_get_contents("php://input");

$dados =json_decode($response_json,true);
$response ="";

if($dados){
    $sql = "INSERT INTO agenda (nome, sobrenome, cpf, email, telefone)VALUES(:nome, :sobrenome, :cpf, :email, :telefone)";
    $cad_Contato = $conn->prepare($sql);
     
    $cad_Contato->bindParam(':nome',$dados['contato']['nome']);
    $cad_Contato->bindParam(':sobrenome', $dados['contato']['sobrenome']);
    $cad_Contato->bindParam(':cpf', $dados['contato']['cpf']);
    $cad_Contato->bindParam(':email', $dados['contato']['email']);
    $cad_Contato->bindParam(':telefone', $dados['contato']['telefone']);
    $cad_Contato->execute();
    if($cad_Contato->rowCount()){
      $response=[
            "error" => false,
            "mensagem"=> "contato cadastrado com sucesso! ",
          
        ];
     }
    else
    {
     $response=[
            "error" => true,
            "mensagem"=> "contato não cadastrado com sucesso! "
        ];
    
    }
}
else
{
     $response=[
            "error" => true,
            "mensagem"=> "Error: Tente mais tarde!"
        ];

}

http_response_code(200);
echo json_encode($response);

?>