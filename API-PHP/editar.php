<?php
include './conexao/conexao.php';
//cabeçalho obrigatorios
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");
header("Acess-Controll-Allow-Methods: GET,PUT,POST,DELETE");

 //recebe os dados do formulario
$response_json = file_get_contents("php://input");

//é um objeto pra poder ler o valor
$dados =json_decode($response_json,true);





$response="";

if($dados){

    $query_cliente = "UPDATE agenda SET nome=:nome, sobrenome=:sobrenome, cpf=:cpf, email=:email, telefone=:telefone WHERE id=:id";
    $sql = $conn->prepare($query_cliente);
    $sql->bindParam(':nome',$dados['nome'],PDO::PARAM_STR);
    $sql->bindParam(':sobrenome',$dados['sobrenome'],PDO::PARAM_STR);
    $sql->bindParam(':cpf',$dados['cpf'],PDO::PARAM_STR);
    $sql->bindParam(':email',$dados['email'],PDO::PARAM_STR);
    $sql->bindParam(':telefone',$dados['telefone'],PDO::PARAM_STR);
    $sql->bindParam(':id',$dados['id'],PDO::PARAM_INT);
    $sql->execute();

    //verifica se  foi atualizado  o contato
    if($sql->rowCount()){
        $respoonse = [
            "erro" => false,
            "mensagem"=>"Cliente editado com Sucesso! ",
             "dados"=>$sql
          ]; 


    }else{
        $respoonse = [
            "erro" => true,
            "mensagem"=>"Erro: Não foi possivel editar! ",
           
          ];
    }

// verifica se dados não esta vazio 
  $respoonse = [
        "erro" => false,
        "messagem"=>"Cliente editado com Sucesso! ",
       
      ];





}else{
     $respoonse = [
        "erro" => false,
        "messagem"=>"Erro: Não foi possivel editar! ",
       
      ];
}

http_response_code(200);
//converte array em objeto
echo json_encode($respoonse);



?>