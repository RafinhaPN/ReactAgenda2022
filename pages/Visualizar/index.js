import React, { useEffect, useState } from 'react'
import './visualizar.css'
import { Link, useParams } from 'react-router-dom';

function Visualizar(props) {
    const [data, setData]=useState([]);
    const {id} = useParams();
   // console.log(id);
    useEffect(()=>{

        const buscarContato = async () =>{
            await fetch("http://localhost/API-PHP/visualizar.php?id=" + id)
            .then((response)=> response.json())
            .then((responseJson)=>{
               // console.log(responseJson);
               setData(responseJson.agenda);
            })
        } 
        buscarContato();

    },[id])

    return (
        <div className='container'>
            <h1>Detalhes</h1>
            <hr />
            <div className="card text-center">
                <div className="card-header">
                    {data.nome}
                </div>
                <div className="card-body">
                    <h5 className="card-title">Numero : {data.telefone}</h5>
                    <p className="card-text">E-mail : {data.email}</p>
                   
                </div>
                <div className="card-footer text-muted">
                   CPF : {data.cpf}
                </div>
            </div>
            <hr />
            <Link className='angora' to={"/contato"}>voltar</Link>
        </div>
    )
}



export default Visualizar;
