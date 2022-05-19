import React,{useState,useEffect} from 'react'
import './editar.css'
import { Link,useParams } from 'react-router-dom';
function Editar() {
    
    const {id} = useParams();
   // console.log(id)

    const [nome , setNome]=useState('');
    const [sobrenome, setSobrenome]=useState('');
    const [cpf , setCpf]=useState('');
    const [email, setEmail]=useState('');
    const [telefone , setTelefone]=useState('');

 useEffect(()=>{

        const buscarContato = async () =>{
            await fetch("http://localhost/API-PHP/visualizar.php?id=" + id)
            .then((response)=> response.json())
            .then((responseJson)=>{
              //  console.log(responseJson.agenda);
               setNome(responseJson.agenda.nome);
               setSobrenome(responseJson.agenda.sobrenome);
               setCpf(responseJson.agenda.cpf);
               setEmail(responseJson.agenda.email);
               setTelefone(responseJson.agenda.telefone);
            
         
            })
        } 
        buscarContato();

    },[id])

    const EditContato = async e =>{
        e.preventDefault();

        await fetch("http://localhost/API-PHP/editar.php",{
           method:"POST",
           headers:{
               'Content-Type':'Application/json'
           },
             body:JSON.stringify({id,nome,sobrenome,cpf,email,telefone})    
       }).then((response)=>response.json())
         .then((responseJson)=>{
             console.log(responseJson);
          
         }).catch(()=>{

         })
    }



  

    return (
        <div className='container'>
            <h1></h1>
            <hr />
            <form onSubmit={EditContato}>
                <div className="form-row">
                    <div className="col">
                        <input type="text"
                               name='nome' 
                               className="form-control" 
                               placeholder="nome..." 
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                               />
                    </div>
                    <div className="col">
                        <input type="text"
                               name='sobrenome'
                               className="form-control" 
                               placeholder="sobrenome..." 
                               value={sobrenome}
                               onChange={e => setSobrenome(e.target.value)}
                               />
                    </div>
                    <div className="col">
                        <input type="text"
                               name='cpf' 
                               className="form-control"
                               placeholder="Cpf..."
                               value={cpf}
                               onChange={e => setCpf(e.target.value)}
                               />
                    </div>
                    <div className="col">
                        <input type="text"
                               name='email'
                               className="form-control" 
                               placeholder="e-mail..."
                               value={email}
                               onChange={e => setEmail(e.target.value)}
                               />
                    </div>
                    <div className="col">
                        <input type="text"
                                name='telefone' 
                               className="form-control"
                               placeholder="telefone..."
                               value={telefone}
                               onChange={e => setTelefone(e.target.value)}
                               />
                    </div>
                    <div className="col text-center">
                    <button type="submit" className="btn btn-secondary">Atualizar Contato</button>
                   </div>                 
                </div>
            </form>
            <hr />
             <Link className='angora' to={"/contato"} >Voltar</Link>
            <hr />

        </div>
    )
}



export default Editar;
