<?php

 //cabeçalho obrigatorios
 header("Access-Control-Allow-Origin: *");
 header("Content-Type: application/json; charset=UTF-8");
 header("Acess-Controll-Allow-Methods: GET,PUT,POST,DELETE");
 
 include './conexao/conexao.php';
//recebe o id pela URL
 $id =filter_input(INPUT_GET,"id",FILTER_SANITIZE_NUMBER_INT);

 if(!empty($id)){
    $response =[
        "erro" => false,
        "mensagem" => "id encontrado com sucesso .$id"
   
    ];
}else{
    $response =[
        "erro" => false,
        "mensagem" => "id não encontrado"
   
    ];
}


 $response ="";

 
 $query_contato = "DELETE FROM agenda WHERE id=:id LIMIT 1";
 $agenda_contato = $conn->prepare($query_contato);
 $agenda_contato->bindParam(':id',$id,PDO::PARAM_INT);
         
       if($agenda_contato->execute()){
        $response =[
            "erro" => false,
            "mensagem" => "Contato apagado com sucesso!"
       
        ];
        }else{
            $response =[
                "erro" => true,
                "mensagem" => "Error:  Contato não apagado com sucesso!"
           
            ];
        }
 // caso esqueça de por id na URL
  

 http_response_code(200);
echo json_encode($response);



?>